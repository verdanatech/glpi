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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[18],{

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

/***/ 137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_5efa0808__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _Card_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Card_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Card_vue_vue_type_template_id_5efa0808__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"js/src/vue/Kanban/Card.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Card_vue_vue_type_template_id_5efa0808__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Card_vue_vue_type_template_id_5efa0808__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);


/***/ }),

/***/ 139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const _hoisted_1 = ["id"]
const _hoisted_2 = { class: "kanban-item-header d-flex justify-content-between" }
const _hoisted_3 = { class: "kanban-item-title d-flex align-items-center" }
const _hoisted_4 = ["textContent"]
const _hoisted_5 = { class: "dropdown" }
const _hoisted_6 = {
  type: "button",
  class: "kanban-item-overflow-actions cursor-pointer pt-0 b-0",
  "data-bs-toggle": "dropdown",
  "data-bs-auto-close": "outside"
}
const _hoisted_7 = {
  class: "ti ti-dots",
  ref: "btn_overflow"
}
const _hoisted_8 = {
  ref: "card_overflow_dropdown",
  class: "kanban-dropdown dropdown-menu",
  role: "menu"
}
const _hoisted_9 = {
  key: 0,
  class: "kanban-item-goto dropdown-item"
}
const _hoisted_10 = ["href"]
const _hoisted_11 = ["textContent"]
const _hoisted_12 = ["innerHTML"]
const _hoisted_13 = { class: "d-flex justify-content-between" }
const _hoisted_14 = { class: "kanban-item-team position-relative" }
const _hoisted_15 = ["innerHTML"]
const _hoisted_16 = ["innerHTML"]
const _hoisted_17 = { class: "align-self-center kanban-item-due-date" }
const _hoisted_18 = ["title"]
const _hoisted_19 = ["textContent"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    id: $props.id,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`kanban-item card shadow-none ${$props.read_only ? 'readonly' : ''} ${$setup.is_deleted ? 'deleted' : ''}`)
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.icon)
        }, null, 2 /* CLASS */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          class: "cursor-pointer",
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title),
          onClick: _cache[0] || (_cache[0] = $event => ($setup.emit('kanban:card_show_details')))
        }, null, 8 /* PROPS */, _hoisted_4)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", _hoisted_7, null, 512 /* NEED_PATCH */)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [
          ($props.form_link)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_9, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                  href: $props.form_link,
                  class: "w-100"
                }, [
                  _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-share-3" }, null, -1 /* CACHED */)),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Go to')), 1 /* TEXT */)
                ], 8 /* PROPS */, _hoisted_10)
              ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          ($props.rights.canDeleteItem() && $setup.is_deleted)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                key: 1,
                class: "kanban-item-restore dropdown-item cursor-pointer",
                onClick: _cache[1] || (_cache[1] = $event => ($setup.emit('kanban:card_restore')))
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                  _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-trash-off" }, null, -1 /* CACHED */)),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Restore')), 1 /* TEXT */)
                ])
              ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          ($props.rights.canDeleteItem())
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                key: 2,
                class: "kanban-item-remove dropdown-item cursor-pointer",
                onClick: _cache[2] || (_cache[2] = $event => ($setup.emit('kanban:card_delete')))
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
                  _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-trash" }, null, -1 /* CACHED */)),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.is_deleted ? _ctx.__('Purge') : _ctx.__('Delete')), 1 /* TEXT */)
                ])
              ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ], 512 /* NEED_PATCH */)
      ])
    ]),
    ($props.metadata.content)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          class: "kanban-description-preview",
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.metadata.content)
        }, null, 8 /* PROPS */, _hoisted_11))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "kanban-item-content",
      innerHTML: $props.card_content
    }, null, 8 /* PROPS */, _hoisted_12),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.badges_to_show, (member) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: member.hash,
            innerHTML: member.content
          }, null, 8 /* PROPS */, _hoisted_15))
        }), 128 /* KEYED_FRAGMENT */)),
        (Object.values($props.team).length > $props.team_badge_provider.max_team_images)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
              key: 0,
              innerHTML: $props.team_badge_provider.generateOverflowBadge(Object.values($props.team).length - $props.team_badge_provider.max_team_images)
            }, null, 8 /* PROPS */, _hoisted_16))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
        ($props.due_date)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
              key: 0,
              title: _ctx.__('Planned end date')
            }, [
              _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "ti ti-calendar" }, null, -1 /* CACHED */)),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.due_date)
              }, null, 8 /* PROPS */, _hoisted_19)
            ], 8 /* PROPS */, _hoisted_18))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ])
    ])
  ], 10 /* CLASS, PROPS */, _hoisted_1))
}

