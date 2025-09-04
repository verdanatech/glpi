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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[13],{

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

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServerPerformance_vue_vue_type_template_id_01d0544c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _ServerPerformance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ServerPerformance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ServerPerformance_vue_vue_type_template_id_01d0544c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"js/src/vue/Debug/Widget/ServerPerformance.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ServerPerformance_vue_vue_type_template_id_01d0544c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ServerPerformance_vue_vue_type_template_id_01d0544c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);


/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "py-2 px-3 col-xxl-7 col-xl-9 col-12" }
const _hoisted_2 = { class: "datagrid" }
const _hoisted_3 = { class: "datagrid-item" }
const _hoisted_4 = { class: "datagrid-content" }
const _hoisted_5 = { class: "datagrid-item" }
const _hoisted_6 = { class: "datagrid-content" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", { class: "mb-3" }, "Server performance", -1 /* CACHED */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Initial Execution Time", -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(+$setup.props.initial_request.server_performance.execution_time) + " ms", 1 /* TEXT */)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
        _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Total Execution Time", -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.total_execution_time) + " ms", 1 /* TEXT */)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-item" }, [
        _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Memory Usage", -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-content h-100 col-8" }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.memory_usage) + " MiB / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.memory_limit) + " MiB")
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-item" }, [
        _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-title" }, "Memory Peak", -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "datagrid-content" }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.memory_peak) + " MiB / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.memory_limit) + " MiB")
      ])
    ])
  ]))
}

/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ServerPerformance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ServerPerformance_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
 

/***/ }),

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ServerPerformance',
  props: {
        initial_request: {
            type: Object,
            required: true
        },
        ajax_requests: {
            type: Array,
            required: true
        }
    },
  setup(__props, { expose: __expose }) {
  __expose();

    const props = __props;

    const server_perf = props.initial_request.server_performance;
    const memory_usage = +(server_perf.memory_usage / 1024 / 1024).toFixed(2);
    const memory_peak = +(server_perf.memory_peak / 1024 / 1024).toFixed(2);
    const memory_limit = +(server_perf.memory_limit / 1024 / 1024).toFixed(2);
    const total_execution_time = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let total = props.initial_request.server_performance.execution_time;
        for (const request of props.ajax_requests) {
            if (request.profile !== undefined) {
                total += +request.profile.server_performance.execution_time;
            }
        }
        return +total;
    });

const __returned__ = { props, server_perf, memory_usage, memory_peak, memory_limit, total_execution_time, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ })

}]);
//# sourceMappingURL=Debug-Widget-ServerPerformance-vue-e8c7904fddf51b27a13e.js.map