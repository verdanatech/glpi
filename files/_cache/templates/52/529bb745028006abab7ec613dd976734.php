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

/* layout/parts/global_search_form.html.twig */
class __TwigTemplate_aab3f876dc8584763cbd7eb95a98a913 extends Template
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
        if ((($this->extensions['Glpi\Application\View\Extension\SessionExtension']->getCurrentInterface() == "central") && $this->extensions['Glpi\Application\View\Extension\ConfigExtension']->config("allow_search_global"))) {
            // line 34
            yield "<form action=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path("front/search.php"), "html", null, true);
            yield "\" role=\"search\" method=\"get\" data-submit-once>
   <div class=\"input-group input-group-flat\">
      <input type=\"text\" class=\"form-control\" name=\"globalsearch\" placeholder=\"";
            // line 36
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Search…"), "html", null, true);
            yield "\" />
      <span class=\"input-group-text\">
         <button type=\"submit\" class=\"btn btn-link p-0 m-0\" title=\"";
            // line 38
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Search…"), "html", null, true);
            yield "\">
            <span class=\"ti ti-search\" aria-hidden=\"true\"></span>
         </button>
      </span>
   </div>
</form>
";
        }
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "layout/parts/global_search_form.html.twig";
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
        return array (  54 => 38,  49 => 36,  43 => 34,  41 => 33,  38 => 32,);
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

{% if get_current_interface() == 'central' and config('allow_search_global') %}
<form action=\"{{ path('front/search.php') }}\" role=\"search\" method=\"get\" data-submit-once>
   <div class=\"input-group input-group-flat\">
      <input type=\"text\" class=\"form-control\" name=\"globalsearch\" placeholder=\"{{ __('Search…') }}\" />
      <span class=\"input-group-text\">
         <button type=\"submit\" class=\"btn btn-link p-0 m-0\" title=\"{{ __('Search…') }}\">
            <span class=\"ti ti-search\" aria-hidden=\"true\"></span>
         </button>
      </span>
   </div>
</form>
{% endif %}
", "layout/parts/global_search_form.html.twig", "/var/www/html/glpi/templates/layout/parts/global_search_form.html.twig");
    }
}
