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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[19],{

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

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddItemForm_vue_vue_type_template_id_1893dffc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _AddItemForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddItemForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddItemForm_vue_vue_type_template_id_1893dffc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"js/src/vue/Kanban/AddItemForm.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_AddItemForm_vue_vue_type_template_id_1893dffc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_AddItemForm_vue_vue_type_template_id_1893dffc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


/***/ }),

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "kanban-add-form kanban-form d-flex flex-column card" }
const _hoisted_2 = { class: "kanban-item-header d-flex justify-content-between" }
const _hoisted_3 = { class: "kanban-item-title" }
const _hoisted_4 = ["title"]
const _hoisted_5 = { key: 0 }
const _hoisted_6 = ["textContent"]
const _hoisted_7 = { class: "kanban-item-content" }
const _hoisted_8 = ["name", "placeholder", "onUpdate:modelValue"]
const _hoisted_9 = ["innerHTML"]
const _hoisted_10 = ["type", "name", "placeholder", "onUpdate:modelValue"]
const _hoisted_11 = ["textContent"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.data.itemtype_data.icon)
        }, null, 2 /* CLASS */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.itemtype_data.name), 1 /* TEXT */)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        class: "ti ti-x cursor-pointer",
        title: _ctx.__('Close'),
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($setup.emit('kanban:close_form')), ["prevent"]))
      }, null, 8 /* PROPS */, _hoisted_4)
    ]),
    ($props.data.is_bulk)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            class: "kanban-item-subtitle",
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('One item per line'))
          }, null, 8 /* PROPS */, _hoisted_6)
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.fields, (field, name) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
          (!$props.data.is_bulk && field.type === 'textarea')
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
                class: "form-control w-100",
                name: name,
                key: `${field.type}_${name}`,
                placeholder: field.placeholder,
                "onUpdate:modelValue": $event => ((field.value) = $event)
              }, null, 8 /* PROPS */, _hoisted_8)), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, field.value]
              ])
            : (!$props.data.is_bulk && field.type === 'raw')
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                  class: "w-100",
                  key: `${field.type}_${name}`,
                  innerHTML: field.value
                }, null, 8 /* PROPS */, _hoisted_9))
              : (!$props.data.is_bulk || field.type === 'hidden')
                ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                    type: field.type,
                    class: "form-control w-100",
                    name: name,
                    key: `${field.type}_${name}`,
                    placeholder: field.placeholder,
                    "onUpdate:modelValue": $event => ((field.value) = $event)
                  }, null, 8 /* PROPS */, _hoisted_10)), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, field.value]
                  ])
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
      }), 256 /* UNKEYED_FRAGMENT */)),
      ($props.data.is_bulk)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
            key: 0,
            name: "bulk_item_list",
            class: "form-control w-100",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.fields['bulk_item_list'].value) = $event))
          }, null, 512 /* NEED_PATCH */)), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.fields['bulk_item_list'].value]
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      class: "btn btn-primary mx-auto",
      name: "add",
      onClick: _cache[2] || (_cache[2] = $event => ($setup.emit('kanban:add_item', {fields: $setup.fields}))),
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Save'))
    }, null, 8 /* PROPS */, _hoisted_11)
  ]))
}

/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_AddItemForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_AddItemForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
 

/***/ }),

/***/ 136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'AddItemForm',
  props: {
        data: {
            type: Object,
            required: true
        }
    },
  emits: ['kanban:close_form', 'kanban:add_item'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

    const props = __props;

    const emit = __emit;

    const fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const fields = {};
        $.each(props.data.itemtype_data.fields, (name, options) => {
            fields[name] = {
                type: (options.type || 'text').toLowerCase(),
                value: options.value,
                placeholder: options.placeholder
            };
        });
        return fields;
    });

const __returned__ = { props, emit, fields, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Column_vue_vue_type_template_id_56657c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _Column_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var _Column_vue_vue_type_style_index_0_id_56657c42_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(149);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Column_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Column_vue_vue_type_template_id_56657c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-56657c42"],['__file',"js/src/vue/Kanban/Column.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_template_id_56657c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_template_id_56657c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);


