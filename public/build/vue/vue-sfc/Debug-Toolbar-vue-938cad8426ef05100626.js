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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[3],{

/***/ 18:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 19:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 20:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 21:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 22:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 23:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 25:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 26:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

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

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Toolbar_vue_vue_type_template_id_67e46a13_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _Toolbar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _Toolbar_vue_vue_type_style_index_0_id_67e46a13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Toolbar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Toolbar_vue_vue_type_template_id_67e46a13_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-67e46a13"],['__file',"js/src/vue/Debug/Toolbar.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_template_id_67e46a13_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_template_id_67e46a13_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);


/***/ }),

/***/ 46:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "d-flex flex-row align-items-center" }
const _hoisted_2 = { class: "debug-toolbar-badge d-flex" }
const _hoisted_3 = ["disabled"]
const _hoisted_4 = {
  class: "debug-toolbar-widgets nav nav-tabs align-items-center border-0",
  "data-bs-toggle": "tabs"
}
const _hoisted_5 = { class: "debug-toolbar-controls" }
const _hoisted_6 = { class: "debug-toolbar-control" }
const _hoisted_7 = {
  id: "debug-toolbar-expanded-content",
  class: "w-100 card pe-2"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_widget_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("widget-button")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: "debug-toolbar",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('position-fixed bottom-0 card ' + ($setup.show_toolbar ? 'w-100' : '')),
    tabindex: "0",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.show_toolbar ? '' : 'width: fit-content')
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "resize-handle mt-n2",
      onMousedown: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($event.buttons === 1 && ($setup.is_dragging = true)), ["prevent"]))
    }, null, 32 /* NEED_HYDRATION */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          type: "button",
          class: "btn btn-icon border-0 px-3 opacity-100 debug-logo",
          onClick: _cache[1] || (_cache[1] = $event => ($setup.show_toolbar = true)),
          disabled: $setup.show_toolbar,
          title: "Toggle debug bar"
        }, [...(_cache[4] || (_cache[4] = [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-bug" }, null, -1 /* CACHED */)
        ]))], 8 /* PROPS */, _hoisted_3)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('debug-toolbar-content w-100 justify-content-between align-items-center ' + ($setup.show_toolbar ? 'd-flex' : ''))
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.getMainWidgets(), (widget) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_widget_button, {
              id: widget.id,
              title: widget.title,
              icon: widget.icon,
              onClick: $event => ($setup.switchWidget(widget.id)),
              active: widget.id === $setup.active_widget,
              onVnodeMounted: $setup.refreshWidgetButtons
            }, null, 8 /* PROPS */, ["id", "title", "icon", "onClick", "active"]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
              type: "button",
              class: "btn btn-icon border-0 p-1",
              name: "toggle_content_area",
              onClick: _cache[2] || (_cache[2] = $event => ($setup.show_content_area = !$setup.show_content_area)),
              title: "Toggle debug content area"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.show_content_area ? 'ti ti-square-arrow-up' : 'ti ti-square-arrow-down')
              }, null, 2 /* CLASS */)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
              type: "button",
              class: "btn btn-icon border-0 p-1",
              title: "Close",
              onClick: _cache[3] || (_cache[3] = $event => ($setup.show_toolbar = false))
            }, [...(_cache[5] || (_cache[5] = [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-square-x" }, null, -1 /* CACHED */)
            ]))])
          ])
        ])
      ], 2 /* CLASS */), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.show_toolbar]
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
      ($setup.active_widget)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($setup.active_widget_component), {
            key: 0,
            initial_request: $setup.props.initial_request,
            ajax_requests: $setup.ajax_requests,
            onSwitchWidget: $setup.switchWidget,
            widgets: $setup.widgets,
            onRefreshButton: $setup.refreshWidgetButtons
          }, null, 40 /* PROPS, NEED_HYDRATION */, ["initial_request", "ajax_requests"]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 512 /* NEED_PATCH */), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.show_content_area && $setup.show_toolbar]
    ])
  ], 6 /* CLASS, STYLE */))
}

/***/ }),

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
 

