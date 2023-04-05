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

/* Test for inc/NetworkPortMetrics.class.php */

class NetworkPortMetrics extends DbTestCase
{
    public function testNetworkPortithMetrics()
    {

        $neteq = new \NetworkEquipment();
        $neteq_id = $neteq->add([
            'name'   => 'My network equipment',
            'entities_id'  => 0
        ]);
        $this->integer($neteq_id)->isGreaterThan(0);

        $port = [
            'name'         => 'Gigabit0/1/2',
            'ifinerrors'   => 10,
            'ifouterrors'  => 50,
            'ifinbytes'    => 1076823325,
            'ifoutbytes'   => 2179528910,
            'ifspeed'      => 4294967295,
            'instanciation_type' => 'NetworkPortEthernet',
            'entities_id'  => 0,
            'items_id'     => $neteq_id,
            'itemtype'     => $neteq->getType(),
            'is_dynamic'   => 1,
            'ifmtu'        => 1000
        ];

        $netport = new \NetworkPort();
        $netports_id = $netport->add($port);
        $this->integer($netports_id)->isGreaterThan(0);

       //create port, check if metrics has been addded
        $metrics = new \NetworkPortMetrics();
        $values = $metrics->getMetrics($netport);
        $this->array($values)->hasSize(1);

        $value = array_pop($values);
        $expected = [
            'networkports_id' => $netports_id,
            'ifinerrors'   => 10,
            'ifouterrors'  => 50,
            'ifinbytes'    => 1076823325,
            'ifoutbytes'   => 2179528910,
            'date' => $value['date'],
            'id' => $value['id'],
            'date_creation' => $_SESSION['glpi_currenttime'],
            'date_mod' => $_SESSION['glpi_currenttime'],
        ];
        $this->array($value)->isEqualTo($expected);

       //update port, check metrics
        $port['ifmtu'] = 1500;
        $port['ifinbytes'] = 1056823325;
        $port['ifoutbytes'] = 2159528910;
        $port['ifinerrors'] = 0;
        $port['ifouterrors'] = 0;

        $this->boolean($netport->update($port + ['id' => $netports_id]))->isTrue();
        $values = $metrics->getMetrics($netport);
        $this->array($values)->hasSize(1); // Still 1 row, as there should be only one row per date

        $updated_value = array_pop($values);

        $expected = [
            'networkports_id' => $netports_id,
            'ifinerrors'   => 0,
            'ifouterrors'  => 0,
            'ifinbytes'    => 1056823325,
            'ifoutbytes'   => 2159528910,
            'date' => $value['date'],
            'id' => $value['id'],
            'date_creation' => $_SESSION['glpi_currenttime'],
            'date_mod' => $_SESSION['glpi_currenttime'],
        ];
        $this->array($updated_value)->isEqualTo($expected);

       //check logs => no bytes nor errors
        global $DB;
        $iterator = $DB->request([
            'FROM'   => \Log::getTable(),
            'WHERE'  => [
                'itemtype'  => 'NetworkPort'
            ]
        ]);

        $this->integer(count($iterator))->isIdenticalTo(2);
        foreach ($iterator as $row) {
            $this->integer($row['id_search_option'])
            ->isNotEqualTo(34) //ifinbytes SO from NetworkPort
            ->isNotEqualTo(35); //ifinerrors SO from NetworkPort
        }
    }
}
