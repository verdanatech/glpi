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

/* components/masonry_grid.html.twig */
class __TwigTemplate_1c7b94e699931d819da13fd040e6f6c2 extends Template
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
        if ( !array_key_exists("grid_item_class", $context)) {
            // line 34
            yield "   ";
            $context["grid_item_class"] = "col-xl-6";
        }
        // line 36
        yield "
";
        // line 37
        $context["rand"] = Twig\Extension\CoreExtension::random($this->env->getCharset());
        // line 38
        yield "<div id=\"grid_";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
        yield "\" class=\"masonry_grid row row-cards mb-5\">
   ";
        // line 39
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["grid_items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 40
            yield "      ";
            if ( !Twig\Extension\CoreExtension::testEmpty($context["item"])) {
                // line 41
                yield "         <div class=\"grid-item ";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["grid_item_class"] ?? null), "html", null, true);
                yield "\">
            ";
                // line 42
                yield $context["item"];
                yield "
         </div>
      ";
            }
            // line 45
            yield "   ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 46
        yield "</div>

<script type=\"text/javascript\">
\$(function() {
   window.msnry_grid_";
        // line 50
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
        yield " = new Masonry('#grid_";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
        yield "', {
      \"percentPosition\": true,
      \"horizontalOrder\": true,
   });

   \$('#grid_";
        // line 55
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
        yield "').on(\"layout:refresh\", function() {
       window.msnry_grid_";
        // line 56
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
        yield ".layout();
   });

   \$(document).on('masonry_grid:layout', function() {
       window.msnry_grid_";
        // line 60
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
        yield ".layout();
   })

});
</script>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "components/masonry_grid.html.twig";
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
        return array (  108 => 60,  101 => 56,  97 => 55,  87 => 50,  81 => 46,  75 => 45,  69 => 42,  64 => 41,  61 => 40,  57 => 39,  52 => 38,  50 => 37,  47 => 36,  43 => 34,  41 => 33,  38 => 32,);
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

{% if grid_item_class is not defined %}
   {% set grid_item_class = 'col-xl-6' %}
{% endif %}

{% set rand = random() %}
<div id=\"grid_{{ rand }}\" class=\"masonry_grid row row-cards mb-5\">
   {% for item in grid_items %}
      {% if item is not empty %}
         <div class=\"grid-item {{ grid_item_class }}\">
            {{ item|raw }}
         </div>
      {% endif %}
   {% endfor %}
</div>

<script type=\"text/javascript\">
\$(function() {
   window.msnry_grid_{{ rand }} = new Masonry('#grid_{{ rand }}', {
      \"percentPosition\": true,
      \"horizontalOrder\": true,
   });

   \$('#grid_{{ rand }}').on(\"layout:refresh\", function() {
       window.msnry_grid_{{ rand }}.layout();
   });

   \$(document).on('masonry_grid:layout', function() {
       window.msnry_grid_{{ rand }}.layout();
   })

});
</script>
", "components/masonry_grid.html.twig", "/var/www/html/glpi/templates/components/masonry_grid.html.twig");
    }
}
