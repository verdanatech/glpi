/*!
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2026 Teclib' and contributors.
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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[16],{

/***/ 135
(module, __webpack_exports__, __webpack_require__) {

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
.dropdown-menu[data-v-d908577a] {
        width: 450px;
        max-width: 85vw;
}
ul li[data-v-d908577a] {
        height: 32px;
}
ul li button[data-v-d908577a] {
        min-width: 0;
        min-height: 0;
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/EntitySelector/EntitySelector.vue"],"names":[],"mappings":";AAkSI;QACI,YAAY;QACZ,eAAe;AACnB;AAEA;QACI,YAAY;AAChB;AAEA;QACI,YAAY;QACZ,aAAa;AACjB","sourcesContent":["<script setup>\n    import {computed, onMounted, ref, useTemplateRef, watch, useId, onBeforeUnmount} from \"vue\";\n    import {useEntitySelector} from \"./useEntitySelector.js\";\n\n    const props = defineProps({\n        current_entity: {\n            type: String,\n            required: true,\n        },\n        current_entity_short: {\n            type: String,\n            required: true,\n        },\n    });\n\n    const search_input = useTemplateRef('entsearchtext');\n    const entity_dropdown_toggle = useTemplateRef('entity_dropdown_toggle');\n    const header_id = useId();\n    const search_filter = ref('');\n    const keyboard_shortcut = navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? __('⌥ (option) + ⌘ (command) + E') : __('Ctrl + Alt + E');\n    const shortcut_message = __(\"Tip: You can call this modal with %s keys combination\").replace('%s', '<kbd>' + keyboard_shortcut + '</kbd>');\n    const max_items = 15;\n    const indent_size = 20;\n\n    /** The start index of the visible items in the tree */\n    const start = ref(0);\n    const fake_scrollbar = useTemplateRef('fake_scrollbar');\n    /**\n     * The total number of non-hidden entries (the entries that could be shown simply by scrolling).\n     * This is NOT the number of entries which are actually in the DOM currently.\n     */\n    let total_filtered = ref(0);\n\n    async function hotkey_listener(e) {\n        if ((e.ctrlKey || e.metaKey) && e.altKey && e.key.toLowerCase() === 'e') {\n            e.stopPropagation();\n            e.preventDefault();\n            $('.user-menu-dropdown-toggle:visible').dropdown('show');\n            await new Promise(r => setTimeout(r, 100));\n            $('.user-menu-dropdown-toggle:visible').parent().find('.entity-dropdown-toggle').dropdown('show');\n            onShowSelector();\n        }\n    }\n\n    const {\n        loading,\n        tree_data,\n        loadTreeData,\n        changeFullStructure: doChangeFullStructure,\n        changeEntity\n    } = useEntitySelector(useTemplateRef('entity_selector'));\n\n    /**\n     * Function for enumerating tree data and performing an action on each node.\n     * @param data The tree data\n     * @param level The current level in the tree\n     * @param parent The parent of the current node\n     * @param visit_node The function to call on each node\n     * @param post_visit_children The function to call after visiting the children of a node (optional)\n     */\n    function walkTree(data, level, parent, visit_node, post_visit_children) {\n        for (let i = 0; i < data.length; i++) {\n            const node = data[i];\n            if (visit_node(node, level, parent) === false) {\n                return;\n            }\n            if (node.children.length) {\n                walkTree(node.children, level + 1, node, visit_node, post_visit_children);\n            }\n            if (post_visit_children) {\n                post_visit_children(node);\n            }\n        }\n    }\n\n    /**\n     * The visible tree nodes based on the start index and the maximum number of items to display at once.\n     * Also takes into account the search filter, expanded/collapsed nodes, etc.\n     */\n    const visible_tree_data = computed(() => {\n        const visible = [];\n\n        walkTree(tree_data.value, 0, null, (node) => {\n            let hidden = node.hidden;\n            if (!hidden) {\n                for (let j = 0; j < node.parents.length; j++) {\n                    const p = node.parents[j];\n                    if (p.children.length && !p.expanded) {\n                        hidden = true;\n                        break;\n                    }\n                }\n                if (!hidden) {\n                    visible.push(node);\n                }\n            }\n        });\n\n        // Sort the visible nodes by their universal order\n        visible.sort((a, b) => a.universal_order - b.universal_order);\n        return visible;\n    });\n\n    watch(visible_tree_data, (new_value) => {\n        // These actions are performed outside the computed property for performance reasons and to keep the computed getter side-effect free\n        total_filtered.value = new_value.length;\n        updateFakeScrollbar();\n    }, {flush: 'post'});\n\n    // This computed property is separate from the visible_tree_data for performance reasons\n    // We can avoid recalculating the visible nodes every time the start index changes\n    const visible_in_dom = computed(() => {\n        if (visible_tree_data.value === undefined) {\n            return [];\n        }\n        return visible_tree_data.value.slice(start.value, start.value + max_items);\n    });\n\n    function updateFakeScrollbar() {\n        const item_height = 32;\n        fake_scrollbar.value.querySelector('.fake-scrollbar-inner').style.height = item_height * total_filtered.value + 'px';\n        fake_scrollbar.value.scrollTop = item_height * start.value;\n    }\n\n    // Update fake scrollbar when the start index changes\n    watch(start, () => {\n        updateFakeScrollbar();\n    });\n\n    /**\n     * Watching for changes in the search filter to update the hidden/expanded state of the nodes.\n     */\n    watch(search_filter, (new_value) => {\n        walkTree(tree_data.value, 0, null, (node) => {\n            const match = new_value.length === 0 || node.label.toLowerCase().includes(new_value.toLowerCase());\n            if (!node.children.length) {\n                node.hidden = !match;\n            } else {\n                node.expanded = match;\n            }\n            if (match) {\n                for (let i = 0; i < node.parents.length; i++) {\n                    node.parents[i].expanded = true;\n                }\n            }\n        }, (node) => {\n            const match = new_value.length === 0 || node.label.toLowerCase().includes(new_value.toLowerCase());\n            if (!match) {\n                const all_children_hidden = node.children.filter((child) => !child.hidden).length === 0;\n                node.hidden = all_children_hidden;\n            } else {\n                node.hidden = false;\n            }\n        });\n        // Reset start index\n        start.value = 0;\n    });\n\n    function onListScroll(e) {\n        // If there are less items than the max_items, don't scroll\n        if (total_filtered.value <= max_items) {\n            return;\n        }\n\n        const pos_delta = e.deltaY / 120;\n        let new_start = start.value + pos_delta;\n        if (new_start < 0) {\n            new_start = 0;\n        }\n        if (new_start > total_filtered.value - max_items) {\n            new_start = total_filtered.value - max_items;\n        }\n        start.value = new_start;\n    }\n\n    function onExpandToggleClick(node) {\n        node.expanded = !node.expanded;\n    }\n\n    const selected_nodes = computed(() => {\n        let selected = null;\n        walkTree(tree_data.value, 0, null, (node) => {\n            if (node.selected) {\n                selected = node;\n                return false;\n            }\n        });\n        return [selected.key, ...selected.parents.map((parent) => parent.key)];\n    });\n\n    function onShowSelector() {\n        if (loading.value || tree_data.value.length > 0) {\n            return;\n        }\n        search_input.value.focus();\n        loadTreeData();\n    }\n\n    onMounted(() => {\n        entity_dropdown_toggle.value.addEventListener('show.bs.dropdown', onShowSelector);\n        document.addEventListener('keydown', hotkey_listener);\n    });\n\n    onBeforeUnmount(() => {\n        entity_dropdown_toggle.value.removeEventListener('show.bs.dropdown', onShowSelector);\n        document.removeEventListener('keydown', hotkey_listener);\n    });\n\n    function changeFullStructure() {\n        doChangeFullStructure().then(response => {\n            if (response.ok) {\n                window.location.reload();\n            } else {\n                window.glpi_toast_error(__('An error occurred while changing the entity. Please try again.'));\n            }\n        });\n    }\n</script>\n\n<template>\n    <div ref=\"entity_selector\">\n        <a ref=\"entity_dropdown_toggle\" href=\"#\" class=\"dropdown-item dropdown-toggle entity-dropdown-toggle\" data-bs-toggle=\"dropdown\"\n           data-bs-auto-close=\"outside\" :title=\"current_entity\" :aria-label=\"__('Select the desired entity')\">\n            <i class=\"fa-fw ti ti-stack\" aria-hidden=\"true\"></i>\n            <span v-text=\"current_entity_short\"></span>\n        </a>\n        <div class=\"dropdown-menu p-3\" :aria-labelledby=\"header_id\" role=\"dialog\" data-testid=\"entity-menu-dropdown\">\n            <h3 :id=\"header_id\">{{ __('Select the desired entity') }}</h3>\n            <div class=\"alert alert-info d-block\" v-html=\"shortcut_message\"></div>\n            <div class=\"input-group\">\n                <input ref=\"entsearchtext\" type=\"text\" class=\"form-control\" name=\"entsearchtext\" :placeholder=\"__('Search entities')\"\n                       autocomplete=\"off\" v-model=\"search_filter\">\n                <button class=\"btn btn-icon btn-outline-secondary\" :title=\"__('Clear search')\" :aria-label=\"__('Clear search')\"\n                   data-bs-toggle=\"tooltip\" data-bs-placement=\"top\"\n                   @click=\"search_filter = ''\">\n                    <i class=\"ti ti-x\" aria-hidden=\"true\"></i>\n                </button>\n                <button class=\"btn btn-secondary\" :title=\"__('Select all')\" :aria-label=\"__('Select all')\"\n                        data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" @click=\"changeFullStructure\">\n                    <i class=\"ti ti-eye\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n\n            <div v-if=\"!loading\" class=\"flexbox-item-grow mt-2 position-relative\" :style=\"`height: calc(30px + ${32 * max_items}px)`\">\n                <div class=\"w-100 h-100 overflow-x-auto overflow-y-hidden\">\n                    <ul class=\"w-100 list-group rounded-0\" @wheel.prevent.stop=\"onListScroll\">\n                        <li v-for=\"node in visible_in_dom\" :key=\"node.key\" :class=\"`list-group-item p-0 border-0 cursor-pointer`\"\n                            :style=\"`${node.selected ? 'background-color: var(--tblr-primary)' : ''}`\"\n                            tabindex=\"0\" :data-node-level=\"node.level\" :data-has-children=\"node.children.length > 0\"\n                            :data-key=\"node.key\"\n                            :aria-expanded=\"node.children.length > 0 ? node.expanded : undefined\"\n                            >\n                            <div :style=\"{paddingLeft: node.level * indent_size + 'px'}\" class=\"text-nowrap d-flex align-items-center pt-1\">\n                                <button v-if=\"node.children.length\" :title=\"node.expanded ? __('Collapse') : __('Expand')\"\n                                        :aria-label=\"node.expanded ? __('Collapse') : __('Expand')\"\n                                        class=\"btn btn-ghost-secondary btn-sm btn-icon p-1 cursor-pointer collapse-item\"\n                                        @click.prevent.stop=\"onExpandToggleClick(node)\"\n                                        tabindex=\"-1\" aria-hidden=\"true\">\n                                    <i :class=\"node.expanded ? 'ti ti-chevron-down' : 'ti ti-chevron-right'\" aria-hidden=\"true\"></i>\n                                </button>\n                                <div v-else style=\"width: 25px\"></div>\n                                <div role=\"button\" :class=\"selected_nodes.includes(node.key) ? 'fw-bold' : ''\" @click.prevent.stop=\"changeEntity(node.key, false)\" class=\"d-flex align-items-center\">\n                                    <i :hidden=\"node.children.length === 0\" aria-hidden=\"true\"\n                                       class=\"ti me-1\" :class=\"node.expanded ? 'ti-folder-open' : 'ti-folder'\"></i>\n                                    {{ node.label }}\n                                </div>\n                                <button v-if=\"node.children.length\" class=\"btn btn-ghost-secondary btn-sm btn-icon p-1\"\n                                        :title=\"__('Select this entity and all its children')\"\n                                        :aria-label=\"__('Select this entity and all its children')\"\n                                        @click.prevent.stop=\"changeEntity(node.key, true)\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\"\n                                        tabindex=\"-1\" aria-hidden=\"true\">\n                                    <i class=\"ti ti-chevrons-down\" aria-hidden=\"true\"></i>\n                                </button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n                <div ref=\"fake_scrollbar\" class=\"position-absolute overflow-auto\" style=\"height:100%; width: 16px; top: 0; right: 0;\">\n                    <div class=\"fake-scrollbar-inner\" style=\"height: 100%; width: 100%;\">\n                    </div>\n                </div>\n            </div>\n            <div v-else class=\"d-flex justify-content-center align-items-center h-100 mt-4\">\n                <div class=\"spinner-border\" role=\"status\" aria-hidden=\"true\"></div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n    .dropdown-menu {\n        width: 450px;\n        max-width: 85vw;\n    }\n\n    ul li {\n        height: 32px;\n    }\n\n    ul li button {\n        min-width: 0;\n        min-height: 0;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 26
(module) {



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

/***/ },

/***/ 25
(module) {



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

/***/ },

/***/ 134
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_style_index_0_id_d908577a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(135);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_style_index_0_id_d908577a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_style_index_0_id_d908577a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_style_index_0_id_d908577a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_style_index_0_id_d908577a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 18
(module) {



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

/***/ },

/***/ 20
(module) {



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

/***/ },

/***/ 22
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ 21
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ 19
(module) {



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

/***/ },

/***/ 23
(module) {



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

/***/ },

/***/ 27
(__unused_webpack_module, exports) {


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


/***/ },

/***/ 127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EntitySelector_vue_vue_type_template_id_d908577a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _EntitySelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(130);
/* harmony import */ var _EntitySelector_vue_vue_type_style_index_0_id_d908577a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EntitySelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EntitySelector_vue_vue_type_template_id_d908577a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-d908577a"],['__file',"js/src/vue/EntitySelector/EntitySelector.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ 131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _useEntitySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);

    

    const max_items = 15;
    const indent_size = 20;

    /** The start index of the visible items in the tree */
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'EntitySelector',
  props: {
        current_entity: {
            type: String,
            required: true,
        },
        current_entity_short: {
            type: String,
            required: true,
        },
    },
  setup(__props, { expose: __expose }) {
  __expose();

    const props = __props;

    const search_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('entsearchtext');
    const entity_dropdown_toggle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('entity_dropdown_toggle');
    const header_id = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useId)();
    const search_filter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    const keyboard_shortcut = navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? __('⌥ (option) + ⌘ (command) + E') : __('Ctrl + Alt + E');
    const shortcut_message = __("Tip: You can call this modal with %s keys combination").replace('%s', '<kbd>' + keyboard_shortcut + '</kbd>');
    const start = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    const fake_scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('fake_scrollbar');
    /**
     * The total number of non-hidden entries (the entries that could be shown simply by scrolling).
     * This is NOT the number of entries which are actually in the DOM currently.
     */
    let total_filtered = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);

    async function hotkey_listener(e) {
        if ((e.ctrlKey || e.metaKey) && e.altKey && e.key.toLowerCase() === 'e') {
            e.stopPropagation();
            e.preventDefault();
            $('.user-menu-dropdown-toggle:visible').dropdown('show');
            await new Promise(r => setTimeout(r, 100));
            $('.user-menu-dropdown-toggle:visible').parent().find('.entity-dropdown-toggle').dropdown('show');
            onShowSelector();
        }
    }

    const {
        loading,
        tree_data,
        loadTreeData,
        changeFullStructure: doChangeFullStructure,
        changeEntity
    } = (0,_useEntitySelector_js__WEBPACK_IMPORTED_MODULE_1__.useEntitySelector)((0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('entity_selector'));

    /**
     * Function for enumerating tree data and performing an action on each node.
     * @param data The tree data
     * @param level The current level in the tree
     * @param parent The parent of the current node
     * @param visit_node The function to call on each node
     * @param post_visit_children The function to call after visiting the children of a node (optional)
     */
    function walkTree(data, level, parent, visit_node, post_visit_children) {
        for (let i = 0; i < data.length; i++) {
            const node = data[i];
            if (visit_node(node, level, parent) === false) {
                return;
            }
            if (node.children.length) {
                walkTree(node.children, level + 1, node, visit_node, post_visit_children);
            }
            if (post_visit_children) {
                post_visit_children(node);
            }
        }
    }

    /**
     * The visible tree nodes based on the start index and the maximum number of items to display at once.
     * Also takes into account the search filter, expanded/collapsed nodes, etc.
     */
    const visible_tree_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const visible = [];

        walkTree(tree_data.value, 0, null, (node) => {
            let hidden = node.hidden;
            if (!hidden) {
                for (let j = 0; j < node.parents.length; j++) {
                    const p = node.parents[j];
                    if (p.children.length && !p.expanded) {
                        hidden = true;
                        break;
                    }
                }
                if (!hidden) {
                    visible.push(node);
                }
            }
        });

        // Sort the visible nodes by their universal order
        visible.sort((a, b) => a.universal_order - b.universal_order);
        return visible;
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(visible_tree_data, (new_value) => {
        // These actions are performed outside the computed property for performance reasons and to keep the computed getter side-effect free
        total_filtered.value = new_value.length;
        updateFakeScrollbar();
    }, {flush: 'post'});

    // This computed property is separate from the visible_tree_data for performance reasons
    // We can avoid recalculating the visible nodes every time the start index changes
    const visible_in_dom = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (visible_tree_data.value === undefined) {
            return [];
        }
        return visible_tree_data.value.slice(start.value, start.value + max_items);
    });

    function updateFakeScrollbar() {
        const item_height = 32;
        fake_scrollbar.value.querySelector('.fake-scrollbar-inner').style.height = item_height * total_filtered.value + 'px';
        fake_scrollbar.value.scrollTop = item_height * start.value;
    }

    // Update fake scrollbar when the start index changes
    ;(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(start, () => {
        updateFakeScrollbar();
    });

    /**
     * Watching for changes in the search filter to update the hidden/expanded state of the nodes.
     */
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(search_filter, (new_value) => {
        walkTree(tree_data.value, 0, null, (node) => {
            const match = new_value.length === 0 || node.label.toLowerCase().includes(new_value.toLowerCase());
            if (!node.children.length) {
                node.hidden = !match;
            } else {
                node.expanded = match;
            }
            if (match) {
                for (let i = 0; i < node.parents.length; i++) {
                    node.parents[i].expanded = true;
                }
            }
        }, (node) => {
            const match = new_value.length === 0 || node.label.toLowerCase().includes(new_value.toLowerCase());
            if (!match) {
                const all_children_hidden = node.children.filter((child) => !child.hidden).length === 0;
                node.hidden = all_children_hidden;
            } else {
                node.hidden = false;
            }
        });
        // Reset start index
        start.value = 0;
    });

    function onListScroll(e) {
        // If there are less items than the max_items, don't scroll
        if (total_filtered.value <= max_items) {
            return;
        }

        const pos_delta = e.deltaY / 120;
        let new_start = start.value + pos_delta;
        if (new_start < 0) {
            new_start = 0;
        }
        if (new_start > total_filtered.value - max_items) {
            new_start = total_filtered.value - max_items;
        }
        start.value = new_start;
    }

    function onExpandToggleClick(node) {
        node.expanded = !node.expanded;
    }

    const selected_nodes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let selected = null;
        walkTree(tree_data.value, 0, null, (node) => {
            if (node.selected) {
                selected = node;
                return false;
            }
        });
        return [selected.key, ...selected.parents.map((parent) => parent.key)];
    });

    function onShowSelector() {
        if (loading.value || tree_data.value.length > 0) {
            return;
        }
        search_input.value.focus();
        loadTreeData();
    }

    ;(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        entity_dropdown_toggle.value.addEventListener('show.bs.dropdown', onShowSelector);
        document.addEventListener('keydown', hotkey_listener);
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        entity_dropdown_toggle.value.removeEventListener('show.bs.dropdown', onShowSelector);
        document.removeEventListener('keydown', hotkey_listener);
    });

    function changeFullStructure() {
        doChangeFullStructure().then(response => {
            if (response.ok) {
                window.location.reload();
            } else {
                window.glpi_toast_error(__('An error occurred while changing the entity. Please try again.'));
            }
        });
    }

