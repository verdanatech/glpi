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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[1],{

/***/ 28:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FieldDisplay_vue_vue_type_template_id_71bc6034_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _FieldDisplay_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _FieldDisplay_vue_vue_type_style_index_0_id_71bc6034_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FieldDisplay_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FieldDisplay_vue_vue_type_template_id_71bc6034_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-71bc6034"],['__file',"js/src/vue/CustomObject/FieldPreview/FieldDisplay.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_template_id_71bc6034_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_template_id_71bc6034_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


/***/ }),

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = {
  class: "col-12 col-xxl-12 flex-column px-n3",
  ref: "component_root"
}
const _hoisted_2 = { class: "d-flex flex-row flex-wrap flex-xl-nowrap" }
const _hoisted_3 = { class: "row flex-row align-items-start flex-grow-1 d-flex" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = {
  class: "user-select-none row flex-row p-2",
  id: "sortable-fields",
  style: {"min-height":"50px"}
}
const _hoisted_6 = {
  key: 0,
  class: "required"
}
const _hoisted_7 = ["title"]
const _hoisted_8 = ["name", "value"]
const _hoisted_9 = ["name", "value"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "hidden",
      name: "_update_fields_display",
      value: "1"
    }, null, -1 /* CACHED */)),
    _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "hidden",
      name: "fields_display",
      value: ""
    }, null, -1 /* CACHED */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.active_fields, (sortable_field) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Field"], {
                key: sortable_field.key,
                field_key: sortable_field.key,
                customfields_id: sortable_field.customfields_id,
                field_options: sortable_field.field_options,
                is_active: sortable_field.is_active
              }, {
                field_label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(sortable_field.label), 1 /* TEXT */)
                ]),
                field_markers: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                  (parseInt(sortable_field.field_options.required ?? 0) === 1)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, "*"))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                  (parseInt(sortable_field.field_options.readonly ?? 0) === 1)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
                        key: 1,
                        class: "ti ti-pencil-off ms-2",
                        title: _ctx.__('Readonly')
                      }, null, 8 /* PROPS */, _hoisted_7))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                ]),
                field_options: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                  ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(sortable_field.field_options, (field_option_value, field_option_name) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: field_option_name }, [
                      (Array.isArray(field_option_value))
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(field_option_value, (value) => {
                            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                              type: "hidden",
                              name: `field_options[${sortable_field.key}][${field_option_name}][]`,
                              value: value
                            }, null, 8 /* PROPS */, _hoisted_8))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                            key: 1,
                            type: "hidden",
                            name: `field_options[${sortable_field.key}][${field_option_name}]`,
                            value: field_option_value
                          }, null, 8 /* PROPS */, _hoisted_9))
                    ], 64 /* STABLE_FRAGMENT */))
                  }), 128 /* KEYED_FRAGMENT */))
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["field_key", "customfields_id", "field_options", "is_active"]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Sidebar"], {
          inactive_fields: $setup.inactive_fields,
          add_edit_fn: $props.add_edit_fn
        }, null, 8 /* PROPS */, ["inactive_fields", "add_edit_fn"])
      ])
    ])
  ], 512 /* NEED_PATCH */))
}

/***/ }),

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
 

/***/ }),

