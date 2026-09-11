/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1272
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDBaseImplement: () => (/* binding */ DDBaseImplement)
/* harmony export */ });
/**
 * dd-base-impl.ts 12.6.0
 * Copyright (c) 2021-2025  Alain Dumesny - see GridStack root license
 */
/**
 * Abstract base class for all drag & drop implementations.
 * Provides common functionality for event handling, enable/disable state,
 * and lifecycle management used by draggable, droppable, and resizable implementations.
 */
class DDBaseImplement {
    constructor() {
        /** @internal */
        this._eventRegister = {};
    }
    /**
     * Returns the current disabled state.
     * Note: Use enable()/disable() methods to change state as other operations need to happen.
     */
    get disabled() { return this._disabled; }
    /**
     * Register an event callback for the specified event.
     *
     * @param event - Event name to listen for
     * @param callback - Function to call when event occurs
     */
    on(event, callback) {
        this._eventRegister[event] = callback;
    }
    /**
     * Unregister an event callback for the specified event.
     *
     * @param event - Event name to stop listening for
     */
    off(event) {
        delete this._eventRegister[event];
    }
    /**
     * Enable this drag & drop implementation.
     * Subclasses should override to perform additional setup.
     */
    enable() {
        this._disabled = false;
    }
    /**
     * Disable this drag & drop implementation.
     * Subclasses should override to perform additional cleanup.
     */
    disable() {
        this._disabled = true;
    }
    /**
     * Destroy this drag & drop implementation and clean up resources.
     * Removes all event handlers and clears internal state.
     */
    destroy() {
        delete this._eventRegister;
    }
    /**
     * Trigger a registered event callback if one exists and the implementation is enabled.
     *
     * @param eventName - Name of the event to trigger
     * @param event - DOM event object to pass to the callback
     * @returns Result from the callback function, if any
     */
    triggerEvent(eventName, event) {
        if (!this.disabled && this._eventRegister && this._eventRegister[eventName])
            return this._eventRegister[eventName](event);
    }
}
//# sourceMappingURL=dd-base-impl.js.map

/***/ },

/***/ 1273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDDraggable: () => (/* binding */ DDDraggable)
/* harmony export */ });
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1267);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1264);
/* harmony import */ var _dd_base_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1272);
/* harmony import */ var _dd_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1271);
/**
 * dd-draggable.ts 12.6.0
 * Copyright (c) 2021-2025  Alain Dumesny - see GridStack root license
 */




// make sure we are not clicking on known object that handles mouseDown
const skipMouseDown = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
// let count = 0; // TEST
class DDDraggable extends _dd_base_impl__WEBPACK_IMPORTED_MODULE_2__.DDBaseImplement {
    constructor(el, option = {}) {
        super();
        this.el = el;
        this.option = option;
        /** @internal */
        this.dragTransform = {
            xScale: 1,
            yScale: 1,
            xOffset: 0,
            yOffset: 0
        };
        /** @internal single tick of the auto-scroll animation loop */
        this._autoScrollTick = () => {
            const el = this.helper;
            const scrollCont = this._autoScrollContainer;
            if (!el || !scrollCont) {
                this._stopScrolling();
                return;
            }
            const clipping = this._getClipping(el, scrollCont);
            if (clipping === 0) {
                this._stopScrolling();
                return;
            }
            if (!this._autoScrollMaxSpeed) {
                const viewportH = window.innerHeight || document.documentElement.clientHeight;
                this._autoScrollMaxSpeed = Math.max(viewportH / 150, 4);
            }
            const absPx = Math.abs(clipping);
            const speed = Math.min(absPx * 0.5, this._autoScrollMaxSpeed);
            const scrollAmount = clipping > 0 ? speed : -speed;
            const prevScroll = scrollCont.scrollTop;
            scrollCont.scrollTop += scrollAmount;
            if (scrollCont.scrollTop === prevScroll) {
                this._stopScrolling();
                return;
            }
            if (this.dragging && this.lastDrag) {
                this._dragFollow(this.lastDrag);
                this._callDrag(this.lastDrag);
            }
            this._autoScrollAnimId = requestAnimationFrame(this._autoScrollTick);
        };
        // get the element that is actually supposed to be dragged by
        const handleName = option?.handle?.substring(1);
        const n = el.gridstackNode;
        this.dragEls = !handleName || el.classList.contains(handleName) ? [el] : (n?.subGrid ? [el.querySelector(option.handle) || el] : this.getAllHandles());
        if (this.dragEls.length === 0) {
            this.dragEls = [el];
        }
        // create var event binding so we can easily remove and still look like TS methods (unlike anonymous functions)
        this._mouseDown = this._mouseDown.bind(this);
        this._mouseMove = this._mouseMove.bind(this);
        this._mouseUp = this._mouseUp.bind(this);
        this._keyEvent = this._keyEvent.bind(this);
        this.enable();
    }
    /** return all handles omitting other nested `.grid-stack-item` children (in case node.subGrid isn't set for some reason) */
    getAllHandles() {
        return Array.from(this.el.querySelectorAll(this.option.handle)).filter((node) => {
            if (!(node instanceof HTMLElement))
                return false;
            const owner = node.closest('.grid-stack-item');
            return owner === this.el || !owner;
        });
    }
    on(event, callback) {
        super.on(event, callback);
    }
    off(event) {
        super.off(event);
    }
    enable() {
        if (this.disabled === false)
            return;
        super.enable();
        this.dragEls.forEach(dragEl => {
            dragEl.addEventListener('mousedown', this._mouseDown);
            if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
                dragEl.addEventListener('touchstart', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchstart);
                dragEl.addEventListener('pointerdown', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerdown);
                // dragEl.style.touchAction = 'none'; // not needed unlike pointerdown doc comment
            }
        });
        this.el.classList.remove('ui-draggable-disabled');
    }
    disable(forDestroy = false) {
        if (this.disabled === true)
            return;
        super.disable();
        this.dragEls.forEach(dragEl => {
            dragEl.removeEventListener('mousedown', this._mouseDown);
            if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
                dragEl.removeEventListener('touchstart', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchstart);
                dragEl.removeEventListener('pointerdown', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerdown);
            }
        });
        if (!forDestroy)
            this.el.classList.add('ui-draggable-disabled');
    }
    destroy() {
        if (this.dragTimeout)
            window.clearTimeout(this.dragTimeout);
        delete this.dragTimeout;
        if (this.mouseDownEvent)
            this._mouseUp(this.mouseDownEvent);
        this.disable(true);
        delete this.el;
        delete this.helper;
        delete this.option;
        super.destroy();
    }
    updateOption(opts) {
        Object.keys(opts).forEach(key => this.option[key] = opts[key]);
        return this;
    }
    /** @internal call when mouse goes down before a dragstart happens */
    _mouseDown(e) {
        // if real brower event (trusted:true vs false for our simulated ones) and we didn't correctly clear the last touch event, clear things up
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.DDTouch.touchHandled && e.isTrusted)
            _dd_touch__WEBPACK_IMPORTED_MODULE_3__.DDTouch.touchHandled = false;
        // don't let more than one widget handle mouseStart
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.mouseHandled)
            return;
        if (e.button !== 0)
            return true; // only left click
        // make sure we are not clicking on known object that handles mouseDown, or ones supplied by the user
        if (!this.dragEls.find(el => el === e.target) && e.target.closest(skipMouseDown))
            return true;
        if (this.option.cancel) {
            if (e.target.closest(this.option.cancel))
                return true;
        }
        this.mouseDownEvent = e;
        delete this.dragging;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
        delete this._autoScrollMaxSpeed;
        delete this._autoScrollContainer;
        // document handler so we can continue receiving moves as the item is 'fixed' position, and capture=true so WE get a first crack
        document.addEventListener('mousemove', this._mouseMove, { capture: true, passive: true }); // true=capture, not bubble
        document.addEventListener('mouseup', this._mouseUp, true);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            e.currentTarget.addEventListener('touchmove', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchmove);
            e.currentTarget.addEventListener('touchend', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchend);
        }
        e.preventDefault();
        // preventDefault() prevents blur event which occurs just after mousedown event.
        // if an editable content has focus, then blur must be call
        if (document.activeElement)
            document.activeElement.blur();
        _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.mouseHandled = true;
        return true;
    }
    /** @internal method to call actual drag event */
    _callDrag(e) {
        if (!this.dragging)
            return;
        const ev = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.initEvent(e, { target: this.el, type: 'drag' });
        if (this.option.drag) {
            this.option.drag(ev, this.ui());
        }
        this.triggerEvent('drag', ev);
    }
    /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
    _mouseMove(e) {
        // console.log(`${count++} move ${e.x},${e.y}`)
        const s = this.mouseDownEvent;
        this.lastDrag = e;
        if (this.dragging) {
            this._dragFollow(e);
            // delay actual grid handling drag until we pause for a while if set
            if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.pauseDrag) {
                const pause = Number.isInteger(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.pauseDrag) ? _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.pauseDrag : 100;
                if (this.dragTimeout)
                    window.clearTimeout(this.dragTimeout);
                this.dragTimeout = window.setTimeout(() => this._callDrag(e), pause);
            }
            else {
                this._callDrag(e);
            }
        }
        else if (Math.abs(e.x - s.x) + Math.abs(e.y - s.y) > 3) {
            /**
             * don't start unless we've moved at least 3 pixels
             */
            this.dragging = true;
            _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement = this;
            // if we're dragging an actual grid item, set the current drop as the grid (to detect enter/leave)
            const grid = this.el.gridstackNode?.grid;
            if (grid) {
                _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement = grid.el.ddElement.ddDroppable;
            }
            else {
                delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
            }
            this.helper = this._createHelper();
            this._setupHelperContainmentStyle();
            this.dragTransform = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getValuesFromTransformedElement(this.helperContainment);
            this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment);
            this._setupHelperStyle(e);
            const ev = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.initEvent(e, { target: this.el, type: 'dragstart' });
            if (this.option.start) {
                this.option.start(ev, this.ui());
            }
            this.triggerEvent('dragstart', ev);
            // now track keyboard events to cancel or rotate
            document.addEventListener('keydown', this._keyEvent);
        }
        // e.preventDefault(); // passive = true. OLD: was needed otherwise we get text sweep text selection as we drag around
        return true;
    }
    /** @internal call when the mouse gets released to drop the item at current location */
    _mouseUp(e) {
        this._stopScrolling();
        document.removeEventListener('mousemove', this._mouseMove, true);
        document.removeEventListener('mouseup', this._mouseUp, true);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch && e.currentTarget) { // destroy() during nested grid call us again wit fake _mouseUp
            e.currentTarget.removeEventListener('touchmove', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchmove, true);
            e.currentTarget.removeEventListener('touchend', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchend, true);
        }
        if (this.dragging) {
            delete this.dragging;
            delete this.el.gridstackNode?._origRotate;
            document.removeEventListener('keydown', this._keyEvent);
            // reset the drop target if dragging over ourself (already parented, just moving during stop callback below)
            if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement?.el === this.el.parentElement) {
                delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
            }
            this.helperContainment.style.position = this.parentOriginStylePosition || null;
            if (this.helper !== this.el)
                this.helper.remove(); // hide now
            this._removeHelperStyle();
            const ev = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.initEvent(e, { target: this.el, type: 'dragstop' });
            if (this.option.stop) {
                this.option.stop(ev); // NOTE: destroy() will be called when removing item, so expect NULL ptr after!
            }
            this.triggerEvent('dragstop', ev);
            // call the droppable method to receive the item
            if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement) {
                _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement.drop(e);
            }
        }
        delete this.helper;
        delete this.mouseDownEvent;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.mouseHandled;
        e.preventDefault();
    }
    /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
    _keyEvent(e) {
        const n = this.el.gridstackNode;
        const grid = n?.grid || _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement?.el?.gridstack;
        if (e.key === 'Escape') {
            if (n && n._origRotate) {
                n._orig = n._origRotate;
                delete n._origRotate;
            }
            grid?.cancelDrag();
            this._mouseUp(this.mouseDownEvent);
        }
        else if (n && grid && (e.key === 'r' || e.key === 'R')) {
            if (!_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.canBeRotated(n))
                return;
            n._origRotate = n._origRotate || { ...n._orig }; // store the real orig size in case we Esc after doing rotation
            delete n._moving; // force rotate to happen (move waits for >50% coverage otherwise)
            grid.setAnimation(false) // immediate rotate so _getDragOffset() gets the right dom size below
                .rotate(n.el, {
                top: -this.dragOffset.offsetTop,
                left: -this.dragOffset.offsetX
            })
                .setAnimation();
            n._moving = true;
            this.dragOffset = this._getDragOffset(this.lastDrag, n.el, this.helperContainment);
            this.helper.style.width = this.dragOffset.width + 'px';
            this.helper.style.height = this.dragOffset.height + 'px';
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.swap(n._orig, 'w', 'h');
            delete n._rect;
            this._mouseMove(this.lastDrag);
        }
    }
    /** @internal create a clone copy (or user defined method) of the original drag item if set */
    _createHelper() {
        let helper = this.el;
        if (typeof this.option.helper === 'function') {
            helper = this.option.helper(this.el);
        }
        else if (this.option.helper === 'clone') {
            helper = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneNode(this.el);
        }
        if (!helper.parentElement) {
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.appendTo(helper, this.option.appendTo === 'parent' ? this.el.parentElement : this.option.appendTo);
        }
        this.dragElementOriginStyle = DDDraggable.originStyleProp.map(prop => this.el.style[prop]);
        return helper;
    }
    /** @internal set the fix position of the dragged item */
    _setupHelperStyle(e) {
        this.helper.classList.add('ui-draggable-dragging');
        this.el.gridstackNode?.grid?.el.classList.add('grid-stack-dragging');
        // TODO: set all at once with style.cssText += ... ? https://stackoverflow.com/questions/3968593
        const style = this.helper.style;
        style.pointerEvents = 'none'; // needed for over items to get enter/leave
        // style.cursor = 'move'; //  TODO: can't set with pointerEvents=none ! (no longer in CSS either as no-op)
        style.width = this.dragOffset.width + 'px';
        style.height = this.dragOffset.height + 'px';
        style.willChange = 'left, right, top';
        style.position = 'fixed'; // let us drag between grids by not clipping as parent .grid-stack is position: 'relative'
        this._dragFollow(e); // now position it
        style.transition = 'none'; // show up instantly
        setTimeout(() => {
            if (this.helper) {
                style.transition = null; // recover animation
            }
        }, 0);
        return this;
    }
    /** @internal restore back the original style before dragging */
    _removeHelperStyle() {
        this.helper.classList.remove('ui-draggable-dragging');
        this.el.gridstackNode?.grid?.el.classList.remove('grid-stack-dragging');
        const node = this.helper?.gridstackNode;
        // don't bother restoring styles if we're gonna remove anyway...
        if (!node?._isAboutToRemove && this.dragElementOriginStyle) {
            const helper = this.helper;
            // don't animate, otherwise we animate offseted when switching back to 'absolute' from 'fixed'.
            // TODO: this also removes resizing animation which doesn't have this issue, but others.
            // Ideally both would animate ('move' would immediately restore 'absolute' and adjust coordinate to match,
            // then trigger a delay (repaint) to restore to final dest with animate) but then we need to make sure 'resizestop'
            // is called AFTER 'transitionend' event is received (see https://github.com/gridstack/gridstack.js/issues/2033)
            const transition = this.dragElementOriginStyle['transition'] || null;
            helper.style.transition = this.dragElementOriginStyle['transition'] = 'none'; // can't be NULL #1973
            DDDraggable.originStyleProp.forEach(prop => helper.style[prop] = this.dragElementOriginStyle[prop] || null);
            setTimeout(() => helper.style.transition = transition, 50); // recover animation from saved vars after a pause (0 isn't enough #1973)
        }
        delete this.dragElementOriginStyle;
        return this;
    }
    /** @internal updates the top/left position to follow the mouse */
    _dragFollow(e) {
        const style = this.helper.style;
        const offset = this.dragOffset;
        if (this.option.rtl) {
            style.right = ((window.innerWidth - e.clientX) + offset.offsetX) * this.dragTransform.xScale + 'px';
            if (style.left)
                style.left = '';
        }
        else {
            style.left = (e.clientX + offset.offsetX) * this.dragTransform.xScale + 'px';
            if (style.right)
                style.right = '';
        }
        style.top = (e.clientY + offset.offsetTop) * this.dragTransform.yScale + 'px';
    }
    /** @internal */
    _setupHelperContainmentStyle() {
        this.helperContainment = this.helper.parentElement;
        if (this.helper.style.position !== 'fixed') {
            this.parentOriginStylePosition = this.helperContainment.style.position;
            if (getComputedStyle(this.helperContainment).position.match(/static/)) {
                this.helperContainment.style.position = 'relative';
            }
        }
        return this;
    }
    /** @internal */
    _getDragOffset(event, el, parent) {
        // in case ancestor has transform/perspective css properties that change the viewpoint
        let xformOffsetX = 0;
        let xformOffsetY = 0;
        if (parent) {
            xformOffsetX = this.dragTransform.xOffset;
            xformOffsetY = this.dragTransform.yOffset;
        }
        const targetOffset = el.getBoundingClientRect();
        let x = this.option.rtl ? targetOffset.right : targetOffset.left;
        let offsetX = this.option.rtl
            ? (event.clientX - targetOffset.right + xformOffsetX)
            : (-event.clientX + targetOffset.left - xformOffsetX);
        return {
            x,
            top: targetOffset.top,
            offsetX,
            offsetTop: -event.clientY + targetOffset.top - xformOffsetY,
            width: targetOffset.width * this.dragTransform.xScale,
            height: targetOffset.height * this.dragTransform.yScale
        };
    }
    /** @internal starts or continues auto-scroll when the dragged helper is clipped by the scroll container.
     * Takes the grid's own element to find the scroll container so external/sidebar drags work too (#2074). */
    updateScrollPosition(gridEl) {
        this._autoScrollContainer = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getScrollElement(gridEl); // always use latest active grid
        const clipping = this._getClipping(this.helper, this._autoScrollContainer);
        if (clipping === 0) {
            this._stopScrolling();
        }
        else if (!this._autoScrollAnimId) {
            this._autoScrollAnimId = requestAnimationFrame(this._autoScrollTick);
        }
    }
    /** @internal compute how many pixels the element is clipped: negative = above, positive = below, 0 = fully inside OR outside (stop scrolling) */
    _getClipping(el, scrollEl) {
        const elRect = el.getBoundingClientRect();
        const scrollRect = scrollEl.getBoundingClientRect();
        const viewportH = window.innerHeight || document.documentElement.clientHeight;
        if (elRect.bottom < scrollRect.top || elRect.top > scrollRect.bottom)
            return 0; // fully outside
        const clippedBelow = elRect.bottom - Math.min(scrollRect.bottom, viewportH);
        const clippedAbove = elRect.top - Math.max(scrollRect.top, 0);
        if (clippedAbove < 0)
            return clippedAbove;
        if (clippedBelow > 0)
            return clippedBelow;
        return 0;
    }
    /** @internal stop any active auto-scroll animation */
    _stopScrolling() {
        if (this._autoScrollAnimId) {
            cancelAnimationFrame(this._autoScrollAnimId);
            delete this._autoScrollAnimId;
        }
    }
    /** @internal TODO: set to public as called by DDDroppable! */
    ui() {
        const containmentEl = this.el.parentElement;
        const containmentRect = containmentEl.getBoundingClientRect();
        const offset = this.helper.getBoundingClientRect();
        // RTL: GridStack measures column positions from the right side of the container,
        // so we report `left` as the distance between the helper's right edge and the
        // container's right edge (both in viewport-left coordinates via getBoundingClientRect).
        const leftPos = this.option.rtl
            ? (containmentRect.right - offset.right) * this.dragTransform.xScale
            : (offset.left - containmentRect.left) * this.dragTransform.xScale;
        return {
            position: {
                top: (offset.top - containmentRect.top) * this.dragTransform.yScale,
                left: leftPos
            }
            /* not used by GridStack for now...
            helper: [this.helper], //The object arr representing the helper that's being dragged.
            offset: { top: offset.top, left: offset.left } // Current offset position of the helper as { top, left } object.
            */
        };
    }
}
/** @internal properties we change during dragging, and restore back */
DDDraggable.originStyleProp = ['width', 'height', 'transform', 'transform-origin', 'transition', 'pointerEvents', 'position', 'left', 'right', 'top', 'minWidth', 'willChange'];

//# sourceMappingURL=dd-draggable.js.map

/***/ },

/***/ 1274
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDDroppable: () => (/* binding */ DDDroppable)
/* harmony export */ });
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1267);
/* harmony import */ var _dd_base_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1272);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1264);
/* harmony import */ var _dd_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1271);
/**
 * dd-droppable.ts 12.6.0
 * Copyright (c) 2021-2025  Alain Dumesny - see GridStack root license
 */




// let count = 0; // TEST
class DDDroppable extends _dd_base_impl__WEBPACK_IMPORTED_MODULE_1__.DDBaseImplement {
    constructor(el, option = {}) {
        super();
        this.el = el;
        this.option = option;
        // create var event binding so we can easily remove and still look like TS methods (unlike anonymous functions)
        this._mouseEnter = this._mouseEnter.bind(this);
        this._mouseLeave = this._mouseLeave.bind(this);
        this.enable();
        this._setupAccept();
    }
    on(event, callback) {
        super.on(event, callback);
    }
    off(event) {
        super.off(event);
    }
    enable() {
        if (this.disabled === false)
            return;
        super.enable();
        this.el.classList.add('ui-droppable');
        this.el.classList.remove('ui-droppable-disabled');
        this.el.addEventListener('mouseenter', this._mouseEnter);
        this.el.addEventListener('mouseleave', this._mouseLeave);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            this.el.addEventListener('pointerenter', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerenter);
            this.el.addEventListener('pointerleave', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerleave);
        }
    }
    disable(forDestroy = false) {
        if (this.disabled === true)
            return;
        super.disable();
        this.el.classList.remove('ui-droppable');
        if (!forDestroy)
            this.el.classList.add('ui-droppable-disabled');
        this.el.removeEventListener('mouseenter', this._mouseEnter);
        this.el.removeEventListener('mouseleave', this._mouseLeave);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            this.el.removeEventListener('pointerenter', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerenter);
            this.el.removeEventListener('pointerleave', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerleave);
        }
    }
    destroy() {
        this.disable(true);
        this.el.classList.remove('ui-droppable');
        this.el.classList.remove('ui-droppable-disabled');
        super.destroy();
    }
    updateOption(opts) {
        Object.keys(opts).forEach(key => this.option[key] = opts[key]);
        this._setupAccept();
        return this;
    }
    /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
    _mouseEnter(e) {
        // console.log(`${count++} Enter ${this.el.id}`); // TEST
        if (!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement)
            return;
        // During touch drag operations, ignore real browser-generated mouseenter events (isTrusted:true) vs our simulated ones (isTrusted:false).
        // The browser can fire spurious mouseenter events when we dispatch simulated mousemove events.
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.DDTouch.touchHandled && e.isTrusted)
            return;
        if (!this._canDrop(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement.el))
            return;
        e.preventDefault();
        e.stopPropagation();
        _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement._stopScrolling();
        // make sure when we enter this, that the last one gets a leave FIRST to correctly cleanup as we don't always do
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement && _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement !== this) {
            _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement._mouseLeave(e, true); // calledByEnter = true
        }
        _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement = this;
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(e, { target: this.el, type: 'dropover' });
        if (this.option.over) {
            this.option.over(ev, this._ui(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement));
        }
        this.triggerEvent('dropover', ev);
        this.el.classList.add('ui-droppable-over');
        // console.log('tracking'); // TEST
    }
    /** @internal called when the item is leaving our area, stop tracking if we had moving item */
    _mouseLeave(e, calledByEnter = false) {
        // console.log(`${count++} Leave ${this.el.id}`); // TEST
        if (!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement || _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement !== this)
            return;
        e.preventDefault();
        e.stopPropagation();
        // stop the old grid's auto-scroll only when entering a new grid; if leaving to empty space keep scrolling until mouseup
        if (calledByEnter)
            _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement._stopScrolling();
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(e, { target: this.el, type: 'dropout' });
        if (this.option.out) {
            this.option.out(ev, this._ui(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement));
        }
        this.triggerEvent('dropout', ev);
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement === this) {
            delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
            // console.log('not tracking'); // TEST
            // if we're still over a parent droppable, send it an enter as we don't get one from leaving nested children
            if (!calledByEnter) {
                let parentDrop;
                let parent = this.el.parentElement;
                while (!parentDrop && parent) {
                    parentDrop = parent.ddElement?.ddDroppable;
                    parent = parent.parentElement;
                }
                if (parentDrop) {
                    parentDrop._mouseEnter(e);
                }
            }
        }
    }
    /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
    drop(e) {
        e.preventDefault();
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(e, { target: this.el, type: 'drop' });
        if (this.option.drop) {
            this.option.drop(ev, this._ui(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement));
        }
        this.triggerEvent('drop', ev);
    }
    /** @internal true if element matches the string/method accept option */
    _canDrop(el) {
        return el && (!this.accept || this.accept(el));
    }
    /** @internal */
    _setupAccept() {
        if (!this.option.accept)
            return this;
        if (typeof this.option.accept === 'string') {
            this.accept = (el) => el.classList.contains(this.option.accept) || el.matches(this.option.accept);
        }
        else {
            this.accept = this.option.accept;
        }
        return this;
    }
    /** @internal */
    _ui(drag) {
        return {
            draggable: drag.el,
            ...drag.ui()
        };
    }
}
//# sourceMappingURL=dd-droppable.js.map

/***/ },

/***/ 1268
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDElement: () => (/* binding */ DDElement)
/* harmony export */ });
/* harmony import */ var _dd_resizable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1269);
/* harmony import */ var _dd_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1273);
/* harmony import */ var _dd_droppable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1274);
/**
 * dd-elements.ts 12.6.0
 * Copyright (c) 2021-2025 Alain Dumesny - see GridStack root license
 */



class DDElement {
    static init(el) {
        if (!el.ddElement) {
            el.ddElement = new DDElement(el);
        }
        return el.ddElement;
    }
    constructor(el) {
        this.el = el;
    }
    on(eventName, callback) {
        if (this.ddDraggable && ['drag', 'dragstart', 'dragstop'].indexOf(eventName) > -1) {
            this.ddDraggable.on(eventName, callback);
        }
        else if (this.ddDroppable && ['drop', 'dropover', 'dropout'].indexOf(eventName) > -1) {
            this.ddDroppable.on(eventName, callback);
        }
        else if (this.ddResizable && ['resizestart', 'resize', 'resizestop'].indexOf(eventName) > -1) {
            this.ddResizable.on(eventName, callback);
        }
        return this;
    }
    off(eventName) {
        if (this.ddDraggable && ['drag', 'dragstart', 'dragstop'].indexOf(eventName) > -1) {
            this.ddDraggable.off(eventName);
        }
        else if (this.ddDroppable && ['drop', 'dropover', 'dropout'].indexOf(eventName) > -1) {
            this.ddDroppable.off(eventName);
        }
        else if (this.ddResizable && ['resizestart', 'resize', 'resizestop'].indexOf(eventName) > -1) {
            this.ddResizable.off(eventName);
        }
        return this;
    }
    setupDraggable(opts) {
        if (!this.ddDraggable) {
            this.ddDraggable = new _dd_draggable__WEBPACK_IMPORTED_MODULE_1__.DDDraggable(this.el, opts);
        }
        else {
            this.ddDraggable.updateOption(opts);
        }
        return this;
    }
    cleanDraggable() {
        if (this.ddDraggable) {
            this.ddDraggable.destroy();
            delete this.ddDraggable;
        }
        return this;
    }
    setupResizable(opts) {
        if (!this.ddResizable) {
            this.ddResizable = new _dd_resizable__WEBPACK_IMPORTED_MODULE_0__.DDResizable(this.el, opts);
        }
        else {
            this.ddResizable.updateOption(opts);
        }
        return this;
    }
    cleanResizable() {
        if (this.ddResizable) {
            this.ddResizable.destroy();
            delete this.ddResizable;
        }
        return this;
    }
    setupDroppable(opts) {
        if (!this.ddDroppable) {
            this.ddDroppable = new _dd_droppable__WEBPACK_IMPORTED_MODULE_2__.DDDroppable(this.el, opts);
        }
        else {
            this.ddDroppable.updateOption(opts);
        }
        return this;
    }
    cleanDroppable() {
        if (this.ddDroppable) {
            this.ddDroppable.destroy();
            delete this.ddDroppable;
        }
        return this;
    }
}
//# sourceMappingURL=dd-element.js.map

/***/ },

/***/ 1266
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDGridStack: () => (/* binding */ DDGridStack)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1264);
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1267);
/* harmony import */ var _dd_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1268);
/**
 * dd-gridstack.ts 12.6.0
 * Copyright (c) 2021-2025 Alain Dumesny - see GridStack root license
 */



// let count = 0; // TEST
/**
 * HTML Native Mouse and Touch Events Drag and Drop functionality.
 *
 * This class provides the main drag & drop implementation for GridStack,
 * handling resizing, dragging, and dropping of grid items using native HTML5 events.
 * It manages the interaction between different DD components and the grid system.
 */
