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

/* central/messages.html.twig */
class __TwigTemplate_b7a059f5b5c447f135c7df95d11af02f extends Template
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
<div class=\"message-area\">
   ";
        // line 34
        if ((CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "errors", [], "any", true, true, false, 34) && (Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "errors", [], "any", false, false, false, 34)) > 0))) {
            // line 35
            yield "      <div class=\"alert alert-important alert-danger d-flex\" role=\"alert\">
         <i class=\"fas fa-3x fa-exclamation-triangle\"></i>
         <ul>
            ";
            // line 38
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "errors", [], "any", false, false, false, 38));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 39
                yield "               <li>";
                yield $context["error"];
                yield "</li>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 41
            yield "         </ul>
      </div>
   ";
        }
        // line 44
        yield "   ";
        if ((CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "warnings", [], "any", true, true, false, 44) && (Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "warnings", [], "any", false, false, false, 44)) > 0))) {
            // line 45
            yield "      <div class=\"alert alert-important alert-warning d-flex\" role=\"alert\">
         <i class=\"fas fa-3x fa-exclamation-triangle\"></i>
         <ul>
            ";
            // line 48
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "warnings", [], "any", false, false, false, 48));
            foreach ($context['_seq'] as $context["_key"] => $context["warning"]) {
                // line 49
                yield "               <li>";
                yield $context["warning"];
                yield "</li>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['warning'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 51
            yield "         </ul>
      </div>
   ";
        }
        // line 54
        yield "   ";
        if ((CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "infos", [], "any", true, true, false, 54) && (Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "infos", [], "any", false, false, false, 54)) > 0))) {
            // line 55
            yield "      <div class=\"alert alert-important alert-info d-flex\" role=\"alert\">
         <i class=\"fas fa-3x fa-info-circle\"></i>
         <ul>
            ";
            // line 58
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, ($context["messages"] ?? null), "infos", [], "any", false, false, false, 58));
            foreach ($context['_seq'] as $context["_key"] => $context["info"]) {
                // line 59
                yield "               <li>";
                yield $context["info"];
                yield "</li>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['info'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 61
            yield "         </ul>
      </div>
   ";
        }
        // line 64
        yield "</div>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "central/messages.html.twig";
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
        return array (  119 => 64,  114 => 61,  105 => 59,  101 => 58,  96 => 55,  93 => 54,  88 => 51,  79 => 49,  75 => 48,  70 => 45,  67 => 44,  62 => 41,  53 => 39,  49 => 38,  44 => 35,  42 => 34,  38 => 32,);
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

<div class=\"message-area\">
   {% if messages.errors is defined and messages.errors|length > 0 %}
      <div class=\"alert alert-important alert-danger d-flex\" role=\"alert\">
         <i class=\"fas fa-3x fa-exclamation-triangle\"></i>
         <ul>
            {% for error in messages.errors %}
               <li>{{ error|raw }}</li>
            {% endfor %}
         </ul>
      </div>
   {% endif %}
   {% if messages.warnings is defined and messages.warnings|length > 0 %}
      <div class=\"alert alert-important alert-warning d-flex\" role=\"alert\">
         <i class=\"fas fa-3x fa-exclamation-triangle\"></i>
         <ul>
            {% for warning in messages.warnings %}
               <li>{{ warning|raw }}</li>
            {% endfor %}
         </ul>
      </div>
   {% endif %}
   {% if messages.infos is defined and messages.infos|length > 0 %}
      <div class=\"alert alert-important alert-info d-flex\" role=\"alert\">
         <i class=\"fas fa-3x fa-info-circle\"></i>
         <ul>
            {% for info in messages.infos %}
               <li>{{ info|raw }}</li>
            {% endfor %}
         </ul>
      </div>
   {% endif %}
</div>
", "central/messages.html.twig", "/var/www/html/glpi/templates/central/messages.html.twig");
    }
}
