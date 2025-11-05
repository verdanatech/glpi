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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[2],{

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_41c46d64_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_41c46d64_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidebar_vue_vue_type_template_id_41c46d64_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-41c46d64"],['__file',"js/src/vue/CustomObject/FieldPreview/Sidebar.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_template_id_41c46d64_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_template_id_41c46d64_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);


/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = { class: "h-100 d-flex col-auto flex-column p-2 px-3 fields-sidebar" }
const _hoisted_2 = { class: "fs-2" }
const _hoisted_3 = ["placeholder"]
const _hoisted_4 = {
  key: 0,
  class: "fs-3"
}
const _hoisted_5 = { class: "fs-3 mt-3" }
const _hoisted_6 = { class: "align-items-center col-12" }
const _hoisted_7 = {
  class: "form-field row flex-grow-1 mx-0 my-1 new-custom-field cursor-pointer btn btn-sm btn-ghost-secondary w-100",
  role: "button"
}
const _hoisted_8 = { class: "col py-2 text-center" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Add more fields')), 1 /* TEXT */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      class: "form-control mb-3",
      name: "search",
      placeholder: _ctx.__('Search'),
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.search) = $event))
    }, null, 8 /* PROPS */, _hoisted_3), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.search]
    ]),
    ($setup.unused_native_fields.size > 0)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Native fields')), 1 /* TEXT */))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.getMatched($setup.unused_native_fields), ([field_key, unused_field]) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Field"], {
        key: field_key,
        field_key: field_key,
        is_active: false
      }, {
        field_label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(unused_field.label), 1 /* TEXT */)
        ]),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["field_key"]))
    }), 128 /* KEYED_FRAGMENT */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Custom fields')), 1 /* TEXT */),
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.getMatched($setup.unused_custom_fields), ([field_key, unused_field]) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Field"], {
        key: field_key,
        field_key: field_key,
        is_active: false,
        customfields_id: unused_field.customfields_id
      }, {
        field_label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(unused_field.label), 1 /* TEXT */)
        ]),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["field_key", "customfields_id"]))
    }), 128 /* KEYED_FRAGMENT */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
          _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-plus" }, null, -1 /* CACHED */)),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('New field')), 1 /* TEXT */)
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
 

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);

    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Sidebar',
  props: {
        inactive_fields: Map,
        add_edit_fn: String,
    },
  setup(__props, { expose: __expose }) {
  __expose();

    const props = __props;

    const search = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)('');

    const unused_native_fields = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        return new Map([...props.inactive_fields].filter(([key, field]) => (field.customfields_id ?? -1) < 0));
    });
    const unused_custom_fields = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        return new Map([...props.inactive_fields].filter(([key, field]) => (field.customfields_id ?? -1) >= 0));
    });

    function getMatched(fields) {
        if (search.value === '') {
            return fields;
        }
        const results = new Map();
        for (const [key, field] of fields) {
            if (field.label.toLowerCase().includes(search.value.toLowerCase())) {
                results.set(key, field);
            }
        }
        return results;
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(() => {
        $('.fields-sidebar .new-custom-field').on('click', () => {
            window[props.add_edit_fn](-1);
        });
    });


const __returned__ = { props, search, unused_native_fields, unused_custom_fields, getMatched, Field: _Field_vue__WEBPACK_IMPORTED_MODULE_0__["default"], computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed, ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref, onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_style_index_0_id_41c46d64_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);


/***/ }),

/***/ 39:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_style_index_0_id_41c46d64_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_style_index_0_id_41c46d64_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_style_index_0_id_41c46d64_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_style_index_0_id_41c46d64_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Sidebar_vue_vue_type_style_index_0_id_41c46d64_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 40:
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
.fields-sidebar {
&[data-v-41c46d64] {
        border-left: 1px solid var(--tblr-border-color);
        width: 300px;
}
.sortable-field.col-sm-6[data-v-41c46d64] {
            width: 100%;
}
.form-field.new-custom-field[data-v-41c46d64] {
            border: var(--tblr-border-width) dashed var(--tblr-border-color);
            border-radius: var(--tblr-border-radius);
}
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/CustomObject/FieldPreview/Sidebar.vue","<no source>"],"names":[],"mappings":";AAiEI;ACjEJ;QDkEQ,+CAA+C;QAC/C,YAAA;AA9DR;AA+DQ;YACI,WAAW;AACf;AACA;YACI,gEAAgE;YAChE,wCAAwC;AAC5C;AACJ","sourcesContent":["<script setup>\n    import Field from \"./Field.vue\";\n    import {computed, ref, onMounted} from \"vue\";\n\n    const props = defineProps({\n        inactive_fields: Map,\n        add_edit_fn: String,\n    });\n\n    const search = ref('');\n\n    const unused_native_fields = computed(() => {\n        return new Map([...props.inactive_fields].filter(([key, field]) => (field.customfields_id ?? -1) < 0));\n    });\n    const unused_custom_fields = computed(() => {\n        return new Map([...props.inactive_fields].filter(([key, field]) => (field.customfields_id ?? -1) >= 0));\n    });\n\n    function getMatched(fields) {\n        if (search.value === '') {\n            return fields;\n        }\n        const results = new Map();\n        for (const [key, field] of fields) {\n            if (field.label.toLowerCase().includes(search.value.toLowerCase())) {\n                results.set(key, field);\n            }\n        }\n        return results;\n    }\n\n    onMounted(() => {\n        $('.fields-sidebar .new-custom-field').on('click', () => {\n            window[props.add_edit_fn](-1);\n        });\n    });\n\n</script>\n\n<template>\n    <div class=\"h-100 d-flex col-auto flex-column p-2 px-3 fields-sidebar\">\n        <span class=\"fs-2\">{{ __('Add more fields') }}</span>\n        <input type=\"text\" class=\"form-control mb-3\" name=\"search\" :placeholder=\"__('Search')\" v-model=\"search\" />\n        <span v-if=\"unused_native_fields.size > 0\" class=\"fs-3\">{{ __('Native fields') }}</span>\n        <Field v-for=\"[field_key, unused_field] of getMatched(unused_native_fields)\" :key=\"field_key\" :field_key=\"field_key\"\n               :is_active=\"false\">\n            <template v-slot:field_label>{{ unused_field.label }}</template>\n        </Field>\n        <span class=\"fs-3 mt-3\">{{ __('Custom fields') }}</span>\n        <Field v-for=\"[field_key, unused_field] of getMatched(unused_custom_fields)\" :key=\"field_key\" :field_key=\"field_key\"\n               :is_active=\"false\" :customfields_id=\"unused_field.customfields_id\">\n            <template v-slot:field_label>{{ unused_field.label }}</template>\n        </Field>\n        <div class=\"align-items-center col-12\">\n            <div class=\"form-field row flex-grow-1 mx-0 my-1 new-custom-field cursor-pointer btn btn-sm btn-ghost-secondary w-100\" role=\"button\">\n                <div class=\"col py-2 text-center\">\n                    <i class=\"ti ti-plus\"></i>\n                    {{ __('New field') }}\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n    .fields-sidebar {\n        border-left: 1px solid var(--tblr-border-color);\n        width: 300px;\n        .sortable-field.col-sm-6 {\n            width: 100%;\n        }\n        .form-field.new-custom-field {\n            border: var(--tblr-border-width) dashed var(--tblr-border-color);\n            border-radius: var(--tblr-border-radius);\n        }\n    }\n</style>\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=CustomObject-FieldPreview-Sidebar-vue-24321290ad79db5eedc3.js.map