/***/ }),

/***/ 140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Card_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Card_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
 

/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Rights_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);
/* harmony import */ var _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(143);

    
    

    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Card',
  props: {
        id: {
            type: String,
            required: true
        },
        read_only: {
            type: Boolean,
            required: false,
            default: false
        },
        title: {
            type: String,
            required: true
        },
        title_tooltip: {
            type: String,
            required: false,
            default: undefined
        },
        icon: {
            type: String,
            required: false,
            default: ''
        },
        card_content: {
            type: String,
            required: false,
            default: ''
        },
        team: {
            type: Object,
            required: false,
            default: () => {}
        },
        metadata: {
            type: Object,
            required: false,
            default: () => {}
        },
        form_link: {
            type: String,
            required: false,
            default: undefined
        },
        rights: {
            type: _Rights_js__WEBPACK_IMPORTED_MODULE_1__.Rights,
            required: true
        },
        team_badge_provider: {
            type: _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_2__.TeamBadgeProvider,
            required: true
        },
        due_date: {
            type: String,
            required: false,
            default: undefined
        }
    },
  emits: [
        'kanban:card_delete', 'kanban:card_restore', 'kanban:card_show_details'
    ],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

    const props = __props;

    const emit = __emit;
    const is_deleted = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return !!(props.metadata.is_deleted || 0);
    });
    const card_overflow_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const btn_overflow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    const render_badges = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    const badges_to_show = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (!render_badges.value) {
            return [];
        }
        const members = Object.values(props.team).slice(0, props.team_badge_provider.max_team_images);
        $.each(members, (i, member) => {
            member.content = props.team_badge_provider.getTeamBadge(member);
            member.hash = props.team_badge_provider.getTeamBadgeHash(member);
        });
        return members;
    });

    $(props.team_badge_provider.event_target).on('kanban:team_badge:changed', () => {
        render_badges.value = false;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            render_badges.value = true;
        });
    });

const __returned__ = { props, emit, is_deleted, card_overflow_dropdown, btn_overflow, render_badges, badges_to_show, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, nextTick: vue__WEBPACK_IMPORTED_MODULE_0__.nextTick, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, get Rights() { return _Rights_js__WEBPACK_IMPORTED_MODULE_1__.Rights }, get TeamBadgeProvider() { return _TeamBadgeProvider_js__WEBPACK_IMPORTED_MODULE_2__.TeamBadgeProvider } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 142:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rights: () => (/* binding */ Rights)
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

/**
 * Kanban rights structure
 * @since 10.0.0
 */
class Rights {
    constructor(rights) {
        /**
         * If true, then a button will be added to each column to allow new items to be added.
         * When an item is added, a request is made via AJAX to create the item in the DB.
         * Permissions are re-checked server-side during this request.
         * Users will still be limited by the {@link create_card_limited_columns} right both client-side and server-side.
         * @since 9.5.0
         * @since 10.0.0 Moved to new rights class
         * @type {boolean}
         */
        this.create_item = rights['create_item'] || false;

        /**
         * If true, then a button will be added to each card to allow deleting them and the underlying item directly from the kanban.
         * When a card is deleted, a request is made via AJAX to delete the item in the DB.
         * Permissions are re-checked server-side during this request.
         * @since 10.0.0
         * @type {boolean}
         */
        this.delete_item = rights['delete_item'] || false;

        /**
         * If true, then a button will be added to the add column form that lets the user create a new column.
         * For Projects as an example, it would create a new project state.
         * Permissions are re-checked server-side during this request.
         * @since 9.5.0
         * @since 10.0.0 Moved to new rights class
         * @type {boolean}
         */
        this.create_column = rights['create_column'] || false;

        /**
         * Global permission for being able to modify the Kanban state/view.
         * This includes the order of cards in the columns.
         * @since 9.5.0
         * @since 10.0.0 Moved to new rights class
         * @type {boolean}
         */
        this.modify_view = rights['modify_view'] || false;

        /**
         * Limits the columns that the user can add cards to.
         * By default, it is empty which allows cards to be added to all columns.
         * If you don't want the user to add cards to any column, {@link rights.create_item} should be false.
         * @since 9.5.0
         * @since 10.0.0 Moved to new rights class
         * @type {Array}
         */
        this.create_card_limited_columns = rights['create_card_limited_columns'] || [];

        /**
         * Global right for ordering cards.
         * @since 9.5.0
         * @since 10.0.0 Moved to new rights class
         * @type {boolean}
         */
        this.order_card = rights['order_card'] || false;
    }

    /** @see this.create_item */
    canCreateItem() {
        return this.create_item;
    }

    /** @see this.delete_item */
    canDeleteItem() {
        return this.delete_item;
    }

    /** @see this.create_column */
    canCreateColumn() {
        return this.create_column;
    }

    /** @see this.modify_view */
    canModifyView() {
        return this.modify_view;
    }

    /** @see this.order_card */
    canOrderCard() {
        return this.order_card;
    }

    /** @see this.create_card_limited_columns */
    getAllowedColumnsForNewCards() {
        return this.create_card_limited_columns;
    }
}


/***/ }),

