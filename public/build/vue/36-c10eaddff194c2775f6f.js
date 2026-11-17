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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[36],{

/***/ 306
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
h3[data-v-5468984c] {
        background: var(--glpi-form-header-bg);
        color: var(--glpi-form-header-fg);
        margin: 2px 0 0 0;
        padding: .5em .5em .5em .7em;
        line-height: 1.3;
        font-size: 13px;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Planning/PlanningFiltersPanel.vue"],"names":[],"mappings":";AA0FI;QACI,sCAAsC;QACtC,iCAAiC;QACjC,iBAAiB;QACjB,4BAA4B;QAC5B,gBAAgB;QAChB,eAAe;AACnB","sourcesContent":["<script setup>\n    /*!\n     * GLPI - Gestionnaire Libre de Parc Informatique\n     * SPDX-License-Identifier: GPL-3.0-or-later\n     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.\n     */\n\n    import PlanningFiltersList from \"./PlanningFiltersList.vue\";\n    import {ref} from \"vue\";\n\n    const props = defineProps({\n        filters: {\n            type: Object,\n            default: () => ({}),\n        },\n        active_entity: {\n            type: Object,\n            required: true,\n        },\n    });\n\n    const emits = defineEmits(['filtersUpdated']);\n\n    const filters = ref(props.filters);\n    const filters_collapsed = ref(false);\n\n    function showAddCalendar() {\n        const url = `${CFG_GLPI.root_doc}/ajax/planning.php?action=add_planning_form`;\n        glpi_ajax_dialog({\n            url: url,\n            title: __('Add a calendar'),\n        });\n    }\n\n    function toggleFilters() {\n        filters_collapsed.value = !filters_collapsed.value;\n    }\n\n    function deleteFilter(filter_key, event_type) {\n        fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/x-www-form-urlencoded',\n            },\n            body: new URLSearchParams({\n                action: 'delete_filter',\n                filter: filter_key,\n                type: event_type,\n            }),\n        }).then(response => {\n            if (response.ok) {\n                // Remove the deleted filter from the filters object\n                delete(filters.value['plannings'][filter_key]);\n                emits('filtersUpdated');\n            }\n        });\n    }\n</script>\n\n<template>\n    <div id=\"planning_filter\" :style=\"filters_collapsed ? '' : 'min-width: 300px;'\">\n        <div id=\"planning_filter_content\">\n            <div v-if=\"Object.keys(filters).includes('filters')\">\n                <h3 class=\"d-flex justify-content-between fw-normal\" :style=\"filters_collapsed ? 'background: none' : ''\">\n                    <span v-show=\"!filters_collapsed\">{{ __('Filters') }}</span>\n                    <button class=\"btn btn-sm btn-icon btn-ghost-secondary p-1\" @click=\"toggleFilters\"\n                            :title=\"__('Toggle filters')\">\n                        <i :class=\"filters_collapsed ? 'ti ti-caret-right-filled' : 'ti ti-caret-left-filled'\" role=\"presentation\"></i>\n                    </button>\n                </h3>\n                <PlanningFiltersList v-show=\"!filters_collapsed\" :active_entity=\"active_entity\" :filters=\"filters.filters\"\n                                     :can_delete=\"false\" @filtersUpdated=\"emits('filtersUpdated')\"/>\n            </div>\n            <div v-show=\"!filters_collapsed\" v-if=\"Object.keys(filters).includes('plannings')\">\n                <h3 class=\"d-flex justify-content-between fw-normal\">\n                    {{ __('Plannings') }}\n                    <button class=\"btn btn-sm btn-icon btn-ghost-secondary me-1\"\n                            @click=\"showAddCalendar\"\n                            :title=\"__('Add a calendar')\" :aria-label=\"__('Add a calendar')\">\n                        <i class=\"ti ti-circle-plus\" aria-hidden=\"true\"></i>\n                    </button>\n                </h3>\n                <PlanningFiltersList v-show=\"!filters_collapsed\" :active_entity=\"active_entity\" :filters=\"filters.plannings\"\n                                     :can_delete=\"true\" @filtersUpdated=\"emits('filtersUpdated')\"/>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n    h3 {\n        background: var(--glpi-form-header-bg);\n        color: var(--glpi-form-header-fg);\n        margin: 2px 0 0 0;\n        padding: .5em .5em .5em .7em;\n        line-height: 1.3;\n        font-size: 13px;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 305
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_style_index_0_id_5468984c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(306);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_style_index_0_id_5468984c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_style_index_0_id_5468984c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_style_index_0_id_5468984c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_style_index_0_id_5468984c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 294
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanningFiltersList_vue_vue_type_template_id_34aef086__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(295);
/* harmony import */ var _PlanningFiltersList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlanningFiltersList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlanningFiltersList_vue_vue_type_template_id_34aef086__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"js/src/vue/Planning/PlanningFiltersList.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 298
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanningFilter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);

    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PlanningFiltersList',
  props: {
        filters: {
            type: Object,
            default: () => ({}),
        },
        can_delete: {
            type: Boolean,
            default: false,
        },
        active_entity: {
            type: Object,
            required: true,
        },
    },
  emits: ['filtersUpdated'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

    /*!
     * GLPI - Gestionnaire Libre de Parc Informatique
     * SPDX-License-Identifier: GPL-3.0-or-later
     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.
     */

    const props = __props;

    const emits = __emit;

    const filters = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters);

    function deleteFilter(filter_key, event_type) {
        if (!props.can_delete) {
            return;
        }
        fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'delete_filter',
                filter: filter_key,
                type: event_type,
            }),
        }).then(response => {
            if (response.ok) {
                // Remove the deleted filter from the filters object
                delete(filters.value[filter_key]);
                emits('filtersUpdated');
            }
        });
    }

    function toggleFilter(filter_key, event_type, displayed, parent_filter_key = '') {
        fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'toggle_filter',
                name: filter_key,
                type: event_type,
                parent: parent_filter_key,
                display: displayed,
            }),
        }).then(response => {
            const filter = filters.value[filter_key];
            if (response.ok) {
                emits('filtersUpdated');
                if (filter.child_filters && Object.keys(filter.child_filters).length > 0) {
                    for (const child_filter_key in filter.child_filters) {
                        if (filter.child_filters.hasOwnProperty(child_filter_key)) {
                            const child_filter_data = filter.child_filters[child_filter_key];
                            child_filter_data.filter_data.display = displayed;
                        }
                    }
                }
            } else {
                filter.filter_data.display = !displayed;
            }
        });
    }

