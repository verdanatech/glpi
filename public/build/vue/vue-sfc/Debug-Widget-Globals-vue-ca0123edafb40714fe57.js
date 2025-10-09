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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[5],{

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

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Globals_vue_vue_type_template_id_071412dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _Globals_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _Globals_vue_vue_type_style_index_0_id_071412dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Globals_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Globals_vue_vue_type_template_id_071412dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-071412dd"],['__file',"js/src/vue/Debug/Widget/Globals.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 58:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_template_id_071412dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_template_id_071412dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);


/***/ }),

/***/ 59:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = ["id"]
const _hoisted_2 = {
  class: "nav nav-pills",
  "data-bs-toggle": "tabs"
}
const _hoisted_3 = ["href"]
const _hoisted_4 = ["href"]
const _hoisted_5 = ["href"]
const _hoisted_6 = ["href"]
const _hoisted_7 = { class: "card-body overflow-auto p-1" }
const _hoisted_8 = { class: "tab-content" }
const _hoisted_9 = ["id"]
const _hoisted_10 = ["id"]
const _hoisted_11 = ["id"]
const _hoisted_12 = ["id"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      id: `debugpanel${$setup.rand}`,
      class: "container-fluid card p-0 border-top-0"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
          class: "nav-item",
          onClick: $setup.updateEditorLayouts
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
            class: "nav-link active",
            "data-bs-toggle": "tab",
            href: `#debugpost${$setup.rand}`
          }, "POST", 8 /* PROPS */, _hoisted_3)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
          class: "nav-item",
          onClick: $setup.updateEditorLayouts
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
            class: "nav-link",
            "data-bs-toggle": "tab",
            href: `#debugget${$setup.rand}`
          }, "GET", 8 /* PROPS */, _hoisted_4)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
          class: "nav-item",
          onClick: $setup.updateEditorLayouts
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
            class: "nav-link",
            "data-bs-toggle": "tab",
            href: `#debugsession${$setup.rand}`
          }, "SESSION", 8 /* PROPS */, _hoisted_5)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
          class: "nav-item",
          onClick: $setup.updateEditorLayouts
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
            class: "nav-link",
            "data-bs-toggle": "tab",
            href: `#debugserver${$setup.rand}`
          }, "SERVER", 8 /* PROPS */, _hoisted_6)
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            id: `debugpost${$setup.rand}`,
            class: "cm-s-default tab-pane active"
          }, null, 8 /* PROPS */, _hoisted_9),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            id: `debugget${$setup.rand}`,
            class: "cm-s-default tab-pane"
          }, null, 8 /* PROPS */, _hoisted_10),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            id: `debugsession${$setup.rand}`,
            class: "cm-s-default tab-pane"
          }, null, 8 /* PROPS */, _hoisted_11),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            id: `debugserver${$setup.rand}`,
            class: "cm-s-default tab-pane"
          }, null, 8 /* PROPS */, _hoisted_12)
        ])
      ])
    ], 8 /* PROPS */, _hoisted_1)
  ]))
}

/***/ }),

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
 

/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Globals',
  props: {
        current_profile: {
            type: Object,
            required: false
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

    const props = __props;

    const monaco_editors = [];

    const appendGlobals = (data, container) => {
        if (data === undefined || data === null) {
            container.append('Empty array');
            return;
        }

        container.empty();
        let data_string = data;
        try {
            data_string = JSON.stringify(data, null, ' ');
        } catch (e) {
            if (typeof data !== 'string') {
                container.append('Empty array');
                return;
            }
        }

        const editor_element_id = `monacoeditor${Math.floor(Math.random() * 1000000)}`;
        const editor_element = document.createElement('div');
        editor_element.setAttribute('id', editor_element_id);
        editor_element.classList.add('monaco-editor-container');
        container.append(editor_element);
        window.GLPI.Monaco.createEditor(editor_element_id, 'javascript', data_string, [], {
            readOnly: true,
        }).then((editor) => {
            // Fold everything recursively by default except the first level
            editor.editor.trigger('fold', 'editor.foldAll');
            editor.editor.trigger('unfold', 'editor.unfold', {
                levels: 1
            });
            editor.editor.layout();
            monaco_editors.push(editor);
        });
    };

    const updateEditorLayouts = () => {
        monaco_editors.forEach((editor) => {
            editor.editor.layout();
        });
    };

    const rand = Math.floor(Math.random() * 1000000);

    function refreshGlobals() {
        appendGlobals(props.current_profile.globals['post'], $(`#debugpanel${rand} #debugpost${rand}`));
        appendGlobals(props.current_profile.globals['get'], $(`#debugpanel${rand} #debugget${rand}`));
        appendGlobals(props.current_profile.globals['session'], $(`#debugpanel${rand} #debugsession${rand}`));
        appendGlobals(props.current_profile.globals['server'], $(`#debugpanel${rand} #debugserver${rand}`));
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        refreshGlobals();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.current_profile.globals, () => {
        refreshGlobals();
    });

const __returned__ = { props, monaco_editors, appendGlobals, updateEditorLayouts, rand, refreshGlobals, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 62:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_style_index_0_id_071412dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);


/***/ }),

