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

/* pages/self-service/home.html.twig */
class __TwigTemplate_eeadf80d5a9f83f1dc72b72ffaa2b2a0 extends Template
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
        if (Twig\Extension\CoreExtension::length($this->env->getCharset(), ($context["password_alert"] ?? null))) {
            // line 34
            yield "   <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">
      <div class=\"d-flex mb-2\">
         <div>
            <i class=\"fas fa-exclamation-triangle me-1\"></i>
         </div>
         <div>
            ";
            // line 40
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["password_alert"] ?? null), "html", null, true);
            yield "
         </div>
      </div>

      <div class=\"btn-list\">
         <a class=\"btn btn-outline-warning\" href=\"";
            // line 45
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path("/front/updatepassword.php"), "html", null, true);
            yield " \">
            ";
            // line 46
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Update my password"), "html", null, true);
            yield "
         </a>
      </div>
   </div>
";
        }
        // line 51
        yield "
<table class=\"central\">
   ";
        // line 53
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\PluginExtension']->callPluginHook(Twig\Extension\CoreExtension::constant("Glpi\\Plugin\\Hooks::DISPLAY_CENTRAL")), "html", null, true);
        yield "
</table>

";
        // line 56
        $context["optional_grid_item_keys"] = ["survey_list", "reminder_list", "rss_feed", "kb_popular", "kb_recent", "kb_lastupdate"];
        // line 59
        $context["grid_items"] = [        // line 60
($context["ticket_summary"] ?? null)];
        // line 62
        yield "
";
        // line 63
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["optional_grid_item_keys"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["optional_grid_item_key"]) {
            // line 64
            yield "   ";
            $context["item_content"] = (($__internal_compile_0 = $context) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0[$context["optional_grid_item_key"]] ?? null) : null);
            // line 65
            yield "   ";
            if ( !Twig\Extension\CoreExtension::testEmpty(($context["item_content"] ?? null))) {
                // line 66
                yield "      ";
                $context["grid_items"] = Twig\Extension\CoreExtension::merge(($context["grid_items"] ?? null), [(("<div class=\"card\">" .                 // line 67
($context["item_content"] ?? null)) . "</div>")]);
                // line 69
                yield "   ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['optional_grid_item_key'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 71
        yield "
";
        // line 72
        yield Twig\Extension\CoreExtension::include($this->env, $context, "components/masonry_grid.html.twig", ["grid_items" =>         // line 73
($context["grid_items"] ?? null)], false);
        // line 74
        yield "
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "pages/self-service/home.html.twig";
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
        return array (  116 => 74,  114 => 73,  113 => 72,  110 => 71,  103 => 69,  101 => 67,  99 => 66,  96 => 65,  93 => 64,  89 => 63,  86 => 62,  84 => 60,  83 => 59,  81 => 56,  75 => 53,  71 => 51,  63 => 46,  59 => 45,  51 => 40,  43 => 34,  41 => 33,  38 => 32,);
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

{% if password_alert|length %}
   <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">
      <div class=\"d-flex mb-2\">
         <div>
            <i class=\"fas fa-exclamation-triangle me-1\"></i>
         </div>
         <div>
            {{ password_alert }}
         </div>
      </div>

      <div class=\"btn-list\">
         <a class=\"btn btn-outline-warning\" href=\"{{ path('/front/updatepassword.php') }} \">
            {{ __('Update my password') }}
         </a>
      </div>
   </div>
{% endif %}

<table class=\"central\">
   {{ call_plugin_hook(constant('Glpi\\\\Plugin\\\\Hooks::DISPLAY_CENTRAL')) }}
</table>

{% set optional_grid_item_keys = [
   'survey_list', 'reminder_list', 'rss_feed', 'kb_popular', 'kb_recent', 'kb_lastupdate'
] %}
{% set grid_items = [
   ticket_summary
] %}

{% for optional_grid_item_key in optional_grid_item_keys %}
   {% set item_content = _context[optional_grid_item_key] %}
   {% if item_content is not empty %}
      {% set grid_items = grid_items|merge([
         '<div class=\"card\">' ~ item_content ~ '</div>'
      ]) %}
   {% endif %}
{% endfor %}

{{ include('components/masonry_grid.html.twig', {
   'grid_items': grid_items,
}, with_context = false) }}
", "pages/self-service/home.html.twig", "/var/www/html/glpi/templates/pages/self-service/home.html.twig");
    }
}
