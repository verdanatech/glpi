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

/* layout/parts/breadcrumbs.html.twig */
class __TwigTemplate_2fe59f88b742cc342414263af6241d6e extends Template
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
<ol class=\"breadcrumb breadcrumb-alternate pe-1 pe-sm-3\" aria-label=\"breadcrumbs\">
   <li class=\"breadcrumb-item text-truncate\">
      <a href=\"";
        // line 35
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->indexPath(), "html", null, true);
        yield "\" title=\"";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Home"), "html", null, true);
        yield "\">
         <i class=\"ti ti-home-2\"></i>
         ";
        // line 37
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Home"), "html", null, true);
        yield "
      </a>
   </li>

   ";
        // line 41
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", true, true, false, 41)) {
            // line 42
            yield "   <li class=\"breadcrumb-item text-truncate\">
      <a href=\"";
            // line 43
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path((((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 43), "default", [], "array", true, true, false, 43) &&  !(null === (($__internal_compile_0 = CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 43)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["default"] ?? null) : null)))) ? ((($__internal_compile_1 = CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 43)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1["default"] ?? null) : null)) : ("/front/central.php"))), "html", null, true);
            yield "\" title=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_2 = (($__internal_compile_3 = ($context["menu"] ?? null)) && is_array($__internal_compile_3) || $__internal_compile_3 instanceof ArrayAccess ? ($__internal_compile_3[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_2) || $__internal_compile_2 instanceof ArrayAccess ? ($__internal_compile_2["title"] ?? null) : null), "html", null, true);
            yield "\">
         <i class=\"";
            // line 44
            (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 44), "icon", [], "array", true, true, false, 44) &&  !(null === (($__internal_compile_4 = CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 44)) && is_array($__internal_compile_4) || $__internal_compile_4 instanceof ArrayAccess ? ($__internal_compile_4["icon"] ?? null) : null)))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_5 = CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 44)) && is_array($__internal_compile_5) || $__internal_compile_5 instanceof ArrayAccess ? ($__internal_compile_5["icon"] ?? null) : null), "html", null, true)) : (yield ""));
            yield "\"></i>
         ";
            // line 45
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_6 = (($__internal_compile_7 = ($context["menu"] ?? null)) && is_array($__internal_compile_7) || $__internal_compile_7 instanceof ArrayAccess ? ($__internal_compile_7[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_6) || $__internal_compile_6 instanceof ArrayAccess ? ($__internal_compile_6["title"] ?? null) : null), "html", null, true);
            yield "
      </a>
   </li>
   ";
        }
        // line 49
        yield "
   ";
        // line 50
        $context["with_option"] = false;
        // line 51
        yield "   ";
        if (CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 51), "content", [], "array", false, true, false, 51), ($context["item"] ?? null), [], "array", true, true, false, 51)) {
            // line 52
            yield "      ";
            if (CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 52), "content", [], "array", false, true, false, 52), ($context["item"] ?? null), [], "array", false, true, false, 52), "page", [], "array", true, true, false, 52)) {
                // line 53
                yield "      ";
                $context["with_option"] = (( !Twig\Extension\CoreExtension::testEmpty(($context["option"] ?? null)) && CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 53), "content", [], "array", false, true, false, 53), ($context["item"] ?? null), [], "array", false, true, false, 53), "options", [], "array", false, true, false, 53), ($context["option"] ?? null), [], "array", false, true, false, 53), "title", [], "array", true, true, false, 53)) && CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 53), "content", [], "array", false, true, false, 53), ($context["item"] ?? null), [], "array", false, true, false, 53), "options", [], "array", false, true, false, 53), ($context["option"] ?? null), [], "array", false, true, false, 53), "page", [], "array", true, true, false, 53));
                // line 54
                yield "      <li class=\"breadcrumb-item text-truncate\">
         <a href=\"";
                // line 55
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path((($__internal_compile_8 = (($__internal_compile_9 = (($__internal_compile_10 = (($__internal_compile_11 = ($context["menu"] ?? null)) && is_array($__internal_compile_11) || $__internal_compile_11 instanceof ArrayAccess ? ($__internal_compile_11[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_10) || $__internal_compile_10 instanceof ArrayAccess ? ($__internal_compile_10["content"] ?? null) : null)) && is_array($__internal_compile_9) || $__internal_compile_9 instanceof ArrayAccess ? ($__internal_compile_9[($context["item"] ?? null)] ?? null) : null)) && is_array($__internal_compile_8) || $__internal_compile_8 instanceof ArrayAccess ? ($__internal_compile_8["page"] ?? null) : null)), "html", null, true);
                yield "\"
            class=\"";
                // line 56
                yield ((($context["with_option"] ?? null)) ? ("") : ("here"));
                yield "\"
            title=\"";
                // line 57
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_12 = (($__internal_compile_13 = (($__internal_compile_14 = (($__internal_compile_15 = ($context["menu"] ?? null)) && is_array($__internal_compile_15) || $__internal_compile_15 instanceof ArrayAccess ? ($__internal_compile_15[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_14) || $__internal_compile_14 instanceof ArrayAccess ? ($__internal_compile_14["content"] ?? null) : null)) && is_array($__internal_compile_13) || $__internal_compile_13 instanceof ArrayAccess ? ($__internal_compile_13[($context["item"] ?? null)] ?? null) : null)) && is_array($__internal_compile_12) || $__internal_compile_12 instanceof ArrayAccess ? ($__internal_compile_12["title"] ?? null) : null), "html", null, true);
                yield "\" >
            <i class=\"";
                // line 58
                (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 58), "content", [], "array", false, true, false, 58), ($context["item"] ?? null), [], "array", false, true, false, 58), "icon", [], "array", true, true, false, 58) &&  !(null === (($__internal_compile_16 = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 58), "content", [], "array", false, true, false, 58), ($context["item"] ?? null), [], "array", false, true, false, 58)) && is_array($__internal_compile_16) || $__internal_compile_16 instanceof ArrayAccess ? ($__internal_compile_16["icon"] ?? null) : null)))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_17 = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 58), "content", [], "array", false, true, false, 58), ($context["item"] ?? null), [], "array", false, true, false, 58)) && is_array($__internal_compile_17) || $__internal_compile_17 instanceof ArrayAccess ? ($__internal_compile_17["icon"] ?? null) : null), "html", null, true)) : (yield ""));
                yield "\"></i>
            ";
                // line 59
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_18 = (($__internal_compile_19 = (($__internal_compile_20 = (($__internal_compile_21 = ($context["menu"] ?? null)) && is_array($__internal_compile_21) || $__internal_compile_21 instanceof ArrayAccess ? ($__internal_compile_21[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_20) || $__internal_compile_20 instanceof ArrayAccess ? ($__internal_compile_20["content"] ?? null) : null)) && is_array($__internal_compile_19) || $__internal_compile_19 instanceof ArrayAccess ? ($__internal_compile_19[($context["item"] ?? null)] ?? null) : null)) && is_array($__internal_compile_18) || $__internal_compile_18 instanceof ArrayAccess ? ($__internal_compile_18["title"] ?? null) : null), "html", null, true);
                yield "
         </a>
      </li>
      ";
            }
            // line 63
            yield "
      ";
            // line 64
            if (($context["with_option"] ?? null)) {
                // line 65
                yield "      <li class=\"breadcrumb-item text-truncate\">
         <a href=\"";
                // line 66
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path((($__internal_compile_22 = (($__internal_compile_23 = (($__internal_compile_24 = (($__internal_compile_25 = (($__internal_compile_26 = (($__internal_compile_27 = ($context["menu"] ?? null)) && is_array($__internal_compile_27) || $__internal_compile_27 instanceof ArrayAccess ? ($__internal_compile_27[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_26) || $__internal_compile_26 instanceof ArrayAccess ? ($__internal_compile_26["content"] ?? null) : null)) && is_array($__internal_compile_25) || $__internal_compile_25 instanceof ArrayAccess ? ($__internal_compile_25[($context["item"] ?? null)] ?? null) : null)) && is_array($__internal_compile_24) || $__internal_compile_24 instanceof ArrayAccess ? ($__internal_compile_24["options"] ?? null) : null)) && is_array($__internal_compile_23) || $__internal_compile_23 instanceof ArrayAccess ? ($__internal_compile_23[($context["option"] ?? null)] ?? null) : null)) && is_array($__internal_compile_22) || $__internal_compile_22 instanceof ArrayAccess ? ($__internal_compile_22["page"] ?? null) : null)), "html", null, true);
                yield "\"
            class=\"here\"
            title=\"";
                // line 68
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_28 = (($__internal_compile_29 = (($__internal_compile_30 = (($__internal_compile_31 = (($__internal_compile_32 = (($__internal_compile_33 = ($context["menu"] ?? null)) && is_array($__internal_compile_33) || $__internal_compile_33 instanceof ArrayAccess ? ($__internal_compile_33[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_32) || $__internal_compile_32 instanceof ArrayAccess ? ($__internal_compile_32["content"] ?? null) : null)) && is_array($__internal_compile_31) || $__internal_compile_31 instanceof ArrayAccess ? ($__internal_compile_31[($context["item"] ?? null)] ?? null) : null)) && is_array($__internal_compile_30) || $__internal_compile_30 instanceof ArrayAccess ? ($__internal_compile_30["options"] ?? null) : null)) && is_array($__internal_compile_29) || $__internal_compile_29 instanceof ArrayAccess ? ($__internal_compile_29[($context["option"] ?? null)] ?? null) : null)) && is_array($__internal_compile_28) || $__internal_compile_28 instanceof ArrayAccess ? ($__internal_compile_28["title"] ?? null) : null), "html", null, true);
                yield "\" >
            <i class=\"";
                // line 69
                (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 69), "content", [], "array", false, true, false, 69), ($context["item"] ?? null), [], "array", false, true, false, 69), "options", [], "array", false, true, false, 69), ($context["option"] ?? null), [], "array", false, true, false, 69), "icon", [], "array", true, true, false, 69) &&  !(null === (($__internal_compile_34 = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 69), "content", [], "array", false, true, false, 69), ($context["item"] ?? null), [], "array", false, true, false, 69), "options", [], "array", false, true, false, 69), ($context["option"] ?? null), [], "array", false, true, false, 69)) && is_array($__internal_compile_34) || $__internal_compile_34 instanceof ArrayAccess ? ($__internal_compile_34["icon"] ?? null) : null)))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_35 = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 69), "content", [], "array", false, true, false, 69), ($context["item"] ?? null), [], "array", false, true, false, 69), "options", [], "array", false, true, false, 69), ($context["option"] ?? null), [], "array", false, true, false, 69)) && is_array($__internal_compile_35) || $__internal_compile_35 instanceof ArrayAccess ? ($__internal_compile_35["icon"] ?? null) : null), "html", null, true)) : (yield ""));
                yield "\"></i>
            ";
                // line 70
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $this->extensions['Twig\Extra\String\StringExtension']->createUnicodeString((($__internal_compile_36 = (($__internal_compile_37 = (($__internal_compile_38 = (($__internal_compile_39 = (($__internal_compile_40 = (($__internal_compile_41 = ($context["menu"] ?? null)) && is_array($__internal_compile_41) || $__internal_compile_41 instanceof ArrayAccess ? ($__internal_compile_41[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_40) || $__internal_compile_40 instanceof ArrayAccess ? ($__internal_compile_40["content"] ?? null) : null)) && is_array($__internal_compile_39) || $__internal_compile_39 instanceof ArrayAccess ? ($__internal_compile_39[($context["item"] ?? null)] ?? null) : null)) && is_array($__internal_compile_38) || $__internal_compile_38 instanceof ArrayAccess ? ($__internal_compile_38["options"] ?? null) : null)) && is_array($__internal_compile_37) || $__internal_compile_37 instanceof ArrayAccess ? ($__internal_compile_37[($context["option"] ?? null)] ?? null) : null)) && is_array($__internal_compile_36) || $__internal_compile_36 instanceof ArrayAccess ? ($__internal_compile_36["title"] ?? null) : null)), "truncate", [17, "..."], "method", false, false, false, 70), "html", null, true);
                yield "
         </a>
      </li>
      ";
            }
            // line 74
            yield "
   ";
        }
        // line 76
        yield "</ol>

