<?php

/**
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2023 Teclib' and contributors.
 * @copyright 2003-2014 by the INDEPNET Development Team.
 * @licence   https://www.gnu.org/licenses/gpl-3.0.html
 *
 * ---------------------------------------------------------------------
 *
 * LICENSE
 *
 * This file is part of GLPI.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * ---------------------------------------------------------------------
 */

namespace tests\units;

use DbTestCase;

/* Test for inc/telemetry.class.php NOT requiring the Web server*/

class Telemetry extends DbTestCase
{
    public function testGrabGlpiInfos()
    {
       //we do not want any error messages
        $_SESSION['glpicronuserrunning'] = "cron_phpunit";

        $expected = [
            'uuid'               => 'TO BE SET',
            'version'            => GLPI_VERSION,
            'plugins'            => [],
            'default_language'   => 'en_GB',
            'install_mode'       => GLPI_INSTALL_MODE,
            'usage'              => [
                'avg_entities'          => '0-500',
                'avg_computers'         => '0-500',
                'avg_networkequipments' => '0-500',
                'avg_tickets'           => '0-500',
                'avg_problems'          => '0-500',
                'avg_changes'           => '0-500',
                'avg_projects'          => '0-500',
                'avg_users'             => '0-500',
                'avg_groups'            => '0-500',
                'ldap_enabled'          => false,
                'mailcollector_enabled' => false,
                'notifications_modes'   => [],
            ]
        ];

        $result = \Telemetry::grabGlpiInfos();
        $this->string($result['uuid'])
         ->hasLength(40);
        $expected['uuid'] = $result['uuid'];
        $expected['plugins'] = $result['plugins'];
        $this->array($result)->isIdenticalTo($expected);

        $plugins = new \Plugin();
        $this->integer((int)$plugins->add(['directory' => 'testplugin',
            'name'      => 'testplugin',
            'version'   => '0.x.z'
        ]))
         ->isGreaterThan(0);

        $expected['plugins'][] = [
            'key'       => 'testplugin',
            'version'   => '0.x.z'
        ];
        $this->array(\Telemetry::grabGlpiInfos())->isIdenticalTo($expected);

       //enable ldap server
        $ldap = getItemByTypeName('AuthLDAP', '_local_ldap');
        $this->boolean($ldap->update([
            'id'        => $ldap->getID(),
            'is_active' => true
        ]))->isTrue();

        $expected['usage']['ldap_enabled'] = true;
        $this->array(\Telemetry::grabGlpiInfos())->isIdenticalTo($expected);

        $groups = new \Group();
        for ($i = 0; $i < 501; $i++) {
            $this->integer(
                (int)$groups->add(['name' => 'Tele test'])
            )->isGreaterThan(0);
        }

        $expected['usage']['avg_groups'] = '500-1000';
        $this->array(\Telemetry::grabGlpiInfos())->isIdenticalTo($expected);

        global $CFG_GLPI;
        $CFG_GLPI['use_notifications'] = 1;

        $this->array(\Telemetry::grabGlpiInfos())->isIdenticalTo($expected);

        $CFG_GLPI['notifications_mailing'] = 1;
        $CFG_GLPI['notifications_ajax']    = 1;
        $expected['usage']['notifications'] = ['mailing', 'ajax'];
        $this->array(\Telemetry::grabGlpiInfos())->isIdenticalTo($expected);

        $collector = new \MailCollector();
        $this->integer(
            (int)$collector->add([
                'name'        => 'Collector1',
                'is_active'   => 1
            ])
        )->isGreaterThan(0);

        $expected['usage']['mailcollector_enabled'] = true;
        $this->array(\Telemetry::grabGlpiInfos())->isIdenticalTo($expected);

        $this->boolean($collector->update([
            'id'        => $collector->getID(),
            'is_active' => false
        ]))->isTrue();

        $expected['usage']['mailcollector_enabled'] = false;
        $this->array(\Telemetry::grabGlpiInfos())->isIdenticalTo($expected);
    }

    public function testGrabDbInfos()
    {
        global $DB;

        $dbinfos = $DB->getInfo();

        $expected = [
            'engine'    => $dbinfos['Server Software'],
            'version'   => $dbinfos['Server Version'],
            'size'      => '',
            'log_size'  => '',
            'sql_mode'  => $dbinfos['Server SQL Mode']
        ];
        $infos = \Telemetry::grabDbInfos();
        $this->string($infos['size'])->isNotEmpty();
        $expected['size'] = $infos['size'];
        $this->array($infos)->isIdenticalTo($expected);
    }

    public function testGrabPhpInfos()
    {
        $expected = [
            'version'   => str_replace(PHP_EXTRA_VERSION, '', PHP_VERSION),
            'modules'   => get_loaded_extensions(),
            'setup'     => [
                'max_execution_time'    => ini_get('max_execution_time'),
                'memory_limit'          => ini_get('memory_limit'),
                'post_max_size'         => ini_get('post_max_size'),
                'safe_mode'             => ini_get('safe_mode'),
                'session'               => ini_get('session.save_handler'),
                'upload_max_filesize'   => ini_get('upload_max_filesize')
            ]
        ];

        $this->array(\Telemetry::grabPhpInfos())->isIdenticalTo($expected);
    }

    public function testGrabOsInfos()
    {
        $expected = [
            'family',
            'distribution',
            'version'
        ];
        $osinfos = \Telemetry::grabOsInfos();
        $this->array($osinfos)->hasKeys($expected);
    }
}
