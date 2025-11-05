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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[20],{

/***/ 152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Kanban_vue_vue_type_template_id_a9b680ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _Kanban_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(155);
/* harmony import */ var _Kanban_vue_vue_type_style_index_0_id_a9b680ba_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(161);
/* harmony import */ var _Kanban_vue_vue_type_style_index_1_id_a9b680ba_lang_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(164);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);




;



const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_Kanban_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Kanban_vue_vue_type_template_id_a9b680ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a9b680ba"],['__file',"js/src/vue/Kanban/Kanban.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_template_id_a9b680ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_template_id_a9b680ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);


/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = ["id"]
const _hoisted_2 = { class: "kanban-container" }
const _hoisted_3 = {
  key: 0,
  class: "kanban-toolbar flex-column flex-md-row btn-group shadow-none"
}
const _hoisted_4 = ["value", "selected"]
const _hoisted_5 = ["placeholder"]
const _hoisted_6 = { class: "dropdown" }
const _hoisted_7 = {
  class: "dropdown-menu kanban-form kanban-add-column-form p-2",
  role: "menu"
}
const _hoisted_8 = { class: "kanban-item-header" }
const _hoisted_9 = ["textContent"]
const _hoisted_10 = { class: "kanban-item-content" }
const _hoisted_11 = ["placeholder"]
const _hoisted_12 = { class: "kanban-columns-list ps-1" }
const _hoisted_13 = ["value"]
const _hoisted_14 = ["value"]
const _hoisted_15 = { class: "dropdown" }
const _hoisted_16 = ["textContent"]
const _hoisted_17 = {
  class: "dropdown-menu kanban-form kanban-create-column-form p-2",
  role: "menu"
}
const _hoisted_18 = { class: "kanban-item-header" }
const _hoisted_19 = ["textContent"]
const _hoisted_20 = { class: "kanban-item-content" }
const _hoisted_21 = ["name", "value"]
const _hoisted_22 = ["name", "value"]
const _hoisted_23 = ["textContent"]
const _hoisted_24 = { class: "dropdown" }
const _hoisted_25 = {
  key: 0,
  type: "button",
  class: "btn btn-outline-secondary btn-icon ms-1 kanban-extra-toolbar-options",
  "data-bs-toggle": "dropdown",
  "data-bs-auto-close": "outside"
}
const _hoisted_26 = {
  class: "kanban-dropdown dropdown-menu kanban-extra-toolbar-options-menu",
  role: "menu"
}
const _hoisted_27 = { class: "kanban-columns" }
const _hoisted_28 = { class: "w-100" }
const _hoisted_29 = { class: "alert alert-info" }
const _hoisted_30 = {
  id: "kanban-item-overflow-dropdown",
  class: "kanban-dropdown dropdown-menu d-none"
}
const _hoisted_31 = { class: "kanban-item-goto dropdown-item" }
const _hoisted_32 = {
  key: 0,
  class: "kanban-item-restore dropdown-item d-none"
}
const _hoisted_33 = {
  key: 1,
  class: "kanban-item-remove dropdown-item d-none"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: $props.element_id,
    class: "kanban"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      ($setup.show_toolbar)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
              name: "kanban-board-switcher",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.kanban_switcher) = $event))
            }, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.all_kanbans, (k_name, k_id) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                  value: k_id,
                  selected: k_id === $props.item.items_id,
                  key: k_id
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(k_name), 9 /* TEXT, PROPS */, _hoisted_4))
              }), 128 /* KEYED_FRAGMENT */))
            ], 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.kanban_switcher]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              name: "filter",
              class: "form-control ms-1",
              type: "text",
              placeholder: _ctx.__('Search or filter results'),
              autocomplete: "off"
            }, null, 8 /* PROPS */, _hoisted_5),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              ($setup.rights.canModifyView())
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                    key: 0,
                    type: "button",
                    class: "kanban-add-column btn btn-outline-secondary ms-1",
                    "data-bs-toggle": "dropdown",
                    "data-bs-auto-close": "outside",
                    onClick: _cache[1] || (_cache[1] = $event => ($setup.updateAllColumnsList()))
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Add column')), 1 /* TEXT */))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                    class: "kanban-item-title",
                    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Add a column from existing status'))
                  }, null, 8 /* PROPS */, _hoisted_9)
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    type: "text",
                    class: "form-control",
                    name: "column-name-filter",
                    placeholder:  _ctx.__('Search'),
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.column_filter) = $event))
                  }, null, 8 /* PROPS */, _hoisted_11), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.column_filter]
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_12, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filtered_columns, (column) => {
                      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                        key: column.id
                      }, [
                        ($setup.isColumnVisible(column.id))
                          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                              key: 0,
                              type: "checkbox",
                              class: "form-check-input",
                              value: column.id,
                              checked: "checked",
                              onChange: $setup.updateColumnVisibility
                            }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_13))
                          : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                              key: 1,
                              type: "checkbox",
                              class: "form-check-input",
                              value: column.id,
                              onChange: $setup.updateColumnVisibility
                            }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_14)),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`kanban-color-preview ${column.color_class ? column.color_class : ''} ms-1`),
                          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${column.color_class ? '' : ('background-color: ' + column.header_color)}`)
                        }, null, 6 /* CLASS, STYLE */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column.name), 1 /* TEXT */)
                      ]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ])
                ]),
                ($setup.rights.canCreateColumn())
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                      _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Or add a new status')) + " ", 1 /* TEXT */),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                          type: "button",
                          class: "btn btn-primary kanban-create-column d-block",
                          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Create status')),
                          "data-bs-toggle": "dropdown",
                          "data-bs-auto-close": "outside"
                        }, null, 8 /* PROPS */, _hoisted_16),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                              class: "kanban-item-title",
                              textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Create status'))
                            }, null, 8 /* PROPS */, _hoisted_19)
                          ]),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [
                            _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                              type: "text",
                              name: "name",
                              class: "form-control"
                            }, null, -1 /* CACHED */)),
                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.column_field.extra_fields, (field, field_name) => {
                              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
                                (field.type === undefined || field.type === 'text')
                                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                                      key: `${field_name}_${field.type}`,
                                      type: "text",
                                      name: field_name,
                                      class: "form-control",
                                      value: field.value
                                    }, null, 8 /* PROPS */, _hoisted_21))
                                  : (field.type === 'color')
                                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                                        key: `${field_name}_${field.type}`,
                                        type: "color",
                                        name: field_name,
                                        class: "form-control",
                                        value: field.value
                                      }, null, 8 /* PROPS */, _hoisted_22))
                                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                              ], 64 /* STABLE_FRAGMENT */))
                            }), 256 /* UNKEYED_FRAGMENT */))
                          ]),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                            type: "button",
                            class: "btn btn-primary",
                            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Create status')),
                            onClick: _cache[3] || (_cache[3] = $event => ($setup.createColumn($event)))
                          }, null, 8 /* PROPS */, _hoisted_23)
                        ])
                      ])
                    ], 64 /* STABLE_FRAGMENT */))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [
              ($setup.rights.canModifyView())
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_25, [...(_cache[14] || (_cache[14] = [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-dots-vertical" }, null, -1 /* CACHED */)
                  ]))]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_26, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                  class: "dropdown-item cursor-pointer",
                  onClick: _cache[4] || (_cache[4] = $event => ($setup.clearState(true)))
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                    _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-trash" }, null, -1 /* CACHED */)),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Reset view')), 1 /* TEXT */)
                  ])
                ]),
                ($setup.debug_mode)
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                        class: "dropdown-item cursor-pointer",
                        onClick: _cache[5] || (_cache[5] = $event => ($setup.loadState()))
                      }, [...(_cache[16] || (_cache[16] = [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-cloud-download" }),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Load state (Debug)")
                        ], -1 /* CACHED */)
                      ]))]),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                        class: "dropdown-item cursor-pointer",
                        onClick: _cache[6] || (_cache[6] = $event => ($setup.saveState(true, true)))
                      }, [...(_cache[17] || (_cache[17] = [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-cloud-upload" }),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save state (Debug)")
                        ], -1 /* CACHED */)
                      ]))]),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                        class: "dropdown-item cursor-pointer",
                        onClick: _cache[7] || (_cache[7] = $event => ($setup.refresh(false)))
                      }, [...(_cache[18] || (_cache[18] = [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-refresh" }),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Refresh (Debug)")
                        ], -1 /* CACHED */)
                      ]))])
                    ], 64 /* STABLE_FRAGMENT */))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
              ])
            ])
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.ordered_columns, (column) => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Column"], {
            key: column.id,
            column_id: parseInt(column.id),
            column_data: column,
            rights: $setup.rights,
            column_field_id: $props.column_field.id,
            supported_itemtypes: $props.supported_itemtypes,
            onVnodeMounted: _cache[8] || (_cache[8] = $event => ($setup.refreshSortables())),
            "onKanban:column_fold": _cache[9] || (_cache[9] = $event => ($setup.updateFoldColumn($event))),
            team_badge_provider: $setup.team_badge_provider,
            "onKanban:card_delete": $setup.deleteCard,
            "onKanban:card_restore": $setup.restoreCard,
            "onKanban:refresh": $setup.refresh,
            "onKanban:column_hide": $event => ($setup.hideColumn(column.id)),
            "onKanban:card_show_details": _cache[10] || (_cache[10] = $event => ($setup.openCardDetailsPanel($event)))
          }, null, 8 /* PROPS */, ["column_id", "column_data", "rights", "column_field_id", "supported_itemtypes", "team_badge_provider", "onKanban:column_hide"])), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.ordered_columns.length > 0]
          ])
        }), 128 /* KEYED_FRAGMENT */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('There are no columns added to this Kanban yet')), 1 /* TEXT */)
        ], 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.ordered_columns.length === 0]
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_30, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_31, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
            href: "#",
            onClick: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($setup.toggleSubDropdown($event)), ["prevent","stop"]))
          }, [
            _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-share-3" }, null, -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Go to')), 1 /* TEXT */)
          ])
        ]),
        ($setup.rights.canDeleteItem())
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_32, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-trash-off" }, null, -1 /* CACHED */)),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Restore')), 1 /* TEXT */)
              ])
            ]))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.rights.canDeleteItem())
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_33, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-trash" }, null, -1 /* CACHED */)),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Delete')), 1 /* TEXT */)
              ])
            ]))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ])
    ])
  ], 8 /* PROPS */, _hoisted_1))
}

/***/ }),

/***/ 155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
 

/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Rights_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);
/* harmony import */ var _Column_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var _SearchInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(157);
/* harmony import */ var _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(143);


    
    
    
    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Kanban',
  props: {
        /** @type {Rights} */
        rights: {
            type: Object,
            required: true,
        },
        element_id: {
            type: String,
            default: 'kanban'
        },
        /** @type {Object.<string, {name: string, allow_create: boolean}>} */
        supported_itemtypes: {
            type: Object,
            required: true
        },
        max_team_images: {
            type: Number,
            default: 3
        },
        column_field: {
            type: Object,
            required: true
        },
        bg_refresh_interval: {
            type: Number,
            default: 0
        },
        /** @type {itemtype: string, items_id: number} */
        item: {
            type: Object,
            required: true,
            validator(value) {
                return typeof value.itemtype === 'string' && typeof value.items_id === 'number';
            }
        },
        supported_filters: {
            type: Object,
            required: true,
            validator(value) {
                // each entry must be an object with a 'description' and 'supported_prefixes' property
                return Object.values(value).every(filter => typeof filter.description === 'string' && Array.isArray(filter.supported_prefixes));
            }
        },
        display_initials: {
            type: Boolean,
            default: true
        },
    },
  emits: [
        'kanban:pre_init', 'kanban:post_init', 'kanban:refresh_sortables', 'kanban:card_move', 'kanban:card_delete',
        'kanban:card_restore', 'kanban:refresh', 'kanban:refresh_tokenizer', 'kanban:pre_filter', 'kanban:filter',
        'kanban:post_filter', 'kanban:pre_load_state', 'kanban:post_load_state', 'kanban:pre_save_state',
        'kanban:post_save_state'
    ],
  async setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

let __temp, __restore

    /* global sortable */
    /* global glpi_toast_error, glpi_confirm */
    /* global _ */

    const props = __props;

    const emit = __emit;

    const rights = new _Rights_js__WEBPACK_IMPORTED_MODULE_1__.Rights(props.rights);
    const filters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
        _text: ''
    });
    /** @type SearchInput */
    let filter_input = null;
    const show_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    const columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    const all_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    /**
     * @type {Ref<UnwrapRef<{
     *     state: {}|{order_index: {column: number, folded: boolean, cards: {Array}}}
     * }>>}
     */
    const user_state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    let last_refresh = null;
    const _background_refresh_timer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    /**
     * Internal refresh function
     * @type {function}
     * @private
     */
    let _background_refresh = null;
    const all_kanbans = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    const kanban_switcher = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const debug_mode = $('body.debug-active').length > 0;
    let mutation_observer = null;
    let is_sorting_active = false;
    let sort_data = undefined;

    const team_badge_provider = new _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_4__.TeamBadgeProvider(props.display_initials, props.max_team_images);

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(kanban_switcher, (new_value) => {
        // If selection is new. Treats all 0 and negative values as the same thing (Global).
        if (new_value !== props.item.items_id && !(new_value <= 0 && props.item.items_id <= 0)) {
            $.ajax({
                type: "GET",
                url: CFG_GLPI.root_doc + '/ajax/kanban.php',
                data: {
                    action: "get_url",
                    itemtype: props.item.itemtype,
                    items_id: new_value
                }
            }).then((url) => {
                window.location = url;
            });
        }
    });

    function initMutationObserver() {
        mutation_observer = new MutationObserver((records) => {
            records.forEach(r => {
                if (r.addedNodes.length > 0) {
                    if (is_sorting_active) {
                        const sortable_placeholders = [...r.addedNodes].filter(n => n.classList.contains('sortable-placeholder'));
                        if (sortable_placeholders.length > 0) {
                            const placeholder = $(sortable_placeholders[0]);

                            const current_column = placeholder.closest('.kanban-column').attr('id');

                            // Compute current position based on list of sortable elements without current card.
                            // Indeed, current card is still in DOM (but invisible), making placeholder index in DOM
                            // not always corresponding to its position inside list of visible elements.
                            const sortable_elements = $('#' + CSS.escape(current_column) + ' ul.kanban-body > li:not([id="' + CSS.escape(sort_data.card_id) + '"])');
                            const current_position = sortable_elements.index(placeholder.get(0));
                            const card = $('#' + CSS.escape(sort_data.card_id));
                            card.data('current-pos', current_position);

                            if (!rights.canOrderCard()) {
                                if (current_column === sort_data.source_column) {
                                    if (current_position !== sort_data.source_position) {
                                        placeholder.addClass('invalid-position');
                                    } else {
                                        placeholder.removeClass('invalid-position');
                                    }
                                } else {
                                    if (!$(placeholder).is(':last-child')) {
                                        placeholder.addClass('invalid-position');
                                    } else {
                                        placeholder.removeClass('invalid-position');
                                    }
                                }
                            }
                        }
                    }
                }
            });
        });
        mutation_observer.observe($(`#${CSS.escape(props.element_id)}`).get(0), {
            subtree: true,
            childList: true
        });
    }

    /**
     * (Re-)Initialize JQuery sortable for all items and columns.
     * This should be called every time a new column or item is added to the board.
     */
    function refreshSortables() {
        $(`#${CSS.escape(props.element_id)}`).trigger('kanban:refresh_sortables');
        // Make sure all items in the columns can be sorted
        const bodies = $(`#${CSS.escape(props.element_id)} .kanban-body`);
        $.each(bodies, function(b) {
            const body = $(b);
            if (body.data('sortable')) {
                sortable(b, 'destroy');
            }
        });

        sortable(bodies, {
            forcePlaceholderSize: true,
            acceptFrom: '.kanban-body',
            items: '.kanban-item:not(.readonly):not(.temporarily-readonly):not(.filtered-out)',
        });

        bodies.off('sortstart').on('sortstart', (e) => {
            is_sorting_active = true;

            const card = $(e.detail.item);
            // Track the column and position the card was picked up from
            const current_column = card.closest('.kanban-column').attr('id');
            card.data('source-col', current_column);
            card.data('source-pos', e.detail.origin.index);
            sort_data = {
                card_id: card.attr('id'),
                source_column: current_column,
                source_position: e.detail.origin.index
            };
        });

        bodies.off('sortupdate').on('sortupdate', function(e) {
            const card = e.detail.item;
            if (this === $(card).parent()[0]) {
                return onKanbanCardSort(e, this);
            }
        });

        bodies.off('sortstop').on('sortstop', (e) => {
            is_sorting_active = false;
            $(e.detail.item).closest('.kanban-column').trigger('mouseenter'); // force readonly states refresh
        });

        if (rights.canModifyView()) {
            // Enable column sorting
            sortable(`#${CSS.escape(props.element_id)} .kanban-columns`, {
                acceptFrom: `#${CSS.escape(props.element_id)} .kanban-columns`,
                appendTo: '.kanban-container',
                items: '.kanban-column:not(.kanban-protected)',
                handle: '.kanban-column-header',
                orientation: 'horizontal',
                forcePlaceholderSize: true
            });
            $(`#${CSS.escape(props.element_id)} .kanban-columns .kanban-column:not(.kanban-protected) .kanban-column-header`).addClass('grab');
        }

        $(`#${props.element_id} .kanban-columns`).off('sortstop').on('sortstop', (e) => {
            e.stopPropagation();
            const column = e.detail.item;
            const column_id = column.id.split('-').pop();
            updateColumnPosition(column_id, $(column).index());
        });
    }

    function refreshSearchTokenizer() {
        filter_input.tokenizer.clearAutocomplete();

        // Refresh core tags autocomplete
        filter_input.tokenizer.setAutocomplete('type', Object.keys(props.supported_itemtypes).map(k => `<i class="${_.escape(props.supported_itemtypes[k].icon)} me-1"></i>` + _.escape(k)));
        filter_input.tokenizer.setAutocomplete('milestone', ["true", "false"]);
        filter_input.tokenizer.setAutocomplete('deleted', ["true", "false"]);

        emit('kanban:refresh_tokenizer', filter_input.tokenizer);
    }

    /**
     * Initialize the background refresh mechanism.
     */
    function backgroundRefresh() {
        if (props.bg_refresh_interval <= 0) {
            return;
        }
        _background_refresh = function() {
            const sorting = $('.sortable-placeholder');
            // Check if the user is current sorting items
            if (sorting.length > 0) {
                // Wait 10 seconds and try the background refresh again
                delayRefresh();
                return;
            }
            // Refresh and then schedule the next refresh (minutes)
            refresh(false).then(() => {
                _background_refresh_timer.value = window.setTimeout(_background_refresh, props.bg_refresh_interval * 60 * 1000);
            });
        };
        // Schedule initial background refresh (minutes)
        _background_refresh_timer.value = window.setTimeout(_background_refresh, props.bg_refresh_interval * 60 * 1000);
    }

    /**
     * Delay the background refresh for a short amount of time.
     * This should be called any time the user is in the middle of an action so that the refresh is not disruptive.
     * @param {number} delay_ms Delay in milliseconds
     */
    function delayRefresh(delay_ms = 10000) {
        window.clearTimeout(_background_refresh_timer.value);
        _background_refresh_timer.value = window.setTimeout(_background_refresh, delay_ms);
    }

    function toggleSubDropdown(e) {
        $(e.currentTarget).parent().toggleClass('active')
            .find('ul').toggle();
    }

    function getUpdatedColumnState() {
        const new_state = {};

        $.each(ordered_columns.value, (i, col) => {
            const column_id = col.id || i;
            new_state[i] = {
                column: column_id,
                folded: col.folded,
                visible: col.visible,
                cards: []
            };
            $.each(col.items, (j, card) => {
                new_state[i].cards.push(card.id);
            });
            // Sort cards based on their index in the column
            new_state[i].cards.sort((a, b) => {
                // Handle the case where the card is not in the column
                const card_a = $(`#${CSS.escape(a)}`);
                const card_b = $(`#${CSS.escape(b)}`);
                if (card_a.length === 0) {
                    return -1;
                }
                if (card_b.length === 0) {
                    return 1;
                }
                const a_index = card_a.index();
                const b_index = card_b.index();
                return a_index - b_index;
            });
        });

        return new_state;
    }

    /**
     * Saves the current state of the Kanban to the DB for the user.
     * This saves the visible columns and their collapsed state.
     * This should only be done if there is no state stored on the server, so one needs to be built.
     * Do NOT use this for changes to the state such as moving cards/columns!
     * @return {Promise<*>}
     */
    async function saveState() {
        emit('kanban:pre_save_state');
        return $.ajax({
            type: "POST",
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "save_column_state",
                itemtype: props.item.itemtype,
                items_id: props.item.items_id,
                state: getUpdatedColumnState()
            },
        }).always(() => {
            emit('kanban:post_save_state');
        });
    }

    /**
     * Restore the Kanban state for the user from the DB if it exists.
     * This restores the visible columns and their collapsed state.
     * @return {Promise<*>}
     */
    async function loadState() {
        emit('kanban:pre_load_state');
        return $.ajax({
            type: "GET",
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "load_column_state",
                itemtype: props.item.itemtype,
                items_id: props.item.items_id,
                last_load: last_refresh
            }
        }).then(async function(state) {
            if (state['state'] === undefined || state['state'] === null) {
                return;
            }
            user_state.value = {
                state: state['state']
            };

            const indices = Object.keys(state['state']);
            const promises = [];
            for (let i = 0; i < indices.length; i++) {
                const index = parseInt(indices[i]);
                const entry = state['state'][index];
                entry.folded = entry.folded === 'true' || entry.folded === true;
                const element = $(`#column-${CSS.escape(props.column_field.id)}-${CSS.escape(entry.column)}`);
                if (element.length === 0) {
                    promises.push(loadColumn(entry.column, true, false));
                }
                $(`#${CSS.escape(props.element_id)} .kanban-columns .kanban-column:nth-child(${index})`).after(element);
                if (entry.folded) {
                    element.addClass('collapsed');
                }
            }
            await Promise.all(promises);
            last_refresh = state['timestamp'];
            emit('kanban:post_load_state');
        });
    }

    /**
     * Clears the Kanban state for the user from the DB.
     * Useful if the state somehow gets corrupted.
     * @param ask_confirmation Whether to ask the user for confirmation
     */
    function clearState(ask_confirmation = true) {
        if (!rights.canModifyView()) {
            return;
        }
        const _clearState = () => {
            $.ajax({
                type: "POST",
                url: CFG_GLPI.root_doc + '/ajax/kanban.php',
                data: {
                    action: "clear_column_state",
                    itemtype: props.item.itemtype,
                    items_id: props.item.items_id
                }
            }).done(() => {
                // Reload page
                window.location.reload();
            }).fail(() => {
                glpi_toast_error(__('Failed to reset Kanban view'));
            });
        };
        if (ask_confirmation) {
            glpi_confirm({
                title: __('Reset view'),
                message: __('Resetting the view will reset the shown columns and remove custom card ordering'),
                confirm_callback: () => {
                    _clearState();
                }
            });
        } else {
            _clearState();
        }
    }

    /**
     * Load a column from the server and append it to the Kanban if it is visible.
     * @param {number} column_id The ID of the column to load.
     *    This is useful if an item is changed in another tab or by another user to be in the new column after the original column was added.
     * @return {Promise<void>}
     */
    async function loadColumn(column_id) {
        let skip_load = false;
        if (user_state.value.state !== undefined) {
            $.each(user_state.value.state, function (i, c) {
                if (parseInt(c['column']) === parseInt(column_id)) {
                    if (!c['visible']) {
                        skip_load = true;
                    }
                    return false;
                }
            });
        }
        if (skip_load) {
            return Promise.resolve(null);
        }

        try {
            return $.ajax({
                method: 'GET',
                url: CFG_GLPI.root_doc + '/ajax/kanban.php',
                data: {
                    action: "get_column",
                    itemtype: props.item.itemtype,
                    items_id: props.item.items_id,
                    column_field: props.column_field.id,
                    column_id: column_id
                }
            }).then((column) => {
                if (column !== undefined && Object.keys(column).length > 0) {
                    // Add the correct icons to the items
                    $.each(column[column_id].items, function(i, item) {
                        const itemtype = item.id.split('-')[0];
                        item['icon'] = props.supported_itemtypes[itemtype]['icon'] || '';
                    });
                    column[column_id].items = Object.values(column[column_id]?.items || {});
                    const state_for_col = Object.values(user_state.value.state).find((c) => parseInt(c.column) === parseInt(column_id));
                    column[column_id].folded = state_for_col?.folded || false;
                    columns.value[column_id] = column[column_id];
                    refreshSortables();

                    // If there are no cards in the state for this column, force a state save
                    if ((state_for_col?.cards || []).length === 0) {
                        saveState();
                    }
                }
            });
        } catch {
            return Promise.resolve(null);
        }
    }

    /**
     * Refresh the Kanban with the new set of columns.
     * @param {boolean} initial_load True if this is the first load. On the first load, the user state is not saved.
     * @return {Promise<*>}
     */
    async function refresh(initial_load = false) {
        const _refresh = async () => {
            const promise = $.ajax({
                method: 'GET',
                url: CFG_GLPI.root_doc + '/ajax/kanban.php',
                data: {
                    action: "refresh",
                    itemtype: props.item.itemtype,
                    items_id: props.item.items_id,
                    column_field: props.column_field.id
                }
            });
            promise.then((new_columns) => {
                columns.value = new_columns;
                if (initial_load && (user_state.value.state === undefined || Object.keys(user_state.value.state).length === 0)) {
                    // Save the state for the first time
                    saveState();
                }
                // Set the folded state of the columns to false initially in case they are not in the user state
                $.each(columns.value, (i, col) => {
                    col.folded = false;
                });

                // If cards exist in the user_state for this column, make sure those cards are in the right order. All other cards come after.
                $.each(user_state.value.state, (i, column) => {
                    const column_id = parseInt(column.column);
                    if (columns.value[column_id] === undefined) {
                        return;
                    }
                    columns.value[column_id].folded = column.folded || false;
                    columns.value[column_id].visible = column.visible ?? true;
                });
                emit('kanban:refresh');
                // Have to delay the badge image fetch until the next tick for it to work properly
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                    team_badge_provider.fetchRequiredUserPictures();
                });
            });
            return promise;
        };
        return _refresh();
    }

    /**
     * Get the folded state of the column from the user state.
     * @param column_id The ID of the column.
     * @return {boolean} True if the column is folded, false otherwise (default if nothing specified in the user state for this column).
     */
    function getFoldedState(column_id) {
        if (user_state.value.state === undefined) {
            return false;
        }
        const match = Object.values(user_state.value.state).find((c) => parseInt(c.column) === parseInt(column_id));
        const folded = match !== undefined ? match.folded : false;
        return folded === true || folded === 'true';
    }

    /**
     * Update the collapsed state of the specified column in the event.
     * After toggling the collapse state, the server is notified of the change.
     * @param e
     */
    function updateFoldColumn(e) {
        const matching_col = Object.values(columns.value).find((c) => parseInt(c.id) === parseInt(e.column_id));
        if (matching_col) {
            matching_col.folded = e.folded;
        }
        $.ajax({
            type: "POST",
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: e.folded ? 'collapse_column' : 'expand_column',
                column: e.column_id,
                kanban: props.item
            }
        });
    }

    /**
     * Notify the server that the column's position has changed.
     * @param {number} column The ID of the column.
     * @param {number} position The position of the column.
     */
    function updateColumnPosition(column, position) {
        $.ajax({
            type: "POST",
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "move_column",
                column: column,
                position: position,
                kanban: props.item
            }
        });
    }

    /**
     * Callback function for when a kanban item is moved.
     * @param {Object} e  Event
     * @param {Element} sortable Sortable object
     * @returns {Boolean}
     */
    function onKanbanCardSort(e, sortable) {
        const target = sortable.parentElement;
        const source = $(e.detail.origin.container);
        const card = $(e.detail.item);
        const el_params = card.attr('id').split('-');
        const target_params = $(target).attr('id').split('-');
        const column_id = target_params[target_params.length - 1];

        if (el_params.length === 2 && source !== null && !(!rights.canOrderCard() && source.length === 0)) {
            $.ajax({
                type: "POST",
                url: CFG_GLPI.root_doc + '/ajax/kanban.php',
                data: {
                    action: "update",
                    itemtype: el_params[0],
                    items_id: el_params[1],
                    column_field: props.column_field.id,
                    column_value: column_id
                },
                error: function() {
                    window.sortable(sortable, 'cancel');
                    return false;
                },
                success: function() {
                    let pos = card.data('current-pos');
                    if (!rights.canOrderCard()) {
                        card.appendTo($(target).find('.kanban-body').first());
                        pos = card.index();
                    }
                    // Update counters. Always pass the column element instead of the kanban body (card container)
                    card.removeData('source-col');
                    updateCardPosition(card.attr('id'), target.id, pos);
                    return true;
                }
            });
        } else {
            window.sortable(sortable, 'cancel');
            return false;
        }
    }

    /**
     * Send the new card position to the server.
     * @param {string} card The ID of the card being moved
     * @param {string|number} column The ID or element of the column the card resides in
     * @param {number} position The position in the column that the card is at
     */
    function updateCardPosition(card, column, position) {
        if (typeof column === 'string' && column.lastIndexOf('column', 0) === 0) {
            column = column.split('-').pop();
        }
        return $.ajax({
            type: "POST",
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "move_item",
                card: card,
                column: column,
                position: position,
                kanban: props.item
            }
        });
    }

    function openCardDetailsPanel(e) {
        const id_parts = e.card_id.split('-', 2);
        const itemtype = id_parts[0];
        const items_id = id_parts[1];

        closeCardDetailsPanel();
        $.ajax({
            method: 'GET',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                itemtype: itemtype,
                items_id: items_id,
                action: 'load_item_panel'
            }
        }).done((result) => {
            $(`#${CSS.escape(props.element_id)} .offcanvas`).remove();
            $(`#${CSS.escape(props.element_id)}`).append(`
                <div class="offcanvas offcanvas-end show position-absolute h-100" tabindex="-1">
                    <div class="offcanvas-body p-0"></div>
                </div>
            `);
            const offcanvas_body = $(`#${CSS.escape(props.element_id)} .offcanvas .offcanvas-body`);
            offcanvas_body.append(result);
            offcanvas_body.find(`.card-title button`).on('click', () => {
                closeCardDetailsPanel();
            });
            offcanvas_body.find('button.kanban-item-edit-team').on('click', () => {
                showTeamModal(itemtype, items_id);
            });
            // Load badges
            $('.item-details-panel ul.team-list li').each((i, l) => {
                l = $(l);
                const member_itemtype = l.attr('data-itemtype');
                const member_items_id = l.attr('data-items_id');
                let member_item = team_badge_provider.getTeamBadge({
                    itemtype: member_itemtype,
                    id: member_items_id,
                    name: l.attr('data-name'),
                    realname: l.attr('data-realname'),
                    firstname: l.attr('data-firstname')
                });
                l.append(`
                    <div class="member-details">
                        ${member_item}
                        ${_.escape(l.attr('data-name')) || `${_.escape(member_itemtype)} (${_.escape(member_items_id)})`}
                    </div>
                    <button type="button" name="delete" class="btn btn-ghost-danger">
                        <i class="ti ti-x" title="${__('Delete')}"></i>
                    </button>
                `);
            });
        });

        $(`#${props.element_id}`)
            .off('click', '.item-details-panel ul.team-list button[name="delete"]')
            .on('click', '.item-details-panel ul.team-list button[name="delete"]', (e) => {
                const list_item = $(e.target).closest('li');
                const member_itemtype = list_item.attr('data-itemtype');
                const member_items_id = list_item.attr('data-items_id');
                const panel = $(e.target).closest('.item-details-panel');
                const itemtype = panel.attr('data-itemtype');
                const items_id = panel.attr('data-items_id');
                const role = list_item.closest('.list-group').attr('data-role');

                if (itemtype && items_id) {
                    removeTeamMember(itemtype, items_id, member_itemtype, member_items_id, role);
                    list_item.remove();
                }
            });
    }

    function closeCardDetailsPanel() {
        $(`#${props.element_id} .offcanvas`).remove();
    }

    function showTeamModal(card_itemtype, card_items_id) {
        const modal = $('#kanban-modal');
        modal
            .off('click', 'button[name="add"]')
            .on('click', 'button[name="add"]', () => {
                $('.actor_entry').each(function() {
                    let itemtype = $(this).data('itemtype');
                    let items_id = $(this).data('items-id');
                    let role = $(this).data('actortype');
                    if (itemtype && items_id) {
                        addTeamMember(card_itemtype, card_items_id, itemtype, items_id, role).then(() => {
                            openCardDetailsPanel({
                                card_id: `${card_itemtype}-${card_items_id}`
                            });
                        });
                    }
                });
                modal.modal('hide');
            });
        $.ajax({
            method: 'GET',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                itemtype: card_itemtype,
                items_id: card_items_id,
                action: 'load_teammember_form'
            }
        }).done((result) => {
            const teammember_types_dropdown = $(`#kanban-teammember-item-dropdown-${CSS.escape(card_itemtype)}`).html();
            const content = `
                ${teammember_types_dropdown}
                ${result}
                <button type="button" name="add" class="btn btn-primary">${_x('button', 'Add')}</button>
            `;
            modal.find('.modal-body').html(content);
            modal.modal('show');
        });
    }

    /**
     * Hide the column and notify the server of the change.
     * @param {number} column_id The ID of the column
     * @return {Promise<*>}
     */
    async function hideColumn(column_id) {
        return $.ajax({
            method: 'POST',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "hide_column",
                column: column_id,
                kanban: props.item
            }
        }).then(() => {
            delete columns.value[column_id];
            $.each(user_state.value.state, function(i, c) {
                if (parseInt(c['column']) === parseInt(column_id)) {
                    user_state.value.state[i]['visible'] = false;
                    return false;
                }
            });
        });
    }

    /**
     * Show the column and notify the server of the change.
     * @param {number} column_id The ID of the column
     * @return {Promise<*>}
     */
    async function showColumn(column_id) {
        return $.ajax({
            method: 'POST',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "show_column",
                column: column_id,
                kanban: props.item
            }
        }).then(() => {
            $.each(user_state.value.state, function(i, c) {
                if (parseInt(c['column']) === parseInt(column_id)) {
                    user_state.value.state[i]['visible'] = true;
                    return false;
                }
            });
            loadColumn(column_id);
        });
    }

    async function addTeamMember(itemtype, items_id, member_type, members_id, role) {
        return $.ajax({
            method: 'POST',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "add_teammember",
                itemtype: itemtype,
                items_id: items_id,
                itemtype_teammember: member_type,
                items_id_teammember: members_id,
                role: role
            }
        }).then(() => {
            refresh(false).then(() => {
                delayRefresh(props.bg_refresh_interval * 60 * 1000);
            });
        }, () => {
            glpi_toast_error(__('Failed to add team member'));
        });
    }

    /**
     * @typedef FilterData
     * @property {string} prefix
     * @property {string} term
     * @property {boolean} exclusion
     */
    const filter_matchers = {
        /**
         * @param {FilterData} filter_data The filter data
         * @param {string} target The string to match on
         * @return {boolean} True if the target matches the filter
         */
        regex: (filter_data, target) => {
            try {
                return ((!target.trim().match(filter_data.term)) === filter_data.exclusion);
            } catch (e) {
                // Invalid regex
                glpi_toast_error(
                    __('The regular expression you entered is invalid. Please check it and try again.'),
                    __('Invalid regular expression')
                );
            }
            return false;
        },
        /**
         * @param {FilterData} filter_data The filter data
         * @param {string} target The string to match on
         * @return {boolean} True if the target matches the filter
         */
        equal: (filter_data, target) => {
            return ((target !== filter_data.term) === filter_data.exclusion);
        },
        /**
         *
         * @param {FilterData} filter_data The filter data
         * @param {string} target The string to match on
         */
        include: (filter_data, target) => {
            return ((!target.toLowerCase().includes(filter_data.term.toLowerCase())) === filter_data.exclusion);
        },
        /**
         * @param {FilterData} filter_data The filter data
         * @param {string} target The string to match on
         * @param {string[]} sub_matchers The sub matchers to use
         * @return {boolean} True if the target matches the filter
         */
        text: (filter_data, target, sub_matchers = ['regex', 'includes']) => {
            if (filter_data.prefix === '#' && sub_matchers.includes('regex')) {
                return filter_matchers.regex(filter_data, target);
            } else {
                if (sub_matchers.includes('includes')) {
                    return filter_matchers.include(filter_data, target);
                }
                if (sub_matchers.includes('equals')) {
                    return filter_matchers.equal(filter_data, target);
                }
            }
        },
        /**
         * @param {FilterData} filter_data The filter data
         * @param {string} target The value to match on
         * @return {boolean} True if the target matches the filter
         */
        boolean: (filter_data, target) => {
            const negative_values = ['false', 'no', '0', 0, false, undefined];
            const negative_filter = negative_values.includes(typeof filter_data.term === 'string' ? filter_data.term.toLowerCase() : filter_data.term);
            const negative_target = negative_values.includes(typeof target === 'string' ? target.toLowerCase() : target);
            return ((negative_target !== negative_filter) === filter_data.exclusion);
        },
        teammember: (filter_data, itemtype, team) => {
            let has_matching_member = false;
            $.each(team, (i, m) => {
                if (m.itemtype === itemtype && (m.name.toLowerCase().includes(filter_data.term.toLowerCase()) !== filter_data.exclusion)) {
                    has_matching_member = true;
                }
            });
            return has_matching_member;
        }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(filters, (new_filters) => {
        emit('kanban:pre_filter', new_filters);

        $.each(columns.value, (i, c) => {
            $.each(c.items, (i2, item) => {
                const title = item.title;
                let shown = true;
                if (new_filters._text) {
                    try {
                        if (!title.match(new RegExp(new_filters._text, 'i'))) {
                            shown = false;
                        }
                    } catch (err) {
                        // Probably not a valid regular expression. Use simple contains matching.
                        if (!title.toLowerCase().includes(new_filters._text.toLowerCase())) {
                            shown = false;
                        }
                    }
                }
                if (new_filters.deleted !== undefined) {
                    if (!filter_matchers.boolean(new_filters.deleted, item._metadata.is_deleted)) {
                        shown = false;
                    }
                }

                if (new_filters.title !== undefined) {
                    if (!filter_matchers.text(new_filters.title, title)) {
                        shown = false;
                    }
                }

                if (new_filters.type !== undefined) {
                    if (!filter_matchers.text(new_filters.type, item.id.split('-')[0], ['regex', 'equals'])) {
                        shown = false;
                    }
                }

                if (new_filters.milestone !== undefined) {
                    if (!filter_matchers.boolean(new_filters.milestone, item._metadata.is_milestone)) {
                        shown = false;
                    }
                }

                if (new_filters.category !== undefined) {
                    if (!filter_matchers.text(new_filters.category, item._metadata.category)) {
                        shown = false;
                    }
                }

                if (new_filters.content !== undefined) {
                    if (!filter_matchers.text(new_filters.content, item._metadata.content)) {
                        shown = false;
                    }
                }

                const team_members = item._team;
                if (new_filters.team !== undefined) {
                    const team_search = new_filters.team.term.toLowerCase();
                    let has_matching_member = false;
                    $.each(team_members, (i, m) => {
                        if (m.name.toLowerCase().includes(team_search)) {
                            has_matching_member = true;
                        }
                    });
                    if (!has_matching_member) {
                        shown = false;
                    }
                }

                if (new_filters.user !== undefined) {
                    if (!filter_matchers.teammember(new_filters.user, 'User', team_members)) {
                        shown = false;
                    }
                }

                if (new_filters.group !== undefined) {
                    if (!filter_matchers.teammember(new_filters.group, 'Group', team_members)) {
                        shown = false;
                    }
                }

                if (new_filters.supplier !== undefined) {
                    if (!filter_matchers.teammember(new_filters.supplier, 'Supplier', team_members)) {
                        shown = false;
                    }
                }

                if (new_filters.contact !== undefined) {
                    if (!filter_matchers.teammember(new_filters.contact, 'Contact', team_members)) {
                        shown = false;
                    }
                }

                item._filtered_out = !shown;
            });
        });

        emit('kanban:filter', {
            filters: new_filters,
            kanban_element: $(`#${CSS.escape(props.element_id)}`),
            columns: columns.value
        });
        emit('kanban:post_filter', new_filters);
    }, {deep: true});

    async function removeTeamMember(itemtype, items_id, member_type, members_id, role) {
        return $.ajax({
            method: 'POST',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "delete_teammember",
                itemtype: itemtype,
                items_id: items_id,
                itemtype_teammember: member_type,
                items_id_teammember: members_id,
                role: role
            }
        }).then(() => {
            refresh(false).then(() => {
                delayRefresh(props.bg_refresh_interval * 60 * 1000);
            });
        }, () => {
            glpi_toast_error(__('Failed to remove team member'));
        });
    }

    /**
     * Delete a card
     * @param {{card_id: number}} e Event data
     * @return {Promise<*>}
     */
    async function deleteCard(e) {
        const [itemtype, items_id] = e.card_id.split('-', 2);
        let card = null;
        $.each(columns.value, (i, col) => {
            $.each(col.items, (i2, item) => {
                if (item.id === e.card_id) {
                    card = item;
                    return false;
                }
            });
            if (card !== null) {
                return false;
            }
        });
        if (card === null) {
            return Promise.reject();
        }
        const force = card._metadata.is_deleted;
        return $.ajax({
            type: "POST",
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "delete_item",
                itemtype: itemtype,
                items_id: items_id,
                force: force ? 1 : 0
            }
        }).then((response) => {
            if (response.purged === true || response.purged === 'true') {
                $.each(columns.value, (i, col) => {
                    $.each(col.items, (i2, item) => {
                        if (item.id === e.card_id) {
                            delete col.items[i2];
                        }
                    });
                });
            } else {
                card._metadata.is_deleted = true;
            }
            emit('kanban:card_delete', {
                card_id: e.card_id,
                purged: response.purged || false
            });
            refresh();
        });
    }

    /**
     * Restore a trashed card
     * @param {{card_id: number}} e Event data
     * @return {Promise<*>}
     */
    async function restoreCard(e) {
        const [itemtype, items_id] = e.card_id.split('-', 2);
        let card = null;
        $.each(columns.value, (i, col) => {
            $.each(col.items, (i2, item) => {
                if (item.id === e.card_id) {
                    card = item;
                    return false;
                }
            });
            if (card !== null) {
                return false;
            }
        });
        if (card === null || !card._metadata.is_deleted) {
            return Promise.reject();
        }
        return $.ajax({
            type: "POST",
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "restore_item",
                itemtype: itemtype,
                items_id: items_id,
            },
        }).then(() => {
            card._metadata.is_deleted = false;
            emit('kanban:card_restore', {
                card_id: e.card_id
            });
        });
    }

    function isColumnVisible(column_id) {
        const col = Object.values(user_state.value.state).find((c) => parseInt(c.column) === parseInt(column_id));
        if (col === undefined) {
            return false;
        }
        return col.visible ?? true;
    }

    async function updateAllColumnsList() {
        return $.ajax({
            method: 'GET',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "list_columns",
                itemtype: props.item.itemtype,
                column_field: props.column_field.id
            }
        }).then((data) => {
            all_columns.value = data;
        });
    }

    function updateColumnVisibility(e) {
        const trigger_checkbox = $(e.target);
        const column_id = trigger_checkbox.val();
        const new_visibility = trigger_checkbox.is(':checked');
        if (new_visibility) {
            showColumn(column_id);
        } else {
            hideColumn(column_id);
        }
    }

    /**
     * Create a new column and send it to the server.
     * This will create a new item in the DB based on the item type used for columns.
     * It does not automatically add it to the Kanban.
     * @param e Create status button click event
     * @return {Promise<*>}
     */
    async function createColumn(e) {
        const btn = $(e.target);
        const form = btn.closest('.kanban-form');
        const values = {};
        form.find('input').each((i, input) => {
            input = $(input);
            values[input.attr('name')] = input.val();
        });
        if (!values['name']) {
            return Promise.reject();
        }
        const column_name = values['name'];
        delete values['name'];
        return $.ajax({
            method: 'POST',
            url: CFG_GLPI.root_doc + '/ajax/kanban.php',
            data: {
                action: "create_column",
                itemtype: props.item.itemtype,
                items_id: props.item.items_id,
                column_field: props.column_field.id,
                column_name: column_name,
                params: values
            }
        }).then(() => {
            updateAllColumnsList();
        });
    }

    const column_filter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    const filtered_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const visible = {};
        $.each(all_columns.value, (column_id, column) => {
            if (column.name.toLowerCase().includes(column_filter.value.toLowerCase())) {
                visible[column_id] = column;
                visible[column_id].id = column_id;
            }
        });
        let sorted_data = Object.values(visible); // Cast Object to array
        const collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: 'base'
        });
        return sorted_data.sort((a, b)  => collator.compare(a.name, b.name));
    });

    const ordered_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        // If there is a column without an ID or <= 0, it should be first (No status column and other special columns)
        // Then, the legacy_user_state should be used to determine the order of all the columns referenced by it
        // Finally, the remaining columns will be shown in the order they are in the columns Object at the end
        const ordered = [];
        const added = [];
        $.each(columns.value, (column_id, column) => {
            const i_column_id = parseInt(column.id || column_id);
            if (i_column_id <= 0) {
                column.id = i_column_id;
                ordered.push(column);
                added.push(i_column_id);
            }
        });
        if (user_state.value.state !== undefined) {
            $.each(user_state.value.state, (i, c) => {
                const i_column_id = parseInt(c.column);
                if (!added.includes(i_column_id) && columns.value[i_column_id] !== undefined) {
                    columns.value[i_column_id].id = i_column_id;
                    ordered.push(columns.value[i_column_id]);
                    added.push(i_column_id);
                }
            });
        }
        $.each(columns.value, (column_id, column) => {
            const i_column_id = parseInt(column_id);
            column.id = i_column_id;
            if (!added.includes(i_column_id)) {
                ordered.push(column);
                added.push(i_column_id);
            }
        });

        // Order the cards
        // If the card is in the user state, use that position
        // The remaining cards will be shown in the order they are in the column
        $.each(ordered, (i, column) => {
            const ordered_cards = [];
            const added_cards = [];
            let col_state = Object.values(user_state.value.state || {}).filter((c) => parseInt(c.column) === parseInt(column.id));
            if (col_state.length > 0) {
                col_state = col_state[0];
            } else {
                col_state = null;
            }
            if (col_state !== null) {
                $.each(col_state.cards || {}, (i2, card_id) => {
                    $.each(column.items || {}, (i3, card) => {
                        if (card.id === card_id) {
                            ordered_cards.push(card);
                            added_cards.push(card_id);
                        }
                    });
                });
            }
            $.each(column.items || {}, (i2, card) => {
                if (!added_cards.includes(card.id)) {
                    ordered_cards.push(card);
                    added_cards.push(card.id);
                }
            });
            column.items = ordered_cards;
        });

        // Remove non-visible columns
        return ordered.filter((c) => c.visible !== false);

        // removed by dead control flow
{}
    });

    emit('kanban:pre_init');
    ;(
  ([__temp,__restore] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext)(() => loadState())),
  await __temp,
  __restore()
);
    ;(
  ([__temp,__restore] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext)(() => $.ajax({
        type: 'GET',
        url: CFG_GLPI.root_doc + '/ajax/kanban.php',
        data: {
            action: 'get_kanbans',
            itemtype: props.item.itemtype,
            items_id: props.item.items_id,
        }
    }).then((kanbans) => {
        all_kanbans.value = kanbans;
        kanban_switcher.value = props.item.items_id <= 0 ? -1 : props.item.items_id;
    }))),
  await __temp,
  __restore()
);

    ;(
  ([__temp,__restore] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext)(() => refresh(true))),
  await __temp,
  __restore()
);
    backgroundRefresh();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        initMutationObserver();
        filter_input = new _SearchInput_js__WEBPACK_IMPORTED_MODULE_3__["default"]($(`#${CSS.escape(props.element_id)} input[name="filter"]`), {
            allowed_tags: props.supported_filters,
            on_result_change: (e, result) => {
                filters.value = {
                    _text: ''
                };
                filters.value._text = result.getFullPhrase();
                result.getTaggedTerms().forEach(t => filters.value[t.tag] = {
                    term: t.term || '',
                    exclusion: t.exclusion || false,
                    prefix: t.prefix
                });
            },
            tokenizer_options: {
                custom_prefixes: {
                    '#': { // Regex prefix
                        label: __('Regex'),
                        token_color: '#00800080'
                    }
                }
            }
        });
        refreshSearchTokenizer();
        refreshSortables();
        emit('kanban:post_init');
    });

