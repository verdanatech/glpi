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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[28],{

/***/ 361
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
.planning_on_central .fc-scroller {
        height: auto !important;
        max-height: 400px !important;
}
[data-v-baf7d370] .fc-header-toolbar .fc-toolbar-chunk:first-child {
        visibility: var(--baf7d370-dateNavVisibility);
}
[data-v-baf7d370] .end-of-day {
        border-right: 1px solid var(--tblr-body-color) !important;
}
[data-v-baf7d370] .fc-event-past .event_type {
        opacity: 0.5;
}
@media screen and (max-width: 767px) {
[data-v-baf7d370] .fc-toolbar.fc-header-toolbar {
          flex-direction:column;
}
[data-v-baf7d370] .fc-toolbar-chunk {
          display: table-row;
          text-align:center;
          padding:5px 0;
}
}
[data-v-baf7d370] .fc-timegrid-event {
        overflow: hidden;
}
[data-v-baf7d370] .fc-timegrid-slot {
        height: 2.5em;
}
[data-v-baf7d370] .fc-timeline .fc-event .content {
        max-height: 25px;
}
.planning-context-menu[data-v-baf7d370] {
        z-index:20000;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Planning/PlanningScheduler.vue"],"names":[],"mappings":";AA4MI;QACI,uBAAuB;QACvB,4BAA4B;AAChC;AAEA;QACI,6CAAqC;AACzC;AAEA;QACI,yDAAyD;AAC7D;AAEA;QACI,YAAY;AAChB;AAEA;AACI;UACE,qBAAqB;AACxB;AAEH;UACM,kBAAkB;UAClB,iBAAiB;UACjB,aAAa;AAChB;AACH;AAEA;QACI,gBAAgB;AACpB;AAEA;QACI,aAAa;AACjB;AAEA;QACI,gBAAgB;AACpB;AAEA;QACI,aAAa;AACjB","sourcesContent":["<script setup>\n    /*!\n     * GLPI - Gestionnaire Libre de Parc Informatique\n     * SPDX-License-Identifier: GPL-3.0-or-later\n     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.\n     */\n\n    import {computed, provide, ref, useTemplateRef} from 'vue';\n    import BaseFullCalendar from '../FullCalendar/BaseFullCalendar.vue';\n    import dayGridPlugin from '@fullcalendar/daygrid';\n    import interactionPlugin from '@fullcalendar/interaction';\n    import listPlugin from '@fullcalendar/list';\n    import timeGridPlugin from '@fullcalendar/timegrid';\n    import resourceTimelinePlugin from '@fullcalendar/resource-timeline';\n    import rrulePlugin from '@fullcalendar/rrule';\n    import PlanningEvent from \"./PlanningEvent.vue\";\n    import usePlanningScheduler from \"./usePlanningScheduler.js\";\n\n    const props = defineProps({\n        can_create: {\n            type: Boolean,\n            default: false,\n        },\n        can_delete: {\n            type: Boolean,\n            default: false,\n        },\n        full_view: {\n            type: Boolean,\n            default: true,\n        },\n        now: {\n            type: String,\n        },\n        header: {\n            type: Object,\n        },\n        height: {\n            type: Number,\n            default: () => {\n                const min_height = 300;\n                return Math.max(window.innerHeight - 272, min_height);\n            }\n        },\n        resources: {\n            type: [Array, Object],\n            default: () => ([]),\n        },\n        fullcalendar_options: {\n            type: Object,\n            default: () => ({}),\n        },\n    });\n\n    const all_days = [0, 1, 2, 3, 4, 5, 6];\n    const hidden_days = all_days.filter(day => !CFG_GLPI.planning_work_days.some(n => n == day));\n\n    const event_context_menu = useTemplateRef('event_context_menu');\n    const current_view = ref(props.fullcalendar_options.initialView || 'timeGridWeek');\n    const current_view_data = ref(null);\n    const list_full_year_range = props.full_view ? 5 : 1; // +/- number of years to display in list full view\n    const all_resources = ref(!Array.isArray(props.resources) ? Object.values(props.resources) : props.resources);\n    const visible_res = computed(() => {\n        return Object.keys(all_resources.value).filter(index => {\n            return all_resources.value[index].is_visible\n        });\n    });\n    const dateNavVisibility = computed(() => {\n        return current_view.value === 'listFull' ? 'hidden' : 'visible';\n    });\n    const scheduler = usePlanningScheduler(\n        useTemplateRef('calendar'),\n        current_view,\n        props.full_view,\n        useTemplateRef('date_picker'),\n        event_context_menu,\n        props.now\n    );\n    provide('scheduler', scheduler);\n    const {\n        getListFullView, getResourceWeekView, defaultHeaderToolbar, refresh, clearSelection,\n        cloneEvent, deleteEvent, onEventResize, onEventDrop, createEventFromSelect, hideContextMenu\n    } = scheduler;\n\n    defineExpose({\n        refresh: refresh,\n    });\n\n    const calendar_options = Object.assign({\n        plugins: [\n            dayGridPlugin,\n            interactionPlugin,\n            listPlugin,\n            timeGridPlugin,\n            resourceTimelinePlugin,\n            rrulePlugin,\n        ],\n        height: props.height,\n        weekNumbers: props.full_view,\n        dayMaxEvents: true,\n        now: props.now,// as we set the calendar as UTC, we need to reprecise the current datetime\n        headerToolbar: props.full_view ? (props.header ?? defaultHeaderToolbar) : false,\n        hiddenDays: hidden_days,\n        initialView: current_view.value,\n        views: {\n            listFull: getListFullView(list_full_year_range),\n            resourceWeek: getResourceWeekView(),\n        },\n        resources: (_fetchInfo, successCallback) => {\n            // Filter resources by whether their id is in visible_res.\n            successCallback(all_resources.value.filter((_elem, index) => {\n                return visible_res.value.indexOf(index.toString()) !== -1;\n            }));\n        },\n        eventResize: onEventResize,\n        eventDrop: onEventDrop,\n        eventClick: (info) => {\n            info.jsEvent.preventDefault();\n            hideContextMenu();\n            const event = info.event;\n            const ajax_url = event.extendedProps.ajaxurl;\n\n            if (ajax_url && event.extendedProps._editable) {\n                const start = event.start;\n\n                glpi_ajax_dialog({\n                    url: `${ajax_url}&start=${start.toISOString()}`,\n                    close: refresh,\n                    dialogclass: 'modal-lg',\n                    title: __('Edit an event'),\n                    bs_focus: false\n                });\n            }\n        },\n        selectable: true,\n        select: (info) => {\n            if (!props.can_create) {\n                clearSelection();\n                return false;\n            }\n            hideContextMenu();\n            createEventFromSelect(info);\n        }\n    }, props.fullcalendar_options);\n\n    function getResourceIcon(resource) {\n        let icon = '';\n        switch (resource.extendedProps.itemtype.toLowerCase()) {\n            case \"group\":\n            case \"group_user\":\n                icon = \"users\";\n                break;\n            case \"user\":\n                icon = \"user\";\n        }\n        return icon;\n    }\n</script>\n\n<template>\n    <BaseFullCalendar ref=\"calendar\" class=\"flex-grow-1\" :calendar_options=\"calendar_options\" v-model:currentView=\"current_view\" @currentViewDataChanged=\"current_view_data = $event\">\n        <template #eventContent=\"event_info\">\n            <PlanningEvent :event_info=\"event_info\"/>\n        </template>\n        <template #resourceLabelContent=\"{ resource }\">\n            <span>\n                <i :class=\"`ti ti-${getResourceIcon(resource)}`\" role=\"presentation\"></i>\n                {{ resource.title }}\n            </span>\n        </template>\n    </BaseFullCalendar>\n    <Teleport v-if=\"full_view\" defer to=\".fc-toolbar-title\">\n        <button v-show=\"current_view !== 'listFull'\" ref=\"date_picker\" class=\"btn btn-sm btn-ghost-secondary\"\n                :title=\"_n('Calendar', 'Calendars', 1)\"\n                :aria-label=\"_n('Calendar', 'Calendars', 1)\">\n            <i class=\"ti ti-calendar\" aria-hidden=\"true\"></i>\n        </button>\n    </Teleport>\n    <Teleport v-if=\"full_view\" defer to=\".fc-toolbar-title\">\n        <button class=\"btn btn-sm btn-ghost-secondary\" :title=\"__('Refresh')\" :aria-label=\"__('Refresh')\" @click=\"refresh\">\n            <i class=\"ti ti-refresh\" aria-hidden=\"true\"></i>\n        </button>\n    </Teleport>\n    <Teleport v-if=\"full_view && (can_create || can_delete)\" to=\"body\">\n        <div ref=\"event_context_menu\" class=\"d-none planning-context-menu position-fixed card\">\n            <ul class=\"list-group list-group-flush list-group-hoverable\">\n                <li v-if=\"can_create\" class=\"list-group-item p-0\">\n                    <button class=\"btn btn-ghost-secondary p-2 w-100 border-radius-0\" @click=\"() => cloneEvent(event_context_menu.dataset.event_defid)\">\n                        <i class=\"ti ti-copy\" aria-hidden=\"true\"></i>\n                        {{ __('Clone') }}\n                    </button>\n                </li>\n                <li v-if=\"can_delete\" class=\"list-group-item p-0\">\n                    <button class=\"btn btn-ghost-secondary p-2 w-100 border-radius-0\" @click=\"() => deleteEvent(event_context_menu.dataset.event_defid)\">\n                        <i class=\"ti ti-trash\" aria-hidden=\"true\"></i>\n                        {{ __('Delete') }}\n                    </button>\n                </li>\n            </ul>\n        </div>\n    </Teleport>\n</template>\n\n<style scoped>\n    :global(.planning_on_central .fc-scroller) {\n        height: auto !important;\n        max-height: 400px !important;\n    }\n\n    :deep(.fc-header-toolbar .fc-toolbar-chunk:first-child) {\n        visibility: v-bind(dateNavVisibility);\n    }\n\n    :deep(.end-of-day) {\n        border-right: 1px solid var(--tblr-body-color) !important;\n    }\n\n    :deep(.fc-event-past .event_type) {\n        opacity: 0.5;\n    }\n\n    @media screen and (max-width: 767px) {\n        :deep(.fc-toolbar.fc-header-toolbar) {\n          flex-direction:column;\n       }\n\n    :deep(.fc-toolbar-chunk) {\n          display: table-row;\n          text-align:center;\n          padding:5px 0;\n       }\n    }\n\n    :deep(.fc-timegrid-event) {\n        overflow: hidden;\n    }\n\n    :deep(.fc-timegrid-slot) {\n        height: 2.5em;\n    }\n\n    :deep(.fc-timeline .fc-event .content) {\n        max-height: 25px;\n    }\n\n    .planning-context-menu {\n        z-index:20000;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 360
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_style_index_0_id_baf7d370_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(361);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_style_index_0_id_baf7d370_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_style_index_0_id_baf7d370_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_style_index_0_id_baf7d370_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_style_index_0_id_baf7d370_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanningScheduler_vue_vue_type_template_id_baf7d370_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308);
/* harmony import */ var _PlanningScheduler_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(310);
/* harmony import */ var _PlanningScheduler_vue_vue_type_style_index_0_id_baf7d370_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(359);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PlanningScheduler_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlanningScheduler_vue_vue_type_template_id_baf7d370_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-baf7d370"],['__file',"js/src/vue/Planning/PlanningScheduler.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 311
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _FullCalendar_BaseFullCalendar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(312);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(314);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(315);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(317);
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(319);
/* harmony import */ var _fullcalendar_rrule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(328);
/* harmony import */ var _PlanningEvent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(278);
/* harmony import */ var _usePlanningScheduler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(358);


    
    
    
    
    
    
    
    
    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PlanningScheduler',
  props: {
        can_create: {
            type: Boolean,
            default: false,
        },
        can_delete: {
            type: Boolean,
            default: false,
        },
        full_view: {
            type: Boolean,
            default: true,
        },
        now: {
            type: String,
        },
        header: {
            type: Object,
        },
        height: {
            type: Number,
            default: () => {
                const min_height = 300;
                return Math.max(window.innerHeight - 272, min_height);
            }
        },
        resources: {
            type: [Array, Object],
            default: () => ([]),
        },
        fullcalendar_options: {
            type: Object,
            default: () => ({}),
        },
    },
  setup(__props, { expose: __expose }) {

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars)(_ctx => ({
  "baf7d370-dateNavVisibility": (dateNavVisibility.value)
}))

    /*!
     * GLPI - Gestionnaire Libre de Parc Informatique
     * SPDX-License-Identifier: GPL-3.0-or-later
     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.
     */

    const props = __props;

    const all_days = [0, 1, 2, 3, 4, 5, 6];
    const hidden_days = all_days.filter(day => !CFG_GLPI.planning_work_days.some(n => n == day));

    const event_context_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('event_context_menu');
    const current_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.fullcalendar_options.initialView || 'timeGridWeek');
    const current_view_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const list_full_year_range = props.full_view ? 5 : 1; // +/- number of years to display in list full view
    const all_resources = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!Array.isArray(props.resources) ? Object.values(props.resources) : props.resources);
    const visible_res = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return Object.keys(all_resources.value).filter(index => {
            return all_resources.value[index].is_visible
        });
    });
    const dateNavVisibility = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return current_view.value === 'listFull' ? 'hidden' : 'visible';
    });
    const scheduler = (0,_usePlanningScheduler_js__WEBPACK_IMPORTED_MODULE_9__["default"])(
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('calendar'),
        current_view,
        props.full_view,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('date_picker'),
        event_context_menu,
        props.now
    );
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('scheduler', scheduler);
    const {
        getListFullView, getResourceWeekView, defaultHeaderToolbar, refresh, clearSelection,
        cloneEvent, deleteEvent, onEventResize, onEventDrop, createEventFromSelect, hideContextMenu
    } = scheduler;

    __expose({
        refresh: refresh,
    });

    const calendar_options = Object.assign({
        plugins: [
            _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"],
            _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"],
            _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__["default"],
            _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__["default"],
            _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_6__["default"],
            _fullcalendar_rrule__WEBPACK_IMPORTED_MODULE_7__["default"],
        ],
        height: props.height,
        weekNumbers: props.full_view,
        dayMaxEvents: true,
        now: props.now,// as we set the calendar as UTC, we need to reprecise the current datetime
        headerToolbar: props.full_view ? (props.header ?? defaultHeaderToolbar) : false,
        hiddenDays: hidden_days,
        initialView: current_view.value,
        views: {
            listFull: getListFullView(list_full_year_range),
            resourceWeek: getResourceWeekView(),
        },
        resources: (_fetchInfo, successCallback) => {
            // Filter resources by whether their id is in visible_res.
            successCallback(all_resources.value.filter((_elem, index) => {
                return visible_res.value.indexOf(index.toString()) !== -1;
            }));
        },
        eventResize: onEventResize,
        eventDrop: onEventDrop,
        eventClick: (info) => {
            info.jsEvent.preventDefault();
            hideContextMenu();
            const event = info.event;
            const ajax_url = event.extendedProps.ajaxurl;

            if (ajax_url && event.extendedProps._editable) {
                const start = event.start;

                glpi_ajax_dialog({
                    url: `${ajax_url}&start=${start.toISOString()}`,
                    close: refresh,
                    dialogclass: 'modal-lg',
                    title: __('Edit an event'),
                    bs_focus: false
                });
            }
        },
        selectable: true,
        select: (info) => {
            if (!props.can_create) {
                clearSelection();
                return false;
            }
            hideContextMenu();
            createEventFromSelect(info);
        }
    }, props.fullcalendar_options);

    function getResourceIcon(resource) {
        let icon = '';
        switch (resource.extendedProps.itemtype.toLowerCase()) {
            case "group":
            case "group_user":
                icon = "users";
                break;
            case "user":
                icon = "user";
        }
        return icon;
    }

