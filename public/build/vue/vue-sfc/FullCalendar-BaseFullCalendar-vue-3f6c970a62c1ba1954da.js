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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[17],{

/***/ 232
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
.fc.fc-theme-standard[data-v-f6fc8558] {
        --fc-border-color: var(--tblr-border-color);
}
[data-v-f6fc8558] .fc-button-primary {
      background-color: var(--tblr-secondary) !important;
      border-color: var(--tblr-secondary) !important;
      color: var(--tblr-secondary-fg, #fff) !important;
&:not(:disabled):active,
      &:not(:disabled).fc-button-active {
         background-color: var(--tblr-primary) !important;
         border-color: var(--tblr-primary) !important;
         color: var(--tblr-primary-fg, #fff) !important;
}
}
[data-v-f6fc8558] .fc-toolbar-title {
       font-size: 1.25em;
}
[data-v-f6fc8558] .fc-toolbar-title button {
       vertical-align: baseline;
       margin-inline-start: 0.25em;
}
[data-v-f6fc8558] .fc-toolbar-title .ti {
       font-size: 1.5em;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/FullCalendar/BaseFullCalendar.vue"],"names":[],"mappings":";AAyFI;QACI,2CAA2C;AAC/C;AAED;MACG,kDAAkD;MAClD,8CAA8C;MAC9C,gDAAgD;AAEhD;;SAEG,gDAAgD;SAChD,4CAA4C;SAC5C,8CAA8C;AACjD;AACH;AAEA;OACI,iBAAiB;AACrB;AAEA;OACI,wBAAwB;OACxB,2BAA2B;AAC/B;AAEA;OACI,gBAAgB;AACpB","sourcesContent":["<script setup>\n    /*!\n     * GLPI - Gestionnaire Libre de Parc Informatique\n     * SPDX-License-Identifier: GPL-3.0-or-later\n     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.\n     */\n    import FullCalendar from \"@fullcalendar/vue3\";\n    import {useTemplateRef, watch, ref} from 'vue';\n    import allLocales from \"@fullcalendar/core/locales-all\";\n    import useScheduler from \"./useScheduler.js\";\n\n    const props = defineProps({\n        calendar_options: {\n            type: Object,\n            required: true,\n        },\n    });\n\n    defineExpose({\n        getApi: () => calendar.value.getApi(),\n    });\n\n    const emit = defineEmits(['currentViewDataChanged']);\n\n    const { defaultHeaderToolbar } = useScheduler();\n    const calendar = useTemplateRef('calendar');\n\n    const document_lang = document.documentElement.lang;\n    let matching_locales = allLocales.filter(locale => locale.code === document_lang);\n    if (matching_locales.length === 0) {\n        // try to match only the language part of the locale\n        const document_lang_short = document_lang.split('-')[0];\n        matching_locales = allLocales.filter(locale => locale.code.startsWith(document_lang_short));\n    }\n\n    const default_fullcalendar_options = {\n        height: Math.max(window.innerHeight - 272, 300),\n        timeZone: 'UTC',\n        weekNumbers: true,\n        eventTimeFormat: {\n            hour: 'numeric',\n            minute: '2-digit',\n        },\n        headerToolbar: defaultHeaderToolbar,\n        editable: true,\n        nowIndicator: true,\n        schedulerLicenseKey: \"GPL-My-Project-Is-Open-Source\",\n        resourceAreaWidth: '15%',\n        resourceAreaHeaderContent: __('Resources'),\n        slotMinTime: CFG_GLPI.planning_begin,\n        slotMaxTime: CFG_GLPI.planning_end,\n        eventDisplay: 'block',\n        locale: matching_locales.length > 0 ? matching_locales[0] : 'en',\n    };\n    const calendar_options = {...default_fullcalendar_options, ...props.calendar_options};\n    const current_view = defineModel('currentView', {\n        default: 'timeGridWeek',\n    });\n    const current_view_data = ref(null);\n\n    calendar_options.datesSet = (info) => {\n        if (props.calendar_options.datesSet) {\n            props.calendar_options.datesSet(info);\n        }\n        current_view.value = info.view.type;\n        current_view_data.value = info.view.getCurrentData();\n    };\n\n    watch(current_view, (new_view, old_view) => {\n        calendar.value.getApi().changeView(new_view);\n    });\n\n    watch(current_view_data, (new_data) => {\n        if (!new_data) {\n            return;\n        }\n        emit('currentViewDataChanged', new_data);\n    }, { immediate: true });\n</script>\n\n<template>\n    <FullCalendar ref=\"calendar\" :options=\"calendar_options\">\n        <template v-for=\"(_, name) in $slots\" :key=\"name\" #[name]=\"slotProps\">\n            <slot :name=\"name\" v-bind=\"slotProps || {}\" />\n        </template>\n    </FullCalendar>\n</template>\n\n<style scoped>\n    .fc.fc-theme-standard {\n        --fc-border-color: var(--tblr-border-color);\n    }\n\n   :deep(.fc-button-primary) {\n      background-color: var(--tblr-secondary) !important;\n      border-color: var(--tblr-secondary) !important;\n      color: var(--tblr-secondary-fg, #fff) !important;\n\n      &:not(:disabled):active,\n      &:not(:disabled).fc-button-active {\n         background-color: var(--tblr-primary) !important;\n         border-color: var(--tblr-primary) !important;\n         color: var(--tblr-primary-fg, #fff) !important;\n      }\n   }\n\n   :deep(.fc-toolbar-title) {\n       font-size: 1.25em;\n   }\n\n   :deep(.fc-toolbar-title button) {\n       vertical-align: baseline;\n       margin-inline-start: 0.25em;\n   }\n\n   :deep(.fc-toolbar-title .ti) {\n       font-size: 1.5em;\n   }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 231
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_style_index_0_id_f6fc8558_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(232);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_style_index_0_id_f6fc8558_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_style_index_0_id_f6fc8558_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_style_index_0_id_f6fc8558_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_style_index_0_id_f6fc8558_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 136
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseFullCalendar_vue_vue_type_template_id_f6fc8558_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _BaseFullCalendar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);
/* harmony import */ var _BaseFullCalendar_vue_vue_type_style_index_0_id_f6fc8558_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(230);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BaseFullCalendar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BaseFullCalendar_vue_vue_type_template_id_f6fc8558_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f6fc8558"],['__file',"js/src/vue/FullCalendar/BaseFullCalendar.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _fullcalendar_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var _fullcalendar_core_locales_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(149);
/* harmony import */ var _useScheduler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(229);


    
    
    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'BaseFullCalendar',
  props: /*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeModels)({
        calendar_options: {
            type: Object,
            required: true,
        },
    }, {
    "currentView": {
        default: 'timeGridWeek',
    },
    "currentViewModifiers": {},
  }),
  emits: /*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeModels)(['currentViewDataChanged'], ["update:currentView"]),
  setup(__props, { expose: __expose, emit: __emit }) {

    /*!
     * GLPI - Gestionnaire Libre de Parc Informatique
     * SPDX-License-Identifier: GPL-3.0-or-later
     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.
     */
    const props = __props;

    __expose({
        getApi: () => calendar.value.getApi(),
    });

    const emit = __emit;

    const { defaultHeaderToolbar } = (0,_useScheduler_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('calendar');

    const document_lang = document.documentElement.lang;
    let matching_locales = _fullcalendar_core_locales_all__WEBPACK_IMPORTED_MODULE_2__["default"].filter(locale => locale.code === document_lang);
    if (matching_locales.length === 0) {
        // try to match only the language part of the locale
        const document_lang_short = document_lang.split('-')[0];
        matching_locales = _fullcalendar_core_locales_all__WEBPACK_IMPORTED_MODULE_2__["default"].filter(locale => locale.code.startsWith(document_lang_short));
    }

    const default_fullcalendar_options = {
        height: Math.max(window.innerHeight - 272, 300),
        timeZone: 'UTC',
        weekNumbers: true,
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
        },
        headerToolbar: defaultHeaderToolbar,
        editable: true,
        nowIndicator: true,
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        resourceAreaWidth: '15%',
        resourceAreaHeaderContent: __('Resources'),
        slotMinTime: CFG_GLPI.planning_begin,
        slotMaxTime: CFG_GLPI.planning_end,
        eventDisplay: 'block',
        locale: matching_locales.length > 0 ? matching_locales[0] : 'en',
    };
    const calendar_options = {...default_fullcalendar_options, ...props.calendar_options};
    const current_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useModel)(__props, 'currentView');
    const current_view_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    calendar_options.datesSet = (info) => {
        if (props.calendar_options.datesSet) {
            props.calendar_options.datesSet(info);
        }
        current_view.value = info.view.type;
        current_view_data.value = info.view.getCurrentData();
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(current_view, (new_view, old_view) => {
        calendar.value.getApi().changeView(new_view);
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(current_view_data, (new_data) => {
        if (!new_data) {
            return;
        }
        emit('currentViewDataChanged', new_data);
    }, { immediate: true });

const __returned__ = { props, emit, defaultHeaderToolbar, calendar, document_lang, get matching_locales() { return matching_locales }, set matching_locales(v) { matching_locales = v }, default_fullcalendar_options, calendar_options, current_view, current_view_data, get FullCalendar() { return _fullcalendar_vue3__WEBPACK_IMPORTED_MODULE_1__["default"] }, useTemplateRef: vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, get allLocales() { return _fullcalendar_core_locales_all__WEBPACK_IMPORTED_MODULE_2__["default"] }, get useScheduler() { return _useScheduler_js__WEBPACK_IMPORTED_MODULE_3__["default"] } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 230
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_style_index_0_id_f6fc8558_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);


/***/ },

/***/ 139
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
 

/***/ },

/***/ 137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_template_id_f6fc8558_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BaseFullCalendar_vue_vue_type_template_id_f6fc8558_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);


/***/ },

/***/ 138
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["FullCalendar"], {
    ref: "calendar",
    options: $setup.calendar_options
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 /* DYNAMIC */ }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$slots, (_, name) => {
      return {
        name: name,
        fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, name, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(slotProps || {})), undefined, true)
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

/***/ },

