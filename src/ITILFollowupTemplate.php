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

/**
 * Template for followups
 * @since 9.5
 **/
class ITILFollowupTemplate extends AbstractITILChildTemplate
{
   // From CommonDBTM
    public $dohistory          = true;
    public $can_be_translated  = true;

    public static $rightname          = 'itilfollowuptemplate';

    public static function getTypeName($nb = 0)
    {
        return _n('Followup template', 'Followup templates', $nb);
    }


    public function getAdditionalFields()
    {
        return [
            [
                'name'  => 'requesttypes_id',
                'label' => __('Source of followup'),
                'type'  => 'dropdownValue',
                'list'  => true
            ], [
                'name'  => 'is_private',
                'label' => __('Private'),
                'type'  => 'bool'
            ], [
                'name'           => 'content',
                'label'          => __('Content'),
                'type'           => 'tinymce',
                // As content copying from template is not using the image pasting process, these images
                // are not correctly processed. Indeed, document item corresponding to the destination item is not created and
                // image src is not containing the ITIL item foreign key, so image will not be visible for helpdesk profiles.
                // As fixing it is really complex (requires lot of refactoring in images handling, both on JS and PHP side),
                // it is preferable to disable usage of images in templates.
                'disable_images' => true,
            ]
        ];
    }


    public function rawSearchOptions()
    {
        $tab = parent::rawSearchOptions();

        $tab[] = [
            'id'                 => '4',
            'name'               => __('Content'),
            'field'              => 'content',
            'table'              => self::getTable(),
            'datatype'           => 'text',
            'htmltext'           => true
        ];

        $tab[] = [
            'id'                 => '5',
            'name'               => __('Source of followup'),
            'field'              => 'name',
            'table'              => getTableForItemType('RequestType'),
            'datatype'           => 'dropdown'
        ];

        $tab[] = [
            'id'                 => '6',
            'name'               => __('Private'),
            'field'              => 'is_private',
            'table'              => self::getTable(),
            'datatype'           => 'bool'
        ];

        return $tab;
    }

    public static function getIcon()
    {
        return "fas fa-layer-group";
    }
}
