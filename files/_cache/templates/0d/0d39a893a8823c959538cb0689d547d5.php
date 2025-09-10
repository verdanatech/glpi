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

/* layout/parts/page_footer.html.twig */
class __TwigTemplate_7a2044ccbf748707e02636c2a7dffc07 extends Template
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
        // line 34
        $context["js_files"] = Twig\Extension\CoreExtension::merge(($context["js_files"] ?? null), $this->extensions['Glpi\Application\View\Extension\PluginExtension']->getPluginsJsScriptsFiles(false));
        // line 35
        $context["js_modules"] = Twig\Extension\CoreExtension::merge(($context["js_modules"] ?? null), $this->extensions['Glpi\Application\View\Extension\PluginExtension']->getPluginsJsModulesFiles(false));
        // line 36
        yield "
            </main> ";
        // line 38
        yield "         </div> ";
        // line 39
        yield "      </div> ";
        // line 40
        yield "   </div> ";
        // line 41
        yield "
   <div class=\"floating-buttons d-inline-flex\">
      <span class=\"btn btn-secondary d-none me-1\" id=\"backtotop\">
         <i class=\"fas fa-arrow-up\" title=\"";
        // line 44
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Back to top of the page"), "html", null, true);
        yield "\">
            <span class=\"visually-hidden\">";
        // line 45
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Top of the page"), "html", null, true);
        yield "</span>
         </i>
      </span>
   </div>

   ";
        // line 50
        if ($this->extensions['Glpi\Application\View\Extension\ConfigExtension']->config("maintenance_mode")) {
            // line 51
            yield "      <div id=\"maintenance-float\">
         <a href=\"";
            // line 52
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path("front/config.form.php?forcetab=Config\$5"), "html", null, true);
            yield "\">GLPI MAINTENANCE MODE</a>
      </div>
   ";
        }
        // line 55
        yield "
   ";
        // line 56
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["js_files"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["js_file"]) {
            // line 57
            yield "      <script type=\"text/javascript\" src=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\FrontEndAssetsExtension']->jsPath(CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "path", [], "any", false, false, false, 57), (((CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", true, true, false, 57) &&  !(null === CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", false, false, false, 57)))) ? (CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", false, false, false, 57)) : ([]))), "html", null, true);
            yield "\"></script>
   ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['js_file'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 59
        yield "
   ";
        // line 60
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["js_modules"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["js_file"]) {
            // line 61
            yield "      <script type=\"module\" src=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\FrontEndAssetsExtension']->jsPath(CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "path", [], "any", false, false, false, 61), (((CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", true, true, false, 61) &&  !(null === CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", false, false, false, 61)))) ? (CoreExtension::getAttribute($this->env, $this->source, $context["js_file"], "options", [], "any", false, false, false, 61)) : ([]))), "html", null, true);
            yield "\"></script>
   ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['js_file'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 63
        yield "
</body>
</html>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "layout/parts/page_footer.html.twig";
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
        return array (  114 => 63,  105 => 61,  101 => 60,  98 => 59,  89 => 57,  85 => 56,  82 => 55,  76 => 52,  73 => 51,  71 => 50,  63 => 45,  59 => 44,  54 => 41,  52 => 40,  50 => 39,  48 => 38,  45 => 36,  43 => 35,  41 => 34,  38 => 32,);
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

{# JS scripts / modules are loaded in the footer in non-anonymous pages #}
{% set js_files = js_files|merge(get_plugins_js_scripts_files(false)) %}
{% set js_modules = js_modules|merge(get_plugins_js_modules_files(false)) %}

            </main> {# #page #}
         </div> {# .page-body #}
      </div> {# .page-wrapper #}
   </div> {# .page #}

   <div class=\"floating-buttons d-inline-flex\">
      <span class=\"btn btn-secondary d-none me-1\" id=\"backtotop\">
         <i class=\"fas fa-arrow-up\" title=\"{{ __('Back to top of the page') }}\">
            <span class=\"visually-hidden\">{{ __('Top of the page') }}</span>
         </i>
      </span>
   </div>

   {% if config('maintenance_mode') %}
      <div id=\"maintenance-float\">
         <a href=\"{{ path('front/config.form.php?forcetab=Config\$5') }}\">GLPI MAINTENANCE MODE</a>
      </div>
   {% endif %}

   {% for js_file in js_files %}
      <script type=\"text/javascript\" src=\"{{ js_path(js_file.path, js_file.options ?? []) }}\"></script>
   {% endfor %}

   {% for js_file in js_modules %}
      <script type=\"module\" src=\"{{ js_path(js_file.path, js_file.options ?? []) }}\"></script>
   {% endfor %}

</body>
</html>
", "layout/parts/page_footer.html.twig", "/var/www/html/glpi/templates/layout/parts/page_footer.html.twig");
    }
}