const __returned__ = { props, emits, filters, deleteFilter, toggleFilter, PlanningFilter: _PlanningFilter_vue__WEBPACK_IMPORTED_MODULE_0__["default"], ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 299
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanningFiltersPanel_vue_vue_type_template_id_5468984c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300);
/* harmony import */ var _PlanningFiltersPanel_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(302);
/* harmony import */ var _PlanningFiltersPanel_vue_vue_type_style_index_0_id_5468984c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(304);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PlanningFiltersPanel_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlanningFiltersPanel_vue_vue_type_template_id_5468984c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5468984c"],['__file',"js/src/vue/Planning/PlanningFiltersPanel.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 303
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanningFiltersList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);

    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PlanningFiltersPanel',
  props: {
        filters: {
            type: Object,
            default: () => ({}),
        },
        active_entity: {
            type: Object,
            required: true,
        },
    },
  emits: ['filtersUpdated'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

    /*!
     * GLPI - Gestionnaire Libre de Parc Informatique
     * SPDX-License-Identifier: GPL-3.0-or-later
     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.
     */

    const props = __props;

    const emits = __emit;

    const filters = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters);
    const filters_collapsed = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);

    function showAddCalendar() {
        const url = `${CFG_GLPI.root_doc}/ajax/planning.php?action=add_planning_form`;
        glpi_ajax_dialog({
            url: url,
            title: __('Add a calendar'),
        });
    }

    function toggleFilters() {
        filters_collapsed.value = !filters_collapsed.value;
    }

    function deleteFilter(filter_key, event_type) {
        fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'delete_filter',
                filter: filter_key,
                type: event_type,
            }),
        }).then(response => {
            if (response.ok) {
                // Remove the deleted filter from the filters object
                delete(filters.value['plannings'][filter_key]);
                emits('filtersUpdated');
            }
        });
    }