";
        // line 78
        if (CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["menu"] ?? null), ($context["sector"] ?? null), [], "array", false, true, false, 78), "content", [], "array", false, true, false, 78), ($context["item"] ?? null), [], "array", true, true, false, 78)) {
            // line 79
            yield "    ";
            yield Twig\Extension\CoreExtension::include($this->env, $context, "layout/parts/context_links.html.twig");
            yield "
";
        }
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "layout/parts/breadcrumbs.html.twig";
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
        return array (  157 => 79,  155 => 78,  151 => 76,  147 => 74,  140 => 70,  136 => 69,  132 => 68,  127 => 66,  124 => 65,  122 => 64,  119 => 63,  112 => 59,  108 => 58,  104 => 57,  100 => 56,  96 => 55,  93 => 54,  90 => 53,  87 => 52,  84 => 51,  82 => 50,  79 => 49,  72 => 45,  68 => 44,  62 => 43,  59 => 42,  57 => 41,  50 => 37,  43 => 35,  38 => 32,);
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

<ol class=\"breadcrumb breadcrumb-alternate pe-1 pe-sm-3\" aria-label=\"breadcrumbs\">
   <li class=\"breadcrumb-item text-truncate\">
      <a href=\"{{ index_path() }}\" title=\"{{ __('Home') }}\">
         <i class=\"ti ti-home-2\"></i>
         {{ __('Home') }}
      </a>
   </li>

   {% if menu[sector] is defined %}
   <li class=\"breadcrumb-item text-truncate\">
      <a href=\"{{ path(menu[sector]['default'] ?? '/front/central.php') }}\" title=\"{{ menu[sector]['title'] }}\">
         <i class=\"{{ menu[sector]['icon'] ?? '' }}\"></i>
         {{ menu[sector]['title'] }}
      </a>
   </li>
   {% endif %}

   {% set with_option = false %}
   {% if menu[sector]['content'][item] is defined %}
      {% if menu[sector]['content'][item]['page'] is defined %}
      {% set with_option = option is not empty and menu[sector]['content'][item]['options'][option]['title'] is defined and menu[sector]['content'][item]['options'][option]['page'] is defined %}
      <li class=\"breadcrumb-item text-truncate\">
         <a href=\"{{ path(menu[sector]['content'][item]['page']) }}\"
            class=\"{{ with_option ? '' : 'here' }}\"
            title=\"{{ menu[sector]['content'][item]['title'] }}\" >
            <i class=\"{{ menu[sector]['content'][item]['icon'] ?? '' }}\"></i>
            {{ menu[sector]['content'][item]['title'] }}
         </a>
      </li>
      {% endif %}

      {% if with_option %}
      <li class=\"breadcrumb-item text-truncate\">
         <a href=\"{{ path(menu[sector]['content'][item]['options'][option]['page']) }}\"
            class=\"here\"
            title=\"{{ menu[sector]['content'][item]['options'][option]['title'] }}\" >
            <i class=\"{{ menu[sector]['content'][item]['options'][option]['icon'] ?? '' }}\"></i>
            {{ menu[sector]['content'][item]['options'][option]['title']|u.truncate(17, '...') }}
         </a>
      </li>
      {% endif %}

   {% endif %}
</ol>

{% if menu[sector]['content'][item] is defined %}
    {{ include('layout/parts/context_links.html.twig') }}
{% endif %}
", "layout/parts/breadcrumbs.html.twig", "/var/www/html/glpi/templates/layout/parts/breadcrumbs.html.twig");
    }
}
