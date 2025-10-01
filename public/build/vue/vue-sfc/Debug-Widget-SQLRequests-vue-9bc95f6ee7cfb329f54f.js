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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[11],{

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

/***/ 96:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SQLRequests_vue_vue_type_template_id_b1b46442_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _SQLRequests_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _SQLRequests_vue_vue_type_style_index_0_id_b1b46442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SQLRequests_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SQLRequests_vue_vue_type_template_id_b1b46442_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b1b46442"],['__file',"js/src/vue/Debug/Widget/SQLRequests.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_template_id_b1b46442_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_template_id_b1b46442_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);


/***/ }),

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "overflow-auto py-2 px-3" }
const _hoisted_2 = {
  id: "debug-sql-request-table",
  class: "table card-table"
}
const _hoisted_3 = { key: 0 }
const _hoisted_4 = { class: "btn btn-link request-link" }
const _hoisted_5 = {
  class: "d-flex align-items-start",
  style: {"max-width":"50vw"}
}
const _hoisted_6 = {
  style: {"max-width":"50vw","white-space":"break-spaces"},
  class: "w-100"
}
const _hoisted_7 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
          ($setup.is_global_mode)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = $event => ($setup.setSortedCol('request_id')))
              }, "Request ID"))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            onClick: _cache[1] || (_cache[1] = $event => ($setup.setSortedCol('num')))
          }, "Number"),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            onClick: _cache[2] || (_cache[2] = $event => ($setup.setSortedCol('query')))
          }, "Query"),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            onClick: _cache[3] || (_cache[3] = $event => ($setup.setSortedCol('time')))
          }, "Time"),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            onClick: _cache[4] || (_cache[4] = $event => ($setup.setSortedCol('rows')))
          }, "Rows"),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            onClick: _cache[5] || (_cache[5] = $event => ($setup.setSortedCol('warnings')))
          }, "Warnings"),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            onClick: _cache[6] || (_cache[6] = $event => ($setup.setSortedCol('errors')))
          }, "Errors")
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.sorted_queries_data, (query) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
            key: query.request_id + '-' + query.num
          }, [
            ($setup.is_global_mode)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_3, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(query.request_id), 1 /* TEXT */)
                ]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(query.num), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", {
                    class: "d-block cm-s-default border-0",
                    innerHTML: $setup.colorized_queries.get(query.request_id + '-' + query.num)
                  }, null, 8 /* PROPS */, _hoisted_7)
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                  type: "button",
                  onClick: _cache[7] || (_cache[7] = $event => ($setup.copyToClipboard($event))),
                  class: "ms-1 copy-code btn btn-sm btn-ghost-secondary",
                  title: "Copy query to clipboard"
                }, [...(_cache[8] || (_cache[8] = [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-clipboard-copy" }, null, -1 /* CACHED */)
                ]))])
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(query.time.toFixed(1)) + " ms", 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(query.rows), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(query.warnings), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(query.errors), 1 /* TEXT */)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}

/***/ }),

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
 

/***/ }),