/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = ["id", "data-drop-only"]
const _hoisted_2 = { class: "kanban-column-header" }
const _hoisted_3 = { class: "kanban-column-header-content p-2 ps-0 pb-0" }
const _hoisted_4 = { class: "content-left d-flex align-items-center" }
const _hoisted_5 = ["title"]
const _hoisted_6 = ["textContent"]
const _hoisted_7 = { class: "content-right d-flex" }
const _hoisted_8 = { class: "kanban-column-toolbar align-middle" }
const _hoisted_9 = { class: "dropdown d-inline-block" }
const _hoisted_10 = ["id", "title"]
const _hoisted_11 = {
  id: "kanban-add-dropdown",
  class: "kanban-dropdown dropdown-menu",
  role: "menu"
}
const _hoisted_12 = ["id", "onClick"]
const _hoisted_13 = { class: "dropdown d-inline-block" }
const _hoisted_14 = ["id", "title"]
const _hoisted_15 = {
  id: "kanban-overflow-dropdown",
  class: "kanban-dropdown dropdown-menu",
  role: "menu"
}
const _hoisted_16 = { class: "dropdown-trigger dropdown-item" }
const _hoisted_17 = { class: "dropdown dropend" }
const _hoisted_18 = {
  href: "#",
  class: "w-100",
  "data-bs-toggle": "dropdown",
  "data-bs-auto-close": "outside"
}
const _hoisted_19 = {
  id: "kanban-bulk-add-dropdown",
  class: "dropdown-menu",
  role: "menu"
}
const _hoisted_20 = ["id", "onClick"]
const _hoisted_21 = { class: "kanban-body card-body" }
const _hoisted_22 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: $setup.element_id,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`kanban-column ${$props.column_data.folded ? 'collapsed' : ''} ${$props.column_data['_protected'] ? 'kanban-protected' : ''}`),
    "data-drop-only": `${$props.column_data.drop_only ? 'true' : false}`
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, [
          ($props.rights.canModifyView())
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
                key: 0,
                class: "ti ti-caret-right-filled kanban-collapse-column cursor-pointer",
                title: _ctx.__('Toggle collapse'),
                onClick: _cache[0] || (_cache[0] = $event => ($setup.toggleFolded()))
              }, null, 8 /* PROPS */, _hoisted_5))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`kanban-column-title badge_block ${$props.column_data.color_class || ''}`),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`border-color: ${$setup.bg_color}`)
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`me-1 ${$props.column_data.color_class || ''}`),
              style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`background-color: ${$setup.bg_color}`)
            }, null, 6 /* CLASS, STYLE */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.column_data.name), 1 /* TEXT */)
          ], 6 /* CLASS, STYLE */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            class: "kanban_nb badge badge-outline align-content-center",
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.card_count)
          }, null, 8 /* PROPS */, _hoisted_6)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, [
            ($props.rights.canCreateItem() && ($props.rights.getAllowedColumnsForNewCards().length === 0 || $props.rights.getAllowedColumnsForNewCards().includes($props.column_id)))
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      type: "button",
                      id: `kanban_add_${$setup.element_id}`,
                      class: "kanban-add ti ti-plus",
                      title: _ctx.__('Add'),
                      "data-bs-toggle": "dropdown",
                      "data-bs-auto-close": "outside"
                    }, null, 8 /* PROPS */, _hoisted_10),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_11, [
                      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.itemtypes_can_create, (data, itemtype) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                          id: `kanban-add-${itemtype}`,
                          class: "dropdown-item cursor-pointer",
                          key: itemtype,
                          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($setup.showAddItemForm(itemtype)), ["prevent"])
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.name), 1 /* TEXT */)
                        ], 8 /* PROPS */, _hoisted_12))
                      }), 128 /* KEYED_FRAGMENT */))
                    ])
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      id: `kanban_column_overflow_actions_${$setup.element_id}`,
                      class: "kanban-column-overflow-actions ti ti-dots",
                      title: _ctx.__('More'),
                      "data-bs-toggle": "dropdown",
                      "data-bs-auto-close": "outside"
                    }, null, 8 /* PROPS */, _hoisted_14),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_15, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_18, [
                            _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-list" }, null, -1 /* CACHED */)),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Bulk add')), 1 /* TEXT */)
                          ]),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_19, [
                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.itemtypes_can_create, (data, itemtype) => {
                              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                                id: `kanban-bulk-add-${itemtype}`,
                                class: "dropdown-item cursor-pointer",
                                key: itemtype,
                                onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($setup.showAddItemForm(itemtype, true)), ["prevent"])
                              }, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.name), 1 /* TEXT */)
                              ], 8 /* PROPS */, _hoisted_20))
                            }), 128 /* KEYED_FRAGMENT */))
                          ])
                        ])
                      ]),
                      (!$props.column_data['_protected'])
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                            key: 0,
                            class: "kanban-remove dropdown-item cursor-pointer",
                            onClick: _cache[1] || (_cache[1] = $event => ($setup.emit('kanban:column_hide')))
                          }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                              _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-trash" }, null, -1 /* CACHED */)),
                              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Delete')), 1 /* TEXT */)
                            ])
                          ]))
                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                    ])
                  ])
                ], 64 /* STABLE_FRAGMENT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ])
        ])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_21, [
      ($props.column_data.drop_only)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
            key: 0,
            class: "position-relative mx-auto mt-2",
            style: {"width":"250px"},
            innerHTML: $setup.drop_only_message
          }, null, 8 /* PROPS */, _hoisted_22))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (!$props.column_data.folded)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.cards_to_show, (card) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Card"], {
                key: card.id,
                id: card.id,
                title: card.title,
                card_content: card.content,
                icon: $setup.getIcon(card),
                metadata: card._metadata,
                team: card._team,
                title_tooltip: card.title_tooltip,
                read_only: card._readonly,
                form_link: card._form_link,
                rights: $props.rights,
                team_badge_provider: $props.team_badge_provider,
                due_date: card.due_date,
                "onKanban:card_delete": $event => ($setup.emit('kanban:card_delete', {card_id: card.id})),
                "onKanban:card_restore": $event => ($setup.emit('kanban:card_restore', {card_id: card.id})),
                "onKanban:card_show_details": $event => ($setup.emit('kanban:card_show_details', {card_id: card.id}))
              }, null, 8 /* PROPS */, ["id", "title", "card_content", "icon", "metadata", "team", "title_tooltip", "read_only", "form_link", "rights", "team_badge_provider", "due_date", "onKanban:card_delete", "onKanban:card_restore", "onKanban:card_show_details"]))
            }), 128 /* KEYED_FRAGMENT */)),
            ($setup.opened_form_type === 'AddItemForm')
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AddItemForm"], {
                  key: 0,
                  "onKanban:add_item": $setup.addItem,
                  data: $setup.opened_form_data,
                  onVnodeMounted: $setup.scrollToForm,
                  "onKanban:close_form": $setup.closeItemForms
                }, null, 8 /* PROPS */, ["data"]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ], 64 /* STABLE_FRAGMENT */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ])
  ], 10 /* CLASS, PROPS */, _hoisted_1))
}

/***/ }),

/***/ 147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
 

