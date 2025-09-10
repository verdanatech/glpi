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

/* layout/parts/menu.html.twig */
class __TwigTemplate_bdfaf131fd789a57b8636990404719ad extends Template
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
        $context["is_vertical"] = ($this->extensions['Glpi\Application\View\Extension\SessionExtension']->userPref("page_layout") == "vertical");
        // line 34
        $context["is_horizontal"] = ($this->extensions['Glpi\Application\View\Extension\SessionExtension']->userPref("page_layout") == "horizontal");
        // line 35
        $context["is_menu_folded"] = ($this->extensions['Glpi\Application\View\Extension\SessionExtension']->userPref("fold_menu") == "1");
        // line 36
        $context["rand"] = Twig\Extension\CoreExtension::random($this->env->getCharset());
        // line 37
        yield "
<ul class=\"navbar-nav\" id=\"menu_";
        // line 38
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
        yield "\">
";
        // line 39
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["menu"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["firstlevel"]) {
            // line 40
            yield "   ";
            $context["firstlevel_active"] = ((($__internal_compile_0 = (($__internal_compile_1 = ($context["menu"] ?? null)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["title"] ?? null) : null) == (($__internal_compile_2 = $context["firstlevel"]) && is_array($__internal_compile_2) || $__internal_compile_2 instanceof ArrayAccess ? ($__internal_compile_2["title"] ?? null) : null));
            // line 41
            yield "   ";
            $context["firstlevel_shown"] = ((((($__internal_compile_3 = (($__internal_compile_4 = ($context["menu"] ?? null)) && is_array($__internal_compile_4) || $__internal_compile_4 instanceof ArrayAccess ? ($__internal_compile_4[($context["sector"] ?? null)] ?? null) : null)) && is_array($__internal_compile_3) || $__internal_compile_3 instanceof ArrayAccess ? ($__internal_compile_3["title"] ?? null) : null) == (($__internal_compile_5 = $context["firstlevel"]) && is_array($__internal_compile_5) || $__internal_compile_5 instanceof ArrayAccess ? ($__internal_compile_5["title"] ?? null) : null)) && ($context["is_vertical"] ?? null)) && (($context["is_menu_folded"] ?? null) == false));
            // line 42
            yield "   ";
            $context["has_subitems"] = false;
            // line 43
            yield "   ";
            if (CoreExtension::getAttribute($this->env, $this->source, $context["firstlevel"], "content", [], "array", true, true, false, 43)) {
                // line 44
                yield "      ";
                // line 45
                yield "      ";
                $context['_parent'] = $context;
                $context['_seq'] = CoreExtension::ensureTraversable((($__internal_compile_6 = $context["firstlevel"]) && is_array($__internal_compile_6) || $__internal_compile_6 instanceof ArrayAccess ? ($__internal_compile_6["content"] ?? null) : null));
                foreach ($context['_seq'] as $context["_key"] => $context["secondlevel"]) {
                    // line 46
                    yield "         ";
                    if (CoreExtension::getAttribute($this->env, $this->source, $context["secondlevel"], "page", [], "array", true, true, false, 46)) {
                        // line 47
                        yield "            ";
                        $context["has_subitems"] = true;
                        // line 48
                        yield "         ";
                    }
                    // line 49
                    yield "      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['secondlevel'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 50
                yield "   ";
            }
            // line 51
            yield "   ";
            if (($context["has_subitems"] ?? null)) {
                // line 52
                yield "   <li class=\"nav-item dropdown ";
                yield ((($context["firstlevel_active"] ?? null)) ? ("active") : (""));
                yield "\"
       title=\"";
                // line 53
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_7 = $context["firstlevel"]) && is_array($__internal_compile_7) || $__internal_compile_7 instanceof ArrayAccess ? ($__internal_compile_7["title"] ?? null) : null), "html", null, true);
                yield "\">
      <a class=\"nav-link dropdown-toggle ";
                // line 54
                yield ((($context["firstlevel_active"] ?? null)) ? ("active") : (""));
                yield " ";
                yield ((($context["firstlevel_shown"] ?? null)) ? ("show") : (""));
                yield "\"
         data-bs-toggle=\"dropdown\" role=\"button\"
         aria-expanded=\"";
                // line 56
                yield ((($context["firstlevel_shown"] ?? null)) ? ("true") : ("false"));
                yield "\">
         <i class=\"fa-fw ";
                // line 57
                (((CoreExtension::getAttribute($this->env, $this->source, $context["firstlevel"], "icon", [], "array", true, true, false, 57) &&  !(null === (($__internal_compile_8 = $context["firstlevel"]) && is_array($__internal_compile_8) || $__internal_compile_8 instanceof ArrayAccess ? ($__internal_compile_8["icon"] ?? null) : null)))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_9 = $context["firstlevel"]) && is_array($__internal_compile_9) || $__internal_compile_9 instanceof ArrayAccess ? ($__internal_compile_9["icon"] ?? null) : null), "html", null, true)) : (yield ""));
                yield "\"></i>
         <span class=\"menu-label\">";
                // line 58
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_10 = $context["firstlevel"]) && is_array($__internal_compile_10) || $__internal_compile_10 instanceof ArrayAccess ? ($__internal_compile_10["title"] ?? null) : null), "html", null, true);
                yield "</span>
      </a>
      <div class=\"dropdown-menu ";
                // line 60
                yield (((($context["firstlevel_active"] ?? null) && (($context["is_vertical"] ?? null) != false))) ? ("") : ("animate__animated"));
                yield " ";
                yield ((($context["is_vertical"] ?? null)) ? ("animate__fadeInLeft") : ("animate__zoomIn"));
                yield " ";
                yield ((($context["firstlevel_shown"] ?? null)) ? ("show") : (""));
                yield "\">
         <h6 class=\"dropdown-header\">";
                // line 61
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_11 = $context["firstlevel"]) && is_array($__internal_compile_11) || $__internal_compile_11 instanceof ArrayAccess ? ($__internal_compile_11["title"] ?? null) : null), "html", null, true);
                yield "</h6>
         <div class=\"dropdown-menu-columns\">
            <div class=\"dropdown-menu-column\">
            ";
                // line 64
                $context["has_dashboard"] = CoreExtension::getAttribute($this->env, $this->source, $context["firstlevel"], "default_dashboard", [], "array", true, true, false, 64);
                // line 65
                yield "            ";
                if (($context["has_dashboard"] ?? null)) {
                    // line 66
                    yield "               <a class=\"dropdown-item\"
                  href=\"";
                    // line 67
                    yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path((($__internal_compile_12 = $context["firstlevel"]) && is_array($__internal_compile_12) || $__internal_compile_12 instanceof ArrayAccess ? ($__internal_compile_12["default_dashboard"] ?? null) : null)), "html", null, true);
                    yield "\">
                  <i class=\"ti ti-dashboard\"></i>
                  ";
                    // line 69
                    yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Dashboard"), "html", null, true);
                    yield "
               </a>
            ";
                }
                // line 72
                yield "            ";
                $context['_parent'] = $context;
                $context['_seq'] = CoreExtension::ensureTraversable((($__internal_compile_13 = $context["firstlevel"]) && is_array($__internal_compile_13) || $__internal_compile_13 instanceof ArrayAccess ? ($__internal_compile_13["content"] ?? null) : null));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["sublevel"]) {
                    // line 73
                    yield "               ";
                    if (CoreExtension::getAttribute($this->env, $this->source, $context["sublevel"], "page", [], "array", true, true, false, 73)) {
                        // line 74
                        yield "               <a class=\"dropdown-item ";
                        yield (((($context["menu_active"] ?? null) == (($__internal_compile_14 = $context["sublevel"]) && is_array($__internal_compile_14) || $__internal_compile_14 instanceof ArrayAccess ? ($__internal_compile_14["title"] ?? null) : null))) ? ("active") : (""));
                        yield "\"
                  href=\"";
                        // line 75
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path((($__internal_compile_15 = $context["sublevel"]) && is_array($__internal_compile_15) || $__internal_compile_15 instanceof ArrayAccess ? ($__internal_compile_15["page"] ?? null) : null)), "html", null, true);
                        yield "\"
                  accesskey=\"";
                        // line 76
                        (((CoreExtension::getAttribute($this->env, $this->source, $context["sublevel"], "shortcut", [], "array", true, true, false, 76) &&  !(null === (($__internal_compile_16 = $context["sublevel"]) && is_array($__internal_compile_16) || $__internal_compile_16 instanceof ArrayAccess ? ($__internal_compile_16["shortcut"] ?? null) : null)))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_17 = $context["sublevel"]) && is_array($__internal_compile_17) || $__internal_compile_17 instanceof ArrayAccess ? ($__internal_compile_17["shortcut"] ?? null) : null), "html", null, true)) : (yield ""));
                        yield "\" title=\"";
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_18 = $context["sublevel"]) && is_array($__internal_compile_18) || $__internal_compile_18 instanceof ArrayAccess ? ($__internal_compile_18["title"] ?? null) : null), "html", null, true);
                        yield "\">
                  <i class=\"fa-fw ";
                        // line 77
                        (((CoreExtension::getAttribute($this->env, $this->source, $context["sublevel"], "icon", [], "array", true, true, false, 77) &&  !(null === (($__internal_compile_19 = $context["sublevel"]) && is_array($__internal_compile_19) || $__internal_compile_19 instanceof ArrayAccess ? ($__internal_compile_19["icon"] ?? null) : null)))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_20 = $context["sublevel"]) && is_array($__internal_compile_20) || $__internal_compile_20 instanceof ArrayAccess ? ($__internal_compile_20["icon"] ?? null) : null), "html", null, true)) : (yield ""));
                        yield "\"></i>
                  <span class='text-wrap'>
                     ";
                        // line 79
                        yield $this->extensions['Glpi\Application\View\Extension\DataHelpersExtension']->underlineShortcutLetter((($__internal_compile_21 = $context["sublevel"]) && is_array($__internal_compile_21) || $__internal_compile_21 instanceof ArrayAccess ? ($__internal_compile_21["title"] ?? null) : null), (((CoreExtension::getAttribute($this->env, $this->source, $context["sublevel"], "shortcut", [], "array", true, true, false, 79) &&  !(null === (($__internal_compile_22 = $context["sublevel"]) && is_array($__internal_compile_22) || $__internal_compile_22 instanceof ArrayAccess ? ($__internal_compile_22["shortcut"] ?? null) : null)))) ? ((($__internal_compile_23 = $context["sublevel"]) && is_array($__internal_compile_23) || $__internal_compile_23 instanceof ArrayAccess ? ($__internal_compile_23["shortcut"] ?? null) : null)) : ("")));
                        yield "
                  </span>
               </a>
               ";
                    }
                    // line 83
                    yield "
               ";
                    // line 84
                    $context["count_per_column"] = 6;
                    // line 85
                    yield "               ";
                    if ((((CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 85) % ($context["count_per_column"] ?? null)) == ((($context["has_dashboard"] ?? null)) ? ((($context["count_per_column"] ?? null) - 1)) : (0))) &&  !CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "last", [], "any", false, false, false, 85))) {
                        // line 86
                        yield "                  </div>
                  <div class=\"dropdown-menu-column\">
               ";
                    }
                    // line 89
                    yield "            ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['sublevel'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 90
                yield "            </div>
         </div>
      </div>
   </li>
   ";
            } elseif ((CoreExtension::getAttribute($this->env, $this->source,             // line 94
$context["firstlevel"], "default", [], "array", true, true, false, 94) && ((((CoreExtension::getAttribute($this->env, $this->source, $context["firstlevel"], "display", [], "array", true, true, false, 94) &&  !(null === (($__internal_compile_24 = $context["firstlevel"]) && is_array($__internal_compile_24) || $__internal_compile_24 instanceof ArrayAccess ? ($__internal_compile_24["display"] ?? null) : null)))) ? ((($__internal_compile_25 = $context["firstlevel"]) && is_array($__internal_compile_25) || $__internal_compile_25 instanceof ArrayAccess ? ($__internal_compile_25["display"] ?? null) : null)) : (true)) != false))) {
                // line 95
                yield "      <li class=\"nav-item dropdown ";
                yield ((($context["firstlevel_active"] ?? null)) ? ("active") : (""));
                yield "\" data-bs-toggle=\"tooltip\"
       title=\"";
                // line 96
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_26 = $context["firstlevel"]) && is_array($__internal_compile_26) || $__internal_compile_26 instanceof ArrayAccess ? ($__internal_compile_26["title"] ?? null) : null), "html", null, true);
                yield "\">
         <a class=\"nav-link\" href=\"";
                // line 97
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path((($__internal_compile_27 = $context["firstlevel"]) && is_array($__internal_compile_27) || $__internal_compile_27 instanceof ArrayAccess ? ($__internal_compile_27["default"] ?? null) : null)), "html", null, true);
                yield "\">
            <i class=\"fa-fw ";
                // line 98
                (((CoreExtension::getAttribute($this->env, $this->source, $context["firstlevel"], "icon", [], "array", true, true, false, 98) &&  !(null === (($__internal_compile_28 = $context["firstlevel"]) && is_array($__internal_compile_28) || $__internal_compile_28 instanceof ArrayAccess ? ($__internal_compile_28["icon"] ?? null) : null)))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_29 = $context["firstlevel"]) && is_array($__internal_compile_29) || $__internal_compile_29 instanceof ArrayAccess ? ($__internal_compile_29["icon"] ?? null) : null), "html", null, true)) : (yield ""));
                yield "\"></i>
            <span class=\"menu-label\">";
                // line 99
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_30 = $context["firstlevel"]) && is_array($__internal_compile_30) || $__internal_compile_30 instanceof ArrayAccess ? ($__internal_compile_30["title"] ?? null) : null), "html", null, true);
                yield "</span>
         </a>
      <li>
   ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['firstlevel'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 104
        yield "</ul>

";
        // line 106
        if (($context["is_vertical"] ?? null)) {
            // line 107
            yield "<script type=\"text/javascript\">
\$(function() {
   // below, some modifications of dropdowns menu behavior
   document.querySelectorAll('#menu_";
            // line 110
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield " > .dropdown').forEach(function(menuDropdown) {
      // prevent menu closes
      menuDropdown.addEventListener('hide.bs.dropdown', function (event) {
         var orig_event = event.clickEvent;
         if (typeof orig_event != \"undefined\"
             && typeof orig_event.target != \"undefined\") {
            // prevent body clicking to hide menu
            if (!document.getElementById('menu_";
            // line 117
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "').contains(orig_event.target)) {
               event.preventDefault();
               return;
            }

            // prevent menu links to close menu (waiting the page redirection)
            if (orig_event.target.className.indexOf('dropdown-item') !== false) {
               for (var item of document.querySelectorAll('#menu_";
            // line 124
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield " .dropdown-item')) {
                  item.classList.remove('active');
               }
               orig_event.target.classList.add('active');
               event.preventDefault();
            }
         }
      });

      // opening a sub menu close others
      menuDropdown.addEventListener('show.bs.dropdown', function (event) {
         \$('#menu_";
            // line 135
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield " .nav-link').removeClass('show active');
         \$('#menu_";
            // line 136
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield " .nav-item').removeClass('active');
         \$('#menu_";
            // line 137
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield " .dropdown-menu').removeClass('show');
      })
   });

});
</script>
";
        }
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "layout/parts/menu.html.twig";
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
        return array (  326 => 137,  322 => 136,  318 => 135,  304 => 124,  294 => 117,  284 => 110,  279 => 107,  277 => 106,  273 => 104,  262 => 99,  258 => 98,  254 => 97,  250 => 96,  245 => 95,  243 => 94,  237 => 90,  223 => 89,  218 => 86,  215 => 85,  213 => 84,  210 => 83,  203 => 79,  198 => 77,  192 => 76,  188 => 75,  183 => 74,  180 => 73,  162 => 72,  156 => 69,  151 => 67,  148 => 66,  145 => 65,  143 => 64,  137 => 61,  129 => 60,  124 => 58,  120 => 57,  116 => 56,  109 => 54,  105 => 53,  100 => 52,  97 => 51,  94 => 50,  88 => 49,  85 => 48,  82 => 47,  79 => 46,  74 => 45,  72 => 44,  69 => 43,  66 => 42,  63 => 41,  60 => 40,  56 => 39,  52 => 38,  49 => 37,  47 => 36,  45 => 35,  43 => 34,  41 => 33,  38 => 32,);
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

{% set is_vertical = user_pref('page_layout') == 'vertical' %}
{% set is_horizontal = user_pref('page_layout') == 'horizontal' %}
{% set is_menu_folded = user_pref('fold_menu') == '1' %}
{% set rand = random() %}

<ul class=\"navbar-nav\" id=\"menu_{{ rand }}\">
{% for firstlevel in menu %}
   {% set firstlevel_active = menu[sector]['title'] == firstlevel['title'] %}
   {% set firstlevel_shown = (menu[sector]['title'] == firstlevel['title'] and is_vertical and is_menu_folded == false) %}
   {% set has_subitems = false %}
   {% if firstlevel['content'] is defined %}
      {# Are there any items under contents with a page property? #}
      {% for secondlevel in firstlevel['content'] %}
         {% if secondlevel['page'] is defined %}
            {% set has_subitems = true %}
         {% endif %}
      {% endfor %}
   {% endif %}
   {% if has_subitems %}
   <li class=\"nav-item dropdown {{ firstlevel_active ? 'active' : '' }}\"
       title=\"{{ firstlevel['title'] }}\">
      <a class=\"nav-link dropdown-toggle {{ firstlevel_active ? 'active' : '' }} {{ firstlevel_shown ? 'show' : '' }}\"
         data-bs-toggle=\"dropdown\" role=\"button\"
         aria-expanded=\"{{ firstlevel_shown ? 'true' : 'false' }}\">
         <i class=\"fa-fw {{ firstlevel['icon'] ?? '' }}\"></i>
         <span class=\"menu-label\">{{ firstlevel['title'] }}</span>
      </a>
      <div class=\"dropdown-menu {{ firstlevel_active and is_vertical != false ? '' : 'animate__animated' }} {{ is_vertical ? 'animate__fadeInLeft' : 'animate__zoomIn' }} {{ firstlevel_shown ? 'show' : '' }}\">
         <h6 class=\"dropdown-header\">{{ firstlevel['title'] }}</h6>
         <div class=\"dropdown-menu-columns\">
            <div class=\"dropdown-menu-column\">
            {% set has_dashboard = firstlevel['default_dashboard'] is defined %}
            {% if has_dashboard %}
               <a class=\"dropdown-item\"
                  href=\"{{ path(firstlevel['default_dashboard']) }}\">
                  <i class=\"ti ti-dashboard\"></i>
                  {{ __('Dashboard') }}
               </a>
            {% endif %}
            {% for sublevel in firstlevel['content'] %}
               {% if sublevel['page'] is defined %}
               <a class=\"dropdown-item {{ menu_active == sublevel['title'] ? 'active' : '' }}\"
                  href=\"{{ path(sublevel['page']) }}\"
                  accesskey=\"{{ sublevel['shortcut'] ?? '' }}\" title=\"{{ sublevel['title'] }}\">
                  <i class=\"fa-fw {{ sublevel['icon'] ?? '' }}\"></i>
                  <span class='text-wrap'>
                     {{ sublevel['title']|shortcut(sublevel['shortcut'] ?? '') }}
                  </span>
               </a>
               {% endif %}

               {% set count_per_column = 6 %}
               {% if loop.index % count_per_column == (has_dashboard ? count_per_column - 1 : 0) and not loop.last %}
                  </div>
                  <div class=\"dropdown-menu-column\">
               {% endif %}
            {% endfor %}
            </div>
         </div>
      </div>
   </li>
   {% elseif firstlevel['default'] is defined and (firstlevel['display'] ?? true) != false %}
      <li class=\"nav-item dropdown {{ firstlevel_active ? 'active' : '' }}\" data-bs-toggle=\"tooltip\"
       title=\"{{ firstlevel['title'] }}\">
         <a class=\"nav-link\" href=\"{{ path(firstlevel['default']) }}\">
            <i class=\"fa-fw {{ firstlevel['icon'] ?? '' }}\"></i>
            <span class=\"menu-label\">{{ firstlevel['title'] }}</span>
         </a>
      <li>
   {% endif %}
{% endfor %}
</ul>

{% if is_vertical %}
<script type=\"text/javascript\">
\$(function() {
   // below, some modifications of dropdowns menu behavior
   document.querySelectorAll('#menu_{{ rand }} > .dropdown').forEach(function(menuDropdown) {
      // prevent menu closes
      menuDropdown.addEventListener('hide.bs.dropdown', function (event) {
         var orig_event = event.clickEvent;
         if (typeof orig_event != \"undefined\"
             && typeof orig_event.target != \"undefined\") {
            // prevent body clicking to hide menu
            if (!document.getElementById('menu_{{ rand }}').contains(orig_event.target)) {
               event.preventDefault();
               return;
            }

            // prevent menu links to close menu (waiting the page redirection)
            if (orig_event.target.className.indexOf('dropdown-item') !== false) {
               for (var item of document.querySelectorAll('#menu_{{ rand }} .dropdown-item')) {
                  item.classList.remove('active');
               }
               orig_event.target.classList.add('active');
               event.preventDefault();
            }
         }
      });

      // opening a sub menu close others
      menuDropdown.addEventListener('show.bs.dropdown', function (event) {
         \$('#menu_{{ rand }} .nav-link').removeClass('show active');
         \$('#menu_{{ rand }} .nav-item').removeClass('active');
         \$('#menu_{{ rand }} .dropdown-menu').removeClass('show');
      })
   });

});
</script>
{% endif %}
", "layout/parts/menu.html.twig", "/var/www/html/glpi/templates/layout/parts/menu.html.twig");
    }
}
