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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[14],{

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

/***/ 117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ThemeSwitcher_vue_vue_type_template_id_7c8c28b7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _ThemeSwitcher_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ThemeSwitcher_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ThemeSwitcher_vue_vue_type_template_id_7c8c28b7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"js/src/vue/Debug/Widget/ThemeSwitcher.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ThemeSwitcher_vue_vue_type_template_id_7c8c28b7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ThemeSwitcher_vue_vue_type_template_id_7c8c28b7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);


/***/ }),

/***/ 119:
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
const _hoisted_7 = ["id", "value"]
const _hoisted_8 = ["value", "textContent"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "alert alert-info" }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "This change only applies to the current page")
    ], -1 /* CACHED */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          class: "col-5",
          for: `theme${$setup.rand}`
        }, "Palette", 8 /* PROPS */, _hoisted_4),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
              class: "form-select",
              id: `theme${$setup.rand}`,
              value: $setup.getCurrentTheme(),
              onChange: $setup.onThemeChange
            }, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.themes, (theme) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                  key: theme['key'],
                  value: theme['key'],
                  textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(theme['name'])
                }, null, 8 /* PROPS */, _hoisted_8))
              }), 128 /* KEYED_FRAGMENT */))
            ], 40 /* PROPS, NEED_HYDRATION */, _hoisted_7)
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ThemeSwitcher_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_ThemeSwitcher_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
 

/***/ }),

/***/ 121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ThemeSwitcher',
  emits: ['refreshButton'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

    const emit = __emit;

    const themes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    const rand = Math.floor(Math.random() * 1000000000);

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        $.ajax({
            url: CFG_GLPI['root_doc'] + '/ajax/debug.php',
            data: {
                action: 'get_themes'
            }
        }).then((data) => {
            themes.value = data;
        });
    });

    function getCurrentTheme() {
        return document.documentElement.attributes['data-glpi-theme'].value;
    }

    function onThemeChange() {
        const selection = $(`#theme${rand}`).val();
        const new_theme = themes.value.find((theme) => theme['key'] === selection);
        if (new_theme !== undefined) {
            document.documentElement.attributes['data-glpi-theme'].value = new_theme['key'];
            document.documentElement.attributes['data-glpi-theme-dark'].value = new_theme['is_dark'] ? '1' : '0';

            const textareas = document.querySelectorAll('textarea');
            // Try getting TinyMCE editor for each
            for (let i = 0; i < textareas.length; i++) {
                const textarea = textareas[i];
                const editor = tinyMCE.get(textarea.id);
                if (editor !== undefined && editor !== null) {
                    const editor_root_element = $(editor.dom.doc.documentElement);
                    const page_root_element = $(document.documentElement);
                    const to_copy = ['data-glpi-theme', 'data-glpi-theme-dark'];
                    for (const attr of to_copy) {
                        if (page_root_element.attr(attr) !== undefined) {
                            editor_root_element.attr(attr, page_root_element.attr(attr));
                        }
                    }
                }
            }
            if (window.monaco?.editor !== undefined) {
                window.monaco.editor.setTheme(new_theme['is_dark'] ? 'glpi-dark' : 'glpi');
            }
        }
        emit('refreshButton');
    }

const __returned__ = { emit, themes, rand, getCurrentTheme, onThemeChange, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ })

}]);
//# sourceMappingURL=Debug-Widget-ThemeSwitcher-vue-9720ff02bf198f10f664.js.map