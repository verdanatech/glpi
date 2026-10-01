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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[34],{

/***/ 285
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
.fc-content[data-v-1c1579b2] {
        color: var(--1c1579b2-event_info\\.textColor);
        margin-inline-end: 8px;
}
.fc-title[data-v-1c1579b2] {
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
}
.content {
&[data-v-1c1579b2] {
        font-weight: normal;
        padding: 0 7px 0 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        display: block;
        }
.event-description {
&[data-v-1c1579b2] {
            border-top: 1px solid rgba(0, 0, 0, 0.2);
            margin-top: 2px;
            padding-top: 2px;
                }
p[data-v-1c1579b2] {
                margin: 0;
}
}
}
.event_type[data-v-1c1579b2] {
        background-color: var(--1c1579b2-type_color);
        position: absolute;
        width: 7px;
        bottom: 0;
        top: 0;
        right: 0;
        margin-block: -1px;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Planning/PlanningEvent.vue","<no source>"],"names":[],"mappings":";AA+EI;QACI,4CAAmC;QACnC,sBAAsB;AAC1B;AAEA;QACI,iBAAiB;QACjB,mBAAmB;QACnB,gBAAgB;QAChB,uBAAuB;AAC3B;AAEA;AC3FJ;QD4FQ,mBAAmB;QACnB,oBAAoB;QACpB,gBAAgB;QAChB,uBAAuB;QACvB,SAAS;QACT,cAAA;QA9EA;AAgFA;ACnGR;YDoGY,wCAAwC;YACxC,eAAe;YACf,gBAAA;gBA7EI;AA+EJ;gBACI,SAAS;AACb;AACJ;AACJ;AAEA;QACI,4CAAoC;QACpC,kBAAkB;QAClB,UAAU;QACV,SAAS;QACT,MAAM;QACN,QAAQ;QACR,kBAAkB;AACtB","sourcesContent":["<script setup>\n    /*!\n     * GLPI - Gestionnaire Libre de Parc Informatique\n     * SPDX-License-Identifier: GPL-3.0-or-later\n     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.\n     */\n\n    import {computed, inject, onMounted, onUnmounted, useTemplateRef} from \"vue\";\n\n    const props = defineProps({\n        event_info: {\n            type: Object,\n            required: true,\n        },\n    });\n\n    const { current_view, event_context_menu_el: context_menu } = inject('scheduler');\n    const event_content = useTemplateRef('event_content');\n    /** Non-ref reference to the FC event element as refs get cleaned before unmounting but we need to reference it */\n    let fc_event_el = null;\n    const event = props.event_info.event;\n    const show_content = computed(() => {\n        return current_view.value !== 'dayGridMonth' && !current_view.value.includes('list') && event._def.ui.display !== 'background' && !event.allDay;\n    });\n    const type_color = event.extendedProps.typeColor;\n    const time_hour = props.event_info.timeText.split(':')[0].padStart(2, '0');\n    const icon_class = event.extendedProps?.icon || '';\n    const icon_alt = event.extendedProps?.icon_alt || '';\n    let popover = null;\n\n    onMounted(() => {\n        event_content.value.closest('.fc-event').addEventListener('contextmenu', handleContextMenu);\n\n        popover = new bootstrap.Popover(event_content.value.closest('.fc-event'), {\n            trigger: 'hover focus',\n            html: true,\n            content: event.extendedProps.tooltip\n        });\n\n        fc_event_el = event_content.value.closest('.fc-event');\n    });\n\n    onUnmounted(() => {\n        if (fc_event_el) {\n            fc_event_el.removeEventListener('contextmenu', handleContextMenu);\n        }\n        if (popover) {\n            popover.dispose();\n        }\n    });\n\n    function handleContextMenu(e) {\n        if (!context_menu.value) {\n            return;\n        }\n        e.preventDefault();\n        context_menu.value.classList.remove('d-none');\n        context_menu.value.style.left = `${e.clientX}px`;\n        context_menu.value.style.top = `${e.clientY}px`;\n        context_menu.value.dataset.event_defid = event._def.defId;\n    }\n</script>\n\n<template>\n    <div ref=\"event_content\" class=\"fc-content px-1 overflow-hidden fw-bold\">\n        <span class=\"fc-time me-1 text-nowrap\">{{ time_hour }}</span>\n        <span class=\"fc-title\">\n            {{ event_info.event.title }}\n            <template v-if=\"icon_class\">\n                <i :class=\"icon_class\" :title=\"icon_alt\" class=\"ms-1\" aria-hidden=\"true\"></i>\n                <span class=\"visually-hidden\">{{ icon_alt }}</span>\n            </template>\n        </span>\n    </div>\n    <span class=\"event_type\"></span>\n    <div v-if=\"show_content\" class=\"content\" v-html=\"event.extendedProps.content\"></div>\n</template>\n\n<style scoped>\n    .fc-content {\n        color: v-bind(event_info.textColor);\n        margin-inline-end: 8px;\n    }\n\n    .fc-title {\n        font-weight: bold;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    .content {\n        font-weight: normal;\n        padding: 0 7px 0 2px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin: 0;\n        display: block;\n\n        .event-description {\n            border-top: 1px solid rgba(0, 0, 0, 0.2);\n            margin-top: 2px;\n            padding-top: 2px;\n\n            p {\n                margin: 0;\n            }\n        }\n    }\n\n    .event_type {\n        background-color: v-bind(type_color);\n        position: absolute;\n        width: 7px;\n        bottom: 0;\n        top: 0;\n        right: 0;\n        margin-block: -1px;\n    }\n</style>\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 284
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_style_index_0_id_1c1579b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(285);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_style_index_0_id_1c1579b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_style_index_0_id_1c1579b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_style_index_0_id_1c1579b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_style_index_0_id_1c1579b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 278
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanningEvent_vue_vue_type_template_id_1c1579b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(279);
/* harmony import */ var _PlanningEvent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(281);
/* harmony import */ var _PlanningEvent_vue_vue_type_style_index_0_id_1c1579b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(283);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PlanningEvent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlanningEvent_vue_vue_type_template_id_1c1579b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1c1579b2"],['__file',"js/src/vue/Planning/PlanningEvent.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);



    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PlanningEvent',
  props: {
        event_info: {
            type: Object,
            required: true,
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

(0,vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars)(_ctx => ({
  "1c1579b2-event_info\.textColor": (__props.event_info.textColor),
  "1c1579b2-type_color": ((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(type_color))
}))

    /*!
     * GLPI - Gestionnaire Libre de Parc Informatique
     * SPDX-License-Identifier: GPL-3.0-or-later
     * SPDX-FileCopyrightText: 2015-2026 Teclib' and contributors.
     */

    const props = __props;

    const { current_view, event_context_menu_el: context_menu } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('scheduler');
    const event_content = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('event_content');
    /** Non-ref reference to the FC event element as refs get cleaned before unmounting but we need to reference it */
    let fc_event_el = null;
    const event = props.event_info.event;
    const show_content = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return current_view.value !== 'dayGridMonth' && !current_view.value.includes('list') && event._def.ui.display !== 'background' && !event.allDay;
    });
    const type_color = event.extendedProps.typeColor;
    const time_hour = props.event_info.timeText.split(':')[0].padStart(2, '0');
    const icon_class = event.extendedProps?.icon || '';
    const icon_alt = event.extendedProps?.icon_alt || '';
    let popover = null;

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        event_content.value.closest('.fc-event').addEventListener('contextmenu', handleContextMenu);

        popover = new bootstrap.Popover(event_content.value.closest('.fc-event'), {
            trigger: 'hover focus',
            html: true,
            content: event.extendedProps.tooltip
        });

        fc_event_el = event_content.value.closest('.fc-event');
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
        if (fc_event_el) {
            fc_event_el.removeEventListener('contextmenu', handleContextMenu);
        }
        if (popover) {
            popover.dispose();
        }
    });

    function handleContextMenu(e) {
        if (!context_menu.value) {
            return;
        }
        e.preventDefault();
        context_menu.value.classList.remove('d-none');
        context_menu.value.style.left = `${e.clientX}px`;
        context_menu.value.style.top = `${e.clientY}px`;
        context_menu.value.dataset.event_defid = event._def.defId;
    }