const __returned__ = { props, emit, rights, filters, get filter_input() { return filter_input }, set filter_input(v) { filter_input = v }, show_toolbar, columns, all_columns, user_state, get last_refresh() { return last_refresh }, set last_refresh(v) { last_refresh = v }, _background_refresh_timer, get _background_refresh() { return _background_refresh }, set _background_refresh(v) { _background_refresh = v }, all_kanbans, kanban_switcher, debug_mode, get mutation_observer() { return mutation_observer }, set mutation_observer(v) { mutation_observer = v }, get is_sorting_active() { return is_sorting_active }, set is_sorting_active(v) { is_sorting_active = v }, get sort_data() { return sort_data }, set sort_data(v) { sort_data = v }, team_badge_provider, initMutationObserver, refreshSortables, refreshSearchTokenizer, backgroundRefresh, delayRefresh, toggleSubDropdown, getUpdatedColumnState, saveState, loadState, clearState, loadColumn, refresh, getFoldedState, updateFoldColumn, updateColumnPosition, onKanbanCardSort, updateCardPosition, openCardDetailsPanel, closeCardDetailsPanel, showTeamModal, hideColumn, showColumn, addTeamMember, filter_matchers, removeTeamMember, deleteCard, restoreCard, isColumnVisible, updateAllColumnsList, updateColumnVisibility, createColumn, column_filter, filtered_columns, ordered_columns, get Rights() { return _Rights_js__WEBPACK_IMPORTED_MODULE_1__.Rights }, Column: _Column_vue__WEBPACK_IMPORTED_MODULE_2__["default"], computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, nextTick: vue__WEBPACK_IMPORTED_MODULE_0__.nextTick, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch, get SearchInput() { return _SearchInput_js__WEBPACK_IMPORTED_MODULE_3__["default"] }, get TeamBadgeProvider() { return _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_4__.TeamBadgeProvider } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 157:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var _SearchTokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/**
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2025 Teclib' and contributors.
 * @copyright 2003-2014 by the INDEPNET Development Team.
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

/* global _ */



/**
 * @typedef SearchInputOptions
 * @property {{}} [popover] Popover options
 * @property {'edit'|'remove'} [backspace_action='edit'] The action when pressing the backspace key at the start of the input
 * @property {function} [on_result_change] Callback when the result changes
 * @property {TokenizerOptions} [tokenizer_options] Tokenizer options
 * @property {boolean} filter_on_type Whether to filter the suggestions on typing
 * @property {{}} [input_options] Options for the new input element
 * @property {[]|'copy'} [input_options.classes] Classes for the new input element. If set to "copy", the classes of the original input will be copied
 * @property {{}|'copy'} [input_options.attributes] Attributes for the new input element. If set to "copy", the attributes of the original input will be copied
 * @property {{}|'copy'} [input_options.data] Data for the new input element. If set to "copy", the attributes of the original input will be copied
 */

class SearchInput {

    constructor(input, options) {
        /**
       * @type {jQuery}
       */
        this.original_input = $(input);

        /**
       * @type {SearchInputOptions}
       */
        this.options = Object.assign({
            backspace_action: 'edit',
            tokenizer_options: {},
            filter_on_type: true,
            input_options: {
                classes: [],
                attributes: {},
                data: {}
            }
        }, options || {});
        this.tokenizer = new _SearchTokenizer_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.options.allowed_tags || {}, this.options.drop_unallowed_tags || false, this.options.tokenizer_options);

        this.displayed_input = $(`
         <div class="form-control search-input d-flex overflow-auto" tabindex="0"></div>
      `).insertBefore(input);
        this.displayed_input.append(`<span class="search-input-tag-input flex-grow-1" contenteditable="true"></span>`);
        this.applyInputOptions();

        this.original_input.hide();

        this.last_result = null;

        this.registerListeners();
    }

    applyInputOptions() {
        let new_attrs = {};

        if (typeof this.options.input_options.attributes === 'object') {
            new_attrs = this.options.input_options.attributes;
        } else if (this.options.input_options.attributes === 'copy') {
            const original_attr = this.original_input.get(0).attributes;
            for (let i = 0; i < original_attr.length; i++) {
                // Get only non-data attributes
                if (!original_attr[i].name.startsWith('data-') && original_attr[i].name !== 'class') {
                    new_attrs[original_attr[i].name] = original_attr[i].value;
                }
            }
        }

        let new_data = {};
        const old_data_attrs = {};
        if (typeof this.options.input_options.data === 'object') {
            new_data = this.options.input_options.data;
        } else if (this.options.input_options.data === 'copy') {
            new_data = this.original_input.data();
            const original_attr = this.original_input.get(0).attributes;
            // Get data attributes in case they aren't in jQuery data
            for (let i = 0; i < original_attr.length; i++) {
                // Get only data attributes
                if (original_attr[i].name.startsWith('data-')) {
                    old_data_attrs[original_attr[i].name] = original_attr[i].value;
                }
            }
        }

        // Add data attributes. We don't use $.data() because having the DOM attribute may be needed and using $.data doesn't add them.
        // Information from $.data will override any data attributes of the same name
        new_attrs = Object.assign(old_data_attrs, Object.keys(new_data).reduce((obj, key) => {
            obj[`data-${key}`] = new_data[key];
            return obj;
        }, new_attrs));

        // Apply attributes including data attributes
        this.displayed_input.attr(new_attrs);

        // Apply classes
        if (Array.isArray(this.options.input_options.classes)) {
            this.displayed_input.addClass(this.options.input_options.classes.join(' '));
        } else if (this.options.input_options.classes === 'copy') {
            this.displayed_input.addClass(this.original_input.attr('class'));
        }
    }

    registerListeners() {

        const input = this.displayed_input;

        input.on('input change', () => {
            if (this.isSelectionUntagged()) {
                this.refreshPopover();
            }
        });

        input.popover(Object.assign({
            trigger: 'manual',
            html: true,
            container: this.displayed_input.parent(),
            customClass: 'search-input-popover shadow',
            placement: 'bottom', // Option from Bootstrap (fallback)
            popperConfig: {
                placement: 'bottom-start', // Option only available directly in popper.js (Preferred)
            },
            delay: {
                hide: 300
            },
            sanitize: false,
            content: () => {
                return this.getPopoverContent();
            }
        }, this.options.popover || {}));

        input.parent().on('mousedown', '.search-input-popover', (e) => {
            e.preventDefault();
        });

        input.parent().on('click', '.search-input-popover .tags-list li', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const tag = $(e.target).closest('li').attr('data-tag');
            const node = $(`<span class="search-input-tag-input">${_.escape(tag.trim())}:</span>`).insertBefore($('.search-input-tag-input:last-of-type'));
            //Clear selected node's text
            const selected_node = this.getSelectedNode();
            $(selected_node).text('');
            const new_node = this.tagifyInputNode(node);
            this.makeTagEditable(new_node);
            new_node.focus();
        });

        input.parent().on('click', '.search-input-popover .tags-list li button.tag-prefix', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const prefix = $(e.target).closest('button.tag-prefix').attr('data-prefix');
            const tag = $(e.target).closest('li').attr('data-tag');
            const node = $(`<span class="search-input-tag-input">${_.escape(prefix || '')}${_.escape(tag.trim())}:</span>`).insertBefore($('.search-input-tag-input:last-of-type'));
            //Clear selected node's text
            const selected_node = this.getSelectedNode();
            $(selected_node).text('');
            const new_node = this.tagifyInputNode(node);
            this.makeTagEditable(new_node);
            new_node.focus();
        });

        input.parent().on('click', '.search-input-popover .term-suggestions-list li', (e) => {
            e.preventDefault();
            const li = $(e.target).closest('li');
            const tag = li.closest('ul').attr('data-tag');
            const selected_term = li.text().trim();
            const editing_node = input.find(`.search-input-tag-input[data-tag="${CSS.escape(tag)}"]`);
            editing_node.text(`${tag}:${selected_term}`);
            this.tagifyInputNode(editing_node);
            this.placeCaretInDefaultInput();
        });

        input.on('input click focus', () => {
            this.refreshPopover();
            input.popover('show');
        });

        $(document.body).on('click', (e) => {
            if ($(e.target).closest(input, this.original_input, input.parent().find('.search-input-popover')).length === 0) {
                input.popover('hide');
            }
        });

        input.on('blur', '.search-input-tag-input', (e) => {
            const tag_input = $(e.target).closest('.search-input-tag-input');
            if (tag_input.length > 0 && tag_input.text().trim().length > 0) {
                this.tagifyInputNode(tag_input);
            }
        });

        input.on('keydown', '.search-input-tag-input', (e) => {
            if (e.keyCode === 9) { // Tab
            // Prevent losing focus when pressing tab key
                e.preventDefault();
            } else if (e.keyCode === 8) { // Backspace
                const selected_node = this.getSelectedNode();
                if (!selected_node || selected_node.classList.contains('search-input-tag-input')) {
                    const selection = document.getSelection();
                    if (!selection.anchorNode.isSameNode(selection.focusNode)) {
                        // Prevent removing the input placeholder tag
                        e.preventDefault();
                    }
                    // if end selection is at the beginning of the input, do the backspace_action
                    if (selection.anchorOffset === 0) {
                        if (this.options.backspace_action === 'remove') {
                            // Remove tag element before the selected_node
                            const prev_node = selected_node.previousSibling;
                            if (prev_node) {
                                prev_node.remove();
                                this.displayed_input.trigger('result_change');
                            }
                        } else if (this.options.backspace_action === 'edit') {
                            // Make the tag element before the selected_node editable
                            const prev_node = $(selected_node.previousSibling);
                            if (prev_node) {
                                this.makeTagEditable(prev_node);
                                e.preventDefault();
                            }
                        }
                    }
                }
            } else if (e.keyCode === 13) { // Enter
                e.preventDefault();
                const popover_list = input.parent().find('.search-input-popover ul');
                if (popover_list.length > 0) {
                    const active_item = popover_list.find('li.active');
                    if (active_item.length > 0) {
                        const active_tag_prefix = active_item.find('button.tag-prefix.active');
                        if (active_tag_prefix.length > 0) {
                            active_tag_prefix.click();
                        } else {
                            active_item.click();
                        }
                    } else {
                        this.tagifySelectedNode();
                    }
                } else {
                    this.tagifySelectedNode();
                }
            } else if (e.keyCode === 40) { // Down arrow
                const popover_list = input.parent().find('.search-input-popover ul');
                if (popover_list.length > 0) {
                    const active_item = popover_list.find('li.active');
                    if (active_item.length === 0) {
                        popover_list.find('li:first-of-type').addClass('active');
                    } else {
                        const next_item = active_item.next();
                        if (next_item.length > 0) {
                            active_item.removeClass('active');
                            next_item.addClass('active');
                        }
                    }
                    //deactivate all tag-prefix buttons in the popover
                    popover_list.find('button.tag-prefix').removeClass('active');
                }
            } else if (e.keyCode === 38) { // Up arrow
                const popover_list = input.parent().find('.search-input-popover ul');
                if (popover_list.length > 0) {
                    const active_item = popover_list.find('li.active');
                    if (active_item.length === 0) {
                        popover_list.find('li:last-of-type').addClass('active');
                    } else {
                        const prev_item = active_item.prev();
                        if (prev_item.length > 0) {
                            active_item.removeClass('active');
                            prev_item.addClass('active');
                        }
                    }
                    //deactivate all tag-prefix buttons in the popover
                    popover_list.find('button.tag-prefix').removeClass('active');
                }
            } else if (e.keyCode === 37) { // Left arrow
                const popover_list = input.parent().find('.search-input-popover ul');
                if (popover_list.length > 0) {
                    const active_item = popover_list.find('li.active');
                    if (active_item.length > 0) {
                        const active_tag_prefix = active_item.find('button.tag-prefix.active');
                        if (active_tag_prefix.length === 0) {
                            active_item.find('button.tag-prefix:last-of-type').addClass('active');
                        } else {
                            const prev_tag_prefix = active_tag_prefix.prev();
                            active_tag_prefix.removeClass('active');
                            if (prev_tag_prefix.length > 0) {
                                prev_tag_prefix.addClass('active');
                            }
                        }
                    }
                }
            } else if (e.keyCode === 39) { // Right arrow
                const popover_list = input.parent().find('.search-input-popover ul');
                if (popover_list.length > 0) {
                    const active_item = popover_list.find('li.active');
                    if (active_item.length > 0) {
                        const active_tag_prefix = active_item.find('button.tag-prefix.active');
                        if (active_tag_prefix.length === 0) {
                            active_item.find('button.tag-prefix:first-of-type').addClass('active');
                        } else {
                            const next_tag_prefix = active_tag_prefix.next();
                            active_tag_prefix.removeClass('active');
                            if (next_tag_prefix.length > 0) {
                                next_tag_prefix.addClass('active');
                            }
                        }
                    }
                }
            }
        });

        input.on('keypress', '.search-input-tag-input', (e) => {
            // Prevent default behavior of the enter key
            if (e.keyCode === 13) {
                e.preventDefault();
            }
        });

        input.on('keyup', 'search-input-tag-input', (e) => {
            if (e.keyCode === 9) { // Tab
                e.preventDefault();
                this.tagifySelectedNode();
            }
        });

        input.on('click', '.search-input-tag', (e) => {
            const tag = $(e.target).closest('.search-input-tag');
            this.makeTagEditable(tag);
        });

        input.on('click', '.search-input-tag i', (e) => {
            $(e.target).closest('.search-input-tag').remove();
            this.displayed_input.trigger('result_change');
        });

        input.on('result_change', (e) => {
            const text = this.getRawInput();

            const result = this.tokenizer.tokenize(text);
            const result_changed = JSON.stringify(result) !== JSON.stringify(this.last_result);
            if (this.options.on_result_change && result_changed) {
                this.options.on_result_change(e, result);
            }
            this.last_result = result;
        });
    }

    tagifySelectedNode() {
        const selected_node = $(this.getSelectedNode());
        if (selected_node && this.isSelectionUntagged()) {
            return this.tagifyInputNode(selected_node);
        }
        return null;
    }

    /**
    *
    * @param {SearchToken} token
    */
    tokenToTagHtml(token) {
        const tag_display = token.tag ? `<b>${_.escape(token.exclusion ? this.tokenizer.EXCLUSION_PREFIX : '')}${_.escape(token.prefix ? token.prefix : '')}${_.escape(token.tag)}</b>:` : '';
        let tag_color_override = null;
        if (this.tokenizer.options.custom_prefixes[token.prefix]) {
            tag_color_override = this.tokenizer.options.custom_prefixes[token.prefix].token_color || null;
        } else if (token.exclusion) {
            tag_color_override = '#80000080';
        }
        const dark_mode = document.documentElement.getAttribute('data-glpi-theme-dark') === '1';
        const text_color = $(document.body).css('color');
        let style_overrides = '';
        if (!token.tag) {
            tag_color_override = text_color;
        }
        if (dark_mode) {
            tag_color_override = tag_color_override || '#b3b3b3';
            // Remove alpha from hex color
            if (tag_color_override.indexOf('#') === 0) {
                tag_color_override = tag_color_override.replace(/[^#]*#([0-9a-f]{6})([0-9a-f]{2})?/i, '#$1');
            }
            style_overrides = tag_color_override ? `border-color: ${tag_color_override} !important; background-color: unset !important;` : '';
        } else {
            style_overrides = tag_color_override ? `background-color: ${tag_color_override} !important` : '';
        }
        return `<span class="search-input-tag badge bg-secondary text-secondary-fg me-1" contenteditable="false" data-tag="${token.tag}" style="${_.escape(style_overrides)}">
                  <span class="search-input-tag-value" contenteditable="false">${tag_display}${_.escape(token.term || '')}</span>
                  <i class="ti ti-x cursor-pointer ms-1" title="${__('Delete')}" contenteditable="false"></i>
               </span>`;
    }

    tagifyInputNode(node) {
        const tokenized = this.tokenizer.tokenize(node.text());
        const tagged_tokens = tokenized.getTaggedTerms();
        const untagged_tokens = tokenized.getUntaggedTerms();

        let last_inserted = null;
        for (let i = 0; i < tagged_tokens.length; i++) {
            const t = tagged_tokens[i];
            last_inserted = $(this.tokenToTagHtml(t)).insertBefore(node);
            last_inserted.data('token', t);
            this.transformTagTermFromAutocomplete(last_inserted);
        }

        if (node.data('token') !== undefined && node.data('token').tag) {
            const untagged_text = tokenized.getFullPhrase();
            node.text(untagged_text);
        } else {
            for (let i = 0; i < untagged_tokens.length; i++) {
                const t = untagged_tokens[i];
                last_inserted = $(this.tokenToTagHtml(t)).insertBefore(node);
                last_inserted.data('token', t);
            }
            node.text('');
        }

        if (node.text().length === 0) {
            // if node is the last child of the container, empty it. Otherwise, remove the selected node
            if (node.is(':last-child')) {
                node.empty();
            } else {
                try {
                    node.remove();
                } catch {
                    // node is already removed. In some cases, this can be attempted to be removed twice
                }
            }
            if (last_inserted) {
                this.displayed_input.find('.search-input-tag-input:last-of-type').focus();
                this.refreshPopover();
            }
        } else {
            // place cursor at end of the selected_node text
            this.placeCaretAtEndOfNode(node.get(0));
        }

        this.displayed_input.trigger('result_change');

        return last_inserted;
    }

    transformTagTermFromAutocomplete(node) {
        const tokenized = this.tokenizer.tokenize(node.text());
        const tagged_tokens = tokenized.getTaggedTerms();
        const last_token = tagged_tokens[tagged_tokens.length - 1];
        const autocomplete_info = this.tokenizer.getAutocomplete(last_token.tag);

        if (autocomplete_info) {
            autocomplete_info.forEach((t) => {
                const autocomplete_value = $(`<span>${t}</span>`).text();
                const term_text = $(`<span>${last_token.term}</span>`).text();
                if (autocomplete_value.localeCompare(term_text, undefined, { sensitivity: 'accent' }) === 0) {
                    last_token.term = t;
                    const replacement = $(this.tokenToTagHtml(last_token));
                    replacement.data('token', last_token);
                    node.replaceWith(replacement);
                }
            });
        }
    }

    makeTagEditable(tag) {
        if (tag && tag.hasClass('search-input-tag')) {
            tag.removeClass('search-input-tag');
            tag.addClass('search-input-tag-input');
            tag.attr('contenteditable', 'true');
            const token = tag.data('token');
            tag.empty();
            tag.text(token.raw);
            tag.focus();
            // place cursor at end of the tag text
            this.placeCaretAtEndOfNode(tag.get(0));
            // Refresh popover to get up to date suggestions
            this.refreshPopover();
            this.displayed_input.trigger('result_change');
        }
    }

    getSelectedNode() {
        const selection = document.getSelection();
        let result = null;
        if (selection) {
            result = selection.anchorNode;
            if (result && result.nodeType === Node.TEXT_NODE) {
                result = result.parentNode;
            }
        }
        return result || null;
    }

    isSelectionUntagged() {
        const node = this.getSelectedNode();
        return node !== null && node.classList.contains('search-input-tag-input');
    }

    placeCaretAfterNode(node) {
        if (!node || !node.parentNode) {
            return;
        }
        const nextSibling = node.nextSibling;
        const sel = document.getSelection();
        const range = sel.getRangeAt(0);

        if (sel.rangeCount) {
            range.setStartAfter(nextSibling || node);
            range.collapse(true);

            sel.removeAllRanges();
            sel.addRange(range);

            this.refreshPopover();
        }
    }

    placeCaretAtStartOfNode(node) {
        if (!node || !node.parentNode) {
            return;
        }
        const sel = document.getSelection();
        const range = sel.getRangeAt(0);

        if (sel.rangeCount) {
            range.setStart(node, 0);
            range.collapse(true);

            sel.removeAllRanges();
            sel.addRange(range);

            this.refreshPopover();
        }
    }

    placeCaretAtEndOfNode(node) {
        const selection = document.getSelection();
        const range = document.createRange();

        if (node.lastChild && node.lastChild.nodeType === Node.TEXT_NODE) {
            range.setStart(node.lastChild, node.lastChild.length);
        } else {
            range.setStart(node, node.childNodes.length);
        }
        selection.removeAllRanges();
        selection.addRange(range);

        this.refreshPopover();
    }

    placeCaretInDefaultInput() {
        const default_input = this.displayed_input.find('.search-input-tag-input:last-of-type');
        if (default_input.length > 0) {
            this.placeCaretAtStartOfNode(default_input.get(0));
        }
    }

    getRawInput() {
        let raw_input = '';
        this.displayed_input.find('.search-input-tag').each((i, node) => {
            const n = $(node);
            if (n.data('token') !== undefined) {
                raw_input += `${n.data('token').raw} `;
            }
        });
        return raw_input.trim();
    }

    refreshPopover() {
        const content = this.getPopoverContent();
        this.displayed_input.parent().find('.popover-body').html(content);
    }

    getPopoverContent() {
        const input = this.displayed_input;

        const selected = $(this.getSelectedNode());
        let last_token = null;

        if (this.isSelectionUntagged()) {
            if (selected.closest(input)) {
                const text = selected.text();
                const cursor_pos = document.getSelection().anchorOffset;

                const t = text.slice(0, cursor_pos);
                if (t.endsWith(' ')) {
                    return this.getTagsHelperContent();
                }
                const tokens = this.tokenizer.tokenize(t).tokens;
                const max = Math.max(...tokens.map((token) => {
                    return token.position;
                }));
                last_token = tokens.find((token) => {
                    return token.position === max;
                });
            }
        }

        return (last_token && last_token.tag) ? this.getAutocompleteHelperContent(last_token.tag) : this.getTagsHelperContent();
    }

    getTagsHelperContent() {
        const tags = this.tokenizer.allowed_tags;
        const selected = $(this.getSelectedNode());
        let selected_text = (selected ? selected.text() : '').trim();

        const selected_phrases = selected_text.match(/(?:[^\s"]+|"[^"]*")+/g);
        selected_text = selected_phrases ? selected_phrases[selected_phrases.length - 1] : '';

        let helper = '';
        if (Object.keys(tags).length > 0) {
            helper += '<ul class="list-group tags-list">';
        }
        $.each(tags, (name, info) => {
            if ((this.options.filter_on_type && selected_text.length > 0) && !name.toLowerCase().startsWith(selected_text.toLowerCase())) {
                return; // continue
            }
            const description = info.description || '';
            let prefix_content = '';
            const prefix_count = Object.keys(info.supported_prefixes || {}).length;

            $.each(info.supported_prefixes, (i, prefix) => {
                const custom_prefix = this.tokenizer.options.custom_prefixes[prefix];
                let label = custom_prefix ? (custom_prefix.label || prefix) : prefix;
                if (prefix === this.tokenizer.EXCLUSION_PREFIX) {
                    label = __('Exclude');
                }
                prefix_content += `<button type="button" class="btn btn-outline-secondary btn-sm ${prefix_count > 1 ? 'ms-1' : ''} tag-prefix" title="${label}" data-prefix="${_.escape(prefix)}">${_.escape(prefix)}</button>`;
            });
            helper += `
            <li class="list-group-item list-group-item-action" style="cursor: pointer" data-tag="${_.escape(name)}">
                <div class="d-flex flex-grow-1 justify-content-between">
                   <b>${_.escape(name)}</b>
                   <span>${prefix_content}</span>
                </div>
                <div class="text-muted fst-italic">${_.escape(description)}</div>
            </li>
         `;
        });
        if (Object.keys(tags).length > 0) {
            helper += '</ul>';
        }
        return helper;
    }

    getAutocompleteHelperContent(tag_name) {
        tag_name = tag_name.toLowerCase();
        const tag = this.tokenizer.allowed_tags[tag_name];
        if (tag === undefined) {
            return null;
        }
        const selected = $(this.getSelectedNode());
        const selected_text = (selected ? selected.text() : '').trim();
        const tokens = this.tokenizer.tokenize(selected_text).getTaggedTerms();
        const current_term = (tokens.length > 0 ? tokens[0].term : '').trim();

        let helper = '';
        const autocomplete_values = this.tokenizer.getAutocomplete(tag_name);
        if (autocomplete_values.length > 0) {
            helper += `<ul class="list-group term-suggestions-list" data-tag="${_.escape(tag_name)}">`;
        } else {
            helper = `${_.escape(tag_name.toLowerCase())}: ${_.escape(tag.description)}`;
        }
        $.each(autocomplete_values, (i, v) => {
            if ((this.options.filter_on_type && selected_text.length > 0) && !v.toLowerCase().startsWith(current_term.toLowerCase())) {
                return; // continue
            }
            helper += `<li class="list-group-item list-group-item-action" style="cursor: pointer">${_.escape(v)}</li>`;
        });
        if (autocomplete_values.length > 0) {
            helper += '</ul>';
        }
        return helper;
    }
}


/***/ }),

/***/ 158:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchTokenizer)
/* harmony export */ });
/* harmony import */ var _SearchToken_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _SearchTokenizerResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/**
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2025 Teclib' and contributors.
 * @copyright 2003-2014 by the INDEPNET Development Team.
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




/**
 * Inspired by/rebuilt from https://github.com/tatsuya/search-text-tokenizer
 */