/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _Rights_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(142);
/* harmony import */ var _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _AddItemForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);

    
    
    
    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Column',
  props: {
        rights: {
            type: _Rights_js__WEBPACK_IMPORTED_MODULE_2__.Rights,
            required: true
        },
        column_field_id: {
            type: String,
            required: true
        },
        column_id: {
            type: Number,
            required: true
        },
        /** @type {ColumnMetadata} */
        column_data: {
            type: Object,
            required: true
        },
        supported_itemtypes: {
            type: Object,
            required: true
        },
        team_badge_provider: {
            type: _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_3__.TeamBadgeProvider,
            required: true
        }
    },
  emits: [
        'kanban:column_fold', 'kanban:card_delete', 'kanban:card_restore', 'kanban:refresh',
        'kanban:column_hide', 'kanban:card_show_details'
    ],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

    /* global glpi_toast_info, glpi_toast_warning, glpi_toast_error */
    /**
     * @typedef ColumnMetadata
     * @property {boolean} protected If the column is protected from being deleted or modified.
     *      Typically seen for the "No status" column or other "virtual" columns.
     * @property {string} [header_color] The color that represents this column and that will be displayed in the header.
     * @property {string} [header_fg_color] The color of the text in the header.
     * @property {boolean} drop_only If cards can only be dropped into this column but not displayed in it.
     *      Typically seen for columns that may contain a lot of items is a completed state like the "Closed" column.
     * @property {string} [color_class] The CSS class that represents this column.
     * @property {string} name The name of the column
     * @property {{}[]} items The items that are in this column.
     */
    const props = __props;

    const emit = __emit;

    const element_id = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        return `column-${props.column_field_id}-${props.column_id}`;
    });
    const bg_color = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        return props.column_data['header_color'] ?? 'transparent';
    });
    const text_color = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        return props.column_data['header_fg_color'] ?? '';
    });
    const card_count = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        return Object.values(props.column_data.items || {}).filter(item => {
            return !item._filtered_out;
        }).length;
    });

    const itemtypes_can_create = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        const all_itemtypes = props.supported_itemtypes;
        const can_create = {};
        for (const itemtype in all_itemtypes) {
            if (all_itemtypes[itemtype].allow_create && all_itemtypes[itemtype]['allow_bulk_add'] !== false) {
                can_create[itemtype] = all_itemtypes[itemtype];
            }
        }
        return can_create;
    });

    function toggleFolded() {
        emit('kanban:column_fold', {
            column_id: props.column_id,
            folded: !props.column_data.folded
        });
    }

    const cards_to_show = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        return Object.values(props.column_data.items || {}).filter(item => {
            return !item._filtered_out;
        });
    });

    function getIcon(card) {
        const itemtype = card.id.split('-').shift();
        return props.supported_itemtypes[itemtype].icon || '';
    }

    const opened_form_type = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    const opened_form_data = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({});

    /**
     * Close any open item form
     */
    function closeItemForms() {
        opened_form_type.value = null;
        opened_form_data.value = {};
    }

    /**
     * Add a new form to the Kanban column to add a new item of the specified itemtype.
     * @param {string} itemtype The itemtype that is being added
     * @param {boolean} [bulk=false] If the item is being added in bulk
     */
    function showAddItemForm(itemtype, bulk = false) {
        opened_form_type.value = 'AddItemForm';
        opened_form_data.value = {
            is_bulk: bulk,
            itemtype: itemtype,
            itemtype_data: structuredClone(props.supported_itemtypes[itemtype]),
        };
        if (bulk) {
            const new_fields = opened_form_data.value.itemtype_data.fields;
            // Delete all non-hidden fields
            $.each(new_fields, (name, options) => {
                if (options.type !== 'hidden') {
                    delete new_fields[name];
                }
            });
            // Add a textarea for the bulk item list
            new_fields.bulk_item_list = {
                type: 'textarea',
                value: ''
            };
            opened_form_data.value.itemtype_data.fields = new_fields;
        }
    }

    async function addItem(e) {
        const values = {};
        values[props.column_field_id] = props.column_id;
        $.each(e.fields, (name, options) => {
            values[name] = options.value;
        });
        return $.ajax({
            method: 'POST',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                inputs: values,
                itemtype: opened_form_data.value.itemtype,
                action: opened_form_data.value.is_bulk ? 'bulk_add_item' : 'add_item',
            }
        }).done(() => {
            emit('kanban:refresh');
            const itemtype = opened_form_data.value.itemtype;
            const is_bulk = opened_form_data.value.is_bulk;
            closeItemForms();
            showAddItemForm(itemtype, is_bulk);
        }).always(() => {
            displaySessionMessages();
        });
    }

    function scrollToForm() {
        const form = $(`#${element_id.value} .kanban-body .kanban-form`).get(0);
        if (form) {
            form.scrollIntoView(false);
        }
    }

    const drop_only_message = __('This column cannot support showing cards due to how many cards would be shown. You can still drag cards into this column.');

const __returned__ = { props, emit, element_id, bg_color, text_color, card_count, itemtypes_can_create, toggleFolded, cards_to_show, getIcon, opened_form_type, opened_form_data, closeItemForms, showAddItemForm, addItem, scrollToForm, drop_only_message, Card: _Card_vue__WEBPACK_IMPORTED_MODULE_0__["default"], computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed, ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref, get Rights() { return _Rights_js__WEBPACK_IMPORTED_MODULE_2__.Rights }, get TeamBadgeProvider() { return _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_3__.TeamBadgeProvider }, AddItemForm: _AddItemForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_style_index_0_id_56657c42_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);


/***/ }),

