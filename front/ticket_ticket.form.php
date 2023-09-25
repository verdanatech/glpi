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
 * @since 0.84
 */

use Glpi\Event;

include('../inc/includes.php');

$ticket_ticket = new Ticket_Ticket();

Session::checkCentralAccess();

if (isset($_POST['purge'])) {
    $ticket_ticket->check($_POST['id'], PURGE);

    $ticket_ticket->delete($_POST, 1);

    Event::log(
        $_POST['tickets_id'],
        "ticket",
        4,
        "tracking",
        //TRANS: %s is the user login
        sprintf(__('%s purges link between tickets'), $_SESSION["glpiname"])
    );
    Html::redirect(Ticket::getFormURLWithID($_POST['tickets_id']));
}
Html::displayErrorAndDie("lost");
