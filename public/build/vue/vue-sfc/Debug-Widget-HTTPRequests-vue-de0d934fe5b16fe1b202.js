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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[6],{

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

/***/ 65:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HTTPRequests_vue_vue_type_template_id_57a59a22_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _HTTPRequests_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _HTTPRequests_vue_vue_type_style_index_0_id_57a59a22_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HTTPRequests_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HTTPRequests_vue_vue_type_template_id_57a59a22_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-57a59a22"],['__file',"js/src/vue/Debug/Widget/HTTPRequests.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 66:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_template_id_57a59a22_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_template_id_57a59a22_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);


/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = {
  key: 0,
  class: "request-timeline"
}
const _hoisted_2 = { class: "d-flex flex-row h-100 split-panel-h" }
const _hoisted_3 = { class: "left-panel" }
const _hoisted_4 = { class: "overflow-auto h-100 me-2" }
const _hoisted_5 = {
  id: "debug-requests-table",
  class: "table table-hover mb-1"
}
const _hoisted_6 = ["data-request-id"]
const _hoisted_7 = ["title", "data-truncated"]
const _hoisted_8 = { class: "right-panel overflow-auto ms-2 flex-grow-1" }
const _hoisted_9 = ["id"]
const _hoisted_10 = {
  class: "nav nav-tabs",
  "data-bs-toggle": "tabs"
}
const _hoisted_11 = { class: "nav-item" }
const _hoisted_12 = { class: "nav-item" }
const _hoisted_13 = { class: "nav-item" }
const _hoisted_14 = { class: "nav-item" }
const _hoisted_15 = { class: "card-body overflow-auto p-1" }
const _hoisted_16 = { class: "tab-content request-details-content-area" }
const _hoisted_17 = { key: 0 }
const _hoisted_18 = { key: 1 }
const _hoisted_19 = ["data-request-id"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "h-100",
    ref: "content_area",
    onMousemove: _cache[12] || (_cache[12] = $event => ($setup.onMouseMove($event))),
    onMouseup: _cache[13] || (_cache[13] = $event => ($setup.onMouseUp()))
  }, [
    ($setup.is_mounted && $setup.show_timeline)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RequestTimeline"], {
            initial_request: $props.initial_request,
            ajax_requests: $setup.props.ajax_requests,
            content_area: $setup.content_area,
            onChange_request: $setup.onRequestChanged
          }, null, 8 /* PROPS */, ["initial_request", "ajax_requests", "content_area"])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                  onClick: _cache[0] || (_cache[0] = $event => ($setup.setSortedCol('number')))
                }, "Number"),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                  onClick: _cache[1] || (_cache[1] = $event => ($setup.setSortedCol('url')))
                }, "URL"),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                  onClick: _cache[2] || (_cache[2] = $event => ($setup.setSortedCol('status')))
                }, "Status"),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                  onClick: _cache[3] || (_cache[3] = $event => ($setup.setSortedCol('type')))
                }, "Type"),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                  onClick: _cache[4] || (_cache[4] = $event => ($setup.setSortedCol('duration')))
                }, "Duration")
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.sorted_requests_data, (request) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                  key: request.id,
                  "data-request-id": request.id,
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`cursor-pointer ${request.id === $setup.current_request_id ? 'table-active' : ''}`),
                  onClick: _cache[6] || (_cache[6] = $event => ($setup.selectRow($event)))
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(request.number), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                    title: request.url,
                    "data-truncated": $setup.urlNeedsTruncated(request.url)
                  }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(request.url.substring(0, $setup.REQUEST_PATH_LENGTH)), 1 /* TEXT */),
                    ($setup.urlNeedsTruncated(request.url))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                          key: 0,
                          class: "ms-1 badge bg-secondary text-secondary-fg",
                          name: "show_full_url",
                          onClick: _cache[5] || (_cache[5] = $event => ($setup.expandRequestURL($event)))
                        }, [...(_cache[14] || (_cache[14] = [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-dots" }, null, -1 /* CACHED */)
                        ]))]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ], 8 /* PROPS */, _hoisted_7),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(request.status), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(request.type), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(request.duration) + " ms", 1 /* TEXT */)
                ], 10 /* CLASS, PROPS */, _hoisted_6))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "resize-handle",
        onMousedown: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($setup.onMouseDown($event)), ["stop","prevent"]))
      }, null, 32 /* NEED_HYDRATION */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          id: `debugpanel${$setup.rand}`,
          class: "p-0 mt-n1"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_10, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[8] || (_cache[8] = $event => ($setup.switchSubwidget('request_summary'))),
                class: "nav-link active",
                "data-bs-toggle": "tab",
                "data-glpi-debug-widget-id": "request_summary"
              }, "Summary")
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[9] || (_cache[9] = $event => ($setup.switchSubwidget('sql'))),
                class: "nav-link",
                "data-bs-toggle": "tab",
                "data-glpi-debug-widget-id": "sql"
              }, "SQL")
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[10] || (_cache[10] = $event => ($setup.switchSubwidget('globals'))),
                class: "nav-link",
                "data-bs-toggle": "tab",
                "data-glpi-debug-widget-id": "globals"
              }, "Globals")
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[11] || (_cache[11] = $event => ($setup.switchSubwidget('profiler'))),
                class: "nav-link",
                "data-bs-toggle": "tab",
                "data-glpi-debug-widget-id": "profiler"
              }, "Profiler")
            ])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [
              ($setup.current_profile)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [
                    ($setup.active_subwidget)
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($setup.active_subwidget_component), {
                          key: 0,
                          current_profile: $setup.current_profile
                        }, null, 8 /* PROPS */, ["current_profile"]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ]))
                : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [
                    _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "alert alert-danger" }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "No debug data was found for this request immediately after it finished. Some requests like /front/locale.php will never have data as they intentionally close the session.")
                    ], -1 /* CACHED */)),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      type: "button",
                      class: "btn btn-primary",
                      "data-request-id": $setup.current_request_id
                    }, [...(_cache[15] || (_cache[15] = [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-reload" }, null, -1 /* CACHED */),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Retry", -1 /* CACHED */)
                    ]))], 8 /* PROPS */, _hoisted_19)
                  ]))
            ])
          ])
        ], 8 /* PROPS */, _hoisted_9)
      ])
    ])
  ], 544 /* NEED_HYDRATION, NEED_PATCH */))
}