const __returned__ = { props, search_input, entity_dropdown_toggle, header_id, search_filter, keyboard_shortcut, shortcut_message, max_items, indent_size, start, fake_scrollbar, get total_filtered() { return total_filtered }, set total_filtered(v) { total_filtered = v }, hotkey_listener, loading, tree_data, loadTreeData, doChangeFullStructure, changeEntity, walkTree, visible_tree_data, visible_in_dom, updateFakeScrollbar, onListScroll, onExpandToggleClick, selected_nodes, onShowSelector, changeFullStructure, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, useTemplateRef: vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch, useId: vue__WEBPACK_IMPORTED_MODULE_0__.useId, onBeforeUnmount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount, get useEntitySelector() { return _useEntitySelector_js__WEBPACK_IMPORTED_MODULE_1__.useEntitySelector } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ 133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_style_index_0_id_d908577a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


/***/ },

/***/ 130
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
 

/***/ },

/***/ 128
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_template_id_d908577a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_EntitySelector_vue_vue_type_template_id_d908577a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);


/***/ },

/***/ 129
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { ref: "entity_selector" }
const _hoisted_2 = ["title", "aria-label"]
const _hoisted_3 = ["textContent"]
const _hoisted_4 = ["aria-labelledby"]
const _hoisted_5 = ["id"]
const _hoisted_6 = ["innerHTML"]
const _hoisted_7 = { class: "input-group" }
const _hoisted_8 = ["placeholder"]
const _hoisted_9 = ["title", "aria-label"]
const _hoisted_10 = ["title", "aria-label"]
const _hoisted_11 = { class: "w-100 h-100 overflow-x-auto overflow-y-hidden" }
const _hoisted_12 = ["data-node-level", "data-has-children", "data-key", "aria-expanded"]
const _hoisted_13 = ["title", "aria-label", "onClick"]
const _hoisted_14 = {
  key: 1,
  style: {"width":"25px"}
}
const _hoisted_15 = ["onClick"]
const _hoisted_16 = ["hidden"]
const _hoisted_17 = ["title", "aria-label", "onClick"]
const _hoisted_18 = {
  ref: "fake_scrollbar",
  class: "position-absolute overflow-auto",
  style: {"height":"100%","width":"16px","top":"0","right":"0"}
}
const _hoisted_19 = {
  key: 1,
  class: "d-flex justify-content-center align-items-center h-100 mt-4"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      ref: "entity_dropdown_toggle",
      href: "#",
      class: "dropdown-item dropdown-toggle entity-dropdown-toggle",
      "data-bs-toggle": "dropdown",
      "data-bs-auto-close": "outside",
      title: $props.current_entity,
      "aria-label": _ctx.__('Select the desired entity')
    }, [
      _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        class: "fa-fw ti ti-stack",
        "aria-hidden": "true"
      }, null, -1 /* CACHED */)),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.current_entity_short)
      }, null, 8 /* PROPS */, _hoisted_3)
    ], 8 /* PROPS */, _hoisted_2),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "dropdown-menu p-3",
      "aria-labelledby": $setup.header_id,
      role: "dialog",
      "data-testid": "entity-menu-dropdown"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", { id: $setup.header_id }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Select the desired entity')), 9 /* TEXT, PROPS */, _hoisted_5),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "alert alert-info d-block",
        innerHTML: $setup.shortcut_message
      }, null, 8 /* PROPS */, _hoisted_6),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          ref: "entsearchtext",
          type: "text",
          class: "form-control",
          name: "entsearchtext",
          placeholder: _ctx.__('Search entities'),
          autocomplete: "off",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.search_filter) = $event))
        }, null, 8 /* PROPS */, _hoisted_8), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.search_filter]
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          class: "btn btn-icon btn-outline-secondary",
          title: _ctx.__('Clear search'),
          "aria-label": _ctx.__('Clear search'),
          "data-bs-toggle": "tooltip",
          "data-bs-placement": "top",
          onClick: _cache[1] || (_cache[1] = $event => ($setup.search_filter = ''))
        }, [...(_cache[3] || (_cache[3] = [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
            class: "ti ti-x",
            "aria-hidden": "true"
          }, null, -1 /* CACHED */)
        ]))], 8 /* PROPS */, _hoisted_9),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          class: "btn btn-secondary",
          title: _ctx.__('Select all'),
          "aria-label": _ctx.__('Select all'),
          "data-bs-toggle": "tooltip",
          "data-bs-placement": "top",
          onClick: $setup.changeFullStructure
        }, [...(_cache[4] || (_cache[4] = [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
            class: "ti ti-eye",
            "aria-hidden": "true"
          }, null, -1 /* CACHED */)
        ]))], 8 /* PROPS */, _hoisted_10)
      ]),
      (!$setup.loading)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: 0,
            class: "flexbox-item-grow mt-2 position-relative",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`height: calc(30px + ${32 * $setup.max_items}px)`)
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
                class: "w-100 list-group rounded-0",
                onWheel: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.onListScroll, ["prevent","stop"])
              }, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.visible_in_dom, (node) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                    key: node.key,
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`list-group-item p-0 border-0 cursor-pointer`),
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${node.selected ? 'background-color: var(--tblr-primary)' : ''}`),
                    tabindex: "0",
                    "data-node-level": node.level,
                    "data-has-children": node.children.length > 0,
                    "data-key": node.key,
                    "aria-expanded": node.children.length > 0 ? node.expanded : undefined
                  }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({paddingLeft: node.level * $setup.indent_size + 'px'}),
                      class: "text-nowrap d-flex align-items-center pt-1"
                    }, [
                      (node.children.length)
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                            key: 0,
                            title: node.expanded ? _ctx.__('Collapse') : _ctx.__('Expand'),
                            "aria-label": node.expanded ? _ctx.__('Collapse') : _ctx.__('Expand'),
                            class: "btn btn-ghost-secondary btn-sm btn-icon p-1 cursor-pointer collapse-item",
                            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($setup.onExpandToggleClick(node)), ["prevent","stop"]),
                            tabindex: "-1",
                            "aria-hidden": "true"
                          }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(node.expanded ? 'ti ti-chevron-down' : 'ti ti-chevron-right'),
                              "aria-hidden": "true"
                            }, null, 2 /* CLASS */)
                          ], 8 /* PROPS */, _hoisted_13))
                        : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14)),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                        role: "button",
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.selected_nodes.includes(node.key) ? 'fw-bold' : '', "d-flex align-items-center"]),
                        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($setup.changeEntity(node.key, false)), ["prevent","stop"])
                      }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                          hidden: node.children.length === 0,
                          "aria-hidden": "true",
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ti me-1", node.expanded ? 'ti-folder-open' : 'ti-folder'])
                        }, null, 10 /* CLASS, PROPS */, _hoisted_16),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(node.label), 1 /* TEXT */)
                      ], 10 /* CLASS, PROPS */, _hoisted_15),
                      (node.children.length)
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                            key: 2,
                            class: "btn btn-ghost-secondary btn-sm btn-icon p-1",
                            title: _ctx.__('Select this entity and all its children'),
                            "aria-label": _ctx.__('Select this entity and all its children'),
                            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($setup.changeEntity(node.key, true)), ["prevent","stop"]),
                            "data-bs-toggle": "tooltip",
                            "data-bs-placement": "top",
                            tabindex: "-1",
                            "aria-hidden": "true"
                          }, [...(_cache[5] || (_cache[5] = [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                              class: "ti ti-chevrons-down",
                              "aria-hidden": "true"
                            }, null, -1 /* CACHED */)
                          ]))], 8 /* PROPS */, _hoisted_17))
                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                    ], 4 /* STYLE */)
                  ], 12 /* STYLE, PROPS */, _hoisted_12))
                }), 128 /* KEYED_FRAGMENT */))
              ], 32 /* NEED_HYDRATION */)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [...(_cache[6] || (_cache[6] = [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                class: "fake-scrollbar-inner",
                style: {"height":"100%","width":"100%"}
              }, null, -1 /* CACHED */)
            ]))], 512 /* NEED_PATCH */)
          ], 4 /* STYLE */))
        : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [...(_cache[7] || (_cache[7] = [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: "spinner-border",
              role: "status",
              "aria-hidden": "true"
            }, null, -1 /* CACHED */)
          ]))]))
    ], 8 /* PROPS */, _hoisted_4)
  ], 512 /* NEED_PATCH */))
}

/***/ },

/***/ 132
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEntitySelector: () => (/* binding */ useEntitySelector)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/**
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2026 Teclib' and contributors.
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



function useEntitySelector(container_el)
{
    const loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const tree_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        container_el.value.addEventListener('shown.bs.dropdown', () => {
            container_el.value.querySelector('input[name="entsearchtext"]').focus();
        });
        // Add key listeners for navigating the tree with the keyboard
        container_el.value.addEventListener('keyup', (event) => {
            const list_item = event.target.closest('li');
            if (!list_item) {
                return;
            }
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                // Focus the next visible list item
                const next = list_item.nextElementSibling;
                if (next) {
                    next.focus();
                }
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                // Focus the previous visible list item
                const prev = list_item.previousElementSibling;
                if (prev) {
                    prev.focus();
                }
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                if (list_item.dataset.hasChildren === 'true' && list_item.ariaExpanded === 'false') {
                    list_item.querySelector('.collapse-item').click();
                    // Need to wait for DOM changes since child items are not in the DOM until the parent is expanded
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => {
                        const next = list_item.nextElementSibling;
                        if (next && parseInt(next.dataset.nodeLevel) > parseInt(list_item.dataset.nodeLevel)) {
                            next.focus();
                        }
                    });
                }
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                if (list_item.dataset.hasChildren === 'true' && list_item.ariaExpanded === 'true') {
                    list_item.querySelector('.collapse-item').click();
                } else {
                    // Focus the parent list item
                    const level = parseInt(list_item.dataset.nodeLevel);
                    if (level > 0) {
                        let prev = list_item.previousElementSibling;
                        while (prev && parseInt(prev.dataset.nodeLevel) >= level) {
                            prev = prev.previousElementSibling;
                        }
                        if (prev) {
                            prev.focus();
                        }
                    }
                }
            } else if (event.key === 'Enter') {
                const select_children = event.metaKey || event.ctrlKey; // Allow selecting an entity and all its children by holding Ctrl or Cmd
                event.preventDefault();
                event.stopPropagation();
                changeEntity(list_item.dataset.key, select_children);
            }
        });
    });

    function loadTreeData() {
        loading.value = true;
        return fetch(`${window.CFG_GLPI.root_doc}/ajax/entitytreesons.php`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }).then(response => {
            response.json().then(data => {
                let universal_order_i = 0;
                function preprocess(data, level = 0, parents = []) {
                    data.forEach((item) => {
                        item.level = level;
                        // Save array of parent objects (will be references rather than copies)
                        item.parents = parents;
                        item.universal_order = universal_order_i++;
                        if (item.children.length) {
                            preprocess(item.children, level + 1, [...parents, item]);
                        }
                        if (item.children.length && item.expanded === undefined) {
                            item.expanded = false;
                        }
                    });
                }
                preprocess(data);
                tree_data.value = data;
                loading.value = false;
            });
        });
    }

    /**
     * Change entity to "Full structure" which means access to all of the user's entities.
     */
    function changeFullStructure() {
        return fetch(`${window.CFG_GLPI.root_doc}/Session/ChangeEntity`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: new URLSearchParams({
                full_structure: 'true',
            }),
        });
    }

    function changeEntity(entity_id, is_recursive) {
        return fetch(`${window.CFG_GLPI.root_doc}/Session/ChangeEntity`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: new URLSearchParams({
                id: entity_id,
                is_recursive: is_recursive,
            }),
        }).then(response => {
            if (response.ok) {
                window.location.reload();
            } else {
                window.glpi_toast_error(__('An error occurred while changing the entity. Please try again.'));
            }
        });
    }

    return {
        loadTreeData,
        loading,
        tree_data,
        changeFullStructure,
        changeEntity
    };
}


/***/ }

}]);
//# sourceMappingURL=EntitySelector-EntitySelector-vue-e6e122fa949472d2cff5.js.map