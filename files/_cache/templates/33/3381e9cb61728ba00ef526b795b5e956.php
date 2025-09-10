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

/* components/debug/debug_toolbar.html.twig */
class __TwigTemplate_95c976719466e7c01867585614d0b06c extends Template
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
        $macros["_self"] = $this->macros["_self"] = $this;
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 32
        yield "
";
        // line 33
        $context["rand"] = ((array_key_exists("rand", $context)) ? (Twig\Extension\CoreExtension::default(($context["rand"] ?? null), Twig\Extension\CoreExtension::random($this->env->getCharset()))) : (Twig\Extension\CoreExtension::random($this->env->getCharset())));
        // line 34
        yield "
";
        // line 45
        yield "
<div id=\"debug-toolbar\" class=\"position-fixed bottom-0 w-100 card\" tabindex=\"0\">
   <div class=\"resize-handle mt-n2\" style=\"cursor: row-resize; height: 10px; z-index: 1030\"></div>
   <div class=\"d-flex flex-row align-items-center\">
      <div class=\"debug-toolbar-badge d-flex\">
         <button type=\"button\" class=\"btn btn-icon border-0 px-3 opacity-100 debug-logo\" onclick=\"GLPI.Debug.showDebugToolbar();\" disabled>
            <i class=\"ti ti-bug\"></i>
         </button>
      </div>
      <div class=\"debug-toolbar-content d-flex w-100 justify-content-between align-items-center\">
         <ul class=\"debug-toolbar-widgets nav nav-tabs align-items-center border-0\" data-bs-toggle=\"tabs\">
            ";
        // line 56
        yield CoreExtension::callMacro($macros["_self"], "macro_widget_button", ["server_performance", "Server performance", "ti ti-clock-play"], 56, $context, $this->getSourceContext());
        yield "
            ";
        // line 57
        yield CoreExtension::callMacro($macros["_self"], "macro_widget_button", ["sql", "SQL Requests", "ti ti-database"], 57, $context, $this->getSourceContext());
        yield "
            ";
        // line 58
        yield CoreExtension::callMacro($macros["_self"], "macro_widget_button", ["requests", "HTTP Requests", "ti ti-refresh"], 58, $context, $this->getSourceContext());
        yield "
            ";
        // line 59
        yield CoreExtension::callMacro($macros["_self"], "macro_widget_button", ["client_performance", "Client performance", "ti ti-brand-javascript"], 59, $context, $this->getSourceContext());
        yield "
         </ul>
         <div class=\"debug-toolbar-controls\">
            <div class=\"debug-toolbar-control\">
               <button type=\"button\" class=\"btn btn-icon border-0 p-1\" name=\"toggle_content_area\" onclick=\"GLPI.Debug.toggleExtraContentArea();\">
                  <i class=\"ti ti-square-arrow-up\"></i>
               </button>
               <button type=\"button\" class=\"btn btn-icon border-0 p-1\" title=\"";
        // line 66
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Close"), "html", null, true);
        yield "\" onclick=\"GLPI.Debug.hideDebugToolbar();\">
                  <i class=\"ti ti-square-x\"></i>
               </button>
            </div>
         </div>
      </div>
   </div>
   <div id=\"debug-toolbar-expanded-content\" class=\"w-100 card d-none pe-2\">
   </div>
</div>
<script>
    \$(document).on('ready', () => {
        window.GLPI.Debug.init(";
        // line 78
        yield json_encode(($context["debug_info"] ?? null));
        yield ");
    });
</script>
";
        return; yield '';
    }

    // line 35
    public function macro_widget_button($__id__ = null, $__title__ = null, $__icon__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "id" => $__id__,
            "title" => $__title__,
            "icon" => $__icon__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        return ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 36
            yield "   <li class=\"debug-toolbar-widget d-inline-block p-2\" data-glpi-debug-widget-id=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["id"] ?? null), "html", null, true);
            yield "\">
      <button type=\"button\" class=\"btn btn-icon border-0 p-1\" title=\"";
            // line 37
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["title"] ?? null), "html", null, true);
            yield "\" data-bs-toggle=\"tab\">
         ";
            // line 38
            if ((($context["icon"] ?? null) != null)) {
                // line 39
                yield "            <i class=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["icon"] ?? null), "html", null, true);
                yield " me-1\"></i>
         ";
            }
            // line 41
            yield "         <span class=\"debug-text\"></span>
      </button>
   </li>
";
            return; yield '';
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "components/debug/debug_toolbar.html.twig";
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
        return array (  137 => 41,  131 => 39,  129 => 38,  125 => 37,  120 => 36,  106 => 35,  97 => 78,  82 => 66,  72 => 59,  68 => 58,  64 => 57,  60 => 56,  47 => 45,  44 => 34,  42 => 33,  39 => 32,);
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

{% set rand = rand|default(random()) %}

{% macro widget_button(id, title, icon = null) %}
   <li class=\"debug-toolbar-widget d-inline-block p-2\" data-glpi-debug-widget-id=\"{{ id }}\">
      <button type=\"button\" class=\"btn btn-icon border-0 p-1\" title=\"{{ title }}\" data-bs-toggle=\"tab\">
         {% if icon != null %}
            <i class=\"{{ icon }} me-1\"></i>
         {% endif %}
         <span class=\"debug-text\"></span>
      </button>
   </li>
{% endmacro %}

<div id=\"debug-toolbar\" class=\"position-fixed bottom-0 w-100 card\" tabindex=\"0\">
   <div class=\"resize-handle mt-n2\" style=\"cursor: row-resize; height: 10px; z-index: 1030\"></div>
   <div class=\"d-flex flex-row align-items-center\">
      <div class=\"debug-toolbar-badge d-flex\">
         <button type=\"button\" class=\"btn btn-icon border-0 px-3 opacity-100 debug-logo\" onclick=\"GLPI.Debug.showDebugToolbar();\" disabled>
            <i class=\"ti ti-bug\"></i>
         </button>
      </div>
      <div class=\"debug-toolbar-content d-flex w-100 justify-content-between align-items-center\">
         <ul class=\"debug-toolbar-widgets nav nav-tabs align-items-center border-0\" data-bs-toggle=\"tabs\">
            {{ _self.widget_button('server_performance', 'Server performance', 'ti ti-clock-play') }}
            {{ _self.widget_button('sql', 'SQL Requests', 'ti ti-database') }}
            {{ _self.widget_button('requests', 'HTTP Requests', 'ti ti-refresh') }}
            {{ _self.widget_button('client_performance', 'Client performance', 'ti ti-brand-javascript') }}
         </ul>
         <div class=\"debug-toolbar-controls\">
            <div class=\"debug-toolbar-control\">
               <button type=\"button\" class=\"btn btn-icon border-0 p-1\" name=\"toggle_content_area\" onclick=\"GLPI.Debug.toggleExtraContentArea();\">
                  <i class=\"ti ti-square-arrow-up\"></i>
               </button>
               <button type=\"button\" class=\"btn btn-icon border-0 p-1\" title=\"{{ __('Close') }}\" onclick=\"GLPI.Debug.hideDebugToolbar();\">
                  <i class=\"ti ti-square-x\"></i>
               </button>
            </div>
         </div>
      </div>
   </div>
   <div id=\"debug-toolbar-expanded-content\" class=\"w-100 card d-none pe-2\">
   </div>
</div>
<script>
    \$(document).on('ready', () => {
        window.GLPI.Debug.init({{ debug_info|json_encode|raw }});
    });
</script>
", "components/debug/debug_toolbar.html.twig", "/var/www/html/glpi/templates/components/debug/debug_toolbar.html.twig");
    }
}