/***/ }),

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
 

/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _RequestTimeline_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);


    

    const REQUEST_PATH_LENGTH = 100;
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'HTTPRequests',
  props: {
        initial_request: {
            type: Object,
            required: true
        },
        ajax_requests: {
            type: Array,
            required: true
        },
        widgets: {
            type: Object,
            required: true
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

(0,vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars)(_ctx => ({
  "57a59a22-left_panel_flexbasis": (left_panel_flexbasis.value)
}))

    const props = __props;

    const is_mounted = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        is_mounted.value = true;
    });

    const rand = Math.floor(Math.random() * 1000000);
    const content_area = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const $content_area = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return $(content_area.value);
    });

    const show_timeline = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const current_request_id = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.initial_request.id);
    const current_profile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (current_request_id.value === props.initial_request.id) {
            return props.initial_request;
        }
        return props.ajax_requests.find((request) => request.id === current_request_id.value).profile;
    });

    $('#debug-toolbar').on('keyup', (e) => {
        e.preventDefault();
        e.stopPropagation();
        // ignore input inside monaco editors
        if ($(e.target).closest('.monaco-editor').length > 0) {
            return;
        }
        if (e.keyCode === 84) { // 't'
            show_timeline.value = !show_timeline.value;
        }
    });

    const is_dragging = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const left_panel_width = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const left_panel_flexbasis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (left_panel_width.value === null) {
            return '33%';
        }
        return left_panel_width.value + 'px';
    });

    function onMouseDown(e) {
        if (e.buttons === 1) {
            is_dragging.value = true;
            e.preventDefault();
        }
    }

    function onMouseMove(e) {
        if (is_dragging.value && e.buttons === 1) {
            const left_column = $content_area.value.find('.split-panel-h .left-panel');
            left_panel_width.value = e.pageX - left_column.offset().left;
        }
    }

    function onMouseUp() {
        is_dragging.value = false;
    }

    function urlNeedsTruncated(url) {
        return url.length > REQUEST_PATH_LENGTH;
    }

    const currentPath = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return window.location.pathname;
    });

    const sorted_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('number');
    const sort_dir = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('asc');
    const sorted_requests_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const sorted = [];
        sorted.push({
            id: props.initial_request.id,
            number: 0,
            url: currentPath.value,
            status: '-',
            type: props.initial_request.globals.server['REQUEST_METHOD'] || '-',
            duration: props.initial_request.server_performance.execution_time,
        });
        for (const request of props.ajax_requests) {
            sorted.push({
                id: request.id,
                number: sorted.length,
                url: request.url,
                status: request.status,
                type: request.type,
                duration: request.time,
            });
        }
        // Sort by column
        sorted.sort((a, b) => {
            let a_val = a[sorted_col.value];
            let b_val = b[sorted_col.value];
            if (sorted_col.value === 'duration') {
                a_val = parseFloat(a_val);
                b_val = parseFloat(b_val);
            }
            if (a_val === b_val) {
                return 0;
            }
            if (sort_dir.value === 'asc') {
                return a_val < b_val ? -1 : 1;
            } else {
                return a_val > b_val ? -1 : 1;
            }
        });
        return sorted;
    });

    function setSortedCol(col) {
        if (sorted_col.value === col) {
            if (sort_dir.value === 'asc') {
                sort_dir.value = 'desc';
            } else {
                sort_dir.value = 'asc';
            }
        } else {
            sorted_col.value = col;
            sort_dir.value = 'asc';
        }
    }

    const seen_request_ids = props.ajax_requests.map(r => r.id);

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(props.ajax_requests, (old_v, new_v) => {
        for (const request of new_v) {
            if (seen_request_ids.indexOf(request.id) === -1) {
                seen_request_ids.push(request.id);
                setTimeout(() => {
                    // Need this timeout because this watcher is called before the DOM is updated
                    const row = $(`tr[data-request-id="${CSS.escape(request.id)}"]`);
                    row.css('background-color', '#FFFF7B80');
                    setTimeout(() => {
                        row.css('background-color', 'transparent');
                    }, 2000);
                }, 10);
            }
        }
    });

    function expandRequestURL(e) {
        const btn = $(e.currentTarget);
        const td = btn.closest('td');
        td.text(td.attr('title'));
        btn.hide();
    }

    function selectRow(e) {
        current_request_id.value = $(e.currentTarget).attr('data-request-id');
    }

    const active_subwidget = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('request_summary');
    const active_subwidget_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (active_subwidget.value === null) {
            return null;
        }
        const widget = props.widgets.find(w => w.id === active_subwidget.value);
        if (widget === undefined) {
            return null;
        }
        return widget.component_registered_name;
    });
    function switchSubwidget(widget_id) {
        active_subwidget.value = widget_id;
    }

    function onRequestChanged() {
        current_request_id.value = $content_area.value.data('requests_request_id') || props.initial_request.id;
    }