/***/ 229
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useScheduler)
/* harmony export */ });
/**
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

function useScheduler() {

    function getListFullView(year_range = 10) {
        return {
            type: 'list',
            titleFormat: function () {
                return __('List');
            },
            visibleRange: (currentDate) => {
                const current_year = currentDate.getFullYear();
                return {
                    start: (new Date(currentDate.getTime())).setFullYear(current_year - year_range),
                    end: (new Date(currentDate.getTime())).setFullYear(current_year + year_range)
                };
            }
        };
    }

    function getResourceWeekView() {
        return {
            type: 'resourceTimeline',
            buttonText: __('Timeline Week'),
            duration: { weeks: 1 },
            slotLabelFormat: [
                { week: 'short' },
                { weekday: 'short', day: 'numeric', month: 'numeric', omitCommas: true },
                (date) => {
                    return date.date.hour;
                }
            ]
        };
    }

    return {
        getListFullView,
        getResourceWeekView,
        // Index of the day row in getResourceWeekView()'s slotLabelFormat, above weeks and below hours.
        resourceWeekDayLevel: 1,
        defaultHeaderToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay,listFull,resourceWeek',
        }
    };
}


/***/ }

}]);
//# sourceMappingURL=FullCalendar-BaseFullCalendar-vue-3f6c970a62c1ba1954da.js.map