/***/ 150:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_style_index_0_id_56657c42_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(151);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_style_index_0_id_56657c42_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_style_index_0_id_56657c42_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_style_index_0_id_56657c42_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Column_vue_vue_type_style_index_0_id_56657c42_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 151:
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
___CSS_LOADER_EXPORT___.push([module.id, `[data-v-56657c42] .kanban-form,[data-v-56657c42] .kanban-item {
  text-align: left;
  padding: 10px 0 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  min-height: 50px;
  margin-top: 10px;
  border-radius: 5px;
  min-width: 250px;
}
[data-v-56657c42] .kanban-form input[type=checkbox],[data-v-56657c42] .kanban-item input[type=checkbox] {
  margin-right: 5px;
}
[data-v-56657c42] .kanban-form input:not([type=checkbox]),[data-v-56657c42] .kanban-item input:not([type=checkbox]) {
  display: block;
}
[data-v-56657c42] .kanban-form .kanban-item-subtitle,[data-v-56657c42] .kanban-item .kanban-item-subtitle {
  padding: 5px 10px 0;
  font-style: italic;
  font-weight: normal;
}
[data-v-56657c42] .kanban-form .kanban-item-content,[data-v-56657c42] .kanban-item .kanban-item-content {
  padding: 0 10px;
}
[data-v-56657c42] .kanban-form .kanban-item-content .kanban-core-content,[data-v-56657c42] .kanban-item .kanban-item-content .kanban-core-content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
[data-v-56657c42] .kanban-form .kanban-item-content .kanban-plugin-content:not(:empty),[data-v-56657c42] .kanban-item .kanban-item-content .kanban-plugin-content:not(:empty) {
  margin-top: 10px;
}
[data-v-56657c42] .kanban-form .kanban-item-content .progress,[data-v-56657c42] .kanban-item .kanban-item-content .progress {
  height: 10px !important;
}
[data-v-56657c42] .kanban-form .kanban-description-preview,[data-v-56657c42] .kanban-item .kanban-description-preview {
  padding: 0 10px;
  margin-top: 10px;
  white-space: break-spaces;
  max-height: 3em;
  overflow: hidden;
}
@supports (display: -webkit-box) and (-webkit-line-clamp: 7) and (-webkit-box-orient: vertical) {
[data-v-56657c42] .kanban-form .kanban-description-preview,[data-v-56657c42] .kanban-item .kanban-description-preview {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: none;
}
}
[data-v-56657c42] .kanban-form.filtered-out,[data-v-56657c42] .kanban-item.filtered-out {
  display: none;
}
[data-v-56657c42] .kanban-form .kanban-item-header,[data-v-56657c42] .kanban-item .kanban-item-header {
  padding: 5px 10px 0;
  font-weight: 600;
}
[data-v-56657c42] .kanban-form .kanban-item-header button,[data-v-56657c42] .kanban-item .kanban-item-header button {
  background-color: inherit;
  border: none;
  color: inherit;
}
[data-v-56657c42] .kanban-form .kanban-item-header .kanban-dropdown.dropdown-menu a,[data-v-56657c42] .kanban-item .kanban-item-header .kanban-dropdown.dropdown-menu a {
  color: inherit;
  text-decoration: none !important;
}
[data-v-56657c42] .kanban-form .kanban-item-header .kanban-item-title .ti,[data-v-56657c42] .kanban-item .kanban-item-header .kanban-item-title .ti {
  float: none;
}
[data-v-56657c42] .kanban-form .kanban-item-header .kanban-item-title .ti:last-of-type,[data-v-56657c42] .kanban-item .kanban-item-header .kanban-item-title .ti:last-of-type {
  margin-right: 5px;
}
[data-v-56657c42] .kanban-form .kanban-item-header a:hover,[data-v-56657c42] .kanban-item .kanban-item-header a:hover {
  text-decoration: underline;
}
[data-v-56657c42] .kanban-form .kanban-item-header a,[data-v-56657c42] .kanban-item .kanban-item-header a {
  padding: unset;
}
[data-v-56657c42] .kanban-form .kanban-item-team,[data-v-56657c42] .kanban-item .kanban-item-team {
  display: flex;
  padding-bottom: 5px;
  margin-left: 10px;
  margin-top: 5px;
}
@media (prefers-reduced-motion: no-preference) {
[data-v-56657c42] .kanban-form .kanban-item-team:hover,[data-v-56657c42] .kanban-item .kanban-item-team:hover {
    margin-right: 0;
}
[data-v-56657c42] .kanban-form .kanban-item-team:hover > span,[data-v-56657c42] .kanban-item .kanban-item-team:hover > span {
    margin-right: -5px;
}
[data-v-56657c42] .kanban-form .kanban-item-team:hover > span:last-of-type,[data-v-56657c42] .kanban-item .kanban-item-team:hover > span:last-of-type {
    margin-right: 0;
}
}
@media (prefers-reduced-motion) {
[data-v-56657c42] .kanban-form .kanban-item-team,[data-v-56657c42] .kanban-item .kanban-item-team {
    margin-right: 0;
}
[data-v-56657c42] .kanban-form .kanban-item-team > span,[data-v-56657c42] .kanban-item .kanban-item-team > span {
    margin-right: -10px !important;
}
[data-v-56657c42] .kanban-form .kanban-item-team > span:last-of-type,[data-v-56657c42] .kanban-item .kanban-item-team > span:last-of-type {
    margin-right: -5px !important;
}
}
[data-v-56657c42] .kanban-form .kanban-item-team > span,[data-v-56657c42] .kanban-item .kanban-item-team > span {
  margin-right: -15px;
  border-radius: 50%;
  border: 3px solid var(--tblr-card-bg);
  box-sizing: content-box;
  min-height: 20px;
}
[data-v-56657c42] .kanban-form .kanban-item-team > span img,[data-v-56657c42] .kanban-item .kanban-item-team > span img {
  border-radius: 50%;
}
[data-v-56657c42] .kanban-form .kanban-item-team > span.fa-stack,[data-v-56657c42] .kanban-form .kanban-item-team > span .fa-stack,[data-v-56657c42] .kanban-item .kanban-item-team > span.fa-stack,[data-v-56657c42] .kanban-item .kanban-item-team > span .fa-stack {
  width: 2em;
}
[data-v-56657c42] .kanban-form .kanban-item-due-date,[data-v-56657c42] .kanban-item .kanban-item-due-date {
  margin: 10px 10px 10px 0;
}
.kanban-column[data-v-56657c42] {
  margin-right: 16px;
  border-radius: 5px;
  width: 400px;
  flex-direction: column;
  text-align: center;
}
.kanban-column[data-drop-only=true] .kanban-body[data-v-56657c42] {
  background: #fffa90;
  color: #777620;
}
.kanban-column.collapsed[data-v-56657c42] {
  min-width: unset;
  width: calc(1.2em + 20px);
  flex: 0 0 auto;
}
.kanban-column.collapsed .kanban-column-header[data-v-56657c42] {
  box-shadow: unset;
}
.kanban-column.collapsed .kanban-column-header .kanban-column-header-content[data-v-56657c42] {
  flex-direction: column;
}
.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .content-left[data-v-56657c42] {
  display: contents !important;
}
.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban-collapse-column[data-v-56657c42] {
  transform: rotate(90deg);
  transform-origin: center;
  display: inline-block;
  margin: calc(50% - 8px) 0;
  white-space: nowrap;
}
.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban-column-title[data-v-56657c42],
.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban_nb[data-v-56657c42] {
  writing-mode: vertical-lr;
  margin-top: 10px;
  margin-left: 0;
  padding: 10px 2px;
}
.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban-collapse-column[data-v-56657c42] {
  margin: 0 0 8px;
}
.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban-column-toolbar[data-v-56657c42] {
  display: none;
}
.kanban-column.collapsed .kanban-body[data-v-56657c42] {
  display: none;
}
.kanban-column .kanban-column-header[data-v-56657c42] {
  margin-bottom: 5px;
}
.kanban-column .kanban-column-header button[data-v-56657c42] {
  background-color: inherit;
  border: none;
  color: inherit;
}
.kanban-column .kanban-column-header .kanban-column-header-content[data-v-56657c42] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.kanban-column .kanban-column-header .pointer[data-v-56657c42] {
  opacity: 0.3;
}
.kanban-column .kanban-column-header .pointer[data-v-56657c42]:hover {
  opacity: 1;
}
.kanban-column .kanban-column-header i.fas[data-v-56657c42],
.kanban-column .kanban-column-header i.fa-solid[data-v-56657c42] {
  cursor: pointer;
  flex: 0 1 auto;
  position: relative;
}
.kanban-column .kanban-column-header i.fas[data-v-56657c42]::after,
.kanban-column .kanban-column-header i.fa-solid[data-v-56657c42]::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
}
.kanban-column .kanban-column-header .kanban-column-title[data-v-56657c42] {
  font-size: 1.3em;
  font-weight: 600;
  margin-left: 2px;
  color: inherit !important;
}
.kanban-column .kanban-column-header .kanban_nb[data-v-56657c42] {
  margin-left: 10px;
}
.kanban-column .kanban-column-header .kanban-column-toolbar[data-v-56657c42] {
  margin-left: auto;
  flex-direction: column;
  flex: 0 1 auto;
}
.kanban-column .kanban-column-header .kanban-column-toolbar i[data-v-56657c42] {
  margin-left: 0.2rem;
}
.kanban-column .kanban-body[data-v-56657c42] {
  min-height: 150px;
  padding: 0 5px;
  height: calc(100% - (1.2em + 35px));
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
}
.kanban-column .kanban-body .kanban-add-form[data-v-56657c42] {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.kanban-column .kanban-body .kanban-add-form input[data-v-56657c42] {
  margin: 8px 0 0;
}
.kanban-column .kanban-body .kanban-add-form textarea[data-v-56657c42] {
  margin: 8px 0;
}`, "",{"version":3,"sources":["webpack://./js/src/vue/Kanban/Column.vue","webpack://./Column.vue"],"names":[],"mappings":"AACI;EACI,gBAAA;EACA,mBAAA;EACA,wCAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;ACAR;ADGY;EACI,iBAAA;ACDhB;ADIY;EACI,cAAA;ACFhB;ADMQ;EACI,mBAAA;EACA,kBAAA;EACA,mBAAA;ACJZ;ADOQ;EACI,eAAA;ACLZ;ADOY;EACI,aAAA;EACA,eAAA;EACA,gBAAA;ACLhB;ADQY;EACI,gBAAA;ACNhB;ADSY;EACI,uBAAA;ACPhB;ADWQ;EACI,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;ACTZ;ADWQ;AACI;IACI,oBAAA;IACA,qBAAA;IACA,4BAAA;IACA,gBAAA;ACTd;AACF;ADYQ;EACI,aAAA;ACVZ;ADaQ;EAsBI,mBAAA;EACA,gBAAA;AChCZ;ADUY;EACI,yBAAA;EACA,YAAA;EACA,cAAA;ACRhB;ADYgB;EACI,cAAA;EACA,gCAAA;ACVpB;ADcY;EACI,WAAA;ACZhB;ADcgB;EACI,iBAAA;ACZpB;ADmBY;EACI,0BAAA;ACjBhB;ADoBY;EACI,cAAA;AClBhB;ADsBQ;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;ACpBZ;ADsBY;AACI;IACI,eAAA;ACpBlB;ADsBkB;IACI,kBAAA;ACpBtB;ADsBsB;IACI,eAAA;ACpB1B;AACF;ADyBY;AApBJ;IAqBQ,eAAA;ACtBd;ADwBc;IACI,8BAAA;ACtBlB;ADuBkB;IACI,6BAAA;ACrBtB;AACF;ADyBY;EACI,mBAAA;EACA,kBAAA;EACA,qCAAA;EACA,uBAAA;EACA,gBAAA;ACvBhB;ADyBgB;EACI,kBAAA;ACvBpB;AD0BgB;EACI,UAAA;ACxBpB;AD6BQ;EACI,wBAAA;AC3BZ;AD+BI;EACI,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;AC5BR;AD8BQ;EACI,mBAAA;EACA,cAAA;AC5BZ;AD+BQ;EACI,gBAAA;EACA,yBAAA;EACA,cAAA;AC7BZ;AD+BY;EACI,iBAAA;AC7BhB;AD+BgB;EACI,sBAAA;AC7BpB;AD+BoB;EACI,4BAAA;AC7BxB;ADgCoB;EACI,wBAAA;EACA,wBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AC9BxB;ADiCoB;;EAEI,yBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;AC/BxB;ADkCoB;EACI,eAAA;AChCxB;ADmCoB;EACI,aAAA;ACjCxB;ADsCY;EACI,aAAA;ACpChB;ADwCQ;EACI,kBAAA;ACtCZ;ADwCY;EACI,yBAAA;EACA,YAAA;EACA,cAAA;ACtChB;ADyCY;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;ACvChB;AD0CY;EACI,YAAA;ACxChB;AD0CgB;EACI,UAAA;ACxCpB;AD4CY;;EAEI,eAAA;EACA,cAAA;EACA,kBAAA;AC1ChB;AD6CgB;;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;AC1CpB;AD8CY;EACI,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,yBAAA;AC5ChB;AD+CY;EACI,iBAAA;AC7ChB;ADgDY;EACI,iBAAA;EACA,sBAAA;EACA,cAAA;AC9ChB;ADgDgB;EACI,mBAAA;AC9CpB;ADmDQ;EACI,iBAAA;EACA,cAAA;EACA,mCAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;ACjDZ;ADmDY;EACI,4BAAA;EACA,+BAAA;ACjDhB;ADmDgB;EACI,eAAA;ACjDpB;ADoDgB;EACI,aAAA;AClDpB","sourcesContent":["\n    :deep(.kanban-form), :deep(.kanban-item) {\n        text-align: left;\n        padding: 10px 0 3px;\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 10%);\n        min-height: 50px;\n        margin-top: 10px;\n        border-radius: 5px;\n        min-width: 250px;\n\n        input {\n            &[type=\"checkbox\"] {\n                margin-right: 5px;\n            }\n\n            &:not([type=\"checkbox\"]) {\n                display: block;\n            }\n        }\n\n        .kanban-item-subtitle {\n            padding: 5px 10px 0;\n            font-style: italic;\n            font-weight: normal;\n        }\n\n        .kanban-item-content {\n            padding: 0 10px;\n\n            .kanban-core-content {\n                display: flex;\n                flex-wrap: wrap;\n                margin-top: 10px;\n            }\n\n            .kanban-plugin-content:not(:empty) {\n                margin-top: 10px;\n            }\n\n            .progress {\n                height: 10px !important;\n            }\n        }\n\n        .kanban-description-preview {\n            padding: 0 10px;\n            margin-top: 10px;\n            white-space: break-spaces;\n            max-height: 3em;\n            overflow: hidden;\n        }\n        @supports (display: -webkit-box) and (-webkit-line-clamp: 7) and (-webkit-box-orient: vertical) {\n            .kanban-description-preview {\n                display: -webkit-box;\n                -webkit-line-clamp: 3;\n                -webkit-box-orient: vertical;\n                max-height: none;\n            }\n        }\n\n        &.filtered-out {\n            display: none;\n        }\n\n        .kanban-item-header {\n            button {\n                background-color: inherit;\n                border: none;\n                color: inherit;\n            }\n\n            .kanban-dropdown.dropdown-menu {\n                a {\n                    color: inherit;\n                    text-decoration: none !important;\n                }\n            }\n\n            .kanban-item-title .ti {\n                float: none;\n\n                &:last-of-type {\n                    margin-right: 5px;\n                }\n            }\n\n            padding: 5px 10px 0;\n            font-weight: 600;\n\n            a:hover {\n                text-decoration: underline;\n            }\n\n            a {\n                padding: unset;\n            }\n        }\n\n        .kanban-item-team {\n            display: flex;\n            padding-bottom: 5px;\n            margin-left: 10px;\n            margin-top: 5px;\n\n            @media (prefers-reduced-motion: no-preference) {\n                &:hover {\n                    margin-right: 0;\n\n                    > span {\n                        margin-right: -5px;\n\n                        &:last-of-type {\n                            margin-right: 0;\n                        }\n                    }\n                }\n            }\n\n            @media (prefers-reduced-motion) {\n                margin-right: 0;\n\n                > span {\n                    margin-right: -10px !important;\n                    &:last-of-type {\n                        margin-right: -5px !important;\n                    }\n                }\n            }\n\n            > span {\n                margin-right: -15px;\n                border-radius: 50%;\n                border: 3px solid var(--tblr-card-bg);\n                box-sizing: content-box;\n                min-height: 20px;\n\n                img {\n                    border-radius: 50%;\n                }\n\n                &.fa-stack, & .fa-stack {\n                    width: 2em;\n                }\n            }\n        }\n\n        .kanban-item-due-date {\n            margin: 10px 10px 10px 0;\n        }\n    }\n\n    .kanban-column {\n        margin-right: 16px;\n        border-radius: 5px;\n        width: 400px;\n        flex-direction: column;\n        text-align: center;\n\n        &[data-drop-only=\"true\"] .kanban-body {\n            background: #fffa90;\n            color: #777620;\n        }\n\n        &.collapsed {\n            min-width: unset;\n            width: calc(1.2em + 20px);\n            flex: 0 0 auto;\n\n            .kanban-column-header {\n                box-shadow: unset;\n\n                .kanban-column-header-content {\n                    flex-direction: column;\n\n                    .content-left {\n                        display: contents !important;\n                    }\n\n                    .kanban-collapse-column {\n                        transform: rotate(90deg);\n                        transform-origin: center;\n                        display: inline-block;\n                        margin: calc(50% - 8px) 0;\n                        white-space: nowrap;\n                    }\n\n                    .kanban-column-title,\n                    .kanban_nb {\n                        writing-mode: vertical-lr;\n                        margin-top: 10px;\n                        margin-left: 0;\n                        padding: 10px 2px;\n                    }\n\n                    .kanban-collapse-column {\n                        margin: 0 0 8px;\n                    }\n\n                    .kanban-column-toolbar {\n                        display: none;\n                    }\n                }\n            }\n\n            .kanban-body {\n                display: none;\n            }\n        }\n\n        .kanban-column-header {\n            margin-bottom: 5px;\n\n            button {\n                background-color: inherit;\n                border: none;\n                color: inherit;\n            }\n\n            .kanban-column-header-content {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n\n            .pointer {\n                opacity: 0.3;\n\n                &:hover {\n                    opacity: 1;\n                }\n            }\n\n            i.fas,\n            i.fa-solid {\n                cursor: pointer;\n                flex: 0 1 auto;\n                position: relative;\n\n                // Increase click area to make it easier to collapse/expand boards\n                &::after {\n                    content: \"\";\n                    position: absolute;\n                    top: -50%;\n                    left: -50%;\n                    width: 200%;\n                    height: 200%;\n                }\n            }\n\n            .kanban-column-title {\n                font-size: 1.3em;\n                font-weight: 600;\n                margin-left: 2px;\n                color: inherit !important;\n            }\n\n            .kanban_nb {\n                margin-left: 10px;\n            }\n\n            .kanban-column-toolbar {\n                margin-left: auto;\n                flex-direction: column;\n                flex: 0 1 auto;\n\n                i {\n                    margin-left: 0.2rem;\n                }\n            }\n        }\n\n        .kanban-body {\n            min-height: 150px;\n            padding: 0 5px;\n            height: calc(100% - (1.2em + 35px));\n            overflow-y: auto;\n            overflow-x: hidden;\n            list-style: none;\n\n            .kanban-add-form {\n                padding-top: 10px !important;\n                padding-bottom: 10px !important;\n\n                input {\n                    margin: 8px 0 0;\n                }\n\n                textarea {\n                    margin: 8px 0;\n                }\n            }\n        }\n    }\n",":deep(.kanban-form), :deep(.kanban-item) {\n  text-align: left;\n  padding: 10px 0 3px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  min-height: 50px;\n  margin-top: 10px;\n  border-radius: 5px;\n  min-width: 250px;\n}\n:deep(.kanban-form) input[type=checkbox], :deep(.kanban-item) input[type=checkbox] {\n  margin-right: 5px;\n}\n:deep(.kanban-form) input:not([type=checkbox]), :deep(.kanban-item) input:not([type=checkbox]) {\n  display: block;\n}\n:deep(.kanban-form) .kanban-item-subtitle, :deep(.kanban-item) .kanban-item-subtitle {\n  padding: 5px 10px 0;\n  font-style: italic;\n  font-weight: normal;\n}\n:deep(.kanban-form) .kanban-item-content, :deep(.kanban-item) .kanban-item-content {\n  padding: 0 10px;\n}\n:deep(.kanban-form) .kanban-item-content .kanban-core-content, :deep(.kanban-item) .kanban-item-content .kanban-core-content {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n}\n:deep(.kanban-form) .kanban-item-content .kanban-plugin-content:not(:empty), :deep(.kanban-item) .kanban-item-content .kanban-plugin-content:not(:empty) {\n  margin-top: 10px;\n}\n:deep(.kanban-form) .kanban-item-content .progress, :deep(.kanban-item) .kanban-item-content .progress {\n  height: 10px !important;\n}\n:deep(.kanban-form) .kanban-description-preview, :deep(.kanban-item) .kanban-description-preview {\n  padding: 0 10px;\n  margin-top: 10px;\n  white-space: break-spaces;\n  max-height: 3em;\n  overflow: hidden;\n}\n@supports (display: -webkit-box) and (-webkit-line-clamp: 7) and (-webkit-box-orient: vertical) {\n  :deep(.kanban-form) .kanban-description-preview, :deep(.kanban-item) .kanban-description-preview {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    max-height: none;\n  }\n}\n:deep(.kanban-form).filtered-out, :deep(.kanban-item).filtered-out {\n  display: none;\n}\n:deep(.kanban-form) .kanban-item-header, :deep(.kanban-item) .kanban-item-header {\n  padding: 5px 10px 0;\n  font-weight: 600;\n}\n:deep(.kanban-form) .kanban-item-header button, :deep(.kanban-item) .kanban-item-header button {\n  background-color: inherit;\n  border: none;\n  color: inherit;\n}\n:deep(.kanban-form) .kanban-item-header .kanban-dropdown.dropdown-menu a, :deep(.kanban-item) .kanban-item-header .kanban-dropdown.dropdown-menu a {\n  color: inherit;\n  text-decoration: none !important;\n}\n:deep(.kanban-form) .kanban-item-header .kanban-item-title .ti, :deep(.kanban-item) .kanban-item-header .kanban-item-title .ti {\n  float: none;\n}\n:deep(.kanban-form) .kanban-item-header .kanban-item-title .ti:last-of-type, :deep(.kanban-item) .kanban-item-header .kanban-item-title .ti:last-of-type {\n  margin-right: 5px;\n}\n:deep(.kanban-form) .kanban-item-header a:hover, :deep(.kanban-item) .kanban-item-header a:hover {\n  text-decoration: underline;\n}\n:deep(.kanban-form) .kanban-item-header a, :deep(.kanban-item) .kanban-item-header a {\n  padding: unset;\n}\n:deep(.kanban-form) .kanban-item-team, :deep(.kanban-item) .kanban-item-team {\n  display: flex;\n  padding-bottom: 5px;\n  margin-left: 10px;\n  margin-top: 5px;\n}\n@media (prefers-reduced-motion: no-preference) {\n  :deep(.kanban-form) .kanban-item-team:hover, :deep(.kanban-item) .kanban-item-team:hover {\n    margin-right: 0;\n  }\n  :deep(.kanban-form) .kanban-item-team:hover > span, :deep(.kanban-item) .kanban-item-team:hover > span {\n    margin-right: -5px;\n  }\n  :deep(.kanban-form) .kanban-item-team:hover > span:last-of-type, :deep(.kanban-item) .kanban-item-team:hover > span:last-of-type {\n    margin-right: 0;\n  }\n}\n@media (prefers-reduced-motion) {\n  :deep(.kanban-form) .kanban-item-team, :deep(.kanban-item) .kanban-item-team {\n    margin-right: 0;\n  }\n  :deep(.kanban-form) .kanban-item-team > span, :deep(.kanban-item) .kanban-item-team > span {\n    margin-right: -10px !important;\n  }\n  :deep(.kanban-form) .kanban-item-team > span:last-of-type, :deep(.kanban-item) .kanban-item-team > span:last-of-type {\n    margin-right: -5px !important;\n  }\n}\n:deep(.kanban-form) .kanban-item-team > span, :deep(.kanban-item) .kanban-item-team > span {\n  margin-right: -15px;\n  border-radius: 50%;\n  border: 3px solid var(--tblr-card-bg);\n  box-sizing: content-box;\n  min-height: 20px;\n}\n:deep(.kanban-form) .kanban-item-team > span img, :deep(.kanban-item) .kanban-item-team > span img {\n  border-radius: 50%;\n}\n:deep(.kanban-form) .kanban-item-team > span.fa-stack, :deep(.kanban-form) .kanban-item-team > span .fa-stack, :deep(.kanban-item) .kanban-item-team > span.fa-stack, :deep(.kanban-item) .kanban-item-team > span .fa-stack {\n  width: 2em;\n}\n:deep(.kanban-form) .kanban-item-due-date, :deep(.kanban-item) .kanban-item-due-date {\n  margin: 10px 10px 10px 0;\n}\n\n.kanban-column {\n  margin-right: 16px;\n  border-radius: 5px;\n  width: 400px;\n  flex-direction: column;\n  text-align: center;\n}\n.kanban-column[data-drop-only=true] .kanban-body {\n  background: #fffa90;\n  color: #777620;\n}\n.kanban-column.collapsed {\n  min-width: unset;\n  width: calc(1.2em + 20px);\n  flex: 0 0 auto;\n}\n.kanban-column.collapsed .kanban-column-header {\n  box-shadow: unset;\n}\n.kanban-column.collapsed .kanban-column-header .kanban-column-header-content {\n  flex-direction: column;\n}\n.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .content-left {\n  display: contents !important;\n}\n.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban-collapse-column {\n  transform: rotate(90deg);\n  transform-origin: center;\n  display: inline-block;\n  margin: calc(50% - 8px) 0;\n  white-space: nowrap;\n}\n.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban-column-title,\n.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban_nb {\n  writing-mode: vertical-lr;\n  margin-top: 10px;\n  margin-left: 0;\n  padding: 10px 2px;\n}\n.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban-collapse-column {\n  margin: 0 0 8px;\n}\n.kanban-column.collapsed .kanban-column-header .kanban-column-header-content .kanban-column-toolbar {\n  display: none;\n}\n.kanban-column.collapsed .kanban-body {\n  display: none;\n}\n.kanban-column .kanban-column-header {\n  margin-bottom: 5px;\n}\n.kanban-column .kanban-column-header button {\n  background-color: inherit;\n  border: none;\n  color: inherit;\n}\n.kanban-column .kanban-column-header .kanban-column-header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.kanban-column .kanban-column-header .pointer {\n  opacity: 0.3;\n}\n.kanban-column .kanban-column-header .pointer:hover {\n  opacity: 1;\n}\n.kanban-column .kanban-column-header i.fas,\n.kanban-column .kanban-column-header i.fa-solid {\n  cursor: pointer;\n  flex: 0 1 auto;\n  position: relative;\n}\n.kanban-column .kanban-column-header i.fas::after,\n.kanban-column .kanban-column-header i.fa-solid::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n}\n.kanban-column .kanban-column-header .kanban-column-title {\n  font-size: 1.3em;\n  font-weight: 600;\n  margin-left: 2px;\n  color: inherit !important;\n}\n.kanban-column .kanban-column-header .kanban_nb {\n  margin-left: 10px;\n}\n.kanban-column .kanban-column-header .kanban-column-toolbar {\n  margin-left: auto;\n  flex-direction: column;\n  flex: 0 1 auto;\n}\n.kanban-column .kanban-column-header .kanban-column-toolbar i {\n  margin-left: 0.2rem;\n}\n.kanban-column .kanban-body {\n  min-height: 150px;\n  padding: 0 5px;\n  height: calc(100% - (1.2em + 35px));\n  overflow-y: auto;\n  overflow-x: hidden;\n  list-style: none;\n}\n.kanban-column .kanban-body .kanban-add-form {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n}\n.kanban-column .kanban-body .kanban-add-form input {\n  margin: 8px 0 0;\n}\n.kanban-column .kanban-body .kanban-add-form textarea {\n  margin: 8px 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=Kanban-Column-vue-9b5ac5dfa4a9ee7bfd09.js.map