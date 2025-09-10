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

/* install/update.html.twig */
class __TwigTemplate_772a2e6ebea2a35e9452c403e7f37fdc extends Template
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
<hr>

<h2>";
        // line 35
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("One last thing before starting"), "html", null, true);
        yield "</h2>

<p>
   ";
        // line 38
        yield ($context["glpinetwork"] ?? null);
        yield "
</p>

";
        // line 41
        if ( !($context["telemetry_enabled"] ?? null)) {
            // line 42
            yield "   <hr>
   <p>
      ";
            // line 44
            yield ($context["telemetry_info"] ?? null);
            yield "
   </p>
";
        }
        // line 47
        yield "
<hr>
<p>
   ";
        // line 50
        yield ($context["reference_info"] ?? null);
        yield "
</p>

<hr>
<form action=\"update.php\" method=\"post\" data-submit-once>
   <div class=\"text-center\">
      <button type=\"submit\" class=\"btn btn-primary\">
         <i class=\"fas fa-thumbs-up me-1\"></i>
         ";
        // line 58
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Use GLPI"), "html", null, true);
        yield "
      </button>
   </div>

   <input type=\"hidden\" name=\"update_end\" value=\"1\">
   <input type=\"hidden\" name=\"_glpi_csrf_token\" value=\"";
        // line 63
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Session::getNewCSRFToken(), "html", null, true);
        yield "\">
</form>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "install/update.html.twig";
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
        return array (  91 => 63,  83 => 58,  72 => 50,  67 => 47,  61 => 44,  57 => 42,  55 => 41,  49 => 38,  43 => 35,  38 => 32,);
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

<hr>

<h2>{{ __(\"One last thing before starting\") }}</h2>

<p>
   {{ glpinetwork|raw }}
</p>

{% if not telemetry_enabled %}
   <hr>
   <p>
      {{ telemetry_info|raw }}
   </p>
{% endif %}

<hr>
<p>
   {{ reference_info|raw }}
</p>

<hr>
<form action=\"update.php\" method=\"post\" data-submit-once>
   <div class=\"text-center\">
      <button type=\"submit\" class=\"btn btn-primary\">
         <i class=\"fas fa-thumbs-up me-1\"></i>
         {{ __(\"Use GLPI\") }}
      </button>
   </div>

   <input type=\"hidden\" name=\"update_end\" value=\"1\">
   <input type=\"hidden\" name=\"_glpi_csrf_token\" value=\"{{ csrf_token() }}\">
</form>
", "install/update.html.twig", "/var/www/html/glpi/templates/install/update.html.twig");
    }
}