const __returned__ = { props, is_mounted, rand, REQUEST_PATH_LENGTH, content_area, $content_area, show_timeline, current_request_id, current_profile, is_dragging, left_panel_width, left_panel_flexbasis, onMouseDown, onMouseMove, onMouseUp, urlNeedsTruncated, currentPath, sorted_col, sort_dir, sorted_requests_data, setSortedCol, seen_request_ids, expandRequestURL, selectRow, active_subwidget, active_subwidget_component, switchSubwidget, onRequestChanged, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch, RequestTimeline: _RequestTimeline_vue__WEBPACK_IMPORTED_MODULE_1__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_style_index_0_id_57a59a22_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);


/***/ }),

/***/ 76:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_style_index_0_id_57a59a22_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_style_index_0_id_57a59a22_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_style_index_0_id_57a59a22_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_style_index_0_id_57a59a22_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_HTTPRequests_vue_vue_type_style_index_0_id_57a59a22_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 77:
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
div.left-panel[data-v-57a59a22] {
        border-right: 1px solid #808080;
        min-width: 100px;
        flex: 0 0 var(--57a59a22-left_panel_flexbasis);
}
.split-panel-h .resize-handle[data-v-57a59a22] {
        cursor: col-resize;
        width: 10px;
        z-index: 1030;
        margin-left: -0.5rem;
        margin-right: -0.25rem;
}
#debug-requests-table thead tr th[data-v-57a59a22] {
        cursor: pointer;
}
#debug-requests-table thead tr th[data-v-57a59a22]:nth-child(2) {
        max-width: 200px;
        white-space: pre-wrap;
}
#debug-requests-table tbody tr td[data-v-57a59a22]:nth-child(2) {
        max-width: 200px;
        white-space: pre-wrap;
}
#debug-requests-table tbody[data-v-57a59a22] {
        white-space: nowrap
}
#debug-requests-table thead th[data-v-57a59a22] {
        position: sticky;
        top: 0;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Debug/Widget/HTTPRequests.vue"],"names":[],"mappings":";AA+QI;QACI,+BAA+B;QAC/B,gBAAgB;QAChB,8CAAsC;AAC1C;AACA;QACI,kBAAkB;QAClB,WAAW;QACX,aAAa;QACb,oBAAoB;QACpB,sBAAsB;AAC1B;AACA;QACI,eAAe;AACnB;AACA;QACI,gBAAgB;QAChB,qBAAqB;AACzB;AACA;QACI,gBAAgB;QAChB,qBAAqB;AACzB;AACA;QACI;AACJ;AACA;QACI,gBAAgB;QAChB,MAAM;AACV","sourcesContent":["<script setup>\n    import {computed, onMounted, ref, watch} from \"vue\";\n    import RequestTimeline from \"./RequestTimeline.vue\";\n\n    const props = defineProps({\n        initial_request: {\n            type: Object,\n            required: true\n        },\n        ajax_requests: {\n            type: Array,\n            required: true\n        },\n        widgets: {\n            type: Object,\n            required: true\n        },\n    });\n\n    const is_mounted = ref(false);\n    onMounted(() => {\n        is_mounted.value = true;\n    });\n\n    const rand = Math.floor(Math.random() * 1000000);\n    const REQUEST_PATH_LENGTH = 100;\n    const content_area = ref(null);\n    const $content_area = computed(() => {\n        return $(content_area.value);\n    });\n\n    const show_timeline = ref(false);\n    const current_request_id = ref(props.initial_request.id);\n    const current_profile = computed(() => {\n        if (current_request_id.value === props.initial_request.id) {\n            return props.initial_request;\n        }\n        return props.ajax_requests.find((request) => request.id === current_request_id.value).profile;\n    });\n\n    $('#debug-toolbar').on('keyup', (e) => {\n        e.preventDefault();\n        e.stopPropagation();\n        // ignore input inside monaco editors\n        if ($(e.target).closest('.monaco-editor').length > 0) {\n            return;\n        }\n        if (e.keyCode === 84) { // 't'\n            show_timeline.value = !show_timeline.value;\n        }\n    });\n\n    const is_dragging = ref(false);\n    const left_panel_width = ref(null);\n    const left_panel_flexbasis = computed(() => {\n        if (left_panel_width.value === null) {\n            return '33%';\n        }\n        return left_panel_width.value + 'px';\n    });\n\n    function onMouseDown(e) {\n        if (e.buttons === 1) {\n            is_dragging.value = true;\n            e.preventDefault();\n        }\n    }\n\n    function onMouseMove(e) {\n        if (is_dragging.value && e.buttons === 1) {\n            const left_column = $content_area.value.find('.split-panel-h .left-panel');\n            left_panel_width.value = e.pageX - left_column.offset().left;\n        }\n    }\n\n    function onMouseUp() {\n        is_dragging.value = false;\n    }\n\n    function urlNeedsTruncated(url) {\n        return url.length > REQUEST_PATH_LENGTH;\n    }\n\n    const currentPath = computed(() => {\n        return window.location.pathname;\n    });\n\n    const sorted_col = ref('number');\n    const sort_dir = ref('asc');\n    const sorted_requests_data = computed(() => {\n        const sorted = [];\n        sorted.push({\n            id: props.initial_request.id,\n            number: 0,\n            url: currentPath.value,\n            status: '-',\n            type: props.initial_request.globals.server['REQUEST_METHOD'] || '-',\n            duration: props.initial_request.server_performance.execution_time,\n        });\n        for (const request of props.ajax_requests) {\n            sorted.push({\n                id: request.id,\n                number: sorted.length,\n                url: request.url,\n                status: request.status,\n                type: request.type,\n                duration: request.time,\n            });\n        }\n        // Sort by column\n        sorted.sort((a, b) => {\n            let a_val = a[sorted_col.value];\n            let b_val = b[sorted_col.value];\n            if (sorted_col.value === 'duration') {\n                a_val = parseFloat(a_val);\n                b_val = parseFloat(b_val);\n            }\n            if (a_val === b_val) {\n                return 0;\n            }\n            if (sort_dir.value === 'asc') {\n                return a_val < b_val ? -1 : 1;\n            } else {\n                return a_val > b_val ? -1 : 1;\n            }\n        });\n        return sorted;\n    });\n\n    function setSortedCol(col) {\n        if (sorted_col.value === col) {\n            if (sort_dir.value === 'asc') {\n                sort_dir.value = 'desc';\n            } else {\n                sort_dir.value = 'asc';\n            }\n        } else {\n            sorted_col.value = col;\n            sort_dir.value = 'asc';\n        }\n    }\n\n    const seen_request_ids = props.ajax_requests.map(r => r.id);\n\n    watch(props.ajax_requests, (old_v, new_v) => {\n        for (const request of new_v) {\n            if (seen_request_ids.indexOf(request.id) === -1) {\n                seen_request_ids.push(request.id);\n                setTimeout(() => {\n                    // Need this timeout because this watcher is called before the DOM is updated\n                    const row = $(`tr[data-request-id=\"${CSS.escape(request.id)}\"]`);\n                    row.css('background-color', '#FFFF7B80');\n                    setTimeout(() => {\n                        row.css('background-color', 'transparent');\n                    }, 2000);\n                }, 10);\n            }\n        }\n    });\n\n    function expandRequestURL(e) {\n        const btn = $(e.currentTarget);\n        const td = btn.closest('td');\n        td.text(td.attr('title'));\n        btn.hide();\n    }\n\n    function selectRow(e) {\n        current_request_id.value = $(e.currentTarget).attr('data-request-id');\n    }\n\n    const active_subwidget = ref('request_summary');\n    const active_subwidget_component = computed(() => {\n        if (active_subwidget.value === null) {\n            return null;\n        }\n        const widget = props.widgets.find(w => w.id === active_subwidget.value);\n        if (widget === undefined) {\n            return null;\n        }\n        return widget.component_registered_name;\n    });\n    function switchSubwidget(widget_id) {\n        active_subwidget.value = widget_id;\n    }\n\n    function onRequestChanged() {\n        current_request_id.value = $content_area.value.data('requests_request_id') || props.initial_request.id;\n    }\n</script>\n\n<template>\n    <div class=\"h-100\" ref=\"content_area\" @mousemove=\"onMouseMove($event)\" @mouseup=\"onMouseUp()\">\n        <div class=\"request-timeline\" v-if=\"is_mounted && show_timeline\">\n            <RequestTimeline :initial_request=\"initial_request\" :ajax_requests=\"props.ajax_requests\" :content_area=\"content_area\"\n                             @change_request=\"onRequestChanged\"></RequestTimeline>\n        </div>\n        <div class=\"d-flex flex-row h-100 split-panel-h\">\n            <div class=\"left-panel\">\n                <div class=\"overflow-auto h-100 me-2\">\n                    <table id=\"debug-requests-table\" class=\"table table-hover mb-1\">\n                        <thead>\n                            <tr>\n                                <th @click=\"setSortedCol('number')\">Number</th>\n                                <th @click=\"setSortedCol('url')\">URL</th>\n                                <th @click=\"setSortedCol('status')\">Status</th>\n                                <th @click=\"setSortedCol('type')\">Type</th>\n                                <th @click=\"setSortedCol('duration')\">Duration</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr v-for=\"request in sorted_requests_data\" :key=\"request.id\" :data-request-id=\"request.id\"\n                                :class=\"`cursor-pointer ${request.id === current_request_id ? 'table-active' : ''}`\" @click=\"selectRow($event)\">\n                                <td>{{ request.number }}</td>\n                                <td :title=\"request.url\"\n                                    :data-truncated=\"urlNeedsTruncated(request.url)\">{{ request.url.substring(0, REQUEST_PATH_LENGTH) }}<button\n                                        v-if=\"urlNeedsTruncated(request.url)\" class=\"ms-1 badge bg-secondary text-secondary-fg\" name=\"show_full_url\"\n                                        @click=\"expandRequestURL($event)\">\n                                        <i class=\"ti ti-dots\"></i>\n                                    </button>\n                                </td>\n                                <td>{{ request.status }}</td>\n                                <td>{{ request.type }}</td>\n                                <td>{{ request.duration }} ms</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"resize-handle\" @mousedown.stop.prevent=\"onMouseDown($event)\"></div>\n            <div class=\"right-panel overflow-auto ms-2 flex-grow-1\">\n                <div :id=\"`debugpanel${rand}`\" class=\"p-0 mt-n1\">\n                    <ul class=\"nav nav-tabs\" data-bs-toggle=\"tabs\">\n                        <li class=\"nav-item\">\n                            <button @click=\"switchSubwidget('request_summary')\"\n                                    class=\"nav-link active\" data-bs-toggle=\"tab\" data-glpi-debug-widget-id=\"request_summary\">Summary</button>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button @click=\"switchSubwidget('sql')\"\n                                    class=\"nav-link\" data-bs-toggle=\"tab\" data-glpi-debug-widget-id=\"sql\">SQL</button>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button @click=\"switchSubwidget('globals')\"\n                                    class=\"nav-link\" data-bs-toggle=\"tab\" data-glpi-debug-widget-id=\"globals\">Globals</button>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button @click=\"switchSubwidget('profiler')\"\n                                    class=\"nav-link\" data-bs-toggle=\"tab\" data-glpi-debug-widget-id=\"profiler\">Profiler</button>\n                        </li>\n                    </ul>\n\n                    <div class=\"card-body overflow-auto p-1\">\n                        <div class=\"tab-content request-details-content-area\">\n                            <div v-if=\"current_profile\">\n                                <component v-if=\"active_subwidget\" :is=\"active_subwidget_component\" :current_profile=\"current_profile\"></component>\n                            </div>\n                            <div v-else>\n                                <div class=\"alert alert-danger\">\n                                    <span>No debug data was found for this request immediately after it finished. Some requests like /front/locale.php will never have data as they intentionally close the session.</span>\n                                </div>\n                                <button type=\"button\" class=\"btn btn-primary\" :data-request-id=\"current_request_id\"><i class=\"ti ti-reload\"></i>Retry</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n    div.left-panel {\n        border-right: 1px solid #808080;\n        min-width: 100px;\n        flex: 0 0 v-bind(left_panel_flexbasis);\n    }\n    .split-panel-h .resize-handle {\n        cursor: col-resize;\n        width: 10px;\n        z-index: 1030;\n        margin-left: -0.5rem;\n        margin-right: -0.25rem;\n    }\n    #debug-requests-table thead tr th {\n        cursor: pointer;\n    }\n    #debug-requests-table thead tr th:nth-child(2) {\n        max-width: 200px;\n        white-space: pre-wrap;\n    }\n    #debug-requests-table tbody tr td:nth-child(2) {\n        max-width: 200px;\n        white-space: pre-wrap;\n    }\n    #debug-requests-table tbody {\n        white-space: nowrap\n    }\n    #debug-requests-table thead th {\n        position: sticky;\n        top: 0;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=Debug-Widget-HTTPRequests-vue-de0d934fe5b16fe1b202.js.map