class DDGridStack {
    /**
     * Enable/disable/configure resizing for grid elements.
     *
     * @param el - Grid item element(s) to configure
     * @param opts - Resize options or command ('enable', 'disable', 'destroy', 'option', or config object)
     * @param key - Option key when using 'option' command
     * @param value - Option value when using 'option' command
     * @returns this instance for chaining
     *
     * @example
     * dd.resizable(element, 'enable');  // Enable resizing
     * dd.resizable(element, 'option', 'minWidth', 100);  // Set minimum width
     */
    resizable(el, opts, key, value) {
        this._getDDElements(el, opts).forEach(dEl => {
            if (opts === 'disable' || opts === 'enable') {
                dEl.ddResizable && dEl.ddResizable[opts](); // can't create DD as it requires options for setupResizable()
            }
            else if (opts === 'destroy') {
                dEl.ddResizable && dEl.cleanResizable();
            }
            else if (opts === 'option') {
                dEl.setupResizable({ [key]: value });
            }
            else {
                const n = dEl.el.gridstackNode;
                const grid = n.grid;
                let handles = dEl.el.getAttribute('gs-resize-handles') || grid.opts.resizable.handles || 'e,s,se';
                if (handles === 'all')
                    handles = 'n,e,s,w,se,sw,ne,nw';
                // NOTE: keep the resize handles as e,w don't have enough space (10px) to show resize corners anyway. limit during drag instead
                // restrict vertical resize if height is done to match content anyway... odd to have it spring back
                // if (Utils.shouldSizeToContent(n, true)) {
                //   const doE = handles.indexOf('e') !== -1;
                //   const doW = handles.indexOf('w') !== -1;
                //   handles = doE ? (doW ? 'e,w' : 'e') : (doW ? 'w' : '');
                // }
                const autoHide = !grid.opts.alwaysShowResizeHandle;
                dEl.setupResizable({
                    ...grid.opts.resizable,
                    ...{ handles, autoHide },
                    ...{
                        start: opts.start,
                        stop: opts.stop,
                        resize: opts.resize,
                        rtl: opts.rtl,
                    }
                });
            }
        });
        return this;
    }
    /**
     * Enable/disable/configure dragging for grid elements.
     *
     * @param el - Grid item element(s) to configure
     * @param opts - Drag options or command ('enable', 'disable', 'destroy', 'option', or config object)
     * @param key - Option key when using 'option' command
     * @param value - Option value when using 'option' command
     * @param rtl - Are we in rtl mode?
     * @returns this instance for chaining
     *
     * @example
     * dd.draggable(element, 'enable');  // Enable dragging
     * dd.draggable(element, {handle: '.drag-handle'});  // Configure drag handle
     */
    draggable(el, opts, key, value) {
        this._getDDElements(el, opts).forEach(dEl => {
            if (opts === 'disable' || opts === 'enable') {
                dEl.ddDraggable && dEl.ddDraggable[opts](); // can't create DD as it requires options for setupDraggable()
            }
            else if (opts === 'destroy') {
                dEl.ddDraggable && dEl.cleanDraggable();
            }
            else if (opts === 'option') {
                dEl.setupDraggable({ [key]: value });
            }
            else {
                const grid = dEl.el.gridstackNode.grid;
                dEl.setupDraggable({
                    ...grid.opts.draggable,
                    ...{
                        // containment: (grid.parentGridNode && grid.opts.dragOut === false) ? grid.el.parentElement : (grid.opts.draggable.containment || null),
                        start: opts.start,
                        stop: opts.stop,
                        drag: opts.drag,
                        rtl: opts.rtl,
                    }
                });
            }
        });
        return this;
    }
    dragIn(el, opts) {
        this._getDDElements(el).forEach(dEl => dEl.setupDraggable(opts));
        return this;
    }
    droppable(el, opts, key, value) {
        if (typeof opts.accept === 'function' && !opts._accept) {
            opts._accept = opts.accept;
            opts.accept = (el) => opts._accept(el);
        }
        this._getDDElements(el, opts).forEach(dEl => {
            if (opts === 'disable' || opts === 'enable') {
                dEl.ddDroppable && dEl.ddDroppable[opts]();
            }
            else if (opts === 'destroy') {
                dEl.ddDroppable && dEl.cleanDroppable();
            }
            else if (opts === 'option') {
                dEl.setupDroppable({ [key]: value });
            }
            else {
                dEl.setupDroppable(opts);
            }
        });
        return this;
    }
    /** true if element is droppable */
    isDroppable(el) {
        return !!(el?.ddElement?.ddDroppable && !el.ddElement.ddDroppable.disabled);
    }
    /** true if element is draggable */
    isDraggable(el) {
        return !!(el?.ddElement?.ddDraggable && !el.ddElement.ddDraggable.disabled);
    }
    /** true if element is draggable */
    isResizable(el) {
        return !!(el?.ddElement?.ddResizable && !el.ddElement.ddResizable.disabled);
    }
    on(el, name, callback) {
        this._getDDElements(el).forEach(dEl => dEl.on(name, (event) => {
            callback(event, _dd_manager__WEBPACK_IMPORTED_MODULE_1__.DDManager.dragElement ? _dd_manager__WEBPACK_IMPORTED_MODULE_1__.DDManager.dragElement.el : event.target, _dd_manager__WEBPACK_IMPORTED_MODULE_1__.DDManager.dragElement ? _dd_manager__WEBPACK_IMPORTED_MODULE_1__.DDManager.dragElement.helper : null);
        }));
        return this;
    }
    off(el, name) {
        this._getDDElements(el).forEach(dEl => dEl.off(name));
        return this;
    }
    /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
    _getDDElements(els, opts) {
        // don't force create if we're going to destroy it, unless it's a grid which is used as drop target for it's children
        const create = els.gridstack || opts !== 'destroy' && opts !== 'disable';
        const hosts = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getElements(els);
        if (!hosts.length)
            return [];
        const list = hosts.map(e => e.ddElement || (create ? _dd_element__WEBPACK_IMPORTED_MODULE_2__.DDElement.init(e) : null)).filter(d => d); // remove nulls
        return list;
    }
}
//# sourceMappingURL=dd-gridstack.js.map

/***/ },

/***/ 1267
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDManager: () => (/* binding */ DDManager)
/* harmony export */ });
/**
 * dd-manager.ts 12.6.0
 * Copyright (c) 2021-2025 Alain Dumesny - see GridStack root license
 */
/**
 * Global state manager for all Drag & Drop instances.
 *
 * This class maintains shared state across all drag & drop operations,
 * ensuring proper coordination between multiple grids and drag/drop elements.
 * All properties are static to provide global access throughout the DD system.
 */
class DDManager {
}
//# sourceMappingURL=dd-manager.js.map

/***/ },

/***/ 1270
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDResizableHandle: () => (/* binding */ DDResizableHandle)
/* harmony export */ });
/* harmony import */ var _dd_touch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1271);
/**
 * dd-resizable-handle.ts 12.6.0
 * Copyright (c) 2021-2025  Alain Dumesny - see GridStack root license
 */

class DDResizableHandle {
    constructor(host, dir, option) {
        this.host = host;
        this.dir = dir;
        this.option = option;
        /** @internal true after we've moved enough pixels to start a resize */
        this.moving = false;
        // create var event binding so we can easily remove and still look like TS methods (unlike anonymous functions)
        this._mouseDown = this._mouseDown.bind(this);
        this._mouseMove = this._mouseMove.bind(this);
        this._mouseUp = this._mouseUp.bind(this);
        this._keyEvent = this._keyEvent.bind(this);
        this._init();
    }
    /** @internal */
    _init() {
        if (this.option.element) {
            try {
                this.el = this.option.element instanceof HTMLElement
                    ? this.option.element
                    : this.host.querySelector(this.option.element);
            }
            catch (error) {
                this.option.element = undefined; // make sure destroy handles it correctly
                console.error("Query for resizeable handle failed, falling back", error);
            }
        }
        if (!this.el) {
            this.el = document.createElement('div');
            this.host.appendChild(this.el);
        }
        this.el.classList.add('ui-resizable-handle');
        this.el.classList.add(`${DDResizableHandle.prefix}${this.dir}`);
        this.el.style.zIndex = '100';
        this.el.style.userSelect = 'none';
        this.el.addEventListener('mousedown', this._mouseDown);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_0__.isTouch) {
            this.el.addEventListener('touchstart', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchstart);
            this.el.addEventListener('pointerdown', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.pointerdown);
            // this.el.style.touchAction = 'none'; // not needed unlike pointerdown doc comment
        }
        return this;
    }
    /** call this when resize handle needs to be removed and cleaned up */
    destroy() {
        if (this.moving)
            this._mouseUp(this.mouseDownEvent);
        this.el.removeEventListener('mousedown', this._mouseDown);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_0__.isTouch) {
            this.el.removeEventListener('touchstart', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchstart);
            this.el.removeEventListener('pointerdown', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.pointerdown);
        }
        if (!this.option.element) {
            this.host.removeChild(this.el);
        }
        delete this.el;
        delete this.host;
        return this;
    }
    /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
    _mouseDown(e) {
        this.mouseDownEvent = e;
        document.addEventListener('mousemove', this._mouseMove, { capture: true, passive: true }); // capture, not bubble
        document.addEventListener('mouseup', this._mouseUp, true);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_0__.isTouch) {
            this.el.addEventListener('touchmove', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchmove);
            this.el.addEventListener('touchend', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchend);
        }
        e.stopPropagation();
        e.preventDefault();
    }
    /** @internal */
    _mouseMove(e) {
        const s = this.mouseDownEvent;
        if (this.moving) {
            this._triggerEvent('move', e);
        }
        else if (Math.abs(e.x - s.x) + Math.abs(e.y - s.y) > 2) {
            // don't start unless we've moved at least 3 pixels
            this.moving = true;
            this._triggerEvent('start', this.mouseDownEvent);
            this._triggerEvent('move', e);
            // now track keyboard events to cancel
            document.addEventListener('keydown', this._keyEvent);
        }
        e.stopPropagation();
        // e.preventDefault(); passive = true
    }
    /** @internal */
    _mouseUp(e) {
        if (this.moving) {
            this._triggerEvent('stop', e);
            document.removeEventListener('keydown', this._keyEvent);
        }
        document.removeEventListener('mousemove', this._mouseMove, true);
        document.removeEventListener('mouseup', this._mouseUp, true);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_0__.isTouch) {
            this.el.removeEventListener('touchmove', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchmove);
            this.el.removeEventListener('touchend', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchend);
        }
        delete this.moving;
        delete this.mouseDownEvent;
        e.stopPropagation();
        e.preventDefault();
    }
    /** @internal call when keys are being pressed - use Esc to cancel */
    _keyEvent(e) {
        if (e.key === 'Escape') {
            this.host.gridstackNode?.grid?.engine.restoreInitial();
            this._mouseUp(this.mouseDownEvent);
        }
    }
    /** @internal */
    _triggerEvent(name, event) {
        if (this.option[name])
            this.option[name](event);
        return this;
    }
}
/** @internal */
DDResizableHandle.prefix = 'ui-resizable-';

//# sourceMappingURL=dd-resizable-handle.js.map

/***/ },

/***/ 1269
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDResizable: () => (/* binding */ DDResizable)
/* harmony export */ });
/* harmony import */ var _dd_resizable_handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1270);
/* harmony import */ var _dd_base_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1272);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1264);
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1267);
/**
 * dd-resizable.ts 12.6.0
 * Copyright (c) 2021-2025  Alain Dumesny - see GridStack root license
 */




class DDResizable extends _dd_base_impl__WEBPACK_IMPORTED_MODULE_1__.DDBaseImplement {
    // have to be public else complains for HTMLElementExtendOpt ?
    constructor(el, option = {}) {
        super();
        this.el = el;
        this.option = option;
        /** @internal */
        this.rectScale = { x: 1, y: 1 };
        /** @internal */
        this._ui = () => {
            const containmentEl = this.el.parentElement;
            const containmentRect = containmentEl.getBoundingClientRect();
            const newRect = {
                width: this.originalRect.width,
                height: this.originalRect.height + this.scrolled,
                left: this.originalRect.left,
                right: this.originalRect.right,
                top: this.originalRect.top - this.scrolled
            };
            const rect = this.temporalRect || newRect;
            const leftPos = this.option.rtl
                ? (containmentRect.right - rect.right) * this.rectScale.x
                : (rect.left - containmentRect.left) * this.rectScale.x;
            return {
                position: {
                    left: leftPos,
                    top: (rect.top - containmentRect.top) * this.rectScale.y
                },
                size: {
                    width: rect.width * this.rectScale.x,
                    height: rect.height * this.rectScale.y
                }
                /* Gridstack ONLY needs position set above... keep around in case.
                element: [this.el], // The object representing the element to be resized
                helper: [], // TODO: not support yet - The object representing the helper that's being resized
                originalElement: [this.el],// we don't wrap here, so simplify as this.el //The object representing the original element before it is wrapped
                originalPosition: { // The position represented as { left, top } before the resizable is resized
                  left: this.originalRect.left - containmentRect.left,
                  top: this.originalRect.top - containmentRect.top
                },
                originalSize: { // The size represented as { width, height } before the resizable is resized
                  width: this.originalRect.width,
                  height: this.originalRect.height
                }
                */
            };
        };
        // create var event binding so we can easily remove and still look like TS methods (unlike anonymous functions)
        this._mouseOver = this._mouseOver.bind(this);
        this._mouseOut = this._mouseOut.bind(this);
        this.enable();
        this._setupAutoHide(this.option.autoHide);
        this._setupHandlers();
    }
    on(event, callback) {
        super.on(event, callback);
    }
    off(event) {
        super.off(event);
    }
    enable() {
        super.enable();
        this.el.classList.remove('ui-resizable-disabled');
        this._setupAutoHide(this.option.autoHide);
    }
    disable() {
        super.disable();
        this.el.classList.add('ui-resizable-disabled');
        this._setupAutoHide(false);
    }
    destroy() {
        this._removeHandlers();
        this._setupAutoHide(false);
        delete this.el;
        super.destroy();
    }
    updateOption(opts) {
        const updateHandles = (opts.handles && opts.handles !== this.option.handles);
        const updateAutoHide = (opts.autoHide && opts.autoHide !== this.option.autoHide);
        Object.keys(opts).forEach(key => this.option[key] = opts[key]);
        if (updateHandles) {
            this._removeHandlers();
            this._setupHandlers();
        }
        if (updateAutoHide) {
            this._setupAutoHide(this.option.autoHide);
        }
        return this;
    }
    /** @internal turns auto hide on/off */
    _setupAutoHide(auto) {
        if (auto) {
            this.el.classList.add('ui-resizable-autohide');
            // use mouseover and not mouseenter to get better performance and track for nested cases
            this.el.addEventListener('mouseover', this._mouseOver);
            this.el.addEventListener('mouseout', this._mouseOut);
        }
        else {
            this.el.classList.remove('ui-resizable-autohide');
            this.el.removeEventListener('mouseover', this._mouseOver);
            this.el.removeEventListener('mouseout', this._mouseOut);
            if (_dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement === this) {
                delete _dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement;
            }
        }
        return this;
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _mouseOver(e) {
        // console.log(`${count++} pre-enter ${(this.el as GridItemHTMLElement).gridstackNode._id}`)
        // already over a child, ignore. Ideally we just call e.stopPropagation() but see https://github.com/gridstack/gridstack.js/issues/2018
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement || _dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.dragElement)
            return;
        _dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement = this;
        // console.log(`${count++} enter ${(this.el as GridItemHTMLElement).gridstackNode._id}`)
        this.el.classList.remove('ui-resizable-autohide');
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _mouseOut(e) {
        // console.log(`${count++} pre-leave ${(this.el as GridItemHTMLElement).gridstackNode._id}`)
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement !== this)
            return;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement;
        // console.log(`${count++} leave ${(this.el as GridItemHTMLElement).gridstackNode._id}`)
        this.el.classList.add('ui-resizable-autohide');
    }
    /** @internal */
    _setupHandlers() {
        this.handlers = this.option.handles.split(',')
            .map(dir => dir.trim())
            .map(dir => new _dd_resizable_handle__WEBPACK_IMPORTED_MODULE_0__.DDResizableHandle(this.el, dir, {
            element: this.option.element,
            start: (event) => this._resizeStart(event),
            stop: (event) => this._resizeStop(event),
            move: (event) => this._resizing(event, dir)
        }));
        return this;
    }
    /** @internal */
    _resizeStart(event) {
        this.sizeToContent = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.shouldSizeToContent(this.el.gridstackNode, true); // strick true only and not number
        this.originalRect = this.el.getBoundingClientRect();
        this.scrollEl = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getScrollElement(this.el);
        this.scrollY = this.scrollEl.scrollTop;
        this.scrolled = 0;
        this.startEvent = event;
        this._setupHelper();
        this._applyChange();
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(event, { type: 'resizestart', target: this.el });
        if (this.option.start) {
            this.option.start(ev, this._ui());
        }
        this.el.classList.add('ui-resizable-resizing');
        this.triggerEvent('resizestart', ev);
        return this;
    }
    /** @internal */
    _resizing(event, dir) {
        this.scrolled = this.scrollEl.scrollTop - this.scrollY;
        this.temporalRect = this._getChange(event, dir);
        this._applyChange();
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(event, { type: 'resize', target: this.el });
        ev.resizeDir = dir; // expose handle direction so _dragOrResize can avoid position drift
        ev.hasMovedX = this.option.rtl ? dir.includes('e') : dir.includes('w');
        ev.hasMovedY = dir.includes('n');
        if (this.option.resize) {
            this.option.resize(ev, this._ui());
        }
        this.triggerEvent('resize', ev);
        return this;
    }
    /** @internal */
    _resizeStop(event) {
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(event, { type: 'resizestop', target: this.el });
        // Remove style attr now, so the stop handler can rebuild style attrs
        this._cleanHelper();
        if (this.option.stop) {
            this.option.stop(ev); // Note: ui() not used by gridstack so don't pass
        }
        this.el.classList.remove('ui-resizable-resizing');
        this.triggerEvent('resizestop', ev);
        delete this.startEvent;
        delete this.originalRect;
        delete this.temporalRect;
        delete this.scrollY;
        delete this.scrolled;
        return this;
    }
    /** @internal */
    _setupHelper() {
        this.elOriginStyleVal = DDResizable._originStyleProp.map(prop => this.el.style[prop]);
        this.parentOriginStylePosition = this.el.parentElement.style.position;
        const parent = this.el.parentElement;
        const dragTransform = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getValuesFromTransformedElement(parent);
        this.rectScale = {
            x: dragTransform.xScale,
            y: dragTransform.yScale
        };
        if (getComputedStyle(this.el.parentElement).position.match(/static/)) {
            this.el.parentElement.style.position = 'relative';
        }
        this.el.style.position = 'absolute';
        this.el.style.opacity = '0.8';
        return this;
    }
    /** @internal */
    _cleanHelper() {
        DDResizable._originStyleProp.forEach((prop, i) => {
            this.el.style[prop] = this.elOriginStyleVal[i] || null;
        });
        this.el.parentElement.style.position = this.parentOriginStylePosition || null;
        return this;
    }
    /** @internal */
    _getChange(event, dir) {
        const oEvent = this.startEvent;
        const newRect = {
            width: this.originalRect.width,
            height: this.originalRect.height + this.scrolled,
            left: this.originalRect.left,
            right: this.originalRect.right,
            top: this.originalRect.top - this.scrolled,
        };
        const offsetX = event.clientX - oEvent.clientX;
        const offsetY = this.sizeToContent ? 0 : event.clientY - oEvent.clientY; // prevent vert resize
        let moveLeft;
        let moveUp;
        const isRtl = this.option.rtl;
        if (!isRtl && dir.indexOf('e') > -1) {
            newRect.width += offsetX;
        }
        else if (isRtl && dir.indexOf('w') > -1) {
            newRect.width -= offsetX;
        }
        else if (!isRtl && dir.indexOf('w') > -1) {
            newRect.width -= offsetX;
            newRect.left += offsetX;
            moveLeft = true;
        }
        else if (isRtl && dir.indexOf('e') > -1) {
            newRect.width += offsetX;
            newRect.right += offsetX;
            moveLeft = true;
        }
        if (dir.indexOf('s') > -1) {
            newRect.height += offsetY;
        }
        else if (dir.indexOf('n') > -1) {
            newRect.height -= offsetY;
            newRect.top += offsetY;
            moveUp = true;
        }
        const constrain = this._constrainSize(newRect.width, newRect.height, moveLeft, moveUp);
        if (Math.round(newRect.width) !== Math.round(constrain.width)) { // round to ignore slight round-off errors
            if (!isRtl && dir.indexOf('w') > -1) {
                newRect.left += newRect.width - constrain.width;
            }
            else if (isRtl && dir.indexOf('e') > -1) {
                newRect.right -= newRect.width - constrain.width;
            }
            newRect.width = constrain.width;
        }
        if (Math.round(newRect.height) !== Math.round(constrain.height)) {
            if (dir.indexOf('n') > -1) {
                newRect.top += newRect.height - constrain.height;
            }
            newRect.height = constrain.height;
        }
        return newRect;
    }
    /** @internal constrain the size to the set min/max values */
    _constrainSize(oWidth, oHeight, moveLeft, moveUp) {
        const o = this.option;
        const maxWidth = (moveLeft ? o.maxWidthMoveLeft : o.maxWidth) || Number.MAX_SAFE_INTEGER;
        const minWidth = o.minWidth / this.rectScale.x || oWidth;
        const maxHeight = (moveUp ? o.maxHeightMoveUp : o.maxHeight) || Number.MAX_SAFE_INTEGER;
        const minHeight = o.minHeight / this.rectScale.y || oHeight;
        const width = Math.min(maxWidth, Math.max(minWidth, oWidth));
        const height = Math.min(maxHeight, Math.max(minHeight, oHeight));
        return { width, height };
    }
    /** @internal */
    _applyChange() {
        let containmentRect = { left: 0, right: 0, top: 0, width: 0, height: 0 };
        if (this.el.style.position === 'absolute') {
            const containmentEl = this.el.parentElement;
            const { left, right, top } = containmentEl.getBoundingClientRect();
            containmentRect = { left, right, top, width: 0, height: 0 };
        }
        if (!this.temporalRect)
            return this;
        Object.entries(this.temporalRect).forEach(([key, value]) => {
            if (this.option.rtl ? key === 'left' : key === 'right')
                return;
            const scaleReciprocal = key === 'width' || key === 'left' || key === 'right'
                ? this.rectScale.x
                : key === 'height' || key === 'top'
                    ? this.rectScale.y
                    : 1;
            let finalValue;
            if (key === 'right') {
                finalValue = (containmentRect.right - value) * this.rectScale.x + 'px';
            }
            else {
                finalValue = (value - containmentRect[key]) * scaleReciprocal + 'px';
            }
            this.el.style[key] = finalValue;
        });
        return this;
    }
    /** @internal */
    _removeHandlers() {
        this.handlers.forEach(handle => handle.destroy());
        delete this.handlers;
        return this;
    }
}
/** @internal */
DDResizable._originStyleProp = ['width', 'height', 'position', 'left', 'right', 'top', 'opacity', 'zIndex'];

//# sourceMappingURL=dd-resizable.js.map

/***/ },

/***/ 1271
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDTouch: () => (/* binding */ DDTouch),
/* harmony export */   isTouch: () => (/* binding */ isTouch),
/* harmony export */   pointerdown: () => (/* binding */ pointerdown),
/* harmony export */   pointerenter: () => (/* binding */ pointerenter),
/* harmony export */   pointerleave: () => (/* binding */ pointerleave),
/* harmony export */   touchend: () => (/* binding */ touchend),
/* harmony export */   touchmove: () => (/* binding */ touchmove),
/* harmony export */   touchstart: () => (/* binding */ touchstart)
/* harmony export */ });
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1267);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1264);
/**
 * touch.ts 12.6.0
 * Copyright (c) 2021-2025 Alain Dumesny - see GridStack root license
 */


/**
 * Detect touch support - Windows Surface devices and other touch devices
 * should we use this instead ? (what we had for always showing resize handles)
 * /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
 */
const isTouch = typeof window !== 'undefined' && typeof document !== 'undefined' &&
    ('ontouchstart' in document
        || 'ontouchstart' in window
        // || !!window.TouchEvent // true on Windows 10 Chrome desktop so don't use this
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        || (window.DocumentTouch && document instanceof window.DocumentTouch)
        || navigator.maxTouchPoints > 0
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        || navigator.msMaxTouchPoints > 0);
// interface TouchCoord {x: number, y: number};
class DDTouch {
}
/**
* Get the x,y position of a touch event
*/
// function getTouchCoords(e: TouchEvent): TouchCoord {
//   return {
//     x: e.changedTouches[0].pageX,
//     y: e.changedTouches[0].pageY
//   };
// }
/**
 * Simulate a mouse event based on a corresponding touch event
 * @param {Object} e A touch event
 * @param {String} simulatedType The corresponding mouse event
 */
function simulateMouseEvent(e, simulatedType) {
    // Ignore multi-touch events
    if (e.touches.length > 1)
        return;
    // Prevent "Ignored attempt to cancel a touchmove event with cancelable=false" errors
    if (e.cancelable)
        e.preventDefault();
    // Dispatch the simulated event to the target element
    _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.simulateMouseEvent(e.changedTouches[0], simulatedType);
}
/**
 * Simulate a mouse event based on a corresponding Pointer event
 * @param {Object} e A pointer event
 * @param {String} simulatedType The corresponding mouse event
 */
function simulatePointerMouseEvent(e, simulatedType) {
    // Prevent "Ignored attempt to cancel a touchmove event with cancelable=false" errors
    if (e.cancelable)
        e.preventDefault();
    // Dispatch the simulated event to the target element
    _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.simulateMouseEvent(e, simulatedType);
}
/**
 * Handle the touchstart events
 * @param {Object} e The widget element's touchstart event
 */
function touchstart(e) {
    // Ignore the event if another widget is already being handled
    if (DDTouch.touchHandled)
        return;
    DDTouch.touchHandled = true;
    // Simulate the mouse events
    // simulateMouseEvent(e, 'mouseover');
    // simulateMouseEvent(e, 'mousemove');
    simulateMouseEvent(e, 'mousedown');
}
/**
 * Handle the touchmove events
 * @param {Object} e The document's touchmove event
 */
function touchmove(e) {
    // Ignore event if not handled by us
    if (!DDTouch.touchHandled)
        return;
    simulateMouseEvent(e, 'mousemove');
}
/**
 * Handle the touchend events
 * @param {Object} e The document's touchend event
 */
function touchend(e) {
    // Ignore event if not handled
    if (!DDTouch.touchHandled)
        return;
    // cancel delayed leave event when we release on ourself which happens BEFORE we get this!
    if (DDTouch.pointerLeaveTimeout) {
        window.clearTimeout(DDTouch.pointerLeaveTimeout);
        delete DDTouch.pointerLeaveTimeout;
    }
    const wasDragging = !!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement;
    // Simulate the mouseup event
    simulateMouseEvent(e, 'mouseup');
    // simulateMouseEvent(event, 'mouseout');
    // If the touch interaction did not move, it should trigger a click
    if (!wasDragging) {
        simulateMouseEvent(e, 'click');
    }
    // Unset the flag to allow other widgets to inherit the touch event
    DDTouch.touchHandled = false;
}
/**
 * Note we don't get touchenter/touchleave (which are deprecated)
 * see https://stackoverflow.com/questions/27908339/js-touch-equivalent-for-mouseenter
 * so instead of PointerEvent to still get enter/leave and send the matching mouse event.
 */
function pointerdown(e) {
    // console.log("pointer down")
    if (e.pointerType === 'mouse')
        return;
    e.target.releasePointerCapture(e.pointerId); // <- Important!
}
function pointerenter(e) {
    // ignore the initial one we get on pointerdown on ourself
    if (!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement) {
        // console.log('pointerenter ignored');
        return;
    }
    // console.log('pointerenter');
    if (e.pointerType === 'mouse')
        return;
    simulatePointerMouseEvent(e, 'mouseenter');
}
function pointerleave(e) {
    // ignore the leave on ourself we get before releasing the mouse over ourself
    // by delaying sending the event and having the up event cancel us
    if (!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement) {
        // console.log('pointerleave ignored');
        return;
    }
    if (e.pointerType === 'mouse')
        return;
    DDTouch.pointerLeaveTimeout = window.setTimeout(() => {
        delete DDTouch.pointerLeaveTimeout;
        // console.log('pointerleave delayed');
        simulatePointerMouseEvent(e, 'mouseleave');
    }, 10);
}
//# sourceMappingURL=dd-touch.js.map

/***/ },

/***/ 1263
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridStackEngine: () => (/* binding */ GridStackEngine)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1264);
/**
 * gridstack-engine.ts 12.6.0
 * Copyright (c) 2021-2025  Alain Dumesny - see GridStack root license
 */

/**
 * Defines the GridStack engine that handles all grid layout calculations and node positioning.
 * This is the core engine that performs grid manipulation without any DOM operations.
 *
 * The engine manages:
 * - Node positioning and collision detection
 * - Layout algorithms (compact, float, etc.)
 * - Grid resizing and column changes
 * - Widget movement and resizing logic
 *
 * NOTE: Values should not be modified directly - use the main GridStack API instead
 * to ensure proper DOM updates and event triggers.
 */
