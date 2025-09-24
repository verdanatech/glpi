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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[8],{

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

/***/ 83:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfilerTable_vue_vue_type_template_id_6d83c4d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _ProfilerTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony import */ var _ProfilerTable_vue_vue_type_style_index_0_id_6d83c4d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProfilerTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProfilerTable_vue_vue_type_template_id_6d83c4d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6d83c4d2"],['__file',"js/src/vue/Debug/Widget/ProfilerTable.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_template_id_6d83c4d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_template_id_6d83c4d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);


/***/ }),

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "table table-striped card-table" }
const _hoisted_2 = ["data-profiler-section-id"]
const _hoisted_3 = { "data-prop": "category" }
const _hoisted_4 = { "data-prop": "name" }
const _hoisted_5 = { "data-prop": "duration" }
const _hoisted_6 = { "data-prop": "percent_of_parent" }
const _hoisted_7 = { "data-prop": "auto_ended" }
const _hoisted_8 = { key: 0 }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_widget_profiler_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("widget-profiler-table")

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.nest_level, (i) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
            class: "nesting-spacer",
            key: i,
            "aria-hidden": "true"
          }))
        }), 128 /* KEYED_FRAGMENT */)),
        _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Category", -1 /* CACHED */)),
        _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name", -1 /* CACHED */)),
        _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Duration", -1 /* CACHED */)),
        _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Percent of parent", -1 /* CACHED */)),
        _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Auto-ended", -1 /* CACHED */))
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.top_level_data, (section) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
            "data-profiler-section-id": section.id
          }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.nest_level, (i) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
                class: "nesting-spacer",
                key: i,
                "aria-hidden": "true"
              }))
            }), 128 /* KEYED_FRAGMENT */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_3, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                class: "category-badge badge badge-outline fw-bold border-2",
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`border-color: ${section.bg_color};`)
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(section.category), 5 /* TEXT, STYLE */)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(section.name), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(section.duration.toFixed(0)) + " ms", 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(section.percent_of_parent) + "%", 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(section.auto_ended ? 'Yes' : 'No'), 1 /* TEXT */)
          ], 8 /* PROPS */, _hoisted_2), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.props.hide_instant_sections || (section.duration > $setup.instant_threshold)]
          ]),
          (section.has_children)
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_8, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", { colspan: $setup.col_count }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_widget_profiler_table, {
                    parent_duration: section.duration,
                    nest_level: $setup.props.nest_level + 1,
                    profiler_sections: $setup.props.profiler_sections,
                    parent_id: section.id,
                    hide_instant_sections: $setup.props.hide_instant_sections
                  }, null, 8 /* PROPS */, ["parent_duration", "nest_level", "profiler_sections", "parent_id", "hide_instant_sections"])
                ])
              ], 512 /* NEED_PATCH */)), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.props.hide_instant_sections || (section.duration > $setup.instant_threshold)]
              ])
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ], 512 /* NEED_PATCH */)), [
    [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.hasUnfilteredSections($setup.top_level_data)]
  ])
}

/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
 

