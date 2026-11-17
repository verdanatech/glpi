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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[31],{

/***/ 374
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
.fc-content[data-v-844147ac] {
        color: initial;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Reservations/ReservationEvent.vue"],"names":[],"mappings":";AA0DI;QACI,cAAc;AAClB","sourcesContent":["<script setup>\n    /*!\n     * GLPI - Gestionnaire Libre de Parc Informatique\n     * SPDX-License-Identifier: GPL-3.0-or-later\n     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.\n     */\n\n    import {onMounted, onUnmounted, useTemplateRef} from \"vue\";\n\n    const props = defineProps({\n        event_info: {\n            type: Object,\n            required: true,\n        },\n    });\n\n    const event_content = useTemplateRef('event_content');\n    const event = props.event_info.event;\n    const icon_class = event.extendedProps?.icon || '';\n    const icon_alt = event.extendedProps?.icon_alt || '';\n    let popover = null;\n\n    onMounted(() => {\n        if (!event_content.value) {\n            return;\n        }\n\n        popover = new bootstrap.Popover(event_content.value.closest('.fc-event'), {\n            trigger: 'hover focus',\n            html: true,\n            content: event.extendedProps.comment\n        });\n    });\n\n    onUnmounted(() => {\n        if (!event_content.value) {\n            return;\n        }\n        if (popover) {\n            popover.dispose();\n        }\n    });\n</script>\n\n<template>\n    <div ref=\"event_content\" class=\"fc-content px-1 overflow-hidden fw-bold\">\n        <span class=\"fc-time me-1 text-nowrap\">{{ event_info.timeText.split(':')[0].padStart(2, 0) }}</span>\n        <span class=\"fc-title\">\n            {{ event_info.event.title }}\n            <template v-if=\"icon_class\">\n                <i :class=\"icon_class\" :title=\"icon_alt\" class=\"ms-1 align-text-bottom\" aria-hidden=\"true\"></i>\n                <span class=\"visually-hidden\">{{ icon_alt }}</span>\n            </template>\n        </span>\n    </div>\n</template>\n\n<style scoped>\n    .fc-content {\n        color: initial;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 382
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
[data-v-6c38146a] .defaultDate {
        background: #e3fce8;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Reservations/ReservationScheduler.vue"],"names":[],"mappings":";AAiNI;QACI,mBAAmB;AACvB","sourcesContent":["<script setup>\n    /*!\n     * GLPI - Gestionnaire Libre de Parc Informatique\n     * SPDX-License-Identifier: GPL-3.0-or-later\n     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.\n     */\n\n    import dayGridPlugin from \"@fullcalendar/daygrid\";\n    import interactionPlugin from \"@fullcalendar/interaction\";\n    import listPlugin from \"@fullcalendar/list\";\n    import timeGridPlugin from \"@fullcalendar/timegrid\";\n    import resourceTimelinePlugin from \"@fullcalendar/resource-timeline\";\n    import BaseFullCalendar from \"../FullCalendar/BaseFullCalendar.vue\";\n    import {onMounted, ref, useTemplateRef, watch} from \"vue\";\n    import ReservationEvent from \"./ReservationEvent.vue\";\n    import useScheduler from \"../FullCalendar/useScheduler.js\";\n\n    const props = defineProps({\n        id: {\n            type: [String, Number],\n            required: true,\n        },\n        can_reserve: {\n            type: Boolean,\n            default: false,\n        },\n        now: {\n            type: String,\n            default: null,\n        },\n        default_date: {\n            type: [String, Date],\n            default: new Date(),\n        },\n        current_view: {\n            type: String\n        },\n    });\n\n    const { getListFullView, getResourceWeekView, resourceWeekDayLevel } = useScheduler();\n    const id = Number(props.id);\n    const default_date = new Date(props.default_date);\n    const calendar = useTemplateRef('calendar');\n    let calendar_api = null;\n\n    const calendar_options = {\n        initialView: localStorage.getItem(\"fcDefaultViewReservation\") !== null\n            ? localStorage.getItem(\"fcDefaultViewReservation\")\n            : (props.current_view || 'dayGridMonth'),\n        now: props.now,\n        plugins: [\n            dayGridPlugin,\n            interactionPlugin,\n            listPlugin,\n            timeGridPlugin,\n            resourceTimelinePlugin,\n        ],\n        initialDate: props.default_date,\n        views: {\n            listFull: getListFullView(id > 0 ? 10 : 1),\n            resourceWeek: getResourceWeekView(),\n        },\n        events: {\n            url:  `${CFG_GLPI.root_doc}/ajax/reservations.php`,\n            extraParams: {\n                'action': 'get_events',\n                'reservationitems_id': id,\n            },\n            failure: (error) => {\n                console.error('there was an error while fetching events!', error);\n            }\n        },\n        resources: {\n            url:  `${CFG_GLPI.root_doc}/ajax/reservations.php`,\n            method: 'GET',\n            extraParams: {\n                'action': 'get_resources',\n            }\n        },\n        dayCellClassNames: (arg) => {\n            if (datesAreSameDay(arg.date, default_date)) {\n                return ['defaultDate'];\n            }\n            return [];\n        },\n        dayCellDidMount: (arg) => markDayHeading(arg.el.querySelector('.fc-daygrid-day-number')),\n        dayHeaderDidMount: (arg) => {\n            // Month view column headers are weekday names, not days: they carry no date.\n            if (arg.el.dataset.date === undefined) {\n                return;\n            }\n\n            markDayHeading(arg.el.querySelector('.fc-col-header-cell-cushion, .fc-list-day-text'));\n        },\n        slotLabelDidMount: (arg) => {\n            // Timeline rows are week, day then hour. timeGrid time axis labels are always level 0.\n            if (arg.level !== resourceWeekDayLevel) {\n                return;\n            }\n\n            markDayHeading(arg.el.querySelector('.fc-timeline-slot-cushion'));\n        },\n        selectable: props.can_reserve,\n        select: (info) => {\n            if (props.can_reserve) {\n                glpi_ajax_dialog({\n                    title: __(\"Add reservation\"),\n                    url: `${CFG_GLPI.root_doc}/ajax/reservations.php`,\n                    params: {\n                        action: 'add_edit_reservation_fromselect',\n                        id: 0,\n                        item: [id],\n                        begin: info.start.toISOString(),\n                        end: info.end.toISOString(),\n                    },\n                    dialogclass: 'modal-xl',\n                });\n            }\n            calendar_api.unselect();\n        },\n        eventResize: (info) => {\n            editEvent(info);\n        },\n        eventDrop: (info) => {\n            editEvent(info);\n        },\n        eventClick: (info) => {\n            const event = info.event;\n            const ajax_url = event.extendedProps.ajaxurl;\n            const editable = event.extendedProps._editable;\n\n            info.jsEvent.preventDefault();\n\n            if (!editable || !ajax_url) {\n                return;\n            }\n\n            glpi_ajax_dialog({\n                title: __(\"Edit reservation\"),\n                url: ajax_url,\n                dialogclass: 'modal-xl',\n            });\n        }\n    };\n\n    const current_view = ref(calendar_options.initialView);\n\n    onMounted(() => {\n        calendar_api = calendar.value.getApi();\n    });\n\n    function editEvent(info) {\n        const event = info.event;\n        const revert_fn = info.revert;\n        const start = event.start;\n        const end = event.end;\n\n        fetch(`${CFG_GLPI.root_doc}/ajax/reservations.php`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/x-www-form-urlencoded',\n                'X-Requested-With': 'XMLHttpRequest',\n            },\n            body: new URLSearchParams({\n                action: 'update_event',\n                id: event.id,\n                begin: start.toISOString(),\n                end: end.toISOString(),\n            }),\n        }).then(response => {\n            if (!response.ok) {\n                revert_fn();\n            }\n        }).catch(() => {\n            revert_fn();\n        });\n    }\n\n    function datesAreSameDay(date1, date2) {\n        return date1.getFullYear() === date2.getFullYear() &&\n            date1.getMonth() === date2.getMonth() &&\n            date1.getDate() === date2.getDate();\n    }\n\n    // Mark the node FullCalendar already renders, to keep the grid and table semantics.\n    function markDayHeading(day) {\n        // Disabled cells render an empty placeholder number, which must not become a heading.\n        if (!day || day.textContent.trim() === '') {\n            return;\n        }\n\n        day.setAttribute('role', 'heading');\n        day.setAttribute('aria-level', '3');\n    }\n\n    watch(current_view, (new_view) => {\n        localStorage.setItem(\"fcDefaultViewReservation\", new_view);\n    });\n</script>\n\n<template>\n    <BaseFullCalendar ref=\"calendar\" class=\"flex-grow-1\" :calendar_options=\"calendar_options\" v-model:currentView=\"current_view\">\n        <template #eventContent=\"event_info\">\n            <ReservationEvent :view_type=\"current_view\" :event_info=\"event_info\"/>\n        </template>\n    </BaseFullCalendar>\n</template>\n\n<style scoped>\n    :deep(.defaultDate) {\n        background: #e3fce8;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 373
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_style_index_0_id_844147ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(374);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_style_index_0_id_844147ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_style_index_0_id_844147ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_style_index_0_id_844147ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_style_index_0_id_844147ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 381
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_style_index_0_id_6c38146a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(382);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_style_index_0_id_6c38146a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_style_index_0_id_6c38146a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_style_index_0_id_6c38146a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_style_index_0_id_6c38146a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 367
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReservationEvent_vue_vue_type_template_id_844147ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(368);
/* harmony import */ var _ReservationEvent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(370);
/* harmony import */ var _ReservationEvent_vue_vue_type_style_index_0_id_844147ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(372);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ReservationEvent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ReservationEvent_vue_vue_type_template_id_844147ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-844147ac"],['__file',"js/src/vue/Reservations/ReservationEvent.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 371
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ReservationEvent',
  props: {
        event_info: {
            type: Object,
            required: true,
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

    /*!
     * GLPI - Gestionnaire Libre de Parc Informatique
     * SPDX-License-Identifier: GPL-3.0-or-later
     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.
     */

    const props = __props;

    const event_content = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('event_content');
    const event = props.event_info.event;
    const icon_class = event.extendedProps?.icon || '';
    const icon_alt = event.extendedProps?.icon_alt || '';
    let popover = null;

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        if (!event_content.value) {
            return;
        }

        popover = new bootstrap.Popover(event_content.value.closest('.fc-event'), {
            trigger: 'hover focus',
            html: true,
            content: event.extendedProps.comment
        });
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
        if (!event_content.value) {
            return;
        }
        if (popover) {
            popover.dispose();
        }
    });

const __returned__ = { props, event_content, event, icon_class, icon_alt, get popover() { return popover }, set popover(v) { popover = v }, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, onUnmounted: vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted, useTemplateRef: vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 375
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReservationScheduler_vue_vue_type_template_id_6c38146a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var _ReservationScheduler_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
/* harmony import */ var _ReservationScheduler_vue_vue_type_style_index_0_id_6c38146a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(380);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ReservationScheduler_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ReservationScheduler_vue_vue_type_template_id_6c38146a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6c38146a"],['__file',"js/src/vue/Reservations/ReservationScheduler.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 379
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(312);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(315);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(317);
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(319);
/* harmony import */ var _FullCalendar_BaseFullCalendar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(136);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _ReservationEvent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(367);
/* harmony import */ var _FullCalendar_useScheduler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(229);

    
    
    
    
    
    
    
    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ReservationScheduler',
  props: {
        id: {
            type: [String, Number],
            required: true,
        },
        can_reserve: {
            type: Boolean,
            default: false,
        },
        now: {
            type: String,
            default: null,
        },
        default_date: {
            type: [String, Date],
            default: new Date(),
        },
        current_view: {
            type: String
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

    /*!
     * GLPI - Gestionnaire Libre de Parc Informatique
     * SPDX-License-Identifier: GPL-3.0-or-later
     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.
     */

    const props = __props;

    const { getListFullView, getResourceWeekView, resourceWeekDayLevel } = (0,_FullCalendar_useScheduler_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
    const id = Number(props.id);
    const default_date = new Date(props.default_date);
    const calendar = (0,vue__WEBPACK_IMPORTED_MODULE_6__.useTemplateRef)('calendar');
    let calendar_api = null;

    const calendar_options = {
        initialView: localStorage.getItem("fcDefaultViewReservation") !== null
            ? localStorage.getItem("fcDefaultViewReservation")
            : (props.current_view || 'dayGridMonth'),
        now: props.now,
        plugins: [
            _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__["default"],
            _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"],
            _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__["default"],
            _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"],
            _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_4__["default"],
        ],
        initialDate: props.default_date,
        views: {
            listFull: getListFullView(id > 0 ? 10 : 1),
            resourceWeek: getResourceWeekView(),
        },
        events: {
            url:  `${CFG_GLPI.root_doc}/ajax/reservations.php`,
            extraParams: {
                'action': 'get_events',
                'reservationitems_id': id,
            },
            failure: (error) => {
                console.error('there was an error while fetching events!', error);
            }
        },
        resources: {
            url:  `${CFG_GLPI.root_doc}/ajax/reservations.php`,
            method: 'GET',
            extraParams: {
                'action': 'get_resources',
            }
        },
        dayCellClassNames: (arg) => {
            if (datesAreSameDay(arg.date, default_date)) {
                return ['defaultDate'];
            }
            return [];
        },
        dayCellDidMount: (arg) => markDayHeading(arg.el.querySelector('.fc-daygrid-day-number')),
        dayHeaderDidMount: (arg) => {
            // Month view column headers are weekday names, not days: they carry no date.
            if (arg.el.dataset.date === undefined) {
                return;
            }

            markDayHeading(arg.el.querySelector('.fc-col-header-cell-cushion, .fc-list-day-text'));
        },
        slotLabelDidMount: (arg) => {
            // Timeline rows are week, day then hour. timeGrid time axis labels are always level 0.
            if (arg.level !== resourceWeekDayLevel) {
                return;
            }

            markDayHeading(arg.el.querySelector('.fc-timeline-slot-cushion'));
        },
        selectable: props.can_reserve,
        select: (info) => {
            if (props.can_reserve) {
                glpi_ajax_dialog({
                    title: __("Add reservation"),
                    url: `${CFG_GLPI.root_doc}/ajax/reservations.php`,
                    params: {
                        action: 'add_edit_reservation_fromselect',
                        id: 0,
                        item: [id],
                        begin: info.start.toISOString(),
                        end: info.end.toISOString(),
                    },
                    dialogclass: 'modal-xl',
                });
            }
            calendar_api.unselect();
        },
        eventResize: (info) => {
            editEvent(info);
        },
        eventDrop: (info) => {
            editEvent(info);
        },
        eventClick: (info) => {
            const event = info.event;
            const ajax_url = event.extendedProps.ajaxurl;
            const editable = event.extendedProps._editable;

            info.jsEvent.preventDefault();

            if (!editable || !ajax_url) {
                return;
            }

            glpi_ajax_dialog({
                title: __("Edit reservation"),
                url: ajax_url,
                dialogclass: 'modal-xl',
            });
        }
    };

    const current_view = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)(calendar_options.initialView);

    (0,vue__WEBPACK_IMPORTED_MODULE_6__.onMounted)(() => {
        calendar_api = calendar.value.getApi();
    });

    function editEvent(info) {
        const event = info.event;
        const revert_fn = info.revert;
        const start = event.start;
        const end = event.end;

        fetch(`${CFG_GLPI.root_doc}/ajax/reservations.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: new URLSearchParams({
                action: 'update_event',
                id: event.id,
                begin: start.toISOString(),
                end: end.toISOString(),
            }),
        }).then(response => {
            if (!response.ok) {
                revert_fn();
            }
        }).catch(() => {
            revert_fn();
        });
    }

    function datesAreSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }

    // Mark the node FullCalendar already renders, to keep the grid and table semantics.
    function markDayHeading(day) {
        // Disabled cells render an empty placeholder number, which must not become a heading.
        if (!day || day.textContent.trim() === '') {
            return;
        }

        day.setAttribute('role', 'heading');
        day.setAttribute('aria-level', '3');
    }

    ;(0,vue__WEBPACK_IMPORTED_MODULE_6__.watch)(current_view, (new_view) => {
        localStorage.setItem("fcDefaultViewReservation", new_view);
    });

const __returned__ = { props, getListFullView, getResourceWeekView, resourceWeekDayLevel, id, default_date, calendar, get calendar_api() { return calendar_api }, set calendar_api(v) { calendar_api = v }, calendar_options, current_view, editEvent, datesAreSameDay, markDayHeading, get dayGridPlugin() { return _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__["default"] }, get interactionPlugin() { return _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"] }, get listPlugin() { return _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__["default"] }, get timeGridPlugin() { return _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"] }, get resourceTimelinePlugin() { return _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_4__["default"] }, BaseFullCalendar: _FullCalendar_BaseFullCalendar_vue__WEBPACK_IMPORTED_MODULE_5__["default"], onMounted: vue__WEBPACK_IMPORTED_MODULE_6__.onMounted, ref: vue__WEBPACK_IMPORTED_MODULE_6__.ref, useTemplateRef: vue__WEBPACK_IMPORTED_MODULE_6__.useTemplateRef, watch: vue__WEBPACK_IMPORTED_MODULE_6__.watch, ReservationEvent: _ReservationEvent_vue__WEBPACK_IMPORTED_MODULE_7__["default"], get useScheduler() { return _FullCalendar_useScheduler_js__WEBPACK_IMPORTED_MODULE_8__["default"] } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 372
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_style_index_0_id_844147ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);


/***/ },

/***/ 380
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_style_index_0_id_6c38146a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(381);


/***/ },

/***/ 370
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(371);
 

/***/ },

/***/ 378
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
 

/***/ },

/***/ 368
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_template_id_844147ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationEvent_vue_vue_type_template_id_844147ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(369);


/***/ },

/***/ 376
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_template_id_6c38146a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ReservationScheduler_vue_vue_type_template_id_6c38146a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);


/***/ },

/***/ 369
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = {
  ref: "event_content",
  class: "fc-content px-1 overflow-hidden fw-bold"
}
const _hoisted_2 = { class: "fc-time me-1 text-nowrap" }
const _hoisted_3 = { class: "fc-title" }
const _hoisted_4 = ["title"]
const _hoisted_5 = { class: "visually-hidden" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.event_info.timeText.split(':')[0].padStart(2, 0)), 1 /* TEXT */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.event_info.event.title) + " ", 1 /* TEXT */),
      ($setup.icon_class)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.icon_class, "ms-1 align-text-bottom"]),
              title: $setup.icon_alt,
              "aria-hidden": "true"
            }, null, 10 /* CLASS, PROPS */, _hoisted_4),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.icon_alt), 1 /* TEXT */)
          ], 64 /* STABLE_FRAGMENT */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ])
  ], 512 /* NEED_PATCH */))
}

/***/ },

/***/ 377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["BaseFullCalendar"], {
    ref: "calendar",
    class: "flex-grow-1",
    calendar_options: $setup.calendar_options,
    currentView: $setup.current_view,
    "onUpdate:currentView": _cache[0] || (_cache[0] = $event => (($setup.current_view) = $event))
  }, {
    eventContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((event_info) => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ReservationEvent"], {
        view_type: $setup.current_view,
        event_info: event_info
      }, null, 8 /* PROPS */, ["view_type", "event_info"])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["currentView"]))
}

/***/ }

}]);
//# sourceMappingURL=Reservations-ReservationScheduler-vue-2ac9a70802dcdd7da642.js.map