class GridStackEngine {
    constructor(opts = {}) {
        this.addedNodes = [];
        this.removedNodes = [];
        this.defaultColumn = 12;
        this.column = opts.column || this.defaultColumn;
        if (this.column > this.defaultColumn)
            this.defaultColumn = this.column;
        this.maxRow = opts.maxRow;
        this._float = opts.float;
        this.nodes = opts.nodes || [];
        this.onChange = opts.onChange;
    }
    /**
     * Enable/disable batch mode for multiple operations to optimize performance.
     * When enabled, layout updates are deferred until batch mode is disabled.
     *
     * @param flag true to enable batch mode, false to disable and apply changes
     * @param doPack if true (default), pack/compact nodes when disabling batch mode
     * @returns the engine instance for chaining
     *
     * @example
     * // Start batch mode for multiple operations
     * engine.batchUpdate(true);
     * engine.addNode(node1);
     * engine.addNode(node2);
     * engine.batchUpdate(false); // Apply all changes at once
     */
    batchUpdate(flag = true, doPack = true) {
        if (!!this.batchMode === flag)
            return this;
        this.batchMode = flag;
        if (flag) {
            this._prevFloat = this._float;
            this._float = true; // let things go anywhere for now... will restore and possibly reposition later
            this.cleanNodes();
            this.saveInitial(); // since begin update (which is called multiple times) won't do this
        }
        else {
            this._float = this._prevFloat;
            delete this._prevFloat;
            if (doPack)
                this._packNodes();
            this._notify();
        }
        return this;
    }
    // use entire row for hitting area (will use bottom reverse sorted first) if we not actively moving DOWN and didn't already skip
    _useEntireRowArea(node, nn) {
        return (!this.float || this.batchMode && !this._prevFloat) && !this._hasLocked && (!node._moving || node._skipDown || nn.y <= node.y);
    }
    /** @internal fix collision on given 'node', going to given new location 'nn', with optional 'collide' node already found.
     * return true if we moved. */
    _fixCollisions(node, nn = node, collide, opt = {}) {
        this.sortNodes(-1); // from last to first, so recursive collision move items in the right order
        collide = collide || this.collide(node, nn); // REAL area collide for swap and skip if none...
        if (!collide)
            return false;
        // swap check: if we're actively moving in gravity mode, see if we collide with an object the same size
        if (node._moving && !opt.nested && !this.float) {
            if (this.swap(node, collide))
                return true;
        }
        // during while() collisions MAKE SURE to check entire row so larger items don't leap frog small ones (push them all down starting last in grid)
        let area = nn;
        if (!this._loading && this._useEntireRowArea(node, nn)) {
            area = { x: 0, w: this.column, y: nn.y, h: nn.h };
            collide = this.collide(node, area, opt.skip); // force new hit
        }
        let didMove = false;
        const newOpt = { nested: true, pack: false };
        let counter = 0;
        while (collide = collide || this.collide(node, area, opt.skip)) { // could collide with more than 1 item... so repeat for each
            if (counter++ > this.nodes.length * 2) {
                throw new Error("Infinite collide check");
            }
            let moved;
            // if colliding with a locked item OR loading (move after) OR moving down with top gravity (and collide could move up) -> skip past the collide,
            // but remember that skip down so we only do this once (and push others otherwise).
            if (collide.locked || this._loading || node._moving && !node._skipDown && nn.y > node.y && !this.float &&
                // can take space we had, or before where we're going
                (!this.collide(collide, { ...collide, y: node.y }, node) || !this.collide(collide, { ...collide, y: nn.y - collide.h }, node))) {
                node._skipDown = (node._skipDown || nn.y > node.y);
                const newNN = { ...nn, y: collide.y + collide.h, ...newOpt };
                // pretent we moved to where we are now so we can continue any collision checks #2492
                moved = this._loading && _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(node, newNN) ? true : this.moveNode(node, newNN);
                if ((collide.locked || this._loading) && moved) {
                    _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(nn, node); // moving after lock become our new desired location
                }
                else if (!collide.locked && moved && opt.pack) {
                    // we moved after and will pack: do it now and keep the original drop location, but past the old collide to see what else we might push way
                    this._packNodes();
                    nn.y = collide.y + collide.h;
                    _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(node, nn);
                }
                didMove = didMove || moved;
            }
            else {
                // move collide down *after* where we will be, ignoring where we are now (don't collide with us)
                moved = this.moveNode(collide, { ...collide, y: nn.y + nn.h, skip: node, ...newOpt });
            }
            if (!moved)
                return didMove; // break inf loop if we couldn't move after all (ex: maxRow, fixed)
            collide = undefined;
        }
        return didMove;
    }
    /**
     * Return the first node that intercepts/collides with the given node or area.
     * Used for collision detection during drag and drop operations.
     *
     * @param skip the node to skip in collision detection (usually the node being moved)
     * @param area the area to check for collisions (defaults to skip node's area)
     * @param skip2 optional second node to skip in collision detection
     * @returns the first colliding node, or undefined if no collision
     *
     * @example
     * const colliding = engine.collide(draggedNode, {x: 2, y: 1, w: 2, h: 1});
     * if (colliding) {
     *   console.log('Would collide with:', colliding.id);
     * }
     */
    collide(skip, area = skip, skip2) {
        const skipId = skip._id;
        const skip2Id = skip2?._id;
        return this.nodes.find(n => n._id !== skipId && n._id !== skip2Id && _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isIntercepted(n, area));
    }
    /**
     * Return all nodes that intercept/collide with the given node or area.
     * Similar to collide() but returns all colliding nodes instead of just the first.
     *
     * @param skip the node to skip in collision detection
     * @param area the area to check for collisions (defaults to skip node's area)
     * @param skip2 optional second node to skip in collision detection
     * @returns array of all colliding nodes
     *
     * @example
     * const allCollisions = engine.collideAll(draggedNode);
     * console.log('Colliding with', allCollisions.length, 'nodes');
     */
    collideAll(skip, area = skip, skip2) {
        const skipId = skip._id;
        const skip2Id = skip2?._id;
        return this.nodes.filter(n => n._id !== skipId && n._id !== skip2Id && _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isIntercepted(n, area));
    }
    /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
    directionCollideCoverage(node, o, collides) {
        if (!o.rect || !node._rect)
            return;
        const r0 = node._rect; // where started
        const r = { ...o.rect }; // where we are
        // update dragged rect to show where it's coming from (above or below, etc...)
        if (r.y > r0.y) {
            r.h += r.y - r0.y;
            r.y = r0.y;
        }
        else {
            r.h += r0.y - r.y;
        }
        if (r.x > r0.x) {
            r.w += r.x - r0.x;
            r.x = r0.x;
        }
        else {
            r.w += r0.x - r.x;
        }
        let collide;
        let overMax = 0.5; // need >50%
        for (let n of collides) {
            if (n.locked || !n._rect) {
                break;
            }
            const r2 = n._rect; // overlapping target
            let yOver = Number.MAX_VALUE, xOver = Number.MAX_VALUE;
            // depending on which side we started from, compute the overlap % of coverage
            // (ex: from above/below we only compute the max horizontal line coverage)
            if (r0.y < r2.y) { // from above
                yOver = ((r.y + r.h) - r2.y) / r2.h;
            }
            else if (r0.y + r0.h > r2.y + r2.h) { // from below
                yOver = ((r2.y + r2.h) - r.y) / r2.h;
            }
            if (r0.x < r2.x) { // from the left
                xOver = ((r.x + r.w) - r2.x) / r2.w;
            }
            else if (r0.x + r0.w > r2.x + r2.w) { // from the right
                xOver = ((r2.x + r2.w) - r.x) / r2.w;
            }
            const over = Math.min(xOver, yOver);
            if (over > overMax) {
                overMax = over;
                collide = n;
            }
        }
        o.collide = collide; // save it so we don't have to find it again
        return collide;
    }
    /** does a pixel coverage returning the node that has the most coverage by area */
    /*
    protected collideCoverage(r: GridStackPosition, collides: GridStackNode[]): {collide: GridStackNode, over: number} {
      const collide: GridStackNode;
      const overMax = 0;
      collides.forEach(n => {
        if (n.locked || !n._rect) return;
        const over = Utils.areaIntercept(r, n._rect);
        if (over > overMax) {
          overMax = over;
          collide = n;
        }
      });
      return {collide, over: overMax};
    }
    */
    /**
     * Cache the pixel rectangles for all nodes used for collision detection during drag operations.
     * This optimization converts grid coordinates to pixel coordinates for faster collision detection.
     *
     * @param w width of a single grid cell in pixels
     * @param h height of a single grid cell in pixels
     * @param top top margin/padding in pixels
     * @param right right margin/padding in pixels
     * @param bottom bottom margin/padding in pixels
     * @param left left margin/padding in pixels
     * @returns the engine instance for chaining
     *
     * @internal This is typically called by GridStack during resize events
     */
    cacheRects(w, h, top, right, bottom, left) {
        this.nodes.forEach(n => n._rect = {
            y: n.y * h + top,
            x: n.x * w + left,
            w: n.w * w - left - right,
            h: n.h * h - top - bottom
        });
        return this;
    }
    /**
     * Attempt to swap the positions of two nodes if they meet swapping criteria.
     * Nodes can swap if they are the same size or in the same column/row, not locked, and touching.
     *
     * @param a first node to swap
     * @param b second node to swap
     * @returns true if swap was successful, false if not possible, undefined if not applicable
     *
     * @example
     * const swapped = engine.swap(nodeA, nodeB);
     * if (swapped) {
     *   console.log('Nodes swapped successfully');
     * }
     */
    swap(a, b) {
        if (!b || b.locked || !a || a.locked)
            return false;
        function _doSwap() {
            const x = b.x, y = b.y;
            b.x = a.x;
            b.y = a.y; // b -> a position
            if (a.h != b.h) {
                a.x = x;
                a.y = b.y + b.h; // a -> goes after b
            }
            else if (a.w != b.w) {
                a.x = b.x + b.w;
                a.y = y; // a -> goes after b
            }
            else {
                a.x = x;
                a.y = y; // a -> old b position
            }
            a._dirty = b._dirty = true;
            return true;
        }
        let touching; // remember if we called it (vs undefined)
        // same size and same row or column, and touching
        if (a.w === b.w && a.h === b.h && (a.x === b.x || a.y === b.y) && (touching = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isTouching(a, b)))
            return _doSwap();
        if (touching === false)
            return; // IFF ran test and fail, bail out
        // check for taking same columns (but different height) and touching
        if (a.w === b.w && a.x === b.x && (touching || (touching = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isTouching(a, b)))) {
            if (b.y < a.y) {
                const t = a;
                a = b;
                b = t;
            } // swap a <-> b vars so a is first
            return _doSwap();
        }
        if (touching === false)
            return;
        // check if taking same row (but different width) and touching
        if (a.h === b.h && a.y === b.y && (touching || (touching = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isTouching(a, b)))) {
            if (b.x < a.x) {
                const t = a;
                a = b;
                b = t;
            } // swap a <-> b vars so a is first
            return _doSwap();
        }
        return false;
    }
    /**
     * Check if the specified rectangular area is empty (no nodes occupy any part of it).
     *
     * @param x the x coordinate (column) of the area to check
     * @param y the y coordinate (row) of the area to check
     * @param w the width in columns of the area to check
     * @param h the height in rows of the area to check
     * @returns true if the area is completely empty, false if any node overlaps
     *
     * @example
     * if (engine.isAreaEmpty(2, 1, 3, 2)) {
     *   console.log('Area is available for placement');
     * }
     */
    isAreaEmpty(x, y, w, h) {
        const nn = { x: x || 0, y: y || 0, w: w || 1, h: h || 1 };
        return !this.collide(nn);
    }
    /**
     * Re-layout grid items to reclaim any empty space.
     * This optimizes the grid layout by moving items to fill gaps.
     *
     * @param layout layout algorithm to use:
     *   - 'compact' (default): find truly empty spaces, may reorder items
     *   - 'list': keep the sort order exactly the same, move items up sequentially
     * @param doSort if true (default), sort nodes by position before compacting
     * @returns the engine instance for chaining
     *
     * @example
     * // Compact to fill empty spaces
     * engine.compact();
     *
     * // Compact preserving item order
     * engine.compact('list');
     */
    compact(layout = 'compact', doSort = true) {
        if (this.nodes.length === 0)
            return this;
        if (doSort)
            this.sortNodes();
        const wasBatch = this.batchMode;
        if (!wasBatch)
            this.batchUpdate();
        const wasColumnResize = this._inColumnResize;
        if (!wasColumnResize)
            this._inColumnResize = true; // faster addNode()
        const copyNodes = this.nodes;
        this.nodes = []; // pretend we have no nodes to conflict layout to start with...
        copyNodes.forEach((n, index, list) => {
            let after;
            if (!n.locked) {
                n.autoPosition = true;
                if (layout === 'list' && index)
                    after = list[index - 1];
            }
            this.addNode(n, false, after); // 'false' for add event trigger
        });
        if (!wasColumnResize)
            delete this._inColumnResize;
        if (!wasBatch)
            this.batchUpdate(false);
        return this;
    }
    /**
     * Enable/disable floating widgets (default: `false`).
     * When floating is enabled, widgets can move up to fill empty spaces.
     * See [example](http://gridstackjs.com/demo/float.html)
     *
     * @param val true to enable floating, false to disable
     *
     * @example
     * engine.float = true;  // Enable floating
     * engine.float = false; // Disable floating (default)
     */
    set float(val) {
        if (this._float === val)
            return;
        this._float = val || false;
        if (!val) {
            this._packNodes()._notify();
        }
    }
    /**
     * Get the current floating mode setting.
     *
     * @returns true if floating is enabled, false otherwise
     *
     * @example
     * const isFloating = engine.float;
     * console.log('Floating enabled:', isFloating);
     */
    get float() { return this._float || false; }
    /**
     * Sort the nodes array from first to last, or reverse.
     * This is called during collision/placement operations to enforce a specific order.
     *
     * @param dir sort direction: 1 for ascending (first to last), -1 for descending (last to first)
     * @returns the engine instance for chaining
     *
     * @example
     * engine.sortNodes();    // Sort ascending (default)
     * engine.sortNodes(-1);  // Sort descending
     */
    sortNodes(dir = 1) {
        this.nodes = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.sort(this.nodes, dir);
        return this;
    }
    /** @internal called to top gravity pack the items back OR revert back to original Y positions when floating */
    _packNodes() {
        if (this.batchMode) {
            return this;
        }
        this.sortNodes(); // first to last
        if (this.float) {
            // restore original Y pos
            this.nodes.forEach(n => {
                if (n._updating || n._orig === undefined || n.y === n._orig.y)
                    return;
                let newY = n.y;
                while (newY > n._orig.y) {
                    --newY;
                    const collide = this.collide(n, { x: n.x, y: newY, w: n.w, h: n.h });
                    if (!collide) {
                        n._dirty = true;
                        n.y = newY;
                    }
                }
            });
        }
        else {
            // top gravity pack
            this.nodes.forEach((n, i) => {
                if (n.locked)
                    return;
                while (n.y > 0) {
                    const newY = i === 0 ? 0 : n.y - 1;
                    const canBeMoved = i === 0 || !this.collide(n, { x: n.x, y: newY, w: n.w, h: n.h });
                    if (!canBeMoved)
                        break;
                    // Note: must be dirty (from last position) for GridStack::OnChange CB to update positions
                    // and move items back. The user 'change' CB should detect changes from the original
                    // starting position instead.
                    n._dirty = (n.y !== newY);
                    n.y = newY;
                }
            });
        }
        return this;
    }
    /**
     * Prepare and validate a node's coordinates and values for the current grid.
     * This ensures the node has valid position, size, and properties before being added to the grid.
     *
     * @param node the node to prepare and validate
     * @param resizing if true, resize the node down if it's out of bounds; if false, move it to fit
     * @returns the prepared node with valid coordinates
     *
     * @example
     * const node = { w: 3, h: 2, content: 'Hello' };
     * const prepared = engine.prepareNode(node);
     * console.log('Node prepared at:', prepared.x, prepared.y);
     */
    prepareNode(node, resizing) {
        node._id = node._id ?? GridStackEngine._idSeq++;
        // make sure USER supplied id are unique in our list, else assign a new one as it will create issues during load/update/etc...
        const id = node.id;
        if (id) {
            let count = 1; // append nice _n rather than some random number
            while (this.nodes.find(n => n.id === node.id && n !== node)) {
                node.id = id + '_' + (count++);
            }
        }
        // if we're missing position, have the grid position us automatically (before we set them to 0,0)
        if (node.x === undefined || node.y === undefined || node.x === null || node.y === null) {
            node.autoPosition = true;
        }
        // assign defaults for missing required fields
        const defaults = { x: 0, y: 0, w: 1, h: 1 };
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.defaults(node, defaults);
        if (!node.autoPosition) {
            delete node.autoPosition;
        }
        if (!node.noResize) {
            delete node.noResize;
        }
        if (!node.noMove) {
            delete node.noMove;
        }
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.sanitizeMinMax(node);
        // check for NaN (in case messed up strings were passed. can't do parseInt() || defaults.x above as 0 is valid #)
        if (typeof node.x == 'string') {
            node.x = Number(node.x);
        }
        if (typeof node.y == 'string') {
            node.y = Number(node.y);
        }
        if (typeof node.w == 'string') {
            node.w = Number(node.w);
        }
        if (typeof node.h == 'string') {
            node.h = Number(node.h);
        }
        if (isNaN(node.x)) {
            node.x = defaults.x;
            node.autoPosition = true;
        }
        if (isNaN(node.y)) {
            node.y = defaults.y;
            node.autoPosition = true;
        }
        if (isNaN(node.w)) {
            node.w = defaults.w;
        }
        if (isNaN(node.h)) {
            node.h = defaults.h;
        }
        this.nodeBoundFix(node, resizing);
        return node;
    }
    /**
     * Part 2 of preparing a node to fit inside the grid - validates and fixes coordinates and dimensions.
     * This ensures the node fits within grid boundaries and respects min/max constraints.
     *
     * @param node the node to validate and fix
     * @param resizing if true, resize the node to fit; if false, move the node to fit
     * @returns the engine instance for chaining
     *
     * @example
     * // Fix a node that might be out of bounds
     * engine.nodeBoundFix(node, true); // Resize to fit
     * engine.nodeBoundFix(node, false); // Move to fit
     */
    nodeBoundFix(node, resizing) {
        const before = node._orig || _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, node);
        if (node.maxW) {
            node.w = Math.min(node.w || 1, node.maxW);
        }
        if (node.maxH) {
            node.h = Math.min(node.h || 1, node.maxH);
        }
        if (node.minW) {
            node.w = Math.max(node.w || 1, node.minW);
        }
        if (node.minH) {
            node.h = Math.max(node.h || 1, node.minH);
        }
        // if user loaded a larger than allowed widget for current # of columns,
        // remember it's position & width so we can restore back (1 -> 12 column) #1655 #1985
        // IFF we're not in the middle of column resizing!
        const saveOrig = (node.x || 0) + (node.w || 1) > this.column;
        if (saveOrig && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && node._id != null && this.findCacheLayout(node, this.defaultColumn) === -1) {
            const copy = { ...node }; // need _id + positions
            if (copy.autoPosition || copy.x === undefined) {
                delete copy.x;
                delete copy.y;
            }
            else
                copy.x = Math.min(this.defaultColumn - 1, copy.x);
            copy.w = Math.min(this.defaultColumn, copy.w || 1);
            this.cacheOneLayout(copy, this.defaultColumn);
        }
        if (node.w > this.column) {
            node.w = this.column;
        }
        else if (node.w < 1) {
            node.w = 1;
        }
        if (this.maxRow && node.h > this.maxRow) {
            node.h = this.maxRow;
        }
        else if (node.h < 1) {
            node.h = 1;
        }
        if (node.x < 0) {
            node.x = 0;
        }
        if (node.y < 0) {
            node.y = 0;
        }
        if (node.x + node.w > this.column) {
            if (resizing) {
                node.w = this.column - node.x;
            }
            else {
                node.x = this.column - node.w;
            }
        }
        if (this.maxRow && node.y + node.h > this.maxRow) {
            if (resizing) {
                node.h = this.maxRow - node.y;
            }
            else {
                node.y = this.maxRow - node.h;
            }
        }
        if (!_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(node, before)) {
            node._dirty = true;
        }
        return this;
    }
    /**
     * Returns a list of nodes that have been modified from their original values.
     * This is used to track which nodes need DOM updates.
     *
     * @param verify if true, performs additional verification by comparing current vs original positions
     * @returns array of nodes that have been modified
     *
     * @example
     * const changed = engine.getDirtyNodes();
     * console.log('Modified nodes:', changed.length);
     *
     * // Get verified dirty nodes
     * const verified = engine.getDirtyNodes(true);
     */
    getDirtyNodes(verify) {
        // compare original x,y,w,h instead as _dirty can be a temporary state
        if (verify) {
            return this.nodes.filter(n => n._dirty && !_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(n, n._orig));
        }
        return this.nodes.filter(n => n._dirty);
    }
    /** @internal call this to call onChange callback with dirty nodes so DOM can be updated */
    _notify(removedNodes) {
        if (this.batchMode || !this.onChange)
            return this;
        const dirtyNodes = (removedNodes || []).concat(this.getDirtyNodes());
        this.onChange(dirtyNodes);
        return this;
    }
    /**
     * Clean all dirty and last tried information from nodes.
     * This resets the dirty state tracking for all nodes.
     *
     * @returns the engine instance for chaining
     *
     * @internal
     */
    cleanNodes() {
        if (this.batchMode)
            return this;
        this.nodes.forEach(n => {
            delete n._dirty;
            delete n._lastTried;
        });
        return this;
    }
    /**
     * Save the initial position/size of all nodes to track real dirty state.
     * This creates a snapshot of current positions that can be restored later.
     *
     * Note: Should be called right after change events and before move/resize operations.
     *
     * @returns the engine instance for chaining
     *
     * @internal
     */
    saveInitial() {
        this.nodes.forEach(n => {
            n._orig = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, n);
            delete n._dirty;
        });
        this._hasLocked = this.nodes.some(n => n.locked);
        return this;
    }
    /**
     * Restore all nodes back to their initial values.
     * This is typically called when canceling an operation (e.g., Esc key during drag).
     *
     * @returns the engine instance for chaining
     *
     * @internal
     */
    restoreInitial() {
        this.nodes.forEach(n => {
            if (!n._orig || _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(n, n._orig))
                return;
            _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(n, n._orig);
            n._dirty = true;
        });
        this._notify();
        return this;
    }
    /**
     * Find the first available empty spot for the given node dimensions.
     * Updates the node's x,y attributes with the found position.
     *
     * @param node the node to find a position for (w,h must be set)
     * @param nodeList optional list of nodes to check against (defaults to engine nodes)
     * @param column optional column count (defaults to engine column count)
     * @param after optional node to start search after (maintains order)
     * @returns true if an empty position was found and node was updated
     *
     * @example
     * const node = { w: 2, h: 1 };
     * if (engine.findEmptyPosition(node)) {
     *   console.log('Found position at:', node.x, node.y);
     * }
     */
    findEmptyPosition(node, nodeList = this.nodes, column = this.column, after) {
        const start = after ? after.y * column + (after.x + after.w) : 0;
        let found = false;
        for (let i = start; !found; ++i) {
            const x = i % column;
            const y = Math.floor(i / column);
            if (x + node.w > column) {
                continue;
            }
            const box = { x, y, w: node.w, h: node.h };
            if (!nodeList.find(n => _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isIntercepted(box, n))) {
                if (node.x !== x || node.y !== y)
                    node._dirty = true;
                node.x = x;
                node.y = y;
                delete node.autoPosition;
                found = true;
            }
        }
        return found;
    }
    /**
     * Add the given node to the grid, handling collision detection and re-packing.
     * This is the main method for adding new widgets to the engine.
     *
     * @param node the node to add to the grid
     * @param triggerAddEvent if true, adds node to addedNodes list for event triggering
     * @param after optional node to place this node after (for ordering)
     * @returns the added node (or existing node if duplicate)
     *
     * @example
     * const node = { x: 0, y: 0, w: 2, h: 1, content: 'Hello' };
     * const added = engine.addNode(node, true);
     */
    addNode(node, triggerAddEvent = false, after) {
        const dup = this.nodes.find(n => n._id === node._id);
        if (dup)
            return dup; // prevent inserting twice! return it instead.
        // skip prepareNode if we're in middle of column resize (not new) but do check for bounds!
        this._inColumnResize ? this.nodeBoundFix(node) : this.prepareNode(node);
        delete node._temporaryRemoved;
        delete node._removeDOM;
        let skipCollision;
        if (node.autoPosition && this.findEmptyPosition(node, this.nodes, this.column, after)) {
            delete node.autoPosition; // found our slot
            skipCollision = true;
        }
        this.nodes.push(node);
        if (triggerAddEvent) {
            this.addedNodes.push(node);
        }
        if (!skipCollision)
            this._fixCollisions(node);
        if (!this.batchMode) {
            this._packNodes()._notify();
        }
        return node;
    }
    /**
     * Remove the given node from the grid.
     *
     * @param node the node to remove
     * @param removeDOM if true (default), marks node for DOM removal
     * @param triggerEvent if true, adds node to removedNodes list for event triggering
     * @returns the engine instance for chaining
     *
     * @example
     * engine.removeNode(node, true, true);
     */
    removeNode(node, removeDOM = true, triggerEvent = false) {
        if (!this.nodes.find(n => n._id === node._id)) {
            // TEST console.log(`Error: GridStackEngine.removeNode() node._id=${node._id} not found!`)
            return this;
        }
        if (triggerEvent) { // we wait until final drop to manually track removed items (rather than during drag)
            this.removedNodes.push(node);
        }
        if (removeDOM)
            node._removeDOM = true; // let CB remove actual HTML (used to set _id to null, but then we loose layout info)
        // don't use 'faster' .splice(findIndex(),1) in case node isn't in our list, or in multiple times.
        this.nodes = this.nodes.filter(n => n._id !== node._id);
        if (!node._isAboutToRemove)
            this._packNodes(); // if dragged out, no need to relayout as already done...
        this._notify([node]);
        return this;
    }
    /**
     * Remove all nodes from the grid.
     *
     * @param removeDOM if true (default), marks all nodes for DOM removal
     * @param triggerEvent if true (default), triggers removal events
     * @returns the engine instance for chaining
     *
     * @example
     * engine.removeAll(); // Remove all nodes
     */
    removeAll(removeDOM = true, triggerEvent = true) {
        delete this._layouts;
        if (!this.nodes.length)
            return this;
        removeDOM && this.nodes.forEach(n => n._removeDOM = true); // let CB remove actual HTML (used to set _id to null, but then we loose layout info)
        const removedNodes = this.nodes;
        this.removedNodes = triggerEvent ? removedNodes : [];
        this.nodes = [];
        return this._notify(removedNodes);
    }
    /**
     * Check if a node can be moved to a new position, considering layout constraints.
     * This is a safer version of moveNode() that validates the move first.
     *
     * For complex cases (like maxRow constraints), it simulates the move in a clone first,
     * then applies the changes only if they meet all specifications.
     *
     * @param node the node to move
     * @param o move options including target position
     * @returns true if the node was successfully moved
     *
     * @example
     * const canMove = engine.moveNodeCheck(node, { x: 2, y: 1 });
     * if (canMove) {
     *   console.log('Node moved successfully');
     * }
     */
    moveNodeCheck(node, o) {
        // if (node.locked) return false;
        if (!this.changedPosConstrain(node, o))
            return false;
        o.pack = true;
        // simpler case: move item directly...
        if (!this.maxRow) {
            return this.moveNode(node, o);
        }
        // complex case: create a clone with NO maxRow (will check for out of bounds at the end)
        let clonedNode;
        const clone = new GridStackEngine({
            column: this.column,
            float: this.float,
            nodes: this.nodes.map(n => {
                if (n._id === node._id) {
                    clonedNode = { ...n };
                    return clonedNode;
                }
                return { ...n };
            })
        });
        if (!clonedNode)
            return false;
        // check if we're covering 50% collision and could move, while still being under maxRow or at least not making it worse
        // (case where widget was somehow added past our max #2449)
        const canMove = clone.moveNode(clonedNode, o) && clone.getRow() <= Math.max(this.getRow(), this.maxRow);
        // else check if we can force a swap (float=true, or different shapes) on non-resize
        if (!canMove && !o.resizing && o.collide) {
            const collide = o.collide.el.gridstackNode; // find the source node the clone collided with at 50%
            if (this.swap(node, collide)) { // swaps and mark dirty
                this._notify();
                return true;
            }
        }
        if (!canMove)
            return false;
        // if clone was able to move, copy those mods over to us now instead of caller trying to do this all over!
        // Note: we can't use the list directly as elements and other parts point to actual node, so copy content
        clone.nodes.filter(n => n._dirty).forEach(c => {
            const n = this.nodes.find(a => a._id === c._id);
            if (!n)
                return;
            _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(n, c);
            n._dirty = true;
        });
        this._notify();
        return true;
    }
    /** return true if can fit in grid height constrain only (always true if no maxRow) */
    willItFit(node) {
        delete node._willFitPos;
        if (!this.maxRow)
            return true;
        // create a clone with NO maxRow and check if still within size
        const clone = new GridStackEngine({
            column: this.column,
            float: this.float,
            nodes: this.nodes.map(n => { return { ...n }; })
        });
        const n = { ...node }; // clone node so we don't mod any settings on it but have full autoPosition and min/max as well! #1687
        this.cleanupNode(n);
        delete n.el;
        delete n._id;
        delete n.content;
        delete n.grid;
        clone.addNode(n);
        if (clone.getRow() <= this.maxRow) {
            node._willFitPos = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, n);
            return true;
        }
        return false;
    }
    /** true if x,y or w,h are different after clamping to min/max */
    changedPosConstrain(node, p) {
        // first make sure w,h are set for caller
        p.w = p.w || node.w;
        p.h = p.h || node.h;
        if (node.x !== p.x || node.y !== p.y)
            return true;
        // check constrained w,h
        if (node.maxW) {
            p.w = Math.min(p.w, node.maxW);
        }
        if (node.maxH) {
            p.h = Math.min(p.h, node.maxH);
        }
        if (node.minW) {
            p.w = Math.max(p.w, node.minW);
        }
        if (node.minH) {
            p.h = Math.max(p.h, node.minH);
        }
        return (node.w !== p.w || node.h !== p.h);
    }
    /** return true if the passed in node was actually moved (checks for no-op and locked) */
    moveNode(node, o) {
        if (!node || /*node.locked ||*/ !o)
            return false;
        let wasUndefinedPack;
        if (o.pack === undefined && !this.batchMode) {
            wasUndefinedPack = o.pack = true;
        }
        // constrain the passed in values and check if we're still changing our node
        if (typeof o.x !== 'number') {
            o.x = node.x;
        }
        if (typeof o.y !== 'number') {
            o.y = node.y;
        }
        if (typeof o.w !== 'number') {
            o.w = node.w;
        }
        if (typeof o.h !== 'number') {
            o.h = node.h;
        }
        const resizing = (node.w !== o.w || node.h !== o.h);
        const nn = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, node, true); // get min/max out first, then opt positions next
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(nn, o);
        this.nodeBoundFix(nn, resizing);
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(o, nn);
        if (!o.forceCollide && _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(node, o))
            return false;
        const prevPos = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, node);
        // check if we will need to fix collision at our new location
        const collides = this.collideAll(node, nn, o.skip);
        let needToMove = true;
        if (collides.length) {
            const activeDrag = node._moving && !o.nested;
            // check to make sure we actually collided over 50% surface area while dragging
            let collide = activeDrag ? this.directionCollideCoverage(node, o, collides) : collides[0];
            // if we're enabling creation of sub-grids on the fly, see if we're covering 80% of either one, if we didn't already do that
            if (activeDrag && collide && node.grid?.opts?.subGridDynamic && !node.grid._isTemp) {
                const over = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.areaIntercept(o.rect, collide._rect);
                const a1 = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.area(o.rect);
                const a2 = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.area(collide._rect);
                const perc = over / (a1 < a2 ? a1 : a2);
                if (perc > .8) {
                    collide.grid.makeSubGrid(collide.el, undefined, node);
                    collide = undefined;
                }
            }
            if (collide) {
                needToMove = !this._fixCollisions(node, nn, collide, o); // check if already moved...
            }
            else {
                needToMove = false; // we didn't cover >50% for a move, skip...
                if (wasUndefinedPack)
                    delete o.pack;
            }
        }
        // now move (to the original ask vs the collision version which might differ) and repack things
        if (needToMove && !_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(node, nn)) {
            node._dirty = true;
            _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(node, nn);
        }
        if (o.pack) {
            this._packNodes()
                ._notify();
        }
        return !_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(node, prevPos); // pack might have moved things back
    }
    getRow() {
        return this.nodes.reduce((row, n) => Math.max(row, n.y + n.h), 0);
    }
    beginUpdate(node) {
        if (!node._updating) {
            node._updating = true;
            delete node._skipDown;
            if (!this.batchMode)
                this.saveInitial();
        }
        return this;
    }
    endUpdate() {
        const n = this.nodes.find(n => n._updating);
        if (n) {
            delete n._updating;
            delete n._skipDown;
        }
        return this;
    }
    /** saves a copy of the largest column layout (eg 12 even when rendering 1 column) so we don't loose orig layout, unless explicity column
     * count to use is given. returning a list of widgets for serialization
     * @param saveElement if true (default), the element will be saved to GridStackWidget.el field, else it will be removed.
     * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
     * @param column if provided, the grid will be saved for the given column count (IFF we have matching internal saved layout, or current layout).
     * Note: nested grids will ALWAYS save the container w to match overall layouts (parent + child) to be consistent.
    */
    save(saveElement = true, saveCB, column) {
        // use the highest layout for any saved info so we can have full detail on reload #1849
        // unless we're given a column to match (always set for nested grids)
        const len = this._layouts?.length || 0;
        let layout;
        if (len) {
            if (column) {
                if (column !== this.column)
                    layout = this._layouts[column];
            }
            else if (this.column !== len - 1) {
                layout = this._layouts[len - 1];
            }
        }
        const list = [];
        this.sortNodes();
        this.nodes.forEach(n => {
            const wl = layout?.find(l => l._id === n._id);
            // use layout info fields instead if set
            const w = { ...n, ...(wl || {}) };
            _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.removeInternalForSave(w, !saveElement);
            if (saveCB)
                saveCB(n, w);
            list.push(w);
        });
        return list;
    }
    /** @internal called whenever a node is added or moved - updates the cached layouts */
    layoutsNodesChange(nodes) {
        if (!this._layouts || this._inColumnResize)
            return this;
        // remove smaller layouts - we will re-generate those on the fly... larger ones need to update
        this._layouts.forEach((layout, column) => {
            if (!layout || column === this.column)
                return this;
            if (column < this.column) {
                this._layouts[column] = undefined;
            }
            else {
                // we save the original x,y,w (h isn't cached) to see what actually changed to propagate better.
                // NOTE: we don't need to check against out of bound scaling/moving as that will be done when using those cache values. #1785
                const ratio = column / this.column;
                nodes.forEach(node => {
                    if (!node._orig)
                        return; // didn't change (newly added ?)
                    const n = layout.find(l => l._id === node._id);
                    if (!n)
                        return; // no cache for new nodes. Will use those values.
                    // Y changed, push down same amount
                    // TODO: detect doing item 'swaps' will help instead of move (especially in 1 column mode)
                    if (n.y >= 0 && node.y !== node._orig.y) {
                        n.y += (node.y - node._orig.y);
                        if (n.y < 0)
                            n.y = 0;
                    }
                    // X changed, scale from new position
                    if (node.x !== node._orig.x) {
                        n.x = Math.round(node.x * ratio);
                        if (n.x < 0)
                            n.x = 0;
                    }
                    // width changed, scale from new width
                    if (node.w !== node._orig.w) {
                        n.w = Math.round(node.w * ratio);
                        if (n.w < 1)
                            n.w = 1;
                    }
                    // ...height always carries over from cache
                });
            }
        });
        return this;
    }
    /**
     * @internal Called to scale the widget width & position up/down based on the column change.
     * Note we store previous layouts (especially original ones) to make it possible to go
     * from say 12 -> 1 -> 12 and get back to where we were.
     *
     * @param prevColumn previous number of columns
     * @param column  new column number
     * @param layout specify the type of re-layout that will happen (position, size, etc...).
     * Note: items will never be outside of the current column boundaries. default (moveScale). Ignored for 1 column
     */
    columnChanged(prevColumn, column, layout = 'moveScale') {
        if (!this.nodes.length || !column || prevColumn === column)
            return this;
        // simpler shortcuts layouts
        const doCompact = layout === 'compact' || layout === 'list';
        if (doCompact) {
            this.sortNodes(1); // sort with original layout once and only once (new column will affect order otherwise)
        }
        // cache the current layout in case they want to go back (like 12 -> 1 -> 12) as it requires original data IFF we're sizing down (see below)
        if (column < prevColumn)
            this.cacheLayout(this.nodes, prevColumn);
        this.batchUpdate(); // do this EARLY as it will call saveInitial() so we can detect where we started for _dirty and collision
        let newNodes = [];
        let nodes = doCompact ? this.nodes : _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.sort(this.nodes, -1); // current column reverse sorting so we can insert last to front (limit collision)
        // see if we have cached previous layout IFF we are going up in size (restore) otherwise always
        // generate next size down from where we are (looks more natural as you gradually size down).
        if (column > prevColumn && this._layouts) {
            const cacheNodes = this._layouts[column] || [];
            // ...if not, start with the largest layout (if not already there) as down-scaling is more accurate
            // by pretending we came from that larger column by assigning those values as starting point
            const lastIndex = this._layouts.length - 1;
            if (!cacheNodes.length && prevColumn !== lastIndex && this._layouts[lastIndex]?.length) {
                prevColumn = lastIndex;
                this._layouts[lastIndex].forEach(cacheNode => {
                    const n = nodes.find(n => n._id === cacheNode._id);
                    if (n) {
                        // still current, use cache info positions
                        if (!doCompact && !cacheNode.autoPosition) {
                            n.x = cacheNode.x ?? n.x;
                            n.y = cacheNode.y ?? n.y;
                        }
                        n.w = cacheNode.w ?? n.w;
                        if (cacheNode.x == undefined || cacheNode.y === undefined)
                            n.autoPosition = true;
                    }
                });
            }
            // if we found cache re-use those nodes that are still current
            cacheNodes.forEach(cacheNode => {
                const j = nodes.findIndex(n => n._id === cacheNode._id);
                if (j !== -1) {
                    const n = nodes[j];
                    // still current, use cache info positions
                    if (doCompact) {
                        n.w = cacheNode.w; // only w is used, and don't trim the list
                        return;
                    }
                    if (cacheNode.autoPosition || isNaN(cacheNode.x) || isNaN(cacheNode.y)) {
                        this.findEmptyPosition(cacheNode, newNodes);
                    }
                    if (!cacheNode.autoPosition) {
                        n.x = cacheNode.x ?? n.x;
                        n.y = cacheNode.y ?? n.y;
                        n.w = cacheNode.w ?? n.w;
                        newNodes.push(n);
                    }
                    nodes.splice(j, 1);
                }
            });
        }
        // much simpler layout that just compacts
        if (doCompact) {
            this.compact(layout, false);
        }
        else {
            // ...and add any extra non-cached ones
            if (nodes.length) {
                if (typeof layout === 'function') {
                    layout(column, prevColumn, newNodes, nodes);
                }
                else {
                    const ratio = (doCompact || layout === 'none') ? 1 : column / prevColumn;
                    const move = (layout === 'move' || layout === 'moveScale');
                    const scale = (layout === 'scale' || layout === 'moveScale');
                    nodes.forEach(node => {
                        // NOTE: x + w could be outside of the grid, but addNode() below will handle that
                        node.x = (column === 1 ? 0 : (move ? Math.round(node.x * ratio) : Math.min(node.x, column - 1)));
                        node.w = ((column === 1 || prevColumn === 1) ? 1 : scale ? (Math.round(node.w * ratio) || 1) : (Math.min(node.w, column)));
                        newNodes.push(node);
                    });
                    nodes = [];
                }
            }
            // finally re-layout them in reverse order (to get correct placement)
            newNodes = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.sort(newNodes, -1);
            this._inColumnResize = true; // prevent cache update
            this.nodes = []; // pretend we have no nodes to start with (add() will use same structures) to simplify layout
            newNodes.forEach(node => {
                this.addNode(node, false); // 'false' for add event trigger
                delete node._orig; // make sure the commit doesn't try to restore things back to original
            });
        }
        this.nodes.forEach(n => delete n._orig); // clear _orig before batch=false so it doesn't handle float=true restore
        this.batchUpdate(false, !doCompact);
        delete this._inColumnResize;
        return this;
    }
    /**
     * call to cache the given layout internally to the given location so we can restore back when column changes size
     * @param nodes list of nodes
     * @param column corresponding column index to save it under
     * @param clear if true, will force other caches to be removed (default false)
     */
    cacheLayout(nodes, column, clear = false) {
        const copy = [];
        nodes.forEach((n, i) => {
            // make sure we have an id in case this is new layout, else re-use id already set
            if (n._id === undefined) {
                const existing = n.id ? this.nodes.find(n2 => n2.id === n.id) : undefined; // find existing node using users id
                n._id = existing?._id ?? GridStackEngine._idSeq++;
            }
            copy[i] = { x: n.x, y: n.y, w: n.w, _id: n._id }; // only thing we change is x,y,w and id to find it back
        });
        this._layouts = clear ? [] : this._layouts || []; // use array to find larger quick
        this._layouts[column] = copy;
        return this;
    }
    /**
     * call to cache the given node layout internally to the given location so we can restore back when column changes size
     * @param node single node to cache
     * @param column corresponding column index to save it under
     */
    cacheOneLayout(n, column) {
        n._id = n._id ?? GridStackEngine._idSeq++;
        const l = { x: n.x, y: n.y, w: n.w, _id: n._id };
        if (n.autoPosition || n.x === undefined) {
            delete l.x;
            delete l.y;
            if (n.autoPosition)
                l.autoPosition = true;
        }
        this._layouts = this._layouts || [];
        this._layouts[column] = this._layouts[column] || [];
        const index = this.findCacheLayout(n, column);
        if (index === -1)
            this._layouts[column].push(l);
        else
            this._layouts[column][index] = l;
        return this;
    }
    findCacheLayout(n, column) {
        return this._layouts?.[column]?.findIndex(l => l._id === n._id) ?? -1;
    }
    removeNodeFromLayoutCache(n) {
        if (!this._layouts) {
            return;
        }
        for (let i = 0; i < this._layouts.length; i++) {
            const index = this.findCacheLayout(n, i);
            if (index !== -1) {
                this._layouts[i].splice(index, 1);
            }
        }
    }
    /** called to remove all internal values but the _id */
    cleanupNode(node) {
        for (const prop in node) {
            if (prop[0] === '_' && prop !== '_id')
                delete node[prop];
        }
        return this;
    }
}
/** @internal unique global internal _id counter */
GridStackEngine._idSeq = 0;

