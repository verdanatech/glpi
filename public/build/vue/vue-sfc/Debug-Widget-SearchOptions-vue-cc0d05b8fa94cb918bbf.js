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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[12],{

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

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchOptions_vue_vue_type_template_id_ae39f27a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _SearchOptions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);
/* harmony import */ var _SearchOptions_vue_vue_type_style_index_0_id_ae39f27a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SearchOptions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SearchOptions_vue_vue_type_template_id_ae39f27a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-ae39f27a"],['__file',"js/src/vue/Debug/Widget/SearchOptions.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_template_id_ae39f27a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_template_id_ae39f27a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);


/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "py-2 px-3 col-12" }
const _hoisted_2 = { class: "d-flex" }
const _hoisted_3 = { class: "form-group row" }
const _hoisted_4 = ["for"]
const _hoisted_5 = { class: "col-7" }
const _hoisted_6 = { class: "input-group" }
const _hoisted_7 = ["id"]
const _hoisted_8 = ["value", "textContent"]
const _hoisted_9 = ["id"]
const _hoisted_10 = {
  key: 0,
  class: "table search-opts-table"
}
const _hoisted_11 = ["textContent"]
const _hoisted_12 = ["textContent"]
const _hoisted_13 = ["textContent"]
const _hoisted_14 = ["textContent"]
const _hoisted_15 = ["textContent"]
const _hoisted_16 = ["textContent"]
const _hoisted_17 = { key: 1 }
const _hoisted_18 = ["textContent"]
const _hoisted_19 = ["textContent"]
const _hoisted_20 = { key: 1 }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          class: "col-5",
          for: `itemtype${$setup.rand}`
        }, "Itemtype", 8 /* PROPS */, _hoisted_4),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            ($setup.itemtype_input_mode === 'select')
              ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
                  key: 0,
                  class: "form-select",
                  id: `itemtype${$setup.rand}`,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.current_itemtype) = $event))
                }, [
                  _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", { value: "" }, "-----", -1 /* CACHED */)),
                  ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.all_itemtypes, (itemtype) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                      value: itemtype,
                      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(itemtype)
                    }, null, 8 /* PROPS */, _hoisted_8))
                  }), 256 /* UNKEYED_FRAGMENT */))
                ], 8 /* PROPS */, _hoisted_7)), [
                  [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.current_itemtype]
                ])
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                  key: 1,
                  class: "form-control",
                  id: `itemtype${$setup.rand}`,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.current_itemtype) = $event))
                }, null, 8 /* PROPS */, _hoisted_9)), [
                  [
                    vue__WEBPACK_IMPORTED_MODULE_0__.vModelText,
                    $setup.current_itemtype,
                    void 0,
                    { lazy: true }
                  ]
                ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
              class: "btn btn-sm btn-outline-secondary",
              onClick: _cache[2] || (_cache[2] = $event => ($setup.itemtype_input_mode = $setup.itemtype_input_mode === 'select' ? 'input' : 'select')),
              title: "Toggle manual input"
            }, [...(_cache[12] || (_cache[12] = [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-switch-horizontal" }, null, -1 /* CACHED */)
            ]))])
          ])
        ])
      ])
    ]),
    ($setup.current_itemtype !== null && $setup.current_itemtype !== '')
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_10, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [
            _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                colspan: "8",
                class: "text-center"
              }, "Search Options")
            ], -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                onClick: _cache[3] || (_cache[3] = $event => ($setup.setSortedCol('opt_id')))
              }, "Search ID"),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                onClick: _cache[4] || (_cache[4] = $event => ($setup.setSortedCol('table')))
              }, "Table"),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                onClick: _cache[5] || (_cache[5] = $event => ($setup.setSortedCol('field')))
              }, "Field"),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                onClick: _cache[6] || (_cache[6] = $event => ($setup.setSortedCol('name')))
              }, "Name"),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                onClick: _cache[7] || (_cache[7] = $event => ($setup.setSortedCol('linkfield')))
              }, "Link Field"),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                onClick: _cache[8] || (_cache[8] = $event => ($setup.setSortedCol('datatype')))
              }, "Datatype"),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                onClick: _cache[9] || (_cache[9] = $event => ($setup.setSortedCol('nosearch')))
              }, "Searchable"),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                onClick: _cache[10] || (_cache[10] = $event => ($setup.setSortedCol('massiveaction')))
              }, "Massive Action")
            ])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
            ($setup.sorted_search_options.length)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.sorted_search_options, (opt) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                    key: opt.opt_id
                  }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt.opt_id)
                    }, null, 8 /* PROPS */, _hoisted_11),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt.table)
                    }, null, 8 /* PROPS */, _hoisted_12),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt.field)
                    }, null, 8 /* PROPS */, _hoisted_13),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt.name)
                    }, null, 8 /* PROPS */, _hoisted_14),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt.linkfield)
                    }, null, 8 /* PROPS */, _hoisted_15),
                    (opt.datatype)
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
                          key: 0,
                          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt.datatype)
                        }, null, 8 /* PROPS */, _hoisted_16))
                      : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_17, [...(_cache[14] || (_cache[14] = [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "fst-italic" }, "Not specified", -1 /* CACHED */)
                        ]))])),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt.nosearch !== true ? 'Yes' : 'No')
                    }, null, 8 /* PROPS */, _hoisted_18),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt.massiveaction !== false ? 'Yes' : 'No')
                    }, null, 8 /* PROPS */, _hoisted_19)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_20, [...(_cache[15] || (_cache[15] = [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
                    colspan: "8",
                    class: "text-center"
                  }, "No Search Options", -1 /* CACHED */)
                ]))]))
          ])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ }),

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
 

