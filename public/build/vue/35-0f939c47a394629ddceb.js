/*!
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2026 Teclib' and contributors.
 * @licence   https://www.gnu.org/licenses/gpl-3.0.html
 *
 * ---------------------------------------------------------------------
 *
 * LICENSE
 *
 * This file is part of GLPI.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * ---------------------------------------------------------------------
 */
"use strict";
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[35],{

/***/ 293
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.filter_option[data-v-8fd5348a] {
        width: 12px;
        height: 12px;
        left: 0;
}
label[data-v-8fd5348a] {
        line-height: 16px;
        text-overflow: ellipsis;
}
ul[data-v-8fd5348a]:not(.dropdown-menu) {
        border-left: 1px dashed #D4D4D4;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Planning/PlanningFilter.vue"],"names":[],"mappings":";AA2II;QACI,WAAW;QACX,YAAY;QACZ,OAAO;AACX;AAEA;QACI,iBAAiB;QACjB,uBAAuB;AAC3B;AAEA;QACI,+BAA+B;AACnC","sourcesContent":["<script setup>\n    /*!\n     * GLPI - Gestionnaire Libre de Parc Informatique\n     * SPDX-License-Identifier: GPL-3.0-or-later\n     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.\n     */\n\n    import { ref } from \"vue\";\n\n    const props = defineProps({\n        filter_key: {\n            type: [String, Number],\n            required: true,\n        },\n        filter_data: {\n            type: Object,\n            required: true,\n        },\n        parent_filter_key: {\n            type: [String, Number],\n            required: false,\n        },\n        active_entity: {\n            type: Object,\n            required: true,\n        },\n    });\n\n    const emits = defineEmits(['deleteFilter', 'toggleFilter', 'filterColorChange']);\n\n    const event_type = props.filter_data.filter_data.type;\n    const expanded = ref(props.filter_data.expanded === true || props.filter_data.expanded === 'expanded');\n    const label_title = props.filter_data.title;\n    const url_not_allowed_label = __('URL \"%s\" is not allowed by your administrator.')\n        .replace('%s', props.filter_data.filter_data.url ?? '')\n        .replace(/&quot;/g, '\"');\n\n    const entities_id = props.active_entity.id ?? null;\n    const is_recursive = props.active_entity.is_recursive ?? null;\n    const token = props.filter_data.token ?? null;\n\n    const ical_export_url = `${CFG_GLPI.root_doc}/front/planning.php?genical=1&uID=${props.filter_data.uID}&gID=${props.filter_data.gID}&entities_id=${entities_id}&is_recursive=${is_recursive}&token=${token}`;\n    const csv_export_url = `${CFG_GLPI.root_doc}/front/planningcsv.php?uID=${props.filter_data.uID}&gID=${props.filter_data.gID}`;\n\n    function copyCalDAVUrl() {\n        copyTextToClipboard(props.filter_data.caldav_url);\n        alert(__('CalDAV URL has been copied to clipboard'));\n    }\n\n    function exportFromURL(url) {\n        window.open(url, '_blank');\n    }\n\n    function changeFilterColor(event) {\n        fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/x-www-form-urlencoded',\n            },\n            body: new URLSearchParams({\n                action: 'color_filter',\n                name: props.filter_key,\n                type: event_type,\n                parent: props.parent_filter_key ?? '',\n                color: event.target.value,\n            }),\n        }).then(response => {\n            if (response.ok) {\n                // Allow the changing of the color in the UI without re-fetching every event\n                emits('filterColorChange');\n            }\n        });\n    }\n</script>\n\n<template>\n    <li :class=\"`${event_type} ${expanded ? 'expanded' : ''}`\" class=\"p-1 pe-0 d-flex flex-wrap align-items-center\">\n        <input type=\"checkbox\" :id=\"filter_key\" name=\"filters[]\" class=\"form-check-input\" :value=\"filter_key\"\n               :checked=\"filter_data.filter_data.display\" @change=\"$emit('toggleFilter', props.filter_key, event_type, $event.target.checked, parent_filter_key)\"/>\n        <i v-if=\"event_type !== 'event_filter'\" :class=\"`ms-1 pb-1 actor_icon ti ti-${event_type.split('_')[0] === 'group' ? 'users' : 'user'}`\" aria-hidden=\"true\"></i>\n        <label :for=\"filter_key\" class=\"ps-1 overflow-hidden d-inline-block text-nowrap\">\n            {{ label_title }}\n        </label>\n        <div class=\"ms-auto d-flex align-items-center\">\n            <span v-if=\"event_type !== 'group_users' && filter_key !== 'OnlyBgEvents' && filter_key !== 'StateDone'\">\n                <input type=\"color\" class=\"border-0\" :name=\"`${filter_key}_color`\" @change=\"changeFilterColor($event)\"\n                       :aria-label=\"__('%s color').replace('%s', label_title)\" :value=\"filter_data.color\"/>\n            </span>\n            <button v-if=\"event_type === 'group_users'\" class=\"btn btn-sm btn-icon btn-ghost-secondary p-1\"\n                    :title=\"__('Toggle filters')\" @click=\"filter_data.expanded = !filter_data.expanded\">\n                <i :class=\"filter_data.expanded ? 'ti ti-caret-up-filled' : 'ti ti-caret-down-filled'\" role=\"presentation\"></i>\n            </button>\n            <div v-if=\"event_type !== 'event_filter'\" class=\"filter_option dropstart d-inline-block position-relative m-1\">\n                <button class=\"btn btn-sm btn-ghost-secondary btn-icon\" data-bs-toggle=\"dropdown\" :title=\"_n('Action', 'Actions', 5)\" :aria-label=\"_n('Action', 'Actions', 5)\">\n                    <i class=\"ti ti-dots\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"dropdown-menu p-0\">\n                    <li v-if=\"filter_data.params.show_delete\" class=\"dropdown-item p-0\">\n                        <button class=\"btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start\"\n                                @click=\"$emit('deleteFilter', props.filter_key, event_type)\">\n                            {{ __('Delete') }}\n                        </button>\n                    </li>\n                    <li v-if=\"filter_data.show_export_buttons\" class=\"dropdown-item p-0\">\n                        <button class=\"btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start\"\n                                @click=\"exportFromURL(ical_export_url)\">\n                            {{ _x('button', 'Export') }} - {{ __('Ical') }}\n                        </button>\n                    </li>\n                    <li v-if=\"filter_data.show_export_buttons\" class=\"dropdown-item p-0\">\n                        <button class=\"btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start\"\n                                @click=\"exportFromURL(`${filter_data.webcal_base_url}${ical_export_url}`)\">\n                            {{ _x('button', 'Export') }} - {{ __('Webcal') }}\n                        </button>\n                    </li>\n                    <li v-if=\"filter_data.show_export_buttons\" class=\"dropdown-item p-0\">\n                        <button class=\"btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start\"\n                                @click=\"exportFromURL(csv_export_url)\">\n                            {{ _x('button', 'Export') }} - {{ __('CSV') }}\n                        </button>\n                    </li>\n                    <li v-if=\"filter_data.show_export_buttons && filter_data.caldav_url\" class=\"dropdown-item p-0\">\n                        <button class=\"btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start\" @click.prevent=\"copyCalDAVUrl\">\n                            {{ __('Copy CalDAV URL to clipboard') }}\n                        </button>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <ul v-if=\"filter_data.caldav_url && event_type === 'group_users'\"\n            class=\"p-0 mt-1 ms-1 w-100\" :class=\"filter_data.expanded ? '' : 'd-none'\">\n            <PlanningFilter v-for=\"(user_filter_data, user_filter_key) in filter_data.child_filters\" :key=\"user_filter_key\" :active_entity=\"active_entity\"\n                            :filter_key=\"user_filter_key\" :filter_data=\"user_filter_data\" :parent_filter_key=\"filter_key\"\n                            @toggleFilter=\"(...args) => $emit('toggleFilter', ...args)\"/>\n        </ul>\n    </li>\n</template>\n\n<style scoped>\n    .filter_option {\n        width: 12px;\n        height: 12px;\n        left: 0;\n    }\n\n    label {\n        line-height: 16px;\n        text-overflow: ellipsis;\n    }\n\n    ul:not(.dropdown-menu) {\n        border-left: 1px dashed #D4D4D4;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 292
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_style_index_0_id_8fd5348a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(293);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_style_index_0_id_8fd5348a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_style_index_0_id_8fd5348a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_style_index_0_id_8fd5348a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_style_index_0_id_8fd5348a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 286
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanningFilter_vue_vue_type_template_id_8fd5348a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var _PlanningFilter_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(289);
/* harmony import */ var _PlanningFilter_vue_vue_type_style_index_0_id_8fd5348a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(291);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PlanningFilter_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlanningFilter_vue_vue_type_template_id_8fd5348a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-8fd5348a"],['__file',"js/src/vue/Planning/PlanningFilter.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 290
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PlanningFilter',
  props: {
        filter_key: {
            type: [String, Number],
            required: true,
        },
        filter_data: {
            type: Object,
            required: true,
        },
        parent_filter_key: {
            type: [String, Number],
            required: false,
        },
        active_entity: {
            type: Object,
            required: true,
        },
    },
  emits: ['deleteFilter', 'toggleFilter', 'filterColorChange'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

    /*!
     * GLPI - Gestionnaire Libre de Parc Informatique
     * SPDX-License-Identifier: GPL-3.0-or-later
     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.
     */

    const props = __props;

    const emits = __emit;

    const event_type = props.filter_data.filter_data.type;
    const expanded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.filter_data.expanded === true || props.filter_data.expanded === 'expanded');
    const label_title = props.filter_data.title;
    const url_not_allowed_label = __('URL "%s" is not allowed by your administrator.')
        .replace('%s', props.filter_data.filter_data.url ?? '')
        .replace(/&quot;/g, '"');

    const entities_id = props.active_entity.id ?? null;
    const is_recursive = props.active_entity.is_recursive ?? null;
    const token = props.filter_data.token ?? null;

    const ical_export_url = `${CFG_GLPI.root_doc}/front/planning.php?genical=1&uID=${props.filter_data.uID}&gID=${props.filter_data.gID}&entities_id=${entities_id}&is_recursive=${is_recursive}&token=${token}`;
    const csv_export_url = `${CFG_GLPI.root_doc}/front/planningcsv.php?uID=${props.filter_data.uID}&gID=${props.filter_data.gID}`;

    function copyCalDAVUrl() {
        copyTextToClipboard(props.filter_data.caldav_url);
        alert(__('CalDAV URL has been copied to clipboard'));
    }

    function exportFromURL(url) {
        window.open(url, '_blank');
    }

    function changeFilterColor(event) {
        fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'color_filter',
                name: props.filter_key,
                type: event_type,
                parent: props.parent_filter_key ?? '',
                color: event.target.value,
            }),
        }).then(response => {
            if (response.ok) {
                // Allow the changing of the color in the UI without re-fetching every event
                emits('filterColorChange');
            }
        });
    }

