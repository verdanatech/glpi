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

if (!defined('GLPI_ROOT')) {
    define('GLPI_ROOT', dirname(__DIR__));
}

use Glpi\Application\ErrorHandler;

$_GET["donotcheckversion"]   = true;
$dont_check_maintenance_mode = true;
$skip_db_check               = true;

//std cache, with DB connection
include_once GLPI_ROOT . "/inc/db.function.php";
include_once GLPI_ROOT . '/inc/config.php';

if (Toolbox::getMemoryLimit() < (128 * 1024 * 1024)) {
    // Main CSS compilation requires about 90MB of memory.
    // Increase it a bit to ensure it will not reach memory limit.
    ini_set('memory_limit', '128M');
}

// Ensure warnings will not break CSS output.
ErrorHandler::getInstance()->disableOutput();

$css = Html::compileScss($_GET);

header('Content-Type: text/css');

$is_cacheable = !isset($_GET['debug']) && !isset($_GET['nocache']);
if ($is_cacheable) {
   // Makes CSS cacheable by browsers and proxies
    $max_age = WEEK_TIMESTAMP;
    header_remove('Pragma');
    header('Cache-Control: public');
    header('Cache-Control: max-age=' . $max_age);
    header('Expires: ' . gmdate('D, d M Y H:i:s \G\M\T', time() + $max_age));
}

echo $css;