/***/ 100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'SQLRequests',
  props: {
        initial_request: {
            type: Object,
            required: false
        },
        ajax_requests: {
            type: Array,
            required: false
        },
        current_profile: {
            type: Object,
            required: false
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

    /* global copyTextToClipboard */
    /* global _ */
    const props = __props;

    const is_global_mode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return props.current_profile === undefined && props.ajax_requests !== undefined;
    });

    function getCombinedSQLData() {
        const sql_data = {
            total_requests: 0,
            total_duration: 0,
            queries: {}
        };
        if (is_global_mode.value) {
            sql_data.queries[props.initial_request.id] = props.initial_request.sql.queries;
            props.ajax_requests.forEach((request) => {
                if (request.profile && request.profile.sql !== undefined) {
                    sql_data.queries[request.id] = request.profile.sql.queries;
                }
            });
        } else {
            sql_data.queries[props.current_profile.id] = props.current_profile.sql.queries;
        }
        $.each(sql_data.queries, (request_id, data) => {
            // update the total counters
            data.forEach((query) => {
                sql_data.total_requests += 1;
                sql_data.total_duration += query['time'];
            });
        });

        return sql_data;
    }

    const sorted_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(is_global_mode.value ? 'request_id' : 'num');
    const sort_dir = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('asc');
    const sorted_queries_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let sorted = [];

        const sql_data = getCombinedSQLData();
        $.each(sql_data.queries, (request_id, data) => {
            data.forEach((query) => {
                sorted.push({
                    request_id: request_id,
                    num: query['num'],
                    time: query['time'],
                    query: query['query'],
                    rows: query['rows'],
                    warnings: _.escape(query['warnings']),
                    errors: _.escape(query['errors']),
                });
            });
        });

        // Filter by current profile id
        if (!is_global_mode.value) {
            sorted = sorted.filter((query) => {
                return query.request_id === props.current_profile.id;
            });
        }

        // Sort by column
        sorted.sort((a, b) => {
            let a_val = a[sorted_col.value];
            let b_val = b[sorted_col.value];
            if (sorted_col.value === 'time') {
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
    function copyToClipboard(e) {
        // copy content of code block in clipboard
        const code =  $(e.currentTarget).parent().find('code');
        // Normalize whitespace as spaces and trim
        const code_clean = code.text().replace(/\s+/g, ' ').trim();
        copyTextToClipboard(code_clean);

        // change temporary the button icon to a check then after a while return to the original icon
        const icon = $(e.currentTarget).find('i');
        icon.removeClass('ti-clipboard-copy').addClass('ti-check');
        setTimeout(() => {
            icon.removeClass('ti-check').addClass('ti-clipboard-copy');
        }, 1000);
    }

    function cleanSQLQuery(query) {
        const newline_keywords = ['UNION', 'FROM', 'WHERE', 'INNER JOIN', 'LEFT JOIN', 'ORDER BY', 'SORT'];
        const post_newline_keywords = ['UNION'];
        query = query.replace(/\n/g, ' ');

        return Promise.resolve(window.GLPI.Monaco.colorizeText(query, 'sql')).then((html) => {
            // get all 'span' elements with mtk6 class (keywords) and insert the needed line breaks
            const newline_before_selector = newline_keywords.map((keyword) => `span.mtk6:contains(${CSS.escape(keyword)})`).join(',');
            const post_newline_selector = post_newline_keywords.map((keyword) => `span.mtk6:contains(${CSS.escape(keyword)})`).join(',');
            return $($.parseHTML(html)).find(newline_before_selector).before('</br>').end().find(post_newline_selector).after('</br>').end().html();
        });
    }

    const colorized_queries = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(new Map());

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => sorted_queries_data.value, () => {
        sorted_queries_data.value.forEach((query) => {
            const key = query.request_id + '-' + query.num;
            if (!colorized_queries.has(key)) {
                // Show uncolored query until the colorized version is ready
                colorized_queries.set(key, query.query);
                cleanSQLQuery(query.query).then((html) => {
                    colorized_queries.set(key, html);
                });
            }
        });
    }, {
        immediate: true,
        deep: true
    });

const __returned__ = { props, is_global_mode, getCombinedSQLData, sorted_col, sort_dir, sorted_queries_data, setSortedCol, copyToClipboard, cleanSQLQuery, colorized_queries, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_style_index_0_id_b1b46442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);


/***/ }),

