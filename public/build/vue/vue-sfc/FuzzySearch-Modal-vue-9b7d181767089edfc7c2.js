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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[16],{

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

/***/ 127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_731c4af8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _Modal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_vue_vue_type_template_id_731c4af8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"js/src/vue/FuzzySearch/Modal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Modal_vue_vue_type_template_id_731c4af8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Modal_vue_vue_type_template_id_731c4af8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);


/***/ }),

/***/ 129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "modal-dialog" }
const _hoisted_2 = { class: "modal-content" }
const _hoisted_3 = { class: "modal-header" }
const _hoisted_4 = { class: "modal-title" }
const _hoisted_5 = { class: "modal-body" }
const _hoisted_6 = {
  class: "alert alert-info d-flex",
  role: "alert"
}
const _hoisted_7 = ["innerHTML"]
const _hoisted_8 = ["placeholder"]
const _hoisted_9 = { class: "results list-group mt-2" }
const _hoisted_10 = ["href", "innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: "fuzzysearch",
    class: "modal",
    tabindex: "-1",
    onKeydown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($setup.hideModal, ["esc"]),
    onKeyup: $setup.navigate_results
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_4, [
            _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-arrow-big-right me-2" }, null, -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.header_message), 1 /* TEXT */)
          ]),
          _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            class: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }, null, -1 /* CACHED */))
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-alert-circle-filled fa-2x me-2" }, null, -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", { innerHTML: $setup.shortcut_message }, null, 8 /* PROPS */, _hoisted_7)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            class: "form-control",
            placeholder: $setup.placeholder,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.input_text) = $event))
          }, null, 8 /* PROPS */, _hoisted_8), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.input_text]
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.results, (result) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                key: result.index,
                class: "list-group-item"
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                  href: result.original.url,
                  innerHTML: result.string
                }, null, 8 /* PROPS */, _hoisted_10)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ])
    ])
  ], 32 /* NEED_HYDRATION */))
}

/***/ }),

/***/ 130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Modal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Modal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
 

/***/ }),

/***/ 131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Modal',
  setup(__props, { expose: __expose }) {
  __expose();

    /* global hotkeys, fuzzy */
    let shortcut = `<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd>`;
    if (navigator.userAgent.includes('Mac')) {
        shortcut = `<kbd>⌥ (option)</kbd> + <kbd>⌘ (command)</kbd> + <kbd>G</kbd>`;
    }
    const shortcut_message = __("Tip: You can call this modal with %s keys combination").replace('%s', shortcut);
    const header_message = __('Go to menu');
    const placeholder = __("Start typing to find a menu");

    const input_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const all_menus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    const results = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return fuzzy.filter(input_text.value, all_menus.value, {
            pre: '<b>',
            post: '</b>',
            extract: (el) => {
                return el.title;
            }
        });
    });
    // Allow using arrow keys to navigate results and make the li active
    const active_result = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    const navigate_results = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (active_result.value < results.value.length - 1) {
                active_result.value++;
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (active_result.value > 0) {
                active_result.value--;
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (results.value[active_result.value]) {
                window.location.href = results.value[active_result.value].original.url;
            } else if (results.value.length > 0) {
                window.location.href = results.value[0].original.url;
            }
        }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(input_text, () => {
        active_result.value = 0;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(active_result, () => {
        const results = $('#fuzzysearch .results');
        const active_li = results.find('li.active');
        const new_active_li = results.find(`li:nth-child(${active_result.value + 1})`);
        if (new_active_li) {
            if (active_li) {
                active_li.removeClass('active');
            }
            new_active_li.addClass('active');
            results.scrollTop(new_active_li.position().top - results.find('li:first-child').position().top);
        }
    });

    const trigger_fuzzy = () => {
        if (all_menus.value.length === 0) {
            $.ajax({
                url: CFG_GLPI.root_doc + '/ajax/fuzzysearch.php',
                method: 'GET',
                dataType: 'json'
            }).then((response) => {
                all_menus.value = response;
            });
        }
        const fuzzy_search = $('#fuzzysearch');
        if (!fuzzy_search.parent().is('body')) {
            fuzzy_search.detach().appendTo('body');
        }
        fuzzy_search.modal('show');
        input_text.value = '';
        $('#fuzzysearch input').focus();
    };
    const hideModal = () => {
        $('#fuzzysearch').modal('hide');
    };

    // eslint-disable-next-line vue/no-setup-props-destructure
    $(document).on('click', '.trigger-fuzzy', trigger_fuzzy);
    $(document).on('keydown', (e) => {
        if (e.key === 'g') {
            if ((e.ctrlKey || e.metaKey) && e.altKey) {
                e.preventDefault();
                trigger_fuzzy();
            }
        }
    });

const __returned__ = { get shortcut() { return shortcut }, set shortcut(v) { shortcut = v }, shortcut_message, header_message, placeholder, input_text, all_menus, results, active_result, navigate_results, trigger_fuzzy, hideModal, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ })

}]);
//# sourceMappingURL=FuzzySearch-Modal-vue-9b7d181767089edfc7c2.js.map