/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    const instant_threshold = 1.0;

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ProfilerTable',
  props: {
        parent_id: {
            type: String,
            required: false,
        },
        profiler_sections: {
            type: Array,
            required: true,
        },
        nest_level: {
            type: Number,
            required: true,
            default: 0,
        },
        parent_duration: {
            type: Number,
            required: true,
            default: 0,
        },
        hide_instant_sections: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
  setup(__props, { expose: __expose }) {
  __expose();

    /* global tinycolor */
    /* global _ */
    const props = __props;

    function getProfilerCategoryColor(category) {
        const predefined_colors = {
            core: '#89a2e1',
            db: '#9252ad',
            twig: '#64ad52',
            plugins: '#a077a6',
            search: '#b6803d',
            boot: '#a24e55',
        };

        let bg_color = '';
        if (predefined_colors[category] !== undefined) {
            bg_color = predefined_colors[category];
        } else {
            let hash = 0;
            for (let i = 0; i < category.length; i++) {
                hash = category.charCodeAt(i) + ((hash << 5) - hash);
            }
            let color = '#';
            for (let i = 0; i < 3; i++) {
                const value = (hash >> (i * 8)) & 0xFF;
                color += ('00' + value.toString(16)).substr(-2);
            }
            bg_color = color;
        }

        return {
            bg_color: bg_color,
        };
    }

    const col_count = 5 + props.nest_level;

    function getProfilerData(parent_id) {
        const sections = props.profiler_sections.filter((section) => section.parent_id === parent_id);
        const sections_data = [];
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const cat_colors = getProfilerCategoryColor(section.category);
            const duration = section.duration || (section.end - section.start);
            let percent_of_parent = 100;
            if (props.nest_level > 0 && props.parent_duration > 0) {
                percent_of_parent = ((duration / props.parent_duration) * 100).toFixed(2);
            } else if (props.parent_duration <= 0) {
                percent_of_parent = (100 / sections.length).toFixed(2);
            }

            const data = {
                id: section.id,
                name: _.escape(section.name),
                category: _.escape(section.category),
                bg_color: cat_colors.bg_color,
                start: section.start,
                end: section.end,
                duration: duration,
                percent_of_parent: percent_of_parent,
                has_children: props.profiler_sections.filter((child) => child.parent_id === section.id).length > 0,
                auto_ended: section.auto_ended || false,
            };
            sections_data.push(data);
        }
        return sections_data;
    }
    const top_level_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return getProfilerData(props.parent_id);
    });

    function hasUnfilteredSections(sections) {
        if (!props.hide_instant_sections) {
            return true;
        }
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if (section.duration > instant_threshold) {
                return true;
            }
        }
        return false;
    }

const __returned__ = { props, getProfilerCategoryColor, col_count, getProfilerData, top_level_data, instant_threshold, hasUnfilteredSections, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_style_index_0_id_6d83c4d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);


/***/ }),