/***/ 143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamBadgeProvider: () => (/* binding */ TeamBadgeProvider)
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

/* global tinycolor */
/* global _ */

class TeamBadgeProvider {
    constructor(display_initials, max_team_images = 3) {
        this.badges = {
            User: {},
            Group: {},
            Supplier: {},
            Contact: {}
        };
        this.user_pictures_to_load = new Set([]);
        this.dark_theme = $('html').attr('data-glpi-theme-dark') === '1';
        /**
         * The size in pixels for the team badges
         * @type {number}
         */
        this.team_image_size = 26;
        this.max_team_images = max_team_images;
        this.display_initials = display_initials;

        /**
         * The event target to use to dispatch and listen for events from this cache including for when a new user picture is loaded and the badge is ready to be re-fetched.
         * @type {EventTarget}
         */
        this.event_target = new EventTarget();
    }

    /**
     * Get a hash for the team member's badge.
     * This can be used to determine if the content of the badge has changed such as when the image isn't loaded initially, but is loaded later.
     * @param team_member The team member
     * @return {string} The hash
     */
    getTeamBadgeHash(team_member) {
        const itemtype = team_member["itemtype"];
        const items_id = team_member["id"];
        const content = this.getTeamBadge(team_member);
        return btoa(encodeURI(itemtype + items_id + content)).slice(0, 8);
    }

    /**
     * Gets the badge to show for the given team member.
     * If the badge wasn't generated before, it will be done at this time and cached for later use.
     * @param {{}} team_member The team member
     * @returns {string} HTML image or icon
     */
    getTeamBadge(team_member) {
        const itemtype = team_member["itemtype"];
        const items_id = team_member["id"];

        // If the picture is already cached, return cache value
        if (this.badges[itemtype] !== undefined && this.badges[itemtype][items_id] !== undefined) {
            return this.badges[itemtype][items_id];
        }

        // Pictures from users
        if (itemtype === 'User') {
            // Display a placeholder and keep track of the image to load it later
            this.user_pictures_to_load.add(items_id);
            this.badges[itemtype][items_id] = this.generateUserBadge(team_member);

            return this.badges[itemtype][items_id];
        }

        // Pictures from groups, supplier, contact
        switch (itemtype) {
            case 'Group':
                this.badges[itemtype][items_id] = this.generateOtherBadge(team_member, 'ti ti-users-group');
                break;
            case 'Supplier':
                this.badges[itemtype][items_id] = this.generateOtherBadge(team_member, 'ti ti-truck-loading');
                break;
            case 'Contact':
                this.badges[itemtype][items_id] = this.generateOtherBadge(team_member, 'ti ti-user');
                break;
            default:
                this.badges[itemtype][items_id] = this.generateOtherBadge(team_member, 'ti ti-user');
        }
        return this.badges[itemtype][items_id];
    }

    /**
     * Attempt to load the user pictures that were previously determined to be needed when a badge was requested.
     */
    fetchRequiredUserPictures() {
        // Get user ids for which we must load their pictures
        const users_ids = Array.from(this.user_pictures_to_load.values());

        if (users_ids.length === 0) {
            // Nothing to be loaded
            return;
        }

        // Clear "to load" list
        this.user_pictures_to_load.clear();

        $.ajax({
            type: 'POST', // Too much data may break GET limit
            url: `${CFG_GLPI['root_doc']}/ajax/getUserPicture.php`,
            data: {
                users_id: users_ids,
                size: this.team_image_size,
            }
        }).done((data) => {
            const to_reload = [];
            Object.keys(users_ids).forEach((user_id) => {
                if (data[user_id] !== undefined) {
                    // Store new image in cache
                    this.badges['User'][user_id] = `<span>${_.escape(data[user_id])}</span>`;
                    to_reload.push(user_id);
                }
            });
            this.event_target.dispatchEvent(new CustomEvent('kanban:team_badge:changed', {
                detail: {
                    User: to_reload
                }
            }));
        });
    }

