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

class ImpactItem extends \DbTestCase
{
    public function testFindForItem_inexistent()
    {
        $computer = getItemByTypeName('Computer', '_test_pc02');

        $this->boolean(\ImpactItem::findForItem($computer, false))->isFalse();
    }

    public function testFindForItem_exist()
    {
        $impactItemManager = new \ImpactItem();
        $computer = getItemByTypeName('Computer', '_test_pc02');

        $id = $impactItemManager->add([
            'itemtype'  => "Computer",
            'items_id'  => $computer->fields['id'],
            'parent_id' => 0,
        ]);

        $impactItem = \ImpactItem::findForItem($computer);
        $this->integer((int) $impactItem->fields['id'])->isEqualTo($id);
    }

    public function prepareInputForUpdateProvider()
    {
        return [
            [
                'input'  => ['max_depth' => "glpi"],
                'result' => \Impact::DEFAULT_DEPTH,
            ],
            [
                'input'  => ['max_depth' => 0],
                'result' => \Impact::DEFAULT_DEPTH,
            ],
            [
                'input'  => ['max_depth' => -58],
                'result' => \Impact::DEFAULT_DEPTH,
            ],
            [
                'input'  => ['max_depth' => 9],
                'result' => 9,
            ],
            [
                'input'  => ['max_depth' => 2],
                'result' => 2,
            ],
            [
                'input'  => ['max_depth' => 40],
                'result' => \Impact::NO_DEPTH_LIMIT,
            ],
            [
                'input'  => ['max_depth' => \Impact::NO_DEPTH_LIMIT],
                'result' => \Impact::NO_DEPTH_LIMIT,
            ],
        ];
    }

    /**
     * @dataProvider prepareInputForUpdateProvider
     */
    public function testPrepareInputForUpdate($input, $result)
    {
        $impact_item = new \ImpactItem();
        $input = $impact_item->prepareInputForUpdate($input);
        $this->array($input)->hasKey('max_depth');
        $this->integer($input['max_depth'])->isEqualTo($result);
    }
}
