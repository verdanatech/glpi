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

/* layout/parts/head.html.twig */
class __TwigTemplate_76c822fa43e10dee02a43fec9a94a61b extends Template
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
<!DOCTYPE html>
<html lang=\"";
        // line 34
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["lang"] ?? null), "html", null, true);
        yield "\" ";
        if (($context["high_contrast"] ?? null)) {
            yield "data-high-contrast=\"1\"";
        }
        // line 35
        yield "      ";
        ((array_key_exists("glpi_request_id", $context)) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(("data-glpi-request-id=" . ($context["glpi_request_id"] ?? null)), "html", null, true)) : (yield ""));
        yield ">
<head>
   <title>";
        // line 37
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["title"] ?? null), "html", null, true);
        yield " - GLPI</title>

   <meta charset=\"utf-8\" />

   ";
        // line 42
        yield "   <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />

   ";
        // line 45
        yield "   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />

   ";
        // line 48
        yield "   <meta name=\"robots\" content=\"noindex, nofollow\" />

    ";
        // line 51
        yield "    ";
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(Twig\Extension\CoreExtension::merge(($context["custom_header_tags"] ?? null), $this->extensions['Glpi\Application\View\Extension\PluginExtension']->getPluginsHeaderTags(((array_key_exists("is_anonymous_page", $context)) ? (Twig\Extension\CoreExtension::default(($context["is_anonymous_page"] ?? null), false)) : (false)))));
        foreach ($context['_seq'] as $context["_key"] => $context["header_tag"]) {
            // line 52
            yield "        <";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["header_tag"], "tag", [], "any", false, false, false, 52), "html", null, true);
            yield " ";
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["header_tag"], "properties", [], "any", false, false, false, 52));
            foreach ($context['_seq'] as $context["key"] => $context["value"]) {
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["key"], "html", null, true);
                yield "=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["value"], "html", null, true);
                yield "\" ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['value'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            yield "/>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['header_tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        yield "
   <meta property=\"glpi:csrf_token\" content=\"";
        // line 55
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Session::getNewCSRFToken(true), "html", null, true);
        yield "\" />

   ";
        // line 57
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(Twig\Extension\CoreExtension::merge(($context["css_files"] ?? null), $this->extensions['Glpi\Application\View\Extension\PluginExtension']->getPluginsCssFiles(((array_key_exists("is_anonymous_page", $context)) ? (Twig\Extension\CoreExtension::default(($context["is_anonymous_page"] ?? null), false)) : (false)))));
        foreach ($context['_seq'] as $context["_key"] => $context["css_file"]) {
            // line 58
            yield "      <link rel=\"stylesheet\" type=\"text/css\" href=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\FrontEndAssetsExtension']->cssPath(CoreExtension::getAttribute($this->env, $this->source, $context["css_file"], "path", [], "any", false, false, false, 58), (((CoreExtension::getAttribute($this->env, $this->source, $context["css_file"], "options", [], "any", true, true, false, 58) &&  !(null === CoreExtension::getAttribute($this->env, $this->source, $context["css_file"], "options", [], "any", false, false, false, 58)))) ? (CoreExtension::getAttribute($this->env, $this->source, $context["css_file"], "options", [], "any", false, false, false, 58)) : ([]))), "html", null, true);
            yield "\" />
   ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['css_file'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        yield "
   ";
        // line 61
        yield $this->extensions['Glpi\Application\View\Extension\FrontEndAssetsExtension']->customCss();
        yield "

   <link rel=\"shortcut icon\" type=\"images/x-icon\" href=\"";
        // line 63
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\FrontEndAssetsExtension']->assetPath("/pics/favicon.ico"), "html", null, true);
        yield "\" />

   ";
        // line 65
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["js_files"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["js_file"]) {
            // line 66
            yield "      <script type=\"text/javascript\" src=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\FrontEndAssetsExtension']->jsPath(CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "path", [], "any", false, false, false, 66), (((CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", true, true, false, 66) &&  !(null === CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", false, false, false, 66)))) ? (CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", false, false, false, 66)) : ([]))), "html", null, true);
            yield "\"></script>
   ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['js_file'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 68
        yield "
   ";
        // line 69
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["js_modules"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["js_file"]) {
            // line 70
            yield "      <script type=\"module\" src=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\FrontEndAssetsExtension']->jsPath(CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "path", [], "any", false, false, false, 70), (((CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", true, true, false, 70) &&  !(null === CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", false, false, false, 70)))) ? (CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", false, false, false, 70)) : ([]))), "html", null, true);
            yield "\"></script>
   ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['js_file'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 72
        yield "
   ";
        // line 73
        yield $this->extensions['Glpi\Application\View\Extension\FrontEndAssetsExtension']->localesJs();
        yield "
</head>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "layout/parts/head.html.twig";
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
        return array (  165 => 73,  162 => 72,  153 => 70,  149 => 69,  146 => 68,  137 => 66,  133 => 65,  128 => 63,  123 => 61,  120 => 60,  111 => 58,  107 => 57,  102 => 55,  99 => 54,  78 => 52,  73 => 51,  69 => 48,  65 => 45,  61 => 42,  54 => 37,  48 => 35,  42 => 34,  38 => 32,);
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

<!DOCTYPE html>
<html lang=\"{{ lang }}\" {% if high_contrast %}data-high-contrast=\"1\"{% endif %}
      {{ glpi_request_id is defined ? 'data-glpi-request-id=' ~ glpi_request_id : '' }}>
<head>
   <title>{{ title }} - GLPI</title>

   <meta charset=\"utf-8\" />

   {# prevent IE to turn into compatible mode... #}
   <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />

   {# auto desktop / mobile viewport #}
   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />

   {# prevent robots to index GLPI instances #}
   <meta name=\"robots\" content=\"noindex, nofollow\" />

    {# Custom header tags #}
    {% for header_tag in custom_header_tags|merge(get_plugins_header_tags(is_anonymous_page|default(false))) %}
        <{{ header_tag.tag }} {% for key, value in header_tag.properties %}{{ key }}=\"{{ value }}\" {% endfor %}/>
    {% endfor %}

   <meta property=\"glpi:csrf_token\" content=\"{{ csrf_token(true) }}\" />

   {% for css_file in css_files|merge(get_plugins_css_files(is_anonymous_page|default(false))) %}
      <link rel=\"stylesheet\" type=\"text/css\" href=\"{{ css_path(css_file.path, css_file.options ?? []) }}\" />
   {% endfor %}

   {{ custom_css() }}

   <link rel=\"shortcut icon\" type=\"images/x-icon\" href=\"{{ asset_path('/pics/favicon.ico') }}\" />

   {% for js_file in js_files %}
      <script type=\"text/javascript\" src=\"{{ js_path(js_file.path, js_file.options ?? []) }}\"></script>
   {% endfor %}

   {% for js_file in js_modules %}
      <script type=\"module\" src=\"{{ js_path(js_file.path, js_file.options ?? []) }}\"></script>
   {% endfor %}

   {{ locales_js() }}
</head>
", "layout/parts/head.html.twig", "/var/www/html/glpi/templates/layout/parts/head.html.twig");
    }
}
