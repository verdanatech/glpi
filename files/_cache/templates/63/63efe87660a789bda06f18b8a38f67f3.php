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

/* central/lists/itemtype_count.html.twig */
class __TwigTemplate_2036d2bd5d814c14415dbf10035a0edc extends Template
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
        // line 50
        yield "
<div class=\"card\">
   <div class=\"card-body\">
      <div class=\"card-title d-flex justify-content-between\">
         ";
        // line 54
        yield CoreExtension::callMacro($macros["_self"], "macro_link_or_text", [($context["title"] ?? null)], 54, $context, $this->getSourceContext());
        yield "

         ";
        // line 56
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["title"] ?? null), "button", [], "any", true, true, false, 56)) {
            // line 57
            yield "            ";
            yield CoreExtension::callMacro($macros["_self"], "macro_link_or_text", [CoreExtension::getAttribute($this->env, $this->source, ($context["title"] ?? null), "button", [], "any", false, false, false, 57), "btn btn-sm btn-outline-secondary"], 57, $context, $this->getSourceContext());
            yield "
         ";
        }
        // line 59
        yield "      </div>

      ";
        // line 61
        if (array_key_exists("subtitle", $context)) {
            // line 62
            yield "         <div class=\"card-subtitle\">
            ";
            // line 63
            yield CoreExtension::callMacro($macros["_self"], "macro_link_or_text", [($context["subtitle"] ?? null)], 63, $context, $this->getSourceContext());
            yield "
         </div>
      ";
        }
        // line 66
        yield "   </div>


   <ul class=\"list-group list-group-flush\">
      ";
        // line 70
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 71
            yield "         ";
            yield CoreExtension::callMacro($macros["_self"], "macro_link_or_text", [$context["item"], "list-group-item list-group-item-action d-flex justify-content-between align-items-center"], 71, $context, $this->getSourceContext());
            yield "
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 73
        yield "   </ul>
</div>
";
        return; yield '';
    }

    // line 33
    public function macro_link_or_text($__value__ = null, $__anchor_class__ = "", ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "value" => $__value__,
            "anchor_class" => $__anchor_class__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        return ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 34
            yield "   ";
            if (CoreExtension::getAttribute($this->env, $this->source, ($context["value"] ?? null), "link", [], "any", true, true, false, 34)) {
                // line 35
                yield "      <a class=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["anchor_class"] ?? null), "html", null, true);
                yield "\" href=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, ($context["value"] ?? null), "link", [], "any", false, false, false, 35), "html", null, true);
                yield "\">
   ";
            }
            // line 37
            yield "         <span>
            ";
            // line 38
            if (CoreExtension::getAttribute($this->env, $this->source, ($context["value"] ?? null), "icon", [], "any", true, true, false, 38)) {
                // line 39
                yield "               <i class=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, ($context["value"] ?? null), "icon", [], "any", false, false, false, 39), "html", null, true);
                yield "\"></i>
            ";
            }
            // line 41
            yield "            ";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, ($context["value"] ?? null), "text", [], "any", false, false, false, 41), "html", null, true);
            yield "
         </span>
         ";
            // line 43
            if (CoreExtension::getAttribute($this->env, $this->source, ($context["value"] ?? null), "count", [], "any", true, true, false, 43)) {
                // line 44
                yield "            <span class=\"badge bg-secondary\">";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, ($context["value"] ?? null), "count", [], "any", false, false, false, 44), "html", null, true);
                yield "</span>
         ";
            }
            // line 46
            yield "   ";
            if (CoreExtension::getAttribute($this->env, $this->source, ($context["value"] ?? null), "link", [], "any", true, true, false, 46)) {
                // line 47
                yield "      </a>
   ";
            }
            return; yield '';
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "central/lists/itemtype_count.html.twig";
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
        return array (  154 => 47,  151 => 46,  145 => 44,  143 => 43,  137 => 41,  131 => 39,  129 => 38,  126 => 37,  118 => 35,  115 => 34,  102 => 33,  95 => 73,  86 => 71,  82 => 70,  76 => 66,  70 => 63,  67 => 62,  65 => 61,  61 => 59,  55 => 57,  53 => 56,  48 => 54,  42 => 50,  39 => 32,);
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

{% macro link_or_text(value, anchor_class = '') %}
   {% if value.link is defined %}
      <a class=\"{{ anchor_class }}\" href=\"{{ value.link }}\">
   {% endif %}
         <span>
            {% if value.icon is defined %}
               <i class=\"{{ value.icon }}\"></i>
            {% endif %}
            {{ value.text }}
         </span>
         {% if value.count is defined %}
            <span class=\"badge bg-secondary\">{{ value.count }}</span>
         {% endif %}
   {% if value.link is defined %}
      </a>
   {% endif %}
{% endmacro %}

<div class=\"card\">
   <div class=\"card-body\">
      <div class=\"card-title d-flex justify-content-between\">
         {{ _self.link_or_text(title) }}

         {% if title.button is defined %}
            {{ _self.link_or_text(title.button, 'btn btn-sm btn-outline-secondary') }}
         {% endif %}
      </div>

      {% if subtitle is defined %}
         <div class=\"card-subtitle\">
            {{ _self.link_or_text(subtitle) }}
         </div>
      {% endif %}
   </div>


   <ul class=\"list-group list-group-flush\">
      {% for item in items %}
         {{ _self.link_or_text(item, 'list-group-item list-group-item-action d-flex justify-content-between align-items-center') }}
      {% endfor %}
   </ul>
</div>
", "central/lists/itemtype_count.html.twig", "/var/www/html/glpi/templates/central/lists/itemtype_count.html.twig");
    }
}
