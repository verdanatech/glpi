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

class CleanSoftwareCron extends DbTestCase
{
    public function testRun()
    {
        global $DB;

        $this->login();

        $software = new \Software();
        $software_version = new \SoftwareVersion();

        // Delete all existing software and versions
        $always_true = [
            new \QueryExpression('1 = 1')
        ];
        $this->boolean($software->deleteByCriteria($always_true, 1))->isTrue();
        $this->boolean($software_version->deleteByCriteria($always_true, 1))->isTrue();

        // verify all deleted
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \Software::getTable()
        ])->current()['cpt'])->isIdenticalTo(0);
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \SoftwareVersion::getTable()
        ])->current()['cpt'])->isIdenticalTo(0);

        // Create 100 software with 10 versions each
        $entities_id = getItemByTypeName('Entity', '_test_root_entity', true);
        for ($i = 0; $i < 100; $i++) {
            $software->add([
                'name' => "Software $i",
                'entities_id' => $entities_id,
            ]);
            $softwareId = $software->getID();
            for ($j = 0; $j < 10; $j++) {
                $software_version->add([
                    'name' => "Version $j",
                    'softwares_id' => $softwareId,
                ]);
            }
        }

        // verify all created
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \Software::getTable()
        ])->current()['cpt'])->isIdenticalTo(100);
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \SoftwareVersion::getTable()
        ])->current()['cpt'])->isIdenticalTo(1000);

        // Run cron
        \CleanSoftwareCron::run(5);
        // Verify only 5 versions were deleted and no software
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \Software::getTable()
        ])->current()['cpt'])->isIdenticalTo(100);
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \SoftwareVersion::getTable()
        ])->current()['cpt'])->isIdenticalTo(995);

        // Run cron again
        \CleanSoftwareCron::run(990);
        // Verify only 990 versions were deleted and no software
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \Software::getTable()
        ])->current()['cpt'])->isIdenticalTo(100);
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \SoftwareVersion::getTable()
        ])->current()['cpt'])->isIdenticalTo(5);

        // Run cron again
        \CleanSoftwareCron::run(50);
        // All versions should be deleted now and 45 software should be deleted as well
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \Software::getTable(),
            'WHERE' => [
                'is_deleted' => 0 // cleanup only trashes software, not purges them
            ]
        ])->current()['cpt'])->isIdenticalTo(55);
        $this->integer((int) $DB->request([
            'COUNT' => 'cpt',
            'FROM' => \SoftwareVersion::getTable()
        ])->current()['cpt'])->isIdenticalTo(0);
    }
}