/***/ }),

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'SearchOptions',
  setup(__props, { expose: __expose }) {
  __expose();

    const rand = Math.floor(Math.random() * 1000000000);

    const all_itemtypes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    const current_itemtype = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    const search_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});

    const sorted_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('opt_id');
    const sort_dir = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('asc');
    const sorted_search_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let sorted = [];

        $.each(search_options.value, (opt_id, data) => {
            sorted.push({
                opt_id: opt_id,
                table: data['table'],
                field: data['field'],
                name: data['name'],
                linkfield: data['linkfield'],
                datatype: data['datatype'] || '',
                nosearch: data['nosearch'] || false,
                massiveaction: data['massiveaction'] || true,
            });
        });

        // Sort by column
        sorted.sort((a, b) => {
            let a_val = a[sorted_col.value];
            let b_val = b[sorted_col.value];
            // if the sorted_col is the opt_id, need to sort the numbers properly instead of as strings
            if (sorted_col.value === 'opt_id') {
                a_val = parseInt(a_val);
                b_val = parseInt(b_val);
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

    function updateSearchOptions() {
        if (current_itemtype.value === null || current_itemtype.value === '') {
            return;
        }
        $.ajax({
            url: CFG_GLPI.root_doc + '/ajax/debug.php',
            data: {
                action: 'get_search_options',
                itemtype: current_itemtype.value
            },
        }).then((data) => {
            search_options.value = data;
        });
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        $.ajax({
            url: CFG_GLPI.root_doc + '/ajax/debug.php',
            data: {
                action: 'get_itemtypes'
            },
        }).then((data) => {
            all_itemtypes.value = data;
        });
        updateSearchOptions();
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(current_itemtype, () => {
        updateSearchOptions();
    });

    const itemtype_input_mode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('select');

const __returned__ = { rand, all_itemtypes, current_itemtype, search_options, sorted_col, sort_dir, sorted_search_options, setSortedCol, updateSearchOptions, itemtype_input_mode, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_style_index_0_id_ae39f27a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);


/***/ }),

/***/ 110:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_style_index_0_id_ae39f27a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(111);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_style_index_0_id_ae39f27a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_style_index_0_id_ae39f27a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_style_index_0_id_ae39f27a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SearchOptions_vue_vue_type_style_index_0_id_ae39f27a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 111:
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
.search-opts-table thead tr:nth-of-type(2) th[data-v-ae39f27a] {
        cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Debug/Widget/SearchOptions.vue"],"names":[],"mappings":";AAwJI;QACI,eAAe;AACnB","sourcesContent":["<script setup>\n    import {computed, onMounted, ref, watch} from \"vue\";\n\n    const rand = Math.floor(Math.random() * 1000000000);\n\n    const all_itemtypes = ref([]);\n    const current_itemtype = ref('');\n    const search_options = ref({});\n\n    const sorted_col = ref('opt_id');\n    const sort_dir = ref('asc');\n    const sorted_search_options = computed(() => {\n        let sorted = [];\n\n        $.each(search_options.value, (opt_id, data) => {\n            sorted.push({\n                opt_id: opt_id,\n                table: data['table'],\n                field: data['field'],\n                name: data['name'],\n                linkfield: data['linkfield'],\n                datatype: data['datatype'] || '',\n                nosearch: data['nosearch'] || false,\n                massiveaction: data['massiveaction'] || true,\n            });\n        });\n\n        // Sort by column\n        sorted.sort((a, b) => {\n            let a_val = a[sorted_col.value];\n            let b_val = b[sorted_col.value];\n            // if the sorted_col is the opt_id, need to sort the numbers properly instead of as strings\n            if (sorted_col.value === 'opt_id') {\n                a_val = parseInt(a_val);\n                b_val = parseInt(b_val);\n            }\n            if (a_val === b_val) {\n                return 0;\n            }\n            if (sort_dir.value === 'asc') {\n                return a_val < b_val ? -1 : 1;\n            } else {\n                return a_val > b_val ? -1 : 1;\n            }\n        });\n        return sorted;\n    });\n\n    function setSortedCol(col) {\n        if (sorted_col.value === col) {\n            if (sort_dir.value === 'asc') {\n                sort_dir.value = 'desc';\n            } else {\n                sort_dir.value = 'asc';\n            }\n        } else {\n            sorted_col.value = col;\n            sort_dir.value = 'asc';\n        }\n    }\n\n    function updateSearchOptions() {\n        if (current_itemtype.value === null || current_itemtype.value === '') {\n            return;\n        }\n        $.ajax({\n            url: CFG_GLPI.root_doc + '/ajax/debug.php',\n            data: {\n                action: 'get_search_options',\n                itemtype: current_itemtype.value\n            },\n        }).then((data) => {\n            search_options.value = data;\n        });\n    }\n\n    onMounted(() => {\n        $.ajax({\n            url: CFG_GLPI.root_doc + '/ajax/debug.php',\n            data: {\n                action: 'get_itemtypes'\n            },\n        }).then((data) => {\n            all_itemtypes.value = data;\n        });\n        updateSearchOptions();\n    });\n\n    watch(current_itemtype, () => {\n        updateSearchOptions();\n    });\n\n    const itemtype_input_mode = ref('select');\n</script>\n\n<template>\n    <div class=\"py-2 px-3 col-12\">\n        <div class=\"d-flex\">\n            <div class=\"form-group row\">\n                <label class=\"col-5\" :for=\"`itemtype${rand}`\">Itemtype</label>\n                <div class=\"col-7\">\n                    <div class=\"input-group\">\n                        <select v-if=\"itemtype_input_mode === 'select'\" class=\"form-select\" :id=\"`itemtype${rand}`\" v-model=\"current_itemtype\">\n                            <option value=\"\">-----</option>\n                            <option v-for=\"itemtype in all_itemtypes\" :value=\"itemtype\" v-text=\"itemtype\"></option>\n                        </select>\n                        <input v-else class=\"form-control\" :id=\"`itemtype${rand}`\" v-model.lazy=\"current_itemtype\">\n                        <button class=\"btn btn-sm btn-outline-secondary\" @click=\"itemtype_input_mode = itemtype_input_mode === 'select' ? 'input' : 'select'\"\n                                title=\"Toggle manual input\">\n                            <i class=\"ti ti-switch-horizontal\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <table class=\"table search-opts-table\" v-if=\"current_itemtype !== null && current_itemtype !== ''\">\n            <thead>\n                <tr>\n                    <th colspan=\"8\" class=\"text-center\">Search Options</th>\n                </tr>\n                <tr>\n                    <th @click=\"setSortedCol('opt_id')\">Search ID</th>\n                    <th @click=\"setSortedCol('table')\">Table</th>\n                    <th @click=\"setSortedCol('field')\">Field</th>\n                    <th @click=\"setSortedCol('name')\">Name</th>\n                    <th @click=\"setSortedCol('linkfield')\">Link Field</th>\n                    <th @click=\"setSortedCol('datatype')\">Datatype</th>\n                    <th @click=\"setSortedCol('nosearch')\">Searchable</th>\n                    <th @click=\"setSortedCol('massiveaction')\">Massive Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr v-if=\"sorted_search_options.length\" v-for=\"opt in sorted_search_options\" :key=\"opt.opt_id\">\n                    <td v-text=\"opt.opt_id\"></td>\n                    <td v-text=\"opt.table\"></td>\n                    <td v-text=\"opt.field\"></td>\n                    <td v-text=\"opt.name\"></td>\n                    <td v-text=\"opt.linkfield\"></td>\n                    <td v-if=\"opt.datatype\" v-text=\"opt.datatype\"></td>\n                    <td v-else><span class=\"fst-italic\">Not specified</span></td>\n                    <td v-text=\"opt.nosearch !== true ? 'Yes' : 'No'\"></td>\n                    <td v-text=\"opt.massiveaction !== false ? 'Yes' : 'No'\"></td>\n                </tr>\n                <tr v-else>\n                    <td colspan=\"8\" class=\"text-center\">No Search Options</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</template>\n\n<style scoped>\n    .search-opts-table thead tr:nth-of-type(2) th {\n        cursor: pointer;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=Debug-Widget-SearchOptions-vue-cc0d05b8fa94cb918bbf.js.map