const __returned__ = { props, all_days, hidden_days, event_context_menu, current_view, current_view_data, list_full_year_range, all_resources, visible_res, dateNavVisibility, scheduler, getListFullView, getResourceWeekView, defaultHeaderToolbar, refresh, clearSelection, cloneEvent, deleteEvent, onEventResize, onEventDrop, createEventFromSelect, hideContextMenu, calendar_options, getResourceIcon, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, provide: vue__WEBPACK_IMPORTED_MODULE_0__.provide, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, useTemplateRef: vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef, BaseFullCalendar: _FullCalendar_BaseFullCalendar_vue__WEBPACK_IMPORTED_MODULE_1__["default"], get dayGridPlugin() { return _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"] }, get interactionPlugin() { return _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"] }, get listPlugin() { return _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__["default"] }, get timeGridPlugin() { return _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__["default"] }, get resourceTimelinePlugin() { return _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_6__["default"] }, get rrulePlugin() { return _fullcalendar_rrule__WEBPACK_IMPORTED_MODULE_7__["default"] }, PlanningEvent: _PlanningEvent_vue__WEBPACK_IMPORTED_MODULE_8__["default"], get usePlanningScheduler() { return _usePlanningScheduler_js__WEBPACK_IMPORTED_MODULE_9__["default"] } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 359
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_style_index_0_id_baf7d370_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(360);


