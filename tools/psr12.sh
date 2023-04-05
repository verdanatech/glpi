#!/bin/bash

#
# ---------------------------------------------------------------------
#
# GLPI - Gestionnaire Libre de Parc Informatique
#
# http://glpi-project.org
#
# @copyright 2015-2023 Teclib' and contributors.
# @copyright 2003-2014 by the INDEPNET Development Team.
# @licence   https://www.gnu.org/licenses/gpl-3.0.html
#
# ---------------------------------------------------------------------
#
# LICENSE
#
# This file is part of GLPI.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
# ---------------------------------------------------------------------
#

#phpcbf
vendor/bin/phpcbf

#methods visibility
sed -E "s/^( +)(final )?(abstract )?(static )?function /\\1public \\2\\3\\4function /g" -i ajax/**/*.php front/**/*.php inc/**/*.php install/**/*.php lib/**/*.php src/**/*.php tests/**/*.php

#properties visibility
sed -E "s/^(   ?)( static )?( var )?\\$/\\1public\\2 \\$/g" -i ajax/**/*.php front/**/*.php inc/**/*.php install/**/*.php lib/**/*.php src/**/*.php tests/**/*.php

#useless comments
sed -E "s/}(( )?\/\/.*)/}/g" -i ajax/**/*.php front/**/*.php inc/**/*.php install/**/*.php lib/**/*.php src/**/*.php tests/**/*.php

#phpcbf
vendor/bin/phpcbf
vendor/bin/phpcs