    /**
     * Compute a new badge color or retrieve the cached color from session storage.
     * @param team_member The team member
     * @returns {string} The color to use for the badge
     */
    getBadgeColor(team_member) {
        let cached_colors = JSON.parse(window.sessionStorage.getItem('badge_colors'));
        const itemtype = team_member['itemtype'];
        const baseColor = Math.random();
        const lightness = (Math.random() * 10) + (this.dark_theme ? 25 : 70);
        let bg_color = tinycolor(`hsl(${baseColor * 360}, 100%, ${lightness}%)`).toHexString();

        if (cached_colors !== null && cached_colors[itemtype] !== null && cached_colors[itemtype][team_member['id']]) {
            bg_color = cached_colors[itemtype][team_member['id']];
        } else {
            if (cached_colors === null) {
                cached_colors = {
                    User: {},
                    Group: {},
                    Supplier: {},
                    Contact: {},
                    _dark_theme: this.dark_theme
                };
            }
            cached_colors[itemtype][team_member['id']] = bg_color;
            window.sessionStorage.setItem('badge_colors', JSON.stringify(cached_colors));
        }

        return bg_color;
    }

    getBadgeCanvas(bg_color) {
        const canvas = document.createElement('canvas');
        canvas.width = this.team_image_size;
        canvas.height = this.team_image_size;
        const context = canvas.getContext('2d');
        context.strokeStyle = "#f1f1f1";
        context.fillStyle = bg_color;
        context.beginPath();
        context.arc(this.team_image_size / 2, this.team_image_size / 2, this.team_image_size / 2, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = this.dark_theme ? 'white' : 'black';
        context.textAlign = 'center';
        context.font = `bold ${this.team_image_size / 2}px sans-serif`;
        context.textBaseline = 'middle';
        return canvas;
    }

    generateUserBadge(team_member) {
        let initials = "";
        if (team_member["firstname"]) {
            initials += team_member["firstname"][0];
        }
        if (team_member["realname"]) {
            initials += team_member["realname"][0];
        }
        // Force uppercase initals
        initials = initials.toUpperCase();

        if (!this.display_initials || initials.length === 0) {
            return this.generateOtherBadge(team_member, 'ti ti-user');
        }

        const canvas = this.getBadgeCanvas(this.getBadgeColor(team_member));
        const context = canvas.getContext('2d');
        context.fillText(initials, this.team_image_size / 2, this.team_image_size / 2);
        const src = canvas.toDataURL("image/png");
        const name = team_member['name'];
        return `<span><img src="${_.escape(src)}" title="${_.escape(name)}" data-bs-toggle="tooltip" data-bs-placement="top" data-placeholder-users-id="${_.escape(team_member["id"])}"/></span>`;
    }

    /**
     * Generate team member icon based on its name and a FontAwesome icon.
     * @param {{}} team_member The team member
     * @param {string} icon FontAwesome icon to use for this badge
     * @return {string} HTML icon of the generated badge
     */
    generateOtherBadge(team_member, icon) {
        const bg_color = this.getBadgeColor(team_member);
        const name = team_member['name'];

        return `
            <span class="badge badge-pill" style="background-color: ${_.escape(bg_color)}; font-size: ${(this.team_image_size / 2)}px; height: 26px; padding: 0.25em;">
                <i class="${_.escape(icon)}" title="${_.escape(name)}" data-bs-toggle="tooltip" data-bs-placement="top"></i>
            </span>
        `;
    }

    /**
     * Generate a badge to indicate that 'overflow_count' number of team members are not shown on the Kanban item.
     * @param overflow_count Number of members without badges on the Kanban item
     * @return {string} HTML image of the generated overflow badge
     */
    generateOverflowBadge(overflow_count) {
        // Create fill color based on theme type
        const lightness = (this.dark_theme ? 40 : 80);
        const canvas = this.getBadgeCanvas(`hsl(255, 0%, ${lightness}%, 1)`);
        const context = canvas.getContext('2d');
        context.fillText(`+${overflow_count}`, this.team_image_size / 2, this.team_image_size / 2);
        const src = canvas.toDataURL("image/png");
        return `<span class="position-relative"><img src="${_.escape(src)}" title="${__('%d other team members').replace('%d', overflow_count)}" data-bs-toggle="tooltip" data-bs-placement="top"></span>`;
    }
}


/***/ })

}]);
//# sourceMappingURL=Kanban-Card-vue-7b2e52f7d0c94778d794.js.map