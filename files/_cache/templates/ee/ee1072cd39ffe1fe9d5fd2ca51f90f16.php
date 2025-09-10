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

/* components/user/picture.html.twig */
class __TwigTemplate_8f967c2cb92d650131d869239aa51b5a extends Template
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
        $context["enable_anonymization"] = (($context["enable_anonymization"]) ?? (false));
        // line 34
        $context["avatar_size"] = (($context["avatar_size"]) ?? ("avatar-md"));
        // line 35
        $context["anonymized"] = (($context["enable_anonymization"] ?? null) && ($this->extensions['Glpi\Application\View\Extension\ConfigExtension']->getEntityConfig("anonymize_support_agents", $this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactive_entity")) != Twig\Extension\CoreExtension::constant("Entity::ANONYMIZE_DISABLED")));
        // line 36
        $context["user"] = (($context["user_object"]) ?? ($this->extensions['Glpi\Application\View\Extension\ItemtypeExtension']->getItem("User", ($context["users_id"] ?? null))));
        // line 37
        $context["with_link"] = (($context["with_link"]) ?? (true));
        // line 38
        $context["user_thumbnail"] = CoreExtension::getAttribute($this->env, $this->source, ($context["user"] ?? null), "getThumbnailPicturePath", [($context["enable_anonymization"] ?? null)], "method", false, false, false, 38);
        // line 39
        if (((($context["user_thumbnail"] ?? null) == null) &&  !$this->extensions['Glpi\Application\View\Extension\ConfigExtension']->getEntityConfig("display_users_initials", $this->extensions['Glpi\Application\View\Extension\SessionExtension']->session("glpiactive_entity")))) {
            // line 40
            yield "    ";
            $context["user_thumbnail"] = CoreExtension::getAttribute($this->env, $this->source, ($context["user"] ?? null), "getPicturePath", [($context["enable_anonymization"] ?? null)], "method", false, false, false, 40);
        }
        // line 42
        yield "
";
        // line 43
        if ((($context["with_link"] ?? null) &&  !($context["anonymized"] ?? null))) {
            // line 44
            yield "   <a href=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, ($context["user"] ?? null), "getLinkURL", [], "method", false, false, false, 44), "html", null, true);
            yield "\" class=\"d-flex align-items-center\">
";
        }
        // line 46
        yield "
<span class=\"avatar ";
        // line 47
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["avatar_size"] ?? null), "html", null, true);
        yield " rounded\"
      style=\"";
        // line 48
        if ( !(null === ($context["user_thumbnail"] ?? null))) {
            yield "background-image: url(";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["user_thumbnail"] ?? null), "html", null, true);
            yield "); background-color: inherit; ";
        } else {
            yield " background-color: ";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, ($context["user"] ?? null), "getUserInitialsBgColor", [], "method", false, false, false, 48), "html", null, true);
        }
        yield "; aspect-ratio: 1;\">
   ";
        // line 49
        if ((null === ($context["user_thumbnail"] ?? null))) {
            // line 50
            yield "         ";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, ($context["user"] ?? null), "getUserInitials", [($context["enable_anonymization"] ?? null)], "method", false, false, false, 50), "html", null, true);
            yield "
   ";
        }
        // line 52
        yield "</span>

";
        // line 54
        if ((($context["with_link"] ?? null) &&  !($context["anonymized"] ?? null))) {
            // line 55
            yield "   ";
            if (($context["display_login"] ?? null)) {
                // line 56
                yield "      <span class=\"ms-2\">";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((($__internal_compile_0 = CoreExtension::getAttribute($this->env, $this->source, ($context["user"] ?? null), "fields", [], "any", false, false, false, 56)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["name"] ?? null) : null), "html", null, true);
                yield "</span>
   ";
            }
            // line 58
            yield "
   </a>
";
        }
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "components/user/picture.html.twig";
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
        return array (  111 => 58,  105 => 56,  102 => 55,  100 => 54,  96 => 52,  90 => 50,  88 => 49,  77 => 48,  73 => 47,  70 => 46,  64 => 44,  62 => 43,  59 => 42,  55 => 40,  53 => 39,  51 => 38,  49 => 37,  47 => 36,  45 => 35,  43 => 34,  41 => 33,  38 => 32,);
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

{% set enable_anonymization = enable_anonymization ?? false %}
{% set avatar_size = avatar_size ?? \"avatar-md\" %}
{% set anonymized = enable_anonymization and entity_config('anonymize_support_agents', session('glpiactive_entity')) != constant('Entity::ANONYMIZE_DISABLED') %}
{% set user = user_object ?? get_item('User', users_id) %}
{% set with_link = with_link ?? true %}
{% set user_thumbnail = user.getThumbnailPicturePath(enable_anonymization) %}
{% if user_thumbnail == null and not entity_config('display_users_initials', session('glpiactive_entity')) %}
    {% set user_thumbnail = user.getPicturePath(enable_anonymization) %}
{% endif %}

{% if with_link and not anonymized %}
   <a href=\"{{ user.getLinkURL() }}\" class=\"d-flex align-items-center\">
{% endif %}

<span class=\"avatar {{ avatar_size }} rounded\"
      style=\"{% if user_thumbnail is not null %}background-image: url({{ user_thumbnail }}); background-color: inherit; {% else %} background-color: {{ user.getUserInitialsBgColor() }}{% endif %}; aspect-ratio: 1;\">
   {% if user_thumbnail is null %}
         {{ user.getUserInitials(enable_anonymization) }}
   {% endif %}
</span>

{% if with_link and not anonymized %}
   {% if display_login %}
      <span class=\"ms-2\">{{ user.fields['name'] }}</span>
   {% endif %}

   </a>
{% endif %}
", "components/user/picture.html.twig", "/var/www/html/glpi/templates/components/user/picture.html.twig");
    }
}
