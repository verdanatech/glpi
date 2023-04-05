"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridStackDDJQueryUI = exports.$ = void 0;
var gridstack_dd_1 = require("../gridstack-dd");
// export jq symbols see
// https://stackoverflow.com/questions/35345760/importing-jqueryui-with-typescript-and-requirejs
// https://stackoverflow.com/questions/33998262/jquery-ui-and-webpack-how-to-manage-it-into-module
//
// Note: user should be able to bring their own by changing their webpack aliases like
// alias: {
//   'jquery': 'gridstack/dist/jq/jquery.js',
//   'jquery-ui': 'gridstack/dist/jq/jquery-ui.js',
//   'jquery.ui': 'gridstack/dist/jq/jquery-ui.js',
//   'jquery.ui.touch-punch': 'gridstack/dist/jq/jquery.ui.touch-punch.js',
// },
var $ = require("jquery"); // compile this in... having issues TS/ES6 app would include instead
exports.$ = $;
require("jquery-ui");
require("jquery.ui.touch-punch"); // include for touch mobile devices
// export our base class (what user should use) and all associated types
__exportStar(require("../gridstack-dd"), exports);
/**
 * legacy Jquery-ui based drag'n'drop plugin.
 */
var GridStackDDJQueryUI = /** @class */ (function (_super) {
    __extends(GridStackDDJQueryUI, _super);
    function GridStackDDJQueryUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridStackDDJQueryUI.prototype.resizable = function (el, opts, key, value) {
        var $el = $(el);
        if (opts === 'enable') {
            $el.resizable().resizable(opts);
        }
        else if (opts === 'disable' || opts === 'destroy') {
            if ($el.data('ui-resizable')) { // error to call destroy if not there
                $el.resizable(opts);
            }
        }
        else if (opts === 'option') {
            $el.resizable(opts, key, value);
        }
        else {
            var grid = el.gridstackNode.grid;
            var handles = $el.data('gs-resize-handles') ? $el.data('gs-resize-handles') : grid.opts.resizable.handles;
            $el.resizable(__assign(__assign(__assign({}, grid.opts.resizable), { handles: handles }), {
                start: opts.start,
                stop: opts.stop,
                resize: opts.resize // || function() {}
            }));
        }
        return this;
    };
    GridStackDDJQueryUI.prototype.draggable = function (el, opts, key, value) {
        var $el = $(el);
        if (opts === 'enable') {
            $el.draggable().draggable('enable');
        }
        else if (opts === 'disable' || opts === 'destroy') {
            if ($el.data('ui-draggable')) { // error to call destroy if not there
                $el.draggable(opts);
            }
        }
        else if (opts === 'option') {
            $el.draggable(opts, key, value);
        }
        else {
            var grid = el.gridstackNode.grid;
            $el.draggable(__assign(__assign({}, grid.opts.draggable), {
                containment: (grid.opts._isNested && !grid.opts.dragOut) ?
                    $(grid.el).parent() : (grid.opts.draggable.containment || null),
                start: opts.start,
                stop: opts.stop,
                drag: opts.drag // || function() {}
            }));
        }
        return this;
    };
    GridStackDDJQueryUI.prototype.dragIn = function (el, opts) {
        var $el = $(el); // workaround Type 'string' is not assignable to type 'PlainObject<any>' - see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/29312
        $el.draggable(opts);
        return this;
    };
    GridStackDDJQueryUI.prototype.droppable = function (el, opts, key, value) {
        var $el = $(el);
        if (typeof opts.accept === 'function' && !opts._accept) {
            // convert jquery event to generic element
            opts._accept = opts.accept;
            opts.accept = function ($el) { return opts._accept($el.get(0)); };
        }
        if (opts === 'disable' || opts === 'destroy') {
            if ($el.data('ui-droppable')) { // error to call destroy if not there
                $el.droppable(opts);
            }
        }
        else {
            $el.droppable(opts, key, value);
        }
        return this;
    };
    GridStackDDJQueryUI.prototype.isDroppable = function (el) {
        var $el = $(el);
        return Boolean($el.data('ui-droppable'));
    };
    GridStackDDJQueryUI.prototype.isDraggable = function (el) {
        var $el = $(el);
        return Boolean($el.data('ui-draggable'));
    };
    GridStackDDJQueryUI.prototype.isResizable = function (el) {
        var $el = $(el);
        return Boolean($el.data('ui-resizable'));
    };
    GridStackDDJQueryUI.prototype.on = function (el, name, callback) {
        var $el = $(el);
        $el.on(name, function (event, ui) { return callback(event, ui.draggable ? ui.draggable[0] : event.target, ui.helper ? ui.helper[0] : null); });
        return this;
    };
    GridStackDDJQueryUI.prototype.off = function (el, name) {
        var $el = $(el);
        $el.off(name);
        return this;
    };
    return GridStackDDJQueryUI;
}(gridstack_dd_1.GridStackDD));
exports.GridStackDDJQueryUI = GridStackDDJQueryUI;
// finally register ourself
gridstack_dd_1.GridStackDD.registerPlugin(GridStackDDJQueryUI);
//# sourceMappingURL=gridstack-dd-jqueryui.js.map