/***/ 32:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Field_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);

    
    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'FieldDisplay',
  props: {
        items_id: Number,
        toolbar_el: String,
        all_fields: Object,
        fields_display: Array,
        add_edit_fn: String,
        can_create_fields: Boolean,
    },
  setup(__props, { expose: __expose }) {
  __expose();

    const props = __props;

    const initial_fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.all_fields);
    const fields_display = props.fields_display;
    const component_root = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('component_root');
    const sortable_fields_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return $(component_root.value).parent();
    });
    /**
     * @typedef {{key: string, label: string, field_options: {}, preview_html: string, label_classes: string, field_classes: string, wrapper_classes: string}} SortableField
     */
    /**
     * @type {Map<string, SortableField>}
     */
    const sortable_fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(new Map());

    function refreshSortables() {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            // Need to wait for the DOM changes to be applied
            window.sortable('#sortable-fields', {
                items: '.sortable-field',
                forcePlaceholderSize: false,
                acceptFrom: '.fields-sidebar, #sortable-fields',
            });
            window.sortable('.fields-sidebar', {
                items: '.sortable-field',
                forcePlaceholderSize: false,
                acceptFrom: false,
            });
        });
    }

    /**
     * Append a field to the sortable list
     * @param keys {string[]} The key of the field to append
     * @param selected_fields_data {{}} The data of the selected fields. If not provided, it will be fetched from the select2 dropdown
     */
    function appendField(keys, selected_fields_data = undefined) {
        const preview_data = [];
        keys.forEach((key) => {
            let selected_field;
            if (selected_fields_data !== undefined && selected_fields_data[key] !== undefined) {
                selected_field = selected_fields_data[key];
            } else {
                selected_field = initial_fields.value[key];
            }
            if (selected_field === undefined) {
                return;
            }
            preview_data.push({key: key, selected_field: selected_field});
        });
        preview_data.forEach(({key, selected_field}) => {
            if (!sortable_fields.has(key)) {
                const next_order_position = sortable_fields.size;
                sortable_fields.set(key, {
                    key: key,
                    label: selected_field.text ?? selected_field,
                    field_options: fields_display.find((field) => field.key === key)?.field_options ?? {},
                    customfields_id: selected_field.customfields_id ?? -1,
                    is_active: selected_field.is_active ?? true,
                    order: fields_display.find((field) => field.key === key)?.order ?? next_order_position,
                });
            }
        });
        refreshSortables();
    }

    function removeField(key) {
        // remove the field from sortable list
        sortable_fields.get(key).is_active = false;
        refreshSortables();
    }

    /**
     * Refresh the data in the all_fields object
     */
    function refreshAllFields() {
        const url = `${CFG_GLPI.root_doc}/ajax/asset/assetdefinition.php?action=get_all_fields&assetdefinitions_id=${props.items_id}`;
        $.get(url, (data) => {
            const new_fields = {};
            $.each(data['results'], (key, field) => {
                new_fields[field.id] = field;
            });
            appendField(Object.keys(new_fields), new_fields)
            refreshSortables();
        });
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        $.each(initial_fields.value, (key, field) => {
            const field_data = field;
            field_data.is_active = fields_display.find((field) => field.key === key) !== undefined;
            appendField([key], {[key]: field_data});
        });

        const sortable_container = $('#sortable-fields');

        sortable_container.on('dragenter', () => {
            const sort_el = $('.sortable-field.sortable-dragging');
            const classes_to_copy = sort_el.attr('class').split(' ')
                .filter((cls) => !['sortable-dragging'].includes(cls))
                .join(' ');
            sortable_container.find('.sortable-placeholder').attr('class', `sortable-placeholder ${classes_to_copy} px-2`);
            if (sortable_container.find('.sortable-placeholder .sortable-placeholder-inner').length === 0) {
                sortable_container.find('.sortable-placeholder').append(`<div class="sortable-placeholder-inner"></div>`);
            }
        });

        // Change is_active property of the field when done dragging
        sortable_container.on('sortupdate', (e) => {
            const origin_container = e.originalEvent.detail.origin.container;
            const destination_container = e.originalEvent.detail.destination.container;
            // Do nothing here if the origin and destination are the same
            if (origin_container === destination_container) {
                return;
            }
            const moved_field = $(e.originalEvent.detail.item);
            const moved_to_displayed = $(destination_container).attr('id') === 'sortable-fields';

            if (moved_to_displayed) {
                const sortable_field = sortable_fields.get(moved_field.attr('data-key'));
                sortable_field.is_active = true;
                // Recalculate the order of the fields to match the index in the displayed list
                sortable_fields.forEach((field) => {
                    field.order = $(component_root.value).find('.sortable-field').index($(`.sortable-field[data-key="${CSS.escape(field.key)}"]`));
                });
            } else {
                removeField(moved_field.attr('data-key'));
            }
        });

        $(component_root.value).on('click', '.edit-field', (e) => {
            const field_el = $(e.target).closest('.sortable-field');
            const field_id = field_el.attr('data-customfield-id');
            const field_key = field_el.attr('data-key');
            if (field_id === undefined || field_id === '-1') {
                const url_params = new URLSearchParams({
                    action: 'get_core_field_editor',
                    assetdefinitions_id: props.items_id,
                    key: field_el.attr('data-key'),
                });
                const sortable_field = sortable_fields.get(field_key);
                for (const [name, value] of Object.entries(sortable_field.field_options)) {
                    if (Array.isArray(value)) {
                        value.forEach((item) => {
                            url_params.append(`field_options[${name}][]`, item);
                        })
                    } else {
                        url_params.append(`field_options[${name}]`, value);
                    }
                }
                const url = `${CFG_GLPI.root_doc}/ajax/asset/assetdefinition.php?${url_params}`;
                window.glpi_ajax_dialog({
                    id: 'core_field_options_editor',
                    modalclass: 'modal-xl',
                    appendTo: `#${CSS.escape($(sortable_fields_container.value).attr('id'))}`,
                    title: _.escape(field_el.text()),
                    url: url,
                    buttons: [
                        {
                            id: 'cancel_core_field_options',
                            label: __('Cancel'),
                            class: 'btn-ghost-secondary',
                        },
                        {
                            id: 'save_core_field_options',
                            label: _x('button', 'Save'),
                            class: 'btn-primary',
                        },
                    ]
                });
            } else {
                window[props.add_edit_fn](field_id);
                $('#customfield_form_container_modal .modal-title').text(field_el.text());
            }
        }).on('click', '.hide-field', (e) => {
            const field_key = $(e.target).closest('.sortable-field').attr('data-key');
            removeField(field_key);
        }).on('click', '.purge-field', (e) => {
            // Only custom fields can be purged
            const field_key = $(e.target).closest('.sortable-field').attr('data-key');
            const custom_fields_id = $(e.target).closest('.sortable-field').attr('data-customfield-id');

            // Submit a form via AJAX to delete the field
            $.ajax({
                url: `${CFG_GLPI.root_doc}/ajax/asset/customfield.php`,
                type: 'POST',
                data: {
                    customfielddefinitions_id: custom_fields_id,
                    action: 'purge_field'
                },
                success: () => {
                    sortable_fields.delete(field_key);
                    refreshSortables();
                },
                complete: () => {
                    displayAjaxMessageAfterRedirect();
                }
            });
        });

        sortable_fields_container.value.on('click', '#save_core_field_options', () => {
            const key_field = $('#core_field_options_editor form input[name="key"]');
            const field_key = key_field.val();
            key_field.remove();
            const field_options = $('#core_field_options_editor form').serializeArray();
            const sortable_field = sortable_fields.get(field_key);

            sortable_field.field_options = {};
            field_options.forEach((option) => {
                let name = option.name.replace('field_options[', '');
                if (name.endsWith('[]')) { // We are in array, we store the key as the value
                    name = name.slice(0, -3);
                    if (!Array.isArray(sortable_field.field_options[name])) {
                        sortable_field.field_options[name] = [];
                    }
                    sortable_field.field_options[name].push(option.value);
                } else { // OG code, remove the ]
                    name = name.slice(0, -1);
                    sortable_field.field_options[name] = option.value;
                }
            });
            // Reload preview
            appendField([field_key]);

            $('#core_field_options_editor').modal('hide');
        }).on('click', '#cancel_core_field_options', () => {
            $('#core_field_options_editor').modal('hide');
        });

        const create_edit_field_modal = $('#customfield_form_container_modal');
        create_edit_field_modal.on('glpi:submit:success', 'form', (e, data) => {
            const btn_submit = data.submitter;
            const form_data = new FormData(e.target);
            const field_key = `custom_${form_data.get('system_name')}`;

            refreshAllFields();
            if (btn_submit.attr('name') === 'add' || btn_submit.attr('name') === 'update') {
                appendField([field_key], {[field_key]: {
                    text: form_data.get('label'),
                }});
                const sortable_field = sortable_fields.get(field_key);

                sortable_field.field_options = {};
                form_data.entries().forEach(([name, value]) => {
                    if (name.startsWith('field_options[')) {
                        const is_array = name.endsWith('[]');
                        const option_name = name.replace('field_options[', '').replace(/\[\]/, '');
                        if (is_array) {
                            sortable_field.field_options[option_name] = sortable_field.field_options[option_name] ?? [];
                            if (!Array.isArray(sortable_field.field_options[option_name])) {
                                sortable_field.field_options[option_name] = [sortable_field.field_options[option_name]];
                            }
                            sortable_field.field_options[option_name].push(value);
                        } else {
                            sortable_field.field_options[option_name] = value;
                        }
                    }
                });
            } else if (btn_submit.attr('name') === 'purge') {
                removeField(field_key);
            }
        });
    });

    const active_fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const ordered_active_fields = [];
        [...sortable_fields].filter(([key, field]) => field.is_active)
            .sort((a, b) => a[1].order - b[1].order)
            .forEach(([key, field]) => {
                ordered_active_fields.push({...field, key: key});
            });
        return ordered_active_fields;
    });

    const inactive_fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return new Map([...sortable_fields].filter(([key, field]) => !field.is_active));
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(active_fields, () => {
        // If only one field remains, disable the remove button
        $(component_root.value).find('.hide-field')
            .prop('disabled', sortable_fields.size === 1)
            .prop('title', sortable_fields.size === 1 ? __('Cannot remove the last field') : __('Hide'));

    }, {deep: true});