const __returned__ = { props, current_view, context_menu, event_content, get fc_event_el() { return fc_event_el }, set fc_event_el(v) { fc_event_el = v }, event, show_content, type_color, time_hour, icon_class, icon_alt, get popover() { return popover }, set popover(v) { popover = v }, handleContextMenu, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, onUnmounted: vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted, useTemplateRef: vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 283
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_style_index_0_id_1c1579b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);


/***/ },

/***/ 281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
 

/***/ },

/***/ 279
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_template_id_1c1579b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_PlanningEvent_vue_vue_type_template_id_1c1579b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);


/***/ },

/***/ 280
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
const _hoisted_6 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.time_hour), 1 /* TEXT */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.event_info.event.title) + " ", 1 /* TEXT */),
        ($setup.icon_class)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.icon_class, "ms-1"]),
                title: $setup.icon_alt,
                "aria-hidden": "true"
              }, null, 10 /* CLASS, PROPS */, _hoisted_4),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.icon_alt), 1 /* TEXT */)
            ], 64 /* STABLE_FRAGMENT */))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ])
    ], 512 /* NEED_PATCH */),
    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "event_type" }, null, -1 /* CACHED */)),
    ($setup.show_content)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          class: "content",
          innerHTML: $setup.event.extendedProps.content
        }, null, 8 /* PROPS */, _hoisted_6))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }

}]);
//# sourceMappingURL=34-f156d13e5d49ace07460.js.map