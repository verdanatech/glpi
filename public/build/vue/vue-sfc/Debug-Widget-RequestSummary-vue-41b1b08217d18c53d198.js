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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[9],{

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

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RequestSummary_vue_vue_type_template_id_401e970c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _RequestSummary_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RequestSummary_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RequestSummary_vue_vue_type_template_id_401e970c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"js/src/vue/Debug/Widget/RequestSummary.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 92:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_RequestSummary_vue_vue_type_template_id_401e970c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_RequestSummary_vue_vue_type_template_id_401e970c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);


/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "table" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Request Summary (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.current_profile.id) + ")", 1 /* TEXT */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " Initial Execution Time: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.total_execution_time) + " ms ", 1 /* TEXT */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Memory Usage: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.memory_usage) + " MiB / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.memory_limit) + " MiB "),
            _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Memory Peak: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.memory_peak) + " MiB / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.memory_limit) + " MiB ")
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" SQL Requests: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.total_sql_queries) + " ", 1 /* TEXT */),
            _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" SQL Duration: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.total_sql_duration.toFixed(1)) + " ms ", 1 /* TEXT */)
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_RequestSummary_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_RequestSummary_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
 

/***/ }),

/***/ 95:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'RequestSummary',
  props: {
        current_profile: {
            type: Object,
            required: true
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

    const props = __props;

    const server_perf = props.current_profile.server_performance;
    const memory_usage = +(server_perf.memory_usage / 1024 / 1024).toFixed(2);
    const memory_peak = +(server_perf.memory_peak / 1024 / 1024).toFixed(2);
    const memory_limit = +(server_perf.memory_limit / 1024 / 1024).toFixed(2);
    let total_execution_time = +server_perf.execution_time;

    let total_sql_duration = 0;
    let total_sql_queries = 0;
    $.each(props.current_profile.sql['queries'], (i, query) => {
        total_sql_queries++;
        total_sql_duration += query['time'];
    });

const __returned__ = { props, server_perf, memory_usage, memory_peak, memory_limit, get total_execution_time() { return total_execution_time }, set total_execution_time(v) { total_execution_time = v }, get total_sql_duration() { return total_sql_duration }, set total_sql_duration(v) { total_sql_duration = v }, get total_sql_queries() { return total_sql_queries }, set total_sql_queries(v) { total_sql_queries = v } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ })

}]);
//# sourceMappingURL=Debug-Widget-RequestSummary-vue-41b1b08217d18c53d198.js.map