class SearchTokenizer {

    /**
    * @typedef TagDefinition
    * @property {string} description
    * @property {string[]|function} autocomplete_values
    * @property {string[]} supported_prefixes
    */

    /**
    * @typedef TokenizerOptions
    * @property {Object.<string, {}>} custom_prefixes Object of custom prefixes as keys and properties. These characters can be located at the start of a token's tag and will be stripped from the token's tag.
    *    The stripped prefix is then stored in the token's `prefix` property. The properties for the custom prefixes can be unique for the implementation of the tokenizer.
    *    The only built-in properties are `token_color` which can be used by {@link SearchInput} to change the color of the token, and `label` which can be used by {@link SearchInput} for buttons within suggestions.
    */

    /**
    *
    * @param {Object.<string, TagDefinition>} allowed_tags Tags the tokenizer should recognize
    *    The object keys are the tag names. Each tag can have multiple properties to store
    *    additional information such as descriptions.
    * @param {boolean} drop_unallowed_tags If true, unallowed tags are ignored. If false, the token is treated as a plain term.
    * @param {TokenizerOptions} options Additional tokenizer options
    */
    constructor(allowed_tags = {}, drop_unallowed_tags = false, options = {}) {
        this.token_pattern = /([^\s"']?\w+:)?("[^"]*"|'[^']*'|[^\s]+)/g;
        this.EXCLUSION_PREFIX = '!';
        this.allowed_tags = allowed_tags;
        this.drop_unallowed_tags = drop_unallowed_tags;

        this.options = Object.assign({
            custom_prefixes: {},
        }, options);

        // Ignore custom prefixes used by core
        delete this.options.custom_prefixes[this.EXCLUSION_PREFIX];
        delete this.options.custom_prefixes['\''];
        delete this.options.custom_prefixes['"'];
    }

    /**
    * Check if a given tag is allowed by the tokenizer
    * @param {string|null} tag
    * @return {boolean}
    */
    isAllowedTag(tag) {
        if (tag === null || tag === undefined) {
            return true;
        }
        const result = Object.keys(this.allowed_tags).length === 0 || (tag in this.allowed_tags);
        return result;
    }

    clearAutocomplete() {
        Object.keys(this.allowed_tags).forEach((k) => {
            this.allowed_tags[k].autocomplete_values = [];
        });
    }

    setAutocomplete(tag, values) {
        if (tag in this.allowed_tags) {
            this.allowed_tags[tag].autocomplete_values = values;
        }
    }

    /**
    * Get autocomplete values for a given tag
    * @param tag
    * @return {string[]}
    */
    getAutocomplete(tag) {
        let result = [];
        if (tag in this.allowed_tags) {
            if (typeof this.allowed_tags[tag].autocomplete_values === 'function') {
                result = this.allowed_tags[tag].autocomplete_values();
            } else {
                result = this.allowed_tags[tag].autocomplete_values;
            }
        }
        return result || [];
    }

    /**
    *
    * @param {string} input
    * @returns {SearchTokenizerResult}
    */
    tokenize(input) {
        input = input || '';
        input = input.trim();

        const result = new _SearchTokenizerResult_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

        let token = null;
        let pos = 0;

        while ((token = this.token_pattern.exec(input)) !== null) {
            let is_exclusion = false;
            let tag = token[1] || null;
            let term = token[2].trim();

            // Tag without the separator
            if (tag) {
                tag = tag.slice(0, -1);
            }

            if (tag === null && term.endsWith(':')) {
                tag = term.slice(0, -1);
                term = '';
            }

            let token_prefix = null;
            // Handle custom prefixes
            if (tag && tag.length > 1) {
                const custom_prefix = tag.slice(0, 1);
                const allowed_prefixes = Object.keys(this.options.custom_prefixes);
                if (custom_prefix === this.EXCLUSION_PREFIX) {
                    is_exclusion = true;
                    tag = tag.slice(1);
                } else {
                    if (allowed_prefixes.includes(custom_prefix)) {
                        const new_tag = tag.slice(1);
                        if (this.allowed_tags[new_tag] && this.allowed_tags[new_tag].supported_prefixes.includes(custom_prefix)) {
                            token_prefix = custom_prefix;
                            tag = new_tag;
                        }
                    }
                }
            }

            // Remove exclusion if the tag doesn't support that prefix
            if (!this.allowed_tags[tag] || !(this.allowed_tags[tag].supported_prefixes || []).includes(this.EXCLUSION_PREFIX)) {
                is_exclusion = false;
            }

            term = term || '';
            if (term.length > 0) {
                if (/^".+"$/.test(term)) {
                    term = term.trim().replace(/^"/, '').replace(/"$/, '').trim();
                }
                if (/^'.+'$/.test(term)) {
                    term = term.trim().replace(/^'/, '').replace(/'$/, '').trim();
                }
            }

            if (this.isAllowedTag(tag)) {
                result.tokens.push(new _SearchToken_js__WEBPACK_IMPORTED_MODULE_0__["default"](term, tag, is_exclusion, pos++, token[0], token_prefix));
            } else if (!this.drop_unallowed_tags) {
                result.tokens.push(new _SearchToken_js__WEBPACK_IMPORTED_MODULE_0__["default"](token[0], null, false, pos++, token[0]));
            }
        }

        return result;
    }
}


/***/ }),

