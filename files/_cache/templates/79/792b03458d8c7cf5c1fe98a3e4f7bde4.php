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

/* layout/parts/profile_selector.html.twig */
class __TwigTemplate_e1fd38e0c6aea185cd3f80676536c647 extends Template
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
        $context["rand"] = Twig\Extension\CoreExtension::random($this->env->getCharset());
        // line 34
        yield "
<div class=\"dropdown dropstart\">
    <button class=\"dropdown-item dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
        <i class=\"ti ti-user-check\"></i>
        ";
        // line 38
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\DataHelpersExtension']->getVerbatimValue((((CoreExtension::getAttribute($this->env, $this->source, $this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactiveprofile"), "name", [], "array", true, true, false, 38) &&  !(null === (($__internal_compile_0 = $this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactiveprofile")) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["name"] ?? null) : null)))) ? ((($__internal_compile_1 = $this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactiveprofile")) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1["name"] ?? null) : null)) : (""))), "html", null, true);
        yield "
    </button>
    <div class=\"dropdown-menu\" data-bs-popper=\"none\">
        <span class=\"dropdown-header\">";
        // line 41
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Profiles"), "html", null, true);
        yield "</span>
        ";
        // line 42
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable($this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiprofiles"));
        foreach ($context['_seq'] as $context["profile_id"] => $context["profile"]) {
            // line 43
            yield "            <a class=\"dropdown-item ";
            yield ((($context["profile_id"] == (((CoreExtension::getAttribute($this->env, $this->source, $this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactiveprofile"), "id", [], "array", true, true, false, 43) &&  !(null === (($__internal_compile_2 = $this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactiveprofile")) && is_array($__internal_compile_2) || $__internal_compile_2 instanceof ArrayAccess ? ($__internal_compile_2["id"] ?? null) : null)))) ? ((($__internal_compile_3 = $this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactiveprofile")) && is_array($__internal_compile_3) || $__internal_compile_3 instanceof ArrayAccess ? ($__internal_compile_3["id"] ?? null) : null)) : (0)))) ? ("active") : (""));
            yield "\" href=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->indexPath(), "html", null, true);
            yield "?newprofile=";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["profile_id"], "html", null, true);
            yield "\">
                <i class=\"ti ti-user-check\"></i>
                ";
            // line 45
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\DataHelpersExtension']->getVerbatimValue((($__internal_compile_4 = $context["profile"]) && is_array($__internal_compile_4) || $__internal_compile_4 instanceof ArrayAccess ? ($__internal_compile_4["name"] ?? null) : null)), "html", null, true);
            yield "
            </a>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['profile_id'], $context['profile'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 48
        yield "    </div>
</div>

";
        // line 51
        $context["target"] = $this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path("front/central.php");
        // line 52
        if (($this->extensions['Glpi\Application\View\Extension\SessionExtension']->getCurrentInterface() == "helpdesk")) {
            // line 53
            yield "    ";
            $context["target"] = $this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path("front/helpdesk.public.php");
        }
        // line 55
        yield "
";
        // line 56
        $context["current_entity"] = $this->extensions['Glpi\Application\View\Extension\DataHelpersExtension']->getVerbatimValue($this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactive_entity_name"));
        // line 57
        $context["current_entity_short"] = $this->extensions['Glpi\Application\View\Extension\DataHelpersExtension']->getVerbatimValue($this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactive_entity_shortname"));
        // line 58
        if ((($context["current_entity"] ?? null) != ($context["current_entity_short"] ?? null))) {
            // line 59
            yield "    ";
            $context["current_entity_short"] = ("... > " . ($context["current_entity_short"] ?? null));
        }
        // line 61
        if ( !Session::isMultiEntitiesMode()) {
            // line 62
            yield "    <span class=\"dropdown-item dropdown-item-text\" title=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["current_entity"] ?? null), "html", null, true);
            yield "\">
        <i class=\"fa-fw ti ti-stack\"></i>
        ";
            // line 64
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $this->extensions['Twig\Extra\String\StringExtension']->createUnicodeString(($context["current_entity_short"] ?? null)), "truncate", [35, "..."], "method", false, false, false, 64), "html", null, true);
            yield "
    </span>
";
        } else {
            // line 67
            yield "    <div class=\"dropdown dropstart\" id=\"entity-tree-dropdown-";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\">
        <a href=\"#\" class=\"dropdown-item dropdown-toggle entity-dropdown-toggle\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" title=\"";
            // line 68
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["current_entity"] ?? null), "html", null, true);
            yield "\">
            <i class=\"fa-fw ti ti-stack\"></i>
            ";
            // line 70
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $this->extensions['Twig\Extra\String\StringExtension']->createUnicodeString(($context["current_entity_short"] ?? null)), "truncate", [35, "..."], "method", false, false, false, 70), "html", null, true);
            yield "
        </a>
        <div class=\"dropdown-menu p-3\">
            <h3>";
            // line 73
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Select the desired entity"), "html", null, true);
            yield "</h3>

            <div class=\"alert alert-info\" role=\"alert\">
                ";
            // line 76
            $context["shortcut"] = __("Ctrl + Alt + E");
            // line 77
            yield "                ";
            if ((($context["platform"] ?? null) == Twig\Extension\CoreExtension::constant("donatj\\UserAgent\\Platforms::MACINTOSH"))) {
                // line 78
                yield "                    ";
                $context["shortcut"] = __("⌥ (option) + ⌘ (command) + E");
                // line 79
                yield "                ";
            }
            // line 80
            yield "                ";
            yield Twig\Extension\CoreExtension::sprintf(__("Tip: You can call this modal with %s keys combination"), (("<kbd>" . ($context["shortcut"] ?? null)) . "</kbd>"));
            yield "
            </div>
            <div class=\"alert alert-info\" role=\"alert\">
                <i class=\"fas fa-info-circle\"></i>
                <span class=\"ms-2\">
                ";
            // line 85
            $context["recursive_icon"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
                // line 86
                yield "                    <i class=\"fas fa-angle-double-down\" title=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("+ sub-entities"), "html", null, true);
                yield "\"></i>
                ";
                return; yield '';
            })())) ? '' : new Markup($tmp, $this->env->getCharset());
            // line 88
            yield "                ";
            yield Twig\Extension\CoreExtension::sprintf(__("Click on the %s icon to load the elements of the selected entity, as well as its sub-entities."), ($context["recursive_icon"] ?? null));
            yield "
                </span>
            </div>

            <form id=\"entsearchform";
            // line 92
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\">
                <div class=\"input-group\">
                <input type=\"text\" class=\"form-control\" name=\"entsearchtext\" id=\"entsearchtext";
            // line 94
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\"
                        placeholder=\"";
            // line 95
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Search entity"), "html", null, true);
            yield "\" autocomplete=\"off\">
                <button type=\"submit\" class=\"btn btn-icon btn-primary\" title=\"";
            // line 96
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Search"), "html", null, true);
            yield "\"
                        data-bs-toggle=\"tooltip\" data-bs-placement=\"top\">
                    <i class=\"ti ti-search\"></i>
                </button>
                <a class=\"btn btn-icon btn-outline-secondary\" href=\"#\" id=\"entsearchtext";
            // line 100
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "_clear\"
                    title=\"";
            // line 101
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Clear search"), "html", null, true);
            yield "\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\">
                        <i class=\"ti ti-x\"></i>
                </a>
                <a href=\"";
            // line 104
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["target"] ?? null), "html", null, true);
            yield "?active_entity=all\" class=\"btn btn-secondary\"
                    title=\"";
            // line 105
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Select all"), "html", null, true);
            yield "\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\">
                    <i class=\"ti ti-eye\"></i>
                </a>
                </div>
            </form>

            <div class=\"fancytree-grid-container flexbox-item-grow entity_tree\">
                <table id=\"tree_entity";
            // line 112
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\">
                <colgroup>
                    <col></col>
                </colgroup>
                <thead>
                    <tr>
                        <th class=\"parent-path\"></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </table>
                <div id=\"verticalScrollbar-";
            // line 124
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\" style=\"height:100%;\"></div>
            </div>
        </div>
    </div>

    <script type=\"text/javascript\">
    \$(function() {
        var initTree";
            // line 131
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield " = function() {
            if (\$.ui.fancytree.getTree(\"#tree_entity";
            // line 132
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\") !== null) {
                return;
            }

            \$('#tree_entity";
            // line 136
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "').fancytree({
                // load plugins
                extensions: ['filter', 'glyph', 'grid'],

                // Scroll node into visible area, when focused by keyboard
                autoScroll: true,

                // enable font-awesome icons
                glyph: {
                    preset: \"awesome5\",
                    map: {}
                },

                // enable virtual dom, it requires the grid (table extension) plugin
                table: {
                    indentation: 20,       // indent 20px per node level
                    nodeColumnIdx: 0,      // render the node title into the 1st column
                    mergeStatusColumns: false,
                },
                grid: {
                    mergeStatusColumns: false,
                },
                viewport: {
                    enabled: true,
                    count: 15, // number of items to display at once
                },

                // translate strings
                strings: {
                    loading: __(\"Loading...\"),
                    loadError: __(\"Unexpected error.\"),
                    moreData: __(\"More...\"),
                    noData: __(\"No data found\")
                },

                // load data by ajax
                source: {
                    url:  '";
            // line 173
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path("/ajax/entitytreesons.php"), "html", null, true);
            yield "',
                    cache: false
                },

                // filter plugin options
                filter: {
                    mode: \"hide\", // remove unmatched nodes
                    autoExpand: true, // if results found in children, auto-expand parent
                    nodata: '";
            // line 181
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("No entity found"), "html", null, true);
            yield "', // message when no data found
                    highlight: false, // do not highlight matches by wrapping inside tags (when true, this strip the a tag)
                    counter: false, // do not show counters when filtering entity tree
                },

                // load 3rd party scrollbar extension for viewport mode
                preInit: function(event, data) {
                    var tree = data.tree;

                    tree.verticalScrollbar = new PlainScrollbar({
                    alwaysVisible: true,
                    arrows: true,
                    orientation: \"vertical\",
                    onSet: function(numberOfItems) {
                        tree.setViewport({
                            start: Math.round(numberOfItems.start),
                        });
                    },
                    scrollbarElement: document.getElementById(\"verticalScrollbar-";
            // line 199
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\"),
                    });
                },

                // update scrollbar when viewport is updated
                updateViewport: function(event, data) {
                    var tree = data.tree;

                    tree.verticalScrollbar.set({
                    start: tree.viewport.start,
                    total: tree.visibleNodeList.length,
                    visible: tree.viewport.count,
                    }, true);  // do not trigger `onSet`

                    initTooltips();
                },

                // update toolips on node expand
                expand: function(event, data) {
                    initTooltips();
                },
            });
        };

      // init Entities tree only when user ask for it (when dropdown is opened)
        document.getElementById('entity-tree-dropdown-";
            // line 224
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "')
            .addEventListener('show.bs.dropdown', function (event) {
                initTree";
            // line 226
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "();
            });

        var searchTree = function() {
            var search_text = \$(\"#entsearchtext";
            // line 230
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\").val();
            \$.ui.fancytree.getTree(\"#tree_entity";
            // line 231
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\").filterBranches(search_text);
        }

        \$('#entsearchform";
            // line 234
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "').submit(function(event) {
            // cancel submit of entity search form
            event.preventDefault();

            searchTree();
        });

        \$('#entsearchtext";
            // line 241
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "').keyup(function () {
            var inputsearch = \$(this);
            typewatch(function () {
                if (inputsearch.val().length >= 3) {
                searchTree();
                }
            }, 500);
        }).focus();

        \$('#entsearchtext";
            // line 250
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "_clear').click(function () {
            \$('#entsearchtext";
            // line 251
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "').val('');
            searchTree();
        });

        // when the shortcut for entity form is called
        hotkeys('ctrl+alt+e, option+command+e', async function(e) {
            e.stopPropagation();
            e.preventDefault();
            \$('.user-menu-dropdown-toggle').dropdown('show');
            await new Promise(r => setTimeout(r, 100));
            \$('.entity-dropdown-toggle').dropdown('show');
            \$('input[name=entsearchtext]').filter(\":visible\")[0].focus();
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
        return "layout/parts/profile_selector.html.twig";
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
        return array (  409 => 251,  405 => 250,  393 => 241,  383 => 234,  377 => 231,  373 => 230,  366 => 226,  361 => 224,  333 => 199,  312 => 181,  301 => 173,  261 => 136,  254 => 132,  250 => 131,  240 => 124,  225 => 112,  215 => 105,  211 => 104,  205 => 101,  201 => 100,  194 => 96,  190 => 95,  186 => 94,  181 => 92,  173 => 88,  166 => 86,  164 => 85,  155 => 80,  152 => 79,  149 => 78,  146 => 77,  144 => 76,  138 => 73,  132 => 70,  127 => 68,  122 => 67,  116 => 64,  110 => 62,  108 => 61,  104 => 59,  102 => 58,  100 => 57,  98 => 56,  95 => 55,  91 => 53,  89 => 52,  87 => 51,  82 => 48,  73 => 45,  63 => 43,  59 => 42,  55 => 41,  49 => 38,  43 => 34,  41 => 33,  38 => 32,);
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

{% set rand = random() %}

<div class=\"dropdown dropstart\">
    <button class=\"dropdown-item dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
        <i class=\"ti ti-user-check\"></i>
        {{ (session('glpiactiveprofile')['name'] ?? '')|verbatim_value }}
    </button>
    <div class=\"dropdown-menu\" data-bs-popper=\"none\">
        <span class=\"dropdown-header\">{{ __('Profiles') }}</span>
        {% for profile_id, profile in session('glpiprofiles') %}
            <a class=\"dropdown-item {{ profile_id == (session('glpiactiveprofile')['id'] ?? 0) ? 'active' : '' }}\" href=\"{{ index_path() }}?newprofile={{ profile_id }}\">
                <i class=\"ti ti-user-check\"></i>
                {{ profile['name']|verbatim_value }}
            </a>
        {% endfor %}
    </div>
</div>

{% set target = path(\"front/central.php\") %}
{% if get_current_interface() == \"helpdesk\" %}
    {% set target = path(\"front/helpdesk.public.php\") %}
{% endif %}

{% set current_entity = session('glpiactive_entity_name')|verbatim_value %}
{% set current_entity_short = session('glpiactive_entity_shortname')|verbatim_value %}
{% if current_entity != current_entity_short %}
    {% set current_entity_short = '... > ' ~ current_entity_short %}
{% endif %}
{% if not is_multi_entities_mode() %}
    <span class=\"dropdown-item dropdown-item-text\" title=\"{{ current_entity }}\">
        <i class=\"fa-fw ti ti-stack\"></i>
        {{ current_entity_short|u.truncate(35, '...') }}
    </span>
{% else %}
    <div class=\"dropdown dropstart\" id=\"entity-tree-dropdown-{{ rand }}\">
        <a href=\"#\" class=\"dropdown-item dropdown-toggle entity-dropdown-toggle\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" title=\"{{ current_entity }}\">
            <i class=\"fa-fw ti ti-stack\"></i>
            {{ current_entity_short|u.truncate(35, '...') }}
        </a>
        <div class=\"dropdown-menu p-3\">
            <h3>{{ __('Select the desired entity') }}</h3>

            <div class=\"alert alert-info\" role=\"alert\">
                {% set shortcut = __('Ctrl + Alt + E') %}
                {% if platform == constant(\"donatj\\\\UserAgent\\\\Platforms::MACINTOSH\") %}
                    {% set shortcut = __('⌥ (option) + ⌘ (command) + E') %}
                {% endif %}
                {{ __(\"Tip: You can call this modal with %s keys combination\")|format('<kbd>' ~ shortcut ~ '</kbd>')|raw }}
            </div>
            <div class=\"alert alert-info\" role=\"alert\">
                <i class=\"fas fa-info-circle\"></i>
                <span class=\"ms-2\">
                {% set recursive_icon %}
                    <i class=\"fas fa-angle-double-down\" title=\"{{ __('+ sub-entities') }}\"></i>
                {% endset %}
                {{ __('Click on the %s icon to load the elements of the selected entity, as well as its sub-entities.')|format(recursive_icon)|raw }}
                </span>
            </div>

            <form id=\"entsearchform{{ rand }}\">
                <div class=\"input-group\">
                <input type=\"text\" class=\"form-control\" name=\"entsearchtext\" id=\"entsearchtext{{ rand }}\"
                        placeholder=\"{{ __('Search entity') }}\" autocomplete=\"off\">
                <button type=\"submit\" class=\"btn btn-icon btn-primary\" title=\"{{ __('Search') }}\"
                        data-bs-toggle=\"tooltip\" data-bs-placement=\"top\">
                    <i class=\"ti ti-search\"></i>
                </button>
                <a class=\"btn btn-icon btn-outline-secondary\" href=\"#\" id=\"entsearchtext{{ rand }}_clear\"
                    title=\"{{ __(\"Clear search\") }}\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\">
                        <i class=\"ti ti-x\"></i>
                </a>
                <a href=\"{{ target }}?active_entity=all\" class=\"btn btn-secondary\"
                    title=\"{{ __('Select all') }}\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\">
                    <i class=\"ti ti-eye\"></i>
                </a>
                </div>
            </form>

            <div class=\"fancytree-grid-container flexbox-item-grow entity_tree\">
                <table id=\"tree_entity{{ rand }}\">
                <colgroup>
                    <col></col>
                </colgroup>
                <thead>
                    <tr>
                        <th class=\"parent-path\"></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </table>
                <div id=\"verticalScrollbar-{{ rand }}\" style=\"height:100%;\"></div>
            </div>
        </div>
    </div>

    <script type=\"text/javascript\">
    \$(function() {
        var initTree{{ rand }} = function() {
            if (\$.ui.fancytree.getTree(\"#tree_entity{{ rand }}\") !== null) {
                return;
            }

            \$('#tree_entity{{ rand }}').fancytree({
                // load plugins
                extensions: ['filter', 'glyph', 'grid'],

                // Scroll node into visible area, when focused by keyboard
                autoScroll: true,

                // enable font-awesome icons
                glyph: {
                    preset: \"awesome5\",
                    map: {}
                },

                // enable virtual dom, it requires the grid (table extension) plugin
                table: {
                    indentation: 20,       // indent 20px per node level
                    nodeColumnIdx: 0,      // render the node title into the 1st column
                    mergeStatusColumns: false,
                },
                grid: {
                    mergeStatusColumns: false,
                },
                viewport: {
                    enabled: true,
                    count: 15, // number of items to display at once
                },

                // translate strings
                strings: {
                    loading: __(\"Loading...\"),
                    loadError: __(\"Unexpected error.\"),
                    moreData: __(\"More...\"),
                    noData: __(\"No data found\")
                },

                // load data by ajax
                source: {
                    url:  '{{ path(\"/ajax/entitytreesons.php\") }}',
                    cache: false
                },

                // filter plugin options
                filter: {
                    mode: \"hide\", // remove unmatched nodes
                    autoExpand: true, // if results found in children, auto-expand parent
                    nodata: '{{ __(\"No entity found\") }}', // message when no data found
                    highlight: false, // do not highlight matches by wrapping inside tags (when true, this strip the a tag)
                    counter: false, // do not show counters when filtering entity tree
                },

                // load 3rd party scrollbar extension for viewport mode
                preInit: function(event, data) {
                    var tree = data.tree;

                    tree.verticalScrollbar = new PlainScrollbar({
                    alwaysVisible: true,
                    arrows: true,
                    orientation: \"vertical\",
                    onSet: function(numberOfItems) {
                        tree.setViewport({
                            start: Math.round(numberOfItems.start),
                        });
                    },
                    scrollbarElement: document.getElementById(\"verticalScrollbar-{{ rand }}\"),
                    });
                },

                // update scrollbar when viewport is updated
                updateViewport: function(event, data) {
                    var tree = data.tree;

                    tree.verticalScrollbar.set({
                    start: tree.viewport.start,
                    total: tree.visibleNodeList.length,
                    visible: tree.viewport.count,
                    }, true);  // do not trigger `onSet`

                    initTooltips();
                },

                // update toolips on node expand
                expand: function(event, data) {
                    initTooltips();
                },
            });
        };

      // init Entities tree only when user ask for it (when dropdown is opened)
        document.getElementById('entity-tree-dropdown-{{ rand }}')
            .addEventListener('show.bs.dropdown', function (event) {
                initTree{{ rand }}();
            });

        var searchTree = function() {
            var search_text = \$(\"#entsearchtext{{ rand }}\").val();
            \$.ui.fancytree.getTree(\"#tree_entity{{ rand }}\").filterBranches(search_text);
        }

        \$('#entsearchform{{ rand }}').submit(function(event) {
            // cancel submit of entity search form
            event.preventDefault();

            searchTree();
        });

        \$('#entsearchtext{{ rand }}').keyup(function () {
            var inputsearch = \$(this);
            typewatch(function () {
                if (inputsearch.val().length >= 3) {
                searchTree();
                }
            }, 500);
        }).focus();

        \$('#entsearchtext{{ rand }}_clear').click(function () {
            \$('#entsearchtext{{ rand }}').val('');
            searchTree();
        });

        // when the shortcut for entity form is called
        hotkeys('ctrl+alt+e, option+command+e', async function(e) {
            e.stopPropagation();
            e.preventDefault();
            \$('.user-menu-dropdown-toggle').dropdown('show');
            await new Promise(r => setTimeout(r, 100));
            \$('.entity-dropdown-toggle').dropdown('show');
            \$('input[name=entsearchtext]').filter(\":visible\")[0].focus();
        });
    });
    </script>
{% endif %}
", "layout/parts/profile_selector.html.twig", "/var/www/html/glpi/templates/layout/parts/profile_selector.html.twig");
    }
}