const __returned__ = { props, emits, filters, filters_collapsed, showAddCalendar, toggleFilters, deleteFilter, PlanningFiltersList: _PlanningFiltersList_vue__WEBPACK_IMPORTED_MODULE_0__["default"], ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 304
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_style_index_0_id_5468984c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(305);


/***/ },

/***/ 297
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(298);
 

/***/ },

/***/ 302
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(303);
 

/***/ },

/***/ 295
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersList_vue_vue_type_template_id_34aef086__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersList_vue_vue_type_template_id_34aef086__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296);


/***/ },

/***/ 300
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_template_id_5468984c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningFiltersPanel_vue_vue_type_template_id_5468984c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(301);


/***/ },

/***/ 296
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "border-0 list-unstyled m-0 p-0" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_1, [
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filters, (filter_data, filter_key) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["PlanningFilter"], {
        key: filter_key,
        active_entity: $props.active_entity,
        filter_key: filter_key,
        filter_data: filter_data,
        onDeleteFilter: $setup.deleteFilter,
        onToggleFilter: $setup.toggleFilter,
        onFilterColorChange: _cache[0] || (_cache[0] = $event => ($setup.emits('filtersUpdated')))
      }, null, 8 /* PROPS */, ["active_entity", "filter_key", "filter_data"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

/***/ },

/***/ 301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { id: "planning_filter_content" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = ["title"]
const _hoisted_4 = { key: 1 }
const _hoisted_5 = { class: "d-flex justify-content-between fw-normal" }
const _hoisted_6 = ["title", "aria-label"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: "planning_filter",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.filters_collapsed ? '' : 'min-width: 300px;')
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (Object.keys($setup.filters).includes('filters'))
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
              class: "d-flex justify-content-between fw-normal",
              style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.filters_collapsed ? 'background: none' : '')
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Filters')), 513 /* TEXT, NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.filters_collapsed]
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                class: "btn btn-sm btn-icon btn-ghost-secondary p-1",
                onClick: $setup.toggleFilters,
                title: _ctx.__('Toggle filters')
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.filters_collapsed ? 'ti ti-caret-right-filled' : 'ti ti-caret-left-filled'),
                  role: "presentation"
                }, null, 2 /* CLASS */)
              ], 8 /* PROPS */, _hoisted_3)
            ], 4 /* STYLE */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PlanningFiltersList"], {
              active_entity: $props.active_entity,
              filters: $setup.filters.filters,
              can_delete: false,
              onFiltersUpdated: _cache[0] || (_cache[0] = $event => ($setup.emits('filtersUpdated')))
            }, null, 8 /* PROPS */, ["active_entity", "filters"]), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.filters_collapsed]
            ])
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (Object.keys($setup.filters).includes('plannings'))
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_5, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Plannings')) + " ", 1 /* TEXT */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                class: "btn btn-sm btn-icon btn-ghost-secondary me-1",
                onClick: $setup.showAddCalendar,
                title: _ctx.__('Add a calendar'),
                "aria-label": _ctx.__('Add a calendar')
              }, [...(_cache[2] || (_cache[2] = [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                  class: "ti ti-circle-plus",
                  "aria-hidden": "true"
                }, null, -1 /* CACHED */)
              ]))], 8 /* PROPS */, _hoisted_6)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PlanningFiltersList"], {
              active_entity: $props.active_entity,
              filters: $setup.filters.plannings,
              can_delete: true,
              onFiltersUpdated: _cache[1] || (_cache[1] = $event => ($setup.emits('filtersUpdated')))
            }, null, 8 /* PROPS */, ["active_entity", "filters"]), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.filters_collapsed]
            ])
          ], 512 /* NEED_PATCH */)), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.filters_collapsed]
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ])
  ], 4 /* STYLE */))
}

/***/ }

}]);
//# sourceMappingURL=36-c10eaddff194c2775f6f.js.map