/*!
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2025 Teclib' and contributors.
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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[4],{

/***/ 27:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientPerformance_vue_vue_type_template_id_49371f5c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _ClientPerformance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ClientPerformance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ClientPerformance_vue_vue_type_template_id_49371f5c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"js/src/vue/Debug/Widget/ClientPerformance.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ClientPerformance_vue_vue_type_template_id_49371f5c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ClientPerformance_vue_vue_type_template_id_49371f5c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);


/***/ }),

/***/ 54:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "py-2 px-3 col-xxl-7 col-xl-9 col-12" }
const _hoisted_2 = { class: "datagrid" }
const _hoisted_3 = { class: "datagrid-item" }
const _hoisted_4 = { class: "datagrid-title" }
const _hoisted_5 = { class: "datagrid-content" }
const _hoisted_6 = { class: "datagrid-item" }
const _hoisted_7 = { class: "datagrid-content" }
const _hoisted_8 = { class: "datagrid-item" }
const _hoisted_9 = { class: "datagrid-content" }
const _hoisted_10 = { class: "datagrid" }
const _hoisted_11 = { class: "datagrid-item" }
const _hoisted_12 = { class: "datagrid-content" }
const _hoisted_13 = { class: "datagrid-item" }
const _hoisted_14 = { class: "datagrid-content" }
const _hoisted_15 = {
  key: 0,
  class: "mt-3 mb-2"
}
const _hoisted_16 = {
  key: 1,
  class: "datagrid"
}
const _hoisted_17 = { class: "datagrid-item" }
const _hoisted_18 = { class: "datagrid-content" }
const _hoisted_19 = { class: "datagrid-item" }
const _hoisted_20 = { class: "datagrid-content" }
const _hoisted_21 = { class: "datagrid-item" }
const _hoisted_22 = { class: "datagrid-content" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", { class: "mb-3" }, "Client performance", -1 /* CACHED */)),
    _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", { class: "mb-2" }, "Timings", -1 /* CACHED */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.paint_timing_label), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(+$setup.time_to_first_paint.toFixed(2)) + " ms", 1 /* TEXT */)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
        _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Time to DOM interactive", -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(+$setup.time_to_dom_interactive.toFixed(2)) + " ms", 1 /* TEXT */)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
        _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Time to DOM complete", -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(+$setup.time_to_dom_complete.toFixed(2)) + " ms", 1 /* TEXT */)
      ])
    ]),
    _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", { class: "mt-3 mb-2" }, "Resource Loading", -1 /* CACHED */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
        _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Total resources", -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.total_resources), 1 /* TEXT */)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
        _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Total resources size", -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(+$setup.total_resources_size.toFixed(2)) + " MiB", 1 /* TEXT */)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Keep empty item at the end to align with previous grid "),
      _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-item" }, null, -1 /* CACHED */))
    ]),
    ($setup.has_memory_perf_support)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_15, "Memory"))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    ($setup.has_memory_perf_support)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
            _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Used JS Heap", -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(+$setup.used_heap.toFixed(2)) + " MiB", 1 /* TEXT */)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [
            _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Total JS Heap", -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(+$setup.total_heap.toFixed(2)) + " MiB", 1 /* TEXT */)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [
            _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "JS Heap Limit", -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(+$setup.heap_limit.toFixed(2)) + " MiB", 1 /* TEXT */)
          ])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ }),

/***/ 55:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ClientPerformance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ClientPerformance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
 

/***/ }),

/***/ 56:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ClientPerformance',
  props: {},
  setup(__props, { expose: __expose }) {
  __expose();

    const props = __props;

    const perf = window.performance;
    const nav_timings = window.performance.getEntriesByType('navigation')[0];
    const paint_timings = window.performance.getEntriesByType('paint');
    const resource_timings = window.performance.getEntriesByType('resource');

    let paint_timing = paint_timings.filter((timing) => timing.name === 'first-paint');
    let paint_timing_label = 'Time to first paint';
    if (paint_timing.length === 0) {
        // Firefox doesn't have first-paint for whatever reason
        paint_timing = paint_timings.filter((timing) => timing.name === 'first-contentful-paint');
    }
    const time_to_first_paint = paint_timing.length > 0 ? paint_timing[0].startTime : -1;
    const time_to_dom_interactive = nav_timings.domInteractive;
    const time_to_dom_complete = nav_timings.domComplete;

    const total_resources = resource_timings.length;
    let total_resources_size = resource_timings.reduce((total, timing) => total + timing.transferSize, 0);
    total_resources_size = total_resources_size / 1024 / 1024;

    const has_memory_perf_support = perf.memory !== undefined;
    let heap_limit = 0;
    let used_heap = 0;
    let total_heap = 0;
    if (has_memory_perf_support) {
        heap_limit = perf.memory.jsHeapSizeLimit / 1024 / 1024;
        used_heap = perf.memory.usedJSHeapSize / 1024 / 1024;
        total_heap = perf.memory.totalJSHeapSize / 1024 / 1024;
    }

const __returned__ = { props, perf, nav_timings, paint_timings, resource_timings, get paint_timing() { return paint_timing }, set paint_timing(v) { paint_timing = v }, get paint_timing_label() { return paint_timing_label }, set paint_timing_label(v) { paint_timing_label = v }, time_to_first_paint, time_to_dom_interactive, time_to_dom_complete, total_resources, get total_resources_size() { return total_resources_size }, set total_resources_size(v) { total_resources_size = v }, has_memory_perf_support, get heap_limit() { return heap_limit }, set heap_limit(v) { heap_limit = v }, get used_heap() { return used_heap }, set used_heap(v) { used_heap = v }, get total_heap() { return total_heap }, set total_heap(v) { total_heap = v } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ })

}]);
//# sourceMappingURL=Debug-Widget-ClientPerformance-vue-a1238cbbb37cecc210d0.js.map