/***/ },

/***/ 310
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
 

/***/ },

/***/ 308
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_template_id_baf7d370_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningScheduler_vue_vue_type_template_id_baf7d370_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);


/***/ },

/***/ 309
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = ["title", "aria-label"]
const _hoisted_2 = ["title", "aria-label"]
const _hoisted_3 = {
  ref: "event_context_menu",
  class: "d-none planning-context-menu position-fixed card"
}
const _hoisted_4 = { class: "list-group list-group-flush list-group-hoverable" }
const _hoisted_5 = {
  key: 0,
  class: "list-group-item p-0"
}
const _hoisted_6 = {
  key: 1,
  class: "list-group-item p-0"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseFullCalendar"], {
      ref: "calendar",
      class: "flex-grow-1",
      calendar_options: $setup.calendar_options,
      currentView: $setup.current_view,
      "onUpdate:currentView": _cache[0] || (_cache[0] = $event => (($setup.current_view) = $event)),
      onCurrentViewDataChanged: _cache[1] || (_cache[1] = $event => ($setup.current_view_data = $event))
    }, {
      eventContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((event_info) => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PlanningEvent"], { event_info: event_info }, null, 8 /* PROPS */, ["event_info"])
      ]),
      resourceLabelContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ resource }) => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`ti ti-${$setup.getResourceIcon(resource)}`),
            role: "presentation"
          }, null, 2 /* CLASS */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(resource.title), 1 /* TEXT */)
        ])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["calendar_options", "currentView"]),
    ($props.full_view)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
          key: 0,
          defer: "",
          to: ".fc-toolbar-title"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            ref: "date_picker",
            class: "btn btn-sm btn-ghost-secondary",
            title: _ctx._n('Calendar', 'Calendars', 1),
            "aria-label": _ctx._n('Calendar', 'Calendars', 1)
          }, [...(_cache[5] || (_cache[5] = [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
              class: "ti ti-calendar",
              "aria-hidden": "true"
            }, null, -1 /* CACHED */)
          ]))], 8 /* PROPS */, _hoisted_1), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.current_view !== 'listFull']
          ])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    ($props.full_view)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
          key: 1,
          defer: "",
          to: ".fc-toolbar-title"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            class: "btn btn-sm btn-ghost-secondary",
            title: _ctx.__('Refresh'),
            "aria-label": _ctx.__('Refresh'),
            onClick: _cache[2] || (_cache[2] = (...args) => ($setup.refresh && $setup.refresh(...args)))
          }, [...(_cache[6] || (_cache[6] = [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
              class: "ti ti-refresh",
              "aria-hidden": "true"
            }, null, -1 /* CACHED */)
          ]))], 8 /* PROPS */, _hoisted_2)
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    ($props.full_view && ($props.can_create || $props.can_delete))
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
          key: 2,
          to: "body"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [
              ($props.can_create)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_5, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      class: "btn btn-ghost-secondary p-2 w-100 border-radius-0",
                      onClick: _cache[3] || (_cache[3] = () => $setup.cloneEvent($setup.event_context_menu.dataset.event_defid))
                    }, [
                      _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                        class: "ti ti-copy",
                        "aria-hidden": "true"
                      }, null, -1 /* CACHED */)),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Clone')), 1 /* TEXT */)
                    ])
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              ($props.can_delete)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_6, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      class: "btn btn-ghost-secondary p-2 w-100 border-radius-0",
                      onClick: _cache[4] || (_cache[4] = () => $setup.deleteEvent($setup.event_context_menu.dataset.event_defid))
                    }, [
                      _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                        class: "ti ti-trash",
                        "aria-hidden": "true"
                      }, null, -1 /* CACHED */)),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Delete')), 1 /* TEXT */)
                    ])
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ])
          ], 512 /* NEED_PATCH */)
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ },

