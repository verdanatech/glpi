<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* layout/parts/goto_button.html.twig */
class __TwigTemplate_2cd189ddd84f17d942a7aaf0fcc785d5 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 32
        yield "
";
        // line 33
        if (($this->extensions['Glpi\Application\View\Extension\SessionExtension']->getCurrentInterface() == "central")) {
            // line 34
            yield "    ";
            $context["shortcut"] = __("Ctrl+Alt+G");
            // line 35
            yield "    ";
            if ((($context["platform"] ?? null) == Twig\Extension\CoreExtension::constant("donatj\\UserAgent\\Platforms::MACINTOSH"))) {
                // line 36
                yield "        ";
                $context["shortcut"] = __("Option+Command+G");
                // line 37
                yield "    ";
            }
            // line 38
            yield "
   <button class=\"btn btn-icon btn-sm btn-ghost-secondary trigger-fuzzy justify-content-start mb-md-2 ps-1\"
           title=\"";
            // line 40
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["shortcut"] ?? null), "html", null, true);
            yield "\"
           data-bs-toggle=\"tooltip\"
           data-bs-placement=\"right\">
      <i class=\"ti ti-arrow-big-right me-1\"></i>
      <span class=\"menu-label ";
            // line 44
            yield (( !($context["is_vertical"] ?? null)) ? ("d-block d-xl-none d-xxl-block") : (""));
            yield "\">
         ";
            // line 45
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Find menu"), "html", null, true);
            yield "
      </span>
   </button>
";
        }
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "layout/parts/goto_button.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  70 => 45,  66 => 44,  59 => 40,  55 => 38,  52 => 37,  49 => 36,  46 => 35,  43 => 34,  41 => 33,  38 => 32,);
    }

    public function getSourceContext()
    {
        return new Source("{#
 # ---------------------------------------------------------------------
 #
 # GLPI - Gestionnaire Libre de Parc Informatique
 #
 # http://glpi-project.org
 #
 # @copyright 2015-2025 Teclib' and contributors.
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
 #}

{% if get_current_interface() == 'central' %}
    {% set shortcut = __('Ctrl+Alt+G') %}
    {% if platform == constant(\"donatj\\\\UserAgent\\\\Platforms::MACINTOSH\") %}
        {% set shortcut = __('Option+Command+G') %}
    {% endif %}

   <button class=\"btn btn-icon btn-sm btn-ghost-secondary trigger-fuzzy justify-content-start mb-md-2 ps-1\"
           title=\"{{ shortcut }}\"
           data-bs-toggle=\"tooltip\"
           data-bs-placement=\"right\">
      <i class=\"ti ti-arrow-big-right me-1\"></i>
      <span class=\"menu-label {{ not is_vertical ? \"d-block d-xl-none d-xxl-block\" : \"\" }}\">
         {{ __('Find menu') }}
      </span>
   </button>
{% endif %}
", "layout/parts/goto_button.html.twig", "/var/www/html/glpi/templates/layout/parts/goto_button.html.twig");
    }
}