/***/ 89:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_style_index_0_id_6d83c4d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_style_index_0_id_6d83c4d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_style_index_0_id_6d83c4d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_style_index_0_id_6d83c4d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ProfilerTable_vue_vue_type_style_index_0_id_6d83c4d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 90:
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
.nesting-spacer[data-v-6d83c4d2] {
        min-width: 2rem;
}
.category-badge[data-v-6d83c4d2] {
        color: var(--tblr-body-color);
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Debug/Widget/ProfilerTable.vue"],"names":[],"mappings":";AAwJI;QACI,eAAe;AACnB;AACA;QACI,6BAA6B;AACjC","sourcesContent":["<script setup>\n    /* global tinycolor */\n    /* global _ */\n    import {computed} from \"vue\";\n\n    const props = defineProps({\n        parent_id: {\n            type: String,\n            required: false,\n        },\n        profiler_sections: {\n            type: Array,\n            required: true,\n        },\n        nest_level: {\n            type: Number,\n            required: true,\n            default: 0,\n        },\n        parent_duration: {\n            type: Number,\n            required: true,\n            default: 0,\n        },\n        hide_instant_sections: {\n            type: Boolean,\n            required: false,\n            default: false,\n        }\n    });\n\n    function getProfilerCategoryColor(category) {\n        const predefined_colors = {\n            core: '#89a2e1',\n            db: '#9252ad',\n            twig: '#64ad52',\n            plugins: '#a077a6',\n            search: '#b6803d',\n            boot: '#a24e55',\n        };\n\n        let bg_color = '';\n        if (predefined_colors[category] !== undefined) {\n            bg_color = predefined_colors[category];\n        } else {\n            let hash = 0;\n            for (let i = 0; i < category.length; i++) {\n                hash = category.charCodeAt(i) + ((hash << 5) - hash);\n            }\n            let color = '#';\n            for (let i = 0; i < 3; i++) {\n                const value = (hash >> (i * 8)) & 0xFF;\n                color += ('00' + value.toString(16)).substr(-2);\n            }\n            bg_color = color;\n        }\n\n        return {\n            bg_color: bg_color,\n        };\n    }\n\n    const col_count = 5 + props.nest_level;\n\n    function getProfilerData(parent_id) {\n        const sections = props.profiler_sections.filter((section) => section.parent_id === parent_id);\n        const sections_data = [];\n        for (let i = 0; i < sections.length; i++) {\n            const section = sections[i];\n            const cat_colors = getProfilerCategoryColor(section.category);\n            const duration = section.duration || (section.end - section.start);\n            let percent_of_parent = 100;\n            if (props.nest_level > 0 && props.parent_duration > 0) {\n                percent_of_parent = ((duration / props.parent_duration) * 100).toFixed(2);\n            } else if (props.parent_duration <= 0) {\n                percent_of_parent = (100 / sections.length).toFixed(2);\n            }\n\n            const data = {\n                id: section.id,\n                name: _.escape(section.name),\n                category: _.escape(section.category),\n                bg_color: cat_colors.bg_color,\n                start: section.start,\n                end: section.end,\n                duration: duration,\n                percent_of_parent: percent_of_parent,\n                has_children: props.profiler_sections.filter((child) => child.parent_id === section.id).length > 0,\n                auto_ended: section.auto_ended || false,\n            };\n            sections_data.push(data);\n        }\n        return sections_data;\n    }\n    const top_level_data = computed(() => {\n        return getProfilerData(props.parent_id);\n    });\n\n    const instant_threshold = 1.0;\n\n    function hasUnfilteredSections(sections) {\n        if (!props.hide_instant_sections) {\n            return true;\n        }\n        for (let i = 0; i < sections.length; i++) {\n            const section = sections[i];\n            if (section.duration > instant_threshold) {\n                return true;\n            }\n        }\n        return false;\n    }\n</script>\n\n<template>\n    <table class=\"table table-striped card-table\" v-show=\"hasUnfilteredSections(top_level_data)\">\n        <thead>\n            <tr>\n                <th class=\"nesting-spacer\" v-for=\"i in nest_level\" :key=\"i\" aria-hidden=\"true\"></th>\n                <th>Category</th>\n                <th>Name</th>\n                <th>Duration</th>\n                <th>Percent of parent</th>\n                <th>Auto-ended</th>\n            </tr>\n        </thead>\n        <tbody>\n            <template v-for=\"section in top_level_data\">\n                <tr :data-profiler-section-id=\"section.id\" v-show=\"!props.hide_instant_sections || (section.duration > instant_threshold)\">\n                    <td class=\"nesting-spacer\" v-for=\"i in nest_level\" :key=\"i\" aria-hidden=\"true\"></td>\n                    <td data-prop=\"category\">\n                        <span class=\"category-badge badge badge-outline fw-bold border-2\" :style=\"`border-color: ${section.bg_color};`\">\n                            {{ section.category }}\n                        </span>\n                    </td>\n                    <td data-prop=\"name\">{{ section.name }}</td>\n                    <td data-prop=\"duration\">{{ section.duration.toFixed(0) }} ms</td>\n                    <td data-prop=\"percent_of_parent\">{{ section.percent_of_parent }}%</td>\n                    <td data-prop=\"auto_ended\">{{ section.auto_ended ? 'Yes' : 'No' }}</td>\n                </tr>\n                <tr v-if=\"section.has_children\" v-show=\"!props.hide_instant_sections || (section.duration > instant_threshold)\">\n                    <td :colspan=\"col_count\">\n                        <widget-profiler-table :parent_duration=\"section.duration\" :nest_level=\"props.nest_level + 1\"\n                                               :profiler_sections=\"props.profiler_sections\" :parent_id=\"section.id\" :hide_instant_sections=\"props.hide_instant_sections\"></widget-profiler-table>\n                    </td>\n                </tr>\n            </template>\n        </tbody>\n    </table>\n</template>\n\n<style scoped>\n    .nesting-spacer {\n        min-width: 2rem;\n    }\n    .category-badge {\n        color: var(--tblr-body-color);\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=Debug-Widget-ProfilerTable-vue-230b97513fa93bf6e799.js.map