//# sourceMappingURL=gridstack-engine.js.map

/***/ },

/***/ 1262
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDBaseImplement: () => (/* reexport safe */ _dd_base_impl__WEBPACK_IMPORTED_MODULE_11__.DDBaseImplement),
/* harmony export */   DDDraggable: () => (/* reexport safe */ _dd_draggable__WEBPACK_IMPORTED_MODULE_7__.DDDraggable),
/* harmony export */   DDDroppable: () => (/* reexport safe */ _dd_droppable__WEBPACK_IMPORTED_MODULE_8__.DDDroppable),
/* harmony export */   DDElement: () => (/* reexport safe */ _dd_element__WEBPACK_IMPORTED_MODULE_6__.DDElement),
/* harmony export */   DDGridStack: () => (/* reexport safe */ _dd_gridstack__WEBPACK_IMPORTED_MODULE_3__.DDGridStack),
/* harmony export */   DDManager: () => (/* reexport safe */ _dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager),
/* harmony export */   DDResizable: () => (/* reexport safe */ _dd_resizable__WEBPACK_IMPORTED_MODULE_9__.DDResizable),
/* harmony export */   DDResizableHandle: () => (/* reexport safe */ _dd_resizable_handle__WEBPACK_IMPORTED_MODULE_10__.DDResizableHandle),
/* harmony export */   GridStack: () => (/* binding */ GridStack),
/* harmony export */   GridStackEngine: () => (/* reexport safe */ _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__.GridStackEngine),
/* harmony export */   Utils: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.Utils),
/* harmony export */   gridDefaults: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults)
/* harmony export */ });
/* harmony import */ var _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1263);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1264);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1265);
/* harmony import */ var _dd_gridstack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1266);
/* harmony import */ var _dd_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1271);
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1267);
/* harmony import */ var _dd_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1268);
/* harmony import */ var _dd_draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1273);
/* harmony import */ var _dd_droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1274);
/* harmony import */ var _dd_resizable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1269);
/* harmony import */ var _dd_resizable_handle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1270);
/* harmony import */ var _dd_base_impl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1272);
/*!
 * GridStack 12.6.0
 * https://gridstackjs.com/
 *
 * Copyright (c) 2021-2025  Alain Dumesny
 * see root license https://github.com/gridstack/gridstack.js/tree/master/LICENSE
 */



/*
 * and include D&D by default
 * TODO: while we could generate a gridstack-static.js at smaller size - saves about 31k (41k -> 72k)
 * I don't know how to generate the DD only code at the remaining 31k to delay load as code depends on Gridstack.ts
 * also it caused loading issues in prod - see https://github.com/gridstack/gridstack.js/issues/2039
 */



const dd = new _dd_gridstack__WEBPACK_IMPORTED_MODULE_3__.DDGridStack;
// export all dependent file as well to make it easier for users to just import the main file











/**
 * Main gridstack class - you will need to call `GridStack.init()` first to initialize your grid.
 * Note: your grid elements MUST have the following classes for the CSS layout to work:
 * @example
 * <div class="grid-stack">
 *   <div class="grid-stack-item">
 *     <div class="grid-stack-item-content">Item 1</div>
 *   </div>
 * </div>
 */