/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Toolbar',
  props: {
        initial_request: {
            type: Object,
            default: null,
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

    /**
     * @typedef {{ id: string, parent_id: string|null, category: string, name: string, start: number, end: number }} ProfilerSection
     * @typedef {{ execution_time: number, memory_usage: number, memory_peak: number, memory_limit: number }} ServerPerformanceMetrics
     * @typedef {{ total_requests: number, total_duration: number, queries: { request_id: string, num: number, query: string, time: number, rows: number, warnings: string[], errors: string[] } }} SQLMetrics
     * @typedef {{ id: string, parent_id: string, server_performance: ServerPerformanceMetrics, sql: SQLMetrics, globals: Object.<string, string>, [profiler]: ProfilerSection[] }} Profile
     * @typedef {{ id: string, data: Object.<string, string>, url: string, server_global: Object.<string, string>, type: string, start: Date, time: number, status: number, status_type: string, profile: Profile|null }} AJAXRequestData
     * @typedef {{ x: number, y: number, width: number, height: number }} ClientTimingBounds
     * @typedef {{ queued: Array, redirect: Array, fetch: Array, dns: Array, connection: Array, initial_connection: Array, ssl: Array, request: Array, response: Array }} ClientTimingSections
     * @typedef {{ type: string, name: string, start: number, end: number, bounds: Object.<string, ClientTimingBounds>, sections: ClientTimingSections }} ClientTimingData
     * @typedef {{ id: string, show: function(content_area: jQuery, refresh: boolean) }} Widget
     */
    /**
     * @typedef MainWidget
     * @extends Widget
     * @property {boolean} main_widget=true
     * @property {string} title
     * @property {string|null} icon
     * @property {function(button: jQuery)} refreshButton
     */
    /**
     * @typedef SubWidget
     * @extends Widget
     * @property {boolean} main_widget=false
     */
    const props = __props;

    const active_widget = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const active_widget_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (active_widget.value === null) {
            return null;
        }
        const widget = widgets.find(w => w.id === active_widget.value);
        if (widget === undefined) {
            return null;
        }
        return widget.component_registered_name;
    });

    const ajax_requests = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    const current_request = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.initial_request.id);
    const current_profile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (current_request.value === null) {
            return undefined;
        }
        return getProfile(current_request.value);
    });

    const initial_load = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    /**
     * @type {(MainWidget|SubWidget)[]}
     */
    const widgets = [
        {
            id: 'server_performance',
            title: 'Server performance',
            icon: 'ti ti-clock-play',
            main_widget: true, // This widget shows directly in the toolbar
            component_registered_name: 'widget-server-performance',
            refreshButton: (button) => {
                const server_perf = props.initial_request.server_performance;
                const memory_usage = +(server_perf.memory_usage / 1024 / 1024).toFixed(2);
                const server_performance_button_label = `${_.escape(server_perf.execution_time)} <span class="text-muted"> ms using </span> ${_.escape(memory_usage)} <span class="text-muted"> MiB </span>`;
                button.find('.debug-text').html(server_performance_button_label);
            }
        },
        {
            id: 'sql',
            title: 'SQL Requests',
            icon: 'ti ti-database',
            main_widget: true, // This widget shows directly in the toolbar
            component_registered_name: 'widget-sqlrequests',
            refreshButton: (button) => {
                const sql_data = getCombinedSQLData();
                const database_button_label = `${_.escape(sql_data.total_requests)} <span class="text-muted"> requests </span>`;
                button.find('.debug-text').html(database_button_label);
            }
        },
        {
            id: 'requests',
            title: 'HTTP Requests',
            icon: 'ti ti-refresh',
            main_widget: true, // This widget shows directly in the toolbar
            component_registered_name: 'widget-httprequests',
            refreshButton: (button) => {
                button.find('.debug-text').html(`${ajax_requests.value.length + 1} <span class="text-muted"> requests </span>`);
            }
        },
        {
            id: 'client_performance',
            title: 'Client performance',
            icon: 'ti ti-brand-javascript',
            main_widget: true, // This widget shows directly in the toolbar
            component_registered_name: 'widget-client-performance',
            refreshButton: (button) => {
                if (button.find('.debug-text').text().trim() === '') {
                    setTimeout(() => {
                        const dom_timing = +window.performance.getEntriesByType('navigation')[0].domComplete.toFixed(2);
                        const client_performance_button_label = `${_.escape(dom_timing)} <span class="text-muted"> ms </span>`;
                        button.find('.debug-text').html(client_performance_button_label);
                    }, 200);
                }
            }
        },
        {
            id: 'search_options',
            title: 'Search Options',
            icon: 'ti ti-list-search',
            main_widget: true, // This widget shows directly in the toolbar
            component_registered_name: 'widget-search-options',
            refreshButton: (button) => {}
        },
        {
            id: 'theme_switcher',
            title: 'Palette Switcher',
            icon: 'ti ti-palette',
            main_widget: true, // This widget shows directly in the toolbar
            component_registered_name: 'widget-theme-switcher',
            refreshButton: (button) => {
                button.find('.debug-text').html(`<span class="text-muted">Theme: </span> ${_.escape(document.documentElement.attributes['data-glpi-theme'].value)}`);
            }
        },
        {
            id: 'globals',
            main_widget: false,
            component_registered_name: 'widget-globals',
        },
        {
            id: 'profiler',
            main_widget: false,
            component_registered_name: 'widget-profiler',
        },
        {
            id: 'request_summary',
            main_widget: false,
            component_registered_name: 'widget-request-summary',
        }
    ];

    $(document).ajaxSend((event, xhr, settings) => {
        // If the request is going to the debug AJAX endpoint, don't do anything
        if (settings.url.indexOf('ajax/debug.php') !== -1) {
            return;
        }
        const ajax_id = Math.random().toString(16).slice(2);
        // Tag the request with an id to identify it on the server side
        xhr.setRequestHeader('X-Glpi-Ajax-ID', ajax_id);
        // Need to set the header here too so it is accessible in the ajaxComplete event
        xhr.headers = xhr.headers || {};
        xhr.headers['X-Glpi-Ajax-ID'] = ajax_id;
        const parent_id = $('html').attr('data-glpi-request-id');
        if (parent_id !== undefined) {
            xhr.setRequestHeader('X-Glpi-Ajax-Parent-ID', parent_id);
        }

        let data = settings.data;
        if (settings.type !== 'POST' && data === undefined) {
            // get data from query string
            data = {};
            const query_string = settings.url.split('?')[1];
            if (query_string !== undefined) {
                query_string.split('&').forEach((pair) => {
                    const [key, value] = pair.split('=');
                    data[key] = value;
                });
            }
        } else if (typeof data === 'string') {
            // Post data is a URI encoded string similar to a query string. Values may be JSON strings
            // so we need to parse it and convert it back to an object
            const data_object = {};
            data.split('&').forEach((pair) => {
                const [key, value] = pair.split('=');
                data_object[key] = decodeURIComponent(value);
                // try parsing the value as JSON
                try {
                    data_object[key] = JSON.parse(data_object[key]);
                } catch (e) {
                    // ignore
                }
            });
            data = data_object;
        }
        ajax_requests.value.push({
            'id': ajax_id,
            'status': '...',
            'status_type': 'info',
            'type': settings.type,
            'data': data,
            'url': settings.url,
            'start': event.timeStamp,
        });
        refreshWidgetButtons();
    });

    $(document).ajaxComplete((event, xhr, settings) => {
        // If the request is going to the debug AJAX endpoint, don't do anything
        if (settings.url.indexOf('ajax/debug.php') !== -1) {
            return;
        }
        if (xhr.headers === undefined) {
            return;
        }
        const ajax_id = xhr.headers['X-Glpi-Ajax-ID'];
        if (ajax_id !== undefined) {
            const ajax_request = ajax_requests.value.find((request) => request.id === ajax_id);
            if (ajax_request !== undefined) {
                ajax_request.status = xhr.status;
                ajax_request.time = new Date() - ajax_request.start;
                ajax_request.status_type = xhr.status >= 200 && xhr.status < 300 ? 'success' : 'danger';

                // Ask the server for the debug information it saved for this request
                requestAjaxDebugData(ajax_id);
            }
        }
        refreshWidgetButtons();
    });

    const is_dragging = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    $(document).on('mousemove', (e) => {
        if (is_dragging.value && e.buttons === 1) {
            const page_height = $(window).height();
            let new_height = page_height - e.pageY;
            new_height = Math.max(new_height, 200);
            $('#debug-toolbar-expanded-content').css('height', `${new_height}px`);
        }
    });
    $(document).on('mouseup', () => {
        is_dragging.value = false;
    });

    function getMainWidgets() {
        return widgets.filter((widget) => widget.main_widget);
    }

    function getCombinedSQLData() {
        const sql_data = {
            total_requests: 0,
            total_duration: 0,
            queries: {}
        };
        sql_data.queries[props.initial_request.id] = props.initial_request.sql.queries;
        ajax_requests.value.forEach((request) => {
            if (request.profile && request.profile.sql !== undefined) {
                sql_data.queries[request.id] = request.profile.sql.queries;
            }
        });
        $.each(sql_data.queries, (request_id, data) => {
            // update the total counters
            data.forEach((query) => {
                sql_data.total_requests += 1;
                sql_data.total_duration += query['time'];
            });
        });

        return sql_data;
    }

    const show_content_area = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const show_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);

    function switchWidget(widget_id, refresh = false, content_area = undefined, data = {}) {
        if (content_area === undefined) {
            content_area = $('#debug-toolbar-expanded-content');
        }
        // Copy data into data properties of the content_area
        Object.keys(data).forEach((key) => {
            content_area.data(key, data[key]);
        });
        if (refresh) {
            active_widget.value = null;
        }
        active_widget.value = widget_id;
        show_content_area.value = true;
    }

    function refreshWidgetButtons() {
        $.each(getMainWidgets(), (i, /** @type MainWidget */ widget) => {
            widget.refreshButton($(`#debug-toolbar .debug-toolbar-widgets li[data-glpi-debug-widget-id="${CSS.escape(widget.id)}"]`));
        });
        initial_load.value = false;
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(show_toolbar, (new_value) => {
        if (new_value) {
            $('body').removeClass('debug-folded');
        } else {
            $('body').addClass('debug-folded');
        }
    });

    function getProfile(request_id) {
        if (request_id === props.initial_request.id) {
            return props.initial_request;
        }
        return ajax_requests.value.find((request) => request.id === request_id).profile;
    }

    function requestAjaxDebugData(ajax_id, reload_widget = false) {
        const ajax_request = ajax_requests.value.find((request) => request.id === ajax_id);
        $.ajax({
            url: CFG_GLPI.root_doc + '/ajax/debug.php',
            data: {
                'ajax_id': ajax_id,
            }
        }).done((data) => {
            if (!data) {
                return;
            }
            ajax_request.profile = data;

            const content_area = $('#debug-toolbar-expanded-content');
            if (content_area.data('active-widget') !== undefined) {
                switchWidget(content_area.data('active-widget'), true);
            }
            // Move server global to the profile
            if (ajax_request.server_global !== undefined) {
                ajax_request.profile.globals['server'] = ajax_request.server_global;
            }
            // Move the data to either the get or post global depending on the request type
            if (ajax_request.type === 'POST') {
                ajax_request.profile.globals['post'] = ajax_request.data;
            } else {
                ajax_request.profile.globals['get'] = ajax_request.data;
            }
            refreshWidgetButtons();

            if (reload_widget) {
                // reload active widget
                switchWidget(content_area.data('active-widget'), true);
            }
        });
    }

const __returned__ = { props, active_widget, active_widget_component, ajax_requests, current_request, current_profile, initial_load, widgets, is_dragging, getMainWidgets, getCombinedSQLData, show_content_area, show_toolbar, switchWidget, refreshWidgetButtons, getProfile, requestAjaxDebugData, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_style_index_0_id_67e46a13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);


/***/ }),

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_style_index_0_id_67e46a13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_style_index_0_id_67e46a13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_style_index_0_id_67e46a13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_style_index_0_id_67e46a13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Toolbar_vue_vue_type_style_index_0_id_67e46a13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 51:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
.resize-handle[data-v-67e46a13] {
        cursor: row-resize;
        height: 10px;
        z-index: 1030
}
#debug-toolbar[data-v-67e46a13] {
        z-index: 1030; /* bootstrap \$zindex-fixed (if this need to upped, keep it under 1040) */
        outline: none;
}
.debug-toolbar-badge button[data-v-67e46a13] {
        box-shadow: none;
}
.debug-toolbar-widgets .debug-toolbar-widget {
&.active[data-v-67e46a13], &[data-v-67e46a13]:hover, &[active="true"][data-v-67e46a13] {
            border-top: 3px solid var(--tblr-primary) !important;
            margin-top : -3px;
}
button[data-v-67e46a13] {
            box-shadow: none;
}
}
#debug-toolbar-expanded-content[data-v-67e46a13] {
        height: 30vh;
        overflow: auto;
}
[data-v-67e46a13] .datagrid {
        --tblr-datagrid-padding   : 1.5rem;
        --tblr-datagrid-item-width: 15rem;

        display                   : grid;
        grid-gap                  : var(--tblr-datagrid-padding);
        grid-template-columns     : repeat(auto-fit, minmax(var(--tblr-datagrid-item-width), 1fr));
}
[data-v-67e46a13] .datagrid-title {
        font-size     : .625rem;
        font-weight   : 600;
        text-transform: uppercase;
        letter-spacing: .04em;
        line-height   : 1rem;
        color         : var(--tblr-muted);
        margin-bottom : .25rem;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Debug/Toolbar.vue"],"names":[],"mappings":";AA4XI;QACI,kBAAkB;QAClB,YAAY;QACZ;AACJ;AACA;QACI,aAAa,EAAE,wEAAwE;QACvF,aAAa;AACjB;AACA;QACI,gBAAgB;AACpB;AACA;AACI;YACI,oDAAoD;YACpD,iBAAiB;AACrB;AAEA;YACI,gBAAgB;AACpB;AACJ;AACA;QACI,YAAY;QACZ,cAAc;AAClB;AACA;QACI,kCAAkC;QAClC,iCAAiC;;QAEjC,gCAAgC;QAChC,wDAAwD;QACxD,0FAA0F;AAC9F;AACA;QACI,uBAAuB;QACvB,mBAAmB;QACnB,yBAAyB;QACzB,qBAAqB;QACrB,oBAAoB;QACpB,iCAAiC;QACjC,sBAAsB;AAC1B","sourcesContent":["<script setup>\n    /**\n     * @typedef {{ id: string, parent_id: string|null, category: string, name: string, start: number, end: number }} ProfilerSection\n     * @typedef {{ execution_time: number, memory_usage: number, memory_peak: number, memory_limit: number }} ServerPerformanceMetrics\n     * @typedef {{ total_requests: number, total_duration: number, queries: { request_id: string, num: number, query: string, time: number, rows: number, warnings: string[], errors: string[] } }} SQLMetrics\n     * @typedef {{ id: string, parent_id: string, server_performance: ServerPerformanceMetrics, sql: SQLMetrics, globals: Object.<string, string>, [profiler]: ProfilerSection[] }} Profile\n     * @typedef {{ id: string, data: Object.<string, string>, url: string, server_global: Object.<string, string>, type: string, start: Date, time: number, status: number, status_type: string, profile: Profile|null }} AJAXRequestData\n     * @typedef {{ x: number, y: number, width: number, height: number }} ClientTimingBounds\n     * @typedef {{ queued: Array, redirect: Array, fetch: Array, dns: Array, connection: Array, initial_connection: Array, ssl: Array, request: Array, response: Array }} ClientTimingSections\n     * @typedef {{ type: string, name: string, start: number, end: number, bounds: Object.<string, ClientTimingBounds>, sections: ClientTimingSections }} ClientTimingData\n     * @typedef {{ id: string, show: function(content_area: jQuery, refresh: boolean) }} Widget\n     */\n    /**\n     * @typedef MainWidget\n     * @extends Widget\n     * @property {boolean} main_widget=true\n     * @property {string} title\n     * @property {string|null} icon\n     * @property {function(button: jQuery)} refreshButton\n     */\n    /**\n     * @typedef SubWidget\n     * @extends Widget\n     * @property {boolean} main_widget=false\n     */\n    import {computed, ref, watch} from \"vue\";\n\n    const props = defineProps({\n        initial_request: {\n            type: Object,\n            default: null,\n        },\n    });\n\n    const active_widget = ref(null);\n    const active_widget_component = computed(() => {\n        if (active_widget.value === null) {\n            return null;\n        }\n        const widget = widgets.find(w => w.id === active_widget.value);\n        if (widget === undefined) {\n            return null;\n        }\n        return widget.component_registered_name;\n    });\n\n    const ajax_requests = ref([]);\n\n    const current_request = ref(props.initial_request.id);\n    const current_profile = computed(() => {\n        if (current_request.value === null) {\n            return undefined;\n        }\n        return getProfile(current_request.value);\n    });\n\n    const initial_load = ref(true);\n    /**\n     * @type {(MainWidget|SubWidget)[]}\n     */\n    const widgets = [\n        {\n            id: 'server_performance',\n            title: 'Server performance',\n            icon: 'ti ti-clock-play',\n            main_widget: true, // This widget shows directly in the toolbar\n            component_registered_name: 'widget-server-performance',\n            refreshButton: (button) => {\n                const server_perf = props.initial_request.server_performance;\n                const memory_usage = +(server_perf.memory_usage / 1024 / 1024).toFixed(2);\n                const server_performance_button_label = `${_.escape(server_perf.execution_time)} <span class=\"text-muted\"> ms using </span> ${_.escape(memory_usage)} <span class=\"text-muted\"> MiB </span>`;\n                button.find('.debug-text').html(server_performance_button_label);\n            }\n        },\n        {\n            id: 'sql',\n            title: 'SQL Requests',\n            icon: 'ti ti-database',\n            main_widget: true, // This widget shows directly in the toolbar\n            component_registered_name: 'widget-sqlrequests',\n            refreshButton: (button) => {\n                const sql_data = getCombinedSQLData();\n                const database_button_label = `${_.escape(sql_data.total_requests)} <span class=\"text-muted\"> requests </span>`;\n                button.find('.debug-text').html(database_button_label);\n            }\n        },\n        {\n            id: 'requests',\n            title: 'HTTP Requests',\n            icon: 'ti ti-refresh',\n            main_widget: true, // This widget shows directly in the toolbar\n            component_registered_name: 'widget-httprequests',\n            refreshButton: (button) => {\n                button.find('.debug-text').html(`${ajax_requests.value.length + 1} <span class=\"text-muted\"> requests </span>`);\n            }\n        },\n        {\n            id: 'client_performance',\n            title: 'Client performance',\n            icon: 'ti ti-brand-javascript',\n            main_widget: true, // This widget shows directly in the toolbar\n            component_registered_name: 'widget-client-performance',\n            refreshButton: (button) => {\n                if (button.find('.debug-text').text().trim() === '') {\n                    setTimeout(() => {\n                        const dom_timing = +window.performance.getEntriesByType('navigation')[0].domComplete.toFixed(2);\n                        const client_performance_button_label = `${_.escape(dom_timing)} <span class=\"text-muted\"> ms </span>`;\n                        button.find('.debug-text').html(client_performance_button_label);\n                    }, 200);\n                }\n            }\n        },\n        {\n            id: 'search_options',\n            title: 'Search Options',\n            icon: 'ti ti-list-search',\n            main_widget: true, // This widget shows directly in the toolbar\n            component_registered_name: 'widget-search-options',\n            refreshButton: (button) => {}\n        },\n        {\n            id: 'theme_switcher',\n            title: 'Palette Switcher',\n            icon: 'ti ti-palette',\n            main_widget: true, // This widget shows directly in the toolbar\n            component_registered_name: 'widget-theme-switcher',\n            refreshButton: (button) => {\n                button.find('.debug-text').html(`<span class=\"text-muted\">Theme: </span> ${_.escape(document.documentElement.attributes['data-glpi-theme'].value)}`);\n            }\n        },\n        {\n            id: 'globals',\n            main_widget: false,\n            component_registered_name: 'widget-globals',\n        },\n        {\n            id: 'profiler',\n            main_widget: false,\n            component_registered_name: 'widget-profiler',\n        },\n        {\n            id: 'request_summary',\n            main_widget: false,\n            component_registered_name: 'widget-request-summary',\n        }\n    ];\n\n    $(document).ajaxSend((event, xhr, settings) => {\n        // If the request is going to the debug AJAX endpoint, don't do anything\n        if (settings.url.indexOf('ajax/debug.php') !== -1) {\n            return;\n        }\n        const ajax_id = Math.random().toString(16).slice(2);\n        // Tag the request with an id to identify it on the server side\n        xhr.setRequestHeader('X-Glpi-Ajax-ID', ajax_id);\n        // Need to set the header here too so it is accessible in the ajaxComplete event\n        xhr.headers = xhr.headers || {};\n        xhr.headers['X-Glpi-Ajax-ID'] = ajax_id;\n        const parent_id = $('html').attr('data-glpi-request-id');\n        if (parent_id !== undefined) {\n            xhr.setRequestHeader('X-Glpi-Ajax-Parent-ID', parent_id);\n        }\n\n        let data = settings.data;\n        if (settings.type !== 'POST' && data === undefined) {\n            // get data from query string\n            data = {};\n            const query_string = settings.url.split('?')[1];\n            if (query_string !== undefined) {\n                query_string.split('&').forEach((pair) => {\n                    const [key, value] = pair.split('=');\n                    data[key] = value;\n                });\n            }\n        } else if (typeof data === 'string') {\n            // Post data is a URI encoded string similar to a query string. Values may be JSON strings\n            // so we need to parse it and convert it back to an object\n            const data_object = {};\n            data.split('&').forEach((pair) => {\n                const [key, value] = pair.split('=');\n                data_object[key] = decodeURIComponent(value);\n                // try parsing the value as JSON\n                try {\n                    data_object[key] = JSON.parse(data_object[key]);\n                } catch (e) {\n                    // ignore\n                }\n            });\n            data = data_object;\n        }\n        ajax_requests.value.push({\n            'id': ajax_id,\n            'status': '...',\n            'status_type': 'info',\n            'type': settings.type,\n            'data': data,\n            'url': settings.url,\n            'start': event.timeStamp,\n        });\n        refreshWidgetButtons();\n    });\n\n    $(document).ajaxComplete((event, xhr, settings) => {\n        // If the request is going to the debug AJAX endpoint, don't do anything\n        if (settings.url.indexOf('ajax/debug.php') !== -1) {\n            return;\n        }\n        if (xhr.headers === undefined) {\n            return;\n        }\n        const ajax_id = xhr.headers['X-Glpi-Ajax-ID'];\n        if (ajax_id !== undefined) {\n            const ajax_request = ajax_requests.value.find((request) => request.id === ajax_id);\n            if (ajax_request !== undefined) {\n                ajax_request.status = xhr.status;\n                ajax_request.time = new Date() - ajax_request.start;\n                ajax_request.status_type = xhr.status >= 200 && xhr.status < 300 ? 'success' : 'danger';\n\n                // Ask the server for the debug information it saved for this request\n                requestAjaxDebugData(ajax_id);\n            }\n        }\n        refreshWidgetButtons();\n    });\n\n    const is_dragging = ref(false);\n    $(document).on('mousemove', (e) => {\n        if (is_dragging.value && e.buttons === 1) {\n            const page_height = $(window).height();\n            let new_height = page_height - e.pageY;\n            new_height = Math.max(new_height, 200);\n            $('#debug-toolbar-expanded-content').css('height', `${new_height}px`);\n        }\n    });\n    $(document).on('mouseup', () => {\n        is_dragging.value = false;\n    });\n\n    function getMainWidgets() {\n        return widgets.filter((widget) => widget.main_widget);\n    }\n\n    function getCombinedSQLData() {\n        const sql_data = {\n            total_requests: 0,\n            total_duration: 0,\n            queries: {}\n        };\n        sql_data.queries[props.initial_request.id] = props.initial_request.sql.queries;\n        ajax_requests.value.forEach((request) => {\n            if (request.profile && request.profile.sql !== undefined) {\n                sql_data.queries[request.id] = request.profile.sql.queries;\n            }\n        });\n        $.each(sql_data.queries, (request_id, data) => {\n            // update the total counters\n            data.forEach((query) => {\n                sql_data.total_requests += 1;\n                sql_data.total_duration += query['time'];\n            });\n        });\n\n        return sql_data;\n    }\n\n    const show_content_area = ref(false);\n    const show_toolbar = ref(true);\n\n    function switchWidget(widget_id, refresh = false, content_area = undefined, data = {}) {\n        if (content_area === undefined) {\n            content_area = $('#debug-toolbar-expanded-content');\n        }\n        // Copy data into data properties of the content_area\n        Object.keys(data).forEach((key) => {\n            content_area.data(key, data[key]);\n        });\n        if (refresh) {\n            active_widget.value = null;\n        }\n        active_widget.value = widget_id;\n        show_content_area.value = true;\n    }\n\n    function refreshWidgetButtons() {\n        $.each(getMainWidgets(), (i, /** @type MainWidget */ widget) => {\n            widget.refreshButton($(`#debug-toolbar .debug-toolbar-widgets li[data-glpi-debug-widget-id=\"${CSS.escape(widget.id)}\"]`));\n        });\n        initial_load.value = false;\n    }\n\n    watch(show_toolbar, (new_value) => {\n        if (new_value) {\n            $('body').removeClass('debug-folded');\n        } else {\n            $('body').addClass('debug-folded');\n        }\n    });\n\n    function getProfile(request_id) {\n        if (request_id === props.initial_request.id) {\n            return props.initial_request;\n        }\n        return ajax_requests.value.find((request) => request.id === request_id).profile;\n    }\n\n    function requestAjaxDebugData(ajax_id, reload_widget = false) {\n        const ajax_request = ajax_requests.value.find((request) => request.id === ajax_id);\n        $.ajax({\n            url: CFG_GLPI.root_doc + '/ajax/debug.php',\n            data: {\n                'ajax_id': ajax_id,\n            }\n        }).done((data) => {\n            if (!data) {\n                return;\n            }\n            ajax_request.profile = data;\n\n            const content_area = $('#debug-toolbar-expanded-content');\n            if (content_area.data('active-widget') !== undefined) {\n                switchWidget(content_area.data('active-widget'), true);\n            }\n            // Move server global to the profile\n            if (ajax_request.server_global !== undefined) {\n                ajax_request.profile.globals['server'] = ajax_request.server_global;\n            }\n            // Move the data to either the get or post global depending on the request type\n            if (ajax_request.type === 'POST') {\n                ajax_request.profile.globals['post'] = ajax_request.data;\n            } else {\n                ajax_request.profile.globals['get'] = ajax_request.data;\n            }\n            refreshWidgetButtons();\n\n            if (reload_widget) {\n                // reload active widget\n                switchWidget(content_area.data('active-widget'), true);\n            }\n        });\n    }\n</script>\n\n<template>\n    <div id=\"debug-toolbar\" :class=\"'position-fixed bottom-0 card ' + (show_toolbar ? 'w-100' : '')\" tabindex=\"0\" :style=\"show_toolbar ? '' : 'width: fit-content'\">\n        <div class=\"resize-handle mt-n2\" @mousedown.prevent=\"$event.buttons === 1 && (is_dragging = true)\"></div>\n        <div class=\"d-flex flex-row align-items-center\">\n            <div class=\"debug-toolbar-badge d-flex\">\n                <button type=\"button\" class=\"btn btn-icon border-0 px-3 opacity-100 debug-logo\" @click=\"show_toolbar = true\" :disabled=\"show_toolbar\"\n                        title=\"Toggle debug bar\">\n                    <i class=\"ti ti-bug\"></i>\n                </button>\n            </div>\n            <div :class=\"'debug-toolbar-content w-100 justify-content-between align-items-center ' + (show_toolbar ? 'd-flex' : '')\" v-show=\"show_toolbar\">\n                <ul class=\"debug-toolbar-widgets nav nav-tabs align-items-center border-0\" data-bs-toggle=\"tabs\">\n                    <widget-button v-for=\"(widget) in getMainWidgets()\" :id=\"widget.id\" :title=\"widget.title\" :icon=\"widget.icon\"\n                                   v-on:click=\"switchWidget(widget.id)\" :active=\"widget.id === active_widget\" @vue:mounted=\"refreshWidgetButtons\"\n                    ></widget-button>\n                </ul>\n                <div class=\"debug-toolbar-controls\">\n                    <div class=\"debug-toolbar-control\">\n                        <button type=\"button\" class=\"btn btn-icon border-0 p-1\" name=\"toggle_content_area\" @click=\"show_content_area = !show_content_area\"\n                                title=\"Toggle debug content area\">\n                            <i :class=\"show_content_area ? 'ti ti-square-arrow-up' : 'ti ti-square-arrow-down'\"></i>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-icon border-0 p-1\" title=\"Close\" @click=\"show_toolbar = false\">\n                            <i class=\"ti ti-square-x\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div id=\"debug-toolbar-expanded-content\" class=\"w-100 card pe-2\" v-show=\"show_content_area && show_toolbar\">\n            <component v-if=\"active_widget\" :is=\"active_widget_component\" :initial_request=\"props.initial_request\"\n               :ajax_requests=\"ajax_requests\" @switchWidget=\"switchWidget\" :widgets=\"widgets\"\n               @refreshButton=\"refreshWidgetButtons\"></component>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n    .resize-handle {\n        cursor: row-resize;\n        height: 10px;\n        z-index: 1030\n    }\n    #debug-toolbar {\n        z-index: 1030; /* bootstrap $zindex-fixed (if this need to upped, keep it under 1040) */\n        outline: none;\n    }\n    .debug-toolbar-badge button {\n        box-shadow: none;\n    }\n    .debug-toolbar-widgets .debug-toolbar-widget {\n        &.active, &:hover, &[active=\"true\"] {\n            border-top: 3px solid var(--tblr-primary) !important;\n            margin-top : -3px;\n        }\n\n        button {\n            box-shadow: none;\n        }\n    }\n    #debug-toolbar-expanded-content {\n        height: 30vh;\n        overflow: auto;\n    }\n    :deep(.datagrid) {\n        --tblr-datagrid-padding   : 1.5rem;\n        --tblr-datagrid-item-width: 15rem;\n\n        display                   : grid;\n        grid-gap                  : var(--tblr-datagrid-padding);\n        grid-template-columns     : repeat(auto-fit, minmax(var(--tblr-datagrid-item-width), 1fr));\n    }\n    :deep(.datagrid-title) {\n        font-size     : .625rem;\n        font-weight   : 600;\n        text-transform: uppercase;\n        letter-spacing: .04em;\n        line-height   : 1rem;\n        color         : var(--tblr-muted);\n        margin-bottom : .25rem;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=Debug-Toolbar-vue-938cad8426ef05100626.js.map