/***/ 102:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_style_index_0_id_b1b46442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(103);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_style_index_0_id_b1b46442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_style_index_0_id_b1b46442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_style_index_0_id_b1b46442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_SQLRequests_vue_vue_type_style_index_0_id_b1b46442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 103:
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
#debug-sql-request-table thead tr th[data-v-b1b46442] {
        cursor: pointer;
}
#debug-sql-request-table tbody tr td[data-v-b1b46442]:nth-of-type(3) {
        max-width: 50vw;
        white-space: break-spaces;
}
#debug-sql-request-table tbody tr td[data-v-b1b46442]:nth-of-type(4) {
        white-space: nowrap;
}
#debug-sql-request-table[data-v-b1b46442] span.mtk1 {
        color: var(--tblr-body-color);
}
#debug-sql-request-table code[data-v-b1b46442] {
        color: var(--tblr-body-color);
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/Debug/Widget/SQLRequests.vue"],"names":[],"mappings":";AAoMI;QACI,eAAe;AACnB;AACA;QACI,eAAe;QACf,yBAAyB;AAC7B;AACA;QACI,mBAAmB;AACvB;AACA;QACI,6BAA6B;AACjC;AACA;QACI,6BAA6B;AACjC","sourcesContent":["<script setup>\n    /* global copyTextToClipboard */\n    /* global _ */\n    import {computed, reactive, ref, watch} from \"vue\";\n\n    const props = defineProps({\n        initial_request: {\n            type: Object,\n            required: false\n        },\n        ajax_requests: {\n            type: Array,\n            required: false\n        },\n        current_profile: {\n            type: Object,\n            required: false\n        },\n    });\n\n    const is_global_mode = computed(() => {\n        return props.current_profile === undefined && props.ajax_requests !== undefined;\n    });\n\n    function getCombinedSQLData() {\n        const sql_data = {\n            total_requests: 0,\n            total_duration: 0,\n            queries: {}\n        };\n        if (is_global_mode.value) {\n            sql_data.queries[props.initial_request.id] = props.initial_request.sql.queries;\n            props.ajax_requests.forEach((request) => {\n                if (request.profile && request.profile.sql !== undefined) {\n                    sql_data.queries[request.id] = request.profile.sql.queries;\n                }\n            });\n        } else {\n            sql_data.queries[props.current_profile.id] = props.current_profile.sql.queries;\n        }\n        $.each(sql_data.queries, (request_id, data) => {\n            // update the total counters\n            data.forEach((query) => {\n                sql_data.total_requests += 1;\n                sql_data.total_duration += query['time'];\n            });\n        });\n\n        return sql_data;\n    }\n\n    const sorted_col = ref(is_global_mode.value ? 'request_id' : 'num');\n    const sort_dir = ref('asc');\n    const sorted_queries_data = computed(() => {\n        let sorted = [];\n\n        const sql_data = getCombinedSQLData();\n        $.each(sql_data.queries, (request_id, data) => {\n            data.forEach((query) => {\n                sorted.push({\n                    request_id: request_id,\n                    num: query['num'],\n                    time: query['time'],\n                    query: query['query'],\n                    rows: query['rows'],\n                    warnings: _.escape(query['warnings']),\n                    errors: _.escape(query['errors']),\n                });\n            });\n        });\n\n        // Filter by current profile id\n        if (!is_global_mode.value) {\n            sorted = sorted.filter((query) => {\n                return query.request_id === props.current_profile.id;\n            });\n        }\n\n        // Sort by column\n        sorted.sort((a, b) => {\n            let a_val = a[sorted_col.value];\n            let b_val = b[sorted_col.value];\n            if (sorted_col.value === 'time') {\n                a_val = parseFloat(a_val);\n                b_val = parseFloat(b_val);\n            }\n            if (a_val === b_val) {\n                return 0;\n            }\n            if (sort_dir.value === 'asc') {\n                return a_val < b_val ? -1 : 1;\n            } else {\n                return a_val > b_val ? -1 : 1;\n            }\n        });\n        return sorted;\n    });\n\n    function setSortedCol(col) {\n        if (sorted_col.value === col) {\n            if (sort_dir.value === 'asc') {\n                sort_dir.value = 'desc';\n            } else {\n                sort_dir.value = 'asc';\n            }\n        } else {\n            sorted_col.value = col;\n            sort_dir.value = 'asc';\n        }\n    }\n    function copyToClipboard(e) {\n        // copy content of code block in clipboard\n        const code =  $(e.currentTarget).parent().find('code');\n        // Normalize whitespace as spaces and trim\n        const code_clean = code.text().replace(/\\s+/g, ' ').trim();\n        copyTextToClipboard(code_clean);\n\n        // change temporary the button icon to a check then after a while return to the original icon\n        const icon = $(e.currentTarget).find('i');\n        icon.removeClass('ti-clipboard-copy').addClass('ti-check');\n        setTimeout(() => {\n            icon.removeClass('ti-check').addClass('ti-clipboard-copy');\n        }, 1000);\n    }\n\n    function cleanSQLQuery(query) {\n        const newline_keywords = ['UNION', 'FROM', 'WHERE', 'INNER JOIN', 'LEFT JOIN', 'ORDER BY', 'SORT'];\n        const post_newline_keywords = ['UNION'];\n        query = query.replace(/\\n/g, ' ');\n\n        return Promise.resolve(window.GLPI.Monaco.colorizeText(query, 'sql')).then((html) => {\n            // get all 'span' elements with mtk6 class (keywords) and insert the needed line breaks\n            const newline_before_selector = newline_keywords.map((keyword) => `span.mtk6:contains(${CSS.escape(keyword)})`).join(',');\n            const post_newline_selector = post_newline_keywords.map((keyword) => `span.mtk6:contains(${CSS.escape(keyword)})`).join(',');\n            return $($.parseHTML(html)).find(newline_before_selector).before('</br>').end().find(post_newline_selector).after('</br>').end().html();\n        });\n    }\n\n    const colorized_queries = reactive(new Map());\n\n    watch(() => sorted_queries_data.value, () => {\n        sorted_queries_data.value.forEach((query) => {\n            const key = query.request_id + '-' + query.num;\n            if (!colorized_queries.has(key)) {\n                // Show uncolored query until the colorized version is ready\n                colorized_queries.set(key, query.query);\n                cleanSQLQuery(query.query).then((html) => {\n                    colorized_queries.set(key, html);\n                });\n            }\n        });\n    }, {\n        immediate: true,\n        deep: true\n    });\n</script>\n\n<template>\n    <div class=\"overflow-auto py-2 px-3\">\n        <table id=\"debug-sql-request-table\" class=\"table card-table\">\n            <thead>\n                <tr>\n                    <th v-if=\"is_global_mode\" @click=\"setSortedCol('request_id')\">Request ID</th>\n                    <th @click=\"setSortedCol('num')\">Number</th>\n                    <th @click=\"setSortedCol('query')\">Query</th>\n                    <th @click=\"setSortedCol('time')\">Time</th>\n                    <th @click=\"setSortedCol('rows')\">Rows</th>\n                    <th @click=\"setSortedCol('warnings')\">Warnings</th>\n                    <th @click=\"setSortedCol('errors')\">Errors</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr v-for=\"query in sorted_queries_data\" :key=\"query.request_id + '-' + query.num\">\n                    <td v-if=\"is_global_mode\"><button class=\"btn btn-link request-link\">{{ query.request_id }}</button></td>\n                    <td>{{ query.num }}</td>\n                    <td>\n                        <div class=\"d-flex align-items-start\" style=\"max-width: 50vw;\">\n                            <div style=\"max-width: 50vw; white-space: break-spaces;\" class=\"w-100\">\n                                <code class=\"d-block cm-s-default border-0\" v-html=\"colorized_queries.get(query.request_id + '-' + query.num)\"></code>\n                            </div>\n                            <button type=\"button\" @click=\"copyToClipboard($event)\" class=\"ms-1 copy-code btn btn-sm btn-ghost-secondary\" title=\"Copy query to clipboard\">\n                                <i class=\"ti ti-clipboard-copy\"></i>\n                            </button>\n                        </div>\n                    </td>\n                    <td>{{ query.time.toFixed(1) }}&nbsp;ms</td>\n                    <td>{{ query.rows }}</td>\n                    <td>{{ query.warnings }}</td>\n                    <td>{{ query.errors }}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</template>\n\n<style scoped>\n    #debug-sql-request-table thead tr th {\n        cursor: pointer;\n    }\n    #debug-sql-request-table tbody tr td:nth-of-type(3) {\n        max-width: 50vw;\n        white-space: break-spaces;\n    }\n    #debug-sql-request-table tbody tr td:nth-of-type(4) {\n        white-space: nowrap;\n    }\n    #debug-sql-request-table::v-deep(span.mtk1) {\n        color: var(--tblr-body-color);\n    }\n    #debug-sql-request-table code {\n        color: var(--tblr-body-color);\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=Debug-Widget-SQLRequests-vue-9bc95f6ee7cfb329f54f.js.map