/***/ 63:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_style_index_0_id_071412dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_style_index_0_id_071412dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_style_index_0_id_071412dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_style_index_0_id_071412dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Globals_vue_vue_type_style_index_0_id_071412dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 64:
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
.container-fluid {
&[data-v-071412dd] {
        min-width: 400px;
        max-width: 90vw;
}
.tab-content[data-v-071412dd] {
            min-height: 30vh;
}
&[data-v-071412dd] .monaco-editor-container .monaco-editor {
            min-height: 30vh !important;
}
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Debug/Widget/Globals.vue","<no source>"],"names":[],"mappings":";AA6FI;AC7FJ;QD8FQ,gBAAgB;QAChB,eAAA;AA1FR;AA4FQ;YACI,gBAAgB;AACpB;AAEA;YACI,2BAA2B;AAC/B;AACJ","sourcesContent":["<script setup>\n    import {onMounted, watch} from \"vue\";\n\n    const props = defineProps({\n        current_profile: {\n            type: Object,\n            required: false\n        },\n    });\n\n    const monaco_editors = [];\n\n    const appendGlobals = (data, container) => {\n        if (data === undefined || data === null) {\n            container.append('Empty array');\n            return;\n        }\n\n        container.empty();\n        let data_string = data;\n        try {\n            data_string = JSON.stringify(data, null, ' ');\n        } catch (e) {\n            if (typeof data !== 'string') {\n                container.append('Empty array');\n                return;\n            }\n        }\n\n        const editor_element_id = `monacoeditor${Math.floor(Math.random() * 1000000)}`;\n        const editor_element = document.createElement('div');\n        editor_element.setAttribute('id', editor_element_id);\n        editor_element.classList.add('monaco-editor-container');\n        container.append(editor_element);\n        window.GLPI.Monaco.createEditor(editor_element_id, 'javascript', data_string, [], {\n            readOnly: true,\n        }).then((editor) => {\n            // Fold everything recursively by default except the first level\n            editor.editor.trigger('fold', 'editor.foldAll');\n            editor.editor.trigger('unfold', 'editor.unfold', {\n                levels: 1\n            });\n            editor.editor.layout();\n            monaco_editors.push(editor);\n        });\n    };\n\n    const updateEditorLayouts = () => {\n        monaco_editors.forEach((editor) => {\n            editor.editor.layout();\n        });\n    };\n\n    const rand = Math.floor(Math.random() * 1000000);\n\n    function refreshGlobals() {\n        appendGlobals(props.current_profile.globals['post'], $(`#debugpanel${rand} #debugpost${rand}`));\n        appendGlobals(props.current_profile.globals['get'], $(`#debugpanel${rand} #debugget${rand}`));\n        appendGlobals(props.current_profile.globals['session'], $(`#debugpanel${rand} #debugsession${rand}`));\n        appendGlobals(props.current_profile.globals['server'], $(`#debugpanel${rand} #debugserver${rand}`));\n    }\n\n    onMounted(() => {\n        refreshGlobals();\n    });\n    watch(() => props.current_profile.globals, () => {\n        refreshGlobals();\n    });\n</script>\n\n<template>\n    <div>\n        <div :id=\"`debugpanel${rand}`\" class=\"container-fluid card p-0 border-top-0\">\n            <ul class=\"nav nav-pills\" data-bs-toggle=\"tabs\">\n                <li class=\"nav-item\" @click=\"updateEditorLayouts\"><a class=\"nav-link active\" data-bs-toggle=\"tab\" :href=\"`#debugpost${rand}`\">POST</a></li>\n                <li class=\"nav-item\" @click=\"updateEditorLayouts\"><a class=\"nav-link\" data-bs-toggle=\"tab\" :href=\"`#debugget${rand}`\">GET</a></li>\n                <li class=\"nav-item\" @click=\"updateEditorLayouts\"><a class=\"nav-link\" data-bs-toggle=\"tab\" :href=\"`#debugsession${rand}`\">SESSION</a></li>\n                <li class=\"nav-item\" @click=\"updateEditorLayouts\"><a class=\"nav-link\" data-bs-toggle=\"tab\" :href=\"`#debugserver${rand}`\">SERVER</a></li>\n            </ul>\n\n            <div class=\"card-body overflow-auto p-1\">\n                <div class=\"tab-content\">\n                    <div :id=\"`debugpost${rand}`\" class=\"cm-s-default tab-pane active\"></div>\n                    <div :id=\"`debugget${rand}`\" class=\"cm-s-default tab-pane\"></div>\n                    <div :id=\"`debugsession${rand}`\" class=\"cm-s-default tab-pane\"></div>\n                    <div :id=\"`debugserver${rand}`\" class=\"cm-s-default tab-pane\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n    .container-fluid {\n        min-width: 400px;\n        max-width: 90vw;\n\n        .tab-content {\n            min-height: 30vh;\n        }\n\n        &::v-deep(.monaco-editor-container .monaco-editor) {\n            min-height: 30vh !important;\n        }\n    }\n</style>\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=Debug-Widget-Globals-vue-ca0123edafb40714fe57.js.map