const __returned__ = { props, emits, event_type, expanded, label_title, url_not_allowed_label, entities_id, is_recursive, token, ical_export_url, csv_export_url, copyCalDAVUrl, exportFromURL, changeFilterColor, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 291
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_style_index_0_id_8fd5348a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(292);


/***/ },

/***/ 289
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(290);
 

/***/ },

/***/ 287
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_template_id_8fd5348a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFilter_vue_vue_type_template_id_8fd5348a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);


/***/ },

/***/ 288
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = ["id", "value", "checked"]
const _hoisted_2 = ["for"]
const _hoisted_3 = { class: "ms-auto d-flex align-items-center" }
const _hoisted_4 = { key: 0 }
const _hoisted_5 = ["name", "aria-label", "value"]
const _hoisted_6 = ["title"]
const _hoisted_7 = {
  key: 2,
  class: "filter_option dropstart d-inline-block position-relative m-1"
}
const _hoisted_8 = ["title", "aria-label"]
const _hoisted_9 = { class: "dropdown-menu p-0" }
const _hoisted_10 = {
  key: 0,
  class: "dropdown-item p-0"
}
const _hoisted_11 = {
  key: 1,
  class: "dropdown-item p-0"
}
const _hoisted_12 = {
  key: 2,
  class: "dropdown-item p-0"
}
const _hoisted_13 = {
  key: 3,
  class: "dropdown-item p-0"
}
const _hoisted_14 = {
  key: 4,
  class: "dropdown-item p-0"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PlanningFilter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlanningFilter", true)

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([`${$setup.event_type} ${$setup.expanded ? 'expanded' : ''}`, "p-1 pe-0 d-flex flex-wrap align-items-center"])
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      id: $props.filter_key,
      name: "filters[]",
      class: "form-check-input",
      value: $props.filter_key,
      checked: $props.filter_data.filter_data.display,
      onChange: _cache[0] || (_cache[0] = $event => (_ctx.$emit('toggleFilter', $setup.props.filter_key, $setup.event_type, $event.target.checked, $props.parent_filter_key)))
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1),
    ($setup.event_type !== 'event_filter')
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`ms-1 pb-1 actor_icon ti ti-${$setup.event_type.split('_')[0] === 'group' ? 'users' : 'user'}`),
          "aria-hidden": "true"
        }, null, 2 /* CLASS */))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      for: $props.filter_key,
      class: "ps-1 overflow-hidden d-inline-block text-nowrap"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.label_title), 9 /* TEXT, PROPS */, _hoisted_2),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
      ($setup.event_type !== 'group_users' && $props.filter_key !== 'OnlyBgEvents' && $props.filter_key !== 'StateDone')
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              type: "color",
              class: "border-0",
              name: `${$props.filter_key}_color`,
              onChange: _cache[1] || (_cache[1] = $event => ($setup.changeFilterColor($event))),
              "aria-label": _ctx.__('%s color').replace('%s', $setup.label_title),
              value: $props.filter_data.color
            }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_5)
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($setup.event_type === 'group_users')
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 1,
            class: "btn btn-sm btn-icon btn-ghost-secondary p-1",
            title: _ctx.__('Toggle filters'),
            onClick: _cache[2] || (_cache[2] = $event => ($props.filter_data.expanded = !$props.filter_data.expanded))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.filter_data.expanded ? 'ti ti-caret-up-filled' : 'ti ti-caret-down-filled'),
              role: "presentation"
            }, null, 2 /* CLASS */)
          ], 8 /* PROPS */, _hoisted_6))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($setup.event_type !== 'event_filter')
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
              class: "btn btn-sm btn-ghost-secondary btn-icon",
              "data-bs-toggle": "dropdown",
              title: _ctx._n('Action', 'Actions', 5),
              "aria-label": _ctx._n('Action', 'Actions', 5)
            }, [...(_cache[8] || (_cache[8] = [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                class: "ti ti-dots",
                "aria-hidden": "true"
              }, null, -1 /* CACHED */)
            ]))], 8 /* PROPS */, _hoisted_8),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [
              ($props.filter_data.params.show_delete)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_10, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      class: "btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start",
                      onClick: _cache[3] || (_cache[3] = $event => (_ctx.$emit('deleteFilter', $setup.props.filter_key, $setup.event_type)))
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Delete')), 1 /* TEXT */)
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              ($props.filter_data.show_export_buttons)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_11, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      class: "btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start",
                      onClick: _cache[4] || (_cache[4] = $event => ($setup.exportFromURL($setup.ical_export_url)))
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx._x('button', 'Export')) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Ical')), 1 /* TEXT */)
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              ($props.filter_data.show_export_buttons)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_12, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      class: "btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start",
                      onClick: _cache[5] || (_cache[5] = $event => ($setup.exportFromURL(`${$props.filter_data.webcal_base_url}${$setup.ical_export_url}`)))
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx._x('button', 'Export')) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Webcal')), 1 /* TEXT */)
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              ($props.filter_data.show_export_buttons)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_13, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      class: "btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start",
                      onClick: _cache[6] || (_cache[6] = $event => ($setup.exportFromURL($setup.csv_export_url)))
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx._x('button', 'Export')) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('CSV')), 1 /* TEXT */)
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              ($props.filter_data.show_export_buttons && $props.filter_data.caldav_url)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_14, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      class: "btn btn-ghost-secondary btn-sm p-2 w-100 border-radius-0 justify-content-start",
                      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.copyCalDAVUrl, ["prevent"])
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Copy CalDAV URL to clipboard')), 1 /* TEXT */)
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ])
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]),
    ($props.filter_data.caldav_url && $setup.event_type === 'group_users')
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
          key: 1,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["p-0 mt-1 ms-1 w-100", $props.filter_data.expanded ? '' : 'd-none'])
        }, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.filter_data.child_filters, (user_filter_data, user_filter_key) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PlanningFilter, {
              key: user_filter_key,
              active_entity: $props.active_entity,
              filter_key: user_filter_key,
              filter_data: user_filter_data,
              parent_filter_key: $props.filter_key,
              onToggleFilter: _cache[7] || (_cache[7] = (...args) => _ctx.$emit('toggleFilter', ...args))
            }, null, 8 /* PROPS */, ["active_entity", "filter_key", "filter_data", "parent_filter_key"]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ], 2 /* CLASS */))
}

/***/ }

}]);
//# sourceMappingURL=35-0f939c47a394629ddceb.js.map