/***/ 358
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePlanningScheduler)
/* harmony export */ });
/* harmony import */ var _FullCalendar_useScheduler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
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

/* global _, glpi_html_dialog, glpi_ajax_dialog, flatpickr */




function usePlanningScheduler(calendar_el, current_view, full_view, date_picker_el, event_context_menu_el, now) {
    const calendar_api = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    let date_picker_flatpickr = null;

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(() => {
        calendar_api.value = calendar_el.value.getApi();
        window.focus();

        if (full_view) {
            date_picker_flatpickr = new flatpickr(date_picker_el.value, {
                // keep the date picker in sync with the calendar's own notion of "now"
                now: now,
                onChange: function (selected_date) {
                    // convert to UTC to avoid timezone issues
                    const date = new Date(
                        Date.UTC(
                            selected_date[0].getFullYear(),
                            selected_date[0].getMonth(),
                            selected_date[0].getDate()
                        )
                    );
                    calendar_api.value.gotoDate(date);
                }
            });
        }
        refresh();

        window.addEventListener('click', hideContextMenu);
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onUnmounted)(() => {
        if (date_picker_flatpickr) {
            date_picker_flatpickr.destroy();
        }
        window.removeEventListener('click', hideContextMenu);
    });

    function hideContextMenu() {
        if (event_context_menu_el.value) {
            event_context_menu_el.value.classList.add('d-none');
        }
    }

    function getCalendarApi() {
        return calendar_api.value;
    }

    function clearSelection() {
        getCalendarApi().unselect();
    }

    function refresh() {
        const api = getCalendarApi();
        if (api.getEventSources().length === 0) {
            const debounced_source = _.debounce(getEvents, 200);
            api.addEventSource(debounced_source);
        }
        if (typeof api.refetchResources === 'function') {
            api.refetchResources();
        }
        api.refetchEvents();
        window.displayAjaxMessageAfterRedirect();
    }

    function editEventTimes(info, move_instance = false) {
        const event = info.event;
        const revert_func = info.revert;
        const ext_props = event.extendedProps;
        const recurring_def = event._def.recurringDef;

        let old_itemtype = null;
        let old_items_id = null;
        let new_itemtype = null;
        let new_items_id = null;

        if (info?.newResource) {
            new_itemtype = info.newResource._resource.extendedProps.itemtype;
            new_items_id = info.newResource._resource.extendedProps.items_id;
        }

        if (info?.oldResource) {
            old_itemtype = info.oldResource._resource.extendedProps.itemtype;
            old_items_id = info.oldResource._resource.extendedProps.items_id;
        }

        let start = event.start;
        let end   = event.end;

        if (!move_instance && recurring_def && recurring_def?.typeData?.origOptions?.dtstart !== start) {
            const startDate = new Date(start);
            const dtstart = recurring_def.typeData._dtstart || recurring_def.typeData.origOptions.dtstart;
            const originDate = new Date(dtstart);

            const hours = startDate.getHours();
            const minutes = startDate.getMinutes();

            originDate.setHours(hours, minutes);

            start = originDate;

            const duration = end - event.start;
            end = new Date(start.getTime() + duration);
        }

        if (typeof end === 'undefined' || end === null) {
            end = new Date(start.getTime());
            if (event.allDay) {
                end.setDate(end.getDate() + 1);
            } else {
                end.setHours(end.getHours() + 2);
            }
        }

        const old_event = info.oldEvent || {};
        const old_start = old_event.start || start;

        fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: new URLSearchParams({
                action:        'update_event_times',
                start:         start.toISOString(),
                end:           end.toISOString(),
                itemtype:      ext_props.itemtype,
                items_id:      ext_props.items_id,
                move_instance: move_instance,
                old_start:     old_start.toISOString(),
                new_actor_itemtype: new_itemtype,
                new_actor_items_id: new_items_id,
                old_actor_itemtype: old_itemtype,
                old_actor_items_id: old_items_id,
            }),
        }).then(response => {
            if (!response.ok) {
                revert_func();
                return false;
            } else {
                return response.json();
            }
        }).then(data => {
            if (data) {
                refresh();
            } else {
                revert_func();
            }
        }).catch(() => {
            revert_func();
        });
    }

    function getEventByDefId(defId) {
        return getCalendarApi()
            .getEvents()
            .find(event => event._def.defId === defId);
    }

    function getEvents(info, success_callback, failure_callback) {
        const view_name = current_view.value;
        const params = {
            start: info.startStr,
            end: info.endStr,
            action: 'get_events',
            view_name: view_name,
        };
        if (!full_view) {
            params.state_done = false;
        }
        const url = `${CFG_GLPI.root_doc}/ajax/planning.php?${new URLSearchParams(params).toString()}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(response => response.json())
            .then(data => {
                success_callback(data);
            }).catch(error => {
            failure_callback(error);
        });
    }

    function cloneEvent(event_defid) {
        const event = getEventByDefId(event_defid);
        if (!event) {
            return;
        }

        let actor = {};
        const resources = event.getResources();

        // manage resource changes
        if (resources.length === 1) {
            actor = {
                itemtype: resources[0].extendedProps.itemtype || null,
                items_id: resources[0].extendedProps.items_id || null,
            };
        }

        fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: new URLSearchParams({
                action: 'clone_event',
                old_itemtype: event.extendedProps.itemtype,
                old_items_id: event.extendedProps.items_id,
                actor_itemtype: actor.itemtype,
                actor_items_id: actor.items_id,
                start: event.start.toISOString(),
                end: event.end.toISOString(),
            }),
        }).then(response => {
            if (response.ok) {
                refresh();
            }
        });
    }

    function deleteEvent(event_defid) {
        const event = getEventByDefId(event_defid);
        if (!event) {
            return;
        }

        const doDelete = (instance = false) => {
            fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: new URLSearchParams({
                    action: 'delete_event',
                    'event[itemtype]': event.extendedProps.itemtype,
                    'event[items_id]': event.extendedProps.items_id,
                    'event[day]': event.start.toISOString().substring(0, 10),
                    'event[instance]': instance ? 1 : 0,
                }),
            }).then(response => {
                if (response.ok) {
                    refresh();
                }
            });
        };

        if (!('is_recurrent' in event.extendedProps) || !event.extendedProps.is_recurrent) {
            doDelete();
        } else {
            glpi_html_dialog({
                title: __("Make a choice"),
                body: `${__("Delete the whole series of the recurrent event")}<br>${
                    __("or just add an exception by deleting this instance?")}`,
                buttons: [
                    {
                        label: __("Series"),
                        click: () => {
                            doDelete(false);
                        }
                    }, {
                        label: _n("Instance", "Instances", 1),
                        click: () => {
                            doDelete(true);
                        }
                    }
                ]
            });
        }
    }

    function createEventFromSelect(info) {
        const itemtype = info.resource?._resource?.extendedProps?.itemtype || '';
        const items_id = info.resource?._resource?.extendedProps?.items_id || 0;

        // prevent adding events on group users
        if (itemtype === 'Group_User') {
            clearSelection();
            return false;
        }

        const start = info.start;
        const end = info.end;

        if (document.querySelector('div.modal.planning-modal') === null) {
            glpi_ajax_dialog({
                url: `${CFG_GLPI.root_doc}/ajax/planning.php`,
                params: {
                    action: 'add_event_fromselect',
                    begin: start.toISOString(),
                    end: end.toISOString(),
                    res_itemtype: itemtype,
                    res_items_id: items_id
                },
                dialogclass: 'modal-lg planning-modal',
                title: __('Add an event'),
                bs_focus: false,
                close: () => refresh()
            });
        }

        clearSelection();
    }

    /**
     * Set end of day markers on timeline view
     */
    function setEndOfDays() {
        if (current_view.value !== 'resourceWeek') {
            return;
        }

        // Compute number of hour slots displayed
        const time_bgein = CFG_GLPI.planning_begin.split(':');
        const time_end = CFG_GLPI.planning_end.split(':');
        const begin_in_minutes = parseInt(time_bgein[0]) * 60 + parseInt(time_bgein[1]);
        const end_in_minutes = parseInt(time_end[0]) * 60 + parseInt(time_end[1]);
        const number_of_slots = Math.ceil((end_in_minutes - begin_in_minutes) / 60);

        // Add EOD to days
        document.querySelectorAll('.fc-timeline-header-row:nth-of-type(2) .fc-day').forEach((day_elem) => {
            day_elem.classList.add('end-of-day');
        });
        // Add EOD to hours
        document.querySelectorAll(`.fc-timeline-header-row:nth-of-type(3) .fc-day:nth-child(${number_of_slots}n)`).forEach((day_elem) => {
            day_elem.classList.add('end-of-day');
        });
        // Add EOD to content slots
        document.querySelectorAll(`.fc-timeline-slots .fc-timeline-slot:nth-child(${number_of_slots}n)`).forEach((day_elem) => {
            day_elem.classList.add('end-of-day');
        });
    }

    function onEventResize(info) {
        const event        = info.event;
        const exprops      = event.extendedProps;
        const is_recurrent = exprops.is_recurrent || false;

        if (is_recurrent) {
            glpi_html_dialog({
                title: __("Recurring event resized"),
                body: __("The resized event is a recurring event. Do you want to change the series or instance ?"),
                buttons: [
                    {
                        label: __("Series"),
                        click: () => editEventTimes(info)
                    }, {
                        label: _n("Instance", "Instances", 1),
                        click: () => editEventTimes(info, true)
                    }
                ]
            });
        } else {
            editEventTimes(info);
        }
    }

    function onEventDrop(info) {
        const event        = info.event;
        const exprops      = event.extendedProps;
        const is_recurrent = exprops.is_recurrent || false;

        if (is_recurrent) {
            glpi_html_dialog({
                title: __("Recurring event dragged"),
                body: __("The dragged event is a recurring event. Do you want to move the series or instance?"),
                buttons: [
                    {
                        label: __("Series"),
                        click: () => editEventTimes(info)
                    }, {
                        label: _n("Instance", "Instances", 1),
                        click: () => editEventTimes(info, true)
                    }
                ]
            });
        } else {
            editEventTimes(info);
        }
    }

    ;(0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(current_view, (new_view) => {
        if (full_view) {
            fetch(`${CFG_GLPI.root_doc}/ajax/planning.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: new URLSearchParams({
                    action: 'view_changed',
                    view: new_view,
                }),
            });
        } else {
            // Observe changes in the DOM before triggering
            const observer = new MutationObserver((mutations, obs) => {
                if (document.readyState === 'complete') {
                    obs.disconnect(); // Stop observation once the DOM is stable
                    setTimeout(() => {
                        document.dispatchEvent(new Event('masonry_grid:layout'));
                    }, 100);
                }
            });

            observer.observe(document.body, {childList: true, subtree: true});
        }

        setEndOfDays();
        refresh();
    });

    return {
        ...(0,_FullCalendar_useScheduler_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        editEventTimes,
        refresh,
        clearSelection,
        getEventByDefId,
        cloneEvent,
        deleteEvent,
        createEventFromSelect,
        setEndOfDays,
        onEventResize,
        onEventDrop,
        hideContextMenu,
        current_view,
        event_context_menu_el,
    };
};


/***/ }

}]);
//# sourceMappingURL=Planning-PlanningScheduler-vue-3748f43b177b3aa4ad9c.js.map