<?php
/**
 * ---------------------------------------------------------------------
 * GLPI - Gestionnaire Libre de Parc Informatique
 * Copyright (C) 2015-2022 Teclib' and contributors.
 *
 * http://glpi-project.org
 *
 * based on GLPI - Gestionnaire Libre de Parc Informatique
 * Copyright (C) 2003-2014 by the INDEPNET Development Team.
 *
 * ---------------------------------------------------------------------
 *
 * LICENSE
 *
 * This file is part of GLPI.
 *
 * GLPI is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * GLPI is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with GLPI. If not, see <http://www.gnu.org/licenses/>.
 * ---------------------------------------------------------------------
 */

use Glpi\Application\ErrorHandler;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\TestHandler;
use Monolog\Formatter\LineFormatter;

if (!defined('GLPI_ROOT')) {
   die("Sorry. You can't access this file directly");
}

/**
 *  GLPI (instantiation and so on)
**/
class GLPI {

   private $error_handler;
   private $log_level;

   /**
    * Init logger
    *
    * @return void
    */
   public function initLogger() {
      global $PHPLOGGER, $PHP_LOG_HANDLER, $SQLLOGGER, $SQL_LOG_HANDLER;

      $this->log_level = Logger::WARNING;
      if (defined('TU_USER')) {
         $this->log_level = Logger::DEBUG;
      } else if (defined('GLPI_LOG_LVL')) {
         $this->log_level = GLPI_LOG_LVL;
      } else if (!isset($_SESSION['glpi_use_mode'])
         || ($_SESSION['glpi_use_mode'] == Session::DEBUG_MODE)
      ) {
         $this->log_level = Logger::DEBUG;
      }

      foreach (['php', 'sql'] as $type) {
         $logger = new Logger('glpi' . $type . 'log');
         if (defined('TU_USER')) {
            $handler = new TestHandler($this->log_level);
         } else {
            $handler = new StreamHandler(
               GLPI_LOG_DIR . "/{$type}-errors.log",
               $this->log_level
            );
            $formatter = new LineFormatter(null, 'Y-m-d H:i:s', true, true);
            $handler->setFormatter($formatter);
         }
         $logger->pushHandler($handler);
         switch ($type) {
            case 'php':
               $PHPLOGGER = $logger;
               $PHP_LOG_HANDLER = $handler;
               break;
            case 'sql':
               $SQLLOGGER = $logger;
               $SQL_LOG_HANDLER = $handler;
               break;
         }
      }
   }

   /**
    * Get log level
    *
    * @return string
    */
   public function getLogLevel() {
      return $this->log_level;
   }

   /**
    * Init and register error handler.
    *
    * @return ErrorHandler
    */
   public function initErrorHandler() {
      global $PHPLOGGER;

      $this->error_handler = new ErrorHandler($PHPLOGGER);
      $this->error_handler->register();

      return $this->error_handler;
   }

   /**
    * Get registered error handler.
    *
    * @return null|ErrorHandler
    */
   public function getErrorHandler() {
      return $this->error_handler;
   }
}