class GridStack {
    /**
     * initializing the HTML element, or selector string, into a grid will return the grid. Calling it again will
     * simply return the existing instance (ignore any passed options). There is also an initAll() version that support
     * multiple grids initialization at once. Or you can use addGrid() to create the entire grid from JSON.
     * @param options grid options (optional)
     * @param elOrString element or CSS selector (first one used) to convert to a grid (default to '.grid-stack' class selector)
     *
     * @example
     * const grid = GridStack.init();
     *
     * Note: the HTMLElement (of type GridHTMLElement) will store a `gridstack: GridStack` value that can be retrieve later
     * const grid = document.querySelector('.grid-stack').gridstack;
     */
    static init(options = {}, elOrString = '.grid-stack') {
        if (typeof document === 'undefined')
            return null; // temp workaround SSR
        const el = GridStack.getGridElement(elOrString);
        if (!el) {
            if (typeof elOrString === 'string') {
                console.error('GridStack.initAll() no grid was found with selector "' + elOrString + '" - element missing or wrong selector ?' +
                    '\nNote: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.');
            }
            else {
                console.error('GridStack.init() no grid element was passed.');
            }
            return null;
        }
        if (!el.gridstack) {
            el.gridstack = new GridStack(el, _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(options));
        }
        return el.gridstack;
    }
    /**
     * Will initialize a list of elements (given a selector) and return an array of grids.
     * @param options grid options (optional)
     * @param selector elements selector to convert to grids (default to '.grid-stack' class selector)
     *
     * @example
     * const grids = GridStack.initAll();
     * grids.forEach(...)
     */
    static initAll(options = {}, selector = '.grid-stack') {
        const grids = [];
        if (typeof document === 'undefined')
            return grids; // temp workaround SSR
        GridStack.getGridElements(selector).forEach(el => {
            if (!el.gridstack) {
                el.gridstack = new GridStack(el, _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(options));
            }
            grids.push(el.gridstack);
        });
        if (grids.length === 0) {
            console.error('GridStack.initAll() no grid was found with selector "' + selector + '" - element missing or wrong selector ?' +
                '\nNote: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.');
        }
        return grids;
    }
    /**
     * call to create a grid with the given options, including loading any children from JSON structure. This will call GridStack.init(), then
     * grid.load() on any passed children (recursively). Great alternative to calling init() if you want entire grid to come from
     * JSON serialized data, including options.
     * @param parent HTML element parent to the grid
     * @param opt grids options used to initialize the grid, and list of children
     */
    static addGrid(parent, opt = {}) {
        if (!parent)
            return null;
        let el = parent;
        if (el.gridstack) {
            // already a grid - set option and load data
            const grid = el.gridstack;
            if (opt)
                grid.opts = { ...grid.opts, ...opt };
            if (opt.children !== undefined)
                grid.load(opt.children);
            return grid;
        }
        // create the grid element, but check if the passed 'parent' already has grid styling and should be used instead
        const parentIsGrid = parent.classList.contains('grid-stack');
        if (!parentIsGrid || GridStack.addRemoveCB) {
            if (GridStack.addRemoveCB) {
                el = GridStack.addRemoveCB(parent, opt, true, true);
            }
            else {
                el = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createDiv(['grid-stack', opt.class], parent);
            }
        }
        // create grid class and load any children
        const grid = GridStack.init(opt, el);
        return grid;
    }
    /** call this method to register your engine instead of the default one.
     * See instead `GridStackOptions.engineClass` if you only need to
     * replace just one instance.
     */
    static registerEngine(engineClass) {
        GridStack.engineClass = engineClass;
    }
    /**
     * @internal create placeholder DIV as needed
     * @returns the placeholder element for indicating drop zones during drag operations
     */
    get placeholder() {
        if (!this._placeholder) {
            this._placeholder = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createDiv([this.opts.placeholderClass, _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.itemClass, this.opts.itemClass]);
            const placeholderChild = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createDiv(['placeholder-content'], this._placeholder);
            if (this.opts.placeholderText) {
                placeholderChild.textContent = this.opts.placeholderText;
            }
        }
        return this._placeholder;
    }
    /**
     * Construct a grid item from the given element and options
     * @param el the HTML element tied to this grid after it's been initialized
     * @param opts grid options - public for classes to access, but use methods to modify!
     */
    constructor(el, opts = {}) {
        this.el = el;
        this.opts = opts;
        /** time to wait for animation (if enabled) to be done so content sizing can happen */
        this.animationDelay = 300 + 10;
        /** @internal */
        this._gsEventHandler = {};
        /** @internal extra row added when dragging at the bottom of the grid */
        this._extraDragRow = 0;
        /** @internal meant to store the scale of the active grid */
        this.dragTransform = { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 };
        el.gridstack = this;
        this.opts = opts = opts || {}; // handles null/undefined/0
        if (!el.classList.contains('grid-stack')) {
            this.el.classList.add('grid-stack');
        }
        // if row property exists, replace minRow and maxRow instead
        if (opts.row) {
            opts.minRow = opts.maxRow = opts.row;
            delete opts.row;
        }
        const rowAttr = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-row'));
        // flag only valid in sub-grids (handled by parent, not here)
        if (opts.column === 'auto') {
            delete opts.column;
        }
        // save original setting so we can restore on save
        if (opts.alwaysShowResizeHandle !== undefined) {
            opts._alwaysShowResizeHandle = opts.alwaysShowResizeHandle;
        }
        // cleanup responsive opts (must have columnWidth | breakpoints) then sort breakpoints by size (so we can match during resize)
        const resp = opts.columnOpts;
        if (resp) {
            const bk = resp.breakpoints;
            if (!resp.columnWidth && !bk?.length) {
                delete opts.columnOpts;
            }
            else {
                resp.columnMax = resp.columnMax || 12;
                if (bk?.length > 1)
                    bk.sort((a, b) => (b.w || 0) - (a.w || 0));
            }
        }
        // elements DOM attributes override any passed options (like CSS style) - merge the two together
        const defaults = {
            ..._utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(_types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults),
            column: _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-column')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.column,
            minRow: rowAttr ? rowAttr : _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-min-row')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.minRow,
            maxRow: rowAttr ? rowAttr : _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-max-row')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.maxRow,
            staticGrid: _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-static')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.staticGrid,
            sizeToContent: _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-size-to-content')) || undefined,
            draggable: {
                handle: (opts.handleClass ? '.' + opts.handleClass : (opts.handle ? opts.handle : '')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.draggable.handle,
            },
            removableOptions: {
                accept: opts.itemClass || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.removableOptions.accept,
                decline: _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.removableOptions.decline
            },
        };
        if (el.getAttribute('gs-animate')) { // default to true, but if set to false use that instead
            defaults.animate = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-animate'));
        }
        opts = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.defaults(opts, defaults);
        this._initMargin(); // part of settings defaults...
        // Now check if we're loading into !12 column mode FIRST so we don't do un-necessary work (like cellHeight = width / 12 then go 1 column)
        this.checkDynamicColumn();
        this._updateColumnVar(opts);
        if (opts.rtl === 'auto') {
            opts.rtl = (el.style.direction === 'rtl');
        }
        if (opts.rtl) {
            this.el.classList.add('grid-stack-rtl');
        }
        // check if we're been nested, and if so update our style and keep pointer around (used during save)
        const parentGridItem = this.el.closest('.' + _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.itemClass);
        const parentNode = parentGridItem?.gridstackNode;
        if (parentNode) {
            parentNode.subGrid = this;
            this.parentGridNode = parentNode;
            this.el.classList.add('grid-stack-nested');
            parentNode.el.classList.add('grid-stack-sub-grid');
        }
        this._isAutoCellHeight = (opts.cellHeight === 'auto');
        if (this._isAutoCellHeight || opts.cellHeight === 'initial') {
            // make the cell content square initially (will use resize/column event to keep it square)
            this.cellHeight(undefined);
        }
        else {
            // append unit if any are set
            if (typeof opts.cellHeight == 'number' && opts.cellHeightUnit && opts.cellHeightUnit !== _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.cellHeightUnit) {
                opts.cellHeight = opts.cellHeight + opts.cellHeightUnit;
                delete opts.cellHeightUnit;
            }
            const val = opts.cellHeight;
            delete opts.cellHeight; // force initial cellHeight() call to set the value
            this.cellHeight(val);
        }
        // see if we need to adjust auto-hide
        if (opts.alwaysShowResizeHandle === 'mobile') {
            opts.alwaysShowResizeHandle = _dd_touch__WEBPACK_IMPORTED_MODULE_4__.isTouch;
        }
        this._setStaticClass();
        const engineClass = opts.engineClass || GridStack.engineClass || _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__.GridStackEngine;
        this.engine = new engineClass({
            column: this.getColumn(),
            float: opts.float,
            maxRow: opts.maxRow,
            onChange: (cbNodes) => {
                cbNodes.forEach(n => {
                    const el = n.el;
                    if (!el)
                        return;
                    if (n._removeDOM) {
                        if (el)
                            el.remove();
                        delete n._removeDOM;
                    }
                    else {
                        this._writePosAttr(el, n);
                    }
                });
                this._updateContainerHeight();
            }
        });
        if (opts.auto) {
            this.batchUpdate(); // prevent in between re-layout #1535 TODO: this only set float=true, need to prevent collision check...
            this.engine._loading = true; // loading collision check
            this.getGridItems().forEach(el => this._prepareElement(el));
            delete this.engine._loading;
            this.batchUpdate(false);
        }
        // load any passed in children as well, which overrides any DOM layout done above
        if (opts.children) {
            const children = opts.children;
            delete opts.children;
            if (children.length)
                this.load(children); // don't load empty
        }
        this.setAnimation();
        // dynamic grids require pausing during drag to detect over to nest vs push
        if (opts.subGridDynamic && !_dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.pauseDrag)
            _dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.pauseDrag = true;
        if (opts.draggable?.pause !== undefined)
            _dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.pauseDrag = opts.draggable.pause;
        this._setupRemoveDrop();
        this._setupAcceptWidget();
        this._updateResizeEvent();
    }
    _updateColumnVar(opts = this.opts) {
        this.el.classList.add('gs-' + opts.column);
        if (typeof opts.column === 'number')
            this.el.style.setProperty('--gs-column-width', `${100 / opts.column}%`);
    }
    /**
     * add a new widget and returns it.
     *
     * Widget will be always placed even if result height is more than actual grid height.
     * You need to use `willItFit()` before calling addWidget for additional check.
     * See also `makeWidget(el)` for DOM element.
     *
     * @example
     * const grid = GridStack.init();
     * grid.addWidget({w: 3, content: 'hello'});
     *
     * @param w GridStackWidget definition. used MakeWidget(el) if you have dom element instead.
     */
    addWidget(w) {
        if (!w)
            return;
        if (typeof w === 'string') {
            console.error('V11: GridStack.addWidget() does not support string anymore. see #2736');
            return;
        }
        if (w.ELEMENT_NODE) {
            console.error('V11: GridStack.addWidget() does not support HTMLElement anymore. use makeWidget()');
            return this.makeWidget(w);
        }
        let el;
        let node = w;
        node.grid = this;
        if (node.el) {
            el = node.el; // re-use element stored in the node
        }
        else if (GridStack.addRemoveCB) {
            el = GridStack.addRemoveCB(this.el, w, true, false);
        }
        else {
            el = this.createWidgetDivs(node);
        }
        if (!el)
            return;
        // if the caller ended up initializing the widget in addRemoveCB, or we stared with one already, skip the rest
        node = el.gridstackNode;
        if (node && el.parentElement === this.el && this.engine.nodes.find(n => n._id === node._id))
            return el;
        // Tempting to initialize the passed in opt with default and valid values, but this break knockout demos
        // as the actual value are filled in when _prepareElement() calls el.getAttribute('gs-xyz') before adding the node.
        // So make sure we load any DOM attributes that are not specified in passed in options (which override)
        const domAttr = this._readAttr(el);
        _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.defaults(w, domAttr);
        this.engine.prepareNode(w);
        // this._writeAttr(el, w); why write possibly incorrect values back when makeWidget() will ?
        this.el.appendChild(el);
        this.makeWidget(el, w);
        return el;
    }
    /**
     * Create the default grid item divs and content (possibly lazy loaded) by using GridStack.renderCB().
     *
     * @param n GridStackNode definition containing widget configuration
     * @returns the created HTML element with proper grid item structure
     *
     * @example
     * const element = grid.createWidgetDivs({ w: 2, h: 1, content: 'Hello World' });
     */
    createWidgetDivs(n) {
        const el = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createDiv(['grid-stack-item', this.opts.itemClass]);
        const cont = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createDiv(['grid-stack-item-content'], el);
        if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.lazyLoad(n)) {
            if (!n.visibleObservable) {
                n.visibleObservable = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) {
                        n.visibleObservable?.disconnect();
                        delete n.visibleObservable;
                        GridStack.renderCB(cont, n);
                        n.grid?.prepareDragDrop(n.el);
                    }
                });
                window.setTimeout(() => n.visibleObservable?.observe(el)); // wait until callee sets position attributes
            }
        }
        else
            GridStack.renderCB(cont, n);
        return el;
    }
    /**
     * Convert an existing gridItem element into a sub-grid with the given (optional) options, else inherit them
     * from the parent's subGrid options.
     * @param el gridItem element to convert
     * @param ops (optional) sub-grid options, else default to node, then parent settings, else defaults
     * @param nodeToAdd (optional) node to add to the newly created sub grid (used when dragging over existing regular item)
     * @param saveContent if true (default) the html inside .grid-stack-content will be saved to child widget
     * @returns newly created grid
     */
    makeSubGrid(el, ops, nodeToAdd, saveContent = true) {
        let node = el.gridstackNode;
        if (!node) {
            node = this.makeWidget(el).gridstackNode;
        }
        if (node.subGrid?.el)
            return node.subGrid; // already done
        // find the template subGrid stored on a parent as fallback...
        let subGridTemplate; // eslint-disable-next-line @typescript-eslint/no-this-alias
        let grid = this;
        while (grid && !subGridTemplate) {
            subGridTemplate = grid.opts?.subGridOpts;
            grid = grid.parentGridNode?.grid;
        }
        //... and set the create options
        ops = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep({
            // by default sub-grid inherit from us | parent, other than id, children, etc...
            ...this.opts, id: undefined, children: undefined, column: 'auto', columnOpts: undefined, layout: 'list', subGridOpts: undefined,
            ...(subGridTemplate || {}),
            ...(ops || node.subGridOpts || {})
        });
        node.subGridOpts = ops;
        // if column special case it set, remember that flag and set default
        let autoColumn;
        if (ops.column === 'auto') {
            autoColumn = true;
            ops.column = Math.max(node.w || 1, nodeToAdd?.w || 1);
            delete ops.columnOpts; // driven by parent
        }
        // if we're converting an existing full item, move over the content to be the first sub item in the new grid
        let content = node.el.querySelector('.grid-stack-item-content');
        let newItem;
        let newItemOpt;
        if (saveContent) {
            this._removeDD(node.el); // remove D&D since it's set on content div
            newItemOpt = { ...node, x: 0, y: 0 };
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removeInternalForSave(newItemOpt);
            delete newItemOpt.subGridOpts;
            if (node.content) {
                newItemOpt.content = node.content;
                delete node.content;
            }
            if (GridStack.addRemoveCB) {
                newItem = GridStack.addRemoveCB(this.el, newItemOpt, true, false);
            }
            else {
                newItem = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createDiv(['grid-stack-item']);
                newItem.appendChild(content);
                content = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createDiv(['grid-stack-item-content'], node.el);
            }
            this.prepareDragDrop(node.el); // ... and restore original D&D
        }
        // if we're adding an additional item, make the container large enough to have them both
        if (nodeToAdd) {
            const w = autoColumn ? ops.column : node.w;
            const h = node.h + nodeToAdd.h;
            const style = node.el.style;
            style.transition = 'none'; // show up instantly so we don't see scrollbar with nodeToAdd
            this.update(node.el, { w, h });
            setTimeout(() => style.transition = null); // recover animation
        }
        const subGrid = node.subGrid = GridStack.addGrid(content, ops);
        if (nodeToAdd?._moving)
            subGrid._isTemp = true; // prevent re-nesting as we add over
        if (autoColumn)
            subGrid._autoColumn = true;
        // add the original content back as a child of the newly created grid
        if (saveContent) {
            subGrid.makeWidget(newItem, newItemOpt);
        }
        // now add any additional node
        if (nodeToAdd) {
            if (nodeToAdd._moving) {
                // create an artificial event even for the just created grid to receive this item
                window.setTimeout(() => _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.simulateMouseEvent(nodeToAdd._event, 'mouseenter', subGrid.el), 0);
            }
            else {
                subGrid.makeWidget(node.el, node);
            }
        }
        // if sizedToContent, we need to re-calc the size of ourself
        this.resizeToContentCheck(false, node);
        return subGrid;
    }
    /**
     * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
     * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
     */
    removeAsSubGrid(nodeThatRemoved) {
        const pGrid = this.parentGridNode?.grid;
        if (!pGrid)
            return;
        pGrid.batchUpdate();
        pGrid.removeWidget(this.parentGridNode.el, true, true);
        this.engine.nodes.forEach(n => {
            // migrate any children over and offsetting by our location
            n.x += this.parentGridNode.x;
            n.y += this.parentGridNode.y;
            pGrid.makeWidget(n.el, n);
        });
        pGrid.batchUpdate(false);
        if (this.parentGridNode)
            delete this.parentGridNode.subGrid;
        delete this.parentGridNode;
        // create an artificial event for the original grid now that this one is gone (got a leave, but won't get enter)
        if (nodeThatRemoved) {
            window.setTimeout(() => _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.simulateMouseEvent(nodeThatRemoved._event, 'mouseenter', pGrid.el), 0);
        }
    }
    /**
     * saves the current layout returning a list of widgets for serialization which might include any nested grids.
     * @param saveContent if true (default) the latest html inside .grid-stack-content will be saved to GridStackWidget.content field, else it will
     * be removed.
     * @param saveGridOpt if true (default false), save the grid options itself, so you can call the new GridStack.addGrid()
     * to recreate everything from scratch. GridStackOptions.children would then contain the widget list instead.
     * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
     * @param column if provided, the grid will be saved for the given column size (IFF we have matching internal saved layout, or current layout).
     * Otherwise it will use the largest possible layout (say 12 even if rendering at 1 column) so we can restore to all layouts.
     * NOTE: if you want to save to currently display layout, pass this.getColumn() as column.
     * NOTE2: nested grids will ALWAYS save to the container size to be in sync with parent.
     * @returns list of widgets or full grid option, including .children list of widgets
     */
    save(saveContent = true, saveGridOpt = false, saveCB = GridStack.saveCB, column) {
        // return copied GridStackWidget (with optionally .el) we can modify at will...
        const list = this.engine.save(saveContent, saveCB, column);
        // check for HTML content and nested grids
        list.forEach(n => {
            if (saveContent && n.el && !n.subGrid && !saveCB) { // sub-grid are saved differently, not plain content
                const itemContent = n.el.querySelector('.grid-stack-item-content');
                n.content = itemContent?.innerHTML;
                if (!n.content)
                    delete n.content;
            }
            else {
                if (!saveContent && !saveCB) {
                    delete n.content;
                }
                // check for nested grid - make sure it saves to the given container size to be consistent
                if (n.subGrid?.el) {
                    const column = n.w || n.subGrid.getColumn();
                    const listOrOpt = n.subGrid.save(saveContent, saveGridOpt, saveCB, column);
                    n.subGridOpts = (saveGridOpt ? listOrOpt : { children: listOrOpt });
                    delete n.subGrid;
                }
            }
            delete n.el;
        });
        // check if save entire grid options (needed for recursive) + children...
        if (saveGridOpt) {
            const o = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(this.opts);
            // delete default values that will be recreated on launch
            if (o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight) {
                o.margin = o.marginTop;
                delete o.marginTop;
                delete o.marginRight;
                delete o.marginBottom;
                delete o.marginLeft;
            }
            if (o.rtl === (this.el.style.direction === 'rtl')) {
                o.rtl = 'auto';
            }
            if (this._isAutoCellHeight) {
                o.cellHeight = 'auto';
            }
            if (this._autoColumn) {
                o.column = 'auto';
            }
            const origShow = o._alwaysShowResizeHandle;
            delete o._alwaysShowResizeHandle;
            if (origShow !== undefined) {
                o.alwaysShowResizeHandle = origShow;
            }
            else {
                delete o.alwaysShowResizeHandle;
            }
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removeInternalAndSame(o, _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults);
            o.children = list;
            return o;
        }
        return list;
    }
    /**
     * Load widgets from a list. This will call update() on each (matching by id) or add/remove widgets that are not there.
     * Used to restore a grid layout for a saved layout list (see `save()`).
     *
     * @param items list of widgets definition to update/create
     * @param addRemove boolean (default true) or callback method can be passed to control if and how missing widgets can be added/removed, giving
     * the user control of insertion.
     * @returns the grid instance for chaining
     *
     * @example
     * // Basic usage with saved layout
     * const savedLayout = grid.save(); // Save current layout
     * // ... later restore it
     * grid.load(savedLayout);
     *
     * // Load with custom add/remove callback
     * grid.load(layout, (items, grid, add) => {
     *   if (add) {
     *     // Custom logic for adding new widgets
     *     items.forEach(item => {
     *       const el = document.createElement('div');
     *       el.innerHTML = item.content || '';
     *       grid.addWidget(el, item);
     *     });
     *   } else {
     *     // Custom logic for removing widgets
     *     items.forEach(item => grid.removeWidget(item.el));
     *   }
     * });
     *
     * // Load without adding/removing missing widgets
     * grid.load(layout, false);
     *
     * @see {@link http://gridstackjs.com/demo/serialization.html} for complete example
     */
    load(items, addRemove = GridStack.addRemoveCB || true) {
        // items = Utils.cloneDeep(items); // TODO: let callee decide by using directly instead of copy we can modify ?
        // make sure size 1x1 (default) is present as it may need to override current sizes
        items.forEach(n => { n.w = n.w || n.minW || 1; n.h = n.h || n.minH || 1; });
        // sort items. those without coord will be appended last
        items = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.sort(items);
        this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = true; // skip layout update
        // if we're loading a layout into for example 1 column and items don't fit, make sure to save
        // the original wanted layout so we can scale back up correctly #1471
        let maxColumn = 0;
        items.forEach(n => { maxColumn = Math.max(maxColumn, (n.x || 0) + n.w); });
        if (maxColumn > this.engine.defaultColumn)
            this.engine.defaultColumn = maxColumn;
        const column = this.getColumn();
        if (maxColumn > column) {
            // if we're loading (from empty) into a smaller column, check for special responsive layout
            if (this.engine.nodes.length === 0 && this.responseLayout) {
                this.engine.nodes = items;
                this.engine.columnChanged(maxColumn, column, this.responseLayout);
                items = this.engine.nodes;
                this.engine.nodes = [];
                delete this.responseLayout;
            }
            else
                this.engine.cacheLayout(items, maxColumn, true);
        }
        // if given a different callback, temporally set it as global option so creating will use it
        const prevCB = GridStack.addRemoveCB;
        if (typeof (addRemove) === 'function')
            GridStack.addRemoveCB = addRemove;
        const removed = [];
        this.batchUpdate();
        // if we are loading from empty temporarily remove animation
        const blank = !this.engine.nodes.length;
        const noAnim = blank && this.opts.animate;
        if (noAnim)
            this.setAnimation(false);
        // see if any items are missing from new layout and need to be removed first
        if (!blank && addRemove) {
            const copyNodes = [...this.engine.nodes]; // don't loop through array you modify
            copyNodes.forEach(n => {
                if (!n.id)
                    return;
                const item = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.find(items, n.id);
                if (!item) {
                    if (GridStack.addRemoveCB)
                        GridStack.addRemoveCB(this.el, n, false, false);
                    removed.push(n); // batch keep track
                    this.removeWidget(n.el, true, false);
                }
            });
        }
        // now add/update the widgets - starting with removing items in the new layout we will reposition
        // to reduce collision and add no-coord ones at next available spot
        this.engine._loading = true; // help with collision
        const updateNodes = [];
        this.engine.nodes = this.engine.nodes.filter(n => {
            if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.find(items, n.id)) {
                updateNodes.push(n);
                return false;
            } // remove if found from list
            return true;
        });
        items.forEach(w => {
            const item = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.find(updateNodes, w.id);
            if (item) {
                // if item sizes to content, re-use the exiting height so it's a better guess at the final size (same if width doesn't change)
                if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(item))
                    w.h = item.h;
                // check if missing coord, in which case find next empty slot with new (or old if missing) sizes
                this.engine.nodeBoundFix(w);
                if (w.autoPosition || w.x === undefined || w.y === undefined) {
                    w.w = w.w || item.w;
                    w.h = w.h || item.h;
                    this.engine.findEmptyPosition(w);
                }
                // add back to current list BUT force a collision check if it 'appears' we didn't change to make sure we don't overlap others now
                this.engine.nodes.push(item);
                if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.samePos(item, w) && this.engine.nodes.length > 1) {
                    this.moveNode(item, { ...w, forceCollide: true });
                    _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.copyPos(w, item); // use possily updated values before update() is called next (no-op since already moved)
                }
                this.update(item.el, w);
                if (w.subGridOpts?.children) { // update any sub grid as well
                    const sub = item.el.querySelector('.grid-stack');
                    if (sub && sub.gridstack) {
                        sub.gridstack.load(w.subGridOpts.children); // TODO: support updating grid options ?
                    }
                }
            }
            else if (addRemove) {
                this.addWidget(w);
            }
        });
        delete this.engine._loading; // done loading
        this.engine.removedNodes = removed;
        this.batchUpdate(false);
        // after commit, clear that flag
        delete this._ignoreLayoutsNodeChange;
        delete this.engine.skipCacheUpdate;
        prevCB ? GridStack.addRemoveCB = prevCB : delete GridStack.addRemoveCB;
        if (noAnim)
            this.setAnimation(true, true); // delay adding animation back
        return this;
    }
    /**
     * use before calling a bunch of `addWidget()` to prevent un-necessary relayouts in between (more efficient)
     * and get a single event callback. You will see no changes until `batchUpdate(false)` is called.
     */
    batchUpdate(flag = true) {
        this.engine.batchUpdate(flag);
        if (!flag) {
            this._updateContainerHeight();
            this._triggerRemoveEvent();
            this._triggerAddEvent();
            this._triggerChangeEvent();
        }
        return this;
    }
    /**
     * Gets the current cell height in pixels. This takes into account the unit type and converts to pixels if necessary.
     *
     * @param forcePixel if true, forces conversion to pixels even when cellHeight is specified in other units
     * @returns the cell height in pixels
     *
     * @example
     * const height = grid.getCellHeight();
     * console.log('Cell height:', height, 'px');
     *
     * // Force pixel conversion
     * const pixelHeight = grid.getCellHeight(true);
     */
    getCellHeight(forcePixel = false) {
        if (this.opts.cellHeight && this.opts.cellHeight !== 'auto' &&
            (!forcePixel || !this.opts.cellHeightUnit || this.opts.cellHeightUnit === 'px')) {
            return this.opts.cellHeight;
        }
        // do rem/em/cm/mm to px conversion
        if (this.opts.cellHeightUnit === 'rem') {
            return this.opts.cellHeight * parseFloat(getComputedStyle(document.documentElement).fontSize);
        }
        if (this.opts.cellHeightUnit === 'em') {
            return this.opts.cellHeight * parseFloat(getComputedStyle(this.el).fontSize);
        }
        if (this.opts.cellHeightUnit === 'cm') {
            // 1cm = 96px/2.54. See https://www.w3.org/TR/css-values-3/#absolute-lengths
            return this.opts.cellHeight * (96 / 2.54);
        }
        if (this.opts.cellHeightUnit === 'mm') {
            return this.opts.cellHeight * (96 / 2.54) / 10;
        }
        // else get first cell height
        const el = this.el.querySelector('.' + this.opts.itemClass);
        if (el) {
            const h = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-h')) || 1; // since we don't write 1 anymore
            return Math.round(el.offsetHeight / h);
        }
        // else do entire grid and # of rows (but doesn't work if min-height is the actual constrain)
        const rows = parseInt(this.el.getAttribute('gs-current-row'));
        return rows ? Math.round(this.el.getBoundingClientRect().height / rows) : this.opts.cellHeight;
    }
    /**
     * Update current cell height - see `GridStackOptions.cellHeight` for format by updating eh Browser CSS variable.
     *
     * @param val the cell height. Options:
     *   - `undefined`: cells content will be made square (match width minus margin)
     *   - `0`: the CSS will be generated by the application instead
     *   - number: height in pixels
     *   - string: height with units (e.g., '70px', '5rem', '2em')
     * @returns the grid instance for chaining
     *
     * @example
     * grid.cellHeight(100);     // 100px height
     * grid.cellHeight('70px');  // explicit pixel height
     * grid.cellHeight('5rem');  // relative to root font size
     * grid.cellHeight(grid.cellWidth() * 1.2); // aspect ratio
     * grid.cellHeight('auto');  // auto-size based on content
     */
    cellHeight(val) {
        // if not called internally, check if we're changing mode
        if (val !== undefined) {
            if (this._isAutoCellHeight !== (val === 'auto')) {
                this._isAutoCellHeight = (val === 'auto');
                this._updateResizeEvent();
            }
        }
        if (val === 'initial' || val === 'auto') {
            val = undefined;
        }
        // make item content be square
        if (val === undefined) {
            const marginDiff = -this.opts.marginRight - this.opts.marginLeft
                + this.opts.marginTop + this.opts.marginBottom;
            val = this.cellWidth() + marginDiff;
        }
        const data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(val);
        if (this.opts.cellHeightUnit === data.unit && this.opts.cellHeight === data.h) {
            return this;
        }
        this.opts.cellHeightUnit = data.unit;
        this.opts.cellHeight = data.h;
        // finally update var and container
        this.el.style.setProperty('--gs-cell-height', `${this.opts.cellHeight}${this.opts.cellHeightUnit}`);
        this._updateContainerHeight();
        this.resizeToContentCheck();
        return this;
    }
    /** Gets current cell width. */
    /**
     * Gets the current cell width in pixels. This is calculated based on the grid container width divided by the number of columns.
     *
     * @returns the cell width in pixels
     *
     * @example
     * const width = grid.cellWidth();
     * console.log('Cell width:', width, 'px');
     *
     * // Use cell width to calculate widget dimensions
     * const widgetWidth = width * 3; // For a 3-column wide widget
     */
    cellWidth() {
        return this._widthOrContainer() / this.getColumn();
    }
    /** return our expected width (or parent) , and optionally of window for dynamic column check */
    _widthOrContainer(forBreakpoint = false) {
        // use `offsetWidth` or `clientWidth` (no scrollbar) ?
        // https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
        return forBreakpoint && this.opts.columnOpts?.breakpointForWindow ? window.innerWidth : (this.el.clientWidth || this.el.parentElement.clientWidth || window.innerWidth);
    }
    /** checks for dynamic column count for our current size, returning true if changed */
    checkDynamicColumn() {
        const resp = this.opts.columnOpts;
        if (!resp || (!resp.columnWidth && !resp.breakpoints?.length))
            return false;
        const column = this.getColumn();
        let newColumn = column;
        const w = this._widthOrContainer(true);
        if (resp.columnWidth) {
            newColumn = Math.min(Math.round(w / resp.columnWidth) || 1, resp.columnMax);
        }
        else {
            // find the closest breakpoint (already sorted big to small) that matches
            newColumn = resp.columnMax;
            let i = 0;
            while (i < resp.breakpoints.length && w <= resp.breakpoints[i].w) {
                newColumn = resp.breakpoints[i++].c || column;
            }
        }
        if (newColumn !== column) {
            const bk = resp.breakpoints?.find(b => b.c === newColumn);
            this.column(newColumn, bk?.layout || resp.layout);
            return true;
        }
        return false;
    }
    /**
     * Re-layout grid items to reclaim any empty space. This is useful after removing widgets
     * or when you want to optimize the layout.
     *
     * @param layout layout type. Options:
     *   - 'compact' (default): might re-order items to fill any empty space
     *   - 'list': keep the widget left->right order the same, even if that means leaving an empty slot if things don't fit
     * @param doSort re-sort items first based on x,y position. Set to false to do your own sorting ahead (default: true)
     * @returns the grid instance for chaining
     *
     * @example
     * // Compact layout after removing widgets
     * grid.removeWidget('.widget-to-remove');
     * grid.compact();
     *
     * // Use list layout (preserve order)
     * grid.compact('list');
     *
     * // Compact without sorting first
     * grid.compact('compact', false);
     */
    compact(layout = 'compact', doSort = true) {
        this.engine.compact(layout, doSort);
        this._triggerChangeEvent();
        return this;
    }
    /**
     * Set the number of columns in the grid. Will update existing widgets to conform to new number of columns,
     * as well as cache the original layout so you can revert back to previous positions without loss.
     *
     * Requires `gridstack-extra.css` or `gridstack-extra.min.css` for [2-11] columns,
     * else you will need to generate correct CSS.
     * See: https://github.com/gridstack/gridstack.js#change-grid-columns
     *
     * @param column Integer > 0 (default 12)
     * @param layout specify the type of re-layout that will happen. Options:
     *   - 'moveScale' (default): scale widget positions and sizes
     *   - 'move': keep widget sizes, only move positions
     *   - 'scale': keep widget positions, only scale sizes
     *   - 'none': don't change widget positions or sizes
     *   Note: items will never be outside of the current column boundaries.
     *   Ignored for `column=1` as we always want to vertically stack.
     * @returns the grid instance for chaining
     *
     * @example
     * // Change to 6 columns with default scaling
     * grid.column(6);
     *
     * // Change to 4 columns, only move positions
     * grid.column(4, 'move');
     *
     * // Single column layout (vertical stack)
     * grid.column(1);
     */
    column(column, layout = 'moveScale') {
        if (!column || column < 1 || this.opts.column === column)
            return this;
        const oldColumn = this.getColumn();
        this.opts.column = column;
        if (!this.engine) {
            // called in constructor, noting else to do but remember that breakpoint layout
            this.responseLayout = layout;
            return this;
        }
        this.engine.column = column;
        this.el.classList.remove('gs-' + oldColumn);
        this._updateColumnVar();
        // update the items now
        this.engine.columnChanged(oldColumn, column, layout);
        if (this._isAutoCellHeight)
            this.cellHeight();
        this.resizeToContentCheck(true); // wait for width resizing
        // and trigger our event last...
        this._ignoreLayoutsNodeChange = true; // skip layout update
        this._triggerChangeEvent();
        delete this._ignoreLayoutsNodeChange;
        return this;
    }
    /**
     * Get the number of columns in the grid (default 12).
     *
     * @returns the current number of columns in the grid
     *
     * @example
     * const columnCount = grid.getColumn(); // returns 12 by default
     */
    getColumn() { return this.opts.column; }
    /**
     * Returns an array of grid HTML elements (no placeholder) - used to iterate through our children in DOM order.
     * This method excludes placeholder elements and returns only actual grid items.
     *
     * @returns array of GridItemHTMLElement instances representing all grid items
     *
     * @example
     * const items = grid.getGridItems();
     * items.forEach(item => {
     *   console.log('Item ID:', item.gridstackNode.id);
     * });
     */
    getGridItems() {
        return Array.from(this.el.children)
            .filter((el) => el.matches('.' + this.opts.itemClass) && !el.matches('.' + this.opts.placeholderClass));
    }
    /**
     * Returns true if change callbacks should be ignored due to column change, sizeToContent, loading, etc.
     * This is useful for callers who want to implement dirty flag functionality.
     *
     * @returns true if change callbacks are currently being ignored
     *
     * @example
     * if (!grid.isIgnoreChangeCB()) {
     *   // Process the change event
     *   console.log('Grid layout changed');
     * }
     */
    isIgnoreChangeCB() { return this._ignoreLayoutsNodeChange; }
    /**
     * Destroys a grid instance. DO NOT CALL any methods or access any vars after this as it will free up members.
     * @param removeDOM if `false` grid and items HTML elements will not be removed from the DOM (Optional. Default `true`).
     */
    destroy(removeDOM = true) {
        if (!this.el)
            return; // prevent multiple calls
        this.offAll();
        this._updateResizeEvent(true);
        this.setStatic(true, false); // permanently removes DD but don't set CSS class (we're going away)
        this.setAnimation(false);
        if (!removeDOM) {
            this.removeAll(removeDOM);
            this.el.removeAttribute('gs-current-row');
        }
        else {
            this.el.parentNode.removeChild(this.el);
        }
        if (this.parentGridNode)
            delete this.parentGridNode.subGrid;
        delete this.parentGridNode;
        delete this.opts;
        delete this._placeholder?.gridstackNode;
        delete this._placeholder;
        delete this.engine;
        delete this.el.gridstack; // remove circular dependency that would prevent a freeing
        delete this.el;
        return this;
    }
    /**
     * Enable/disable floating widgets (default: `false`). When enabled, widgets can float up to fill empty spaces.
     * See [example](http://gridstackjs.com/demo/float.html)
     *
     * @param val true to enable floating, false to disable
     * @returns the grid instance for chaining
     *
     * @example
     * grid.float(true);  // Enable floating
     * grid.float(false); // Disable floating (default)
     */
    float(val) {
        if (this.opts.float !== val) {
            this.opts.float = this.engine.float = val;
            this._triggerChangeEvent();
        }
        return this;
    }
    /**
     * Get the current float mode setting.
     *
     * @returns true if floating is enabled, false otherwise
     *
     * @example
     * const isFloating = grid.getFloat();
     * console.log('Floating enabled:', isFloating);
     */
    getFloat() {
        return this.engine.float;
    }
    /**
     * Get the position of the cell under a pixel on screen.
     * @param position the position of the pixel to resolve in
     * absolute coordinates, as an object with top and left properties
     * @param useDocRelative if true, value will be based on document position vs parent position (Optional. Default false).
     * Useful when grid is within `position: relative` element
     *
     * Returns an object with properties `x` and `y` i.e. the column and row in the grid.
     */
    getCellFromPixel(position, useDocRelative = false) {
        const box = this.el.getBoundingClientRect();
        // console.log(`getBoundingClientRect left: ${box.left} top: ${box.top} w: ${box.w} h: ${box.h}`)
        let containerPos;
        if (useDocRelative) {
            containerPos = { top: box.top + document.documentElement.scrollTop, left: box.left };
            // console.log(`getCellFromPixel scrollTop: ${document.documentElement.scrollTop}`)
        }
        else {
            containerPos = { top: this.el.offsetTop, left: this.el.offsetLeft };
            // console.log(`getCellFromPixel offsetTop: ${containerPos.left} offsetLeft: ${containerPos.top}`)
        }
        const relativeLeft = position.left - containerPos.left;
        const relativeTop = position.top - containerPos.top;
        const columnWidth = (box.width / this.getColumn());
        const rowHeight = (box.height / parseInt(this.el.getAttribute('gs-current-row')));
        return { x: Math.floor(relativeLeft / columnWidth), y: Math.floor(relativeTop / rowHeight) };
    }
    /**
     * Returns the current number of rows, which will be at least `minRow` if set.
     * The row count is based on the highest positioned widget in the grid.
     *
     * @returns the current number of rows in the grid
     *
     * @example
     * const rowCount = grid.getRow();
     * console.log('Grid has', rowCount, 'rows');
     */
    getRow() {
        return Math.max(this.engine.getRow(), this.opts.minRow || 0);
    }
    /**
     * Checks if the specified rectangular area is empty (no widgets occupy any part of it).
     *
     * @param x the x coordinate (column) of the area to check
     * @param y the y coordinate (row) of the area to check
     * @param w the width in columns of the area to check
     * @param h the height in rows of the area to check
     * @returns true if the area is completely empty, false if any widget overlaps
     *
     * @example
     * // Check if a 2x2 area at position (1,1) is empty
     * if (grid.isAreaEmpty(1, 1, 2, 2)) {
     *   console.log('Area is available for placement');
     * }
     */
    isAreaEmpty(x, y, w, h) {
        return this.engine.isAreaEmpty(x, y, w, h);
    }
    /**
     * If you add elements to your grid by hand (or have some framework creating DOM), you have to tell gridstack afterwards to make them widgets.
     * If you want gridstack to add the elements for you, use `addWidget()` instead.
     * Makes the given element a widget and returns it.
     *
     * @param els widget or single selector to convert.
     * @param options widget definition to use instead of reading attributes or using default sizing values
     * @returns the converted GridItemHTMLElement
     *
     * @example
     * const grid = GridStack.init();
     *
     * // Create HTML content manually, possibly looking like:
     * // <div id="item-1" gs-x="0" gs-y="0" gs-w="3" gs-h="2"></div>
     * grid.el.innerHTML = '<div id="item-1" gs-w="3"></div><div id="item-2"></div>';
     *
     * // Convert existing elements to widgets
     * grid.makeWidget('#item-1'); // Uses gs-* attributes from DOM
     * grid.makeWidget('#item-2', {w: 2, h: 1, content: 'Hello World'});
     *
     * // Or pass DOM element directly
     * const element = document.getElementById('item-3');
     * grid.makeWidget(element, {x: 0, y: 1, w: 4, h: 2});
     */
    makeWidget(els, options) {
        const el = GridStack.getElement(els);
        if (!el || el.gridstackNode)
            return el;
        if (!el.parentElement)
            this.el.appendChild(el);
        this._prepareElement(el, true, options);
        const node = el.gridstackNode;
        this._updateContainerHeight();
        // see if there is a sub-grid to create
        if (node.subGridOpts) {
            this.makeSubGrid(el, node.subGridOpts, undefined, false); // node.subGrid will be used as option in method, no need to pass
        }
        // if we're adding an item into 1 column make sure
        // we don't override the larger 12 column layout that was already saved. #1985
        let resetIgnoreLayoutsNodeChange;
        if (this.opts.column === 1 && !this._ignoreLayoutsNodeChange) {
            resetIgnoreLayoutsNodeChange = this._ignoreLayoutsNodeChange = true;
        }
        this._triggerAddEvent();
        this._triggerChangeEvent();
        if (resetIgnoreLayoutsNodeChange)
            delete this._ignoreLayoutsNodeChange;
        return el;
    }
    on(name, callback) {
        // check for array of names being passed instead
        if (name.indexOf(' ') !== -1) {
            const names = name.split(' ');
            names.forEach(name => this.on(name, callback));
            return this;
        }
        // native CustomEvent handlers - cash the generic handlers so we can easily remove
        if (name === 'change' || name === 'added' || name === 'removed' || name === 'enable' || name === 'disable') {
            const noData = (name === 'enable' || name === 'disable');
            if (noData) {
                this._gsEventHandler[name] = (event) => callback(event);
            }
            else {
                this._gsEventHandler[name] = (event) => { if (event.detail)
                    callback(event, event.detail); };
            }
            this.el.addEventListener(name, this._gsEventHandler[name]);
        }
        else if (name === 'drag' || name === 'dragstart' || name === 'dragstop' || name === 'resizestart' || name === 'resize'
            || name === 'resizestop' || name === 'dropped' || name === 'resizecontent') {
            // drag&drop stop events NEED to be call them AFTER we update node attributes so handle them ourself.
            // do same for start event to make it easier...
            this._gsEventHandler[name] = callback;
        }
        else {
            console.error('GridStack.on(' + name + ') event not supported');
        }
        return this;
    }
    /**
     * unsubscribe from the 'on' event GridStackEvent
     * @param name of the event (see possible values) or list of names space separated
     */
    off(name) {
        // check for array of names being passed instead
        if (name.indexOf(' ') !== -1) {
            const names = name.split(' ');
            names.forEach(name => this.off(name));
            return this;
        }
        if (name === 'change' || name === 'added' || name === 'removed' || name === 'enable' || name === 'disable') {
            // remove native CustomEvent handlers
            if (this._gsEventHandler[name]) {
                this.el.removeEventListener(name, this._gsEventHandler[name]);
            }
        }
        delete this._gsEventHandler[name];
        return this;
    }
    /**
     * Remove all event handlers from the grid. This is useful for cleanup when destroying a grid.
     *
     * @returns the grid instance for chaining
     *
     * @example
     * grid.offAll(); // Remove all event listeners
     */
    offAll() {
        Object.keys(this._gsEventHandler).forEach((key) => this.off(key));
        return this;
    }
    /**
     * Removes widget from the grid.
     * @param el  widget or selector to modify
     * @param removeDOM if `false` DOM element won't be removed from the tree (Default? true).
     * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
     */
    removeWidget(els, removeDOM = true, triggerEvent = true) {
        if (!els) {
            console.error('Error: GridStack.removeWidget(undefined) called');
            return this;
        }
        GridStack.getElements(els).forEach(el => {
            if (el.parentElement && el.parentElement !== this.el)
                return; // not our child!
            let node = el.gridstackNode;
            // For Meteor support: https://github.com/gridstack/gridstack.js/pull/272
            if (!node) {
                node = this.engine.nodes.find(n => el === n.el);
            }
            if (!node)
                return;
            if (removeDOM && GridStack.addRemoveCB) {
                GridStack.addRemoveCB(this.el, node, false, false);
            }
            // remove our DOM data (circular link) and drag&drop permanently
            delete el.gridstackNode;
            this._removeDD(el);
            this.engine.removeNode(node, removeDOM, triggerEvent);
            if (removeDOM && el.parentElement) {
                el.remove(); // in batch mode engine.removeNode doesn't call back to remove DOM
            }
        });
        if (triggerEvent) {
            this._triggerRemoveEvent();
            this._triggerChangeEvent();
        }
        return this;
    }
    /**
     * Removes all widgets from the grid.
     * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
     * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
     */
    removeAll(removeDOM = true, triggerEvent = true) {
        // always remove our DOM data (circular link) before list gets emptied and drag&drop permanently
        this.engine.nodes.forEach(n => {
            if (removeDOM && GridStack.addRemoveCB) {
                GridStack.addRemoveCB(this.el, n, false, false);
            }
            delete n.el.gridstackNode;
            if (!this.opts.staticGrid)
                this._removeDD(n.el);
        });
        this.engine.removeAll(removeDOM, triggerEvent);
        if (triggerEvent)
            this._triggerRemoveEvent();
        return this;
    }
    /**
     * Toggle the grid animation state.  Toggles the `grid-stack-animate` class.
     * @param doAnimate if true the grid will animate.
     * @param delay if true setting will be set on next event loop.
     */
    setAnimation(doAnimate = this.opts.animate, delay) {
        if (delay) {
            // delay, but check to make sure grid (opt) is still around
            setTimeout(() => { if (this.opts)
                this.setAnimation(doAnimate); });
        }
        else if (doAnimate) {
            this.el.classList.add('grid-stack-animate');
        }
        else {
            this.el.classList.remove('grid-stack-animate');
        }
        this.opts.animate = doAnimate;
        return this;
    }
    /** @internal */
    hasAnimationCSS() { return this.el.classList.contains('grid-stack-animate'); }
    /**
     * Toggle the grid static state, which permanently removes/add Drag&Drop support, unlike disable()/enable() that just turns it off/on.
     * Also toggle the grid-stack-static class.
     * @param val if true the grid become static.
     * @param updateClass true (default) if css class gets updated
     * @param recurse true (default) if sub-grids also get updated
     */
    setStatic(val, updateClass = true, recurse = true) {
        if (!!this.opts.staticGrid === val)
            return this;
        val ? this.opts.staticGrid = true : delete this.opts.staticGrid;
        this._setupRemoveDrop();
        this._setupAcceptWidget();
        this.engine.nodes.forEach(n => {
            this.prepareDragDrop(n.el); // either delete or init Drag&drop
            if (n.subGrid && recurse)
                n.subGrid.setStatic(val, updateClass, recurse);
        });
        if (updateClass) {
            this._setStaticClass();
        }
        return this;
    }
    /**
     * Updates the passed in options on the grid (similar to update(widget) for for the grid options).
     * @param options PARTIAL grid options to update - only items specified will be updated.
     * NOTE: not all options updating are currently supported (lot of code, unlikely to change)
     */
    updateOptions(o) {
        const opts = this.opts;
        if (o === opts)
            return this; // nothing to do
        if (o.acceptWidgets !== undefined) {
            opts.acceptWidgets = o.acceptWidgets;
            this._setupAcceptWidget();
        }
        if (o.animate !== undefined)
            this.setAnimation(o.animate);
        if (o.cellHeight)
            this.cellHeight(o.cellHeight);
        if (o.class !== undefined && o.class !== opts.class) {
            if (opts.class)
                this.el.classList.remove(opts.class);
            if (o.class)
                this.el.classList.add(o.class);
        }
        // responsive column take over actual count (keep what we have now)
        if (o.columnOpts) {
            const hadColumnOpts = !!this.opts.columnOpts;
            this.opts.columnOpts = o.columnOpts;
            if (hadColumnOpts !== !!this.opts.columnOpts)
                this._updateResizeEvent();
            this.checkDynamicColumn();
        }
        else if (o.columnOpts === null && this.opts.columnOpts) { // delete update cmd
            delete this.opts.columnOpts;
            this._updateResizeEvent();
        }
        else if (typeof (o.column) === 'number')
            this.column(o.column);
        if (o.margin !== undefined)
            this.margin(o.margin);
        if (o.staticGrid !== undefined)
            this.setStatic(o.staticGrid);
        if (o.disableDrag !== undefined && !o.staticGrid)
            this.enableMove(!o.disableDrag);
        if (o.disableResize !== undefined && !o.staticGrid)
            this.enableResize(!o.disableResize);
        if (o.float !== undefined)
            this.float(o.float);
        if (o.row !== undefined) {
            opts.minRow = opts.maxRow = opts.row = o.row;
            this._updateContainerHeight();
        }
        else {
            if (o.minRow !== undefined) {
                opts.minRow = o.minRow;
                this._updateContainerHeight();
            }
            if (o.maxRow !== undefined)
                opts.maxRow = this.engine.maxRow = o.maxRow;
        }
        if (o.lazyLoad !== undefined)
            opts.lazyLoad = o.lazyLoad;
        if (o.children?.length)
            this.load(o.children);
        // TBD if we have a real need for these (more complex code)
        // alwaysShowResizeHandle, draggable, handle, handleClass, itemClass, layout, placeholderClass, placeholderText, resizable, removable, row,...
        return this;
    }
    /**
     * Updates widget position/size and other info. This is used to change widget properties after creation.
     * Can update position, size, content, and other widget properties.
     *
     * Note: If you need to call this on all nodes, use load() instead which will update what changed.
     * Setting the same x,y for multiple items will be indeterministic and likely unwanted.
     *
     * @param els widget element(s) or selector to modify
     * @param opt new widget options (x,y,w,h, etc.). Only those set will be updated.
     * @returns the grid instance for chaining
     *
     * @example
     * // Update widget size and position
     * grid.update('.my-widget', { x: 2, y: 1, w: 3, h: 2 });
     *
     * // Update widget content
     * grid.update(widget, { content: '<p>New content</p>' });
     *
     * // Update multiple properties
     * grid.update('#my-widget', {
     *   w: 4,
     *   h: 3,
     *   noResize: true,
     *   locked: true
     * });
     */
    update(els, opt) {
        GridStack.getElements(els).forEach(el => {
            const n = el?.gridstackNode;
            if (!n)
                return;
            const w = { ..._utils__WEBPACK_IMPORTED_MODULE_1__.Utils.copyPos({}, n), ..._utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(opt) }; // make a copy we can modify in case they re-use it or multiple items
            this.engine.nodeBoundFix(w);
            delete w.autoPosition;
            // move/resize widget if anything changed
            const keys = ['x', 'y', 'w', 'h'];
            let m;
            if (keys.some(k => w[k] !== undefined && w[k] !== n[k])) {
                m = {};
                keys.forEach(k => {
                    m[k] = (w[k] !== undefined) ? w[k] : n[k];
                    delete w[k];
                });
            }
            // for a move as well IFF there is any min/max fields set
            if (!m && (w.minW || w.minH || w.maxW || w.maxH)) {
                m = {}; // will use node position but validate values
            }
            // check for content changing
            if (w.content !== undefined) {
                const itemContent = el.querySelector('.grid-stack-item-content');
                if (itemContent && itemContent.textContent !== w.content) {
                    n.content = w.content;
                    GridStack.renderCB(itemContent, w);
                    // restore any sub-grid back
                    if (n.subGrid?.el) {
                        itemContent.appendChild(n.subGrid.el);
                        n.subGrid._updateContainerHeight();
                    }
                }
                delete w.content;
            }
            // any remaining fields are assigned, but check for dragging changes, resize constrain
            let changed = false;
            let ddChanged = false;
            for (const key in w) {
                if (key[0] !== '_' && n[key] !== w[key]) {
                    n[key] = w[key];
                    changed = true;
                    ddChanged = ddChanged || (!this.opts.staticGrid && (key === 'noResize' || key === 'noMove' || key === 'locked'));
                }
            }
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.sanitizeMinMax(n);
            // finally move the widget and update attr
            if (m) {
                const widthChanged = (m.w !== undefined && m.w !== n.w);
                this.moveNode(n, m);
                if (widthChanged && n.subGrid) {
                    // if we're animating the client size hasn't changed yet, so force a change (not exact size)
                    n.subGrid.onResize(this.hasAnimationCSS() ? n.w : undefined);
                }
                else {
                    this.resizeToContentCheck(widthChanged, n);
                }
                delete n._orig; // clear out original position now that we moved #2669
            }
            if (m || changed) {
                this._writeAttr(el, n);
            }
            if (ddChanged) {
                this.prepareDragDrop(n.el);
            }
            if (GridStack.updateCB)
                GridStack.updateCB(n); // call user callback so they know widget got updated
        });
        return this;
    }
    moveNode(n, m) {
        const wasUpdating = n._updating;
        if (!wasUpdating)
            this.engine.cleanNodes().beginUpdate(n);
        this.engine.moveNode(n, m);
        this._updateContainerHeight();
        if (!wasUpdating) {
            this._triggerChangeEvent();
            this.engine.endUpdate();
        }
    }
    /**
     * Updates widget height to match the content height to avoid vertical scrollbars or dead space.
     * This automatically adjusts the widget height based on its content size.
     *
     * Note: This assumes only 1 child under resizeToContentParent='.grid-stack-item-content'
     * (sized to gridItem minus padding) that represents the entire content size.
     *
     * @param el the grid item element to resize
     *
     * @example
     * // Resize a widget to fit its content
     * const widget = document.querySelector('.grid-stack-item');
     * grid.resizeToContent(widget);
     *
     * // This is commonly used with dynamic content:
     * widget.querySelector('.content').innerHTML = 'New longer content...';
     * grid.resizeToContent(widget);
     */
    resizeToContent(el) {
        if (!el)
            return;
        el.classList.remove('size-to-content-max');
        if (!el.clientHeight)
            return; // 0 when hidden, skip
        const n = el.gridstackNode;
        if (!n)
            return;
        const grid = n.grid;
        if (!grid || el.parentElement !== grid.el)
            return; // skip if we are not inside a grid
        const cell = grid.getCellHeight(true);
        if (!cell)
            return;
        let height = n.h ? n.h * cell : el.clientHeight; // getBoundingClientRect().height seem to flicker back and forth
        let item;
        if (n.resizeToContentParent)
            item = el.querySelector(n.resizeToContentParent);
        if (!item)
            item = el.querySelector(GridStack.resizeToContentParent);
        if (!item)
            return;
        const padding = el.clientHeight - item.clientHeight; // full - available height to our child (minus border, padding...)
        const itemH = n.h ? n.h * cell - padding : item.clientHeight; // calculated to what cellHeight is or will become (rather than actual to prevent waiting for animation to finish)
        let wantedH;
        if (n.subGrid) {
            // sub-grid - use their actual row count * their cell height, BUT append any content outside of the grid (eg: above text)
            wantedH = n.subGrid.getRow() * n.subGrid.getCellHeight(true);
            const subRec = n.subGrid.el.getBoundingClientRect();
            const parentRec = el.getBoundingClientRect();
            wantedH += subRec.top - parentRec.top;
        }
        else if (n.subGridOpts?.children?.length) {
            // not sub-grid just yet (case above) wait until we do
            return;
        }
        else {
            // NOTE: clientHeight & getBoundingClientRect() is undefined for text and other leaf nodes. use <div> container!
            const child = item.firstElementChild;
            if (!child) {
                console.error(`Error: GridStack.resizeToContent() widget id:${n.id} '${GridStack.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
                return;
            }
            wantedH = child.getBoundingClientRect().height || itemH;
        }
        if (itemH === wantedH)
            return;
        height += wantedH - itemH;
        let h = Math.ceil(height / cell);
        // check for min/max and special sizing
        const softMax = Number.isInteger(n.sizeToContent) ? n.sizeToContent : 0;
        if (softMax && h > softMax) {
            h = softMax;
            el.classList.add('size-to-content-max'); // get v-scroll back
        }
        if (n.minH && h < n.minH)
            h = n.minH;
        else if (n.maxH && h > n.maxH)
            h = n.maxH;
        if (h !== n.h) {
            grid._ignoreLayoutsNodeChange = true;
            grid.moveNode(n, { h });
            delete grid._ignoreLayoutsNodeChange;
        }
    }
    /** call the user resize (so they can do extra work) else our build in version */
    resizeToContentCBCheck(el) {
        if (GridStack.resizeToContentCB)
            GridStack.resizeToContentCB(el);
        else
            this.resizeToContent(el);
    }
    /**
     * Rotate widgets by swapping their width and height. This is typically called when the user presses 'r' during dragging.
     * The rotation swaps the w/h dimensions and adjusts min/max constraints accordingly.
     *
     * @param els widget element(s) or selector to rotate
     * @param relative optional pixel coordinate relative to upper/left corner to rotate around (keeps that cell under cursor)
     * @returns the grid instance for chaining
     *
     * @example
     * // Rotate a specific widget
     * grid.rotate('.my-widget');
     *
     * // Rotate with relative positioning during drag
     * grid.rotate(widget, { left: 50, top: 30 });
     */
    rotate(els, relative) {
        GridStack.getElements(els).forEach(el => {
            const n = el.gridstackNode;
            if (!_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.canBeRotated(n))
                return;
            const rot = { w: n.h, h: n.w, minH: n.minW, minW: n.minH, maxH: n.maxW, maxW: n.maxH };
            // if given an offset, adjust x/y by column/row bounds when user presses 'r' during dragging
            if (relative) {
                const pivotX = relative.left > 0 ? Math.floor(relative.left / this.cellWidth()) : 0;
                const pivotY = relative.top > 0 ? Math.floor(relative.top / this.opts.cellHeight) : 0;
                rot.x = n.x + pivotX - (n.h - (pivotY + 1));
                rot.y = (n.y + pivotY) - pivotX;
            }
            Object.keys(rot).forEach(k => { if (rot[k] === undefined)
                delete rot[k]; });
            const _orig = n._orig;
            this.update(el, rot);
            n._orig = _orig; // restore as move() will delete it
        });
        return this;
    }
    /**
     * Updates the margins which will set all 4 sides at once - see `GridStackOptions.margin` for format options.
     * Supports CSS string format of 1, 2, or 4 values or a single number.
     *
     * @param value margin value - can be:
     *   - Single number: `10` (applies to all sides)
     *   - Two values: `'10px 20px'` (top/bottom, left/right)
     *   - Four values: `'10px 20px 5px 15px'` (top, right, bottom, left)
     * @returns the grid instance for chaining
     *
     * @example
     * grid.margin(10);           // 10px all sides
     * grid.margin('10px 20px');  // 10px top/bottom, 20px left/right
     * grid.margin('5px 10px 15px 20px'); // Different for each side
     */
    margin(value) {
        const isMultiValue = (typeof value === 'string' && value.split(' ').length > 1);
        // check if we can skip... won't check if multi values (too much hassle)
        if (!isMultiValue) {
            const data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(value);
            if (this.opts.marginUnit === data.unit && this.opts.margin === data.h)
                return;
        }
        // re-use existing margin handling
        this.opts.margin = value;
        this.opts.marginTop = this.opts.marginBottom = this.opts.marginLeft = this.opts.marginRight = undefined;
        this._initMargin();
        return this;
    }
    /**
     * Returns the current margin value as a number (undefined if the 4 sides don't match).
     * This only returns a number if all sides have the same margin value.
     *
     * @returns the margin value in pixels, or undefined if sides have different values
     *
     * @example
     * const margin = grid.getMargin();
     * if (margin !== undefined) {
     *   console.log('Uniform margin:', margin, 'px');
     * } else {
     *   console.log('Margins are different on different sides');
     * }
     */
    getMargin() { return this.opts.margin; }
    /**
     * Returns true if the height of the grid will be less than the vertical
     * constraint. Always returns true if grid doesn't have height constraint.
     * @param node contains x,y,w,h,auto-position options
     *
     * @example
     * if (grid.willItFit(newWidget)) {
     *   grid.addWidget(newWidget);
     * } else {
     *   alert('Not enough free space to place the widget');
     * }
     */
    willItFit(node) { return this.engine.willItFit(node); }
    /** @internal */
    _triggerChangeEvent() {
        if (this.engine.batchMode)
            return this;
        const elements = this.engine.getDirtyNodes(true); // verify they really changed
        if (elements && elements.length) {
            if (!this._ignoreLayoutsNodeChange) {
                this.engine.layoutsNodesChange(elements);
            }
            this._triggerEvent('change', elements);
        }
        this.engine.saveInitial(); // we called, now reset initial values & dirty flags
        return this;
    }
    /** @internal */
    _triggerAddEvent() {
        if (this.engine.batchMode)
            return this;
        if (this.engine.addedNodes?.length) {
            if (!this._ignoreLayoutsNodeChange) {
                this.engine.layoutsNodesChange(this.engine.addedNodes);
            }
            // prevent added nodes from also triggering 'change' event (which is called next)
            this.engine.addedNodes.forEach(n => { delete n._dirty; });
            const addedNodes = [...this.engine.addedNodes];
            this.engine.addedNodes = [];
            this._triggerEvent('added', addedNodes);
        }
        return this;
    }
    /** @internal */
    _triggerRemoveEvent() {
        if (this.engine.batchMode)
            return this;
        if (this.engine.removedNodes?.length) {
            const removedNodes = [...this.engine.removedNodes];
            this.engine.removedNodes = [];
            this._triggerEvent('removed', removedNodes);
        }
        return this;
    }
    /** @internal */
    _triggerEvent(type, data) {
        const event = data ? new CustomEvent(type, { bubbles: false, detail: data }) : new Event(type);
        // check if we're nested, and if so call the outermost grid to trigger the event
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let grid = this;
        while (grid.parentGridNode)
            grid = grid.parentGridNode.grid;
        grid.el.dispatchEvent(event);
        return this;
    }
    /** @internal */
    _updateContainerHeight() {
        if (!this.engine || this.engine.batchMode)
            return this;
        const parent = this.parentGridNode;
        let row = this.getRow() + this._extraDragRow; // this checks for minRow already
        const cellHeight = this.opts.cellHeight;
        const unit = this.opts.cellHeightUnit;
        if (!cellHeight)
            return this;
        // check for css min height (non nested grid). TODO: support mismatch, say: min % while unit is px.
        // If `minRow` was applied, don't override it with this check, and avoid performance issues
        // (reflows) using `getComputedStyle`
        if (!parent && !this.opts.minRow) {
            const cssMinHeight = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(getComputedStyle(this.el)['minHeight']);
            if (cssMinHeight.h > 0 && cssMinHeight.unit === unit) {
                const minRow = Math.floor(cssMinHeight.h / cellHeight);
                if (row < minRow) {
                    row = minRow;
                }
            }
        }
        this.el.setAttribute('gs-current-row', String(row));
        this.el.style.removeProperty('min-height');
        this.el.style.removeProperty('height');
        if (row) {
            // nested grids have 'insert:0' to fill the space of parent by default, but we may be taller so use min-height for possible scrollbars
            this.el.style[parent ? 'minHeight' : 'height'] = row * cellHeight + unit;
        }
        // if we're a nested grid inside an sizeToContent item, tell it to resize itself too
        if (parent && _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(parent)) {
            parent.grid.resizeToContentCBCheck(parent.el);
        }
        return this;
    }
    /** @internal */
    _prepareElement(el, triggerAddEvent = false, node) {
        node = node || this._readAttr(el);
        el.gridstackNode = node;
        node.el = el;
        node.grid = this;
        node = this.engine.addNode(node, triggerAddEvent);
        // write the dom sizes and class
        this._writeAttr(el, node);
        el.classList.add(_types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.itemClass, this.opts.itemClass);
        const sizeToContent = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(node);
        sizeToContent ? el.classList.add('size-to-content') : el.classList.remove('size-to-content');
        if (sizeToContent)
            this.resizeToContentCheck(false, node);
        if (!_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.lazyLoad(node))
            this.prepareDragDrop(node.el);
        return this;
    }
    /** @internal write position CSS vars and x,y,w,h attributes (not used for CSS but by users) back to element */
    _writePosAttr(el, n) {
        // Avoid overwriting the inline style of the element during drag/resize, but always update the placeholder
        if ((!n._moving && !n._resizing) || this._placeholder === el) {
            const xProp = this.opts.rtl ? 'right' : 'left';
            // width/height:1 x/y:0 is set by default in the main CSS, so no need to set inlined vars
            el.style.top = n.y ? (n.y === 1 ? `var(--gs-cell-height)` : `calc(${n.y} * var(--gs-cell-height))`) : null;
            el.style[xProp] = n.x ? (n.x === 1 ? `var(--gs-column-width)` : `calc(${n.x} * var(--gs-column-width))`) : null;
            el.style.width = n.w > 1 ? `calc(${n.w} * var(--gs-column-width))` : null;
            el.style.height = n.h > 1 ? `calc(${n.h} * var(--gs-cell-height))` : null;
        }
        // NOTE: those are technically not needed anymore (v12+) as we have CSS vars for everything, but some users depends on them to render item size using CSS
        // ALways write x,y otherwise it could be autoPositioned incorrectly #3181
        el.setAttribute('gs-x', String(n.x));
        el.setAttribute('gs-y', String(n.y));
        n.w > 1 ? el.setAttribute('gs-w', String(n.w)) : el.removeAttribute('gs-w');
        n.h > 1 ? el.setAttribute('gs-h', String(n.h)) : el.removeAttribute('gs-h');
        return this;
    }
    /** @internal call to write any default attributes back to element */
    _writeAttr(el, node) {
        if (!node)
            return this;
        this._writePosAttr(el, node);
        const attrs /*: GridStackWidget but strings */ = {
            // autoPosition: 'gs-auto-position', // no need to write out as already in node and doesn't affect CSS
            noResize: 'gs-no-resize',
            noMove: 'gs-no-move',
            locked: 'gs-locked',
            id: 'gs-id',
            sizeToContent: 'gs-size-to-content',
        };
        for (const key in attrs) {
            if (node[key]) { // 0 is valid for x,y only but done above already and not in list anyway
                el.setAttribute(attrs[key], String(node[key]));
            }
            else {
                el.removeAttribute(attrs[key]);
            }
        }
        return this;
    }
    /** @internal call to read any default attributes from element */
    _readAttr(el, clearDefaultAttr = true) {
        const n = {};
        n.x = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-x'));
        n.y = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-y'));
        n.w = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-w'));
        n.h = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-h'));
        n.autoPosition = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-auto-position'));
        n.noResize = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-no-resize'));
        n.noMove = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-no-move'));
        n.locked = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-locked'));
        const attr = el.getAttribute('gs-size-to-content');
        if (attr) {
            if (attr === 'true' || attr === 'false')
                n.sizeToContent = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(attr);
            else
                n.sizeToContent = parseInt(attr, 10);
        }
        n.id = el.getAttribute('gs-id');
        // read but never written out
        n.maxW = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-max-w'));
        n.minW = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-min-w'));
        n.maxH = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-max-h'));
        n.minH = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-min-h'));
        // v8.x optimization to reduce un-needed attr that don't render or are default CSS
        if (clearDefaultAttr) {
            if (n.w === 1)
                el.removeAttribute('gs-w');
            if (n.h === 1)
                el.removeAttribute('gs-h');
            if (n.maxW)
                el.removeAttribute('gs-max-w');
            if (n.minW)
                el.removeAttribute('gs-min-w');
            if (n.maxH)
                el.removeAttribute('gs-max-h');
            if (n.minH)
                el.removeAttribute('gs-min-h');
        }
        // remove any key not found (null or false which is default, unless sizeToContent=false override)
        for (const key in n) {
            if (!n.hasOwnProperty(key))
                return;
            if (!n[key] && n[key] !== 0 && key !== 'sizeToContent') { // 0 can be valid value (x,y only really)
                delete n[key];
            }
        }
        return n;
    }
    /** @internal */
    _setStaticClass() {
        const classes = ['grid-stack-static'];
        if (this.opts.staticGrid) {
            this.el.classList.add(...classes);
            this.el.setAttribute('gs-static', 'true');
        }
        else {
            this.el.classList.remove(...classes);
            this.el.removeAttribute('gs-static');
        }
        return this;
    }
    /**
     * called when we are being resized - check if the one Column Mode needs to be turned on/off
     * and remember the prev columns we used, or get our count from parent, as well as check for cellHeight==='auto' (square)
     * or `sizeToContent` gridItem options.
     */
    onResize(clientWidth = this.el?.clientWidth) {
        if (!clientWidth)
            return; // return if we're gone or no size yet (will get called again)
        if (this.prevWidth === clientWidth)
            return; // no-op
        this.prevWidth = clientWidth;
        // console.log('onResize ', clientWidth);
        this.batchUpdate();
        // see if we're nested and take our column count from our parent....
        let columnChanged = false;
        if (this._autoColumn && this.parentGridNode) {
            if (this.opts.column !== this.parentGridNode.w) {
                this.column(this.parentGridNode.w, this.opts.layout || 'list');
                columnChanged = true;
            }
        }
        else {
            // else check for dynamic column
            columnChanged = this.checkDynamicColumn();
        }
        // make the cells content square again
        if (this._isAutoCellHeight)
            this.cellHeight();
        // update any nested grids, or items size
        this.engine.nodes.forEach(n => {
            if (n.subGrid)
                n.subGrid.onResize();
        });
        if (!this._skipInitialResize)
            this.resizeToContentCheck(columnChanged); // wait for anim of column changed (DOM reflow before we can size correctly)
        delete this._skipInitialResize;
        this.batchUpdate(false);
        return this;
    }
    /** resizes content for given node (or all) if shouldSizeToContent() is true */
    resizeToContentCheck(delay = false, n = undefined) {
        if (!this.engine)
            return; // we've been deleted in between!
        // update any gridItem height with sizeToContent, but wait for DOM $animation_speed to settle if we changed column count
        // TODO: is there a way to know what the final (post animation) size of the content will be so we can animate the column width and height together rather than sequentially ?
        if (delay && this.hasAnimationCSS())
            return setTimeout(() => this.resizeToContentCheck(false, n), this.animationDelay);
        if (n) {
            if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(n))
                this.resizeToContentCBCheck(n.el);
        }
        else if (this.engine.nodes.some(n => _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(n))) {
            const nodes = [...this.engine.nodes]; // in case order changes while resizing one
            this.batchUpdate();
            nodes.forEach(n => {
                if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(n))
                    this.resizeToContentCBCheck(n.el);
            });
            this._ignoreLayoutsNodeChange = true; // loop through each node will set/reset around each move, so set it here again
            this.batchUpdate(false);
            this._ignoreLayoutsNodeChange = false;
        }
        // call this regardless of shouldSizeToContent because widget might need to stretch to take available space after a resize
        if (this._gsEventHandler['resizecontent'])
            this._gsEventHandler['resizecontent'](null, n ? [n] : this.engine.nodes);
    }
    /** add or remove the grid element size event handler */
    _updateResizeEvent(forceRemove = false) {
        // only add event if we're not nested (parent will call us) and we're auto sizing cells or supporting dynamic column (i.e. doing work)
        // or supporting new sizeToContent option.
        const trackSize = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts
            || this.engine.nodes.find(n => n.sizeToContent));
        if (!forceRemove && trackSize && !this.resizeObserver) {
            this._sizeThrottle = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.throttle(() => this.onResize(), this.opts.cellHeightThrottle);
            this.resizeObserver = new ResizeObserver(() => this._sizeThrottle());
            this.resizeObserver.observe(this.el);
            this._skipInitialResize = true; // makeWidget will originally have called on startup
        }
        else if ((forceRemove || !trackSize) && this.resizeObserver) {
            this.resizeObserver.disconnect();
            delete this.resizeObserver;
            delete this._sizeThrottle;
        }
        return this;
    }
    /** @internal convert a potential selector into actual element */
    static getElement(els = '.grid-stack-item') { return _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getElement(els); }
    /** @internal */
    static getElements(els = '.grid-stack-item') { return _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getElements(els); }
    /** @internal */
    static getGridElement(els) { return GridStack.getElement(els); }
    /** @internal */
    static getGridElements(els) { return _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getElements(els); }
    /** @internal initialize margin top/bottom/left/right and units */
    _initMargin() {
        let data;
        let margin = 0;
        // support passing multiple values like CSS (ex: '5px 10px 0 20px')
        let margins = [];
        if (typeof this.opts.margin === 'string') {
            margins = this.opts.margin.split(' ');
        }
        if (margins.length === 2) { // top/bot, left/right like CSS
            this.opts.marginTop = this.opts.marginBottom = margins[0];
            this.opts.marginLeft = this.opts.marginRight = margins[1];
        }
        else if (margins.length === 4) { // Clockwise like CSS
            this.opts.marginTop = margins[0];
            this.opts.marginRight = margins[1];
            this.opts.marginBottom = margins[2];
            this.opts.marginLeft = margins[3];
        }
        else {
            data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(this.opts.margin);
            this.opts.marginUnit = data.unit;
            margin = this.opts.margin = data.h;
        }
        // see if top/bottom/left/right need to be set as well
        const keys = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
        keys.forEach(k => {
            if (this.opts[k] === undefined) {
                this.opts[k] = margin;
            }
            else {
                data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(this.opts[k]);
                this.opts[k] = data.h;
                delete this.opts.margin;
            }
        });
        this.opts.marginUnit = data.unit; // in case side were spelled out, use those units instead...
        if (this.opts.marginTop === this.opts.marginBottom && this.opts.marginLeft === this.opts.marginRight && this.opts.marginTop === this.opts.marginRight) {
            this.opts.margin = this.opts.marginTop; // makes it easier to check for no-ops in setMargin()
        }
        // finally Update the CSS margin variables (inside the cell height) */
        const style = this.el.style;
        style.setProperty('--gs-item-margin-top', `${this.opts.marginTop}${this.opts.marginUnit}`);
        style.setProperty('--gs-item-margin-bottom', `${this.opts.marginBottom}${this.opts.marginUnit}`);
        style.setProperty('--gs-item-margin-right', `${this.opts.marginRight}${this.opts.marginUnit}`);
        style.setProperty('--gs-item-margin-left', `${this.opts.marginLeft}${this.opts.marginUnit}`);
        return this;
    }
    /* ===========================================================================================
     * drag&drop methods that used to be stubbed out and implemented in dd-gridstack.ts
     * but caused loading issues in prod - see https://github.com/gridstack/gridstack.js/issues/2039
     * ===========================================================================================
     */
    /**
     * Get the global drag & drop implementation instance.
     * This provides access to the underlying drag & drop functionality.
     *
     * @returns the DDGridStack instance used for drag & drop operations
     *
     * @example
     * const dd = GridStack.getDD();
     * // Access drag & drop functionality
     */
    static getDD() {
        return dd;
    }
    /**
     * call to setup dragging in from the outside (say toolbar), by specifying the class selection and options.
     * Called during GridStack.init() as options, but can also be called directly (last param are used) in case the toolbar
     * is dynamically create and needs to be set later.
     * @param dragIn string selector (ex: '.sidebar-item') or list of dom elements
     * @param dragInOptions options - see DDDragOpt. (default: {handle: '.grid-stack-item-content', appendTo: 'body'}
     * @param widgets GridStackWidget def to assign to each element which defines what to create on drop
     * @param root optional root which defaults to document (for shadow dom pass the parent HTMLDocument)
     */
    static setupDragIn(dragIn, dragInOptions, widgets, root = document) {
        if (dragInOptions?.pause !== undefined) {
            _dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.pauseDrag = dragInOptions.pause;
        }
        dragInOptions = { appendTo: 'body', helper: 'clone', ...(dragInOptions || {}) }; // default to handle:undefined = drag by the whole item
        const els = (typeof dragIn === 'string') ? _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getElements(dragIn, root) : dragIn;
        els.forEach((el, i) => {
            if (!dd.isDraggable(el))
                dd.dragIn(el, dragInOptions);
            if (widgets?.[i])
                el.gridstackNode = widgets[i];
        });
    }
    /**
     * Enables/Disables dragging by the user for specific grid elements.
     * For all items and future items, use enableMove() instead. No-op for static grids.
     *
     * Note: If you want to prevent an item from moving due to being pushed around by another
     * during collision, use the 'locked' property instead.
     *
     * @param els widget element(s) or selector to modify
     * @param val if true widget will be draggable, assuming the parent grid isn't noMove or static
     * @returns the grid instance for chaining
     *
     * @example
     * // Make specific widgets draggable
     * grid.movable('.my-widget', true);
     *
     * // Disable dragging for specific widgets
     * grid.movable('#fixed-widget', false);
     */
    movable(els, val) {
        if (this.opts.staticGrid)
            return this; // can't move a static grid!
        GridStack.getElements(els).forEach(el => {
            const n = el.gridstackNode;
            if (!n)
                return;
            val ? delete n.noMove : n.noMove = true;
            this.prepareDragDrop(n.el); // init DD if need be, and adjust
        });
        return this;
    }
    /**
     * Enables/Disables user resizing for specific grid elements.
     * For all items and future items, use enableResize() instead. No-op for static grids.
     *
     * @param els widget element(s) or selector to modify
     * @param val if true widget will be resizable, assuming the parent grid isn't noResize or static
     * @returns the grid instance for chaining
     *
     * @example
     * // Make specific widgets resizable
     * grid.resizable('.my-widget', true);
     *
     * // Disable resizing for specific widgets
     * grid.resizable('#fixed-size-widget', false);
     */
    resizable(els, val) {
        if (this.opts.staticGrid)
            return this; // can't resize a static grid!
        GridStack.getElements(els).forEach(el => {
            const n = el.gridstackNode;
            if (!n)
                return;
            val ? delete n.noResize : n.noResize = true;
            this.prepareDragDrop(n.el); // init DD if need be, and adjust
        });
        return this;
    }
    /**
     * Temporarily disables widgets moving/resizing.
     * If you want a more permanent way (which freezes up resources) use `setStatic(true)` instead.
     *
     * Note: This is a no-op for static grids.
     *
     * This is a shortcut for:
     * ```typescript
     * grid.enableMove(false);
     * grid.enableResize(false);
     * ```
     *
     * @param recurse if true (default), sub-grids also get updated
     * @returns the grid instance for chaining
     *
     * @example
     * // Disable all interactions
     * grid.disable();
     *
     * // Disable only this grid, not sub-grids
     * grid.disable(false);
     */
    disable(recurse = true) {
        if (this.opts.staticGrid)
            return;
        this.enableMove(false, recurse);
        this.enableResize(false, recurse);
        this._triggerEvent('disable');
        return this;
    }
    /**
     * Re-enables widgets moving/resizing - see disable().
     * Note: This is a no-op for static grids.
     *
     * This is a shortcut for:
     * ```typescript
     * grid.enableMove(true);
     * grid.enableResize(true);
     * ```
     *
     * @param recurse if true (default), sub-grids also get updated
     * @returns the grid instance for chaining
     *
     * @example
     * // Re-enable all interactions
     * grid.enable();
     *
     * // Enable only this grid, not sub-grids
     * grid.enable(false);
     */
    enable(recurse = true) {
        if (this.opts.staticGrid)
            return;
        this.enableMove(true, recurse);
        this.enableResize(true, recurse);
        this._triggerEvent('enable');
        return this;
    }
    /**
     * Enables/disables widget moving for all widgets. No-op for static grids.
     * Note: locally defined items (with noMove property) still override this setting.
     *
     * @param doEnable if true widgets will be movable, if false moving is disabled
     * @param recurse if true (default), sub-grids also get updated
     * @returns the grid instance for chaining
     *
     * @example
     * // Enable moving for all widgets
     * grid.enableMove(true);
     *
     * // Disable moving for all widgets
     * grid.enableMove(false);
     *
     * // Enable only this grid, not sub-grids
     * grid.enableMove(true, false);
     */
    enableMove(doEnable, recurse = true) {
        if (this.opts.staticGrid)
            return this; // can't move a static grid!
        doEnable ? delete this.opts.disableDrag : this.opts.disableDrag = true; // FIRST before we update children as grid overrides #1658
        this.engine.nodes.forEach(n => {
            this.prepareDragDrop(n.el);
            if (n.subGrid && recurse)
                n.subGrid.enableMove(doEnable, recurse);
        });
        return this;
    }
    /**
     * Enables/disables widget resizing for all widgets. No-op for static grids.
     * Note: locally defined items (with noResize property) still override this setting.
     *
     * @param doEnable if true widgets will be resizable, if false resizing is disabled
     * @param recurse if true (default), sub-grids also get updated
     * @returns the grid instance for chaining
     *
     * @example
     * // Enable resizing for all widgets
     * grid.enableResize(true);
     *
     * // Disable resizing for all widgets
     * grid.enableResize(false);
     *
     * // Enable only this grid, not sub-grids
     * grid.enableResize(true, false);
     */
    enableResize(doEnable, recurse = true) {
        if (this.opts.staticGrid)
            return this; // can't size a static grid!
        doEnable ? delete this.opts.disableResize : this.opts.disableResize = true; // FIRST before we update children as grid overrides #1658
        this.engine.nodes.forEach(n => {
            this.prepareDragDrop(n.el);
            if (n.subGrid && recurse)
                n.subGrid.enableResize(doEnable, recurse);
        });
        return this;
    }
    /** @internal call when drag (and drop) needs to be cancelled (Esc key) */
    cancelDrag() {
        const n = this._placeholder?.gridstackNode;
        if (!n)
            return;
        if (n._isExternal) {
            // remove any newly inserted nodes (from outside)
            n._isAboutToRemove = true;
            this.engine.removeNode(n);
        }
        else if (n._isAboutToRemove) {
            // restore any temp removed (dragged over trash)
            GridStack._itemRemoving(n.el, false);
        }
        this.engine.restoreInitial();
    }
    /** @internal removes any drag&drop present (called during destroy) */
    _removeDD(el) {
        dd.draggable(el, 'destroy').resizable(el, 'destroy');
        if (el.gridstackNode) {
            delete el.gridstackNode._initDD; // reset our DD init flag
        }
        delete el.ddElement;
        return this;
    }
    /** @internal called to add drag over to support widgets being added externally */
    _setupAcceptWidget() {
        // check if we need to disable things
        if (this.opts.staticGrid || (!this.opts.acceptWidgets && !this.opts.removable)) {
            dd.droppable(this.el, 'destroy');
            return this;
        }
        // vars shared across all methods
        let cellHeight, cellWidth;
        const onDrag = (event, el, helper) => {
            helper = helper || el;
            const node = helper.gridstackNode;
            if (!node)
                return;
            // if the element is being dragged from outside, scale it down to match the grid's scale
            // and slightly adjust its position relative to the mouse
            if (!node.grid?.el) {
                // this scales the helper down
                helper.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
                // this makes it so that the helper is well positioned relative to the mouse after scaling
                const helperRect = helper.getBoundingClientRect();
                helper.style.left = helperRect.x + (this.dragTransform.xScale - 1) * (event.clientX - helperRect.x) / this.dragTransform.xScale + 'px';
                helper.style.top = helperRect.y + (this.dragTransform.yScale - 1) * (event.clientY - helperRect.y) / this.dragTransform.yScale + 'px';
                helper.style.transformOrigin = `0px 0px`;
            }
            let { top, left } = helper.getBoundingClientRect();
            const rect = this.el.getBoundingClientRect();
            left -= rect.left;
            top -= rect.top;
            const ui = {
                position: {
                    top: top * this.dragTransform.xScale,
                    left: left * this.dragTransform.yScale
                }
            };
            if (node._temporaryRemoved) {
                node.x = Math.max(0, Math.round(left / cellWidth));
                node.y = Math.max(0, Math.round(top / cellHeight));
                delete node.autoPosition;
                this.engine.nodeBoundFix(node);
                // don't accept *initial* location if doesn't fit #1419 (locked drop region, or can't grow), but maybe try if it will go somewhere
                if (!this.engine.willItFit(node)) {
                    node.autoPosition = true; // ignore x,y and try for any slot...
                    if (!this.engine.willItFit(node)) {
                        dd.off(el, 'drag'); // stop calling us
                        return; // full grid or can't grow
                    }
                    if (node._willFitPos) {
                        // use the auto position instead #1687
                        _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.copyPos(node, node._willFitPos);
                        delete node._willFitPos;
                    }
                }
                // re-use the existing node dragging method
                this._onStartMoving(helper, event, ui, node, cellWidth, cellHeight);
            }
            else {
                // re-use the existing node dragging that does so much of the collision detection
                this._dragOrResize(helper, event, ui, node, cellWidth, cellHeight);
            }
        };
        dd.droppable(this.el, {
            accept: (el) => {
                const node = el.gridstackNode || this._readAttr(el, false);
                // set accept drop to true on ourself (which we ignore) so we don't get "can't drop" icon in HTML5 mode while moving
                if (node?.grid === this)
                    return true;
                if (!this.opts.acceptWidgets)
                    return false;
                // check for accept method or class matching
                let canAccept = true;
                if (typeof this.opts.acceptWidgets === 'function') {
                    canAccept = this.opts.acceptWidgets(el);
                }
                else {
                    const selector = (this.opts.acceptWidgets === true ? '.grid-stack-item' : this.opts.acceptWidgets);
                    canAccept = el.matches(selector);
                }
                // finally check to make sure we actually have space left #1571 #2633
                if (canAccept && node && this.opts.maxRow) {
                    const n = { w: node.w, h: node.h, minW: node.minW, minH: node.minH }; // only width/height matters and autoPosition
                    canAccept = this.engine.willItFit(n);
                }
                return canAccept;
            }
        })
            /**
             * entering our grid area
             */
            .on(this.el, 'dropover', (event, el, helper) => {
            // console.log(`over ${this.el.gridstack.opts.id} ${count++}`); // TEST
            let node = helper?.gridstackNode || el.gridstackNode;
            // ignore drop enter on ourself (unless we temporarily removed) which happens on a simple drag of our item
            if (node?.grid === this && !node._temporaryRemoved) {
                // delete node._added; // reset this to track placeholder again in case we were over other grid #1484 (dropout doesn't always clear)
                return false; // prevent parent from receiving msg (which may be a grid as well)
            }
            // If sidebar item, restore the sidebar node size to ensure consistent behavior when dragging between grids
            if (node?._sidebarOrig) {
                node.w = node._sidebarOrig.w;
                node.h = node._sidebarOrig.h;
            }
            // fix #1578 when dragging fast, we may not get a leave on the previous grid so force one now
            if (node?.grid && node.grid !== this && !node._temporaryRemoved) {
                // console.log('dropover without leave'); // TEST
                const otherGrid = node.grid;
                otherGrid._leave(el, helper);
            }
            helper = helper || el;
            // cache cell dimensions (which don't change), position can animate if we removed an item in otherGrid that affects us...
            cellWidth = this.cellWidth();
            cellHeight = this.getCellHeight(true);
            // sidebar items: load any element attributes if we don't have a node on first enter from the sidebar
            if (!node) {
                const attr = helper.getAttribute('data-gs-widget') || helper.getAttribute('gridstacknode'); // TBD: temp support for old V11.0.0 attribute
                if (attr) {
                    try {
                        node = JSON.parse(attr);
                    }
                    catch (error) {
                        console.error("Gridstack dropover: Bad JSON format: ", attr);
                    }
                    helper.removeAttribute('data-gs-widget');
                    helper.removeAttribute('gridstacknode');
                }
                if (!node)
                    node = this._readAttr(helper); // used to pass false for #2354, but now we clone top level node
                // On first grid enter from sidebar, set the initial sidebar item size properties for the node
                node._sidebarOrig = { w: node.w, h: node.h };
            }
            if (!node.grid) { // sidebar item
                if (!node.el)
                    node = { ...node }; // clone first time we're coming from sidebar (since 'clone' doesn't copy vars)
                node._isExternal = true;
                helper.gridstackNode = node;
            }
            // calculate the grid size based on element outer size
            const w = node.w || Math.round(helper.offsetWidth / cellWidth) || 1;
            const h = node.h || Math.round(helper.offsetHeight / cellHeight) || 1;
            // if the item came from another grid, make a copy and save the original info in case we go back there
            if (node.grid && node.grid !== this) {
                // copy the node original values (min/max/id/etc...) but override width/height/other flags which are this grid specific
                // console.log('dropover cloning node'); // TEST
                if (!el._gridstackNodeOrig)
                    el._gridstackNodeOrig = node; // shouldn't have multiple nested!
                el.gridstackNode = node = { ...node, w, h, grid: this };
                delete node.x;
                delete node.y;
                this.engine.cleanupNode(node)
                    .nodeBoundFix(node);
                // restore some internal fields we need after clearing them all
                node._initDD =
                    node._isExternal = // DOM needs to be re-parented on a drop
                        node._temporaryRemoved = true; // so it can be inserted onDrag below
            }
            else {
                node.w = w;
                node.h = h;
                node._temporaryRemoved = true; // so we can insert it
            }
            // clear any marked for complete removal (Note: don't check _isAboutToRemove as that is cleared above - just do it)
            GridStack._itemRemoving(node.el, false);
            dd.on(el, 'drag', onDrag);
            // make sure this is called at least once when going fast #1578
            onDrag(event, el, helper);
            return false; // prevent parent from receiving msg (which may be a grid as well)
        })
            /**
             * Leaving our grid area...
             */
            .on(this.el, 'dropout', (event, el, helper) => {
            // console.log(`out ${this.el.gridstack.opts.id} ${count++}`); // TEST
            const node = helper?.gridstackNode || el.gridstackNode;
            if (!node)
                return false;
            // fix #1578 when dragging fast, we might get leave after other grid gets enter (which calls us to clean)
            // so skip this one if we're not the active grid really..
            if (!node.grid || node.grid === this) {
                this._leave(el, helper);
                // if we were created as temporary nested grid, go back to before state
                if (this._isTemp) {
                    this.removeAsSubGrid(node);
                }
            }
            return false; // prevent parent from receiving msg (which may be grid as well)
        })
            /**
             * end - releasing the mouse
             */
            .on(this.el, 'drop', (event, el, helper) => {
            const node = helper?.gridstackNode || el.gridstackNode;
            // ignore drop on ourself from ourself that didn't come from the outside - dragend will handle the simple move instead
            if (node?.grid === this && !node._isExternal)
                return false;
            const wasAdded = !!this.placeholder.parentElement; // skip items not actually added to us because of constrains, but do cleanup #1419
            const wasSidebar = el !== helper;
            this.placeholder.remove();
            delete this.placeholder.gridstackNode;
            // disable animation when replacing a placeholder (already positioned) with actual content
            if (wasAdded && this.opts.animate) {
                this.setAnimation(false);
                this.setAnimation(true, true); // delay adding back
            }
            // notify previous grid of removal
            // console.log('drop delete _gridstackNodeOrig') // TEST
            const origNode = el._gridstackNodeOrig;
            delete el._gridstackNodeOrig;
            if (wasAdded && origNode?.grid && origNode.grid !== this) {
                const oGrid = origNode.grid;
                oGrid.engine.removeNodeFromLayoutCache(origNode);
                oGrid.engine.removedNodes.push(origNode);
                oGrid._triggerRemoveEvent()._triggerChangeEvent();
                // if it's an empty sub-grid that got auto-created, nuke it
                if (oGrid.parentGridNode && !oGrid.engine.nodes.length && oGrid.opts.subGridDynamic) {
                    oGrid.removeAsSubGrid();
                }
            }
            if (!node)
                return false;
            // use existing placeholder node as it's already in our list with drop location
            if (wasAdded) {
                this.engine.cleanupNode(node); // removes all internal _xyz values
                node.grid = this;
            }
            delete node.grid?._isTemp;
            dd.off(el, 'drag');
            // if we made a copy insert that instead of the original (sidebar item)
            if (helper !== el) {
                helper.remove();
                el = helper;
            }
            else {
                el.remove(); // reduce flicker as we change depth here, and size further down
            }
            this._removeDD(el);
            if (!wasAdded)
                return false;
            const subGrid = node.subGrid?.el?.gridstack; // set when actual sub-grid present
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.copyPos(node, this._readAttr(this.placeholder)); // placeholder values as moving VERY fast can throw things off #1578
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removePositioningStyles(el);
            // give the user a chance to alter the widget that will get inserted if new sidebar item
            if (wasSidebar && (node.content || node.subGridOpts || GridStack.addRemoveCB)) {
                delete node.el;
                el = this.addWidget(node);
            }
            else {
                this._prepareElement(el, true, node);
                this.el.appendChild(el);
                // resizeToContent is skipped in _prepareElement() until node is visible (clientHeight=0) so call it now
                this.resizeToContentCheck(false, node);
                if (subGrid) {
                    subGrid.parentGridNode = node;
                }
                this._updateContainerHeight();
            }
            this.engine.addedNodes.push(node);
            this._triggerAddEvent();
            this._triggerChangeEvent();
            this.engine.endUpdate();
            if (this._gsEventHandler['dropped']) {
                this._gsEventHandler['dropped']({ ...event, type: 'dropped' }, origNode && origNode.grid ? origNode : undefined, node);
            }
            return false; // prevent parent from receiving msg (which may be grid as well)
        });
        return this;
    }
    /** @internal mark item for removal */
    static _itemRemoving(el, remove) {
        if (!el)
            return;
        const node = el ? el.gridstackNode : undefined;
        if (!node?.grid || el.classList.contains(node.grid.opts.removableOptions.decline))
            return;
        remove ? node._isAboutToRemove = true : delete node._isAboutToRemove;
        remove ? el.classList.add('grid-stack-item-removing') : el.classList.remove('grid-stack-item-removing');
    }
    /** @internal called to setup a trash drop zone if the user specifies it */
    _setupRemoveDrop() {
        if (typeof this.opts.removable !== 'string')
            return this;
        const trashEl = document.querySelector(this.opts.removable);
        if (!trashEl)
            return this;
        // only register ONE static drop-over/dropout callback for the 'trash', and it will
        // update the passed in item and parent grid because the '.trash' is a shared resource anyway,
        // and Native DD only has 1 event CB (having a list and technically a per grid removableOptions complicates things greatly)
        if (!this.opts.staticGrid && !dd.isDroppable(trashEl)) {
            dd.droppable(trashEl, this.opts.removableOptions)
                .on(trashEl, 'dropover', (event, el) => GridStack._itemRemoving(el, true))
                .on(trashEl, 'dropout', (event, el) => GridStack._itemRemoving(el, false));
        }
        return this;
    }
    /**
     * prepares the element for drag&drop - this is normally called by makeWidget() unless are are delay loading
     * @param el GridItemHTMLElement of the widget
     * @param [force=false]
     * */
    prepareDragDrop(el, force = false) {
        const node = el?.gridstackNode;
        if (!node)
            return;
        const noMove = node.noMove || this.opts.disableDrag;
        const noResize = node.noResize || this.opts.disableResize;
        // check for disabled grid first
        const disable = this.opts.staticGrid || (noMove && noResize);
        if (force || disable) {
            if (node._initDD) {
                this._removeDD(el); // nukes everything instead of just disable, will add some styles back next
                delete node._initDD;
            }
            if (disable) {
                el.classList.add('ui-draggable-disabled', 'ui-resizable-disabled'); // add styles one might depend on #1435
                return this;
            }
        }
        if (!node._initDD) {
            // variables used/cashed between the 3 start/move/end methods, in addition to node passed above
            let cellWidth;
            let cellHeight;
            /** called when item starts moving/resizing */
            const onStartMoving = (event, ui) => {
                // trigger any 'dragstart' / 'resizestart' manually
                this.triggerEvent(event, event.target);
                cellWidth = this.cellWidth();
                cellHeight = this.getCellHeight(true); // force pixels for calculations
                this._onStartMoving(el, event, ui, node, cellWidth, cellHeight);
            };
            /** called when item is being dragged/resized */
            const dragOrResize = (event, ui) => {
                this._dragOrResize(el, event, ui, node, cellWidth, cellHeight);
            };
            /** called when the item stops moving/resizing */
            const onEndMoving = (event) => {
                this.placeholder.remove();
                delete this.placeholder.gridstackNode;
                delete node._moving;
                delete node._resizing;
                delete node._event;
                delete node._lastTried;
                const widthChanged = node.w !== node._orig.w;
                // if the item has moved to another grid, we're done here
                const target = event.target;
                if (!target.gridstackNode || target.gridstackNode.grid !== this)
                    return;
                node.el = target;
                if (node._isAboutToRemove) {
                    const grid = el.gridstackNode.grid;
                    if (grid._gsEventHandler[event.type]) {
                        grid._gsEventHandler[event.type](event, target);
                    }
                    grid.engine.nodes.push(node); // temp add it back so we can proper remove it next
                    grid.removeWidget(el, true, true);
                }
                else {
                    _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removePositioningStyles(target);
                    if (node._temporaryRemoved) {
                        // use last position we were at (not _orig as we may have pushed others and moved) and add it back
                        this._writePosAttr(target, node);
                        this.engine.addNode(node);
                    }
                    else {
                        // move to new placeholder location
                        this._writePosAttr(target, node);
                    }
                    this.triggerEvent(event, target);
                }
                // @ts-ignore
                this._extraDragRow = 0; // @ts-ignore
                this._updateContainerHeight(); // @ts-ignore
                this._triggerChangeEvent();
                this.engine.endUpdate();
                if (event.type === 'resizestop') {
                    if (Number.isInteger(node.sizeToContent))
                        node.sizeToContent = node.h; // new soft limit
                    this.resizeToContentCheck(widthChanged, node); // wait for width animation if changed
                }
            };
            dd.draggable(el, {
                start: onStartMoving,
                stop: onEndMoving,
                drag: dragOrResize,
                rtl: this.opts.rtl,
            }).resizable(el, {
                start: onStartMoving,
                stop: onEndMoving,
                resize: dragOrResize,
                rtl: this.opts.rtl,
            });
            node._initDD = true; // we've set DD support now
        }
        // finally fine tune move vs resize by disabling any part...
        dd.draggable(el, noMove ? 'disable' : 'enable')
            .resizable(el, noResize ? 'disable' : 'enable');
        return this;
    }
    /** @internal handles actual drag/resize start */
    _onStartMoving(el, event, ui, node, cellWidth, cellHeight) {
        this.engine.cleanNodes()
            .beginUpdate(node);
        // @ts-ignore
        this._writePosAttr(this.placeholder, node);
        this.el.appendChild(this.placeholder);
        this.placeholder.gridstackNode = node;
        // console.log('_onStartMoving placeholder') // TEST
        // if the element is inside a grid, it has already been scaled
        // we can use that as a scale reference
        if (node.grid?.el) {
            this.dragTransform = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getValuesFromTransformedElement(el);
        }
        // if the element is being dragged from outside (not from any grid)
        // we use the grid as the transformation reference, since the helper is not subject to transformation
        else if (this.placeholder && this.placeholder.closest('.grid-stack')) {
            const gridEl = this.placeholder.closest('.grid-stack');
            this.dragTransform = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getValuesFromTransformedElement(gridEl);
        }
        // Fallback
        else {
            this.dragTransform = {
                xScale: 1,
                xOffset: 0,
                yScale: 1,
                yOffset: 0,
            };
        }
        node.el = this.placeholder;
        node._lastUiPosition = ui.position;
        node._prevYPix = ui.position.top;
        node._moving = (event.type === 'dragstart'); // 'dropover' are not initially moving so they can go exactly where they enter (will push stuff out of the way)
        node._resizing = (event.type === 'resizestart');
        delete node._lastTried;
        if (event.type === 'dropover' && node._temporaryRemoved) {
            // console.log('engine.addNode x=' + node.x); // TEST
            this.engine.addNode(node); // will add, fix collisions, update attr and clear _temporaryRemoved
            node._moving = true; // AFTER, mark as moving object (wanted fix location before)
        }
        // set the min/max resize info taking into account the column count and position (so we don't resize outside the grid)
        this.engine.cacheRects(cellWidth, cellHeight, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft);
        if (event.type === 'resizestart') {
            const colLeft = this.getColumn() - node.x;
            const rowLeft = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - node.y;
            dd.resizable(el, 'option', 'minWidth', cellWidth * Math.min(node.minW || 1, colLeft))
                .resizable(el, 'option', 'minHeight', cellHeight * Math.min(node.minH || 1, rowLeft))
                .resizable(el, 'option', 'maxWidth', cellWidth * Math.min(node.maxW || Number.MAX_SAFE_INTEGER, colLeft))
                .resizable(el, 'option', 'maxWidthMoveLeft', cellWidth * Math.min(node.maxW || Number.MAX_SAFE_INTEGER, node.x + node.w))
                .resizable(el, 'option', 'maxHeight', cellHeight * Math.min(node.maxH || Number.MAX_SAFE_INTEGER, rowLeft))
                .resizable(el, 'option', 'maxHeightMoveUp', cellHeight * Math.min(node.maxH || Number.MAX_SAFE_INTEGER, node.y + node.h));
        }
    }
    /** @internal handles actual drag/resize */
    _dragOrResize(el, event, ui, node, cellWidth, cellHeight) {
        const p = { ...node._orig }; // could be undefined (_isExternal) which is ok (drag only set x,y and w,h will default to node value)
        let resizing;
        let mLeft = this.opts.marginLeft, mRight = this.opts.marginRight, mTop = this.opts.marginTop, mBottom = this.opts.marginBottom;
        // if margins (which are used to pass mid point by) are large relative to cell height/width, reduce them down #1855
        const mHeight = Math.round(cellHeight * 0.1), mWidth = Math.round(cellWidth * 0.1);
        mLeft = Math.min(mLeft, mWidth);
        mRight = Math.min(mRight, mWidth);
        mTop = Math.min(mTop, mHeight);
        mBottom = Math.min(mBottom, mHeight);
        if (event.type === 'drag') {
            if (node._temporaryRemoved)
                return; // handled by dropover
            node._prevYPix = ui.position.top;
            if (this.opts.draggable.scroll !== false) {
                _dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.dragElement?.updateScrollPosition(this.el);
            }
            // get new position taking into account the margin in the direction we are moving! (need to pass mid point by margin)
            const left = ui.position.left + (ui.position.left > node._lastUiPosition.left ? -mRight : mLeft);
            const top = ui.position.top + (ui.position.top > node._lastUiPosition.top ? -mBottom : mTop);
            p.x = Math.round(left / cellWidth);
            p.y = Math.round(top / cellHeight);
            // @ts-ignore// if we're at the bottom hitting something else, grow the grid so cursor doesn't leave when trying to place below others
            const prev = this._extraDragRow;
            if (this.engine.collide(node, p)) {
                const row = this.getRow();
                let extra = Math.max(0, (p.y + node.h) - row);
                if (this.opts.maxRow && row + extra > this.opts.maxRow) {
                    extra = Math.max(0, this.opts.maxRow - row);
                } // @ts-ignore
                this._extraDragRow = extra; // @ts-ignore
            }
            else
                this._extraDragRow = 0; // @ts-ignore
            if (this._extraDragRow !== prev)
                this._updateContainerHeight();
            if (node.x === p.x && node.y === p.y)
                return; // skip same
            // DON'T skip one we tried as we might have failed because of coverage <50% before
            // if (node._lastTried && node._lastTried.x === x && node._lastTried.y === y) return;
        }
        else if (event.type === 'resize') {
            if (p.x < 0)
                return;
            // Scrolling page if needed
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.updateScrollResize(event, el, cellHeight);
            // get new size
            p.w = Math.round((ui.size.width - mLeft) / cellWidth);
            p.h = Math.round((ui.size.height - mTop) / cellHeight);
            if (node.w === p.w && node.h === p.h)
                return;
            if (node._lastTried && node._lastTried.w === p.w && node._lastTried.h === p.h)
                return; // skip one we tried (but failed)
            // only recalculate position for handles that move the top-left corner (N/W).
            // for SE/S/E handles the top-left is anchored — recalculating from pixels causes
            // rounding drift on fine grids where cellWidth/cellHeight are only a few pixels. #385 #1356
            if (event.hasMovedX) {
                const left = ui.position.left + mLeft;
                p.x = Math.round(left / cellWidth);
            }
            if (event.hasMovedY) {
                const top = ui.position.top + mTop;
                p.y = Math.round(top / cellHeight);
            }
            resizing = true;
        }
        node._event = event;
        node._lastTried = p; // set as last tried (will nuke if we go there)
        const rect = {
            x: ui.position.left + mLeft,
            y: ui.position.top + mTop,
            w: (ui.size ? ui.size.width : node.w * cellWidth) - mLeft - mRight,
            h: (ui.size ? ui.size.height : node.h * cellHeight) - mTop - mBottom
        };
        if (this.engine.moveNodeCheck(node, { ...p, cellWidth, cellHeight, rect, resizing })) {
            node._lastUiPosition = ui.position;
            this.engine.cacheRects(cellWidth, cellHeight, mTop, mRight, mBottom, mLeft);
            delete node._skipDown;
            if (resizing && node.subGrid)
                node.subGrid.onResize();
            this._extraDragRow = 0; // @ts-ignore
            this._updateContainerHeight();
            const target = event.target; // @ts-ignore
            // Do not write sidebar item attributes back to the original sidebar el
            if (!node._sidebarOrig) {
                this._writePosAttr(target, node);
            }
            this.triggerEvent(event, target);
        }
    }
    /** call given event callback on our main top-most grid (if we're nested) */
    triggerEvent(event, target) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let grid = this;
        while (grid.parentGridNode)
            grid = grid.parentGridNode.grid;
        if (grid._gsEventHandler[event.type]) {
            grid._gsEventHandler[event.type](event, target);
        }
    }
    /** @internal called when item leaving our area by either cursor dropout event
     * or shape is outside our boundaries. remove it from us, and mark temporary if this was
     * our item to start with else restore prev node values from prev grid it came from.
     */
    _leave(el, helper) {
        helper = helper || el;
        const node = helper.gridstackNode;
        if (!node)
            return;
        // remove the scale of the helper on leave
        helper.style.transform = helper.style.transformOrigin = null;
        dd.off(el, 'drag'); // no need to track while being outside
        // this gets called when cursor leaves and shape is outside, so only do this once
        if (node._temporaryRemoved)
            return;
        node._temporaryRemoved = true;
        this.engine.removeNode(node); // remove placeholder as well, otherwise it's a sign node is not in our list, which is a bigger issue
        node.el = node._isExternal && helper ? helper : el; // point back to real item being dragged
        const sidebarOrig = node._sidebarOrig;
        if (node._isExternal)
            this.engine.cleanupNode(node);
        // Restore sidebar item initial size info to stay consistent when dragging between multiple grids
        node._sidebarOrig = sidebarOrig;
        if (this.opts.removable === true) { // boolean vs a class string
            // item leaving us and we are supposed to remove on leave (no need to drag onto trash) mark it so
            GridStack._itemRemoving(el, true);
        }
        // finally if item originally came from another grid, but left us, restore things back to prev info
        if (el._gridstackNodeOrig) {
            // console.log('leave delete _gridstackNodeOrig') // TEST
            el.gridstackNode = el._gridstackNodeOrig;
            delete el._gridstackNodeOrig;
        }
        else if (node._isExternal) {
            // item came from outside restore all nodes back to original
            this.engine.restoreInitial();
        }
    }
}
/**
 * callback to create the content of widgets so the app can control how to store and restore it
 * By default this lib will do 'el.textContent = w.content' forcing text only support for avoiding potential XSS issues.
 */
GridStack.renderCB = (el, w) => { if (el && w?.content)
    el.textContent = w.content; };
/** parent class for sizing content. defaults to '.grid-stack-item-content' */
GridStack.resizeToContentParent = '.grid-stack-item-content';
/** scoping so users can call GridStack.Utils.sort() for example */
GridStack.Utils = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils;
/** scoping so users can call new GridStack.Engine(12) for example */
GridStack.Engine = _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__.GridStackEngine;
/** @internal current version compiled in code */
GridStack.GDRev = '12.6.0';

//# sourceMappingURL=gridstack.js.map

/***/ },

/***/ 1265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gridDefaults: () => (/* binding */ gridDefaults)
/* harmony export */ });
/**
 * types.ts 12.6.0
 * Copyright (c) 2021-2025 Alain Dumesny - see GridStack root license
 */
/**
 * Default values for grid options - used during initialization and when saving out grid configuration.
 * These values are applied when options are not explicitly provided.
 */
const gridDefaults = {
    alwaysShowResizeHandle: 'mobile',
    animate: true,
    auto: true,
    cellHeight: 'auto',
    cellHeightThrottle: 100,
    cellHeightUnit: 'px',
    column: 12,
    draggable: { handle: '.grid-stack-item-content', appendTo: 'body', scroll: true },
    handle: '.grid-stack-item-content',
    itemClass: 'grid-stack-item',
    margin: 10,
    marginUnit: 'px',
    maxRow: 0,
    minRow: 0,
    placeholderClass: 'grid-stack-placeholder',
    placeholderText: '',
    removableOptions: { accept: 'grid-stack-item', decline: 'grid-stack-non-removable' },
    resizable: { handles: 'se' },
    rtl: 'auto',
    // **** same as not being set ****
    // disableDrag: false,
    // disableResize: false,
    // float: false,
    // handleClass: null,
    // removable: false,
    // staticGrid: false,
    //removable
};
//# sourceMappingURL=types.js.map

/***/ },

/***/ 1264
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
/**
 * utils.ts 12.6.0
 * Copyright (c) 2021-2025 Alain Dumesny - see GridStack root license
 */
// /**
//  * Checks for obsolete method names and provides deprecation warnings.
//  * Creates a wrapper function that logs a deprecation warning when called.
//  *
//  * @param self the object context to apply the function to
//  * @param f the new function to call
//  * @param oldName the deprecated method name
//  * @param newName the new method name to use instead
//  * @param rev the version when the deprecation was introduced
//  * @returns a wrapper function that warns about deprecation
//  */
// eslint-disable-next-line
// export function obsolete(self, f, oldName: string, newName: string, rev: string): (...args: any[]) => any {
//   const wrapper = (...args) => {
//     console.warn('gridstack.js: Function `' + oldName + '` is deprecated in ' + rev + ' and has been replaced ' +
//     'with `' + newName + '`. It will be **removed** in a future release');
//     return f.apply(self, args);
//   }
//   wrapper.prototype = f.prototype;
//   return wrapper;
// }
// /**
//  * Checks for obsolete grid options and migrates them to new names.
//  * Automatically copies old option values to new option names and shows deprecation warnings.
//  *
//  * @param opts the options object to check and migrate
//  * @param oldName the deprecated option name
//  * @param newName the new option name to use instead
//  * @param rev the version when the deprecation was introduced
//  */
// export function obsoleteOpts(opts: GridStackOptions, oldName: string, newName: string, rev: string): void {
//   if (opts[oldName] !== undefined) {
//     opts[newName] = opts[oldName];
//     console.warn('gridstack.js: Option `' + oldName + '` is deprecated in ' + rev + ' and has been replaced with `' +
//       newName + '`. It will be **removed** in a future release');
//   }
// }
// /**
//  * Checks for obsolete grid options that have been completely removed.
//  * Shows deprecation warnings for options that are no longer supported.
//  *
//  * @param opts the options object to check
//  * @param oldName the removed option name
//  * @param rev the version when the option was removed
//  * @param info additional information about the removal
//  */
// export function obsoleteOptsDel(opts: GridStackOptions, oldName: string, rev: string, info: string): void {
//   if (opts[oldName] !== undefined) {
//     console.warn('gridstack.js: Option `' + oldName + '` is deprecated in ' + rev + info);
//   }
// }
// /**
//  * Checks for obsolete HTML element attributes and migrates them.
//  * Automatically copies old attribute values to new attribute names and shows deprecation warnings.
//  *
//  * @param el the HTML element to check and migrate
//  * @param oldName the deprecated attribute name
//  * @param newName the new attribute name to use instead
//  * @param rev the version when the deprecation was introduced
//  */
// export function obsoleteAttr(el: HTMLElement, oldName: string, newName: string, rev: string): void {
//   const oldAttr = el.getAttribute(oldName);
//   if (oldAttr !== null) {
//     el.setAttribute(newName, oldAttr);
//     console.warn('gridstack.js: attribute `' + oldName + '`=' + oldAttr + ' is deprecated on this object in ' + rev + ' and has been replaced with `' +
//       newName + '`. It will be **removed** in a future release');
//   }
// }
/**
 * Collection of utility methods used throughout GridStack.
 * These are general-purpose helper functions for DOM manipulation,
 * positioning calculations, object operations, and more.
 */
class Utils {
    /**
     * Convert a potential selector into an actual list of HTML elements.
     * Supports CSS selectors, element references, and special ID handling.
     *
     * @param els selector string, HTMLElement, or array of elements
     * @param root optional root element to search within (defaults to document, useful for shadow DOM)
     * @returns array of HTML elements matching the selector
     *
     * @example
     * const elements = Utils.getElements('.grid-item');
     * const byId = Utils.getElements('#myWidget');
     * const fromShadow = Utils.getElements('.item', shadowRoot);
     */
    static getElements(els, root = document) {
        if (typeof els === 'string') {
            const doc = ('getElementById' in root) ? root : undefined;
            // Note: very common for people use to id='1,2,3' which is only legal as HTML5 id, but not CSS selectors
            // so if we start with a number, assume it's an id and just return that one item...
            // see https://github.com/gridstack/gridstack.js/issues/2234#issuecomment-1523796562
            if (doc && !isNaN(+els[0])) { // start with digit
                const el = doc.getElementById(els);
                return el ? [el] : [];
            }
            let list = root.querySelectorAll(els);
            if (!list.length && els[0] !== '.' && els[0] !== '#') {
                // see if mean to be a class
                list = root.querySelectorAll('.' + els);
                // else if mean to be an id
                if (!list.length)
                    list = root.querySelectorAll('#' + els);
                // else see if gs-id attribute
                if (!list.length) {
                    const el = root.querySelector(`[gs-id="${els}"]`);
                    return el ? [el] : [];
                }
            }
            return Array.from(list);
        }
        return [els];
    }
    /**
     * Convert a potential selector into a single HTML element.
     * Similar to getElements() but returns only the first match.
     *
     * @param els selector string or HTMLElement
     * @param root optional root element to search within (defaults to document)
     * @returns the first HTML element matching the selector, or null if not found
     *
     * @example
     * const element = Utils.getElement('#myWidget');
     * const first = Utils.getElement('.grid-item');
     */
    static getElement(els, root = document) {
        if (typeof els === 'string') {
            const doc = ('getElementById' in root) ? root : undefined;
            if (!els.length)
                return null;
            if (doc && els[0] === '#') {
                return doc.getElementById(els.substring(1));
            }
            if (els[0] === '#' || els[0] === '.' || els[0] === '[') {
                return root.querySelector(els);
            }
            // if we start with a digit, assume it's an id (error calling querySelector('#1')) as class are not valid CSS
            if (doc && !isNaN(+els[0])) { // start with digit
                return doc.getElementById(els);
            }
            // finally try string, then id, then class
            let el = root.querySelector(els);
            if (doc && !el) {
                el = doc.getElementById(els);
            }
            if (!el) {
                el = root.querySelector('.' + els);
            }
            return el;
        }
        return els;
    }
    /**
     * Check if a widget should be lazy loaded based on node or grid settings.
     *
     * @param n the grid node to check
     * @returns true if the item should be lazy loaded
     *
     * @example
     * if (Utils.lazyLoad(node)) {
     *   // Set up intersection observer for lazy loading
     * }
     */
    static lazyLoad(n) {
        return n.lazyLoad || n.grid?.opts?.lazyLoad && n.lazyLoad !== false;
    }
    /**
     * Create a div element with the specified CSS classes.
     *
     * @param classes array of CSS class names to add
     * @param parent optional parent element to append the div to
     * @returns the created div element
     *
     * @example
     * const div = Utils.createDiv(['grid-item', 'draggable']);
     * const nested = Utils.createDiv(['content'], parentDiv);
     */
    static createDiv(classes, parent) {
        const el = document.createElement('div');
        classes.forEach(c => { if (c)
            el.classList.add(c); });
        parent?.appendChild(el);
        return el;
    }
    /**
     * Check if a widget should resize to fit its content.
     *
     * @param n the grid node to check (can be undefined)
     * @param strict if true, only returns true for explicit sizeToContent:true (not numbers)
     * @returns true if the widget should resize to content
     *
     * @example
     * if (Utils.shouldSizeToContent(node)) {
     *   // Trigger content-based resizing
     * }
     */
    static shouldSizeToContent(n, strict = false) {
        return n?.grid && (strict ?
            (n.sizeToContent === true || (n.grid.opts.sizeToContent === true && n.sizeToContent === undefined)) :
            (!!n.sizeToContent || (n.grid.opts.sizeToContent && n.sizeToContent !== false)));
    }
    /**
     * Check if two grid positions overlap/intersect.
     *
     * @param a first position with x, y, w, h properties
     * @param b second position with x, y, w, h properties
     * @returns true if the positions overlap
     *
     * @example
     * const overlaps = Utils.isIntercepted(
     *   {x: 0, y: 0, w: 2, h: 1},
     *   {x: 1, y: 0, w: 2, h: 1}
     * ); // true - they overlap
     */
    static isIntercepted(a, b) {
        return !(a.y >= b.y + b.h || a.y + a.h <= b.y || a.x + a.w <= b.x || a.x >= b.x + b.w);
    }
    /**
     * Check if two grid positions are touching (edges or corners).
     *
     * @param a first position
     * @param b second position
     * @returns true if the positions are touching
     *
     * @example
     * const touching = Utils.isTouching(
     *   {x: 0, y: 0, w: 2, h: 1},
     *   {x: 2, y: 0, w: 1, h: 1}
     * ); // true - they share an edge
     */
    static isTouching(a, b) {
        return Utils.isIntercepted(a, { x: b.x - 0.5, y: b.y - 0.5, w: b.w + 1, h: b.h + 1 });
    }
    /**
     * Calculate the overlapping area between two grid positions.
     *
     * @param a first position
     * @param b second position
     * @returns the area of overlap (0 if no overlap)
     *
     * @example
     * const overlap = Utils.areaIntercept(
     *   {x: 0, y: 0, w: 3, h: 2},
     *   {x: 1, y: 0, w: 3, h: 2}
     * ); // returns 4 (2x2 overlap)
     */
    static areaIntercept(a, b) {
        const x0 = (a.x > b.x) ? a.x : b.x;
        const x1 = (a.x + a.w < b.x + b.w) ? a.x + a.w : b.x + b.w;
        if (x1 <= x0)
            return 0; // no overlap
        const y0 = (a.y > b.y) ? a.y : b.y;
        const y1 = (a.y + a.h < b.y + b.h) ? a.y + a.h : b.y + b.h;
        if (y1 <= y0)
            return 0; // no overlap
        return (x1 - x0) * (y1 - y0);
    }
    /**
     * Calculate the total area of a grid position.
     *
     * @param a position with width and height
     * @returns the total area (width * height)
     *
     * @example
     * const area = Utils.area({x: 0, y: 0, w: 3, h: 2}); // returns 6
     */
    static area(a) {
        return a.w * a.h;
    }
    /**
     * Sort an array of grid nodes by position (y first, then x).
     *
     * @param nodes array of nodes to sort
     * @param dir sort direction: 1 for ascending (top-left first), -1 for descending
     * @returns the sorted array (modifies original)
     *
     * @example
     * const sorted = Utils.sort(nodes); // Sort top-left to bottom-right
     * const reverse = Utils.sort(nodes, -1); // Sort bottom-right to top-left
     */
    static sort(nodes, dir = 1) {
        const und = 10000;
        return nodes.sort((a, b) => {
            const diffY = dir * ((a.y ?? und) - (b.y ?? und));
            if (diffY === 0)
                return dir * ((a.x ?? und) - (b.x ?? und));
            return diffY;
        });
    }
    /**
     * Find a grid node by its ID.
     *
     * @param nodes array of nodes to search
     * @param id the ID to search for
     * @returns the node with matching ID, or undefined if not found
     *
     * @example
     * const node = Utils.find(nodes, 'widget-1');
     * if (node) console.log('Found node at:', node.x, node.y);
     */
    static find(nodes, id) {
        return id ? nodes.find(n => n.id === id) : undefined;
    }
    /**
     * Convert various value types to boolean.
     * Handles strings like 'false', 'no', '0' as false.
     *
     * @param v value to convert
     * @returns boolean representation
     *
     * @example
     * Utils.toBool('true');  // true
     * Utils.toBool('false'); // false
     * Utils.toBool('no');    // false
     * Utils.toBool('1');     // true
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static toBool(v) {
        if (typeof v === 'boolean') {
            return v;
        }
        if (typeof v === 'string') {
            v = v.toLowerCase();
            return !(v === '' || v === 'no' || v === 'false' || v === '0');
        }
        return Boolean(v);
    }
    /**
     * Convert a string value to a number, handling null and empty strings.
     *
     * @param value string or null value to convert
     * @returns number value, or undefined for null/empty strings
     *
     * @example
     * Utils.toNumber('42');  // 42
     * Utils.toNumber('');    // undefined
     * Utils.toNumber(null);  // undefined
     */
    static toNumber(value) {
        return (value === null || value.length === 0) ? undefined : Number(value);
    }
    /**
     * Parse a height value with units into numeric value and unit string.
     * Supports px, em, rem, vh, vw, %, cm, mm units.
     *
     * @param val height value as number or string with units
     * @returns object with h (height) and unit properties
     *
     * @example
     * Utils.parseHeight('100px');  // {h: 100, unit: 'px'}
     * Utils.parseHeight('2rem');   // {h: 2, unit: 'rem'}
     * Utils.parseHeight(50);       // {h: 50, unit: 'px'}
     */
    static parseHeight(val) {
        let h;
        let unit = 'px';
        if (typeof val === 'string') {
            if (val === 'auto' || val === '')
                h = 0;
            else {
                const match = val.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
                if (!match) {
                    throw new Error(`Invalid height val = ${val}`);
                }
                unit = match[2] || 'px';
                h = parseFloat(match[1]);
            }
        }
        else {
            h = val;
        }
        return { h, unit };
    }
    /**
     * Copy unset fields from source objects to target object (shallow merge with defaults).
     * Similar to Object.assign but only sets undefined/null fields.
     *
     * @param target the object to copy defaults into
     * @param sources one or more source objects to copy defaults from
     * @returns the modified target object
     *
     * @example
     * const config = { width: 100 };
     * Utils.defaults(config, { width: 200, height: 50 });
     * // config is now { width: 100, height: 50 }
     */
    // eslint-disable-next-line
    static defaults(target, ...sources) {
        sources.forEach(source => {
            for (const key in source) {
                if (!source.hasOwnProperty(key))
                    return;
                if (target[key] === null || target[key] === undefined) {
                    target[key] = source[key];
                }
                else if (typeof source[key] === 'object' && typeof target[key] === 'object') {
                    // property is an object, recursively add it's field over... #1373
                    Utils.defaults(target[key], source[key]);
                }
            }
        });
        return target;
    }
    /**
     * Compare two objects for equality (shallow comparison).
     * Checks if objects have the same fields and values at one level deep.
     *
     * @param a first object to compare
     * @param b second object to compare
     * @returns true if objects have the same values
     *
     * @example
     * Utils.same({x: 1, y: 2}, {x: 1, y: 2}); // true
     * Utils.same({x: 1}, {x: 1, y: 2}); // false
     */
    static same(a, b) {
        if (typeof a !== 'object')
            return a == b;
        if (typeof a !== typeof b)
            return false;
        // else we have object, check just 1 level deep for being same things...
        if (Object.keys(a).length !== Object.keys(b).length)
            return false;
        for (const key in a) {
            if (a[key] !== b[key])
                return false;
        }
        return true;
    }
    /**
     * Copy position and size properties from one widget to another.
     * Copies x, y, w, h and optionally min/max constraints.
     *
     * @param a target widget to copy to
     * @param b source widget to copy from
     * @param doMinMax if true, also copy min/max width/height constraints
     * @returns the target widget (a)
     *
     * @example
     * Utils.copyPos(widget1, widget2); // Copy position/size
     * Utils.copyPos(widget1, widget2, true); // Also copy constraints
     */
    static copyPos(a, b, doMinMax = false) {
        if (b.x !== undefined)
            a.x = b.x;
        if (b.y !== undefined)
            a.y = b.y;
        if (b.w !== undefined)
            a.w = b.w;
        if (b.h !== undefined)
            a.h = b.h;
        if (doMinMax) {
            if (b.minW)
                a.minW = b.minW;
            if (b.minH)
                a.minH = b.minH;
            if (b.maxW)
                a.maxW = b.maxW;
            if (b.maxH)
                a.maxH = b.maxH;
        }
        return a;
    }
    /** true if a and b has same size & position */
    static samePos(a, b) {
        return a && b && a.x === b.x && a.y === b.y && (a.w || 1) === (b.w || 1) && (a.h || 1) === (b.h || 1);
    }
    /** given a node, makes sure it's min/max are valid */
    static sanitizeMinMax(node) {
        // remove 0, undefine, null
        if (!node.minW) {
            delete node.minW;
        }
        if (!node.minH) {
            delete node.minH;
        }
        if (!node.maxW) {
            delete node.maxW;
        }
        if (!node.maxH) {
            delete node.maxH;
        }
    }
    /** removes field from the first object if same as the second objects (like diffing) and internal '_' for saving */
    static removeInternalAndSame(a, b) {
        if (typeof a !== 'object' || typeof b !== 'object')
            return;
        // skip arrays as we don't know how to hydrate them (unlike object spread operator)
        if (Array.isArray(a) || Array.isArray(b))
            return;
        for (let key in a) {
            const aVal = a[key];
            const bVal = b[key];
            if (key[0] === '_' || aVal === bVal) {
                delete a[key];
            }
            else if (aVal && typeof aVal === 'object' && bVal !== undefined) {
                Utils.removeInternalAndSame(aVal, bVal);
                if (!Object.keys(aVal).length) {
                    delete a[key];
                }
            }
        }
    }
    /** removes internal fields '_' and default values for saving */
    static removeInternalForSave(n, removeEl = true) {
        for (let key in n) {
            if (key[0] === '_' || n[key] === null || n[key] === undefined)
                delete n[key];
        }
        delete n.grid;
        if (removeEl)
            delete n.el;
        // delete default values (will be re-created on read)
        if (!n.autoPosition)
            delete n.autoPosition;
        if (!n.noResize)
            delete n.noResize;
        if (!n.noMove)
            delete n.noMove;
        if (!n.locked)
            delete n.locked;
        if (n.w === 1 || n.w === n.minW)
            delete n.w;
        if (n.h === 1 || n.h === n.minH)
            delete n.h;
    }
    /** return the closest parent (or itself) matching the given class */
    // static closestUpByClass(el: HTMLElement, name: string): HTMLElement {
    //   while (el) {
    //     if (el.classList.contains(name)) return el;
    //     el = el.parentElement
    //   }
    //   return null;
    // }
    /** delay calling the given function for given delay, preventing new calls from happening while waiting */
    static throttle(func, delay) {
        let isWaiting = false;
        return (...args) => {
            if (!isWaiting) {
                isWaiting = true;
                setTimeout(() => { func(...args); isWaiting = false; }, delay);
            }
        };
    }
    static removePositioningStyles(el) {
        const style = el.style;
        if (style.position) {
            style.removeProperty('position');
        }
        if (style.left) {
            style.removeProperty('left');
        }
        if (style.top) {
            style.removeProperty('top');
        }
        if (style.width) {
            style.removeProperty('width');
        }
        if (style.height) {
            style.removeProperty('height');
        }
    }
    /** @internal returns the passed element if vertically scrollable, else the closest parent that will, up to the entire document scrolling element */
    static getScrollElement(el) {
        if (!el)
            return document.scrollingElement || document.documentElement; // IE support
        const overflowY = getComputedStyle(el).overflowY;
        if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
            return el;
        }
        else {
            return Utils.getScrollElement(el.parentElement);
        }
    }
    /**
     * @internal Function used to scroll the page.
     *
     * @param event `MouseEvent` that triggers the resize
     * @param el `HTMLElement` that's being resized
     * @param distance Distance from the V edges to start scrolling
     */
    static updateScrollResize(event, el, distance) {
        const scrollEl = Utils.getScrollElement(el);
        const height = scrollEl.clientHeight;
        // #1727 event.clientY is relative to viewport, so must compare this against position of scrollEl getBoundingClientRect().top
        // #1745 Special situation if scrollEl is document 'html': here browser spec states that
        // clientHeight is height of viewport, but getBoundingClientRect() is rectangle of html element;
        // this discrepancy arises because in reality scrollbar is attached to viewport, not html element itself.
        const offsetTop = (scrollEl === Utils.getScrollElement()) ? 0 : scrollEl.getBoundingClientRect().top;
        const pointerPosY = event.clientY - offsetTop;
        const top = pointerPosY < distance;
        const bottom = pointerPosY > height - distance;
        if (top) {
            // This also can be done with a timeout to keep scrolling while the mouse is
            // in the scrolling zone. (will have smoother behavior)
            scrollEl.scrollBy({ behavior: 'smooth', top: pointerPosY - distance });
        }
        else if (bottom) {
            scrollEl.scrollBy({ behavior: 'smooth', top: distance - (height - pointerPosY) });
        }
    }
    /** single level clone, returning a new object with same top fields. This will share sub objects and arrays */
    static clone(obj) {
        if (obj === null || obj === undefined || typeof (obj) !== 'object') {
            return obj;
        }
        // return Object.assign({}, obj);
        if (obj instanceof Array) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return [...obj];
        }
        return { ...obj };
    }
    /**
     * Recursive clone version that returns a full copy, checking for nested objects and arrays ONLY.
     * Note: this will use as-is any key starting with double __ (and not copy inside) some lib have circular dependencies.
     */
    static cloneDeep(obj) {
        // list of fields we will skip during cloneDeep (nested objects, other internal)
        const skipFields = ['parentGrid', 'el', 'grid', 'subGrid', 'engine'];
        // return JSON.parse(JSON.stringify(obj)); // doesn't work with date format ?
        const ret = Utils.clone(obj);
        for (const key in ret) {
            // NOTE: we don't support function/circular dependencies so skip those properties for now...
            if (ret.hasOwnProperty(key) && typeof (ret[key]) === 'object' && key.substring(0, 2) !== '__' && !skipFields.find(k => k === key)) {
                ret[key] = Utils.cloneDeep(obj[key]);
            }
        }
        return ret;
    }
    /** deep clone the given HTML node, removing teh unique id field */
    static cloneNode(el) {
        const node = el.cloneNode(true);
        node.removeAttribute('id');
        return node;
    }
    static appendTo(el, parent) {
        let parentNode;
        if (typeof parent === 'string') {
            parentNode = Utils.getElement(parent);
        }
        else {
            parentNode = parent;
        }
        if (parentNode) {
            parentNode.appendChild(el);
        }
    }
    // public static setPositionRelative(el: HTMLElement): void {
    //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
    //     el.style.position = "relative";
    //   }
    // }
    static addElStyles(el, styles) {
        if (styles instanceof Object) {
            for (const s in styles) {
                if (styles.hasOwnProperty(s)) {
                    if (Array.isArray(styles[s])) {
                        // support fallback value
                        styles[s].forEach(val => {
                            el.style[s] = val;
                        });
                    }
                    else {
                        el.style[s] = styles[s];
                    }
                }
            }
        }
    }
    static initEvent(e, info) {
        const evt = { type: info.type };
        const obj = {
            button: 0,
            which: 0,
            buttons: 1,
            bubbles: true,
            cancelable: true,
            target: info.target ? info.target : e.target
        };
        ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].forEach(p => evt[p] = e[p]); // keys
        ['pageX', 'pageY', 'clientX', 'clientY', 'screenX', 'screenY'].forEach(p => evt[p] = e[p]); // point info
        return { ...evt, ...obj };
    }
    /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
    static simulateMouseEvent(e, simulatedType, target) {
        const me = e;
        const simulatedEvent = new MouseEvent(simulatedType, {
            bubbles: true,
            composed: true,
            cancelable: true,
            view: window,
            detail: 1,
            screenX: e.screenX,
            screenY: e.screenY,
            clientX: e.clientX,
            clientY: e.clientY,
            ctrlKey: me.ctrlKey ?? false,
            altKey: me.altKey ?? false,
            shiftKey: me.shiftKey ?? false,
            metaKey: me.metaKey ?? false,
            button: 0,
            relatedTarget: e.target
        });
        (target || e.target).dispatchEvent(simulatedEvent);
    }
    /**
     * defines an element that is used to get the offset and scale from grid transforms
     * returns the scale and offsets from said element
    */
    static getValuesFromTransformedElement(parent) {
        const transformReference = document.createElement('div');
        Utils.addElStyles(transformReference, {
            opacity: '0',
            position: 'fixed',
            top: 0 + 'px',
            left: 0 + 'px',
            width: '1px',
            height: '1px',
            zIndex: '-999999',
        });
        parent.appendChild(transformReference);
        const transformValues = transformReference.getBoundingClientRect();
        parent.removeChild(transformReference);
        transformReference.remove();
        return {
            xScale: 1 / transformValues.width,
            yScale: 1 / transformValues.height,
            xOffset: transformValues.left,
            yOffset: transformValues.top,
        };
    }
    /** swap the given object 2 field values */
    static swap(o, a, b) {
        if (!o)
            return;
        const tmp = o[a];
        o[a] = o[b];
        o[b] = tmp;
    }
    /** returns true if event is inside the given element rectangle */
    // Note: Safari Mac has null event.relatedTarget which causes #1684 so check if DragEvent is inside the coordinates instead
    //    Utils.el.contains(event.relatedTarget as HTMLElement)
    // public static inside(e: MouseEvent, el: HTMLElement): boolean {
    //   // srcElement, toElement, target: all set to placeholder when leaving simple grid, so we can't use that (Chrome)
    //   const target: HTMLElement = e.relatedTarget || (e as any).fromElement;
    //   if (!target) {
    //     const { bottom, left, right, top } = el.getBoundingClientRect();
    //     return (e.x < right && e.x > left && e.y < bottom && e.y > top);
    //   }
    //   return el.contains(target);
    // }
    /** true if the item can be rotated (checking for prop, not space available) */
    static canBeRotated(n) {
        return !(!n || n.w === n.h || n.locked || n.noResize || n.grid?.opts.disableResize || (n.minW && n.minW === n.maxW) || (n.minH && n.minH === n.maxH));
    }
}
//# sourceMappingURL=utils.js.map

/***/ },

/***/ 1275
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gridstack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1262);
/**
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2026 Teclib' and contributors.
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

// Gridstack lib

window.GridStack = gridstack__WEBPACK_IMPORTED_MODULE_0__.GridStack;
__webpack_require__(1275);

})();

/******/ })()
;
//# sourceMappingURL=gridstack.js.map