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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[17],{

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

/***/ })

}]);
//# sourceMappingURL=Kanban-AddItemForm-vue-06fa671a996e2143c7f1.js.map