/***/ 159:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchToken)
/* harmony export */ });
/**
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2025 Teclib' and contributors.
 * @copyright 2003-2014 by the INDEPNET Development Team.
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

class SearchToken {
    constructor(term, tag, exclusion, position, raw, prefix = null) {
        this.term = term;
        this.tag = tag || null; // Prevent undefined value
        this.exclusion = exclusion;
        this.position = position;
        this.raw = raw;
        this.prefix = prefix;
    }
}


/***/ }),

/***/ 160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchTokenizerResult)
/* harmony export */ });
/**
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2025 Teclib' and contributors.
 * @copyright 2003-2014 by the INDEPNET Development Team.
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

class SearchTokenizerResult {

    constructor() {
        /**
       * @type {SearchToken[]}
       */
        this.tokens = [];
    }

    /**
    * Get all tokens with a specific tag
    * @param name
    * @return {SearchToken[]}
    */
    getTag(name) {
        return this.tokens.filter(t => t.tag === name);
    }

    /**
    * Get all tokens with a tag
    * @return {SearchToken[]}
    */
    getTaggedTerms() {
        return this.tokens.filter(t => t.tag !== null);
    }

    /**
    * Get all tokens without a tag
    * @return {SearchToken[]}
    */
    getUntaggedTerms() {
        return this.tokens.filter(t => t.tag === null);
    }

    /**
    * Get all untagged terms as a concatenated string
    *
    * The terms in the resulting string should be in the same order they appeared in the tokenizer input string.
    * @return {string}
    */
    getFullPhrase() {
        let full_phrase = '';
        this.getUntaggedTerms().forEach(t => full_phrase += ` ${t.term}`);
        return full_phrase.trim();
    }
}