const __returned__ = { props, initial_fields, fields_display, component_root, sortable_fields_container, sortable_fields, refreshSortables, appendField, removeField, refreshAllFields, active_fields, inactive_fields, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch, useTemplateRef: vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef, nextTick: vue__WEBPACK_IMPORTED_MODULE_0__.nextTick, Field: _Field_vue__WEBPACK_IMPORTED_MODULE_1__["default"], Sidebar: _Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_style_index_0_id_71bc6034_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);


/***/ }),

/***/ 42:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_style_index_0_id_71bc6034_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_style_index_0_id_71bc6034_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_style_index_0_id_71bc6034_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_style_index_0_id_71bc6034_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_FieldDisplay_vue_vue_type_style_index_0_id_71bc6034_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 43:
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
[data-v-71bc6034] .sortable-field .btn.hide-field:disabled {
        pointer-events: auto;
}
[data-v-71bc6034] .sortable-placeholder {
        background: unset;
        border: unset;
        height: 38px;
.sortable-placeholder-inner {
            border: 2px dashed #dad55e;
            background: #fff99038;
            height: 100%;
}
}
`, "",{"version":3,"sources":["webpack://./js/src/vue/CustomObject/FieldPreview/FieldDisplay.vue"],"names":[],"mappings":";AAwVI;QACI,oBAAoB;AACxB;AACA;QACI,iBAAiB;QACjB,aAAa;QACb,YAAY;AACZ;YACI,0BAA0B;YAC1B,qBAAqB;YACrB,YAAY;AAChB;AACJ","sourcesContent":["<script setup>\n    import {onMounted, computed, ref, reactive, watch, useTemplateRef, nextTick} from 'vue';\n    import Field from \"./Field.vue\";\n    import Sidebar from \"./Sidebar.vue\";\n\n    const props = defineProps({\n        items_id: Number,\n        toolbar_el: String,\n        all_fields: Object,\n        fields_display: Array,\n        add_edit_fn: String,\n        can_create_fields: Boolean,\n    });\n\n    const initial_fields = ref(props.all_fields);\n    const fields_display = props.fields_display;\n    const component_root = useTemplateRef('component_root');\n    const sortable_fields_container = computed(() => {\n        return $(component_root.value).parent();\n    });\n    /**\n     * @typedef {{key: string, label: string, field_options: {}, preview_html: string, label_classes: string, field_classes: string, wrapper_classes: string}} SortableField\n     */\n    /**\n     * @type {Map<string, SortableField>}\n     */\n    const sortable_fields = reactive(new Map());\n\n    function refreshSortables() {\n        nextTick(() => {\n            // Need to wait for the DOM changes to be applied\n            window.sortable('#sortable-fields', {\n                items: '.sortable-field',\n                forcePlaceholderSize: false,\n                acceptFrom: '.fields-sidebar, #sortable-fields',\n            });\n            window.sortable('.fields-sidebar', {\n                items: '.sortable-field',\n                forcePlaceholderSize: false,\n                acceptFrom: false,\n            });\n        });\n    }\n\n    /**\n     * Append a field to the sortable list\n     * @param keys {string[]} The key of the field to append\n     * @param selected_fields_data {{}} The data of the selected fields. If not provided, it will be fetched from the select2 dropdown\n     */\n    function appendField(keys, selected_fields_data = undefined) {\n        const preview_data = [];\n        keys.forEach((key) => {\n            let selected_field;\n            if (selected_fields_data !== undefined && selected_fields_data[key] !== undefined) {\n                selected_field = selected_fields_data[key];\n            } else {\n                selected_field = initial_fields.value[key];\n            }\n            if (selected_field === undefined) {\n                return;\n            }\n            preview_data.push({key: key, selected_field: selected_field});\n        });\n        preview_data.forEach(({key, selected_field}) => {\n            if (!sortable_fields.has(key)) {\n                const next_order_position = sortable_fields.size;\n                sortable_fields.set(key, {\n                    key: key,\n                    label: selected_field.text ?? selected_field,\n                    field_options: fields_display.find((field) => field.key === key)?.field_options ?? {},\n                    customfields_id: selected_field.customfields_id ?? -1,\n                    is_active: selected_field.is_active ?? true,\n                    order: fields_display.find((field) => field.key === key)?.order ?? next_order_position,\n                });\n            }\n        });\n        refreshSortables();\n    }\n\n    function removeField(key) {\n        // remove the field from sortable list\n        sortable_fields.get(key).is_active = false;\n        refreshSortables();\n    }\n\n    /**\n     * Refresh the data in the all_fields object\n     */\n    function refreshAllFields() {\n        const url = `${CFG_GLPI.root_doc}/ajax/asset/assetdefinition.php?action=get_all_fields&assetdefinitions_id=${props.items_id}`;\n        $.get(url, (data) => {\n            const new_fields = {};\n            $.each(data['results'], (key, field) => {\n                new_fields[field.id] = field;\n            });\n            appendField(Object.keys(new_fields), new_fields)\n            refreshSortables();\n        });\n    }\n\n    onMounted(() => {\n        $.each(initial_fields.value, (key, field) => {\n            const field_data = field;\n            field_data.is_active = fields_display.find((field) => field.key === key) !== undefined;\n            appendField([key], {[key]: field_data});\n        });\n\n        const sortable_container = $('#sortable-fields');\n\n        sortable_container.on('dragenter', () => {\n            const sort_el = $('.sortable-field.sortable-dragging');\n            const classes_to_copy = sort_el.attr('class').split(' ')\n                .filter((cls) => !['sortable-dragging'].includes(cls))\n                .join(' ');\n            sortable_container.find('.sortable-placeholder').attr('class', `sortable-placeholder ${classes_to_copy} px-2`);\n            if (sortable_container.find('.sortable-placeholder .sortable-placeholder-inner').length === 0) {\n                sortable_container.find('.sortable-placeholder').append(`<div class=\"sortable-placeholder-inner\"></div>`);\n            }\n        });\n\n        // Change is_active property of the field when done dragging\n        sortable_container.on('sortupdate', (e) => {\n            const origin_container = e.originalEvent.detail.origin.container;\n            const destination_container = e.originalEvent.detail.destination.container;\n            // Do nothing here if the origin and destination are the same\n            if (origin_container === destination_container) {\n                return;\n            }\n            const moved_field = $(e.originalEvent.detail.item);\n            const moved_to_displayed = $(destination_container).attr('id') === 'sortable-fields';\n\n            if (moved_to_displayed) {\n                const sortable_field = sortable_fields.get(moved_field.attr('data-key'));\n                sortable_field.is_active = true;\n                // Recalculate the order of the fields to match the index in the displayed list\n                sortable_fields.forEach((field) => {\n                    field.order = $(component_root.value).find('.sortable-field').index($(`.sortable-field[data-key=\"${CSS.escape(field.key)}\"]`));\n                });\n            } else {\n                removeField(moved_field.attr('data-key'));\n            }\n        });\n\n        $(component_root.value).on('click', '.edit-field', (e) => {\n            const field_el = $(e.target).closest('.sortable-field');\n            const field_id = field_el.attr('data-customfield-id');\n            const field_key = field_el.attr('data-key');\n            if (field_id === undefined || field_id === '-1') {\n                const url_params = new URLSearchParams({\n                    action: 'get_core_field_editor',\n                    assetdefinitions_id: props.items_id,\n                    key: field_el.attr('data-key'),\n                });\n                const sortable_field = sortable_fields.get(field_key);\n                for (const [name, value] of Object.entries(sortable_field.field_options)) {\n                    if (Array.isArray(value)) {\n                        value.forEach((item) => {\n                            url_params.append(`field_options[${name}][]`, item);\n                        })\n                    } else {\n                        url_params.append(`field_options[${name}]`, value);\n                    }\n                }\n                const url = `${CFG_GLPI.root_doc}/ajax/asset/assetdefinition.php?${url_params}`;\n                window.glpi_ajax_dialog({\n                    id: 'core_field_options_editor',\n                    modalclass: 'modal-xl',\n                    appendTo: `#${CSS.escape($(sortable_fields_container.value).attr('id'))}`,\n                    title: _.escape(field_el.text()),\n                    url: url,\n                    buttons: [\n                        {\n                            id: 'cancel_core_field_options',\n                            label: __('Cancel'),\n                            class: 'btn-ghost-secondary',\n                        },\n                        {\n                            id: 'save_core_field_options',\n                            label: _x('button', 'Save'),\n                            class: 'btn-primary',\n                        },\n                    ]\n                });\n            } else {\n                window[props.add_edit_fn](field_id);\n                $('#customfield_form_container_modal .modal-title').text(field_el.text());\n            }\n        }).on('click', '.hide-field', (e) => {\n            const field_key = $(e.target).closest('.sortable-field').attr('data-key');\n            removeField(field_key);\n        }).on('click', '.purge-field', (e) => {\n            // Only custom fields can be purged\n            const field_key = $(e.target).closest('.sortable-field').attr('data-key');\n            const custom_fields_id = $(e.target).closest('.sortable-field').attr('data-customfield-id');\n\n            // Submit a form via AJAX to delete the field\n            $.ajax({\n                url: `${CFG_GLPI.root_doc}/ajax/asset/customfield.php`,\n                type: 'POST',\n                data: {\n                    customfielddefinitions_id: custom_fields_id,\n                    action: 'purge_field'\n                },\n                success: () => {\n                    sortable_fields.delete(field_key);\n                    refreshSortables();\n                },\n                complete: () => {\n                    displayAjaxMessageAfterRedirect();\n                }\n            });\n        });\n\n        sortable_fields_container.value.on('click', '#save_core_field_options', () => {\n            const key_field = $('#core_field_options_editor form input[name=\"key\"]');\n            const field_key = key_field.val();\n            key_field.remove();\n            const field_options = $('#core_field_options_editor form').serializeArray();\n            const sortable_field = sortable_fields.get(field_key);\n\n            sortable_field.field_options = {};\n            field_options.forEach((option) => {\n                let name = option.name.replace('field_options[', '');\n                if (name.endsWith('[]')) { // We are in array, we store the key as the value\n                    name = name.slice(0, -3);\n                    if (!Array.isArray(sortable_field.field_options[name])) {\n                        sortable_field.field_options[name] = [];\n                    }\n                    sortable_field.field_options[name].push(option.value);\n                } else { // OG code, remove the ]\n                    name = name.slice(0, -1);\n                    sortable_field.field_options[name] = option.value;\n                }\n            });\n            // Reload preview\n            appendField([field_key]);\n\n            $('#core_field_options_editor').modal('hide');\n        }).on('click', '#cancel_core_field_options', () => {\n            $('#core_field_options_editor').modal('hide');\n        });\n\n        const create_edit_field_modal = $('#customfield_form_container_modal');\n        create_edit_field_modal.on('glpi:submit:success', 'form', (e, data) => {\n            const btn_submit = data.submitter;\n            const form_data = new FormData(e.target);\n            const field_key = `custom_${form_data.get('system_name')}`;\n\n            refreshAllFields();\n            if (btn_submit.attr('name') === 'add' || btn_submit.attr('name') === 'update') {\n                appendField([field_key], {[field_key]: {\n                    text: form_data.get('label'),\n                }});\n                const sortable_field = sortable_fields.get(field_key);\n\n                sortable_field.field_options = {};\n                form_data.entries().forEach(([name, value]) => {\n                    if (name.startsWith('field_options[')) {\n                        const is_array = name.endsWith('[]');\n                        const option_name = name.replace('field_options[', '').replace(/\\[\\]/, '');\n                        if (is_array) {\n                            sortable_field.field_options[option_name] = sortable_field.field_options[option_name] ?? [];\n                            if (!Array.isArray(sortable_field.field_options[option_name])) {\n                                sortable_field.field_options[option_name] = [sortable_field.field_options[option_name]];\n                            }\n                            sortable_field.field_options[option_name].push(value);\n                        } else {\n                            sortable_field.field_options[option_name] = value;\n                        }\n                    }\n                });\n            } else if (btn_submit.attr('name') === 'purge') {\n                removeField(field_key);\n            }\n        });\n    });\n\n    const active_fields = computed(() => {\n        const ordered_active_fields = [];\n        [...sortable_fields].filter(([key, field]) => field.is_active)\n            .sort((a, b) => a[1].order - b[1].order)\n            .forEach(([key, field]) => {\n                ordered_active_fields.push({...field, key: key});\n            });\n        return ordered_active_fields;\n    });\n\n    const inactive_fields = computed(() => {\n        return new Map([...sortable_fields].filter(([key, field]) => !field.is_active));\n    });\n\n    watch(active_fields, () => {\n        // If only one field remains, disable the remove button\n        $(component_root.value).find('.hide-field')\n            .prop('disabled', sortable_fields.size === 1)\n            .prop('title', sortable_fields.size === 1 ? __('Cannot remove the last field') : __('Hide'));\n\n    }, {deep: true});\n</script>\n\n<template>\n    <div class=\"col-12 col-xxl-12 flex-column px-n3\" ref=\"component_root\">\n        <input type=\"hidden\" name=\"_update_fields_display\" value=\"1\" />\n        <input type=\"hidden\" name=\"fields_display\" value=\"\" />\n\n        <div class=\"d-flex flex-row flex-wrap flex-xl-nowrap\">\n            <div class=\"row flex-row align-items-start flex-grow-1 d-flex\">\n                <div class=\"col\">\n                    <div class=\"user-select-none row flex-row p-2\" id=\"sortable-fields\" style=\"min-height: 50px\">\n                        <Field v-for=\"sortable_field of active_fields\" :key=\"sortable_field.key\"\n                               :field_key=\"sortable_field.key\" :customfields_id=\"sortable_field.customfields_id\" :field_options=\"sortable_field.field_options\"\n                               :is_active=\"sortable_field.is_active\">\n                            <template v-slot:field_label>{{ sortable_field.label }}</template>\n                            <template v-slot:field_markers>\n                                <span v-if=\"parseInt(sortable_field.field_options.required ?? 0) === 1\" class=\"required\">*</span>\n                                <i v-if=\"parseInt(sortable_field.field_options.readonly ?? 0) === 1\" class=\"ti ti-pencil-off ms-2\" :title=\"__('Readonly')\"></i>\n                            </template>\n                            <template v-slot:field_options>\n                                <template v-for=\"(field_option_value, field_option_name) in sortable_field.field_options\" :key=\"field_option_name\">\n                                    <input\n                                        v-if=\"Array.isArray(field_option_value)\"\n                                        v-for=\"value in field_option_value\"\n                                        type=\"hidden\"\n                                        :name=\"`field_options[${sortable_field.key}][${field_option_name}][]`\"\n                                        :value=\"value\"\n                                    />\n                                    <input\n                                        v-else\n                                        type=\"hidden\"\n                                        :name=\"`field_options[${sortable_field.key}][${field_option_name}]`\"\n                                        :value=\"field_option_value\"\n                                    />\n                                </template>\n                            </template>\n                        </Field>\n                    </div>\n                </div>\n                <Sidebar :inactive_fields=\"inactive_fields\" :add_edit_fn=\"add_edit_fn\"></Sidebar>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n    :deep(.sortable-field .btn.hide-field:disabled) {\n        pointer-events: auto;\n    }\n    :deep(.sortable-placeholder) {\n        background: unset;\n        border: unset;\n        height: 38px;\n        .sortable-placeholder-inner {\n            border: 2px dashed #dad55e;\n            background: #fff99038;\n            height: 100%;\n        }\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=CustomObject-FieldPreview-FieldDisplay-vue-1460bdcf3bec5866b8b2.js.map