/***/ }),

/***/ 161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_0_id_a9b680ba_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);


/***/ }),

/***/ 162:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_0_id_a9b680ba_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(163);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_0_id_a9b680ba_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_0_id_a9b680ba_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_0_id_a9b680ba_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_0_id_a9b680ba_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 163:
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
___CSS_LOADER_EXPORT___.push([module.id, `.kanban[data-v-a9b680ba] {
  position: relative;
  height: 100%;
  --toolbar-margin: 15px;
  --toolbar-padding: 10px;
}
.kanban .kanban-toolbar[data-v-a9b680ba] {
  display: flex;
  margin-bottom: var(--toolbar-margin);
  font-size: 14px;
  padding: var(--toolbar-padding);
}
.kanban .kanban-toolbar select[name=kanban-board-switcher][data-v-a9b680ba] {
  appearance: auto;
}
.kanban .kanban-toolbar .fas[data-v-a9b680ba],
.kanban .kanban-toolbar .fa-solid[data-v-a9b680ba] {
  margin: auto auto auto 10px;
  font-size: 1.2em;
  cursor: pointer;
}
.kanban .kanban-toolbar .kanban-columns-list[data-v-a9b680ba] {
  max-height: 50vh;
  overflow-y: auto;
  margin: 10px 0;
  list-style: none;
}
.kanban .kanban-toolbar .kanban-columns-list li[data-v-a9b680ba] {
  padding: 5px 0 0;
}
.kanban .kanban-container[data-v-a9b680ba] {
  overflow-x: auto;
  overflow-y: hidden;
  height: calc(100vh - var(--glpi-contextbar-height) - var(--glpi-content-margin) - (var(--toolbar-margin) + var(--toolbar-padding) + 1.125rem + 1.2rem + 2px));
}
.kanban .kanban-container .kanban-dropdown[data-v-a9b680ba] {
  position: fixed;
  width: max-content;
  min-width: 100px;
  text-align: left;
  list-style: none;
  padding-left: 0;
}
.kanban .kanban-container .kanban-dropdown li[data-v-a9b680ba] {
  margin-top: 2px;
  position: relative;
}
.kanban .kanban-container .kanban-dropdown li a[data-v-a9b680ba],
.kanban .kanban-container .kanban-dropdown li span[data-v-a9b680ba] {
  color: inherit;
  cursor: pointer;
  display: block;
}
.kanban .kanban-container .kanban-dropdown li a i[data-v-a9b680ba],
.kanban .kanban-container .kanban-dropdown li span i[data-v-a9b680ba] {
  color: inherit;
}
.kanban .kanban-container .kanban-dropdown li ul[data-v-a9b680ba] {
  position: absolute;
  left: 100%;
  top: 0;
  display: block;
  width: max-content;
  min-width: 100px;
  margin-left: 1px;
  list-style: none;
}
.kanban .kanban-container .kanban-dropdown li i[data-v-a9b680ba] {
  margin-right: 1em;
}
.kanban .kanban-container .kanban-dropdown li[data-v-a9b680ba]:first-of-type {
  margin-top: 0;
}
.kanban .kanban-container .kanban-dropdown li.dropdown-trigger a[data-v-a9b680ba]::after {
  content: "\\f054";
  font: var(--fa-font-solid);
  padding-left: 10px;
}
.kanban .kanban-container .kanban-columns[data-v-a9b680ba] {
  display: flex;
  overflow-x: auto;
  height: calc(100% - 75px);
}
.kanban .kanban-color-preview[data-v-a9b680ba] {
  width: 1em;
  height: 1em;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
  background-color: var(--status-color);
}
.flex-break[data-v-a9b680ba] {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./js/src/vue/Kanban/Kanban.vue","webpack://./Kanban.vue"],"names":[],"mappings":"AACI;EACI,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,uBAAA;ACAR;ADEQ;EACI,aAAA;EACA,oCAAA;EACA,eAAA;EACA,+BAAA;ACAZ;ADEY;EACI,gBAAA;ACAhB;ADGY;;EAEI,2BAAA;EACA,gBAAA;EACA,eAAA;ACDhB;ADIY;EACI,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;ACFhB;ADIgB;EACI,gBAAA;ACFpB;ADOQ;EACI,gBAAA;EACA,kBAAA;EACA,6JAAA;ACLZ;ADOY;EACI,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;ACLhB;ADOgB;EACI,eAAA;EACA,kBAAA;ACLpB;ADOoB;;EAEI,cAAA;EACA,eAAA;EACA,cAAA;ACLxB;ADOwB;;EACI,cAAA;ACJ5B;ADQoB;EACI,kBAAA;EACA,UAAA;EACA,MAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;ACNxB;ADSoB;EACI,iBAAA;ACPxB;ADWgB;EACI,aAAA;ACTpB;ADaoB;EACI,gBAAA;EACA,0BAAA;EACA,kBAAA;ACXxB;ADgBY;EACI,aAAA;EACA,gBAAA;EACA,yBAAA;ACdhB;ADkBQ;EACI,UAAA;EACA,WAAA;EACA,qBAAA;EACA,iBAAA;EACA,sBAAA;EACA,qCAAA;AChBZ;ADoBI;EACI,WAAA;ACjBR","sourcesContent":["\n    .kanban {\n        position: relative;\n        height: 100%;\n        --toolbar-margin: 15px;\n        --toolbar-padding: 10px;\n\n        .kanban-toolbar {\n            display: flex;\n            margin-bottom: var(--toolbar-margin);\n            font-size: 14px;\n            padding: var(--toolbar-padding);\n\n            select[name=\"kanban-board-switcher\"] {\n                appearance: auto;\n            }\n\n            .fas,\n            .fa-solid {\n                margin: auto auto auto 10px;\n                font-size: 1.2em;\n                cursor: pointer;\n            }\n\n            .kanban-columns-list {\n                max-height: 50vh;\n                overflow-y: auto;\n                margin: 10px 0;\n                list-style: none;\n\n                li {\n                    padding: 5px 0 0;\n                }\n            }\n        }\n\n        .kanban-container {\n            overflow-x: auto;\n            overflow-y: hidden;\n            height: calc(100vh - var(--glpi-contextbar-height) - var(--glpi-content-margin) - (var(--toolbar-margin) + var(--toolbar-padding) + (0.5625rem * 2) + 1.2rem + 2px));\n\n            .kanban-dropdown {\n                position: fixed;\n                width: max-content;\n                min-width: 100px;\n                text-align: left;\n                list-style: none;\n                padding-left: 0;\n\n                li {\n                    margin-top: 2px;\n                    position: relative;\n\n                    a,\n                    span {\n                        color: inherit;\n                        cursor: pointer;\n                        display: block;\n\n                        i {\n                            color: inherit;\n                        }\n                    }\n\n                    ul {\n                        position: absolute;\n                        left: 100%;\n                        top: 0;\n                        display: block;\n                        width: max-content;\n                        min-width: 100px;// Use outline instead of border on submenus to avoid them being aligned off by one pixel\n                        margin-left: 1px;\n                        list-style: none;\n                    }\n\n                    i {\n                        margin-right: 1em;\n                    }\n                }\n\n                li:first-of-type {\n                    margin-top: 0;\n                }\n\n                li.dropdown-trigger {\n                    a::after {\n                        content: \"\\f054\";\n                        font: var(--fa-font-solid);\n                        padding-left: 10px;\n                    }\n                }\n            }\n\n            .kanban-columns {\n                display: flex;\n                overflow-x: auto;\n                height: calc(100% - 75px);\n            }\n        }\n\n        .kanban-color-preview {\n            width: 1em;\n            height: 1em;\n            display: inline-block;\n            margin-right: 5px;\n            vertical-align: middle;\n            background-color: var(--status-color);\n        }\n    }\n\n    .flex-break {\n        width: 100%;\n    }\n",".kanban {\n  position: relative;\n  height: 100%;\n  --toolbar-margin: 15px;\n  --toolbar-padding: 10px;\n}\n.kanban .kanban-toolbar {\n  display: flex;\n  margin-bottom: var(--toolbar-margin);\n  font-size: 14px;\n  padding: var(--toolbar-padding);\n}\n.kanban .kanban-toolbar select[name=kanban-board-switcher] {\n  appearance: auto;\n}\n.kanban .kanban-toolbar .fas,\n.kanban .kanban-toolbar .fa-solid {\n  margin: auto auto auto 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n}\n.kanban .kanban-toolbar .kanban-columns-list {\n  max-height: 50vh;\n  overflow-y: auto;\n  margin: 10px 0;\n  list-style: none;\n}\n.kanban .kanban-toolbar .kanban-columns-list li {\n  padding: 5px 0 0;\n}\n.kanban .kanban-container {\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: calc(100vh - var(--glpi-contextbar-height) - var(--glpi-content-margin) - (var(--toolbar-margin) + var(--toolbar-padding) + 1.125rem + 1.2rem + 2px));\n}\n.kanban .kanban-container .kanban-dropdown {\n  position: fixed;\n  width: max-content;\n  min-width: 100px;\n  text-align: left;\n  list-style: none;\n  padding-left: 0;\n}\n.kanban .kanban-container .kanban-dropdown li {\n  margin-top: 2px;\n  position: relative;\n}\n.kanban .kanban-container .kanban-dropdown li a,\n.kanban .kanban-container .kanban-dropdown li span {\n  color: inherit;\n  cursor: pointer;\n  display: block;\n}\n.kanban .kanban-container .kanban-dropdown li a i,\n.kanban .kanban-container .kanban-dropdown li span i {\n  color: inherit;\n}\n.kanban .kanban-container .kanban-dropdown li ul {\n  position: absolute;\n  left: 100%;\n  top: 0;\n  display: block;\n  width: max-content;\n  min-width: 100px;\n  margin-left: 1px;\n  list-style: none;\n}\n.kanban .kanban-container .kanban-dropdown li i {\n  margin-right: 1em;\n}\n.kanban .kanban-container .kanban-dropdown li:first-of-type {\n  margin-top: 0;\n}\n.kanban .kanban-container .kanban-dropdown li.dropdown-trigger a::after {\n  content: \"\\f054\";\n  font: var(--fa-font-solid);\n  padding-left: 10px;\n}\n.kanban .kanban-container .kanban-columns {\n  display: flex;\n  overflow-x: auto;\n  height: calc(100% - 75px);\n}\n.kanban .kanban-color-preview {\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  margin-right: 5px;\n  vertical-align: middle;\n  background-color: var(--status-color);\n}\n\n.flex-break {\n  width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_1_id_a9b680ba_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);


/***/ }),

/***/ 165:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_1_id_a9b680ba_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(166);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_1_id_a9b680ba_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_1_id_a9b680ba_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_1_id_a9b680ba_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Kanban_vue_vue_type_style_index_1_id_a9b680ba_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 166:
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
___CSS_LOADER_EXPORT___.push([module.id, `.kanban .item-details-panel {
  height: 100%;
}
.kanban .item-details-panel ul.team-list li img {
  border-radius: 50%;
}
.kanban .item-details-panel ul.team-list li button {
  display: none;
  padding: unset;
}
.kanban .item-details-panel ul.team-list li button:hover,
.kanban .item-details-panel ul.team-list li button i:hover, .kanban .item-details-panel ul.team-list li:hover button {
  display: inline-flex;
}
.kanban .item-details-panel ul.team-list li .member-details > span {
  margin-right: 2rem;
}`, "",{"version":3,"sources":["webpack://./js/src/vue/Kanban/Kanban.vue","webpack://./Kanban.vue"],"names":[],"mappings":"AACI;EACI,YAAA;ACAR;ADGY;EACI,kBAAA;ACDhB;ADIY;EACI,aAAA;EACA,cAAA;ACFhB;ADKY;;EAGI,oBAAA;ACJhB;ADOY;EACI,kBAAA;ACLhB","sourcesContent":["\n    .kanban .item-details-panel {\n        height: 100%;\n\n        ul.team-list li {\n            img {\n                border-radius: 50%;\n            }\n\n            button {\n                display: none;\n                padding: unset;\n            }\n\n            button:hover,\n            button i:hover,\n            &:hover button {\n                display: inline-flex;\n            }\n\n            .member-details > span {\n                margin-right: 2rem;\n            }\n        }\n    }\n",".kanban .item-details-panel {\n  height: 100%;\n}\n.kanban .item-details-panel ul.team-list li img {\n  border-radius: 50%;\n}\n.kanban .item-details-panel ul.team-list li button {\n  display: none;\n  padding: unset;\n}\n.kanban .item-details-panel ul.team-list li button:hover,\n.kanban .item-details-panel ul.team-list li button i:hover, .kanban .item-details-panel ul.team-list li:hover button {\n  display: inline-flex;\n}\n.kanban .item-details-panel ul.team-list li .member-details > span {\n  margin-right: 2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=Kanban-Kanban-vue-ff387a719d9aadb1bb04.js.map