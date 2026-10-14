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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[37],{

/***/ 312
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(313);





var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/daygrid',
    initialView: 'dayGridMonth',
    views: {
        dayGrid: {
            component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayGridView,
            dateProfileGeneratorClass: _internal_js__WEBPACK_IMPORTED_MODULE_1__.TableDateProfileGenerator,
        },
        dayGridDay: {
            type: 'dayGrid',
            duration: { days: 1 },
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: { weeks: 1 },
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 1 },
            fixedWeekCount: true,
        },
        dayGridYear: {
            type: 'dayGrid',
            duration: { years: 1 },
        },
    },
});




/***/ },

/***/ 313
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayGridView: () => (/* binding */ DayTableView),
/* harmony export */   DayTable: () => (/* binding */ DayTable),
/* harmony export */   DayTableSlicer: () => (/* binding */ DayTableSlicer),
/* harmony export */   Table: () => (/* binding */ Table),
/* harmony export */   TableDateProfileGenerator: () => (/* binding */ TableDateProfileGenerator),
/* harmony export */   TableRows: () => (/* binding */ TableRows),
/* harmony export */   TableView: () => (/* binding */ TableView),
/* harmony export */   buildDayTableModel: () => (/* binding */ buildDayTableModel),
/* harmony export */   buildDayTableRenderRange: () => (/* binding */ buildDayTableRenderRange)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);



/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
class TableView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    }
    renderSimpleLayout(headerRowContent, bodyContent) {
        let { props, context } = this;
        let sections = [];
        let stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca)(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunk: { content: bodyContent },
        });
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, { elClasses: ['fc-daygrid'], viewSpec: context.viewSpec },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [] /* TODO: make optional? */, sections: sections })));
    }
    renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
        let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        let { props, context } = this;
        let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca)(context.options);
        let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c9)(context.options);
        let sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunks: [{
                        key: 'main',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    }],
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunks: [{
                    key: 'main',
                    content: bodyContent,
                }],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                type: 'footer',
                key: 'footer',
                isSticky: true,
                chunks: [{
                        key: 'main',
                        content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c8,
                    }],
            });
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, { elClasses: ['fc-daygrid'], viewSpec: context.viewSpec },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, forPrint: props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections: sections })));
    }
}

function splitSegsByRow(segs, rowCnt) {
    let byRow = [];
    for (let i = 0; i < rowCnt; i += 1) {
        byRow[i] = [];
    }
    for (let seg of segs) {
        byRow[seg.row].push(seg);
    }
    return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
    let byCol = [];
    for (let i = 0; i < colCnt; i += 1) {
        byCol[i] = [];
    }
    for (let seg of segs) {
        byCol[seg.firstCol].push(seg);
    }
    return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
    let byRow = [];
    if (!ui) {
        for (let i = 0; i < rowCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (let i = 0; i < rowCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (let seg of ui.segs) {
            byRow[seg.row].segs.push(seg);
        }
    }
    return byRow;
}

const DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'narrow',
});
function hasListItemDisplay(seg) {
    let { display } = seg.eventRange.ui;
    return display === 'list-item' || (display === 'auto' &&
        !seg.eventRange.def.allDay &&
        seg.firstCol === seg.lastCol && // can't be multi-day
        seg.isStart && // "
        seg.isEnd // "
    );
}

class TableBlockEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cg, Object.assign({}, props, { elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay })));
    }
}

class TableListItemEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props, context } = this;
        let { options } = context;
        let { seg } = props;
        let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
        let timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO)(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck, Object.assign({}, props, { elTag: "a", elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'], elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(props.seg, context), defaultGenerator: renderInnerContent, timeText: timeText, isResizing: false, isDateSelecting: false })));
    }
}
function renderInnerContent(renderProps) {
    return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-event-dot", style: { borderColor: renderProps.borderColor || renderProps.backgroundColor } }),
        renderProps.timeText && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-time" }, renderProps.timeText)),
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-title" }, renderProps.event.title || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0"))));
}

class TableCellMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.compileSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(compileSegs);
    }
    render() {
        let { props } = this;
        let { allSegs, invisibleSegs } = this.compileSegs(props.singlePlacements);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.co, { elClasses: ['fc-daygrid-more-link'], dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs: allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: () => {
                let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                    (props.eventResize ? props.eventResize.affectedInstances : null) ||
                    {};
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, allSegs.map((seg) => {
                    let instanceId = seg.eventRange.instance.instanceId;
                    return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
                            visibility: isForcedInvisible[instanceId] ? 'hidden' : '',
                        } }, hasListItemDisplay(seg) ? ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, Object.assign({ seg: seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, props.todayRange)))) : ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, Object.assign({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, props.todayRange))))));
                })));
            } }));
    }
}
function compileSegs(singlePlacements) {
    let allSegs = [];
    let invisibleSegs = [];
    for (let placement of singlePlacements) {
        allSegs.push(placement.seg);
        if (!placement.isVisible) {
            invisibleSegs.push(placement.seg);
        }
    }
    return { allSegs, invisibleSegs };
}

const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({ week: 'narrow' });
class TableCell extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.state = {
            dayNumberId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a3)(),
        };
        this.handleRootEl = (el) => {
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.W)(this.rootElRef, el);
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.W)(this.props.elRef, el);
        };
    }
    render() {
        let { context, props, state, rootElRef } = this;
        let { options, dateEnv } = context;
        let { date, dateProfile } = props;
        // TODO: memoize this?
        const isMonthStart = props.showDayNumber &&
            shouldDisplayMonthStart(date, dateProfile.currentRange, dateEnv);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ci, { elTag: "td", elRef: this.handleRootEl, elClasses: [
                'fc-daygrid-day',
                ...(props.extraClassNames || []),
            ], elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), (props.showDayNumber ? { 'aria-labelledby': state.dayNumberId } : {})), { role: 'gridcell' }), defaultGenerator: renderTopInner, date: date, dateProfile: dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, isMonthStart: isMonthStart, extraRenderProps: props.extraRenderProps }, (InnerContent, renderProps) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: props.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: props.minHeight } },
            props.showWeekNumber && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cn, { elTag: "a", elClasses: ['fc-daygrid-week-number'], elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(context, date, 'week'), date: date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT })),
            !renderProps.isDisabled &&
                (props.showDayNumber || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cj)(options) || props.forceDayTop) ? ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-top" },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "a", elClasses: [
                        'fc-daygrid-day-number',
                        isMonthStart && 'fc-daygrid-month-start',
                    ], elAttrs: Object.assign(Object.assign({}, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(context, date)), { id: state.dayNumberId }) }))) : props.showDayNumber ? (
            // for creating correct amount of space (see issue #7162)
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-top", style: { visibility: 'hidden' } },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", { className: "fc-daygrid-day-number" }, "\u00A0"))) : undefined,
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
                props.fgContent,
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange }))),
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-bg" }, props.bgContent)))));
    }
}
function renderTopInner(props) {
    return props.dayNumberText || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0");
}
function shouldDisplayMonthStart(date, currentRange, dateEnv) {
    const { start: currentStart, end: currentEnd } = currentRange;
    const currentEndIncl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be)(currentEnd, -1);
    const currentFirstYear = dateEnv.getYear(currentStart);
    const currentFirstMonth = dateEnv.getMonth(currentStart);
    const currentLastYear = dateEnv.getYear(currentEndIncl);
    const currentLastMonth = dateEnv.getMonth(currentEndIncl);
    // spans more than one month?
    return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) &&
        Boolean(
        // first date in current view?
        date.valueOf() === currentStart.valueOf() ||
            // a month-start that's within the current range?
            (dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf()));
}

function generateSegKey(seg) {
    return seg.eventRange.instance.instanceId + ':' + seg.firstCol;
}
function generateSegUid(seg) {
    return generateSegKey(seg) + ':' + seg.lastCol;
}
function computeFgSegPlacement(segs, // assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, segHeights, maxContentHeight, cells) {
    let hierarchy = new DayGridSegHierarchy((segEntry) => {
        // TODO: more DRY with generateSegUid
        let segUid = segs[segEntry.index].eventRange.instance.instanceId +
            ':' + segEntry.span.start +
            ':' + (segEntry.span.end - 1);
        // if no thickness known, assume 1 (if 0, so small it always fits)
        return segHeights[segUid] || 1;
    });
    hierarchy.allowReslicing = true;
    hierarchy.strictOrder = strictOrder;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
        hierarchy.maxCoord = maxContentHeight;
        hierarchy.hiddenConsumes = true;
    }
    else if (typeof dayMaxEvents === 'number') {
        hierarchy.maxStackCnt = dayMaxEvents;
    }
    else if (typeof dayMaxEventRows === 'number') {
        hierarchy.maxStackCnt = dayMaxEventRows;
        hierarchy.hiddenConsumes = true;
    }
    // create segInputs only for segs with known heights
    let segInputs = [];
    let unknownHeightSegs = [];
    for (let i = 0; i < segs.length; i += 1) {
        let seg = segs[i];
        let segUid = generateSegUid(seg);
        let eventHeight = segHeights[segUid];
        if (eventHeight != null) {
            segInputs.push({
                index: i,
                span: {
                    start: seg.firstCol,
                    end: seg.lastCol + 1,
                },
            });
        }
        else {
            unknownHeightSegs.push(seg);
        }
    }
    let hiddenEntries = hierarchy.addSegs(segInputs);
    let segRects = hierarchy.toRects();
    let { singleColPlacements, multiColPlacements, leftoverMargins } = placeRects(segRects, segs, cells);
    let moreCnts = [];
    let moreMarginTops = [];
    // add segs with unknown heights
    for (let seg of unknownHeightSegs) {
        multiColPlacements[seg.firstCol].push({
            seg,
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // add the hidden entries
    for (let col = 0; col < cells.length; col += 1) {
        moreCnts.push(0);
    }
    for (let hiddenEntry of hiddenEntries) {
        let seg = segs[hiddenEntry.index];
        let hiddenSpan = hiddenEntry.span;
        multiColPlacements[hiddenSpan.start].push({
            seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
            moreCnts[col] += 1;
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // deal with leftover margins
    for (let col = 0; col < cells.length; col += 1) {
        moreMarginTops.push(leftoverMargins[col]);
    }
    return { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
    let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
    let singleColPlacements = [];
    let multiColPlacements = [];
    let leftoverMargins = [];
    for (let col = 0; col < cells.length; col += 1) {
        let rects = rectsByEachCol[col];
        // compute all static segs in singlePlacements
        let singlePlacements = [];
        let currentHeight = 0;
        let currentMarginTop = 0;
        for (let rect of rects) {
            let seg = segs[rect.index];
            singlePlacements.push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: true,
                isAbsolute: false,
                absoluteTop: rect.levelCoord,
                marginTop: rect.levelCoord - currentHeight,
            });
            currentHeight = rect.levelCoord + rect.thickness;
        }
        // compute mixed static/absolute segs in multiPlacements
        let multiPlacements = [];
        currentHeight = 0;
        currentMarginTop = 0;
        for (let rect of rects) {
            let seg = segs[rect.index];
            let isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
            let isFirstCol = rect.span.start === col;
            currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
            currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
            if (isAbsolute) {
                currentMarginTop += rect.thickness;
                if (isFirstCol) {
                    multiPlacements.push({
                        seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                        isVisible: true,
                        isAbsolute: true,
                        absoluteTop: rect.levelCoord,
                        marginTop: 0,
                    });
                }
            }
            else if (isFirstCol) {
                multiPlacements.push({
                    seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                    isVisible: true,
                    isAbsolute: false,
                    absoluteTop: rect.levelCoord,
                    marginTop: currentMarginTop, // claim the margin
                });
                currentMarginTop = 0;
            }
        }
        singleColPlacements.push(singlePlacements);
        multiColPlacements.push(multiPlacements);
        leftoverMargins.push(currentMarginTop);
    }
    return { singleColPlacements, multiColPlacements, leftoverMargins };
}
function groupRectsByEachCol(rects, colCnt) {
    let rectsByEachCol = [];
    for (let col = 0; col < colCnt; col += 1) {
        rectsByEachCol.push([]);
    }
    for (let rect of rects) {
        for (let col = rect.span.start; col < rect.span.end; col += 1) {
            rectsByEachCol[col].push(rect);
        }
    }
    return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
    if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
        return seg;
    }
    let eventRange = seg.eventRange;
    let origRange = eventRange.range;
    let slicedRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(origRange, {
        start: cells[spanStart].date,
        end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(cells[spanEnd - 1].date, 1),
    });
    return Object.assign(Object.assign({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
            def: eventRange.def,
            ui: Object.assign(Object.assign({}, eventRange.ui), { durationEditable: false }),
            instance: eventRange.instance,
            range: slicedRange,
        }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
}
class DayGridSegHierarchy extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.by {
    constructor() {
        super(...arguments);
        // config
        this.hiddenConsumes = false;
        // allows us to keep hidden entries in the hierarchy so they take up space
        this.forceHidden = {};
    }
    addSegs(segInputs) {
        const hiddenSegs = super.addSegs(segInputs);
        const { entriesByLevel } = this;
        const excludeHidden = (entry) => !this.forceHidden[(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bz)(entry)];
        // remove the forced-hidden segs
        for (let level = 0; level < entriesByLevel.length; level += 1) {
            entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
        }
        return hiddenSegs;
    }
    handleInvalidInsertion(insertion, entry, hiddenEntries) {
        const { entriesByLevel, forceHidden } = this;
        const { touchingEntry, touchingLevel, touchingLateral } = insertion;
        // the entry that the new insertion is touching must be hidden
        if (this.hiddenConsumes && touchingEntry) {
            const touchingEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bz)(touchingEntry);
            if (!forceHidden[touchingEntryId]) {
                if (this.allowReslicing) {
                    // split up the touchingEntry, reinsert it
                    const hiddenEntry = Object.assign(Object.assign({}, touchingEntry), { span: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bD)(touchingEntry.span, entry.span) });
                    // reinsert the area that turned into a "more" link (so no other entries try to
                    // occupy the space) but mark it forced-hidden
                    const hiddenEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bz)(hiddenEntry);
                    forceHidden[hiddenEntryId] = true;
                    entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
                    hiddenEntries.push(hiddenEntry);
                    this.splitEntry(touchingEntry, entry, hiddenEntries);
                }
                else {
                    forceHidden[touchingEntryId] = true;
                    hiddenEntries.push(touchingEntry);
                }
            }
        }
        // will try to reslice...
        super.handleInvalidInsertion(insertion, entry, hiddenEntries);
    }
}

class TableRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd(); // the <td>
        this.frameElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd(); // the fc-daygrid-day-frame
        this.fgElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd(); // the fc-daygrid-day-events
        this.segHarnessRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd(); // indexed by "instanceId:firstCol"
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.state = {
            framePositions: null,
            maxContentHeight: null,
            segHeights: {},
        };
        this.handleResize = (isForced) => {
            if (isForced) {
                this.updateSizing(true); // isExternal=true
            }
        };
    }
    render() {
        let { props, state, context } = this;
        let { options } = context;
        let colCnt = props.cells.length;
        let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
        let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
        let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
        let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
        let { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops } = computeFgSegPlacement((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bP)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.segHeights, state.maxContentHeight, props.cells);
        let isForcedInvisible = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: this.rootElRef, role: "row" },
            props.renderIntro && props.renderIntro(),
            props.cells.map((cell, col) => {
                let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
                let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCell, { key: cell.key, elRef: this.cellElRefs.createRef(cell.key), innerElRef: this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */, dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: this.fgElRefs.createRef(cell.key), fgContent: ( // Fragment scopes the keys
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, normalFgNodes),
                        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, mirrorFgNodes))), bgContent: ( // Fragment scopes the keys
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                        this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                        this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                        this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))), minHeight: props.cellMinHeight }));
            })));
    }
    componentDidMount() {
        this.updateSizing(true);
        this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(prevProps, prevState) {
        let currentProps = this.props;
        this.updateSizing(!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E)(prevProps, currentProps));
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize);
    }
    getHighlightSegs() {
        let { props } = this;
        if (props.eventDrag && props.eventDrag.segs.length) { // messy check
            return props.eventDrag.segs;
        }
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return props.dateSelectionSegs;
    }
    getMirrorSegs() {
        let { props } = this;
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return [];
    }
    renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
        let { context } = this;
        let { eventSelection } = this.props;
        let { framePositions } = this.state;
        let defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
        let isMirror = isDragging || isResizing || isDateSelecting;
        let nodes = [];
        if (framePositions) {
            for (let placement of segPlacements) {
                let { seg } = placement;
                let { instanceId } = seg.eventRange.instance;
                let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
                let isAbsolute = placement.isAbsolute;
                let left = '';
                let right = '';
                if (isAbsolute) {
                    if (context.isRtl) {
                        right = 0;
                        left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
                    }
                    else {
                        left = 0;
                        right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
                    }
                }
                /*
                known bug: events that are force to be list-item but span multiple days still take up space in later columns
                todo: in print view, for multi-day events, don't display title within non-start/end segs
                */
                nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''), key: generateSegKey(seg), ref: isMirror ? null : this.segHarnessRefs.createRef(generateSegUid(seg)), style: {
                        visibility: isVisible ? '' : 'hidden',
                        marginTop: isAbsolute ? '' : placement.marginTop,
                        top: isAbsolute ? placement.absoluteTop : '',
                        left,
                        right,
                    } }, hasListItemDisplay(seg) ? ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, Object.assign({ seg: seg, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, todayRange)))) : ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, Object.assign({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, todayRange))))));
            }
        }
        return nodes;
    }
    renderFillSegs(segs, fillType) {
        let { isRtl } = this.context;
        let { todayRange } = this.props;
        let { framePositions } = this.state;
        let nodes = [];
        if (framePositions) {
            for (let seg of segs) {
                let leftRightCss = isRtl ? {
                    right: 0,
                    left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol],
                } : {
                    left: 0,
                    right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol],
                };
                nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR)(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === 'bg-event' ?
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cm, Object.assign({ seg: seg }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, todayRange))) :
                    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cl)(fillType)));
            }
        }
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, ...nodes);
    }
    updateSizing(isExternalSizingChange) {
        let { props, state, frameElRefs } = this;
        if (!props.forPrint &&
            props.clientWidth !== null // positioning ready?
        ) {
            if (isExternalSizingChange) {
                let frameEls = props.cells.map((cell) => frameElRefs.currentMap[cell.key]);
                if (frameEls.length) {
                    let originEl = this.rootElRef.current;
                    let newPositionCache = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(originEl, frameEls, true, // isHorizontal
                    false);
                    if (!state.framePositions || !state.framePositions.similarTo(newPositionCache)) {
                        this.setState({
                            framePositions: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(originEl, frameEls, true, // isHorizontal
                            false),
                        });
                    }
                }
            }
            const oldSegHeights = this.state.segHeights;
            const newSegHeights = this.querySegHeights();
            const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
            this.safeSetState({
                // HACK to prevent oscillations of events being shown/hidden from max-event-rows
                // Essentially, once you compute an element's height, never null-out.
                // TODO: always display all events, as visibility:hidden?
                segHeights: Object.assign(Object.assign({}, oldSegHeights), newSegHeights),
                maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null,
            });
        }
    }
    querySegHeights() {
        let segElMap = this.segHarnessRefs.currentMap;
        let segHeights = {};
        // get the max height amongst instance segs
        for (let segUid in segElMap) {
            let height = Math.round(segElMap[segUid].getBoundingClientRect().height);
            segHeights[segUid] = Math.max(segHeights[segUid] || 0, height);
        }
        return segHeights;
    }
    computeMaxContentHeight() {
        let firstKey = this.props.cells[0].key;
        let cellEl = this.cellElRefs.currentMap[firstKey];
        let fcContainerEl = this.fgElRefs.currentMap[firstKey];
        return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
    }
    getCellEls() {
        let elMap = this.cellElRefs.currentMap;
        return this.props.cells.map((cell) => elMap[cell.key]);
    }
}
TableRow.addStateEquality({
    segHeights: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E,
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
    if (!mirrorSegs.length) {
        return [];
    }
    let topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
    return mirrorSegs.map((seg) => ({
        seg,
        isVisible: true,
        isAbsolute: true,
        absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
        marginTop: 0,
    }));
}
function buildAbsoluteTopHash(colPlacements) {
    let topsByInstanceId = {};
    for (let placements of colPlacements) {
        for (let placement of placements) {
            topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
        }
    }
    return topsByInstanceId;
}

class TableRows extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
        this.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitAllDaySegsByRow);
        this.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
        this.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
        this.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByRow);
        this.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByRow);
        this.rowRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd();
    }
    render() {
        let { props, context } = this;
        let rowCnt = props.cells.length;
        let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
        let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
        let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
        let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
        let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
        let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
        // for DayGrid view with many rows, force a min-height on cells so doesn't appear squished
        // choose 7 because a month view will have max 6 rows
        let cellMinHeight = (rowCnt >= 7 && props.clientWidth) ?
            props.clientWidth / context.options.aspectRatio / 6 :
            null;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a6, { unit: "day" }, (nowDate, todayRange) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.cells.map((cells, row) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRow, { ref: this.rowRefs.createRef(row), key: cells.length
                ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */
                : row // in case there are no cells (like when resource view is loading)
            , showDayNumbers: rowCnt > 1, showWeekNumbers: props.showWeekNumbers, todayRange: todayRange, dateProfile: props.dateProfile, cells: cells, renderIntro: props.renderRowIntro, businessHourSegs: businessHourSegsByRow[row], eventSelection: props.eventSelection, bgEventSegs: bgEventSegsByRow[row], fgEventSegs: fgEventSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, clientWidth: props.clientWidth, clientHeight: props.clientHeight, cellMinHeight: cellMinHeight, forPrint: props.forPrint })))))));
    }
    componentDidMount() {
        this.registerInteractiveComponent();
    }
    componentDidUpdate() {
        // for if started with zero cells
        this.registerInteractiveComponent();
    }
    registerInteractiveComponent() {
        if (!this.rootEl) {
            // HACK: need a daygrid wrapper parent to do positioning
            // NOTE: a daygrid resource view w/o resources can have zero cells
            const firstCellEl = this.rowRefs.currentMap[0].getCellEls()[0];
            const rootEl = firstCellEl ? firstCellEl.closest('.fc-daygrid-body') : null;
            if (rootEl) {
                this.rootEl = rootEl;
                this.context.registerInteractiveComponent(this, {
                    el: rootEl,
                    isHitComboAllowed: this.props.isHitComboAllowed,
                });
            }
        }
    }
    componentWillUnmount() {
        if (this.rootEl) {
            this.context.unregisterInteractiveComponent(this);
            this.rootEl = null;
        }
    }
    // Hit System
    // ----------------------------------------------------------------------------------------------------
    prepareHits() {
        this.rowPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(this.rootEl, this.rowRefs.collect().map((rowObj) => rowObj.getCellEls()[0]), // first cell el in each row. TODO: not optimal
        false, true);
        this.colPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
        true, // horizontal
        false);
    }
    queryHit(positionLeft, positionTop) {
        let { colPositions, rowPositions } = this;
        let col = colPositions.leftToIndex(positionLeft);
        let row = rowPositions.topToIndex(positionTop);
        if (row != null && col != null) {
            let cell = this.props.cells[row][col];
            return {
                dateProfile: this.props.dateProfile,
                dateSpan: Object.assign({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
                dayEl: this.getCellEl(row, col),
                rect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row],
                },
                layer: 0,
            };
        }
        return null;
    }
    getCellEl(row, col) {
        return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
    }
    getCellRange(row, col) {
        let start = this.props.cells[row][col].date;
        let end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(start, 1);
        return { start, end };
    }
}
function splitAllDaySegsByRow(segs, rowCnt) {
    return splitSegsByRow(segs.filter(isSegAllDay), rowCnt);
}
function isSegAllDay(seg) {
    return seg.eventRange.def.allDay;
}

class Table extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.elRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.needsScrollReset = false;
    }
    render() {
        let { props } = this;
        let { dayMaxEventRows, dayMaxEvents, expandRows } = props;
        let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
        // if rows can't expand to fill fixed height, can't do balanced-height event limit
        // TODO: best place to normalize these options?
        if (limitViaBalanced && !expandRows) {
            limitViaBalanced = false;
            dayMaxEventRows = null;
            dayMaxEvents = null;
        }
        let classNames = [
            'fc-daygrid-body',
            limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
            expandRows ? '' : 'fc-daygrid-body-natural', // will height of one row depend on the others?
        ];
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: this.elRef, className: classNames.join(' '), style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
                    width: props.clientWidth,
                    minWidth: props.tableMinWidth,
                    height: expandRows ? props.clientHeight : '',
                } },
                props.colGroupNode,
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", { role: "presentation" },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRows, { dateProfile: props.dateProfile, cells: props.cells, renderRowIntro: props.renderRowIntro, showWeekNumbers: props.showWeekNumbers, clientWidth: props.clientWidth, clientHeight: props.clientHeight, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed })))));
    }
    componentDidMount() {
        this.requestScrollReset();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.dateProfile !== this.props.dateProfile) {
            this.requestScrollReset();
        }
        else {
            this.flushScrollReset();
        }
    }
    requestScrollReset() {
        this.needsScrollReset = true;
        this.flushScrollReset();
    }
    flushScrollReset() {
        if (this.needsScrollReset &&
            this.props.clientWidth // sizes computed?
        ) {
            const subjectEl = getScrollSubjectEl(this.elRef.current, this.props.dateProfile);
            if (subjectEl) {
                const originEl = subjectEl.closest('.fc-daygrid-body');
                const scrollEl = originEl.closest('.fc-scroller');
                const scrollTop = subjectEl.getBoundingClientRect().top -
                    originEl.getBoundingClientRect().top;
                scrollEl.scrollTop = scrollTop ? (scrollTop + 1) : 0; // overcome border
            }
            this.needsScrollReset = false;
        }
    }
}
function getScrollSubjectEl(containerEl, dateProfile) {
    let el;
    if (dateProfile.currentRangeUnit.match(/year|month/)) {
        el = containerEl.querySelector(`[data-date="${(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dateProfile.currentDate)}-01"]`);
        // even if view is month-based, first-of-month might be hidden...
    }
    if (!el) {
        el = containerEl.querySelector(`[data-date="${(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(dateProfile.currentDate)}"]`);
        // could still be hidden if an interior-view hidden day
    }
    return el;
}

class DayTableSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bU {
    constructor() {
        super(...arguments);
        this.forceDayIfListItem = true;
    }
    sliceRange(dateRange, dayTableModel) {
        return dayTableModel.sliceRange(dateRange);
    }
}

class DayTable extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.slicer = new DayTableSlicer();
        this.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    }
    render() {
        let { props, context } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Table, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })));
    }
}

class DayTableView extends TableView {
    constructor() {
        super(...arguments);
        this.buildDayTableModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDayTableModel);
        this.headerRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        // can't override any lifecycle methods from parent
    }
    render() {
        let { options, dateProfileGenerator } = this.context;
        let { props } = this;
        let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
        let headerContent = options.dayHeaders && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 }));
        let bodyContent = (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTable, { ref: this.tableRef, dateProfile: props.dateProfile, dayTableModel: dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }));
        return options.dayMinWidth
            ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth)
            : this.renderSimpleLayout(headerContent, bodyContent);
    }
}
function buildDayTableModel(dateProfile, dateProfileGenerator) {
    let daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bM(dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bT(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

class TableDateProfileGenerator extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.R {
    // Computes the date range that will be rendered
    buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
        let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
        let { props } = this;
        return buildDayTableRenderRange({
            currentRange: renderRange,
            snapToWeek: /^(year|month)$/.test(currentRangeUnit),
            fixedWeekCount: props.fixedWeekCount,
            dateEnv: props.dateEnv,
        });
    }
}
function buildDayTableRenderRange(props) {
    let { dateEnv, currentRange } = props;
    let { start, end } = currentRange;
    let endOfWeek;
    // year and month views should be aligned with weeks. this is already done for week
    if (props.snapToWeek) {
        start = dateEnv.startOfWeek(start);
        // make end-of-week if not already
        endOfWeek = dateEnv.startOfWeek(end);
        if (endOfWeek.valueOf() !== end.valueOf()) {
            end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bf)(endOfWeek, 1);
        }
    }
    // ensure 6 weeks
    if (props.fixedWeekCount) {
        // TODO: instead of these date-math gymnastics (for multimonth view),
        // compute dateprofiles of all months, then use start of first and end of last.
        let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(currentRange.end, -1)));
        let rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bg)(lastMonthRenderStart, end));
        end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bf)(end, 6 - rowCnt);
    }
    return { start, end };
}

var css_248z = ":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct)(css_248z);




/***/ },

/***/ 314
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draggable: () => (/* binding */ ExternalDraggable),
/* harmony export */   ThirdPartyDraggable: () => (/* binding */ ThirdPartyDraggable),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);



_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bG.touchMouseIgnoreWait = 500;
let ignoreMouseDepth = 0;
let listenerCnt = 0;
let isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/
class PointerDragging {
    constructor(containerEl) {
        this.subjectEl = null;
        // options that can be directly assigned by caller
        this.selector = ''; // will cause subjectEl in all emitted events to be this element
        this.handleSelector = '';
        this.shouldIgnoreMove = false;
        this.shouldWatchScroll = true; // for simulating pointermove on scroll
        // internal states
        this.isDragging = false;
        this.isTouchDragging = false;
        this.wasTouchScroll = false;
        // Mouse
        // ----------------------------------------------------------------------------------------------------
        this.handleMouseDown = (ev) => {
            if (!this.shouldIgnoreMouse() &&
                isPrimaryMouseButton(ev) &&
                this.tryStart(ev)) {
                let pev = this.createEventFromMouse(ev, true);
                this.emitter.trigger('pointerdown', pev);
                this.initScrollWatch(pev);
                if (!this.shouldIgnoreMove) {
                    document.addEventListener('mousemove', this.handleMouseMove);
                }
                document.addEventListener('mouseup', this.handleMouseUp);
            }
        };
        this.handleMouseMove = (ev) => {
            let pev = this.createEventFromMouse(ev);
            this.recordCoords(pev);
            this.emitter.trigger('pointermove', pev);
        };
        this.handleMouseUp = (ev) => {
            document.removeEventListener('mousemove', this.handleMouseMove);
            document.removeEventListener('mouseup', this.handleMouseUp);
            this.emitter.trigger('pointerup', this.createEventFromMouse(ev));
            this.cleanup(); // call last so that pointerup has access to props
        };
        // Touch
        // ----------------------------------------------------------------------------------------------------
        this.handleTouchStart = (ev) => {
            if (this.tryStart(ev)) {
                this.isTouchDragging = true;
                let pev = this.createEventFromTouch(ev, true);
                this.emitter.trigger('pointerdown', pev);
                this.initScrollWatch(pev);
                // unlike mouse, need to attach to target, not document
                // https://stackoverflow.com/a/45760014
                let targetEl = ev.target;
                if (!this.shouldIgnoreMove) {
                    targetEl.addEventListener('touchmove', this.handleTouchMove);
                }
                targetEl.addEventListener('touchend', this.handleTouchEnd);
                targetEl.addEventListener('touchcancel', this.handleTouchEnd); // treat it as a touch end
                // attach a handler to get called when ANY scroll action happens on the page.
                // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
                // http://stackoverflow.com/a/32954565/96342
                window.addEventListener('scroll', this.handleTouchScroll, true);
            }
        };
        this.handleTouchMove = (ev) => {
            let pev = this.createEventFromTouch(ev);
            this.recordCoords(pev);
            this.emitter.trigger('pointermove', pev);
        };
        this.handleTouchEnd = (ev) => {
            if (this.isDragging) { // done to guard against touchend followed by touchcancel
                let targetEl = ev.target;
                targetEl.removeEventListener('touchmove', this.handleTouchMove);
                targetEl.removeEventListener('touchend', this.handleTouchEnd);
                targetEl.removeEventListener('touchcancel', this.handleTouchEnd);
                window.removeEventListener('scroll', this.handleTouchScroll, true); // useCaptured=true
                this.emitter.trigger('pointerup', this.createEventFromTouch(ev));
                this.cleanup(); // call last so that pointerup has access to props
                this.isTouchDragging = false;
                startIgnoringMouse();
            }
        };
        this.handleTouchScroll = () => {
            this.wasTouchScroll = true;
        };
        this.handleScroll = (ev) => {
            if (!this.shouldIgnoreMove) {
                let pageX = (window.scrollX - this.prevScrollX) + this.prevPageX;
                let pageY = (window.scrollY - this.prevScrollY) + this.prevPageY;
                this.emitter.trigger('pointermove', {
                    origEvent: ev,
                    isTouch: this.isTouchDragging,
                    subjectEl: this.subjectEl,
                    pageX,
                    pageY,
                    deltaX: pageX - this.origPageX,
                    deltaY: pageY - this.origPageY,
                });
            }
        };
        this.containerEl = containerEl;
        this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.F();
        containerEl.addEventListener('mousedown', this.handleMouseDown);
        containerEl.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        listenerCreated();
    }
    destroy() {
        this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
        this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
        listenerDestroyed();
    }
    tryStart(ev) {
        let subjectEl = this.querySubjectEl(ev);
        let downEl = ev.target;
        if (subjectEl &&
            (!this.handleSelector || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Z)(downEl, this.handleSelector))) {
            this.subjectEl = subjectEl;
            this.isDragging = true; // do this first so cancelTouchScroll will work
            this.wasTouchScroll = false;
            return true;
        }
        return false;
    }
    cleanup() {
        isWindowTouchMoveCancelled = false;
        this.isDragging = false;
        this.subjectEl = null;
        // keep wasTouchScroll around for later access
        this.destroyScrollWatch();
    }
    querySubjectEl(ev) {
        if (this.selector) {
            return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Z)(ev.target, this.selector);
        }
        return this.containerEl;
    }
    shouldIgnoreMouse() {
        return ignoreMouseDepth || this.isTouchDragging;
    }
    // can be called by user of this class, to cancel touch-based scrolling for the current drag
    cancelTouchScroll() {
        if (this.isDragging) {
            isWindowTouchMoveCancelled = true;
        }
    }
    // Scrolling that simulates pointermoves
    // ----------------------------------------------------------------------------------------------------
    initScrollWatch(ev) {
        if (this.shouldWatchScroll) {
            this.recordCoords(ev);
            window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
        }
    }
    recordCoords(ev) {
        if (this.shouldWatchScroll) {
            this.prevPageX = ev.pageX;
            this.prevPageY = ev.pageY;
            this.prevScrollX = window.scrollX;
            this.prevScrollY = window.scrollY;
        }
    }
    destroyScrollWatch() {
        if (this.shouldWatchScroll) {
            window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
        }
    }
    // Event Normalization
    // ----------------------------------------------------------------------------------------------------
    createEventFromMouse(ev, isFirst) {
        let deltaX = 0;
        let deltaY = 0;
        // TODO: repeat code
        if (isFirst) {
            this.origPageX = ev.pageX;
            this.origPageY = ev.pageY;
        }
        else {
            deltaX = ev.pageX - this.origPageX;
            deltaY = ev.pageY - this.origPageY;
        }
        return {
            origEvent: ev,
            isTouch: false,
            subjectEl: this.subjectEl,
            pageX: ev.pageX,
            pageY: ev.pageY,
            deltaX,
            deltaY,
        };
    }
    createEventFromTouch(ev, isFirst) {
        let touches = ev.touches;
        let pageX;
        let pageY;
        let deltaX = 0;
        let deltaY = 0;
        // if touch coords available, prefer,
        // because FF would give bad ev.pageX ev.pageY
        if (touches && touches.length) {
            pageX = touches[0].pageX;
            pageY = touches[0].pageY;
        }
        else {
            pageX = ev.pageX;
            pageY = ev.pageY;
        }
        // TODO: repeat code
        if (isFirst) {
            this.origPageX = pageX;
            this.origPageY = pageY;
        }
        else {
            deltaX = pageX - this.origPageX;
            deltaY = pageY - this.origPageY;
        }
        return {
            origEvent: ev,
            isTouch: true,
            subjectEl: this.subjectEl,
            pageX,
            pageY,
            deltaX,
            deltaY,
        };
    }
}
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
    return ev.button === 0 && !ev.ctrlKey;
}
// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse() {
    ignoreMouseDepth += 1;
    setTimeout(() => {
        ignoreMouseDepth -= 1;
    }, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bG.touchMouseIgnoreWait);
}
// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated() {
    listenerCnt += 1;
    if (listenerCnt === 1) {
        window.addEventListener('touchmove', onWindowTouchMove, { passive: false });
    }
}
function listenerDestroyed() {
    listenerCnt -= 1;
    if (!listenerCnt) {
        window.removeEventListener('touchmove', onWindowTouchMove, { passive: false });
    }
}
function onWindowTouchMove(ev) {
    if (isWindowTouchMoveCancelled) {
        ev.preventDefault();
    }
}

/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/
class ElementMirror {
    constructor() {
        this.isVisible = false; // must be explicitly enabled
        this.sourceEl = null;
        this.mirrorEl = null;
        this.sourceElRect = null; // screen coords relative to viewport
        // options that can be set directly by caller
        this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
        this.zIndex = 9999;
        this.revertDuration = 0;
    }
    start(sourceEl, pageX, pageY) {
        this.sourceEl = sourceEl;
        this.sourceElRect = this.sourceEl.getBoundingClientRect();
        this.origScreenX = pageX - window.scrollX;
        this.origScreenY = pageY - window.scrollY;
        this.deltaX = 0;
        this.deltaY = 0;
        this.updateElPosition();
    }
    handleMove(pageX, pageY) {
        this.deltaX = (pageX - window.scrollX) - this.origScreenX;
        this.deltaY = (pageY - window.scrollY) - this.origScreenY;
        this.updateElPosition();
    }
    // can be called before start
    setIsVisible(bool) {
        if (bool) {
            if (!this.isVisible) {
                if (this.mirrorEl) {
                    this.mirrorEl.style.display = '';
                }
                this.isVisible = bool; // needs to happen before updateElPosition
                this.updateElPosition(); // because was not updating the position while invisible
            }
        }
        else if (this.isVisible) {
            if (this.mirrorEl) {
                this.mirrorEl.style.display = 'none';
            }
            this.isVisible = bool;
        }
    }
    // always async
    stop(needsRevertAnimation, callback) {
        let done = () => {
            this.cleanup();
            callback();
        };
        if (needsRevertAnimation &&
            this.mirrorEl &&
            this.isVisible &&
            this.revertDuration && // if 0, transition won't work
            (this.deltaX || this.deltaY) // if same coords, transition won't work
        ) {
            this.doRevertAnimation(done, this.revertDuration);
        }
        else {
            setTimeout(done, 0);
        }
    }
    doRevertAnimation(callback, revertDuration) {
        let mirrorEl = this.mirrorEl;
        let finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
        mirrorEl.style.transition =
            'top ' + revertDuration + 'ms,' +
                'left ' + revertDuration + 'ms';
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aN)(mirrorEl, {
            left: finalSourceElRect.left,
            top: finalSourceElRect.top,
        });
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b0)(mirrorEl, () => {
            mirrorEl.style.transition = '';
            callback();
        });
    }
    cleanup() {
        if (this.mirrorEl) {
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aM)(this.mirrorEl);
            this.mirrorEl = null;
        }
        this.sourceEl = null;
    }
    updateElPosition() {
        if (this.sourceEl && this.isVisible) {
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aN)(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY,
            });
        }
    }
    getMirrorEl() {
        let sourceElRect = this.sourceElRect;
        let mirrorEl = this.mirrorEl;
        if (!mirrorEl) {
            mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
            // we don't want long taps or any mouse interaction causing selection/menus.
            // would use preventSelection(), but that prevents selectstart, causing problems.
            mirrorEl.style.userSelect = 'none';
            mirrorEl.style.webkitUserSelect = 'none';
            mirrorEl.style.pointerEvents = 'none';
            mirrorEl.classList.add('fc-event-dragging');
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aN)(mirrorEl, {
                position: 'fixed',
                zIndex: this.zIndex,
                visibility: '',
                boxSizing: 'border-box',
                width: sourceElRect.right - sourceElRect.left,
                height: sourceElRect.bottom - sourceElRect.top,
                right: 'auto',
                bottom: 'auto',
                margin: 0,
            });
            this.parentNode.appendChild(mirrorEl);
        }
        return mirrorEl;
    }
}

/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/
class ScrollGeomCache extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b9 {
    constructor(scrollController, doesListening) {
        super();
        this.handleScroll = () => {
            this.scrollTop = this.scrollController.getScrollTop();
            this.scrollLeft = this.scrollController.getScrollLeft();
            this.handleScrollChange();
        };
        this.scrollController = scrollController;
        this.doesListening = doesListening;
        this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
        this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
        this.scrollWidth = scrollController.getScrollWidth();
        this.scrollHeight = scrollController.getScrollHeight();
        this.clientWidth = scrollController.getClientWidth();
        this.clientHeight = scrollController.getClientHeight();
        this.clientRect = this.computeClientRect(); // do last in case it needs cached values
        if (this.doesListening) {
            this.getEventTarget().addEventListener('scroll', this.handleScroll);
        }
    }
    destroy() {
        if (this.doesListening) {
            this.getEventTarget().removeEventListener('scroll', this.handleScroll);
        }
    }
    getScrollTop() {
        return this.scrollTop;
    }
    getScrollLeft() {
        return this.scrollLeft;
    }
    setScrollTop(top) {
        this.scrollController.setScrollTop(top);
        if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
            this.handleScrollChange();
        }
    }
    setScrollLeft(top) {
        this.scrollController.setScrollLeft(top);
        if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
            this.handleScrollChange();
        }
    }
    getClientWidth() {
        return this.clientWidth;
    }
    getClientHeight() {
        return this.clientHeight;
    }
    getScrollWidth() {
        return this.scrollWidth;
    }
    getScrollHeight() {
        return this.scrollHeight;
    }
    handleScrollChange() {
    }
}

class ElementScrollGeomCache extends ScrollGeomCache {
    constructor(el, doesListening) {
        super(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ba(el), doesListening);
    }
    getEventTarget() {
        return this.scrollController.el;
    }
    computeClientRect() {
        return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b1)(this.scrollController.el);
    }
}

class WindowScrollGeomCache extends ScrollGeomCache {
    constructor(doesListening) {
        super(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bb(), doesListening);
    }
    getEventTarget() {
        return window;
    }
    computeClientRect() {
        return {
            left: this.scrollLeft,
            right: this.scrollLeft + this.clientWidth,
            top: this.scrollTop,
            bottom: this.scrollTop + this.clientHeight,
        };
    }
    // the window is the only scroll object that changes it's rectangle relative
    // to the document's topleft as it scrolls
    handleScrollChange() {
        this.clientRect = this.computeClientRect();
    }
}

// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
const getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/
class AutoScroller {
    constructor() {
        // options that can be set by caller
        this.isEnabled = true;
        this.scrollQuery = [window, '.fc-scroller'];
        this.edgeThreshold = 50; // pixels
        this.maxVelocity = 300; // pixels per second
        // internal state
        this.pointerScreenX = null;
        this.pointerScreenY = null;
        this.isAnimating = false;
        this.scrollCaches = null;
        // protect against the initial pointerdown being too close to an edge and starting the scroll
        this.everMovedUp = false;
        this.everMovedDown = false;
        this.everMovedLeft = false;
        this.everMovedRight = false;
        this.animate = () => {
            if (this.isAnimating) { // wasn't cancelled between animation calls
                let edge = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
                if (edge) {
                    let now = getTime();
                    this.handleSide(edge, (now - this.msSinceRequest) / 1000);
                    this.requestAnimation(now);
                }
                else {
                    this.isAnimating = false; // will stop animation
                }
            }
        };
    }
    start(pageX, pageY, scrollStartEl) {
        if (this.isEnabled) {
            this.scrollCaches = this.buildCaches(scrollStartEl);
            this.pointerScreenX = null;
            this.pointerScreenY = null;
            this.everMovedUp = false;
            this.everMovedDown = false;
            this.everMovedLeft = false;
            this.everMovedRight = false;
            this.handleMove(pageX, pageY);
        }
    }
    handleMove(pageX, pageY) {
        if (this.isEnabled) {
            let pointerScreenX = pageX - window.scrollX;
            let pointerScreenY = pageY - window.scrollY;
            let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
            let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
            if (yDelta < 0) {
                this.everMovedUp = true;
            }
            else if (yDelta > 0) {
                this.everMovedDown = true;
            }
            if (xDelta < 0) {
                this.everMovedLeft = true;
            }
            else if (xDelta > 0) {
                this.everMovedRight = true;
            }
            this.pointerScreenX = pointerScreenX;
            this.pointerScreenY = pointerScreenY;
            if (!this.isAnimating) {
                this.isAnimating = true;
                this.requestAnimation(getTime());
            }
        }
    }
    stop() {
        if (this.isEnabled) {
            this.isAnimating = false; // will stop animation
            for (let scrollCache of this.scrollCaches) {
                scrollCache.destroy();
            }
            this.scrollCaches = null;
        }
    }
    requestAnimation(now) {
        this.msSinceRequest = now;
        requestAnimationFrame(this.animate);
    }
    handleSide(edge, seconds) {
        let { scrollCache } = edge;
        let { edgeThreshold } = this;
        let invDistance = edgeThreshold - edge.distance;
        let velocity = // the closer to the edge, the faster we scroll
         ((invDistance * invDistance) / (edgeThreshold * edgeThreshold)) * // quadratic
            this.maxVelocity * seconds;
        let sign = 1;
        switch (edge.name) {
            case 'left':
                sign = -1;
            // falls through
            case 'right':
                scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
                break;
            case 'top':
                sign = -1;
            // falls through
            case 'bottom':
                scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
                break;
        }
    }
    // left/top are relative to document topleft
    computeBestEdge(left, top) {
        let { edgeThreshold } = this;
        let bestSide = null;
        let scrollCaches = this.scrollCaches || [];
        for (let scrollCache of scrollCaches) {
            let rect = scrollCache.clientRect;
            let leftDist = left - rect.left;
            let rightDist = rect.right - left;
            let topDist = top - rect.top;
            let bottomDist = rect.bottom - top;
            // completely within the rect?
            if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
                if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() &&
                    (!bestSide || bestSide.distance > topDist)) {
                    bestSide = { scrollCache, name: 'top', distance: topDist };
                }
                if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() &&
                    (!bestSide || bestSide.distance > bottomDist)) {
                    bestSide = { scrollCache, name: 'bottom', distance: bottomDist };
                }
                /*
                TODO: fix broken RTL scrolling. canScrollLeft always returning false
                https://github.com/fullcalendar/fullcalendar/issues/4837
                */
                if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() &&
                    (!bestSide || bestSide.distance > leftDist)) {
                    bestSide = { scrollCache, name: 'left', distance: leftDist };
                }
                if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() &&
                    (!bestSide || bestSide.distance > rightDist)) {
                    bestSide = { scrollCache, name: 'right', distance: rightDist };
                }
            }
        }
        return bestSide;
    }
    buildCaches(scrollStartEl) {
        return this.queryScrollEls(scrollStartEl).map((el) => {
            if (el === window) {
                return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
            }
            return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
        });
    }
    queryScrollEls(scrollStartEl) {
        let els = [];
        for (let query of this.scrollQuery) {
            if (typeof query === 'object') {
                els.push(query);
            }
            else {
                /*
                TODO: in the future, always have auto-scroll happen on element where current Hit came from
                Ticket: https://github.com/fullcalendar/fullcalendar/issues/4593
                */
                els.push(...Array.prototype.slice.call(scrollStartEl.getRootNode().querySelectorAll(query)));
            }
        }
        return els;
    }
}

/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/
class FeaturefulElementDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bF {
    constructor(containerEl, selector) {
        super(containerEl);
        this.containerEl = containerEl;
        // options that can be directly set by caller
        // the caller can also set the PointerDragging's options as well
        this.delay = null;
        this.minDistance = 0;
        this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
        this.mirrorNeedsRevert = false;
        this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
        this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
        this.isDelayEnded = false;
        this.isDistanceSurpassed = false;
        this.delayTimeoutId = null;
        this.onPointerDown = (ev) => {
            if (!this.isDragging) { // so new drag doesn't happen while revert animation is going
                this.isInteracting = true;
                this.isDelayEnded = false;
                this.isDistanceSurpassed = false;
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ap)(document.body);
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ar)(document.body);
                // prevent links from being visited if there's an eventual drag.
                // also prevents selection in older browsers (maybe?).
                // not necessary for touch, besides, browser would complain about passiveness.
                if (!ev.isTouch) {
                    ev.origEvent.preventDefault();
                }
                this.emitter.trigger('pointerdown', ev);
                if (this.isInteracting && // not destroyed via pointerdown handler
                    !this.pointer.shouldIgnoreMove) {
                    // actions related to initiating dragstart+dragmove+dragend...
                    this.mirror.setIsVisible(false); // reset. caller must set-visible
                    this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
                    this.startDelay(ev);
                    if (!this.minDistance) {
                        this.handleDistanceSurpassed(ev);
                    }
                }
            }
        };
        this.onPointerMove = (ev) => {
            if (this.isInteracting) {
                this.emitter.trigger('pointermove', ev);
                if (!this.isDistanceSurpassed) {
                    let minDistance = this.minDistance;
                    let distanceSq; // current distance from the origin, squared
                    let { deltaX, deltaY } = ev;
                    distanceSq = deltaX * deltaX + deltaY * deltaY;
                    if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
                        this.handleDistanceSurpassed(ev);
                    }
                }
                if (this.isDragging) {
                    // a real pointer move? (not one simulated by scrolling)
                    if (ev.origEvent.type !== 'scroll') {
                        this.mirror.handleMove(ev.pageX, ev.pageY);
                        this.autoScroller.handleMove(ev.pageX, ev.pageY);
                    }
                    this.emitter.trigger('dragmove', ev);
                }
            }
        };
        this.onPointerUp = (ev) => {
            if (this.isInteracting) {
                this.isInteracting = false;
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aq)(document.body);
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.as)(document.body);
                this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
                if (this.isDragging) {
                    this.autoScroller.stop();
                    this.tryStopDrag(ev); // which will stop the mirror
                }
                if (this.delayTimeoutId) {
                    clearTimeout(this.delayTimeoutId);
                    this.delayTimeoutId = null;
                }
            }
        };
        let pointer = this.pointer = new PointerDragging(containerEl);
        pointer.emitter.on('pointerdown', this.onPointerDown);
        pointer.emitter.on('pointermove', this.onPointerMove);
        pointer.emitter.on('pointerup', this.onPointerUp);
        if (selector) {
            pointer.selector = selector;
        }
        this.mirror = new ElementMirror();
        this.autoScroller = new AutoScroller();
    }
    destroy() {
        this.pointer.destroy();
        // HACK: simulate a pointer-up to end the current drag
        // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
        this.onPointerUp({});
    }
    startDelay(ev) {
        if (typeof this.delay === 'number') {
            this.delayTimeoutId = setTimeout(() => {
                this.delayTimeoutId = null;
                this.handleDelayEnd(ev);
            }, this.delay); // not assignable to number!
        }
        else {
            this.handleDelayEnd(ev);
        }
    }
    handleDelayEnd(ev) {
        this.isDelayEnded = true;
        this.tryStartDrag(ev);
    }
    handleDistanceSurpassed(ev) {
        this.isDistanceSurpassed = true;
        this.tryStartDrag(ev);
    }
    tryStartDrag(ev) {
        if (this.isDelayEnded && this.isDistanceSurpassed) {
            if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
                this.isDragging = true;
                this.mirrorNeedsRevert = false;
                this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
                this.emitter.trigger('dragstart', ev);
                if (this.touchScrollAllowed === false) {
                    this.pointer.cancelTouchScroll();
                }
            }
        }
    }
    tryStopDrag(ev) {
        // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
        // that come from the document to fire beforehand. much more convenient this way.
        this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
    }
    stopDrag(ev) {
        this.isDragging = false;
        this.emitter.trigger('dragend', ev);
    }
    // fill in the implementations...
    setIgnoreMove(bool) {
        this.pointer.shouldIgnoreMove = bool;
    }
    setMirrorIsVisible(bool) {
        this.mirror.setIsVisible(bool);
    }
    setMirrorNeedsRevert(bool) {
        this.mirrorNeedsRevert = bool;
    }
    setAutoScrollEnabled(bool) {
        this.autoScroller.isEnabled = bool;
    }
}

/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/
class OffsetTracker {
    constructor(el) {
        this.el = el;
        this.origRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b4)(el);
        // will work fine for divs that have overflow:hidden
        this.scrollCaches = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b3)(el).map((scrollEl) => new ElementScrollGeomCache(scrollEl, true));
    }
    destroy() {
        for (let scrollCache of this.scrollCaches) {
            scrollCache.destroy();
        }
    }
    computeLeft() {
        let left = this.origRect.left;
        for (let scrollCache of this.scrollCaches) {
            left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
        }
        return left;
    }
    computeTop() {
        let top = this.origRect.top;
        for (let scrollCache of this.scrollCaches) {
            top += scrollCache.origScrollTop - scrollCache.getScrollTop();
        }
        return top;
    }
    isWithinClipping(pageX, pageY) {
        let point = { left: pageX, top: pageY };
        for (let scrollCache of this.scrollCaches) {
            if (!isIgnoredClipping(scrollCache.getEventTarget()) &&
                !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aD)(point, scrollCache.clientRect)) {
                return false;
            }
        }
        return true;
    }
}
// certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node) {
    let tagName = node.tagName;
    return tagName === 'HTML' || tagName === 'BODY';
}

/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/
class HitDragging {
    constructor(dragging, droppableStore) {
        // options that can be set by caller
        this.useSubjectCenter = false;
        this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
        this.disablePointCheck = false;
        this.initialHit = null;
        this.movingHit = null;
        this.finalHit = null; // won't ever be populated if shouldIgnoreMove
        this.handlePointerDown = (ev) => {
            let { dragging } = this;
            this.initialHit = null;
            this.movingHit = null;
            this.finalHit = null;
            this.prepareHits();
            this.processFirstCoord(ev);
            if (this.initialHit || !this.requireInitial) {
                dragging.setIgnoreMove(false);
                // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
                this.emitter.trigger('pointerdown', ev);
            }
            else {
                dragging.setIgnoreMove(true);
            }
        };
        this.handleDragStart = (ev) => {
            this.emitter.trigger('dragstart', ev);
            this.handleMove(ev, true); // force = fire even if initially null
        };
        this.handleDragMove = (ev) => {
            this.emitter.trigger('dragmove', ev);
            this.handleMove(ev);
        };
        this.handlePointerUp = (ev) => {
            this.releaseHits();
            this.emitter.trigger('pointerup', ev);
        };
        this.handleDragEnd = (ev) => {
            if (this.movingHit) {
                this.emitter.trigger('hitupdate', null, true, ev);
            }
            this.finalHit = this.movingHit;
            this.movingHit = null;
            this.emitter.trigger('dragend', ev);
        };
        this.droppableStore = droppableStore;
        dragging.emitter.on('pointerdown', this.handlePointerDown);
        dragging.emitter.on('dragstart', this.handleDragStart);
        dragging.emitter.on('dragmove', this.handleDragMove);
        dragging.emitter.on('pointerup', this.handlePointerUp);
        dragging.emitter.on('dragend', this.handleDragEnd);
        this.dragging = dragging;
        this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.F();
    }
    // sets initialHit
    // sets coordAdjust
    processFirstCoord(ev) {
        let origPoint = { left: ev.pageX, top: ev.pageY };
        let adjustedPoint = origPoint;
        let subjectEl = ev.subjectEl;
        let subjectRect;
        if (subjectEl instanceof HTMLElement) { // i.e. not a Document/ShadowRoot
            subjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b4)(subjectEl);
            adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aE)(adjustedPoint, subjectRect);
        }
        let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
        if (initialHit) {
            if (this.useSubjectCenter && subjectRect) {
                let slicedSubjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aC)(subjectRect, initialHit.rect);
                if (slicedSubjectRect) {
                    adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aF)(slicedSubjectRect);
                }
            }
            this.coordAdjust = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aG)(adjustedPoint, origPoint);
        }
        else {
            this.coordAdjust = { left: 0, top: 0 };
        }
    }
    handleMove(ev, forceHandle) {
        let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
        if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
            this.movingHit = hit;
            this.emitter.trigger('hitupdate', hit, false, ev);
        }
    }
    prepareHits() {
        this.offsetTrackers = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.droppableStore, (interactionSettings) => {
            interactionSettings.component.prepareHits();
            return new OffsetTracker(interactionSettings.el);
        });
    }
    releaseHits() {
        let { offsetTrackers } = this;
        for (let id in offsetTrackers) {
            offsetTrackers[id].destroy();
        }
        this.offsetTrackers = {};
    }
    queryHitForOffset(offsetLeft, offsetTop) {
        let { droppableStore, offsetTrackers } = this;
        let bestHit = null;
        for (let id in droppableStore) {
            let component = droppableStore[id].component;
            let offsetTracker = offsetTrackers[id];
            if (offsetTracker && // wasn't destroyed mid-drag
                offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
                let originLeft = offsetTracker.computeLeft();
                let originTop = offsetTracker.computeTop();
                let positionLeft = offsetLeft - originLeft;
                let positionTop = offsetTop - originTop;
                let { origRect } = offsetTracker;
                let width = origRect.right - origRect.left;
                let height = origRect.bottom - origRect.top;
                if (
                // must be within the element's bounds
                positionLeft >= 0 && positionLeft < width &&
                    positionTop >= 0 && positionTop < height) {
                    let hit = component.queryHit(positionLeft, positionTop, width, height);
                    if (hit && (
                    // make sure the hit is within activeRange, meaning it's not a dead cell
                    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b7)(hit.dateProfile.activeRange, hit.dateSpan.range)) &&
                        // Ensure the component we are querying for the hit is accessibly my the pointer
                        // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
                        // https://github.com/fullcalendar/fullcalendar/issues/5026
                        (this.disablePointCheck ||
                            offsetTracker.el.contains(offsetTracker.el.getRootNode().elementFromPoint(
                            // add-back origins to get coordinate relative to top-left of window viewport
                            positionLeft + originLeft - window.scrollX, positionTop + originTop - window.scrollY))) &&
                        (!bestHit || hit.layer > bestHit.layer)) {
                        hit.componentId = id;
                        hit.context = component.context;
                        // TODO: better way to re-orient rectangle
                        hit.rect.left += originLeft;
                        hit.rect.right += originLeft;
                        hit.rect.top += originTop;
                        hit.rect.bottom += originTop;
                        bestHit = hit;
                    }
                }
            }
        }
        return bestHit;
    }
}
function isHitsEqual(hit0, hit1) {
    if (!hit0 && !hit1) {
        return true;
    }
    if (Boolean(hit0) !== Boolean(hit1)) {
        return false;
    }
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bd)(hit0.dateSpan, hit1.dateSpan);
}

function buildDatePointApiWithContext(dateSpan, context) {
    let props = {};
    for (let transform of context.pluginHooks.datePointTransforms) {
        Object.assign(props, transform(dateSpan, context));
    }
    Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
    return props;
}
function buildDatePointApi(span, dateEnv) {
    return {
        date: dateEnv.toDate(span.range.start),
        dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
        allDay: span.allDay,
    };
}

/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/
class DateClicking extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.X {
    constructor(settings) {
        super(settings);
        this.handlePointerDown = (pev) => {
            let { dragging } = this;
            let downEl = pev.origEvent.target;
            // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
            dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
        };
        // won't even fire if moving was ignored
        this.handleDragEnd = (ev) => {
            let { component } = this;
            let { pointer } = this.dragging;
            if (!pointer.wasTouchScroll) {
                let { initialHit, finalHit } = this.hitDragging;
                if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
                    let { context } = component;
                    let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), { dayEl: initialHit.dayEl, jsEvent: ev.origEvent, view: context.viewApi || context.calendarApi.view });
                    context.emitter.trigger('dateClick', arg);
                }
            }
        };
        // we DO want to watch pointer moves because otherwise finalHit won't get populated
        this.dragging = new FeaturefulElementDragging(settings.el);
        this.dragging.autoScroller.isEnabled = false;
        let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bE)(settings));
        hitDragging.emitter.on('pointerdown', this.handlePointerDown);
        hitDragging.emitter.on('dragend', this.handleDragEnd);
    }
    destroy() {
        this.dragging.destroy();
    }
}

/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/
class DateSelecting extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.X {
    constructor(settings) {
        super(settings);
        this.dragSelection = null;
        this.handlePointerDown = (ev) => {
            let { component, dragging } = this;
            let { options } = component.context;
            let canSelect = options.selectable &&
                component.isValidDateDownEl(ev.origEvent.target);
            // don't bother to watch expensive moves if component won't do selection
            dragging.setIgnoreMove(!canSelect);
            // if touch, require user to hold down
            dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
        };
        this.handleDragStart = (ev) => {
            this.component.context.calendarApi.unselect(ev); // unselect previous selections
        };
        this.handleHitUpdate = (hit, isFinal) => {
            let { context } = this.component;
            let dragSelection = null;
            let isInvalid = false;
            if (hit) {
                let initialHit = this.hitDragging.initialHit;
                let disallowed = hit.componentId === initialHit.componentId
                    && this.isHitComboAllowed
                    && !this.isHitComboAllowed(initialHit, hit);
                if (!disallowed) {
                    dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
                }
                if (!dragSelection || !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bY)(dragSelection, hit.dateProfile, context)) {
                    isInvalid = true;
                    dragSelection = null;
                }
            }
            if (dragSelection) {
                context.dispatch({ type: 'SELECT_DATES', selection: dragSelection });
            }
            else if (!isFinal) { // only unselect if moved away while dragging
                context.dispatch({ type: 'UNSELECT_DATES' });
            }
            if (!isInvalid) {
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.au)();
            }
            else {
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.av)();
            }
            if (!isFinal) {
                this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
            }
        };
        this.handlePointerUp = (pev) => {
            if (this.dragSelection) {
                // selection is already rendered, so just need to report selection
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cr)(this.dragSelection, pev, this.component.context);
                this.dragSelection = null;
            }
        };
        let { component } = settings;
        let { options } = component.context;
        let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
        dragging.touchScrollAllowed = false;
        dragging.minDistance = options.selectMinDistance || 0;
        dragging.autoScroller.isEnabled = options.dragScroll;
        let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bE)(settings));
        hitDragging.emitter.on('pointerdown', this.handlePointerDown);
        hitDragging.emitter.on('dragstart', this.handleDragStart);
        hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
        hitDragging.emitter.on('pointerup', this.handlePointerUp);
    }
    destroy() {
        this.dragging.destroy();
    }
}
function getComponentTouchDelay$1(component) {
    let { options } = component.context;
    let delay = options.selectLongPressDelay;
    if (delay == null) {
        delay = options.longPressDelay;
    }
    return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
    let dateSpan0 = hit0.dateSpan;
    let dateSpan1 = hit1.dateSpan;
    let ms = [
        dateSpan0.range.start,
        dateSpan0.range.end,
        dateSpan1.range.start,
        dateSpan1.range.end,
    ];
    ms.sort(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.at);
    let props = {};
    for (let transformer of dateSelectionTransformers) {
        let res = transformer(hit0, hit1);
        if (res === false) {
            return null;
        }
        if (res) {
            Object.assign(props, res);
        }
    }
    props.range = { start: ms[0], end: ms[3] };
    props.allDay = dateSpan0.allDay;
    return props;
}

class EventDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.X {
    constructor(settings) {
        super(settings);
        // internal state
        this.subjectEl = null;
        this.subjectSeg = null; // the seg being selected/dragged
        this.isDragging = false;
        this.eventRange = null;
        this.relevantEvents = null; // the events being dragged
        this.receivingContext = null;
        this.validMutation = null;
        this.mutatedRelevantEvents = null;
        this.handlePointerDown = (ev) => {
            let origTarget = ev.origEvent.target;
            let { component, dragging } = this;
            let { mirror } = dragging;
            let { options } = component.context;
            let initialContext = component.context;
            this.subjectEl = ev.subjectEl;
            let subjectSeg = this.subjectSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Y)(ev.subjectEl);
            let eventRange = this.eventRange = subjectSeg.eventRange;
            let eventInstanceId = eventRange.instance.instanceId;
            this.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aT)(initialContext.getCurrentData().eventStore, eventInstanceId);
            dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
            dragging.delay =
                // only do a touch delay if touch and this event hasn't been selected yet
                (ev.isTouch && eventInstanceId !== component.props.eventSelection) ?
                    getComponentTouchDelay(component) :
                    null;
            if (options.fixedMirrorParent) {
                mirror.parentNode = options.fixedMirrorParent;
            }
            else {
                mirror.parentNode = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Z)(origTarget, '.fc');
            }
            mirror.revertDuration = options.dragRevertDuration;
            let isValid = component.isValidSegDownEl(origTarget) &&
                !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Z)(origTarget, '.fc-event-resizer'); // NOT on a resizer
            dragging.setIgnoreMove(!isValid);
            // disable dragging for elements that are resizable (ie, selectable)
            // but are not draggable
            this.isDragging = isValid &&
                ev.subjectEl.classList.contains('fc-event-draggable');
        };
        this.handleDragStart = (ev) => {
            let initialContext = this.component.context;
            let eventRange = this.eventRange;
            let eventInstanceId = eventRange.instance.instanceId;
            if (ev.isTouch) {
                // need to select a different event?
                if (eventInstanceId !== this.component.props.eventSelection) {
                    initialContext.dispatch({ type: 'SELECT_EVENT', eventInstanceId });
                }
            }
            else {
                // if now using mouse, but was previous touch interaction, clear selected event
                initialContext.dispatch({ type: 'UNSELECT_EVENT' });
            }
            if (this.isDragging) {
                initialContext.calendarApi.unselect(ev); // unselect *date* selection
                initialContext.emitter.trigger('eventDragStart', {
                    el: this.subjectEl,
                    event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__._(initialContext, eventRange.def, eventRange.instance),
                    jsEvent: ev.origEvent,
                    view: initialContext.viewApi,
                });
            }
        };
        this.handleHitUpdate = (hit, isFinal) => {
            if (!this.isDragging) {
                return;
            }
            let relevantEvents = this.relevantEvents;
            let initialHit = this.hitDragging.initialHit;
            let initialContext = this.component.context;
            // states based on new hit
            let receivingContext = null;
            let mutation = null;
            let mutatedRelevantEvents = null;
            let isInvalid = false;
            let interaction = {
                affectedEvents: relevantEvents,
                mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.H)(),
                isEvent: true,
            };
            if (hit) {
                receivingContext = hit.context;
                let receivingOptions = receivingContext.options;
                if (initialContext === receivingContext ||
                    (receivingOptions.editable && receivingOptions.droppable)) {
                    mutation = computeEventMutation(initialHit, hit, this.eventRange.instance.range.start, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
                    if (mutation) {
                        mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bV)(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
                        interaction.mutatedEvents = mutatedRelevantEvents;
                        if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bX)(interaction, hit.dateProfile, receivingContext)) {
                            isInvalid = true;
                            mutation = null;
                            mutatedRelevantEvents = null;
                            interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.H)();
                        }
                    }
                }
                else {
                    receivingContext = null;
                }
            }
            this.displayDrag(receivingContext, interaction);
            if (!isInvalid) {
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.au)();
            }
            else {
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.av)();
            }
            if (!isFinal) {
                if (initialContext === receivingContext && // TODO: write test for this
                    isHitsEqual(initialHit, hit)) {
                    mutation = null;
                }
                this.dragging.setMirrorNeedsRevert(!mutation);
                // render the mirror if no already-rendered mirror
                // TODO: wish we could somehow wait for dispatch to guarantee render
                this.dragging.setMirrorIsVisible(!hit || !this.subjectEl.getRootNode().querySelector('.fc-event-mirror'));
                // assign states based on new hit
                this.receivingContext = receivingContext;
                this.validMutation = mutation;
                this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
        };
        this.handlePointerUp = () => {
            if (!this.isDragging) {
                this.cleanup(); // because handleDragEnd won't fire
            }
        };
        this.handleDragEnd = (ev) => {
            if (this.isDragging) {
                let initialContext = this.component.context;
                let initialView = initialContext.viewApi;
                let { receivingContext, validMutation } = this;
                let eventDef = this.eventRange.def;
                let eventInstance = this.eventRange.instance;
                let eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__._(initialContext, eventDef, eventInstance);
                let relevantEvents = this.relevantEvents;
                let mutatedRelevantEvents = this.mutatedRelevantEvents;
                let { finalHit } = this.hitDragging;
                this.clearDrag(); // must happen after revert animation
                initialContext.emitter.trigger('eventDragStop', {
                    el: this.subjectEl,
                    event: eventApi,
                    jsEvent: ev.origEvent,
                    view: initialView,
                });
                if (validMutation) {
                    // dropped within same calendar
                    if (receivingContext === initialContext) {
                        let updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__._(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
                        initialContext.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: mutatedRelevantEvents,
                        });
                        let eventChangeArg = {
                            oldEvent: eventApi,
                            event: updatedEventApi,
                            relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.w)(mutatedRelevantEvents, initialContext, eventInstance),
                            revert() {
                                initialContext.dispatch({
                                    type: 'MERGE_EVENTS',
                                    eventStore: relevantEvents, // the pre-change data
                                });
                            },
                        };
                        let transformed = {};
                        for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
                            Object.assign(transformed, transformer(validMutation, initialContext));
                        }
                        initialContext.emitter.trigger('eventDrop', Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), { el: ev.subjectEl, delta: validMutation.datesDelta, jsEvent: ev.origEvent, view: initialView }));
                        initialContext.emitter.trigger('eventChange', eventChangeArg);
                        // dropped in different calendar
                    }
                    else if (receivingContext) {
                        let eventRemoveArg = {
                            event: eventApi,
                            relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.w)(relevantEvents, initialContext, eventInstance),
                            revert() {
                                initialContext.dispatch({
                                    type: 'MERGE_EVENTS',
                                    eventStore: relevantEvents,
                                });
                            },
                        };
                        initialContext.emitter.trigger('eventLeave', Object.assign(Object.assign({}, eventRemoveArg), { draggedEl: ev.subjectEl, view: initialView }));
                        initialContext.dispatch({
                            type: 'REMOVE_EVENTS',
                            eventStore: relevantEvents,
                        });
                        initialContext.emitter.trigger('eventRemove', eventRemoveArg);
                        let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
                        let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
                        let addedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__._(receivingContext, addedEventDef, addedEventInstance);
                        receivingContext.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: mutatedRelevantEvents,
                        });
                        let eventAddArg = {
                            event: addedEventApi,
                            relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.w)(mutatedRelevantEvents, receivingContext, addedEventInstance),
                            revert() {
                                receivingContext.dispatch({
                                    type: 'REMOVE_EVENTS',
                                    eventStore: mutatedRelevantEvents,
                                });
                            },
                        };
                        receivingContext.emitter.trigger('eventAdd', eventAddArg);
                        if (ev.isTouch) {
                            receivingContext.dispatch({
                                type: 'SELECT_EVENT',
                                eventInstanceId: eventInstance.instanceId,
                            });
                        }
                        receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.context.viewApi }));
                        receivingContext.emitter.trigger('eventReceive', Object.assign(Object.assign({}, eventAddArg), { draggedEl: ev.subjectEl, view: finalHit.context.viewApi }));
                    }
                }
                else {
                    initialContext.emitter.trigger('_noEventDrop');
                }
            }
            this.cleanup();
        };
        let { component } = this;
        let { options } = component.context;
        let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
        dragging.pointer.selector = EventDragging.SELECTOR;
        dragging.touchScrollAllowed = false;
        dragging.autoScroller.isEnabled = options.dragScroll;
        let hitDragging = this.hitDragging = new HitDragging(this.dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.a5);
        hitDragging.useSubjectCenter = settings.useEventCenter;
        hitDragging.emitter.on('pointerdown', this.handlePointerDown);
        hitDragging.emitter.on('dragstart', this.handleDragStart);
        hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
        hitDragging.emitter.on('pointerup', this.handlePointerUp);
        hitDragging.emitter.on('dragend', this.handleDragEnd);
    }
    destroy() {
        this.dragging.destroy();
    }
    // render a drag state on the next receivingCalendar
    displayDrag(nextContext, state) {
        let initialContext = this.component.context;
        let prevContext = this.receivingContext;
        // does the previous calendar need to be cleared?
        if (prevContext && prevContext !== nextContext) {
            // does the initial calendar need to be cleared?
            // if so, don't clear all the way. we still need to to hide the affectedEvents
            if (prevContext === initialContext) {
                prevContext.dispatch({
                    type: 'SET_EVENT_DRAG',
                    state: {
                        affectedEvents: state.affectedEvents,
                        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.H)(),
                        isEvent: true,
                    },
                });
                // completely clear the old calendar if it wasn't the initial
            }
            else {
                prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
        }
        if (nextContext) {
            nextContext.dispatch({ type: 'SET_EVENT_DRAG', state });
        }
    }
    clearDrag() {
        let initialCalendar = this.component.context;
        let { receivingContext } = this;
        if (receivingContext) {
            receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
        // the initial calendar might have an dummy drag state from displayDrag
        if (initialCalendar !== receivingContext) {
            initialCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
    }
    cleanup() {
        this.subjectSeg = null;
        this.isDragging = false;
        this.eventRange = null;
        this.relevantEvents = null;
        this.receivingContext = null;
        this.validMutation = null;
        this.mutatedRelevantEvents = null;
    }
}
// TODO: test this in IE11
// QUESTION: why do we need it on the resizable???
EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
function computeEventMutation(hit0, hit1, eventInstanceStart, massagers) {
    let dateSpan0 = hit0.dateSpan;
    let dateSpan1 = hit1.dateSpan;
    let date0 = dateSpan0.range.start;
    let date1 = dateSpan1.range.start;
    let standardProps = {};
    if (dateSpan0.allDay !== dateSpan1.allDay) {
        standardProps.allDay = dateSpan1.allDay;
        standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
        if (dateSpan1.allDay) {
            // means date1 is already start-of-day,
            // but date0 needs to be converted
            date0 = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.q)(eventInstanceStart);
        }
        else {
            // Moving from allDate->timed
            // Doesn't matter where on the event the drag began, mutate the event's start-date to date1
            date0 = eventInstanceStart;
        }
    }
    let delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ay)(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ?
        hit0.largeUnit :
        null);
    if (delta.milliseconds) { // has hours/minutes/seconds
        standardProps.allDay = false;
    }
    let mutation = {
        datesDelta: delta,
        standardProps,
    };
    for (let massager of massagers) {
        massager(mutation, hit0, hit1);
    }
    return mutation;
}
function getComponentTouchDelay(component) {
    let { options } = component.context;
    let delay = options.eventLongPressDelay;
    if (delay == null) {
        delay = options.longPressDelay;
    }
    return delay;
}

class EventResizing extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.X {
    constructor(settings) {
        super(settings);
        // internal state
        this.draggingSegEl = null;
        this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
        this.eventRange = null;
        this.relevantEvents = null;
        this.validMutation = null;
        this.mutatedRelevantEvents = null;
        this.handlePointerDown = (ev) => {
            let { component } = this;
            let segEl = this.querySegEl(ev);
            let seg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Y)(segEl);
            let eventRange = this.eventRange = seg.eventRange;
            this.dragging.minDistance = component.context.options.eventDragMinDistance;
            // if touch, need to be working with a selected event
            this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) ||
                (ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId));
        };
        this.handleDragStart = (ev) => {
            let { context } = this.component;
            let eventRange = this.eventRange;
            this.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aT)(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
            let segEl = this.querySegEl(ev);
            this.draggingSegEl = segEl;
            this.draggingSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Y)(segEl);
            context.calendarApi.unselect();
            context.emitter.trigger('eventResizeStart', {
                el: segEl,
                event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__._(context, eventRange.def, eventRange.instance),
                jsEvent: ev.origEvent,
                view: context.viewApi,
            });
        };
        this.handleHitUpdate = (hit, isFinal, ev) => {
            let { context } = this.component;
            let relevantEvents = this.relevantEvents;
            let initialHit = this.hitDragging.initialHit;
            let eventInstance = this.eventRange.instance;
            let mutation = null;
            let mutatedRelevantEvents = null;
            let isInvalid = false;
            let interaction = {
                affectedEvents: relevantEvents,
                mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.H)(),
                isEvent: true,
            };
            if (hit) {
                let disallowed = hit.componentId === initialHit.componentId
                    && this.isHitComboAllowed
                    && !this.isHitComboAllowed(initialHit, hit);
                if (!disallowed) {
                    mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
                }
            }
            if (mutation) {
                mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bV)(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
                interaction.mutatedEvents = mutatedRelevantEvents;
                if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bX)(interaction, hit.dateProfile, context)) {
                    isInvalid = true;
                    mutation = null;
                    mutatedRelevantEvents = null;
                    interaction.mutatedEvents = null;
                }
            }
            if (mutatedRelevantEvents) {
                context.dispatch({
                    type: 'SET_EVENT_RESIZE',
                    state: interaction,
                });
            }
            else {
                context.dispatch({ type: 'UNSET_EVENT_RESIZE' });
            }
            if (!isInvalid) {
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.au)();
            }
            else {
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.av)();
            }
            if (!isFinal) {
                if (mutation && isHitsEqual(initialHit, hit)) {
                    mutation = null;
                }
                this.validMutation = mutation;
                this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
        };
        this.handleDragEnd = (ev) => {
            let { context } = this.component;
            let eventDef = this.eventRange.def;
            let eventInstance = this.eventRange.instance;
            let eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__._(context, eventDef, eventInstance);
            let relevantEvents = this.relevantEvents;
            let mutatedRelevantEvents = this.mutatedRelevantEvents;
            context.emitter.trigger('eventResizeStop', {
                el: this.draggingSegEl,
                event: eventApi,
                jsEvent: ev.origEvent,
                view: context.viewApi,
            });
            if (this.validMutation) {
                let updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__._(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
                context.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: mutatedRelevantEvents,
                });
                let eventChangeArg = {
                    oldEvent: eventApi,
                    event: updatedEventApi,
                    relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.w)(mutatedRelevantEvents, context, eventInstance),
                    revert() {
                        context.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: relevantEvents, // the pre-change events
                        });
                    },
                };
                context.emitter.trigger('eventResize', Object.assign(Object.assign({}, eventChangeArg), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.d)(0), endDelta: this.validMutation.endDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.d)(0), jsEvent: ev.origEvent, view: context.viewApi }));
                context.emitter.trigger('eventChange', eventChangeArg);
            }
            else {
                context.emitter.trigger('_noEventResize');
            }
            // reset all internal state
            this.draggingSeg = null;
            this.relevantEvents = null;
            this.validMutation = null;
            // okay to keep eventInstance around. useful to set it in handlePointerDown
        };
        let { component } = settings;
        let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
        dragging.pointer.selector = '.fc-event-resizer';
        dragging.touchScrollAllowed = false;
        dragging.autoScroller.isEnabled = component.context.options.dragScroll;
        let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bE)(settings));
        hitDragging.emitter.on('pointerdown', this.handlePointerDown);
        hitDragging.emitter.on('dragstart', this.handleDragStart);
        hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
        hitDragging.emitter.on('dragend', this.handleDragEnd);
    }
    destroy() {
        this.dragging.destroy();
    }
    querySegEl(ev) {
        return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Z)(ev.subjectEl, '.fc-event');
    }
}
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
    let dateEnv = hit0.context.dateEnv;
    let date0 = hit0.dateSpan.range.start;
    let date1 = hit1.dateSpan.range.start;
    let delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ay)(date0, date1, dateEnv, hit0.largeUnit);
    if (isFromStart) {
        if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
            return { startDelta: delta };
        }
    }
    else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
        return { endDelta: delta };
    }
    return null;
}

class UnselectAuto {
    constructor(context) {
        this.context = context;
        this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
        this.matchesCancel = false;
        this.matchesEvent = false;
        this.onSelect = (selectInfo) => {
            if (selectInfo.jsEvent) {
                this.isRecentPointerDateSelect = true;
            }
        };
        this.onDocumentPointerDown = (pev) => {
            let unselectCancel = this.context.options.unselectCancel;
            let downEl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aP)(pev.origEvent);
            this.matchesCancel = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Z)(downEl, unselectCancel);
            this.matchesEvent = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Z)(downEl, EventDragging.SELECTOR); // interaction started on an event?
        };
        this.onDocumentPointerUp = (pev) => {
            let { context } = this;
            let { documentPointer } = this;
            let calendarState = context.getCurrentData();
            // touch-scrolling should never unfocus any type of selection
            if (!documentPointer.wasTouchScroll) {
                if (calendarState.dateSelection && // an existing date selection?
                    !this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
                ) {
                    let unselectAuto = context.options.unselectAuto;
                    if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
                        context.calendarApi.unselect(pev);
                    }
                }
                if (calendarState.eventSelection && // an existing event selected?
                    !this.matchesEvent // interaction DIDN'T start on an event
                ) {
                    context.dispatch({ type: 'UNSELECT_EVENT' });
                }
            }
            this.isRecentPointerDateSelect = false;
        };
        let documentPointer = this.documentPointer = new PointerDragging(document);
        documentPointer.shouldIgnoreMove = true;
        documentPointer.shouldWatchScroll = false;
        documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
        documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
        /*
        TODO: better way to know about whether there was a selection with the pointer
        */
        context.emitter.on('select', this.onSelect);
    }
    destroy() {
        this.context.emitter.off('select', this.onSelect);
        this.documentPointer.destroy();
    }
}

const OPTION_REFINERS = {
    fixedMirrorParent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
};
const LISTENER_REFINERS = {
    dateClick: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    eventDragStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    eventDragStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    eventDrop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    eventResizeStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    eventResizeStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    eventResize: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    drop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    eventReceive: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
    eventLeave: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.n,
};

/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/
class ExternalElementDragging {
    constructor(dragging, suppliedDragMeta) {
        this.receivingContext = null;
        this.droppableEvent = null; // will exist for all drags, even if create:false
        this.suppliedDragMeta = null;
        this.dragMeta = null;
        this.handleDragStart = (ev) => {
            this.dragMeta = this.buildDragMeta(ev.subjectEl);
        };
        this.handleHitUpdate = (hit, isFinal, ev) => {
            let { dragging } = this.hitDragging;
            let receivingContext = null;
            let droppableEvent = null;
            let isInvalid = false;
            let interaction = {
                affectedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.H)(),
                mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.H)(),
                isEvent: this.dragMeta.create,
            };
            if (hit) {
                receivingContext = hit.context;
                if (this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
                    droppableEvent = computeEventForDateSpan(hit.dateSpan, this.dragMeta, receivingContext);
                    interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aU)(droppableEvent);
                    isInvalid = !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bX)(interaction, hit.dateProfile, receivingContext);
                    if (isInvalid) {
                        interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.H)();
                        droppableEvent = null;
                    }
                }
            }
            this.displayDrag(receivingContext, interaction);
            // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
            // TODO: wish we could somehow wait for dispatch to guarantee render
            dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
            if (!isInvalid) {
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.au)();
            }
            else {
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.av)();
            }
            if (!isFinal) {
                dragging.setMirrorNeedsRevert(!droppableEvent);
                this.receivingContext = receivingContext;
                this.droppableEvent = droppableEvent;
            }
        };
        this.handleDragEnd = (pev) => {
            let { receivingContext, droppableEvent } = this;
            this.clearDrag();
            if (receivingContext && droppableEvent) {
                let finalHit = this.hitDragging.finalHit;
                let finalView = finalHit.context.viewApi;
                let dragMeta = this.dragMeta;
                receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: pev.subjectEl, jsEvent: pev.origEvent, view: finalView }));
                if (dragMeta.create) {
                    let addingEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aU)(droppableEvent);
                    receivingContext.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: addingEvents,
                    });
                    if (pev.isTouch) {
                        receivingContext.dispatch({
                            type: 'SELECT_EVENT',
                            eventInstanceId: droppableEvent.instance.instanceId,
                        });
                    }
                    // signal that an external event landed
                    receivingContext.emitter.trigger('eventReceive', {
                        event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__._(receivingContext, droppableEvent.def, droppableEvent.instance),
                        relatedEvents: [],
                        revert() {
                            receivingContext.dispatch({
                                type: 'REMOVE_EVENTS',
                                eventStore: addingEvents,
                            });
                        },
                        draggedEl: pev.subjectEl,
                        view: finalView,
                    });
                }
            }
            this.receivingContext = null;
            this.droppableEvent = null;
        };
        let hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.a5);
        hitDragging.requireInitial = false; // will start outside of a component
        hitDragging.emitter.on('dragstart', this.handleDragStart);
        hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
        hitDragging.emitter.on('dragend', this.handleDragEnd);
        this.suppliedDragMeta = suppliedDragMeta;
    }
    buildDragMeta(subjectEl) {
        if (typeof this.suppliedDragMeta === 'object') {
            return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bH)(this.suppliedDragMeta);
        }
        if (typeof this.suppliedDragMeta === 'function') {
            return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bH)(this.suppliedDragMeta(subjectEl));
        }
        return getDragMetaFromEl(subjectEl);
    }
    displayDrag(nextContext, state) {
        let prevContext = this.receivingContext;
        if (prevContext && prevContext !== nextContext) {
            prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
        if (nextContext) {
            nextContext.dispatch({ type: 'SET_EVENT_DRAG', state });
        }
    }
    clearDrag() {
        if (this.receivingContext) {
            this.receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
    }
    canDropElOnCalendar(el, receivingContext) {
        let dropAccept = receivingContext.options.dropAccept;
        if (typeof dropAccept === 'function') {
            return dropAccept.call(receivingContext.calendarApi, el);
        }
        if (typeof dropAccept === 'string' && dropAccept) {
            return Boolean((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aO)(el, dropAccept));
        }
        return true;
    }
}
// Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------
function computeEventForDateSpan(dateSpan, dragMeta, context) {
    let defProps = Object.assign({}, dragMeta.leftoverProps);
    for (let transform of context.pluginHooks.externalDefTransforms) {
        Object.assign(defProps, transform(dateSpan, dragMeta));
    }
    let { refined, extra } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.aj)(defProps, context);
    let def = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ai)(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration), // hasEnd
    context);
    let start = dateSpan.range.start;
    // only rely on time info if drop zone is all-day,
    // otherwise, we already know the time
    if (dateSpan.allDay && dragMeta.startTime) {
        start = context.dateEnv.add(start, dragMeta.startTime);
    }
    let end = dragMeta.duration ?
        context.dateEnv.add(start, dragMeta.duration) :
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cs)(dateSpan.allDay, start, context);
    let instance = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ah)(def.defId, { start, end });
    return { def, instance };
}
// Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------
function getDragMetaFromEl(el) {
    let str = getEmbeddedElData(el, 'event');
    let obj = str ?
        JSON.parse(str) :
        { create: false }; // if no embedded data, assume no event creation
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bH)(obj);
}
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bG.dataAttrPrefix = '';
function getEmbeddedElData(el, name) {
    let prefix = _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bG.dataAttrPrefix;
    let prefixedName = (prefix ? prefix + '-' : '') + name;
    return el.getAttribute('data-' + prefixedName) || '';
}

/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/
class ExternalDraggable {
    constructor(el, settings = {}) {
        this.handlePointerDown = (ev) => {
            let { dragging } = this;
            let { minDistance, longPressDelay } = this.settings;
            dragging.minDistance =
                minDistance != null ?
                    minDistance :
                    (ev.isTouch ? 0 : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.e.eventDragMinDistance);
            dragging.delay =
                ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
                    (longPressDelay != null ? longPressDelay : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.e.longPressDelay) :
                    0;
        };
        this.handleDragStart = (ev) => {
            if (ev.isTouch &&
                this.dragging.delay &&
                ev.subjectEl.classList.contains('fc-event')) {
                this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
            }
        };
        this.settings = settings;
        let dragging = this.dragging = new FeaturefulElementDragging(el);
        dragging.touchScrollAllowed = false;
        if (settings.itemSelector != null) {
            dragging.pointer.selector = settings.itemSelector;
        }
        if (settings.appendTo != null) {
            dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
        }
        dragging.emitter.on('pointerdown', this.handlePointerDown);
        dragging.emitter.on('dragstart', this.handleDragStart);
        new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
    }
    destroy() {
        this.dragging.destroy();
    }
}

/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/
class InferredElementDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bF {
    constructor(containerEl) {
        super(containerEl);
        this.shouldIgnoreMove = false;
        this.mirrorSelector = '';
        this.currentMirrorEl = null;
        this.handlePointerDown = (ev) => {
            this.emitter.trigger('pointerdown', ev);
            if (!this.shouldIgnoreMove) {
                // fire dragstart right away. does not support delay or min-distance
                this.emitter.trigger('dragstart', ev);
            }
        };
        this.handlePointerMove = (ev) => {
            if (!this.shouldIgnoreMove) {
                this.emitter.trigger('dragmove', ev);
            }
        };
        this.handlePointerUp = (ev) => {
            this.emitter.trigger('pointerup', ev);
            if (!this.shouldIgnoreMove) {
                // fire dragend right away. does not support a revert animation
                this.emitter.trigger('dragend', ev);
            }
        };
        let pointer = this.pointer = new PointerDragging(containerEl);
        pointer.emitter.on('pointerdown', this.handlePointerDown);
        pointer.emitter.on('pointermove', this.handlePointerMove);
        pointer.emitter.on('pointerup', this.handlePointerUp);
    }
    destroy() {
        this.pointer.destroy();
    }
    setIgnoreMove(bool) {
        this.shouldIgnoreMove = bool;
    }
    setMirrorIsVisible(bool) {
        if (bool) {
            // restore a previously hidden element.
            // use the reference in case the selector class has already been removed.
            if (this.currentMirrorEl) {
                this.currentMirrorEl.style.visibility = '';
                this.currentMirrorEl = null;
            }
        }
        else {
            let mirrorEl = this.mirrorSelector
                // TODO: somehow query FullCalendars WITHIN shadow-roots
                ? document.querySelector(this.mirrorSelector)
                : null;
            if (mirrorEl) {
                this.currentMirrorEl = mirrorEl;
                mirrorEl.style.visibility = 'hidden';
            }
        }
    }
}

/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/
class ThirdPartyDraggable {
    constructor(containerOrSettings, settings) {
        let containerEl = document;
        if (
        // wish we could just test instanceof EventTarget, but doesn't work in IE11
        containerOrSettings === document ||
            containerOrSettings instanceof Element) {
            containerEl = containerOrSettings;
            settings = settings || {};
        }
        else {
            settings = (containerOrSettings || {});
        }
        let dragging = this.dragging = new InferredElementDragging(containerEl);
        if (typeof settings.itemSelector === 'string') {
            dragging.pointer.selector = settings.itemSelector;
        }
        else if (containerEl === document) {
            dragging.pointer.selector = '[data-event]';
        }
        if (typeof settings.mirrorSelector === 'string') {
            dragging.mirrorSelector = settings.mirrorSelector;
        }
        let externalDragging = new ExternalElementDragging(dragging, settings.eventData);
        // The hit-detection system requires that the dnd-mirror-element be pointer-events:none,
        // but this can't be guaranteed for third-party draggables, so disable
        externalDragging.hitDragging.disablePointCheck = true;
    }
    destroy() {
        this.dragging.destroy();
    }
}

var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/interaction',
    componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
    calendarInteractions: [UnselectAuto],
    elementDraggingImpl: FeaturefulElementDragging,
    optionRefiners: OPTION_REFINERS,
    listenerRefiners: LISTENER_REFINERS,
});




/***/ },

/***/ 315
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(316);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);





const OPTION_REFINERS = {
    listDayFormat: createFalsableFormatter,
    listDaySideFormat: createFalsableFormatter,
    noEventsClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    noEventsContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    noEventsDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    noEventsWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
    return input === false ? null : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.x)(input);
}

var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/list',
    optionRefiners: OPTION_REFINERS,
    views: {
        list: {
            component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.ListView,
            buttonTextKey: 'list',
            listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' }, // like "January 1, 2016"
        },
        listDay: {
            type: 'list',
            duration: { days: 1 },
            listDayFormat: { weekday: 'long' }, // day-of-week is all we need. full date is probably in headerToolbar
        },
        listWeek: {
            type: 'list',
            duration: { weeks: 1 },
            listDayFormat: { weekday: 'long' },
            listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        },
        listMonth: {
            type: 'list',
            duration: { month: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
        listYear: {
            type: 'list',
            duration: { year: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
    },
});




/***/ },

/***/ 316
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListView: () => (/* binding */ ListView)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);



class ListViewHeaderRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.state = {
            textId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a3)(),
        };
    }
    render() {
        let { theme, dateEnv, options, viewApi } = this.context;
        let { cellId, dayDate, todayRange } = this.props;
        let { textId } = this.state;
        let dayMeta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aY)(dayDate, todayRange);
        // will ever be falsy?
        let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
        // will ever be falsy? also, BAD NAME "alt"
        let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
        let renderProps = Object.assign({ date: dateEnv.toDate(dayDate), view: viewApi, textId,
            text,
            sideText, navLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(this.context, dayDate), sideNavLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(this.context, dayDate, 'day', false) }, dayMeta);
        // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "tr", elClasses: [
                'fc-list-day',
                ...(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aX)(dayMeta, theme),
            ], elAttrs: {
                'data-date': (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(dayDate),
            }, renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInnerContent, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => ( // TODO: force-hide top border based on :first-child
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: [
                    'fc-list-day-cushion',
                    theme.getClass('tableCellShaded'),
                ] })))));
    }
}
function renderInnerContent(props) {
    return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        props.text && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text)),
        props.sideText && ( /* not keyboard tabbable */(0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText))));
}

const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: 'short',
});
class ListViewEventRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props, context } = this;
        let { options } = context;
        let { seg, timeHeaderId, eventHeaderId, dateHeaderId } = props;
        let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck, Object.assign({}, props, { elTag: "tr", elClasses: [
                'fc-list-event',
                seg.eventRange.def.url && 'fc-event-forced-url',
            ], defaultGenerator: () => renderEventInnerContent(seg, context) /* weird */, seg: seg, timeText: "", disableDragging: true, disableResizing: true }), (InnerContent, eventContentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { "aria-hidden": true, className: "fc-list-event-graphic" },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-list-event-dot", style: {
                        borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor,
                    } })),
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "td", elClasses: ['fc-list-event-title'], elAttrs: { headers: `${eventHeaderId} ${dateHeaderId}` } })))));
    }
}
function renderEventInnerContent(seg, context) {
    let interactiveAttrs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, context);
    return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title));
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
    let { options } = context;
    if (options.displayEventTime !== false) {
        let eventDef = seg.eventRange.def;
        let eventInstance = seg.eventRange.instance;
        let doAllDay = false;
        let timeText;
        if (eventDef.allDay) {
            doAllDay = true;
        }
        else if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)(seg.eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
            if (seg.isStart) {
                timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO)(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
            }
            else if (seg.isEnd) {
                timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO)(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
            }
            else {
                doAllDay = true;
            }
        }
        else {
            timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO)(seg, timeFormat, context);
        }
        if (doAllDay) {
            let renderProps = {
                text: context.options.allDayText,
                view: context.viewApi,
            };
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elClasses: ['fc-list-event-time'], elAttrs: {
                    headers: `${timeHeaderId} ${dateHeaderId}`,
                }, renderProps: renderProps, generatorName: "allDayContent", customGenerator: options.allDayContent, defaultGenerator: renderAllDayInner, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }));
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: "fc-list-event-time" }, timeText));
    }
    return null;
}
function renderAllDayInner(renderProps) {
    return renderProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
class ListView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.computeDateVars = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(computeDateVars);
        this.eventStoreToSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this._eventStoreToSegs);
        this.state = {
            timeHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a3)(),
            eventHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a3)(),
            dateHeaderIdRoot: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a3)(),
        };
        this.setRootEl = (rootEl) => {
            if (rootEl) {
                this.context.registerInteractiveComponent(this, {
                    el: rootEl,
                });
            }
            else {
                this.context.unregisterInteractiveComponent(this);
            }
        };
    }
    render() {
        let { props, context } = this;
        let { dayDates, dayRanges } = this.computeDateVars(props.dateProfile);
        let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, { elRef: this.setRootEl, elClasses: [
                'fc-list',
                context.theme.getClass('table'),
                context.options.stickyHeaderDates !== false ?
                    'fc-list-sticky' :
                    '',
            ], viewSpec: context.viewSpec },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cb, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? 'visible' : 'hidden', overflowY: props.isHeightAuto ? 'visible' : 'auto' }, eventSegs.length > 0 ?
                this.renderSegList(eventSegs, dayDates) :
                this.renderEmptyMessage())));
    }
    renderEmptyMessage() {
        let { options, viewApi } = this.context;
        let renderProps = {
            text: options.noEventsText,
            view: viewApi,
        };
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "div", elClasses: ['fc-list-empty'], renderProps: renderProps, generatorName: "noEventsContent", customGenerator: options.noEventsContent, defaultGenerator: renderNoEventsInner, classNameGenerator: options.noEventsClassNames, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: ['fc-list-empty-cushion'] }))));
    }
    renderSegList(allSegs, dayDates) {
        let { theme, options } = this.context;
        let { timeHeaderId, eventHeaderId, dateHeaderIdRoot } = this.state;
        let segsByDay = groupSegsByDay(allSegs); // sparse array
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a6, { unit: "day" }, (nowDate, todayRange) => {
            let innerNodes = [];
            for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                let daySegs = segsByDay[dayIndex];
                if (daySegs) { // sparse array, so might be undefined
                    let dayStr = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(dayDates[dayIndex]);
                    let dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
                    // append a day header
                    innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                    daySegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bP)(daySegs, options.eventOrder);
                    for (let seg of daySegs) {
                        innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewEventRow, Object.assign({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId: timeHeaderId, eventHeaderId: eventHeaderId, dateHeaderId: dateHeaderId }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, todayRange, nowDate))));
                    }
                }
            }
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { className: 'fc-list-table ' + theme.getClass('table') },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("thead", null,
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null,
                        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", id: timeHeaderId }, options.timeHint),
                        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", "aria-hidden": true }),
                        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", id: eventHeaderId }, options.eventHint))),
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, innerNodes)));
        }));
    }
    _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
        return this.eventRangesToSegs((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ad)(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
    }
    eventRangesToSegs(eventRanges, dayRanges) {
        let segs = [];
        for (let eventRange of eventRanges) {
            segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
        }
        return segs;
    }
    eventRangeToSegs(eventRange, dayRanges) {
        let { dateEnv } = this.context;
        let { nextDayThreshold } = this.context.options;
        let range = eventRange.range;
        let allDay = eventRange.def.allDay;
        let dayIndex;
        let segRange;
        let seg;
        let segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
            segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(range, dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    component: this,
                    eventRange,
                    start: segRange.start,
                    end: segRange.end,
                    isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                    dayIndex,
                };
                segs.push(seg);
                // detect when range won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !allDay &&
                    dayIndex + 1 < dayRanges.length &&
                    range.end <
                        dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                    seg.end = range.end;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    }
}
function renderNoEventsInner(renderProps) {
    return renderProps.text;
}
function computeDateVars(dateProfile) {
    let dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(dateProfile.renderRange.start);
    let viewEnd = dateProfile.renderRange.end;
    let dayDates = [];
    let dayRanges = [];
    while (dayStart < viewEnd) {
        dayDates.push(dayStart);
        dayRanges.push({
            start: dayStart,
            end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayStart, 1),
        });
        dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayStart, 1);
    }
    return { dayDates, dayRanges };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
    let segsByDay = []; // sparse array
    let i;
    let seg;
    for (i = 0; i < segs.length; i += 1) {
        seg = segs[i];
        (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
            .push(seg);
    }
    return segsByDay;
}

var css_248z = ":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct)(css_248z);




/***/ },

/***/ 320
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(145);




const UPGRADE_WINDOW = 365 + 7; // days. 1 week leeway, for tz shift reasons too
const INVALID_LICENSE_URL = 'https://fullcalendar.io/docs/schedulerLicenseKey#invalid';
const OUTDATED_LICENSE_URL = 'https://fullcalendar.io/docs/schedulerLicenseKey#outdated';
const PRESET_LICENSE_KEYS = [
    'GPL-My-Project-Is-Open-Source',
    'CC-Attribution-NonCommercial-NoDerivatives',
];
const CSS = {
    position: 'absolute',
    zIndex: 99999,
    bottom: '1px',
    left: '1px',
    background: '#eee',
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: '1px 1px 0 0',
    padding: '2px 4px',
    fontSize: '12px',
    borderTopRightRadius: '3px',
};
function buildLicenseWarning(context) {
    let key = context.options.schedulerLicenseKey;
    let currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    if (!isImmuneUrl(currentUrl)) {
        let status = processLicenseKey(key, context.pluginHooks.premiumReleaseDate);
        if (status !== 'valid') {
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", { className: "fc-license-message", style: CSS }, (status === 'outdated') ? ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_2__.Fragment, null,
                'Your license key is too old to work with this version. ',
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", { href: OUTDATED_LICENSE_URL }, "More Info"))) : ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_2__.Fragment, null,
                'Your license key is invalid. ',
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", { href: INVALID_LICENSE_URL }, "More Info")))));
        }
    }
    return null;
}
/*
This decryption is not meant to be bulletproof. Just a way to remind about an upgrade.
*/
function processLicenseKey(key, premiumReleaseDate) {
    if (PRESET_LICENSE_KEYS.indexOf(key) !== -1) {
        return 'valid';
    }
    const parts = (key || '').match(/^(\d+)-fcs-(\d+)$/);
    if (parts && (parts[1].length === 10)) {
        const purchaseDate = new Date(parseInt(parts[2], 10) * 1000);
        const releaseDate = _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bG.mockSchedulerReleaseDate || premiumReleaseDate;
        if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bk)(releaseDate)) { // token won't be replaced in dev mode
            const minPurchaseDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.t)(releaseDate, -UPGRADE_WINDOW);
            if (minPurchaseDate < purchaseDate) {
                return 'valid';
            }
            return 'outdated';
        }
    }
    return 'invalid';
}
function isImmuneUrl(url) {
    return /\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(url);
}

const OPTION_REFINERS = {
    schedulerLicenseKey: String,
};

var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/premium-common',
    premiumReleaseDate: '2026-06-18',
    optionRefiners: OPTION_REFINERS,
    viewContainerAppends: [buildLicenseWarning],
});




/***/ },

/***/ 319
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _fullcalendar_premium_common_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _fullcalendar_timeline_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _fullcalendar_resource_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(324);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(326);
/* harmony import */ var _fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(327);











var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/resource-timeline',
    premiumReleaseDate: '2026-06-18',
    deps: [
        _fullcalendar_premium_common_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        _fullcalendar_resource_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        _fullcalendar_timeline_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    ],
    initialView: 'resourceTimelineDay',
    views: {
        resourceTimeline: {
            type: 'timeline',
            component: _internal_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTimelineView,
            needsResourceData: true,
            resourceAreaWidth: '30%',
            resourcesInitiallyExpanded: true,
            eventResizableFromStart: true, // TODO: not DRY with this same setting in the main timeline config
        },
        resourceTimelineDay: {
            type: 'resourceTimeline',
            duration: { days: 1 },
        },
        resourceTimelineWeek: {
            type: 'resourceTimeline',
            duration: { weeks: 1 },
        },
        resourceTimelineMonth: {
            type: 'resourceTimeline',
            duration: { months: 1 },
        },
        resourceTimelineYear: {
            type: 'resourceTimeline',
            duration: { years: 1 },
        },
    },
});




/***/ },

/***/ 326
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceTimelineLane: () => (/* binding */ ResourceTimelineLane),
/* harmony export */   ResourceTimelineView: () => (/* binding */ ResourceTimelineView),
/* harmony export */   SpreadsheetRow: () => (/* binding */ SpreadsheetRow)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony import */ var _fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(322);
/* harmony import */ var _fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(327);
/* harmony import */ var _fullcalendar_resource_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _fullcalendar_scrollgrid_internal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(323);







/*
Renders the DOM responsible for the subrow expander area,
as well as the space before it (used to align expanders of similar depths)
*/
function ExpanderIcon({ depth, hasChildren, isExpanded, onExpanderClick }) {
    let nodes = [];
    for (let i = 0; i < depth; i += 1) {
        nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-icon" }));
    }
    let iconClassNames = ['fc-icon'];
    if (hasChildren) {
        if (isExpanded) {
            iconClassNames.push('fc-icon-minus-square');
        }
        else {
            iconClassNames.push('fc-icon-plus-square');
        }
    }
    nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: 'fc-datagrid-expander' + (hasChildren ? '' : ' fc-datagrid-expander-placeholder'), onClick: onExpanderClick },
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: iconClassNames.join(' ') })));
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, ...nodes);
}

// worth making a PureComponent? (because of innerHeight)
class SpreadsheetIndividualCell extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.refineRenderProps = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.A)(refineRenderProps);
        this.onExpanderClick = (ev) => {
            let { props } = this;
            if (props.hasChildren) {
                this.context.dispatch({
                    type: 'SET_RESOURCE_ENTITY_EXPANDED',
                    id: props.resource.id,
                    isExpanded: !props.isExpanded,
                });
            }
        };
    }
    render() {
        let { props, context } = this;
        let { colSpec } = props;
        let renderProps = this.refineRenderProps({
            resource: props.resource,
            fieldValue: props.fieldValue,
            context,
        });
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elClasses: [
                'fc-datagrid-cell',
                'fc-resource',
            ], elAttrs: {
                role: 'gridcell',
                'data-resource-id': props.resource.id,
            }, renderProps: renderProps, generatorName: colSpec.isMain ? 'resourceLabelContent' : undefined, customGenerator: colSpec.cellContent, defaultGenerator: renderResourceInner, classNameGenerator: colSpec.cellClassNames, didMount: colSpec.cellDidMount, willUnmount: colSpec.cellWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-frame", style: { height: props.innerHeight } },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner" },
                colSpec.isMain && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ExpanderIcon, { depth: props.depth, hasChildren: props.hasChildren, isExpanded: props.isExpanded, onExpanderClick: this.onExpanderClick })),
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "span", elClasses: ['fc-datagrid-cell-main'] }))))));
    }
}
function renderResourceInner(renderProps) {
    return renderProps.fieldValue || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0");
}
function refineRenderProps(input) {
    return {
        resource: new _fullcalendar_resource_index_js__WEBPACK_IMPORTED_MODULE_4__.ResourceApi(input.context, input.resource),
        fieldValue: input.fieldValue,
        view: input.context.viewApi,
    };
}

// for VERTICAL cell grouping, in spreadsheet area
class SpreadsheetGroupCell extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props, context } = this;
        let { colSpec } = props;
        let renderProps = {
            groupValue: props.fieldValue,
            view: context.viewApi,
        };
        // a grouped cell. no data that is specific to this specific resource
        // `colSpec` is for the group. a GroupSpec :(
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elClasses: [
                'fc-datagrid-cell',
                'fc-resource-group',
            ], elAttrs: {
                role: 'gridcell',
                rowSpan: props.rowSpan,
            }, renderProps: renderProps, generatorName: "resourceGroupLabelContent", customGenerator: colSpec.cellContent, defaultGenerator: renderGroupInner, classNameGenerator: colSpec.cellClassNames, didMount: colSpec.cellDidMount, willUnmount: colSpec.cellWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-frame fc-datagrid-cell-frame-liquid" },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: ['fc-datagrid-cell-cushion', 'fc-sticky'] })))));
    }
}
function renderGroupInner(renderProps) {
    return renderProps.groupValue || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0");
}

class SpreadsheetRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props } = this;
        let { resource, rowSpans, depth } = props;
        let resourceFields = (0,_fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_3__.buildResourceFields)(resource); // slightly inefficient. already done up the call stack
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "row" }, props.colSpecs.map((colSpec, i) => {
            let rowSpan = rowSpans[i];
            if (rowSpan === 0) { // not responsible for group-based rows. VRowGroup is
                return null;
            }
            if (rowSpan == null) {
                rowSpan = 1;
            }
            let fieldValue = colSpec.field ? resourceFields[colSpec.field] :
                (resource.title || (0,_fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_3__.getPublicId)(resource.id));
            if (rowSpan > 1) {
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(SpreadsheetGroupCell, { key: i, colSpec: colSpec, fieldValue: fieldValue, rowSpan: rowSpan }));
            }
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(SpreadsheetIndividualCell, { key: i, colSpec: colSpec, resource: resource, fieldValue: fieldValue, depth: depth, hasChildren: props.hasChildren, isExpanded: props.isExpanded, innerHeight: props.innerHeight }));
        })));
    }
}
SpreadsheetRow.addPropsEquality({
    rowSpans: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.i,
});

// for HORIZONTAL cell grouping, in spreadsheet area
class SpreadsheetGroupRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.innerInnerRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.onExpanderClick = () => {
            let { props } = this;
            this.context.dispatch({
                type: 'SET_RESOURCE_ENTITY_EXPANDED',
                id: props.id,
                isExpanded: !props.isExpanded,
            });
        };
    }
    render() {
        let { props, context } = this;
        let renderProps = { groupValue: props.group.value, view: context.viewApi };
        let spec = props.group.spec;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "row" },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "th", elClasses: [
                    'fc-datagrid-cell',
                    'fc-resource-group',
                    context.theme.getClass('tableCellShaded'),
                ], elAttrs: {
                    // ARIA TODO: not really a columnheader
                    // extremely tedious to make this aria-compliant,
                    // to assign multiple headers to each cell
                    // https://www.w3.org/WAI/tutorials/tables/multi-level/
                    role: 'columnheader',
                    scope: 'colgroup',
                    colSpan: props.spreadsheetColCnt,
                }, renderProps: renderProps, generatorName: "resourceGroupLabelContent", customGenerator: spec.labelContent, defaultGenerator: renderCellInner, classNameGenerator: spec.labelClassNames, didMount: spec.labelDidMount, willUnmount: spec.labelWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-frame", style: { height: props.innerHeight } },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner", ref: this.innerInnerRef },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ExpanderIcon, { depth: 0, hasChildren: true, isExpanded: props.isExpanded, onExpanderClick: this.onExpanderClick }),
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "span", elClasses: ['fc-datagrid-cell-main'] })))))));
    }
}
SpreadsheetGroupRow.addPropsEquality({
    group: _fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_3__.isGroupsEqual,
});
function renderCellInner(renderProps) {
    return renderProps.groupValue || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0");
}

const SPREADSHEET_COL_MIN_WIDTH = 20;
class SpreadsheetHeader extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.resizerElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd(this._handleColResizerEl.bind(this));
        this.colDraggings = {};
    }
    render() {
        let { colSpecs, superHeaderRendering, rowInnerHeights } = this.props;
        let renderProps = { view: this.context.viewApi };
        let rowNodes = [];
        rowInnerHeights = rowInnerHeights.slice(); // copy, because we're gonna pop
        if (superHeaderRendering) {
            let rowInnerHeight = rowInnerHeights.shift();
            rowNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: "row-super", role: "row" },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "th", elClasses: [
                        'fc-datagrid-cell',
                        'fc-datagrid-cell-super',
                    ], elAttrs: {
                        role: 'columnheader',
                        scope: 'colgroup',
                        colSpan: colSpecs.length,
                    }, renderProps: renderProps, generatorName: "resourceAreaHeaderContent", customGenerator: superHeaderRendering.headerContent, defaultGenerator: superHeaderRendering.headerDefault, classNameGenerator: superHeaderRendering.headerClassNames, didMount: superHeaderRendering.headerDidMount, willUnmount: superHeaderRendering.headerWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-frame", style: { height: rowInnerHeight } },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: ['fc-datagrid-cell-cushion', 'fc-scrollgrid-sync-inner'] }))))));
        }
        let rowInnerHeight = rowInnerHeights.shift();
        rowNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: "row", role: "row" }, colSpecs.map((colSpec, i) => {
            let isLastCol = i === (colSpecs.length - 1);
            // need empty inner div for abs positioning for resizer
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { key: i, elTag: "th", elClasses: ['fc-datagrid-cell'], elAttrs: { role: 'columnheader' }, renderProps: renderProps, generatorName: "resourceAreaHeaderContent", customGenerator: colSpec.headerContent, defaultGenerator: colSpec.headerDefault, classNameGenerator: colSpec.headerClassNames, didMount: colSpec.headerDidMount, willUnmount: colSpec.headerWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-frame", style: { height: rowInnerHeight } },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner" },
                    colSpec.isMain && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-datagrid-expander fc-datagrid-expander-placeholder" },
                        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-icon" }))),
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "span", elClasses: ['fc-datagrid-cell-main'] })),
                !isLastCol && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-datagrid-cell-resizer", ref: this.resizerElRefs.createRef(i) }))))));
        })));
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, rowNodes));
    }
    _handleColResizerEl(resizerEl, index) {
        let { colDraggings } = this;
        if (!resizerEl) {
            let dragging = colDraggings[index];
            if (dragging) {
                dragging.destroy();
                delete colDraggings[index];
            }
        }
        else {
            let dragging = this.initColResizing(resizerEl, parseInt(index, 10));
            if (dragging) {
                colDraggings[index] = dragging;
            }
        }
    }
    initColResizing(resizerEl, index) {
        let { pluginHooks, isRtl } = this.context;
        let { onColWidthChange } = this.props;
        let ElementDraggingImpl = pluginHooks.elementDraggingImpl;
        if (ElementDraggingImpl) {
            let dragging = new ElementDraggingImpl(resizerEl);
            let startWidth; // of just the single column
            let currentWidths; // of all columns
            dragging.emitter.on('dragstart', () => {
                let allCells = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aK)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z)(resizerEl, 'tr'), 'th');
                currentWidths = allCells.map((cellEl) => (cellEl.getBoundingClientRect().width));
                startWidth = currentWidths[index];
            });
            dragging.emitter.on('dragmove', (pev) => {
                currentWidths[index] = Math.max(startWidth + pev.deltaX * (isRtl ? -1 : 1), SPREADSHEET_COL_MIN_WIDTH);
                if (onColWidthChange) {
                    onColWidthChange(currentWidths.slice()); // send a copy since currentWidths continues to be mutated
                }
            });
            dragging.setAutoScrollEnabled(false); // because gets weird with auto-scrolling time area
            return dragging;
        }
        return null;
    }
}

class ResourceTimelineLane extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.refineRenderProps = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.A)(_fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_3__.refineRenderProps);
        this.handleHeightChange = (innerEl, isStable) => {
            if (this.props.onHeightChange) {
                this.props.onHeightChange(
                // would want to use own <tr> ref, but not guaranteed to be ready when this fires
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z)(innerEl, 'tr'), isStable);
            }
        };
    }
    render() {
        let { props, context } = this;
        let { options } = context;
        let renderProps = this.refineRenderProps({ resource: props.resource, context });
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: props.elRef },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elClasses: [
                    'fc-timeline-lane',
                    'fc-resource',
                ], elAttrs: {
                    'data-resource-id': props.resource.id,
                }, renderProps: renderProps, generatorName: "resourceLaneContent", customGenerator: options.resourceLaneContent, classNameGenerator: options.resourceLaneClassNames, didMount: options.resourceLaneDidMount, willUnmount: options.resourceLaneWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-lane-frame", style: { height: props.innerHeight } },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: ['fc-timeline-lane-misc'] }),
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLane, { dateProfile: props.dateProfile, tDateProfile: props.tDateProfile, nowDate: props.nowDate, todayRange: props.todayRange, nextDayThreshold: props.nextDayThreshold, businessHours: props.businessHours, eventStore: props.eventStore, eventUiBases: props.eventUiBases, dateSelection: props.dateSelection, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, timelineCoords: props.timelineCoords, onHeightChange: this.handleHeightChange, resourceId: props.resource.id })))))); // important NOT to do liquid-height. dont want to shrink height smaller than content
    }
}

/*
parallels the SpreadsheetGroupRow
*/
class DividerRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props, context } = this;
        let { renderHooks } = props;
        let renderProps = {
            groupValue: props.groupValue,
            view: context.viewApi,
        };
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: props.elRef },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elRef: props.elRef, elClasses: [
                    'fc-timeline-lane',
                    'fc-resource-group',
                    context.theme.getClass('tableCellShaded'),
                ], renderProps: renderProps, generatorName: "resourceGroupLaneContent", customGenerator: renderHooks.laneContent, classNameGenerator: renderHooks.laneClassNames, didMount: renderHooks.laneDidMount, willUnmount: renderHooks.laneWillUnmount }, (InnerContainer) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContainer, { elTag: "div", elStyle: { height: props.innerHeight } })))));
    }
}

class ResourceTimelineLanesBody extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props, context } = this;
        let { rowElRefs, innerHeights } = props;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.rowNodes.map((node, index) => {
            if (node.group) {
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DividerRow, { key: node.id, elRef: rowElRefs.createRef(node.id), groupValue: node.group.value, renderHooks: node.group.spec, innerHeight: innerHeights[index] || '' }));
            }
            if (node.resource) {
                let resource = node.resource;
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceTimelineLane, Object.assign({ key: node.id, elRef: rowElRefs.createRef(node.id) }, props.splitProps[resource.id], { resource: resource, dateProfile: props.dateProfile, tDateProfile: props.tDateProfile, nowDate: props.nowDate, todayRange: props.todayRange, nextDayThreshold: context.options.nextDayThreshold, businessHours: resource.businessHours || props.fallbackBusinessHours, innerHeight: innerHeights[index] || '', timelineCoords: props.slatCoords, onHeightChange: props.onRowHeightChange })));
            }
            return null;
        })));
    }
}

class ResourceTimelineLanes extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.rowElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd();
    }
    render() {
        let { props, context } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { ref: this.rootElRef, "aria-hidden": true, className: 'fc-scrollgrid-sync-table ' + context.theme.getClass('table'), style: {
                minWidth: props.tableMinWidth,
                width: props.clientWidth,
                height: props.minHeight,
            } },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceTimelineLanesBody, { rowElRefs: this.rowElRefs, rowNodes: props.rowNodes, dateProfile: props.dateProfile, tDateProfile: props.tDateProfile, nowDate: props.nowDate, todayRange: props.todayRange, splitProps: props.splitProps, fallbackBusinessHours: props.fallbackBusinessHours, slatCoords: props.slatCoords, innerHeights: props.innerHeights, onRowHeightChange: props.onRowHeightChange })));
    }
    componentDidMount() {
        this.updateCoords();
    }
    componentDidUpdate() {
        this.updateCoords();
    }
    componentWillUnmount() {
        if (this.props.onRowCoords) {
            this.props.onRowCoords(null);
        }
    }
    updateCoords() {
        let { props } = this;
        if (props.onRowCoords && props.clientWidth !== null) { // a populated clientWidth means sizing has stabilized
            this.props.onRowCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(this.rootElRef.current, collectRowEls(this.rowElRefs.currentMap, props.rowNodes), false, true));
        }
    }
}
function collectRowEls(elMap, rowNodes) {
    return rowNodes.map((rowNode) => elMap[rowNode.id]);
}

class ResourceTimelineGrid extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.computeHasResourceBusinessHours = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(computeHasResourceBusinessHours);
        this.resourceSplitter = new _fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_3__.ResourceSplitter(); // doesn't let it do businessHours tho
        this.bgSlicer = new _fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLaneSlicer();
        this.slatsRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)(); // needed for Hit creation :(
        this.state = {
            slatCoords: null,
        };
        this.handleEl = (el) => {
            if (el) {
                this.context.registerInteractiveComponent(this, { el });
            }
            else {
                this.context.unregisterInteractiveComponent(this);
            }
        };
        this.handleSlatCoords = (slatCoords) => {
            this.setState({ slatCoords });
            if (this.props.onSlatCoords) {
                this.props.onSlatCoords(slatCoords);
            }
        };
        this.handleRowCoords = (rowCoords) => {
            this.rowCoords = rowCoords;
            if (this.props.onRowCoords) {
                this.props.onRowCoords(rowCoords);
            }
        };
    }
    render() {
        let { props, state, context } = this;
        let { dateProfile, tDateProfile } = props;
        let { unit: timerUnit, value: timeUnitValue } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c)(tDateProfile.slotDuration);
        let hasResourceBusinessHours = this.computeHasResourceBusinessHours(props.rowNodes);
        let splitProps = this.resourceSplitter.splitProps(props);
        let bgLaneProps = splitProps[''];
        let bgSlicedProps = this.bgSlicer.sliceProps(bgLaneProps, dateProfile, tDateProfile.isTimeScale ? null : props.nextDayThreshold, context, // wish we didn't need to pass in the rest of these args...
        dateProfile, context.dateProfileGenerator, tDateProfile, context.dateEnv);
        // WORKAROUND: make ignore slatCoords when out of sync with dateProfile
        let slatCoords = state.slatCoords && state.slatCoords.dateProfile === props.dateProfile ? state.slatCoords : null;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: this.handleEl, className: [
                'fc-timeline-body',
                props.expandRows ? 'fc-timeline-body-expandrows' : '',
            ].join(' '), style: { minWidth: props.tableMinWidth } },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a6, { unit: timerUnit, unitValue: timeUnitValue }, (nowDate, todayRange) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__.TimelineSlats, { ref: this.slatsRef, dateProfile: dateProfile, tDateProfile: tDateProfile, nowDate: nowDate, todayRange: todayRange, clientWidth: props.clientWidth, tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, onCoords: this.handleSlatCoords, onScrollLeftRequest: props.onScrollLeftRequest }),
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLaneBg, { businessHourSegs: hasResourceBusinessHours ? null : bgSlicedProps.businessHourSegs, bgEventSegs: bgSlicedProps.bgEventSegs, timelineCoords: slatCoords, 
                    // empty array will result in unnecessary rerenders?
                    eventResizeSegs: (bgSlicedProps.eventResize ? bgSlicedProps.eventResize.segs : []), dateSelectionSegs: bgSlicedProps.dateSelectionSegs, nowDate: nowDate, todayRange: todayRange }),
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceTimelineLanes, { rowNodes: props.rowNodes, dateProfile: dateProfile, tDateProfile: props.tDateProfile, nowDate: nowDate, todayRange: todayRange, splitProps: splitProps, fallbackBusinessHours: hasResourceBusinessHours ? props.businessHours : null, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, innerHeights: props.rowInnerHeights, slatCoords: slatCoords, onRowCoords: this.handleRowCoords, onRowHeightChange: props.onRowHeightChange }),
                (context.options.nowIndicator && slatCoords && slatCoords.isDateInRange(nowDate)) && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-now-indicator-container" },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, { elClasses: ['fc-timeline-now-indicator-line'], elStyle: (0,_fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__.coordToCss)(slatCoords.dateToCoord(nowDate), context.isRtl), isAxis: false, date: nowDate }))))))));
    }
    // Hit System
    // ------------------------------------------------------------------------------------------
    queryHit(positionLeft, positionTop) {
        let rowCoords = this.rowCoords;
        let rowIndex = rowCoords.topToIndex(positionTop);
        if (rowIndex != null) {
            let resource = this.props.rowNodes[rowIndex].resource;
            if (resource) { // not a group
                let slatHit = this.slatsRef.current.positionToHit(positionLeft);
                if (slatHit) {
                    return {
                        dateProfile: this.props.dateProfile,
                        dateSpan: {
                            range: slatHit.dateSpan.range,
                            allDay: slatHit.dateSpan.allDay,
                            resourceId: resource.id,
                        },
                        rect: {
                            left: slatHit.left,
                            right: slatHit.right,
                            top: rowCoords.tops[rowIndex],
                            bottom: rowCoords.bottoms[rowIndex],
                        },
                        dayEl: slatHit.dayEl,
                        layer: 0,
                    };
                }
            }
        }
        return null;
    }
}
function computeHasResourceBusinessHours(rowNodes) {
    for (let node of rowNodes) {
        let resource = node.resource;
        if (resource && resource.businessHours) {
            return true;
        }
    }
    return false;
}

const MIN_RESOURCE_AREA_WIDTH = 30; // definitely bigger than scrollbars
// RENAME?
class ResourceTimelineViewLayout extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.scrollGridRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.timeBodyScrollerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.spreadsheetHeaderChunkElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.ensureScrollGridResizeId = 0;
        this.state = {
            resourceAreaWidthOverride: null,
        };
        /*
        ghetto debounce. don't race with ScrollGrid's resizing delay. solves #6140
        */
        this.ensureScrollGridResize = () => {
            if (this.ensureScrollGridResizeId) {
                clearTimeout(this.ensureScrollGridResizeId);
            }
            this.ensureScrollGridResizeId = setTimeout(() => {
                this.scrollGridRef.current.handleSizing(false);
            }, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG.SCROLLGRID_RESIZE_INTERVAL + 1);
        };
    }
    render() {
        let { props, state, context } = this;
        let { options } = context;
        let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca)(options);
        let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c9)(options);
        let sections = [
            {
                type: 'header',
                key: 'header',
                syncRowHeights: true,
                isSticky: stickyHeaderDates,
                chunks: [
                    {
                        key: 'datagrid',
                        elRef: this.spreadsheetHeaderChunkElRef,
                        // TODO: allow the content to specify this. have general-purpose 'content' with obj with keys
                        tableClassName: 'fc-datagrid-header',
                        rowContent: props.spreadsheetHeaderRows,
                    },
                    {
                        key: 'divider',
                        outerContent: ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { role: "presentation", className: 'fc-resource-timeline-divider ' + context.theme.getClass('tableCellShaded') })),
                    },
                    {
                        key: 'timeline',
                        content: props.timeHeaderContent,
                    },
                ],
            },
            {
                type: 'body',
                key: 'body',
                syncRowHeights: true,
                liquid: true,
                expandRows: Boolean(options.expandRows),
                chunks: [
                    {
                        key: 'datagrid',
                        tableClassName: 'fc-datagrid-body',
                        rowContent: props.spreadsheetBodyRows,
                    },
                    {
                        key: 'divider',
                        outerContent: ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { role: "presentation", className: 'fc-resource-timeline-divider ' + context.theme.getClass('tableCellShaded') })),
                    },
                    {
                        key: 'timeline',
                        scrollerElRef: this.timeBodyScrollerElRef,
                        content: props.timeBodyContent,
                    },
                ],
            },
        ];
        if (stickyFooterScrollbar) {
            sections.push({
                type: 'footer',
                key: 'footer',
                isSticky: true,
                chunks: [
                    {
                        key: 'datagrid',
                        content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c8,
                    },
                    {
                        key: 'divider',
                        outerContent: ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { role: "presentation", className: 'fc-resource-timeline-divider ' + context.theme.getClass('tableCellShaded') })),
                    },
                    {
                        key: 'timeline',
                        content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c8,
                    },
                ],
            });
        }
        let resourceAreaWidth = state.resourceAreaWidthOverride != null
            ? state.resourceAreaWidthOverride
            : options.resourceAreaWidth;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_scrollgrid_internal_js__WEBPACK_IMPORTED_MODULE_5__.ScrollGrid, { ref: this.scrollGridRef, elRef: this.rootElRef, liquid: !props.isHeightAuto && !props.forPrint, forPrint: props.forPrint, collapsibleWidth: false, colGroups: [
                { cols: props.spreadsheetCols, width: resourceAreaWidth },
                { cols: [] },
                { cols: props.timeCols },
            ], sections: sections }));
    }
    forceTimeScroll(left) {
        let scrollGrid = this.scrollGridRef.current;
        scrollGrid.forceScrollLeft(2, left); // 2 = the time area
    }
    forceResourceScroll(top) {
        let scrollGrid = this.scrollGridRef.current;
        scrollGrid.forceScrollTop(1, top); // 1 = the body
    }
    getResourceScroll() {
        let timeBodyScrollerEl = this.timeBodyScrollerElRef.current;
        return timeBodyScrollerEl.scrollTop;
    }
    // Resource Area Resizing
    // ------------------------------------------------------------------------------------------
    // NOTE: a callback Ref for the resizer was firing multiple times with same elements (Preact)
    // that's why we use spreadsheetResizerElRef instead
    componentDidMount() {
        this.initSpreadsheetResizing();
    }
    componentWillUnmount() {
        this.destroySpreadsheetResizing();
    }
    initSpreadsheetResizing() {
        let { isRtl, pluginHooks } = this.context;
        let ElementDraggingImpl = pluginHooks.elementDraggingImpl;
        let spreadsheetHeadEl = this.spreadsheetHeaderChunkElRef.current;
        if (ElementDraggingImpl) {
            let rootEl = this.rootElRef.current;
            let dragging = this.spreadsheetResizerDragging = new ElementDraggingImpl(rootEl, '.fc-resource-timeline-divider');
            let dragStartWidth;
            let viewWidth;
            dragging.emitter.on('dragstart', () => {
                dragStartWidth = spreadsheetHeadEl.getBoundingClientRect().width;
                viewWidth = rootEl.getBoundingClientRect().width;
            });
            dragging.emitter.on('dragmove', (pev) => {
                let newWidth = dragStartWidth + pev.deltaX * (isRtl ? -1 : 1);
                newWidth = Math.max(newWidth, MIN_RESOURCE_AREA_WIDTH);
                newWidth = Math.min(newWidth, viewWidth - MIN_RESOURCE_AREA_WIDTH);
                // scrollgrid will ignore resize requests if there are too many :|
                this.setState({
                    resourceAreaWidthOverride: newWidth,
                }, this.ensureScrollGridResize);
            });
            dragging.setAutoScrollEnabled(false); // because gets weird with auto-scrolling time area
        }
    }
    destroySpreadsheetResizing() {
        if (this.spreadsheetResizerDragging) {
            this.spreadsheetResizerDragging.destroy();
        }
    }
}

class ResourceTimelineView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(props, context) {
        super(props, context);
        this.processColOptions = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(processColOptions);
        this.buildTimelineDateProfile = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(_fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__.buildTimelineDateProfile);
        this.hasNesting = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(hasNesting);
        this.buildRowNodes = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(_fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_3__.buildRowNodes);
        this.layoutRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.rowNodes = [];
        this.renderedRowNodes = [];
        this.buildRowIndex = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildRowIndex);
        this.handleSlatCoords = (slatCoords) => {
            this.setState({ slatCoords });
        };
        this.handleRowCoords = (rowCoords) => {
            this.rowCoords = rowCoords;
            this.scrollResponder.update(false); // TODO: could eliminate this if rowCoords lived in state
        };
        this.handleMaxCushionWidth = (slotCushionMaxWidth) => {
            this.setState({
                slotCushionMaxWidth: Math.ceil(slotCushionMaxWidth), // for less rerendering TODO: DRY
            });
        };
        // Scrolling
        // ------------------------------------------------------------------------------------------------------------------
        // this is useful for scrolling prev/next dates while resource is scrolled down
        this.handleScrollLeftRequest = (scrollLeft) => {
            let layout = this.layoutRef.current;
            layout.forceTimeScroll(scrollLeft);
        };
        this.handleScrollRequest = (request) => {
            let { rowCoords } = this;
            let layout = this.layoutRef.current;
            let rowId = request.rowId || request.resourceId;
            if (rowCoords) {
                if (rowId) {
                    let rowIdToIndex = this.buildRowIndex(this.renderedRowNodes);
                    let index = rowIdToIndex[rowId];
                    if (index != null) {
                        let scrollTop = (request.fromBottom != null ?
                            rowCoords.bottoms[index] - request.fromBottom : // pixels from bottom edge
                            rowCoords.tops[index] // just use top edge
                        );
                        layout.forceResourceScroll(scrollTop);
                    }
                }
                return true;
            }
            return null;
        };
        // Resource INDIVIDUAL-Column Area Resizing
        // ------------------------------------------------------------------------------------------
        this.handleColWidthChange = (colWidths) => {
            this.setState({
                spreadsheetColWidths: colWidths,
            });
        };
        this.state = {
            resourceAreaWidth: context.options.resourceAreaWidth,
            spreadsheetColWidths: [],
        };
    }
    render() {
        let { props, state, context } = this;
        let { options, viewSpec } = context;
        let { superHeaderRendering, groupSpecs, orderSpecs, isVGrouping, colSpecs } = this.processColOptions(context.options);
        let tDateProfile = this.buildTimelineDateProfile(props.dateProfile, context.dateEnv, options, context.dateProfileGenerator);
        let rowNodes = this.rowNodes = this.buildRowNodes(props.resourceStore, groupSpecs, orderSpecs, isVGrouping, props.resourceEntityExpansions, options.resourcesInitiallyExpanded);
        let { slotMinWidth } = options;
        let slatCols = (0,_fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__.buildSlatCols)(tDateProfile, slotMinWidth || this.computeFallbackSlotMinWidth(tDateProfile));
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, { elClasses: [
                'fc-resource-timeline',
                !this.hasNesting(rowNodes) && 'fc-resource-timeline-flat',
                'fc-timeline',
                options.eventOverlap === false ?
                    'fc-timeline-overlap-disabled' :
                    'fc-timeline-overlap-enabled',
            ], viewSpec: viewSpec },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceTimelineViewLayout, { ref: this.layoutRef, forPrint: props.forPrint, isHeightAuto: props.isHeightAuto, spreadsheetCols: buildSpreadsheetCols(colSpecs, state.spreadsheetColWidths, ''), spreadsheetHeaderRows: (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(SpreadsheetHeader // TODO: rename to SpreadsheetHeaderRows
                , { superHeaderRendering: superHeaderRendering, colSpecs: colSpecs, onColWidthChange: this.handleColWidthChange, rowInnerHeights: contentArg.rowSyncHeights })), spreadsheetBodyRows: (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, this.renderSpreadsheetRows(rowNodes, colSpecs, contentArg.rowSyncHeights))), timeCols: slatCols, timeHeaderContent: (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_timeline_internal_js__WEBPACK_IMPORTED_MODULE_2__.TimelineHeader, { clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, tableMinWidth: contentArg.tableMinWidth, tableColGroupNode: contentArg.tableColGroupNode, dateProfile: props.dateProfile, tDateProfile: tDateProfile, slatCoords: state.slatCoords, rowInnerHeights: contentArg.rowSyncHeights, onMaxCushionWidth: slotMinWidth ? null : this.handleMaxCushionWidth })), timeBodyContent: (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceTimelineGrid, { dateProfile: props.dateProfile, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, tableMinWidth: contentArg.tableMinWidth, tableColGroupNode: contentArg.tableColGroupNode, expandRows: contentArg.expandRows, tDateProfile: tDateProfile, rowNodes: rowNodes, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, resourceStore: props.resourceStore, nextDayThreshold: context.options.nextDayThreshold, rowInnerHeights: contentArg.rowSyncHeights, onSlatCoords: this.handleSlatCoords, onRowCoords: this.handleRowCoords, onScrollLeftRequest: this.handleScrollLeftRequest, onRowHeightChange: contentArg.reportRowHeightChange })) })));
    }
    renderSpreadsheetRows(nodes, colSpecs, rowSyncHeights) {
        return nodes.map((node, index) => {
            if (node.group) {
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(SpreadsheetGroupRow, { key: node.id, id: node.id, spreadsheetColCnt: colSpecs.length, isExpanded: node.isExpanded, group: node.group, innerHeight: rowSyncHeights[index] || '' }));
            }
            if (node.resource) {
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(SpreadsheetRow, { key: node.id, colSpecs: colSpecs, rowSpans: node.rowSpans, depth: node.depth, isExpanded: node.isExpanded, hasChildren: node.hasChildren, resource: node.resource, innerHeight: rowSyncHeights[index] || '' }));
            }
            return null;
        });
    }
    componentDidMount() {
        this.renderedRowNodes = this.rowNodes;
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    }
    getSnapshotBeforeUpdate() {
        if (!this.props.forPrint) { // because print-view is always zero?
            return { resourceScroll: this.queryResourceScroll() };
        }
        return {};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.renderedRowNodes = this.rowNodes;
        this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
        if (snapshot.resourceScroll) {
            this.handleScrollRequest(snapshot.resourceScroll); // TODO: this gets triggered too often
        }
    }
    componentWillUnmount() {
        this.scrollResponder.detach();
    }
    computeFallbackSlotMinWidth(tDateProfile) {
        return Math.max(30, ((this.state.slotCushionMaxWidth || 0) / tDateProfile.slotsPerLabel));
    }
    queryResourceScroll() {
        let { rowCoords, renderedRowNodes } = this;
        if (rowCoords) {
            let layout = this.layoutRef.current;
            let trBottoms = rowCoords.bottoms;
            let scrollTop = layout.getResourceScroll();
            let scroll = {};
            for (let i = 0; i < trBottoms.length; i += 1) {
                let rowNode = renderedRowNodes[i];
                let elBottom = trBottoms[i] - scrollTop; // from the top of the scroller
                if (elBottom > 0) {
                    scroll.rowId = rowNode.id;
                    scroll.fromBottom = elBottom;
                    break;
                }
            }
            return scroll;
        }
        return null;
    }
}
ResourceTimelineView.addStateEquality({
    spreadsheetColWidths: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.i,
});
function buildRowIndex(rowNodes) {
    let rowIdToIndex = {};
    for (let i = 0; i < rowNodes.length; i += 1) {
        rowIdToIndex[rowNodes[i].id] = i;
    }
    return rowIdToIndex;
}
function buildSpreadsheetCols(colSpecs, forcedWidths, fallbackWidth = '') {
    return colSpecs.map((colSpec, i) => ({
        className: colSpec.isMain ? 'fc-main-col' : '',
        width: forcedWidths[i] || colSpec.width || fallbackWidth,
    }));
}
function hasNesting(nodes) {
    for (let node of nodes) {
        if (node.group) {
            return true;
        }
        if (node.resource) {
            if (node.hasChildren) {
                return true;
            }
        }
    }
    return false;
}
function processColOptions(options) {
    let allColSpecs = options.resourceAreaColumns || [];
    let superHeaderRendering = null;
    if (!allColSpecs.length) {
        allColSpecs.push({
            headerClassNames: options.resourceAreaHeaderClassNames,
            headerContent: options.resourceAreaHeaderContent,
            headerDefault: () => 'Resources',
            headerDidMount: options.resourceAreaHeaderDidMount,
            headerWillUnmount: options.resourceAreaHeaderWillUnmount,
        });
    }
    else if (options.resourceAreaHeaderContent) { // weird way to determine if content
        superHeaderRendering = {
            headerClassNames: options.resourceAreaHeaderClassNames,
            headerContent: options.resourceAreaHeaderContent,
            headerDidMount: options.resourceAreaHeaderDidMount,
            headerWillUnmount: options.resourceAreaHeaderWillUnmount,
        };
    }
    let plainColSpecs = [];
    let groupColSpecs = []; // part of the colSpecs, but filtered out in order to put first
    let groupSpecs = [];
    let isVGrouping = false;
    for (let colSpec of allColSpecs) {
        if (colSpec.group) {
            groupColSpecs.push(Object.assign(Object.assign({}, colSpec), { cellClassNames: colSpec.cellClassNames || options.resourceGroupLabelClassNames, cellContent: colSpec.cellContent || options.resourceGroupLabelContent, cellDidMount: colSpec.cellDidMount || options.resourceGroupLabelDidMount, cellWillUnmount: colSpec.cellWillUnmount || options.resourceGroupLaneWillUnmount }));
        }
        else {
            plainColSpecs.push(colSpec);
        }
    }
    // BAD: mutates a user-supplied option
    let mainColSpec = plainColSpecs[0];
    mainColSpec.isMain = true;
    mainColSpec.cellClassNames = mainColSpec.cellClassNames || options.resourceLabelClassNames;
    mainColSpec.cellContent = mainColSpec.cellContent || options.resourceLabelContent;
    mainColSpec.cellDidMount = mainColSpec.cellDidMount || options.resourceLabelDidMount;
    mainColSpec.cellWillUnmount = mainColSpec.cellWillUnmount || options.resourceLabelWillUnmount;
    if (groupColSpecs.length) {
        groupSpecs = groupColSpecs;
        isVGrouping = true;
    }
    else {
        let hGroupField = options.resourceGroupField;
        if (hGroupField) {
            groupSpecs.push({
                field: hGroupField,
                labelClassNames: options.resourceGroupLabelClassNames,
                labelContent: options.resourceGroupLabelContent,
                labelDidMount: options.resourceGroupLabelDidMount,
                labelWillUnmount: options.resourceGroupLabelWillUnmount,
                laneClassNames: options.resourceGroupLaneClassNames,
                laneContent: options.resourceGroupLaneContent,
                laneDidMount: options.resourceGroupLaneDidMount,
                laneWillUnmount: options.resourceGroupLaneWillUnmount,
            });
        }
    }
    let allOrderSpecs = options.resourceOrder || _fullcalendar_resource_internal_js__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_RESOURCE_ORDER;
    let plainOrderSpecs = [];
    for (let orderSpec of allOrderSpecs) {
        let isGroup = false;
        for (let groupSpec of groupSpecs) {
            if (groupSpec.field === orderSpec.field) {
                groupSpec.order = orderSpec.order; // -1, 0, 1
                isGroup = true;
                break;
            }
        }
        if (!isGroup) {
            plainOrderSpecs.push(orderSpec);
        }
    }
    return {
        superHeaderRendering,
        isVGrouping,
        groupSpecs,
        colSpecs: groupColSpecs.concat(plainColSpecs),
        orderSpecs: plainOrderSpecs,
    };
}

var css_248z = ".fc .fc-resource-timeline-divider{cursor:col-resize;width:3px}.fc .fc-resource-group{font-weight:inherit;text-align:inherit}.fc .fc-resource-timeline .fc-resource-group:not([rowspan]){background:var(--fc-neutral-bg-color)}.fc .fc-timeline-lane-frame{position:relative}.fc .fc-timeline-overlap-enabled .fc-timeline-lane-frame .fc-timeline-events{box-sizing:content-box;padding-bottom:10px}.fc-timeline-body-expandrows td.fc-timeline-lane{position:relative}.fc-timeline-body-expandrows .fc-timeline-lane-frame{position:static}.fc-datagrid-cell-frame-liquid{height:100%}.fc-liquid-hack .fc-datagrid-cell-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-datagrid-header .fc-datagrid-cell-frame{align-items:center;display:flex;justify-content:flex-start;position:relative}.fc .fc-datagrid-cell-resizer{bottom:0;cursor:col-resize;position:absolute;top:0;width:5px;z-index:1}.fc .fc-datagrid-cell-cushion{overflow:hidden;padding:8px;white-space:nowrap}.fc .fc-datagrid-expander{cursor:pointer;opacity:.65}.fc .fc-datagrid-expander .fc-icon{display:inline-block;width:1em}.fc .fc-datagrid-expander-placeholder{cursor:auto}.fc .fc-resource-timeline-flat .fc-datagrid-expander-placeholder{display:none}.fc-direction-ltr .fc-datagrid-cell-resizer{right:-3px}.fc-direction-rtl .fc-datagrid-cell-resizer{left:-3px}.fc-direction-ltr .fc-datagrid-expander{margin-right:3px}.fc-direction-rtl .fc-datagrid-expander{margin-left:3px}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct)(css_248z);




/***/ },

/***/ 324
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceApi: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.R),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _fullcalendar_premium_common_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var _internal_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(325);







function massageEventDragMutation(eventMutation, hit0, hit1) {
    let resource0 = hit0.dateSpan.resourceId;
    let resource1 = hit1.dateSpan.resourceId;
    if (resource0 && resource1 &&
        resource0 !== resource1) {
        eventMutation.resourceMutation = {
            matchResourceId: resource0,
            setResourceId: resource1,
        };
    }
}
/*
TODO: all this would be much easier if we were using a hash!
*/
function applyEventDefMutation(eventDef, mutation, context) {
    let resourceMutation = mutation.resourceMutation;
    if (resourceMutation && computeResourceEditable(eventDef, context)) {
        let index = eventDef.resourceIds.indexOf(resourceMutation.matchResourceId);
        if (index !== -1) {
            let resourceIds = eventDef.resourceIds.slice(); // copy
            resourceIds.splice(index, 1); // remove
            if (resourceIds.indexOf(resourceMutation.setResourceId) === -1) { // not already in there
                resourceIds.push(resourceMutation.setResourceId); // add
            }
            eventDef.resourceIds = resourceIds;
        }
    }
}
/*
HACK
TODO: use EventUi system instead of this
*/
function computeResourceEditable(eventDef, context) {
    let { resourceEditable } = eventDef;
    if (resourceEditable == null) {
        let source = eventDef.sourceId && context.getCurrentData().eventSources[eventDef.sourceId];
        if (source) {
            resourceEditable = source.extendedProps.resourceEditable; // used the Source::extendedProps hack
        }
        if (resourceEditable == null) {
            resourceEditable = context.options.eventResourceEditable;
            if (resourceEditable == null) {
                resourceEditable = context.options.editable; // TODO: use defaults system instead
            }
        }
    }
    return resourceEditable;
}
function transformEventDrop(mutation, context) {
    let { resourceMutation } = mutation;
    if (resourceMutation) {
        let { calendarApi } = context;
        return {
            oldResource: calendarApi.getResourceById(resourceMutation.matchResourceId),
            newResource: calendarApi.getResourceById(resourceMutation.setResourceId),
        };
    }
    return {
        oldResource: null,
        newResource: null,
    };
}

class ResourceDataAdder {
    constructor() {
        this.filterResources = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.z)(filterResources);
    }
    transform(viewProps, calendarProps) {
        if (calendarProps.viewSpec.optionDefaults.needsResourceData) {
            return {
                resourceStore: this.filterResources(calendarProps.resourceStore, calendarProps.options.filterResourcesWithEvents, calendarProps.eventStore, calendarProps.dateProfile.activeRange),
                resourceEntityExpansions: calendarProps.resourceEntityExpansions,
            };
        }
        return null;
    }
}
function filterResources(resourceStore, doFilterResourcesWithEvents, eventStore, activeRange) {
    if (doFilterResourcesWithEvents) {
        let instancesInRange = filterEventInstancesInRange(eventStore.instances, activeRange);
        let hasEvents = computeHasEvents(instancesInRange, eventStore.defs);
        Object.assign(hasEvents, computeAncestorHasEvents(hasEvents, resourceStore));
        return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.h)(resourceStore, (resource, resourceId) => hasEvents[resourceId]);
    }
    return resourceStore;
}
function filterEventInstancesInRange(eventInstances, activeRange) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.h)(eventInstances, (eventInstance) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.b6)(eventInstance.range, activeRange));
}
function computeHasEvents(eventInstances, eventDefs) {
    let hasEvents = {};
    for (let instanceId in eventInstances) {
        let instance = eventInstances[instanceId];
        for (let resourceId of eventDefs[instance.defId].resourceIds) {
            hasEvents[resourceId] = true;
        }
    }
    return hasEvents;
}
/*
mark resources as having events if any of their ancestors have them
NOTE: resourceStore might not have all the resources that hasEvents{} has keyed
*/
function computeAncestorHasEvents(hasEvents, resourceStore) {
    let res = {};
    for (let resourceId in hasEvents) {
        let resource;
        while ((resource = resourceStore[resourceId])) {
            resourceId = resource.parentId; // now functioning as the parentId
            if (resourceId) {
                res[resourceId] = true;
            }
            else {
                break;
            }
        }
    }
    return res;
}
/*
for making sure events that have editable resources are always draggable in resource views
*/
function transformIsDraggable(val, eventDef, eventUi, context) {
    if (!val) {
        let state = context.getCurrentData();
        let viewSpec = state.viewSpecs[state.currentViewType];
        if (viewSpec.optionDefaults.needsResourceData) {
            if (computeResourceEditable(eventDef, context)) {
                return true;
            }
        }
    }
    return val;
}

// for when non-resource view should be given EventUi info (for event coloring/constraints based off of resource data)
class ResourceEventConfigAdder {
    constructor() {
        this.buildResourceEventUis = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.z)(buildResourceEventUis, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.E);
        this.injectResourceEventUis = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.z)(injectResourceEventUis);
    }
    transform(viewProps, calendarProps) {
        if (!calendarProps.viewSpec.optionDefaults.needsResourceData) {
            return {
                eventUiBases: this.injectResourceEventUis(viewProps.eventUiBases, viewProps.eventStore.defs, this.buildResourceEventUis(calendarProps.resourceStore)),
            };
        }
        return null;
    }
}
function buildResourceEventUis(resourceStore) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.a)(resourceStore, (resource) => resource.ui);
}
function injectResourceEventUis(eventUiBases, eventDefs, resourceEventUis) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.a)(eventUiBases, (eventUi, defId) => {
        if (defId) { // not the '' key
            return injectResourceEventUi(eventUi, eventDefs[defId], resourceEventUis);
        }
        return eventUi;
    });
}
function injectResourceEventUi(origEventUi, eventDef, resourceEventUis) {
    let parts = [];
    // first resource takes precedence, which fights with the ordering of combineEventUis, thus the unshifts
    for (let resourceId of eventDef.resourceIds) {
        if (resourceEventUis[resourceId]) {
            parts.unshift(resourceEventUis[resourceId]);
        }
    }
    parts.unshift(origEventUi);
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.aV)(parts);
}

let defs = []; // TODO: use plugin system
function registerResourceSourceDef(def) {
    defs.push(def);
}
function getResourceSourceDef(id) {
    return defs[id];
}
function getResourceSourceDefs() {
    return defs;
}

// TODO: make this a plugin-able parser
// TODO: success/failure
const RESOURCE_SOURCE_REFINERS = {
    id: String,
    // for array. TODO: move to resource-array
    resources: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    // for json feed. TODO: move to resource-json-feed
    url: String,
    method: String,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    extraParams: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
};
function parseResourceSource(input) {
    let inputObj;
    if (typeof input === 'string') {
        inputObj = { url: input };
    }
    else if (typeof input === 'function' || Array.isArray(input)) {
        inputObj = { resources: input };
    }
    else if (typeof input === 'object' && input) { // non-null object
        inputObj = input;
    }
    if (inputObj) {
        let { refined, extra } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.ag)(inputObj, RESOURCE_SOURCE_REFINERS);
        warnUnknownProps(extra);
        let metaRes = buildResourceSourceMeta(refined);
        if (metaRes) {
            return {
                _raw: input,
                sourceId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.g)(),
                sourceDefId: metaRes.sourceDefId,
                meta: metaRes.meta,
                publicId: refined.id || '',
                isFetching: false,
                latestFetchId: '',
                fetchRange: null,
            };
        }
    }
    return null;
}
function buildResourceSourceMeta(refined) {
    let defs = getResourceSourceDefs();
    for (let i = defs.length - 1; i >= 0; i -= 1) { // later-added plugins take precedence
        let def = defs[i];
        let meta = def.parseMeta(refined);
        if (meta) {
            return { meta, sourceDefId: i };
        }
    }
    return null;
}
function warnUnknownProps(props) {
    for (let propName in props) {
        console.warn(`Unknown resource prop '${propName}'`);
    }
}

function reduceResourceSource(source, action, context) {
    let { options, dateProfile } = context;
    if (!source || !action) {
        return createSource(options.initialResources || options.resources, dateProfile.activeRange, options.refetchResourcesOnNavigate, context);
    }
    switch (action.type) {
        case 'RESET_RESOURCE_SOURCE':
            return createSource(action.resourceSourceInput, dateProfile.activeRange, options.refetchResourcesOnNavigate, context);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'CHANGE_DATE':
        case 'CHANGE_VIEW_TYPE':
            return handleRangeChange(source, dateProfile.activeRange, options.refetchResourcesOnNavigate, context);
        case 'RECEIVE_RESOURCES':
        case 'RECEIVE_RESOURCE_ERROR':
            return receiveResponse(source, action.fetchId, action.fetchRange);
        case 'REFETCH_RESOURCES':
            return fetchSource(source, dateProfile.activeRange, context);
        default:
            return source;
    }
}
function createSource(input, activeRange, refetchResourcesOnNavigate, context) {
    if (input) {
        let source = parseResourceSource(input);
        source = fetchSource(source, refetchResourcesOnNavigate ? activeRange : null, context);
        return source;
    }
    return null;
}
function handleRangeChange(source, activeRange, refetchResourcesOnNavigate, context) {
    if (refetchResourcesOnNavigate &&
        !doesSourceIgnoreRange(source) &&
        (!source.fetchRange || !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.b5)(source.fetchRange, activeRange))) {
        return fetchSource(source, activeRange, context);
    }
    return source;
}
function doesSourceIgnoreRange(source) {
    return Boolean(getResourceSourceDef(source.sourceDefId).ignoreRange);
}
function fetchSource(source, fetchRange, context) {
    let sourceDef = getResourceSourceDef(source.sourceDefId);
    let fetchId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.g)();
    sourceDef.fetch({
        resourceSource: source,
        range: fetchRange,
        context,
    }, (res) => {
        context.dispatch({
            type: 'RECEIVE_RESOURCES',
            fetchId,
            fetchRange,
            rawResources: res.rawResources,
        });
    }, (error) => {
        context.dispatch({
            type: 'RECEIVE_RESOURCE_ERROR',
            fetchId,
            fetchRange,
            error,
        });
    });
    return Object.assign(Object.assign({}, source), { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(source, fetchId, fetchRange) {
    if (fetchId === source.latestFetchId) {
        return Object.assign(Object.assign({}, source), { isFetching: false, fetchRange });
    }
    return source;
}

function reduceResourceStore(store, action, source, context) {
    if (!store || !action) {
        return {};
    }
    switch (action.type) {
        case 'RECEIVE_RESOURCES':
            return receiveRawResources(store, action.rawResources, action.fetchId, source, context);
        case 'ADD_RESOURCE':
            return addResource(store, action.resourceHash);
        case 'REMOVE_RESOURCE':
            return removeResource(store, action.resourceId);
        case 'SET_RESOURCE_PROP':
            return setResourceProp(store, action.resourceId, action.propName, action.propValue);
        case 'SET_RESOURCE_EXTENDED_PROP':
            return setResourceExtendedProp(store, action.resourceId, action.propName, action.propValue);
        default:
            return store;
    }
}
function receiveRawResources(existingStore, inputs, fetchId, source, context) {
    if (source.latestFetchId === fetchId) {
        let nextStore = {};
        for (let input of inputs) {
            (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_3__.p)(input, '', nextStore, context);
        }
        return nextStore;
    }
    return existingStore;
}
function addResource(existingStore, additions) {
    // TODO: warn about duplicate IDs
    return Object.assign(Object.assign({}, existingStore), additions);
}
function removeResource(existingStore, resourceId) {
    let newStore = Object.assign({}, existingStore);
    delete newStore[resourceId];
    // promote children
    for (let childResourceId in newStore) { // a child, *maybe* but probably not
        if (newStore[childResourceId].parentId === resourceId) {
            newStore[childResourceId] = Object.assign(Object.assign({}, newStore[childResourceId]), { parentId: '' });
        }
    }
    return newStore;
}
function setResourceProp(existingStore, resourceId, name, value) {
    let existingResource = existingStore[resourceId];
    // TODO: sanitization
    if (existingResource) {
        return Object.assign(Object.assign({}, existingStore), { [resourceId]: Object.assign(Object.assign({}, existingResource), { [name]: value }) });
    }
    return existingStore;
}
function setResourceExtendedProp(existingStore, resourceId, name, value) {
    let existingResource = existingStore[resourceId];
    if (existingResource) {
        return Object.assign(Object.assign({}, existingStore), { [resourceId]: Object.assign(Object.assign({}, existingResource), { extendedProps: Object.assign(Object.assign({}, existingResource.extendedProps), { [name]: value }) }) });
    }
    return existingStore;
}

function reduceResourceEntityExpansions(expansions, action) {
    if (!expansions || !action) {
        return {};
    }
    switch (action.type) {
        case 'SET_RESOURCE_ENTITY_EXPANDED':
            return Object.assign(Object.assign({}, expansions), { [action.id]: action.isExpanded });
        default:
            return expansions;
    }
}

function reduceResources(state, action, context) {
    let resourceSource = reduceResourceSource(state && state.resourceSource, action, context);
    let resourceStore = reduceResourceStore(state && state.resourceStore, action, resourceSource, context);
    let resourceEntityExpansions = reduceResourceEntityExpansions(state && state.resourceEntityExpansions, action);
    return {
        resourceSource,
        resourceStore,
        resourceEntityExpansions,
    };
}

const EVENT_REFINERS = {
    resourceId: String,
    resourceIds: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceEditable: Boolean,
};
function generateEventDefResourceMembers(refined) {
    return {
        resourceIds: ensureStringArray(refined.resourceIds)
            .concat(refined.resourceId ? [refined.resourceId] : []),
        resourceEditable: refined.resourceEditable,
    };
}
function ensureStringArray(items) {
    return (items || []).map((item) => String(item));
}

function transformDateSelectionJoin(hit0, hit1) {
    let resourceId0 = hit0.dateSpan.resourceId;
    let resourceId1 = hit1.dateSpan.resourceId;
    if (resourceId0 && resourceId1) {
        return { resourceId: resourceId0 };
    }
    return null;
}

_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.a7.prototype.addResource = function (input, scrollTo = true) {
    let currentState = this.getCurrentData();
    let resourceHash;
    let resource;
    if (input instanceof _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.R) {
        resource = input._resource;
        resourceHash = { [resource.id]: resource };
    }
    else {
        resourceHash = {};
        resource = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_3__.p)(input, '', resourceHash, currentState);
    }
    this.dispatch({
        type: 'ADD_RESOURCE',
        resourceHash,
    });
    if (scrollTo) {
        // TODO: wait til dispatch completes somehow
        this.trigger('_scrollRequest', { resourceId: resource.id });
    }
    let resourceApi = new _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.R(currentState, resource);
    currentState.emitter.trigger('resourceAdd', {
        resource: resourceApi,
        revert: () => {
            this.dispatch({
                type: 'REMOVE_RESOURCE',
                resourceId: resource.id,
            });
        },
    });
    return resourceApi;
};
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.a7.prototype.getResourceById = function (id) {
    id = String(id);
    let currentState = this.getCurrentData(); // eslint-disable-line react/no-this-in-sfc
    if (currentState.resourceStore) { // guard against calendar with no resource functionality
        let rawResource = currentState.resourceStore[id];
        if (rawResource) {
            return new _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.R(currentState, rawResource);
        }
    }
    return null;
};
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.a7.prototype.getResources = function () {
    let currentState = this.getCurrentData();
    let { resourceStore } = currentState;
    let resourceApis = [];
    if (resourceStore) { // guard against calendar with no resource functionality
        for (let resourceId in resourceStore) {
            resourceApis.push(new _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.R(currentState, resourceStore[resourceId]));
        }
    }
    return resourceApis;
};
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.a7.prototype.getTopLevelResources = function () {
    let currentState = this.getCurrentData();
    let { resourceStore } = currentState;
    let resourceApis = [];
    if (resourceStore) { // guard against calendar with no resource functionality
        for (let resourceId in resourceStore) {
            if (!resourceStore[resourceId].parentId) {
                resourceApis.push(new _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.R(currentState, resourceStore[resourceId]));
            }
        }
    }
    return resourceApis;
};
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.a7.prototype.refetchResources = function () {
    this.dispatch({
        type: 'REFETCH_RESOURCES',
    });
};
function transformDatePoint(dateSpan, context) {
    return dateSpan.resourceId ?
        { resource: context.calendarApi.getResourceById(dateSpan.resourceId) } :
        {};
}
function transformDateSpan(dateSpan, context) {
    return dateSpan.resourceId ?
        { resource: context.calendarApi.getResourceById(dateSpan.resourceId) } :
        {};
}

function isPropsValidWithResources(combinedProps, context) {
    let splitter = new _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.a();
    let sets = splitter.splitProps(Object.assign(Object.assign({}, combinedProps), { resourceStore: context.getCurrentData().resourceStore }));
    for (let resourceId in sets) {
        let props = sets[resourceId];
        // merge in event data from the non-resource segment
        if (resourceId && sets['']) { // current segment is not the non-resource one, and there IS a non-resource one
            props = Object.assign(Object.assign({}, props), { eventStore: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.aS)(sets[''].eventStore, props.eventStore), eventUiBases: Object.assign(Object.assign({}, sets[''].eventUiBases), props.eventUiBases) });
        }
        if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.bW)(props, context, { resourceId }, filterConfig.bind(null, resourceId))) {
            return false;
        }
    }
    return true;
}
function filterConfig(resourceId, config) {
    return Object.assign(Object.assign({}, config), { constraints: filterConstraints(resourceId, config.constraints) });
}
function filterConstraints(resourceId, constraints) {
    return constraints.map((constraint) => {
        let defs = constraint.defs;
        if (defs) { // we are dealing with an EventStore
            // if any of the events define constraints to resources that are NOT this resource,
            // then this resource is unconditionally prohibited, which is what a `false` value does.
            for (let defId in defs) {
                let resourceIds = defs[defId].resourceIds;
                if (resourceIds.length && resourceIds.indexOf(resourceId) === -1) { // TODO: use a hash?!!! (for other reasons too)
                    return false;
                }
            }
        }
        return constraint;
    });
}

function transformExternalDef(dateSpan) {
    return dateSpan.resourceId ?
        { resourceId: dateSpan.resourceId } :
        {};
}

const optionChangeHandlers = {
    resources: handleResources,
};
function handleResources(newSourceInput, context) {
    let oldSourceInput = context.getCurrentData().resourceSource._raw;
    if (oldSourceInput !== newSourceInput) {
        context.dispatch({
            type: 'RESET_RESOURCE_SOURCE',
            resourceSourceInput: newSourceInput,
        });
    }
}

const OPTION_REFINERS = {
    initialResources: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resources: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    eventResourceEditable: Boolean,
    refetchResourcesOnNavigate: Boolean,
    resourceOrder: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.am,
    filterResourcesWithEvents: Boolean,
    resourceGroupField: String,
    resourceAreaWidth: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceAreaColumns: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourcesInitiallyExpanded: Boolean,
    datesAboveResources: Boolean,
    needsResourceData: Boolean,
    resourceAreaHeaderClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceAreaHeaderContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceAreaHeaderDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceAreaHeaderWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceGroupLabelClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceGroupLabelContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceGroupLabelDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceGroupLabelWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceLabelClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceLabelContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceLabelDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceLabelWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceLaneClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceLaneContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceLaneDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceLaneWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceGroupLaneClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceGroupLaneContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceGroupLaneDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceGroupLaneWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
};
const LISTENER_REFINERS = {
    resourcesSet: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceAdd: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceChange: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    resourceRemove: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
};

_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__._.prototype.getResources = function () {
    let { calendarApi } = this._context;
    return this._def.resourceIds.map((resourceId) => calendarApi.getResourceById(resourceId));
};
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__._.prototype.setResources = function (resources) {
    let resourceIds = [];
    // massage resources -> resourceIds
    for (let resource of resources) {
        let resourceId = null;
        if (typeof resource === 'string') {
            resourceId = resource;
        }
        else if (typeof resource === 'number') {
            resourceId = String(resource);
        }
        else if (resource instanceof _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.R) {
            resourceId = resource.id; // guaranteed to always have an ID. hmmm
        }
        else {
            console.warn('unknown resource type: ' + resource);
        }
        if (resourceId) {
            resourceIds.push(resourceId);
        }
    }
    this.mutate({
        standardProps: {
            resourceIds,
        },
    });
};

registerResourceSourceDef({
    ignoreRange: true,
    parseMeta(refined) {
        if (Array.isArray(refined.resources)) {
            return refined.resources;
        }
        return null;
    },
    fetch(arg, successCallback) {
        successCallback({
            rawResources: arg.resourceSource.meta,
        });
    },
});

registerResourceSourceDef({
    parseMeta(refined) {
        if (typeof refined.resources === 'function') {
            return refined.resources;
        }
        return null;
    },
    fetch(arg, successCallback, errorCallback) {
        const dateEnv = arg.context.dateEnv;
        const func = arg.resourceSource.meta;
        const publicArg = arg.range ? {
            start: dateEnv.toDate(arg.range.start),
            end: dateEnv.toDate(arg.range.end),
            startStr: dateEnv.formatIso(arg.range.start),
            endStr: dateEnv.formatIso(arg.range.end),
            timeZone: dateEnv.timeZone,
        } : {};
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.u)(func.bind(null, publicArg), (rawResources) => successCallback({ rawResources }), errorCallback);
    },
});

registerResourceSourceDef({
    parseMeta(refined) {
        if (refined.url) {
            return {
                url: refined.url,
                method: (refined.method || 'GET').toUpperCase(),
                extraParams: refined.extraParams,
            };
        }
        return null;
    },
    fetch(arg, successCallback, errorCallback) {
        const meta = arg.resourceSource.meta;
        const requestParams = buildRequestParams(meta, arg.range, arg.context);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.r)(meta.method, meta.url, requestParams).then(([rawResources, response]) => {
            successCallback({ rawResources, response });
        }, errorCallback);
    },
});
// TODO: somehow consolidate with event json feed
function buildRequestParams(meta, range, context) {
    let { dateEnv, options } = context;
    let startParam;
    let endParam;
    let timeZoneParam;
    let customRequestParams;
    let params = {};
    if (range) {
        startParam = meta.startParam;
        if (startParam == null) {
            startParam = options.startParam;
        }
        endParam = meta.endParam;
        if (endParam == null) {
            endParam = options.endParam;
        }
        timeZoneParam = meta.timeZoneParam;
        if (timeZoneParam == null) {
            timeZoneParam = options.timeZoneParam;
        }
        params[startParam] = dateEnv.formatIso(range.start);
        params[endParam] = dateEnv.formatIso(range.end);
        if (dateEnv.timeZone !== 'local') {
            params[timeZoneParam] = dateEnv.timeZone;
        }
    }
    // retrieve any outbound GET/POST data from the options
    if (typeof meta.extraParams === 'function') {
        // supplied as a function that returns a key/value object
        customRequestParams = meta.extraParams();
    }
    else {
        // probably supplied as a straight key/value object
        customRequestParams = meta.extraParams || {};
    }
    Object.assign(params, customRequestParams);
    return params;
}

var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/resource',
    premiumReleaseDate: '2026-06-18',
    deps: [_fullcalendar_premium_common_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
    reducers: [reduceResources],
    isLoadingFuncs: [
        (state) => state.resourceSource && state.resourceSource.isFetching,
    ],
    eventRefiners: EVENT_REFINERS,
    eventDefMemberAdders: [generateEventDefResourceMembers],
    isDraggableTransformers: [transformIsDraggable],
    eventDragMutationMassagers: [massageEventDragMutation],
    eventDefMutationAppliers: [applyEventDefMutation],
    dateSelectionTransformers: [transformDateSelectionJoin],
    datePointTransforms: [transformDatePoint],
    dateSpanTransforms: [transformDateSpan],
    viewPropsTransformers: [ResourceDataAdder, ResourceEventConfigAdder],
    isPropsValid: isPropsValidWithResources,
    externalDefTransforms: [transformExternalDef],
    eventDropTransformers: [transformEventDrop],
    optionChangeHandlers,
    optionRefiners: OPTION_REFINERS,
    listenerRefiners: LISTENER_REFINERS,
    propSetHandlers: { resourceStore: _internal_common_js__WEBPACK_IMPORTED_MODULE_3__.h },
});




/***/ },

/***/ 325
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AbstractResourceDayTableModel),
/* harmony export */   D: () => (/* binding */ DEFAULT_RESOURCE_ORDER),
/* harmony export */   R: () => (/* binding */ ResourceApi),
/* harmony export */   V: () => (/* binding */ VResourceJoiner),
/* harmony export */   a: () => (/* binding */ ResourceSplitter),
/* harmony export */   b: () => (/* binding */ ResourceDayHeader),
/* harmony export */   c: () => (/* binding */ ResourceDayTableModel),
/* harmony export */   d: () => (/* binding */ DayResourceTableModel),
/* harmony export */   e: () => (/* binding */ VResourceSplitter),
/* harmony export */   f: () => (/* binding */ flattenResources),
/* harmony export */   g: () => (/* binding */ getPublicId),
/* harmony export */   h: () => (/* binding */ handleResourceStore),
/* harmony export */   i: () => (/* binding */ isGroupsEqual),
/* harmony export */   j: () => (/* binding */ buildRowNodes),
/* harmony export */   k: () => (/* binding */ buildResourceFields),
/* harmony export */   l: () => (/* binding */ ResourceLabelContainer),
/* harmony export */   p: () => (/* binding */ parseResource),
/* harmony export */   r: () => (/* binding */ refineRenderProps$1)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);



const PRIVATE_ID_PREFIX = '_fc:';
const RESOURCE_REFINERS = {
    id: String,
    parentId: String,
    children: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
    title: String,
    businessHours: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
    extendedProps: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
    // event-ui
    eventEditable: Boolean,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventConstraint: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
    eventOverlap: Boolean,
    eventAllow: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
    eventClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aQ,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
};
/*
needs a full store so that it can populate children too
*/
function parseResource(raw, parentId = '', store, context) {
    let { refined, extra } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ag)(raw, RESOURCE_REFINERS);
    let resource = {
        id: refined.id || (PRIVATE_ID_PREFIX + (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.g)()),
        parentId: refined.parentId || parentId,
        title: refined.title || '',
        businessHours: refined.businessHours ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.U)(refined.businessHours, context) : null,
        ui: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.S)({
            editable: refined.eventEditable,
            startEditable: refined.eventStartEditable,
            durationEditable: refined.eventDurationEditable,
            constraint: refined.eventConstraint,
            overlap: refined.eventOverlap,
            allow: refined.eventAllow,
            classNames: refined.eventClassNames,
            backgroundColor: refined.eventBackgroundColor,
            borderColor: refined.eventBorderColor,
            textColor: refined.eventTextColor,
            color: refined.eventColor,
        }, context),
        extendedProps: Object.assign(Object.assign({}, extra), refined.extendedProps),
    };
    // help out ResourceApi from having user modify props
    Object.freeze(resource.ui.classNames);
    Object.freeze(resource.extendedProps);
    if (store[resource.id]) ;
    else {
        store[resource.id] = resource;
        if (refined.children) {
            for (let childInput of refined.children) {
                parseResource(childInput, resource.id, store, context);
            }
        }
    }
    return resource;
}
/*
TODO: use this in more places
*/
function getPublicId(id) {
    if (id.indexOf(PRIVATE_ID_PREFIX) === 0) {
        return '';
    }
    return id;
}

class ResourceApi {
    constructor(_context, _resource) {
        this._context = _context;
        this._resource = _resource;
    }
    setProp(name, value) {
        let oldResource = this._resource;
        this._context.dispatch({
            type: 'SET_RESOURCE_PROP',
            resourceId: oldResource.id,
            propName: name,
            propValue: value,
        });
        this.sync(oldResource);
    }
    setExtendedProp(name, value) {
        let oldResource = this._resource;
        this._context.dispatch({
            type: 'SET_RESOURCE_EXTENDED_PROP',
            resourceId: oldResource.id,
            propName: name,
            propValue: value,
        });
        this.sync(oldResource);
    }
    sync(oldResource) {
        let context = this._context;
        let resourceId = oldResource.id;
        // TODO: what if dispatch didn't complete synchronously?
        this._resource = context.getCurrentData().resourceStore[resourceId];
        context.emitter.trigger('resourceChange', {
            oldResource: new ResourceApi(context, oldResource),
            resource: this,
            revert() {
                context.dispatch({
                    type: 'ADD_RESOURCE',
                    resourceHash: {
                        [resourceId]: oldResource,
                    },
                });
            },
        });
    }
    remove() {
        let context = this._context;
        let internalResource = this._resource;
        let resourceId = internalResource.id;
        context.dispatch({
            type: 'REMOVE_RESOURCE',
            resourceId,
        });
        context.emitter.trigger('resourceRemove', {
            resource: this,
            revert() {
                context.dispatch({
                    type: 'ADD_RESOURCE',
                    resourceHash: {
                        [resourceId]: internalResource,
                    },
                });
            },
        });
    }
    getParent() {
        let context = this._context;
        let parentId = this._resource.parentId;
        if (parentId) {
            return new ResourceApi(context, context.getCurrentData().resourceStore[parentId]);
        }
        return null;
    }
    getChildren() {
        let thisResourceId = this._resource.id;
        let context = this._context;
        let { resourceStore } = context.getCurrentData();
        let childApis = [];
        for (let resourceId in resourceStore) {
            if (resourceStore[resourceId].parentId === thisResourceId) {
                childApis.push(new ResourceApi(context, resourceStore[resourceId]));
            }
        }
        return childApis;
    }
    /*
    this is really inefficient!
    TODO: make EventApi::resourceIds a hash or keep an index in the Calendar's state
    */
    getEvents() {
        let thisResourceId = this._resource.id;
        let context = this._context;
        let { defs, instances } = context.getCurrentData().eventStore;
        let eventApis = [];
        for (let instanceId in instances) {
            let instance = instances[instanceId];
            let def = defs[instance.defId];
            if (def.resourceIds.indexOf(thisResourceId) !== -1) { // inefficient!!!
                eventApis.push(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._(context, def, instance));
            }
        }
        return eventApis;
    }
    get id() { return getPublicId(this._resource.id); }
    get title() { return this._resource.title; }
    get eventConstraint() { return this._resource.ui.constraints[0] || null; } // TODO: better type
    get eventOverlap() { return this._resource.ui.overlap; }
    get eventAllow() { return this._resource.ui.allows[0] || null; } // TODO: better type
    get eventBackgroundColor() { return this._resource.ui.backgroundColor; }
    get eventBorderColor() { return this._resource.ui.borderColor; }
    get eventTextColor() { return this._resource.ui.textColor; }
    // NOTE: user can't modify these because Object.freeze was called in event-def parsing
    get eventClassNames() { return this._resource.ui.classNames; }
    get extendedProps() { return this._resource.extendedProps; }
    toPlainObject(settings = {}) {
        let internal = this._resource;
        let { ui } = internal;
        let publicId = this.id;
        let res = {};
        if (publicId) {
            res.id = publicId;
        }
        if (internal.title) {
            res.title = internal.title;
        }
        if (settings.collapseEventColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
            res.eventColor = ui.backgroundColor;
        }
        else {
            if (ui.backgroundColor) {
                res.eventBackgroundColor = ui.backgroundColor;
            }
            if (ui.borderColor) {
                res.eventBorderColor = ui.borderColor;
            }
        }
        if (ui.textColor) {
            res.eventTextColor = ui.textColor;
        }
        if (ui.classNames.length) {
            res.eventClassNames = ui.classNames;
        }
        if (Object.keys(internal.extendedProps).length) {
            if (settings.collapseExtendedProps) {
                Object.assign(res, internal.extendedProps);
            }
            else {
                res.extendedProps = internal.extendedProps;
            }
        }
        return res;
    }
    toJSON() {
        return this.toPlainObject();
    }
}
function buildResourceApis(resourceStore, context) {
    let resourceApis = [];
    for (let resourceId in resourceStore) {
        resourceApis.push(new ResourceApi(context, resourceStore[resourceId]));
    }
    return resourceApis;
}

/*
splits things BASED OFF OF which resources they are associated with.
creates a '' entry which is when something has NO resource.
*/
class ResourceSplitter extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW {
    getKeyInfo(props) {
        return Object.assign({ '': {} }, props.resourceStore);
    }
    getKeysForDateSpan(dateSpan) {
        return [dateSpan.resourceId || ''];
    }
    getKeysForEventDef(eventDef) {
        let resourceIds = eventDef.resourceIds;
        if (!resourceIds.length) {
            return [''];
        }
        return resourceIds;
    }
}

const DEFAULT_RESOURCE_ORDER = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.am)('id,title');
function handleResourceStore(resourceStore, calendarData) {
    let { emitter } = calendarData;
    if (emitter.hasHandlers('resourcesSet')) {
        emitter.trigger('resourcesSet', buildResourceApis(resourceStore, calendarData));
    }
}

function refineRenderProps$1(input) {
    return {
        resource: new ResourceApi(input.context, input.resource),
    };
}

// TODO: not used for Spreadsheet. START USING. difficult because of col-specific rendering props
class ResourceLabelContainer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.refineRenderProps = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.A)(refineRenderProps);
    }
    render() {
        const { props } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.V.Consumer, null, (context) => {
            let { options } = context;
            let renderProps = this.refineRenderProps({
                resource: props.resource,
                date: props.date,
                context,
            });
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elRef: props.elRef, elTag: props.elTag, elAttrs: Object.assign(Object.assign({}, props.elAttrs), { 'data-resource-id': props.resource.id, 'data-date': props.date ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(props.date) : undefined }), elClasses: props.elClasses, elStyle: props.elStyle, renderProps: renderProps, generatorName: "resourceLabelContent", customGenerator: options.resourceLabelContent, defaultGenerator: renderInnerContent, classNameGenerator: options.resourceLabelClassNames, didMount: options.resourceLabelDidMount, willUnmount: options.resourceLabelWillUnmount }, props.children));
        }));
    }
}
function renderInnerContent(props) {
    return props.resource.title || props.resource.id;
}
function refineRenderProps(input) {
    return {
        resource: new ResourceApi(input.context, input.resource),
        date: input.date ? input.context.dateEnv.toDate(input.date) : null,
        view: input.context.viewApi,
    };
}

class ResourceCell extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceLabelContainer, { elTag: "th", elClasses: ['fc-col-header-cell', 'fc-resource'], elAttrs: {
                role: 'columnheader',
                colSpan: props.colSpan,
            }, resource: props.resource, date: props.date }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-scrollgrid-sync-inner" },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "span", elClasses: [
                    'fc-col-header-cell-cushion',
                    props.isSticky && 'fc-sticky',
                ] })))));
    }
}

class ResourceDayHeader extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.buildDateFormat = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDateFormat);
    }
    render() {
        let { props, context } = this;
        let dateFormat = this.buildDateFormat(context.options.dayHeaderFormat, props.datesRepDistinctDays, props.dates.length);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a6, { unit: "day" }, (nowDate, todayRange) => {
            if (props.dates.length === 1) {
                return this.renderResourceRow(props.resources, props.dates[0]);
            }
            if (context.options.datesAboveResources) {
                return this.renderDayAndResourceRows(props.dates, dateFormat, todayRange, props.resources);
            }
            return this.renderResourceAndDayRows(props.resources, props.dates, dateFormat, todayRange);
        }));
    }
    renderResourceRow(resources, date) {
        let resourceCells = resources.map((resource) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceCell, { key: resource.id, resource: resource, colSpan: 1, date: date })));
        return this.buildTr(resourceCells, 'resources');
    }
    renderDayAndResourceRows(dates, dateFormat, todayRange, resources) {
        let dateCells = [];
        let resourceCells = [];
        for (let date of dates) {
            dateCells.push(this.renderDateCell(date, dateFormat, todayRange, resources.length, null, true));
            for (let resource of resources) {
                resourceCells.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceCell, { key: resource.id + ':' + date.toISOString(), resource: resource, colSpan: 1, date: date }));
            }
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            this.buildTr(dateCells, 'day'),
            this.buildTr(resourceCells, 'resources')));
    }
    renderResourceAndDayRows(resources, dates, dateFormat, todayRange) {
        let resourceCells = [];
        let dateCells = [];
        for (let resource of resources) {
            resourceCells.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ResourceCell, { key: resource.id, resource: resource, colSpan: dates.length, isSticky: true }));
            for (let date of dates) {
                dateCells.push(this.renderDateCell(date, dateFormat, todayRange, 1, resource));
            }
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            this.buildTr(resourceCells, 'resources'),
            this.buildTr(dateCells, 'day')));
    }
    // a cell with date text. might have a resource associated with it
    renderDateCell(date, dateFormat, todayRange, colSpan, resource, isSticky) {
        let { props } = this;
        let keyPostfix = resource ? `:${resource.id}` : '';
        let extraRenderProps = resource ? { resource: new ResourceApi(this.context, resource) } : {};
        let extraDataAttrs = resource ? { 'data-resource-id': resource.id } : {};
        return props.datesRepDistinctDays ? ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bK, { key: date.toISOString() + keyPostfix, date: date, dateProfile: props.dateProfile, todayRange: todayRange, colCnt: props.dates.length * props.resources.length, dayHeaderFormat: dateFormat, colSpan: colSpan, isSticky: isSticky, extraRenderProps: extraRenderProps, extraDataAttrs: extraDataAttrs })) : ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bL // we can't leverage the pure-componentness becausae the extra* props are new every time :(
        , { key: date.getUTCDay() + keyPostfix, dow: date.getUTCDay(), dayHeaderFormat: dateFormat, colSpan: colSpan, isSticky: isSticky, extraRenderProps: extraRenderProps, extraDataAttrs: extraDataAttrs }));
    }
    buildTr(cells, key) {
        let { renderIntro } = this.props;
        if (!cells.length) {
            cells = [(0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { key: 0 }, "\u00A0")];
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: key, role: "row" },
            renderIntro && renderIntro(key),
            cells));
    }
}
function buildDateFormat(dayHeaderFormat, datesRepDistinctDays, dayCnt) {
    return dayHeaderFormat || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(datesRepDistinctDays, dayCnt);
}

class ResourceIndex {
    constructor(resources) {
        let indicesById = {};
        let ids = [];
        for (let i = 0; i < resources.length; i += 1) {
            let id = resources[i].id;
            ids.push(id);
            indicesById[id] = i;
        }
        this.ids = ids;
        this.indicesById = indicesById;
        this.length = resources.length;
    }
}

class AbstractResourceDayTableModel {
    constructor(dayTableModel, resources, context) {
        this.dayTableModel = dayTableModel;
        this.resources = resources;
        this.context = context;
        this.resourceIndex = new ResourceIndex(resources);
        this.rowCnt = dayTableModel.rowCnt;
        this.colCnt = dayTableModel.colCnt * resources.length;
        this.cells = this.buildCells();
    }
    buildCells() {
        let { rowCnt, dayTableModel, resources } = this;
        let rows = [];
        for (let row = 0; row < rowCnt; row += 1) {
            let rowCells = [];
            for (let dateCol = 0; dateCol < dayTableModel.colCnt; dateCol += 1) {
                for (let resourceCol = 0; resourceCol < resources.length; resourceCol += 1) {
                    let resource = resources[resourceCol];
                    let extraRenderProps = { resource: new ResourceApi(this.context, resource) };
                    let extraDataAttrs = { 'data-resource-id': resource.id };
                    let extraClassNames = ['fc-resource'];
                    let extraDateSpan = { resourceId: resource.id };
                    let date = dayTableModel.cells[row][dateCol].date;
                    rowCells[this.computeCol(dateCol, resourceCol)] = {
                        key: resource.id + ':' + date.toISOString(),
                        date,
                        extraRenderProps,
                        extraDataAttrs,
                        extraClassNames,
                        extraDateSpan,
                    };
                }
            }
            rows.push(rowCells);
        }
        return rows;
    }
}

/*
resources over dates
*/
class ResourceDayTableModel extends AbstractResourceDayTableModel {
    computeCol(dateI, resourceI) {
        return resourceI * this.dayTableModel.colCnt + dateI;
    }
    /*
    all date ranges are intact
    */
    computeColRanges(dateStartI, dateEndI, resourceI) {
        return [
            {
                firstCol: this.computeCol(dateStartI, resourceI),
                lastCol: this.computeCol(dateEndI, resourceI),
                isStart: true,
                isEnd: true,
            },
        ];
    }
}

/*
dates over resources
*/
class DayResourceTableModel extends AbstractResourceDayTableModel {
    computeCol(dateI, resourceI) {
        return dateI * this.resources.length + resourceI;
    }
    /*
    every single day is broken up
    */
    computeColRanges(dateStartI, dateEndI, resourceI) {
        let segs = [];
        for (let i = dateStartI; i <= dateEndI; i += 1) {
            let col = this.computeCol(i, resourceI);
            segs.push({
                firstCol: col,
                lastCol: col,
                isStart: i === dateStartI,
                isEnd: i === dateEndI,
            });
        }
        return segs;
    }
}

const NO_SEGS = []; // for memoizing
class VResourceJoiner {
    constructor() {
        this.joinDateSelection = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this.joinSegs);
        this.joinBusinessHours = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this.joinSegs);
        this.joinFgEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this.joinSegs);
        this.joinBgEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this.joinSegs);
        this.joinEventDrags = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this.joinInteractions);
        this.joinEventResizes = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this.joinInteractions);
    }
    /*
    propSets also has a '' key for things with no resource
    */
    joinProps(propSets, resourceDayTable) {
        let dateSelectionSets = [];
        let businessHoursSets = [];
        let fgEventSets = [];
        let bgEventSets = [];
        let eventDrags = [];
        let eventResizes = [];
        let eventSelection = '';
        let keys = resourceDayTable.resourceIndex.ids.concat(['']); // add in the all-resource key
        for (let key of keys) {
            let props = propSets[key];
            dateSelectionSets.push(props.dateSelectionSegs);
            businessHoursSets.push(key ? props.businessHourSegs : NO_SEGS); // don't include redundant all-resource businesshours
            fgEventSets.push(key ? props.fgEventSegs : NO_SEGS); // don't include fg all-resource segs
            bgEventSets.push(props.bgEventSegs);
            eventDrags.push(props.eventDrag);
            eventResizes.push(props.eventResize);
            eventSelection = eventSelection || props.eventSelection;
        }
        return {
            dateSelectionSegs: this.joinDateSelection(resourceDayTable, ...dateSelectionSets),
            businessHourSegs: this.joinBusinessHours(resourceDayTable, ...businessHoursSets),
            fgEventSegs: this.joinFgEvents(resourceDayTable, ...fgEventSets),
            bgEventSegs: this.joinBgEvents(resourceDayTable, ...bgEventSets),
            eventDrag: this.joinEventDrags(resourceDayTable, ...eventDrags),
            eventResize: this.joinEventResizes(resourceDayTable, ...eventResizes),
            eventSelection,
        };
    }
    joinSegs(resourceDayTable, ...segGroups) {
        let resourceCnt = resourceDayTable.resources.length;
        let transformedSegs = [];
        for (let i = 0; i < resourceCnt; i += 1) {
            for (let seg of segGroups[i]) {
                transformedSegs.push(...this.transformSeg(seg, resourceDayTable, i));
            }
            for (let seg of segGroups[resourceCnt]) { // one beyond. the all-resource
                transformedSegs.push(...this.transformSeg(seg, resourceDayTable, i));
            }
        }
        return transformedSegs;
    }
    /*
    for expanding non-resource segs to all resources.
    only for public use.
    no memoizing.
    */
    expandSegs(resourceDayTable, segs) {
        let resourceCnt = resourceDayTable.resources.length;
        let transformedSegs = [];
        for (let i = 0; i < resourceCnt; i += 1) {
            for (let seg of segs) {
                transformedSegs.push(...this.transformSeg(seg, resourceDayTable, i));
            }
        }
        return transformedSegs;
    }
    joinInteractions(resourceDayTable, ...interactions) {
        let resourceCnt = resourceDayTable.resources.length;
        let affectedInstances = {};
        let transformedSegs = [];
        let anyInteractions = false;
        let isEvent = false;
        for (let i = 0; i < resourceCnt; i += 1) {
            let interaction = interactions[i];
            if (interaction) {
                anyInteractions = true;
                for (let seg of interaction.segs) {
                    transformedSegs.push(...this.transformSeg(seg, resourceDayTable, i));
                }
                Object.assign(affectedInstances, interaction.affectedInstances);
                isEvent = isEvent || interaction.isEvent;
            }
            if (interactions[resourceCnt]) { // one beyond. the all-resource
                for (let seg of interactions[resourceCnt].segs) {
                    transformedSegs.push(...this.transformSeg(seg, resourceDayTable, i));
                }
            }
        }
        if (anyInteractions) {
            return {
                affectedInstances,
                segs: transformedSegs,
                isEvent,
            };
        }
        return null;
    }
}

/*
TODO: just use ResourceHash somehow? could then use the generic ResourceSplitter
*/
class VResourceSplitter extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW {
    getKeyInfo(props) {
        let { resourceDayTableModel } = props;
        let hash = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a)(resourceDayTableModel.resourceIndex.indicesById, (i) => resourceDayTableModel.resources[i]); // :(
        hash[''] = {};
        return hash;
    }
    getKeysForDateSpan(dateSpan) {
        return [dateSpan.resourceId || ''];
    }
    getKeysForEventDef(eventDef) {
        let resourceIds = eventDef.resourceIds;
        if (!resourceIds.length) {
            return [''];
        }
        return resourceIds;
    }
}

/*
doesn't accept grouping
*/
function flattenResources(resourceStore, orderSpecs) {
    return buildRowNodes(resourceStore, [], orderSpecs, false, {}, true)
        .map((node) => node.resource);
}
function buildRowNodes(resourceStore, groupSpecs, orderSpecs, isVGrouping, expansions, expansionDefault) {
    let complexNodes = buildHierarchy(resourceStore, isVGrouping ? -1 : 1, groupSpecs, orderSpecs);
    let flatNodes = [];
    flattenNodes(complexNodes, flatNodes, isVGrouping, [], 0, expansions, expansionDefault);
    return flatNodes;
}
function flattenNodes(complexNodes, res, isVGrouping, rowSpans, depth, expansions, expansionDefault) {
    for (let i = 0; i < complexNodes.length; i += 1) {
        let complexNode = complexNodes[i];
        let group = complexNode.group;
        if (group) {
            if (isVGrouping) {
                let firstRowIndex = res.length;
                let rowSpanIndex = rowSpans.length;
                flattenNodes(complexNode.children, res, isVGrouping, rowSpans.concat(0), depth, expansions, expansionDefault);
                if (firstRowIndex < res.length) {
                    let firstRow = res[firstRowIndex];
                    let firstRowSpans = firstRow.rowSpans = firstRow.rowSpans.slice();
                    firstRowSpans[rowSpanIndex] = res.length - firstRowIndex;
                }
            }
            else {
                let id = group.spec.field + ':' + group.value;
                let isExpanded = expansions[id] != null ? expansions[id] : expansionDefault;
                res.push({ id, group, isExpanded });
                if (isExpanded) {
                    flattenNodes(complexNode.children, res, isVGrouping, rowSpans, depth + 1, expansions, expansionDefault);
                }
            }
        }
        else if (complexNode.resource) {
            let id = complexNode.resource.id;
            let isExpanded = expansions[id] != null ? expansions[id] : expansionDefault;
            res.push({
                id,
                rowSpans,
                depth,
                isExpanded,
                hasChildren: Boolean(complexNode.children.length),
                resource: complexNode.resource,
                resourceFields: complexNode.resourceFields,
            });
            if (isExpanded) {
                flattenNodes(complexNode.children, res, isVGrouping, rowSpans, depth + 1, expansions, expansionDefault);
            }
        }
    }
}
function buildHierarchy(resourceStore, maxDepth, groupSpecs, orderSpecs) {
    let resourceNodes = buildResourceNodes(resourceStore, orderSpecs);
    let builtNodes = [];
    for (let resourceId in resourceNodes) {
        let resourceNode = resourceNodes[resourceId];
        if (!resourceNode.resource.parentId) {
            insertResourceNode(resourceNode, builtNodes, groupSpecs, 0, maxDepth, orderSpecs);
        }
    }
    return builtNodes;
}
function buildResourceNodes(resourceStore, orderSpecs) {
    let nodeHash = {};
    for (let resourceId in resourceStore) {
        let resource = resourceStore[resourceId];
        nodeHash[resourceId] = {
            resource,
            resourceFields: buildResourceFields(resource),
            children: [],
        };
    }
    for (let resourceId in resourceStore) {
        let resource = resourceStore[resourceId];
        if (resource.parentId) {
            let parentNode = nodeHash[resource.parentId];
            if (parentNode) {
                insertResourceNodeInSiblings(nodeHash[resourceId], parentNode.children, orderSpecs);
            }
        }
    }
    return nodeHash;
}
function insertResourceNode(resourceNode, nodes, groupSpecs, depth, maxDepth, orderSpecs) {
    if (groupSpecs.length && (maxDepth === -1 || depth <= maxDepth)) {
        let groupNode = ensureGroupNodes(resourceNode, nodes, groupSpecs[0]);
        insertResourceNode(resourceNode, groupNode.children, groupSpecs.slice(1), depth + 1, maxDepth, orderSpecs);
    }
    else {
        insertResourceNodeInSiblings(resourceNode, nodes, orderSpecs);
    }
}
function ensureGroupNodes(resourceNode, nodes, groupSpec) {
    let groupValue = resourceNode.resourceFields[groupSpec.field];
    let groupNode;
    let newGroupIndex;
    // find an existing group that matches, or determine the position for a new group
    if (groupSpec.order) {
        for (newGroupIndex = 0; newGroupIndex < nodes.length; newGroupIndex += 1) {
            let node = nodes[newGroupIndex];
            if (node.group) {
                let cmp = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ao)(groupValue, node.group.value) * groupSpec.order;
                if (cmp === 0) {
                    groupNode = node;
                    break;
                }
                else if (cmp < 0) {
                    break;
                }
            }
        }
    }
    else { // the groups are unordered
        for (newGroupIndex = 0; newGroupIndex < nodes.length; newGroupIndex += 1) {
            let node = nodes[newGroupIndex];
            if (node.group && groupValue === node.group.value) {
                groupNode = node;
                break;
            }
        }
    }
    if (!groupNode) {
        groupNode = {
            group: {
                value: groupValue,
                spec: groupSpec,
            },
            children: [],
        };
        nodes.splice(newGroupIndex, 0, groupNode);
    }
    return groupNode;
}
function insertResourceNodeInSiblings(resourceNode, siblings, orderSpecs) {
    let i;
    for (i = 0; i < siblings.length; i += 1) {
        let cmp = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.an)(siblings[i].resourceFields, resourceNode.resourceFields, orderSpecs); // TODO: pass in ResourceApi?
        if (cmp > 0) { // went 1 past. insert at i
            break;
        }
    }
    siblings.splice(i, 0, resourceNode);
}
function buildResourceFields(resource) {
    let obj = Object.assign(Object.assign(Object.assign({}, resource.extendedProps), resource.ui), resource);
    delete obj.ui;
    delete obj.extendedProps;
    return obj;
}
function isGroupsEqual(group0, group1) {
    return group0.spec === group1.spec && group0.value === group1.value;
}




/***/ },

/***/ 327
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractResourceDayTableModel: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   DEFAULT_RESOURCE_ORDER: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   DayResourceTableModel: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   ResourceDayHeader: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   ResourceDayTableModel: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   ResourceLabelContainer: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   ResourceSplitter: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   VResourceJoiner: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   VResourceSplitter: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   buildResourceFields: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   buildRowNodes: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   flattenResources: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   getPublicId: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   isGroupsEqual: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   refineRenderProps: () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _internal_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(325);





/***/ },

/***/ 323
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollGrid: () => (/* binding */ ScrollGrid)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);



// TODO: assume the el has no borders?
function getScrollCanvasOrigin(scrollEl) {
    let rect = scrollEl.getBoundingClientRect();
    let edges = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b2)(scrollEl); // TODO: pass in isRtl?
    return {
        left: rect.left + edges.borderLeft + edges.scrollbarLeft - getScrollFromLeftEdge(scrollEl),
        top: rect.top + edges.borderTop - scrollEl.scrollTop,
    };
}
function getScrollFromLeftEdge(el) {
    let scrollLeft = el.scrollLeft;
    let computedStyles = window.getComputedStyle(el); // TODO: pass in isRtl instead?
    if (computedStyles.direction === 'rtl') {
        switch (getRtlScrollSystem()) {
            case 'negative':
                scrollLeft *= -1; // convert to 'reverse'. fall through...
            case 'reverse': // scrollLeft is distance between scrollframe's right edge scrollcanvas's right edge
                scrollLeft = el.scrollWidth - scrollLeft - el.clientWidth;
        }
    }
    return scrollLeft;
}
function setScrollFromLeftEdge(el, scrollLeft) {
    let computedStyles = window.getComputedStyle(el); // TODO: pass in isRtl instead?
    if (computedStyles.direction === 'rtl') {
        switch (getRtlScrollSystem()) {
            case 'reverse':
                scrollLeft = el.scrollWidth - scrollLeft;
                break;
            case 'negative':
                scrollLeft = -(el.scrollWidth - scrollLeft);
                break;
        }
    }
    el.scrollLeft = scrollLeft;
}
// Horizontal Scroll System Detection
// ----------------------------------------------------------------------------------------------
let _rtlScrollSystem;
function getRtlScrollSystem() {
    return _rtlScrollSystem || (_rtlScrollSystem = detectRtlScrollSystem());
}
function detectRtlScrollSystem() {
    let el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.top = '-1000px';
    el.style.width = '100px'; // must be at least the side of scrollbars or you get inaccurate values (#7335)
    el.style.height = '100px'; // "
    el.style.overflow = 'scroll';
    el.style.direction = 'rtl';
    let innerEl = document.createElement('div');
    innerEl.style.width = '200px';
    innerEl.style.height = '200px';
    el.appendChild(innerEl);
    document.body.appendChild(el);
    let system;
    if (el.scrollLeft > 0) {
        system = 'positive'; // scroll is a positive number from the left edge
    }
    else {
        el.scrollLeft = 1;
        if (el.scrollLeft > 0) {
            system = 'reverse'; // scroll is a positive number from the right edge
        }
        else {
            system = 'negative'; // scroll is a negative number from the right edge
        }
    }
    ;(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aM)(el);
    return system;
}

const STICKY_SELECTOR = '.fc-sticky';
/*
Goes beyond mere position:sticky, allows horizontal centering

REQUIREMENT: fc-sticky elements, if the fc-sticky className is taken away, should NOT have relative or absolute positioning.
This is because we attach the coords with JS, and the VDOM might take away the fc-sticky class but doesn't know kill the positioning.

TODO: don't query text-align:center. isn't compatible with flexbox centering. instead, check natural X coord within parent container
*/
class StickyScrolling {
    constructor(scrollEl, isRtl) {
        this.scrollEl = scrollEl;
        this.isRtl = isRtl;
        this.updateSize = () => {
            let { scrollEl } = this;
            let els = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aK)(scrollEl, STICKY_SELECTOR);
            let elGeoms = this.queryElGeoms(els);
            let viewportWidth = scrollEl.clientWidth;
            assignStickyPositions(els, elGeoms, viewportWidth);
        };
    }
    queryElGeoms(els) {
        let { scrollEl, isRtl } = this;
        let canvasOrigin = getScrollCanvasOrigin(scrollEl);
        let elGeoms = [];
        for (let el of els) {
            let parentBound = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aH)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b1)(el.parentNode, true, true), // weird way to call this!!!
            -canvasOrigin.left, -canvasOrigin.top);
            let elRect = el.getBoundingClientRect();
            let computedStyles = window.getComputedStyle(el);
            let textAlign = window.getComputedStyle(el.parentNode).textAlign; // ask the parent
            let naturalBound = null;
            if (textAlign === 'start') {
                textAlign = isRtl ? 'right' : 'left';
            }
            else if (textAlign === 'end') {
                textAlign = isRtl ? 'left' : 'right';
            }
            if (computedStyles.position !== 'sticky') {
                naturalBound = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aH)(elRect, -canvasOrigin.left - (parseFloat(computedStyles.left) || 0), // could be 'auto'
                -canvasOrigin.top - (parseFloat(computedStyles.top) || 0));
            }
            elGeoms.push({
                parentBound,
                naturalBound,
                elWidth: elRect.width,
                elHeight: elRect.height,
                textAlign,
            });
        }
        return elGeoms;
    }
}
function assignStickyPositions(els, elGeoms, viewportWidth) {
    els.forEach((el, i) => {
        let { textAlign, elWidth, parentBound } = elGeoms[i];
        let parentWidth = parentBound.right - parentBound.left;
        let left;
        if (textAlign === 'center' &&
            parentWidth > viewportWidth) {
            left = (viewportWidth - elWidth) / 2;
        }
        else { // if parent container can be completely in view, we don't need stickiness
            left = '';
        }
        ;(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aN)(el, {
            left,
            right: left,
            top: 0,
        });
    });
}

class ClippedScroller extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.elRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.state = {
            xScrollbarWidth: 0,
            yScrollbarWidth: 0,
        };
        this.handleScroller = (scroller) => {
            this.scroller = scroller;
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.W)(this.props.scrollerRef, scroller);
        };
        this.handleSizing = () => {
            let { props } = this;
            if (props.overflowY === 'scroll-hidden') {
                this.setState({ yScrollbarWidth: this.scroller.getYScrollbarWidth() });
            }
            if (props.overflowX === 'scroll-hidden') {
                this.setState({ xScrollbarWidth: this.scroller.getXScrollbarWidth() });
            }
        };
    }
    render() {
        let { props, state, context } = this;
        let isScrollbarOnLeft = context.isRtl && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ce)();
        let overcomeLeft = 0;
        let overcomeRight = 0;
        let overcomeBottom = 0;
        let { overflowX, overflowY } = props;
        if (props.forPrint) {
            overflowX = 'visible';
            overflowY = 'visible';
        }
        if (overflowX === 'scroll-hidden') {
            overcomeBottom = state.xScrollbarWidth;
        }
        if (overflowY === 'scroll-hidden') {
            if (state.yScrollbarWidth != null) {
                if (isScrollbarOnLeft) {
                    overcomeLeft = state.yScrollbarWidth;
                }
                else {
                    overcomeRight = state.yScrollbarWidth;
                }
            }
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: this.elRef, className: 'fc-scroller-harness' + (props.liquid ? ' fc-scroller-harness-liquid' : '') },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cb, { ref: this.handleScroller, elRef: this.props.scrollerElRef, overflowX: overflowX === 'scroll-hidden' ? 'scroll' : overflowX, overflowY: overflowY === 'scroll-hidden' ? 'scroll' : overflowY, overcomeLeft: overcomeLeft, overcomeRight: overcomeRight, overcomeBottom: overcomeBottom, maxHeight: typeof props.maxHeight === 'number'
                    ? (props.maxHeight + (overflowX === 'scroll-hidden' ? state.xScrollbarWidth : 0))
                    : '', liquid: props.liquid, liquidIsAbsolute: true }, props.children)));
    }
    componentDidMount() {
        this.handleSizing();
        this.context.addResizeHandler(this.handleSizing);
    }
    getSnapshotBeforeUpdate(prevProps) {
        if (this.props.forPrint && !prevProps.forPrint) {
            return { simulateScrollLeft: this.scroller.el.scrollLeft };
        }
        return {};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { props, scroller: { el: scrollerEl } } = this;
        if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E)(prevProps, props)) { // an external change?
            this.handleSizing();
        }
        if (snapshot.simulateScrollLeft !== undefined) {
            scrollerEl.style.left = -snapshot.simulateScrollLeft + 'px';
        }
        else if (!props.forPrint && prevProps.forPrint) {
            const restoredScrollLeft = -parseInt(scrollerEl.style.left);
            scrollerEl.style.left = '';
            scrollerEl.scrollLeft = restoredScrollLeft;
        }
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleSizing);
    }
    needsXScrolling() {
        return this.scroller.needsXScrolling();
    }
    needsYScrolling() {
        return this.scroller.needsYScrolling();
    }
}

const WHEEL_EVENT_NAMES = 'wheel mousewheel DomMouseScroll MozMousePixelScroll'.split(' ');
/*
ALSO, with the ability to disable touch
*/
class ScrollListener {
    constructor(el) {
        this.el = el;
        this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.F();
        this.isScrolling = false;
        this.isTouching = false; // user currently has finger down?
        this.isRecentlyWheeled = false;
        this.isRecentlyScrolled = false;
        this.wheelWaiter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.D(this._handleWheelWaited.bind(this));
        this.scrollWaiter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.D(this._handleScrollWaited.bind(this));
        // Handlers
        // ----------------------------------------------------------------------------------------------
        this.handleScroll = () => {
            this.startScroll();
            this.emitter.trigger('scroll', this.isRecentlyWheeled, this.isTouching);
            this.isRecentlyScrolled = true;
            this.scrollWaiter.request(500);
        };
        // will fire *before* the scroll event is fired (might not cause a scroll)
        this.handleWheel = () => {
            this.isRecentlyWheeled = true;
            this.wheelWaiter.request(500);
        };
        // will fire *before* the scroll event is fired (might not cause a scroll)
        this.handleTouchStart = () => {
            this.isTouching = true;
        };
        this.handleTouchEnd = () => {
            this.isTouching = false;
            // if the user ended their touch, and the scroll area wasn't moving,
            // we consider this to be the end of the scroll.
            if (!this.isRecentlyScrolled) {
                this.endScroll(); // won't fire if already ended
            }
        };
        el.addEventListener('scroll', this.handleScroll);
        el.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        el.addEventListener('touchend', this.handleTouchEnd);
        for (let eventName of WHEEL_EVENT_NAMES) {
            el.addEventListener(eventName, this.handleWheel);
        }
    }
    destroy() {
        let { el } = this;
        el.removeEventListener('scroll', this.handleScroll);
        el.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
        el.removeEventListener('touchend', this.handleTouchEnd);
        for (let eventName of WHEEL_EVENT_NAMES) {
            el.removeEventListener(eventName, this.handleWheel);
        }
    }
    // Start / Stop
    // ----------------------------------------------------------------------------------------------
    startScroll() {
        if (!this.isScrolling) {
            this.isScrolling = true;
            this.emitter.trigger('scrollStart', this.isRecentlyWheeled, this.isTouching);
        }
    }
    endScroll() {
        if (this.isScrolling) {
            this.emitter.trigger('scrollEnd');
            this.isScrolling = false;
            this.isRecentlyScrolled = true;
            this.isRecentlyWheeled = false;
            this.scrollWaiter.clear();
            this.wheelWaiter.clear();
        }
    }
    _handleScrollWaited() {
        this.isRecentlyScrolled = false;
        // only end the scroll if not currently touching.
        // if touching, the scrolling will end later, on touchend.
        if (!this.isTouching) {
            this.endScroll(); // won't fire if already ended
        }
    }
    _handleWheelWaited() {
        this.isRecentlyWheeled = false;
    }
}

class ScrollSyncer {
    constructor(isVertical, scrollEls) {
        this.isVertical = isVertical;
        this.scrollEls = scrollEls;
        this.isPaused = false;
        this.scrollListeners = scrollEls.map((el) => this.bindScroller(el));
    }
    destroy() {
        for (let scrollListener of this.scrollListeners) {
            scrollListener.destroy();
        }
    }
    bindScroller(el) {
        let { scrollEls, isVertical } = this;
        let scrollListener = new ScrollListener(el);
        const onScroll = (isWheel, isTouch) => {
            if (!this.isPaused) {
                if (!this.masterEl || (this.masterEl !== el && (isWheel || isTouch))) {
                    this.assignMaster(el);
                }
                if (this.masterEl === el) { // dealing with current
                    for (let otherEl of scrollEls) {
                        if (otherEl !== el) {
                            if (isVertical) {
                                otherEl.scrollTop = el.scrollTop;
                            }
                            else {
                                otherEl.scrollLeft = el.scrollLeft;
                            }
                        }
                    }
                }
            }
        };
        const onScrollEnd = () => {
            if (this.masterEl === el) {
                this.masterEl = null;
            }
        };
        scrollListener.emitter.on('scroll', onScroll);
        scrollListener.emitter.on('scrollEnd', onScrollEnd);
        return scrollListener;
    }
    assignMaster(el) {
        this.masterEl = el;
        for (let scrollListener of this.scrollListeners) {
            if (scrollListener.el !== el) {
                scrollListener.endScroll(); // to prevent residual scrolls from reclaiming master
            }
        }
    }
    /*
    will normalize the scrollLeft value
    */
    forceScrollLeft(scrollLeft) {
        this.isPaused = true;
        for (let listener of this.scrollListeners) {
            setScrollFromLeftEdge(listener.el, scrollLeft);
        }
        this.isPaused = false;
    }
    forceScrollTop(top) {
        this.isPaused = true;
        for (let listener of this.scrollListeners) {
            listener.el.scrollTop = top;
        }
        this.isPaused = false;
    }
}

_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG.SCROLLGRID_RESIZE_INTERVAL = 500;
/*
TODO: make <ScrollGridSection> subcomponent
NOTE: doesn't support collapsibleWidth (which is sortof a hack anyway)
*/
class ScrollGrid extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.compileColGroupStats = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(compileColGroupStat, isColGroupStatsEqual);
        this.renderMicroColGroups = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b$); // yucky to memoize VNodes, but much more efficient for consumers
        this.clippedScrollerRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd();
        // doesn't hold non-scrolling els used just for padding
        this.scrollerElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd(this._handleScrollerEl.bind(this));
        this.chunkElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd(this._handleChunkEl.bind(this));
        this.scrollSyncersBySection = {};
        this.scrollSyncersByColumn = {};
        // for row-height-syncing
        this.rowUnstableMap = new Map(); // no need to groom. always self-cancels
        this.rowInnerMaxHeightMap = new Map();
        this.anyRowHeightsChanged = false;
        this.recentSizingCnt = 0;
        this.state = {
            shrinkWidths: [],
            forceYScrollbars: false,
            forceXScrollbars: false,
            scrollerClientWidths: {},
            scrollerClientHeights: {},
            sectionRowMaxHeights: [],
        };
        this.handleSizing = (isForcedResize, sectionRowMaxHeightsChanged) => {
            if (!this.allowSizing()) {
                return;
            }
            if (!sectionRowMaxHeightsChanged) { // something else changed, probably external
                this.anyRowHeightsChanged = true;
            }
            let otherState = {};
            // if reacting to self-change of sectionRowMaxHeightsChanged, or not stable, don't do anything
            if (isForcedResize || (!sectionRowMaxHeightsChanged && !this.rowUnstableMap.size)) {
                otherState.sectionRowMaxHeights = this.computeSectionRowMaxHeights();
            }
            this.setState(Object.assign(Object.assign({ shrinkWidths: this.computeShrinkWidths() }, this.computeScrollerDims()), otherState), () => {
                if (!this.rowUnstableMap.size) {
                    this.updateStickyScrolling(); // needs to happen AFTER final positioning committed to DOM
                }
            });
        };
        this.handleRowHeightChange = (rowEl, isStable) => {
            let { rowUnstableMap, rowInnerMaxHeightMap } = this;
            if (!isStable) {
                rowUnstableMap.set(rowEl, true);
            }
            else {
                rowUnstableMap.delete(rowEl);
                let innerMaxHeight = getRowInnerMaxHeight(rowEl);
                if (!rowInnerMaxHeightMap.has(rowEl) || rowInnerMaxHeightMap.get(rowEl) !== innerMaxHeight) {
                    rowInnerMaxHeightMap.set(rowEl, innerMaxHeight);
                    this.anyRowHeightsChanged = true;
                }
                if (!rowUnstableMap.size && this.anyRowHeightsChanged) {
                    this.anyRowHeightsChanged = false;
                    this.setState({
                        sectionRowMaxHeights: this.computeSectionRowMaxHeights(),
                    });
                }
            }
        };
    }
    render() {
        let { props, state, context } = this;
        let { shrinkWidths } = state;
        let colGroupStats = this.compileColGroupStats(props.colGroups.map((colGroup) => [colGroup]));
        let microColGroupNodes = this.renderMicroColGroups(colGroupStats.map((stat, i) => [stat.cols, shrinkWidths[i]]));
        let classNames = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c0)(props.liquid, context);
        this.getDims();
        // TODO: make DRY
        let sectionConfigs = props.sections;
        let configCnt = sectionConfigs.length;
        let configI = 0;
        let currentConfig;
        let headSectionNodes = [];
        let bodySectionNodes = [];
        let footSectionNodes = [];
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
            headSectionNodes.push(this.renderSection(currentConfig, configI, colGroupStats, microColGroupNodes, state.sectionRowMaxHeights, true));
            configI += 1;
        }
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
            bodySectionNodes.push(this.renderSection(currentConfig, configI, colGroupStats, microColGroupNodes, state.sectionRowMaxHeights, false));
            configI += 1;
        }
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
            footSectionNodes.push(this.renderSection(currentConfig, configI, colGroupStats, microColGroupNodes, state.sectionRowMaxHeights, true));
            configI += 1;
        }
        const isBuggy = !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aR)(); // see NOTE in SimpleScrollGrid
        const roleAttrs = { role: 'rowgroup' };
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('table', {
            ref: props.elRef,
            role: 'grid',
            className: classNames.join(' '),
        }, renderMacroColGroup(colGroupStats, shrinkWidths), Boolean(!isBuggy && headSectionNodes.length) && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('thead', roleAttrs, ...headSectionNodes), Boolean(!isBuggy && bodySectionNodes.length) && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('tbody', roleAttrs, ...bodySectionNodes), Boolean(!isBuggy && footSectionNodes.length) && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('tfoot', roleAttrs, ...footSectionNodes), isBuggy && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('tbody', roleAttrs, ...headSectionNodes, ...bodySectionNodes, ...footSectionNodes));
    }
    renderSection(sectionConfig, sectionIndex, colGroupStats, microColGroupNodes, sectionRowMaxHeights, isHeader) {
        if ('outerContent' in sectionConfig) {
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, { key: sectionConfig.key }, sectionConfig.outerContent));
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: sectionConfig.key, role: "presentation", className: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c1)(sectionConfig, this.props.liquid).join(' ') }, sectionConfig.chunks.map((chunkConfig, i) => this.renderChunk(sectionConfig, sectionIndex, colGroupStats[i], microColGroupNodes[i], chunkConfig, i, (sectionRowMaxHeights[sectionIndex] || [])[i] || [], isHeader))));
    }
    renderChunk(sectionConfig, sectionIndex, colGroupStat, microColGroupNode, chunkConfig, chunkIndex, rowHeights, isHeader) {
        if ('outerContent' in chunkConfig) {
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, { key: chunkConfig.key }, chunkConfig.outerContent));
        }
        let { state } = this;
        let { scrollerClientWidths, scrollerClientHeights } = state;
        let [sectionCnt, chunksPerSection] = this.getDims();
        let index = sectionIndex * chunksPerSection + chunkIndex;
        let sideScrollIndex = (!this.context.isRtl || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ce)()) ? chunksPerSection - 1 : 0;
        let isVScrollSide = chunkIndex === sideScrollIndex;
        let isLastSection = sectionIndex === sectionCnt - 1;
        let forceXScrollbars = isLastSection && state.forceXScrollbars; // NOOOO can result in `null`
        let forceYScrollbars = isVScrollSide && state.forceYScrollbars; // NOOOO can result in `null`
        let allowXScrolling = colGroupStat && colGroupStat.allowXScrolling; // rename?
        let allowYScrolling = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c3)(this.props, sectionConfig); // rename? do in section func?
        let chunkVGrow = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c2)(this.props, sectionConfig); // do in section func?
        let expandRows = sectionConfig.expandRows && chunkVGrow;
        let tableMinWidth = (colGroupStat && colGroupStat.totalColMinWidth) || '';
        let content = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c4)(sectionConfig, chunkConfig, {
            tableColGroupNode: microColGroupNode,
            tableMinWidth,
            clientWidth: scrollerClientWidths[index] !== undefined ? scrollerClientWidths[index] : null,
            clientHeight: scrollerClientHeights[index] !== undefined ? scrollerClientHeights[index] : null,
            expandRows,
            syncRowHeights: Boolean(sectionConfig.syncRowHeights),
            rowSyncHeights: rowHeights,
            reportRowHeightChange: this.handleRowHeightChange,
        }, isHeader);
        let overflowX = forceXScrollbars ? (isLastSection ? 'scroll' : 'scroll-hidden') :
            !allowXScrolling ? 'hidden' :
                (isLastSection ? 'auto' : 'scroll-hidden');
        let overflowY = forceYScrollbars ? (isVScrollSide ? 'scroll' : 'scroll-hidden') :
            !allowYScrolling ? 'hidden' :
                (isVScrollSide ? 'auto' : 'scroll-hidden');
        // it *could* be possible to reduce DOM wrappers by only doing a ClippedScroller when allowXScrolling or allowYScrolling,
        // but if these values were to change, the inner components would be unmounted/remounted because of the parent change.
        content = ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ClippedScroller, { ref: this.clippedScrollerRefs.createRef(index), scrollerElRef: this.scrollerElRefs.createRef(index), overflowX: overflowX, overflowY: overflowY, forPrint: this.props.forPrint, liquid: chunkVGrow, maxHeight: sectionConfig.maxHeight }, content));
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(isHeader ? 'th' : 'td', {
            key: chunkConfig.key,
            ref: this.chunkElRefs.createRef(index),
            role: 'presentation',
        }, content);
    }
    componentDidMount() {
        this.getStickyScrolling = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(initStickyScrolling);
        this.getScrollSyncersBySection = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aB)(initScrollSyncer.bind(this, true), null, destroyScrollSyncer);
        this.getScrollSyncersByColumn = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aB)(initScrollSyncer.bind(this, false), null, destroyScrollSyncer);
        this.updateScrollSyncers();
        this.handleSizing(false);
        this.context.addResizeHandler(this.handleSizing);
    }
    componentDidUpdate(prevProps, prevState) {
        this.updateScrollSyncers();
        // TODO: need better solution when state contains non-sizing things
        this.handleSizing(false, prevState.sectionRowMaxHeights !== this.state.sectionRowMaxHeights);
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleSizing);
        this.destroyScrollSyncers();
    }
    allowSizing() {
        let now = new Date();
        if (!this.lastSizingDate ||
            now.valueOf() > this.lastSizingDate.valueOf() + _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG.SCROLLGRID_RESIZE_INTERVAL) {
            this.lastSizingDate = now;
            this.recentSizingCnt = 0;
            return true;
        }
        return (this.recentSizingCnt += 1) <= 10;
    }
    computeShrinkWidths() {
        let colGroupStats = this.compileColGroupStats(this.props.colGroups.map((colGroup) => [colGroup]));
        let [sectionCnt, chunksPerSection] = this.getDims();
        let cnt = sectionCnt * chunksPerSection;
        let shrinkWidths = [];
        colGroupStats.forEach((colGroupStat, i) => {
            if (colGroupStat.hasShrinkCol) {
                let chunkEls = this.chunkElRefs.collect(i, cnt, chunksPerSection); // in one col
                shrinkWidths[i] = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c5)(chunkEls);
            }
        });
        return shrinkWidths;
    }
    // has the side effect of grooming rowInnerMaxHeightMap
    // TODO: somehow short-circuit if there are no new height changes
    computeSectionRowMaxHeights() {
        let newHeightMap = new Map();
        let [sectionCnt, chunksPerSection] = this.getDims();
        let sectionRowMaxHeights = [];
        for (let sectionI = 0; sectionI < sectionCnt; sectionI += 1) {
            let sectionConfig = this.props.sections[sectionI];
            let assignableHeights = []; // chunk, row
            if (sectionConfig && sectionConfig.syncRowHeights) {
                let rowHeightsByChunk = [];
                for (let chunkI = 0; chunkI < chunksPerSection; chunkI += 1) {
                    let index = sectionI * chunksPerSection + chunkI;
                    let rowHeights = [];
                    let chunkEl = this.chunkElRefs.currentMap[index];
                    if (chunkEl) {
                        rowHeights = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aK)(chunkEl, '.fc-scrollgrid-sync-table tr').map((rowEl) => {
                            let max = getRowInnerMaxHeight(rowEl);
                            newHeightMap.set(rowEl, max);
                            return max;
                        });
                    }
                    else {
                        rowHeights = [];
                    }
                    rowHeightsByChunk.push(rowHeights);
                }
                let rowCnt = rowHeightsByChunk[0].length;
                let isEqualRowCnt = true;
                for (let chunkI = 1; chunkI < chunksPerSection; chunkI += 1) {
                    let isOuterContent = sectionConfig.chunks[chunkI] && sectionConfig.chunks[chunkI].outerContent !== undefined; // can be null
                    if (!isOuterContent && rowHeightsByChunk[chunkI].length !== rowCnt) { // skip outer content
                        isEqualRowCnt = false;
                        break;
                    }
                }
                if (!isEqualRowCnt) {
                    let chunkHeightSums = [];
                    for (let chunkI = 0; chunkI < chunksPerSection; chunkI += 1) {
                        chunkHeightSums.push(sumNumbers(rowHeightsByChunk[chunkI]) + rowHeightsByChunk[chunkI].length);
                    }
                    let maxTotalSum = Math.max(...chunkHeightSums);
                    for (let chunkI = 0; chunkI < chunksPerSection; chunkI += 1) {
                        let rowInChunkCnt = rowHeightsByChunk[chunkI].length;
                        let rowInChunkTotalHeight = maxTotalSum - rowInChunkCnt; // subtract border
                        // height of non-first row. we do this to avoid rounding, because it's unreliable within a table
                        let rowInChunkHeightOthers = Math.floor(rowInChunkTotalHeight / rowInChunkCnt);
                        // whatever is leftover goes to the first row
                        let rowInChunkHeightFirst = rowInChunkTotalHeight - rowInChunkHeightOthers * (rowInChunkCnt - 1);
                        let rowInChunkHeights = [];
                        let row = 0;
                        if (row < rowInChunkCnt) {
                            rowInChunkHeights.push(rowInChunkHeightFirst);
                            row += 1;
                        }
                        while (row < rowInChunkCnt) {
                            rowInChunkHeights.push(rowInChunkHeightOthers);
                            row += 1;
                        }
                        assignableHeights.push(rowInChunkHeights);
                    }
                }
                else {
                    for (let chunkI = 0; chunkI < chunksPerSection; chunkI += 1) {
                        assignableHeights.push([]);
                    }
                    for (let row = 0; row < rowCnt; row += 1) {
                        let rowHeightsAcrossChunks = [];
                        for (let chunkI = 0; chunkI < chunksPerSection; chunkI += 1) {
                            let h = rowHeightsByChunk[chunkI][row];
                            if (h != null) { // protect against outerContent
                                rowHeightsAcrossChunks.push(h);
                            }
                        }
                        let maxHeight = Math.max(...rowHeightsAcrossChunks);
                        for (let chunkI = 0; chunkI < chunksPerSection; chunkI += 1) {
                            assignableHeights[chunkI].push(maxHeight);
                        }
                    }
                }
            }
            sectionRowMaxHeights.push(assignableHeights);
        }
        this.rowInnerMaxHeightMap = newHeightMap;
        return sectionRowMaxHeights;
    }
    computeScrollerDims() {
        let scrollbarWidth = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)();
        let [sectionCnt, chunksPerSection] = this.getDims();
        let sideScrollI = (!this.context.isRtl || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ce)()) ? chunksPerSection - 1 : 0;
        let lastSectionI = sectionCnt - 1;
        let currentScrollers = this.clippedScrollerRefs.currentMap;
        let scrollerEls = this.scrollerElRefs.currentMap;
        let forceYScrollbars = false;
        let forceXScrollbars = false;
        let scrollerClientWidths = {};
        let scrollerClientHeights = {};
        for (let sectionI = 0; sectionI < sectionCnt; sectionI += 1) { // along edge
            let index = sectionI * chunksPerSection + sideScrollI;
            let scroller = currentScrollers[index];
            if (scroller && scroller.needsYScrolling()) {
                forceYScrollbars = true;
                break;
            }
        }
        for (let chunkI = 0; chunkI < chunksPerSection; chunkI += 1) { // along last row
            let index = lastSectionI * chunksPerSection + chunkI;
            let scroller = currentScrollers[index];
            if (scroller && scroller.needsXScrolling()) {
                forceXScrollbars = true;
                break;
            }
        }
        for (let sectionI = 0; sectionI < sectionCnt; sectionI += 1) {
            for (let chunkI = 0; chunkI < chunksPerSection; chunkI += 1) {
                let index = sectionI * chunksPerSection + chunkI;
                let scrollerEl = scrollerEls[index];
                if (scrollerEl) {
                    // TODO: weird way to get this. need harness b/c doesn't include table borders
                    let harnessEl = scrollerEl.parentNode;
                    scrollerClientWidths[index] = Math.floor(harnessEl.getBoundingClientRect().width - ((chunkI === sideScrollI && forceYScrollbars)
                        ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
                        : 0));
                    scrollerClientHeights[index] = Math.floor(harnessEl.getBoundingClientRect().height - ((sectionI === lastSectionI && forceXScrollbars)
                        ? scrollbarWidth.x // use global because scroller might not have scrollbars yet but will need them in future
                        : 0));
                }
            }
        }
        return { forceYScrollbars, forceXScrollbars, scrollerClientWidths, scrollerClientHeights };
    }
    updateStickyScrolling() {
        let { isRtl } = this.context;
        let argsByKey = this.scrollerElRefs.getAll().map((scrollEl) => [scrollEl, isRtl]);
        this.getStickyScrolling(argsByKey)
            .forEach((stickyScrolling) => stickyScrolling.updateSize());
    }
    updateScrollSyncers() {
        let [sectionCnt, chunksPerSection] = this.getDims();
        let cnt = sectionCnt * chunksPerSection;
        let scrollElsBySection = {};
        let scrollElsByColumn = {};
        let scrollElMap = this.scrollerElRefs.currentMap;
        for (let sectionI = 0; sectionI < sectionCnt; sectionI += 1) {
            let startIndex = sectionI * chunksPerSection;
            let endIndex = startIndex + chunksPerSection;
            scrollElsBySection[sectionI] = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aJ)(scrollElMap, startIndex, endIndex, 1); // use the filtered
        }
        for (let col = 0; col < chunksPerSection; col += 1) {
            scrollElsByColumn[col] = this.scrollerElRefs.collect(col, cnt, chunksPerSection); // DON'T use the filtered
        }
        this.scrollSyncersBySection = this.getScrollSyncersBySection(scrollElsBySection);
        this.scrollSyncersByColumn = this.getScrollSyncersByColumn(scrollElsByColumn);
    }
    destroyScrollSyncers() {
        ;(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.scrollSyncersBySection, destroyScrollSyncer);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.scrollSyncersByColumn, destroyScrollSyncer);
    }
    getChunkConfigByIndex(index) {
        let chunksPerSection = this.getDims()[1];
        let sectionI = Math.floor(index / chunksPerSection);
        let chunkI = index % chunksPerSection;
        let sectionConfig = this.props.sections[sectionI];
        return sectionConfig && sectionConfig.chunks[chunkI];
    }
    forceScrollLeft(col, scrollLeft) {
        let scrollSyncer = this.scrollSyncersByColumn[col];
        if (scrollSyncer) {
            scrollSyncer.forceScrollLeft(scrollLeft);
        }
    }
    forceScrollTop(sectionI, scrollTop) {
        let scrollSyncer = this.scrollSyncersBySection[sectionI];
        if (scrollSyncer) {
            scrollSyncer.forceScrollTop(scrollTop);
        }
    }
    _handleChunkEl(chunkEl, key) {
        let chunkConfig = this.getChunkConfigByIndex(parseInt(key, 10));
        if (chunkConfig) { // null if section disappeared. bad, b/c won't null-set the elRef
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.W)(chunkConfig.elRef, chunkEl);
        }
    }
    _handleScrollerEl(scrollerEl, key) {
        let chunkConfig = this.getChunkConfigByIndex(parseInt(key, 10));
        if (chunkConfig) { // null if section disappeared. bad, b/c won't null-set the elRef
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.W)(chunkConfig.scrollerElRef, scrollerEl);
        }
    }
    getDims() {
        let sectionCnt = this.props.sections.length;
        let chunksPerSection = sectionCnt ? this.props.sections[0].chunks.length : 0;
        return [sectionCnt, chunksPerSection];
    }
}
ScrollGrid.addStateEquality({
    shrinkWidths: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.i,
    scrollerClientWidths: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E,
    scrollerClientHeights: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E,
});
function sumNumbers(numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}
function getRowInnerMaxHeight(rowEl) {
    let innerHeights = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aK)(rowEl, '.fc-scrollgrid-sync-inner').map(getElHeight);
    if (innerHeights.length) {
        return Math.max(...innerHeights);
    }
    return 0;
}
function getElHeight(el) {
    return el.offsetHeight; // better to deal with integers, for rounding, for PureComponent
}
function renderMacroColGroup(colGroupStats, shrinkWidths) {
    let children = colGroupStats.map((colGroupStat, i) => {
        let width = colGroupStat.width;
        if (width === 'shrink') {
            width = colGroupStat.totalColWidth + (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c6)(shrinkWidths[i]) + 1; // +1 for border :(
        }
        return ( // eslint-disable-next-line react/jsx-key
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("col", { style: { width } }));
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('colgroup', {}, ...children);
}
function compileColGroupStat(colGroupConfig) {
    let totalColWidth = sumColProp(colGroupConfig.cols, 'width'); // excludes "shrink"
    let totalColMinWidth = sumColProp(colGroupConfig.cols, 'minWidth');
    let hasShrinkCol = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b_)(colGroupConfig.cols);
    let allowXScrolling = colGroupConfig.width !== 'shrink' && Boolean(totalColWidth || totalColMinWidth || hasShrinkCol);
    return {
        hasShrinkCol,
        totalColWidth,
        totalColMinWidth,
        allowXScrolling,
        cols: colGroupConfig.cols,
        width: colGroupConfig.width,
    };
}
function sumColProp(cols, propName) {
    let total = 0;
    for (let col of cols) {
        let val = col[propName];
        if (typeof val === 'number') {
            total += val * (col.span || 1);
        }
    }
    return total;
}
const COL_GROUP_STAT_EQUALITY = {
    cols: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c7,
};
function isColGroupStatsEqual(stat0, stat1) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aI)(stat0, stat1, COL_GROUP_STAT_EQUALITY);
}
// for memoizers...
function initScrollSyncer(isVertical, ...scrollEls) {
    return new ScrollSyncer(isVertical, scrollEls);
}
function destroyScrollSyncer(scrollSyncer) {
    scrollSyncer.destroy();
}
function initStickyScrolling(scrollEl, isRtl) {
    return new StickyScrolling(scrollEl, isRtl);
}




/***/ },

/***/ 317
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(318);






const OPTION_REFINERS = {
    allDaySlot: Boolean,
};

var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/timegrid',
    initialView: 'timeGridWeek',
    optionRefiners: OPTION_REFINERS,
    views: {
        timeGrid: {
            component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayTimeColsView,
            usesMinMaxTime: true,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true, // a bad name. confused with overlap/constraint system
        },
        timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 },
        },
        timeGridWeek: {
            type: 'timeGrid',
            duration: { weeks: 1 },
        },
    },
});




/***/ },

/***/ 318
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayTimeCols: () => (/* binding */ DayTimeCols),
/* harmony export */   DayTimeColsSlicer: () => (/* binding */ DayTimeColsSlicer),
/* harmony export */   DayTimeColsView: () => (/* binding */ DayTimeColsView),
/* harmony export */   TimeCols: () => (/* binding */ TimeCols),
/* harmony export */   TimeColsSlatsCoords: () => (/* binding */ TimeColsSlatsCoords),
/* harmony export */   TimeColsView: () => (/* binding */ TimeColsView),
/* harmony export */   buildDayRanges: () => (/* binding */ buildDayRanges),
/* harmony export */   buildSlatMetas: () => (/* binding */ buildSlatMetas),
/* harmony export */   buildTimeColsModel: () => (/* binding */ buildTimeColsModel)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony import */ var _fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(313);




class AllDaySplitter extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW {
    getKeyInfo() {
        return {
            allDay: {},
            timed: {},
        };
    }
    getKeysForDateSpan(dateSpan) {
        if (dateSpan.allDay) {
            return ['allDay'];
        }
        return ['timed'];
    }
    getKeysForEventDef(eventDef) {
        if (!eventDef.allDay) {
            return ['timed'];
        }
        if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bN)(eventDef)) {
            return ['timed', 'allDay'];
        }
        return ['allDay'];
    }
}

const DEFAULT_SLAT_LABEL_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'short',
});
function TimeColsAxisCell(props) {
    let classNames = [
        'fc-timegrid-slot',
        'fc-timegrid-slot-label',
        props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
    ];
    return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.V.Consumer, null, (context) => {
        if (!props.isLabeled) {
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: classNames.join(' '), "data-time": props.isoTimeStr }));
        }
        let { dateEnv, options, viewApi } = context;
        let labelFormat = // TODO: fully pre-parse
         options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
            Array.isArray(options.slotLabelFormat) ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(options.slotLabelFormat[0]) :
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(options.slotLabelFormat);
        let renderProps = {
            level: 0,
            time: props.time,
            date: dateEnv.toDate(props.date),
            view: viewApi,
            text: dateEnv.format(props.date, labelFormat),
        };
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elClasses: classNames, elAttrs: {
                'data-time': props.isoTimeStr,
            }, renderProps: renderProps, generatorName: "slotLabelContent", customGenerator: options.slotLabelContent, defaultGenerator: renderInnerContent, classNameGenerator: options.slotLabelClassNames, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: [
                    'fc-timegrid-slot-label-cushion',
                    'fc-scrollgrid-shrink-cushion',
                ] })))));
    }));
}
function renderInnerContent(props) {
    return props.text;
}

class TimeBodyAxis extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        return this.props.slatMetas.map((slatMeta) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: slatMeta.key },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta)))));
    }
}

const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({ week: 'short' });
const AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
class TimeColsView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
        this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.scrollerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.state = {
            slatCoords: null,
        };
        this.handleScrollTopRequest = (scrollTop) => {
            let scrollerEl = this.scrollerElRef.current;
            if (scrollerEl) { // TODO: not sure how this could ever be null. weirdness with the reducer
                scrollerEl.scrollTop = scrollTop;
            }
        };
        /* Header Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        this.renderHeadAxis = (rowKey, frameHeight = '') => {
            let { options } = this.context;
            let { dateProfile } = this.props;
            let range = dateProfile.renderRange;
            let dayCnt = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bj)(range.start, range.end);
            // only do in day views (to avoid doing in week views that dont need it)
            let navLinkAttrs = (dayCnt === 1)
                ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(this.context, range.start, 'week')
                : {};
            if (options.weekNumbers && rowKey === 'day') {
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cn, { elTag: "th", elClasses: [
                        'fc-timegrid-axis',
                        'fc-scrollgrid-shrink',
                    ], elAttrs: {
                        'aria-hidden': true,
                    }, date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: [
                        'fc-timegrid-axis-frame',
                        'fc-scrollgrid-shrink-frame',
                        'fc-timegrid-axis-frame-liquid',
                    ].join(' '), style: { height: frameHeight } },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "a", elClasses: [
                            'fc-timegrid-axis-cushion',
                            'fc-scrollgrid-shrink-cushion',
                            'fc-scrollgrid-sync-inner',
                        ], elAttrs: navLinkAttrs })))));
            }
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { "aria-hidden": true, className: "fc-timegrid-axis" },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })));
        };
        /* Table Component Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
        // but DayGrid still needs to have classNames on inner elements in order to measure.
        this.renderTableRowAxis = (rowHeight) => {
            let { options, viewApi } = this.context;
            let renderProps = {
                text: options.allDayText,
                view: viewApi,
            };
            return (
            // TODO: make reusable hook. used in list view too
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elClasses: [
                    'fc-timegrid-axis',
                    'fc-scrollgrid-shrink',
                ], elAttrs: {
                    'aria-hidden': true,
                }, renderProps: renderProps, generatorName: "allDayContent", customGenerator: options.allDayContent, defaultGenerator: renderAllDayInner, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: [
                    'fc-timegrid-axis-frame',
                    'fc-scrollgrid-shrink-frame',
                    rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : '',
                ].join(' '), style: { height: rowHeight } },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "span", elClasses: [
                        'fc-timegrid-axis-cushion',
                        'fc-scrollgrid-shrink-cushion',
                        'fc-scrollgrid-sync-inner',
                    ] })))));
        };
        this.handleSlatCoords = (slatCoords) => {
            this.setState({ slatCoords });
        };
    }
    // rendering
    // ----------------------------------------------------------------------------------------------------
    renderSimpleLayout(headerRowContent, allDayContent, timeContent) {
        let { context, props } = this;
        let sections = [];
        let stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca)(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                chunk: { content: allDayContent },
            });
            sections.push({
                type: 'body',
                key: 'all-day-divider',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunk: {
                scrollerElRef: this.scrollerElRef,
                content: timeContent,
            },
        });
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: context.viewSpec },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: 'shrink' }], sections: sections })));
    }
    renderHScrollLayout(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
        let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        let { context, props } = this;
        let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca)(context.options);
        let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c9)(context.options);
        let sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: (arg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation" }, this.renderHeadAxis('day', arg.rowSyncHeights[0]))),
                    },
                    {
                        key: 'cols',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                ],
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation" }, this.renderTableRowAxis(contentArg.rowSyncHeights[0]))),
                    },
                    {
                        key: 'cols',
                        content: allDayContent,
                    },
                ],
            });
            sections.push({
                key: 'all-day-divider',
                type: 'body',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { colSpan: 2, className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        let isNowIndicator = context.options.nowIndicator;
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunks: [
                {
                    key: 'axis',
                    content: (arg) => (
                    // TODO: make this now-indicator arrow more DRY with TimeColsContent
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-chunk" },
                        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { "aria-hidden": true, style: { height: arg.expandRows ? arg.clientHeight : '' } },
                            arg.tableColGroupNode,
                            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null,
                                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeBodyAxis, { slatMetas: slatMetas }))),
                        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" },
                            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a6, { unit: isNowIndicator ? 'minute' : 'day' /* hacky */ }, (nowDate) => {
                                let nowIndicatorTop = isNowIndicator &&
                                    slatCoords &&
                                    slatCoords.safeComputeTop(nowDate); // might return void
                                if (typeof nowIndicatorTop === 'number') {
                                    return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, { elClasses: ['fc-timegrid-now-indicator-arrow'], elStyle: { top: nowIndicatorTop }, isAxis: true, date: nowDate }));
                                }
                                return null;
                            })))),
                },
                {
                    key: 'cols',
                    scrollerElRef: this.scrollerElRef,
                    content: timeContent,
                },
            ],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                key: 'footer',
                type: 'footer',
                isSticky: true,
                chunks: [
                    {
                        key: 'axis',
                        content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c8,
                    },
                    {
                        key: 'cols',
                        content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c8,
                    },
                ],
            });
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: context.viewSpec },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, forPrint: props.forPrint, collapsibleWidth: false, colGroups: [
                    { width: 'shrink', cols: [{ width: 'shrink' }] },
                    { cols: [{ span: colCnt, minWidth: dayMinWidth }] },
                ], sections: sections })));
    }
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    getAllDayMaxEventProps() {
        let { dayMaxEvents, dayMaxEventRows } = this.context.options;
        if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
            dayMaxEvents = undefined;
            dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
        }
        return { dayMaxEvents, dayMaxEventRows };
    }
}
function renderAllDayInner(renderProps) {
    return renderProps.text;
}

class TimeColsSlatsCoords {
    constructor(positions, dateProfile, slotDuration) {
        this.positions = positions;
        this.dateProfile = dateProfile;
        this.slotDuration = slotDuration;
    }
    safeComputeTop(date) {
        let { dateProfile } = this;
        if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.G)(dateProfile.currentRange, date)) {
            let startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(date);
            let timeMs = date.valueOf() - startOfDayDate.valueOf();
            if (timeMs >= (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(dateProfile.slotMinTime) &&
                timeMs < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(dateProfile.slotMaxTime)) {
                return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(timeMs));
            }
        }
        return null;
    }
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    computeDateTop(when, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(when);
        }
        return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(when.valueOf() - startOfDayDate.valueOf()));
    }
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
    // Eventually allow computation with arbirary slat dates.
    computeTimeTop(duration) {
        let { positions, dateProfile } = this;
        let len = positions.els.length;
        // floating-point value of # of slots covered
        let slatCoverage = (duration.milliseconds - (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(dateProfile.slotMinTime)) / (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(this.slotDuration);
        let slatIndex;
        let slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because slotMinTime/slotMaxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return positions.tops[slatIndex] +
            positions.getHeight(slatIndex) * slatRemainder;
    }
}

class TimeColsSlatsBody extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props, context } = this;
        let { options } = context;
        let { slatElRefs } = props;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.slatMetas.map((slatMeta, i) => {
            let renderProps = {
                time: slatMeta.time,
                date: context.dateEnv.toDate(slatMeta.date),
                view: context.viewApi,
            };
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
                props.axis && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta))),
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elClasses: [
                        'fc-timegrid-slot',
                        'fc-timegrid-slot-lane',
                        !slatMeta.isLabeled && 'fc-timegrid-slot-minor',
                    ], elAttrs: {
                        'data-time': slatMeta.isoTimeStr,
                    }, renderProps: renderProps, generatorName: "slotLaneContent", customGenerator: options.slotLaneContent, classNameGenerator: options.slotLaneClassNames, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount })));
        })));
    }
}

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
class TimeColsSlats extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.slatElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd();
    }
    render() {
        let { props, context } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: this.rootElRef, className: "fc-timegrid-slots" },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { "aria-hidden": true, className: context.theme.getClass('table'), style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                    height: props.minHeight,
                } },
                props.tableColGroupNode /* relies on there only being a single <col> for the axis */,
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas }))));
    }
    componentDidMount() {
        this.updateSizing();
    }
    componentDidUpdate() {
        this.updateSizing();
    }
    componentWillUnmount() {
        if (this.props.onCoords) {
            this.props.onCoords(null);
        }
    }
    updateSizing() {
        let { context, props } = this;
        if (props.onCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            let rootEl = this.rootElRef.current;
            if (rootEl.offsetHeight) { // not hidden by css
                props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
            }
        }
    }
}
function collectSlatEls(elMap, slatMetas) {
    return slatMetas.map((slatMeta) => elMap[slatMeta.key]);
}

function splitSegsByCol(segs, colCnt) {
    let segsByCol = [];
    let i;
    for (i = 0; i < colCnt; i += 1) {
        segsByCol.push([]);
    }
    if (segs) {
        for (i = 0; i < segs.length; i += 1) {
            segsByCol[segs[i].col].push(segs[i]);
        }
    }
    return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
    let byRow = [];
    if (!ui) {
        for (let i = 0; i < colCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (let i = 0; i < colCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (let seg of ui.segs) {
            byRow[seg.col].segs.push(seg);
        }
    }
    return byRow;
}

class TimeColMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.co, { elClasses: ['fc-timegrid-more-link'], elStyle: {
                top: props.top,
                bottom: props.bottom,
            }, allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props), defaultGenerator: renderMoreLinkInner, forceTimed: true }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky'] }))));
    }
}
function renderMoreLinkInner(props) {
    return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
    let hierarchy = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.by();
    if (strictOrder != null) {
        hierarchy.strictOrder = strictOrder;
    }
    if (maxStackCnt != null) {
        hierarchy.maxStackCnt = maxStackCnt;
    }
    let hiddenEntries = hierarchy.addSegs(segInputs);
    let hiddenGroups = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bC)(hiddenEntries);
    let web = buildWeb(hierarchy);
    web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
    let segRects = webToRects(web);
    return { segRects, hiddenGroups };
}
function buildWeb(hierarchy) {
    const { entriesByLevel } = hierarchy;
    const buildNode = cacheable((level, lateral) => level + ':' + lateral, (level, lateral) => {
        let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
        let nextLevelRes = buildNodes(siblingRange, buildNode);
        let entry = entriesByLevel[level][lateral];
        return [
            Object.assign(Object.assign({}, entry), { nextLevelNodes: nextLevelRes[0] }),
            entry.thickness + nextLevelRes[1], // the pressure builds
        ];
    });
    return buildNodes(entriesByLevel.length
        ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
        : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
    if (!siblingRange) {
        return [[], 0];
    }
    let { level, lateralStart, lateralEnd } = siblingRange;
    let lateral = lateralStart;
    let pairs = [];
    while (lateral < lateralEnd) {
        pairs.push(buildNode(level, lateral));
        lateral += 1;
    }
    pairs.sort(cmpDescPressures);
    return [
        pairs.map(extractNode),
        pairs[0][1], // first item's pressure
    ];
}
function cmpDescPressures(a, b) {
    return b[1] - a[1];
}
function extractNode(a) {
    return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
    let { levelCoords, entriesByLevel } = hierarchy;
    let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
    let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
    let levelCnt = levelCoords.length;
    let level = subjectLevel;
    // skip past levels that are too high up
    for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
        ; // do nothing
    for (; level < levelCnt; level += 1) {
        let entries = entriesByLevel[level];
        let entry;
        let searchIndex = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(entries, subjectEntry.span.start, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bA);
        let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
        let lateralEnd = lateralStart;
        while ( // loop through entries that horizontally intersect
        (entry = entries[lateralEnd]) && // but not past the whole seg list
            entry.span.start < subjectEntry.span.end) {
            lateralEnd += 1;
        }
        if (lateralStart < lateralEnd) {
            return { level, lateralStart, lateralEnd };
        }
    }
    return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
    const stretchNode = cacheable((node, startCoord, prevThickness) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bz)(node), (node, startCoord, prevThickness) => {
        let { nextLevelNodes, thickness } = node;
        let allThickness = thickness + prevThickness;
        let thicknessFraction = thickness / allThickness;
        let endCoord;
        let newChildren = [];
        if (!nextLevelNodes.length) {
            endCoord = totalThickness;
        }
        else {
            for (let childNode of nextLevelNodes) {
                if (endCoord === undefined) {
                    let res = stretchNode(childNode, startCoord, allThickness);
                    endCoord = res[0];
                    newChildren.push(res[1]);
                }
                else {
                    let res = stretchNode(childNode, endCoord, 0);
                    newChildren.push(res[1]);
                }
            }
        }
        let newThickness = (endCoord - startCoord) * thicknessFraction;
        return [endCoord - newThickness, Object.assign(Object.assign({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
    });
    return topLevelNodes.map((node) => stretchNode(node, 0, 0)[1]);
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
    let rects = [];
    const processNode = cacheable((node, levelCoord, stackDepth) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bz)(node), (node, levelCoord, stackDepth) => {
        let rect = Object.assign(Object.assign({}, node), { levelCoord,
            stackDepth, stackForward: 0 });
        rects.push(rect);
        return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
    });
    function processNodes(nodes, levelCoord, stackDepth) {
        let stackForward = 0;
        for (let node of nodes) {
            stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
        }
        return stackForward;
    }
    processNodes(topLevelNodes, 0, 0);
    return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
    const cache = {};
    return (...args) => {
        let key = keyFunc(...args);
        return (key in cache)
            ? cache[key]
            : (cache[key] = workFunc(...args));
    };
}

function computeSegVCoords(segs, colDate, slatCoords = null, eventMinHeight = 0) {
    let vcoords = [];
    if (slatCoords) {
        for (let i = 0; i < segs.length; i += 1) {
            let seg = segs[i];
            let spanStart = slatCoords.computeDateTop(seg.start, colDate);
            let spanEnd = Math.max(spanStart + (eventMinHeight || 0), // :(
            slatCoords.computeDateTop(seg.end, colDate));
            vcoords.push({
                start: Math.round(spanStart),
                end: Math.round(spanEnd), //
            });
        }
    }
    return vcoords;
}
function computeFgSegPlacements(segs, segVCoords, // might not have for every seg
eventOrderStrict, eventMaxStack) {
    let segInputs = [];
    let dumbSegs = []; // segs without coords
    for (let i = 0; i < segs.length; i += 1) {
        let vcoords = segVCoords[i];
        if (vcoords) {
            segInputs.push({
                index: i,
                thickness: 1,
                span: vcoords,
            });
        }
        else {
            dumbSegs.push(segs[i]);
        }
    }
    let { segRects, hiddenGroups } = buildPositioning(segInputs, eventOrderStrict, eventMaxStack);
    let segPlacements = [];
    for (let segRect of segRects) {
        segPlacements.push({
            seg: segs[segRect.index],
            rect: segRect,
        });
    }
    for (let dumbSeg of dumbSegs) {
        segPlacements.push({ seg: dumbSeg, rect: null });
    }
    return { segPlacements, hiddenGroups };
}

const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: false,
});
class TimeColEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cg, Object.assign({}, this.props, { elClasses: [
                'fc-timegrid-event',
                'fc-v-event',
                this.props.isShort && 'fc-timegrid-event-short',
            ], defaultTimeFormat: DEFAULT_TIME_FORMAT })));
    }
}

class TimeCol extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.sortEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bP);
    }
    // TODO: memoize event-placement?
    render() {
        let { props, context } = this;
        let { options } = context;
        let isSelectMirror = options.selectMirror;
        let mirrorSegs = // yuck
         (props.eventDrag && props.eventDrag.segs) ||
            (props.eventResize && props.eventResize.segs) ||
            (isSelectMirror && props.dateSelectionSegs) ||
            [];
        let interactionAffectedInstances = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ci, { elTag: "td", elRef: props.elRef, elClasses: [
                'fc-timegrid-col',
                ...(props.extraClassNames || []),
            ], elAttrs: Object.assign({ role: 'gridcell' }, props.extraDataAttrs), date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraRenderProps: props.extraRenderProps }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-frame" },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-bg" },
                this.renderFillSegs(props.businessHourSegs, 'non-business'),
                this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                this.renderFillSegs(props.dateSelectionSegs, 'highlight')),
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)),
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror), 'mirror')),
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(props.nowIndicatorSegs)),
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cj)(options) && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-col-misc'] }))))));
    }
    renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
        let { props } = this;
        if (props.forPrint) {
            return renderPlainFgSegs(sortedFgSegs, props);
        }
        return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey);
    }
    renderPositionedFgSegs(segs, // if not mirror, needs to be sorted
    segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
        let { eventMaxStack, eventShortHeight, eventOrderStrict, eventMinHeight } = this.context.options;
        let { date, slatCoords, eventSelection, todayRange, nowDate } = this.props;
        let isMirror = isDragging || isResizing || isDateSelecting;
        let segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
        let { segPlacements, hiddenGroups } = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            this.renderHiddenGroups(hiddenGroups, segs),
            segPlacements.map((segPlacement) => {
                let { seg, rect } = segPlacement;
                let instanceId = seg.eventRange.instance.instanceId;
                let isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
                let vStyle = computeSegVStyle(rect && rect.span);
                let hStyle = (!isMirror && rect) ? this.computeSegHStyle(rect) : { left: 0, right: 0 };
                let isInset = Boolean(rect) && rect.stackForward > 0;
                let isShort = Boolean(rect) && (rect.span.end - rect.span.start) < eventShortHeight; // look at other places for this problem
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-timegrid-event-harness' +
                        (isInset ? ' fc-timegrid-event-harness-inset' : ''), key: forcedKey || instanceId, style: Object.assign(Object.assign({ visibility: isVisible ? '' : 'hidden' }, vStyle), hStyle) },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: isShort }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, todayRange, nowDate)))));
            })));
    }
    // will already have eventMinHeight applied because segInputs already had it
    renderHiddenGroups(hiddenGroups, segs) {
        let { extraDateSpan, dateProfile, todayRange, nowDate, eventSelection, eventDrag, eventResize } = this.props;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenGroups.map((hiddenGroup) => {
            let positionCss = computeSegVStyle(hiddenGroup.span);
            let hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMoreLink, { key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bu)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cp)(hiddenSegs)), hiddenSegs: hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
        })));
    }
    renderFillSegs(segs, fillType) {
        let { props, context } = this;
        let segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
        let children = segVCoords.map((vcoords, i) => {
            let seg = segs[i];
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR)(seg.eventRange), className: "fc-timegrid-bg-harness", style: computeSegVStyle(vcoords) }, fillType === 'bg-event' ?
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cm, Object.assign({ seg: seg }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, props.todayRange, props.nowDate))) :
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cl)(fillType)));
        });
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
    }
    renderNowIndicator(segs) {
        let { slatCoords, date } = this.props;
        if (!slatCoords) {
            return null;
        }
        return segs.map((seg, i) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch
        // key doesn't matter. will only ever be one
        , { 
            // key doesn't matter. will only ever be one
            key: i, elClasses: ['fc-timegrid-now-indicator-line'], elStyle: {
                top: slatCoords.computeDateTop(seg.start, date),
            }, isAxis: false, date: date })));
    }
    computeSegHStyle(segHCoords) {
        let { isRtl, options } = this.context;
        let shouldOverlap = options.slotEventOverlap;
        let nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
        let farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
        let left; // amount of space from left edge, a fraction of the total width
        let right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
        }
        if (isRtl) {
            left = 1 - farCoord;
            right = nearCoord;
        }
        else {
            left = nearCoord;
            right = 1 - farCoord;
        }
        let props = {
            zIndex: segHCoords.stackDepth + 1,
            left: left * 100 + '%',
            right: right * 100 + '%',
        };
        if (shouldOverlap && !segHCoords.stackForward) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    }
}
function renderPlainFgSegs(sortedFgSegs, { todayRange, nowDate, eventSelection, eventDrag, eventResize }) {
    let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
        (eventResize ? eventResize.affectedInstances : null) ||
        {};
    return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, sortedFgSegs.map((seg) => {
        let instanceId = seg.eventRange.instance.instanceId;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, todayRange, nowDate)))));
    })));
}
function computeSegVStyle(segVCoords) {
    if (!segVCoords) {
        return { top: '', bottom: '' };
    }
    return {
        top: segVCoords.start,
        bottom: -segVCoords.end,
    };
}
function compileSegsFromEntries(segEntries, allSegs) {
    return segEntries.map((segEntry) => allSegs[segEntry.index]);
}

class TimeColsContent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
        this.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
        this.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
        this.splitNowIndicatorSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
        this.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
        this.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByCol);
        this.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByCol);
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd();
    }
    render() {
        let { props, context } = this;
        let nowIndicatorTop = context.options.nowIndicator &&
            props.slatCoords &&
            props.slatCoords.safeComputeTop(props.nowDate); // might return void
        let colCnt = props.cells.length;
        let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
        let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
        let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
        let nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
        let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
        let eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
        let eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-cols", ref: this.rootElRef },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { role: "presentation", style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                } },
                props.tableColGroupNode,
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", { role: "presentation" },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "row" },
                        props.axis && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { "aria-hidden": true, className: "fc-timegrid-col fc-timegrid-axis" },
                            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-frame" },
                                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === 'number' && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, { elClasses: ['fc-timegrid-now-indicator-arrow'], elStyle: { top: nowIndicatorTop }, isAxis: true, date: props.nowDate })))))),
                        props.cells.map((cell, i) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCol, { key: cell.key, elRef: this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i], bgEventSegs: bgEventSegsByRow[i], businessHourSegs: businessHourSegsByRow[i], nowIndicatorSegs: nowIndicatorSegsByRow[i], dateSelectionSegs: dateSelectionSegsByRow[i], eventDrag: eventDragByRow[i], eventResize: eventResizeByRow[i], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint }))))))));
    }
    componentDidMount() {
        this.updateCoords();
    }
    componentDidUpdate() {
        this.updateCoords();
    }
    updateCoords() {
        let { props } = this;
        if (props.onColCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            props.onColCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
            false));
        }
    }
}
function collectCellEls(elMap, cells) {
    return cells.map((cell) => elMap[cell.key]);
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
class TimeCols extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.processSlotOptions = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(processSlotOptions);
        this.state = {
            slatCoords: null,
        };
        this.handleRootEl = (el) => {
            if (el) {
                this.context.registerInteractiveComponent(this, {
                    el,
                    isHitComboAllowed: this.props.isHitComboAllowed,
                });
            }
            else {
                this.context.unregisterInteractiveComponent(this);
            }
        };
        this.handleScrollRequest = (request) => {
            let { onScrollTopRequest } = this.props;
            let { slatCoords } = this.state;
            if (onScrollTopRequest && slatCoords) {
                if (request.time) {
                    let top = slatCoords.computeTimeTop(request.time);
                    top = Math.ceil(top); // zoom can give weird floating-point values. rather scroll a little bit further
                    if (top) {
                        top += 1; // to overcome top border that slots beyond the first have. looks better
                    }
                    onScrollTopRequest(top);
                }
                return true;
            }
            return false;
        };
        this.handleColCoords = (colCoords) => {
            this.colCoords = colCoords;
        };
        this.handleSlatCoords = (slatCoords) => {
            this.setState({ slatCoords });
            if (this.props.onSlatCoords) {
                this.props.onSlatCoords(slatCoords);
            }
        };
    }
    render() {
        let { props, state } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */, onCoords: this.handleSlatCoords }),
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })));
    }
    componentDidMount() {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    }
    componentDidUpdate(prevProps) {
        this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
    }
    componentWillUnmount() {
        this.scrollResponder.detach();
    }
    queryHit(positionLeft, positionTop) {
        let { dateEnv, options } = this.context;
        let { colCoords } = this;
        let { dateProfile } = this.props;
        let { slatCoords } = this.state;
        let { snapDuration, snapsPerSlot } = this.processSlotOptions(this.props.slotDuration, options.snapDuration);
        let colIndex = colCoords.leftToIndex(positionLeft);
        let slatIndex = slatCoords.positions.topToIndex(positionTop);
        if (colIndex != null && slatIndex != null) {
            let cell = this.props.cells[colIndex];
            let slatTop = slatCoords.positions.tops[slatIndex];
            let slatHeight = slatCoords.positions.getHeight(slatIndex);
            let partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            let localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            let snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            let dayDate = this.props.cells[colIndex].date;
            let time = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bn)(dateProfile.slotMinTime, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bm)(snapDuration, snapIndex));
            let start = dateEnv.add(dayDate, time);
            let end = dateEnv.add(start, snapDuration);
            return {
                dateProfile,
                dateSpan: Object.assign({ range: { start, end }, allDay: false }, cell.extraDateSpan),
                dayEl: colCoords.els[colIndex],
                rect: {
                    left: colCoords.lefts[colIndex],
                    right: colCoords.rights[colIndex],
                    top: slatTop,
                    bottom: slatTop + slatHeight,
                },
                layer: 0,
            };
        }
        return null;
    }
}
function processSlotOptions(slotDuration, snapDurationOverride) {
    let snapDuration = snapDurationOverride || slotDuration;
    let snapsPerSlot = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.br)(slotDuration, snapDuration);
    if (snapsPerSlot === null) {
        snapDuration = slotDuration;
        snapsPerSlot = 1;
        // TODO: say warning?
    }
    return { snapDuration, snapsPerSlot };
}

class DayTimeColsSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bU {
    sliceRange(range, dayRanges) {
        let segs = [];
        for (let col = 0; col < dayRanges.length; col += 1) {
            let segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(range, dayRanges[col]);
            if (segRange) {
                segs.push({
                    start: segRange.start,
                    end: segRange.end,
                    isStart: segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: segRange.end.valueOf() === range.end.valueOf(),
                    col,
                });
            }
        }
        return segs;
    }
}

class DayTimeCols extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.buildDayRanges = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDayRanges);
        this.slicer = new DayTimeColsSlicer();
        this.timeColsRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    }
    render() {
        let { props, context } = this;
        let { dateProfile, dayTableModel } = props;
        let { nowIndicator, nextDayThreshold } = context.options;
        let dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
        // give it the first row of cells
        // TODO: would move this further down hierarchy, but sliceNowDate needs it
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a6, { unit: nowIndicator ? 'minute' : 'day' }, (nowDate, todayRange) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCols, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile: dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate: nowDate, nowIndicatorSegs: nowIndicator && this.slicer.sliceNowDate(nowDate, dateProfile, nextDayThreshold, context, dayRanges), todayRange: todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords })))));
    }
}
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
    let ranges = [];
    for (let date of dayTableModel.headerDates) {
        ranges.push({
            start: dateEnv.add(date, dateProfile.slotMinTime),
            end: dateEnv.add(date, dateProfile.slotMaxTime),
        });
    }
    return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
const STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
    let dayStart = new Date(0);
    let slatTime = slotMinTime;
    let slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0);
    let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
    let metas = [];
    while ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(slatTime) < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(slotMaxTime)) {
        let date = dateEnv.add(dayStart, slatTime);
        let isLabeled = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.br)(slatIterator, labelInterval) !== null;
        metas.push({
            date,
            time: slatTime,
            key: date.toISOString(),
            isoTimeStr: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(date),
            isLabeled,
        });
        slatTime = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bn)(slatTime, slotDuration);
        slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bn)(slatIterator, slotDuration);
    }
    return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
    let i;
    let labelInterval;
    let slotsPerLabel;
    // find the smallest stock label interval that results in more than one slots-per-label
    for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
        labelInterval = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(STOCK_SUB_DURATIONS[i]);
        slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.br)(labelInterval, slotDuration);
        if (slotsPerLabel !== null && slotsPerLabel > 1) {
            return labelInterval;
        }
    }
    return slotDuration; // fall back
}

class DayTimeColsView extends TimeColsView {
    constructor() {
        super(...arguments);
        this.buildTimeColsModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildTimeColsModel);
        this.buildSlatMetas = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildSlatMetas);
    }
    render() {
        let { options, dateEnv, dateProfileGenerator } = this.context;
        let { props } = this;
        let { dateProfile } = props;
        let dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
        let splitProps = this.allDaySplitter.splitProps(props);
        let slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
        let { dayMinWidth } = options;
        let hasAttachedAxis = !dayMinWidth;
        let hasDetachedAxis = dayMinWidth;
        let headerContent = options.dayHeaders && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI, { dates: dayTableModel.headerDates, dateProfile: dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null }));
        let allDayContent = (options.allDaySlot !== false) && ((contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__.DayTable, Object.assign({}, splitProps.allDay, { dateProfile: dateProfile, dayTableModel: dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, this.getAllDayMaxEventProps()))));
        let timeGridContent = (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTimeCols, Object.assign({}, splitProps.timed, { dayTableModel: dayTableModel, dateProfile: dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas: slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: this.handleScrollTopRequest })));
        return hasDetachedAxis
            ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords)
            : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
    }
}
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
    let daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bM(dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bT(daySeries, false);
}

var css_248z = ".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:\"\\00a0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct)(css_248z);




/***/ },

/***/ 321
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _fullcalendar_premium_common_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(322);







var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/timeline',
    premiumReleaseDate: '2026-06-18',
    deps: [_fullcalendar_premium_common_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
    initialView: 'timelineDay',
    views: {
        timeline: {
            component: _internal_js__WEBPACK_IMPORTED_MODULE_2__.TimelineView,
            usesMinMaxTime: true,
            eventResizableFromStart: true, // how is this consumed for TimelineView tho?
        },
        timelineDay: {
            type: 'timeline',
            duration: { days: 1 },
        },
        timelineWeek: {
            type: 'timeline',
            duration: { weeks: 1 },
        },
        timelineMonth: {
            type: 'timeline',
            duration: { months: 1 },
        },
        timelineYear: {
            type: 'timeline',
            duration: { years: 1 },
        },
    },
});




/***/ },

/***/ 322
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineCoords: () => (/* binding */ TimelineCoords),
/* harmony export */   TimelineHeader: () => (/* binding */ TimelineHeader),
/* harmony export */   TimelineHeaderRows: () => (/* binding */ TimelineHeaderRows),
/* harmony export */   TimelineLane: () => (/* binding */ TimelineLane),
/* harmony export */   TimelineLaneBg: () => (/* binding */ TimelineLaneBg),
/* harmony export */   TimelineLaneSlicer: () => (/* binding */ TimelineLaneSlicer),
/* harmony export */   TimelineSlats: () => (/* binding */ TimelineSlats),
/* harmony export */   TimelineView: () => (/* binding */ TimelineView),
/* harmony export */   buildSlatCols: () => (/* binding */ buildSlatCols),
/* harmony export */   buildTimelineDateProfile: () => (/* binding */ buildTimelineDateProfile),
/* harmony export */   coordToCss: () => (/* binding */ coordToCss),
/* harmony export */   coordsToCss: () => (/* binding */ coordsToCss)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony import */ var _fullcalendar_scrollgrid_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);




const MIN_AUTO_LABELS = 18; // more than `12` months but less that `24` hours
const MAX_AUTO_SLOTS_PER_LABEL = 6; // allows 6 10-min slots in an hour
const MAX_AUTO_CELLS = 200; // allows 4-days to have a :30 slot duration
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG.MAX_TIMELINE_SLOTS = 1000;
// potential nice values for slot-duration and interval-duration
const STOCK_SUB_DURATIONS = [
    { years: 1 },
    { months: 1 },
    { days: 1 },
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { minutes: 10 },
    { minutes: 5 },
    { minutes: 1 },
    { seconds: 30 },
    { seconds: 15 },
    { seconds: 10 },
    { seconds: 5 },
    { seconds: 1 },
    { milliseconds: 500 },
    { milliseconds: 100 },
    { milliseconds: 10 },
    { milliseconds: 1 },
];
function buildTimelineDateProfile(dateProfile, dateEnv, allOptions, dateProfileGenerator) {
    let tDateProfile = {
        labelInterval: allOptions.slotLabelInterval,
        slotDuration: allOptions.slotDuration,
    };
    validateLabelAndSlot(tDateProfile, dateProfile, dateEnv); // validate after computed grid duration
    ensureLabelInterval(tDateProfile, dateProfile, dateEnv);
    ensureSlotDuration(tDateProfile, dateProfile, dateEnv);
    let input = allOptions.slotLabelFormat;
    let rawFormats = Array.isArray(input) ? input :
        (input != null) ? [input] :
            computeHeaderFormats(tDateProfile, dateProfile, dateEnv, allOptions);
    tDateProfile.headerFormats = rawFormats.map((rawFormat) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(rawFormat));
    tDateProfile.isTimeScale = Boolean(tDateProfile.slotDuration.milliseconds);
    let largeUnit = null;
    if (!tDateProfile.isTimeScale) {
        const slotUnit = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c)(tDateProfile.slotDuration).unit;
        if (/year|month|week/.test(slotUnit)) {
            largeUnit = slotUnit;
        }
    }
    tDateProfile.largeUnit = largeUnit;
    tDateProfile.emphasizeWeeks =
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bl)(tDateProfile.slotDuration) === 1 &&
            currentRangeAs('weeks', dateProfile, dateEnv) >= 2 &&
            !allOptions.businessHours;
    /*
    console.log('label interval =', timelineView.labelInterval.humanize())
    console.log('slot duration =', timelineView.slotDuration.humanize())
    console.log('header formats =', timelineView.headerFormats)
    console.log('isTimeScale', timelineView.isTimeScale)
    console.log('largeUnit', timelineView.largeUnit)
    */
    let rawSnapDuration = allOptions.snapDuration;
    let snapDuration;
    let snapsPerSlot;
    if (rawSnapDuration) {
        snapDuration = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(rawSnapDuration);
        snapsPerSlot = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.br)(tDateProfile.slotDuration, snapDuration);
        // ^ TODO: warning if not whole?
    }
    if (snapsPerSlot == null) {
        snapDuration = tDateProfile.slotDuration;
        snapsPerSlot = 1;
    }
    tDateProfile.snapDuration = snapDuration;
    tDateProfile.snapsPerSlot = snapsPerSlot;
    // more...
    let timeWindowMs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(dateProfile.slotMaxTime) - (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(dateProfile.slotMinTime);
    // TODO: why not use normalizeRange!?
    let normalizedStart = normalizeDate(dateProfile.renderRange.start, tDateProfile, dateEnv);
    let normalizedEnd = normalizeDate(dateProfile.renderRange.end, tDateProfile, dateEnv);
    // apply slotMinTime/slotMaxTime
    // TODO: View should be responsible.
    if (tDateProfile.isTimeScale) {
        normalizedStart = dateEnv.add(normalizedStart, dateProfile.slotMinTime);
        normalizedEnd = dateEnv.add((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(normalizedEnd, -1), dateProfile.slotMaxTime);
    }
    tDateProfile.timeWindowMs = timeWindowMs;
    tDateProfile.normalizedRange = { start: normalizedStart, end: normalizedEnd };
    let slotDates = [];
    let date = normalizedStart;
    while (date < normalizedEnd) {
        if (isValidDate(date, tDateProfile, dateProfile, dateProfileGenerator)) {
            slotDates.push(date);
        }
        date = dateEnv.add(date, tDateProfile.slotDuration);
    }
    tDateProfile.slotDates = slotDates;
    // more...
    let snapIndex = -1;
    let snapDiff = 0; // index of the diff :(
    const snapDiffToIndex = [];
    const snapIndexToDiff = [];
    date = normalizedStart;
    while (date < normalizedEnd) {
        if (isValidDate(date, tDateProfile, dateProfile, dateProfileGenerator)) {
            snapIndex += 1;
            snapDiffToIndex.push(snapIndex);
            snapIndexToDiff.push(snapDiff);
        }
        else {
            snapDiffToIndex.push(snapIndex + 0.5);
        }
        date = dateEnv.add(date, tDateProfile.snapDuration);
        snapDiff += 1;
    }
    tDateProfile.snapDiffToIndex = snapDiffToIndex;
    tDateProfile.snapIndexToDiff = snapIndexToDiff;
    tDateProfile.snapCnt = snapIndex + 1; // is always one behind
    tDateProfile.slotCnt = tDateProfile.snapCnt / tDateProfile.snapsPerSlot;
    // more...
    tDateProfile.isWeekStarts = buildIsWeekStarts(tDateProfile, dateEnv);
    tDateProfile.cellRows = buildCellRows(tDateProfile, dateEnv);
    tDateProfile.slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.br)(tDateProfile.labelInterval, tDateProfile.slotDuration);
    return tDateProfile;
}
/*
snaps to appropriate unit
*/
function normalizeDate(date, tDateProfile, dateEnv) {
    let normalDate = date;
    if (!tDateProfile.isTimeScale) {
        normalDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(normalDate);
        if (tDateProfile.largeUnit) {
            normalDate = dateEnv.startOf(normalDate, tDateProfile.largeUnit);
        }
    }
    return normalDate;
}
/*
snaps to appropriate unit
*/
function normalizeRange(range, tDateProfile, dateEnv) {
    if (!tDateProfile.isTimeScale) {
        range = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)(range);
        if (tDateProfile.largeUnit) {
            let dayRange = range; // preserve original result
            range = {
                start: dateEnv.startOf(range.start, tDateProfile.largeUnit),
                end: dateEnv.startOf(range.end, tDateProfile.largeUnit),
            };
            // if date is partially through the interval, or is in the same interval as the start,
            // make the exclusive end be the *next* interval
            if (range.end.valueOf() !== dayRange.end.valueOf() || range.end <= range.start) {
                range = {
                    start: range.start,
                    end: dateEnv.add(range.end, tDateProfile.slotDuration),
                };
            }
        }
    }
    return range;
}
function isValidDate(date, tDateProfile, dateProfile, dateProfileGenerator) {
    if (dateProfileGenerator.isHiddenDay(date)) {
        return false;
    }
    if (tDateProfile.isTimeScale) {
        // determine if the time is within slotMinTime/slotMaxTime, which may have wacky values
        let day = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(date);
        let timeMs = date.valueOf() - day.valueOf();
        let ms = timeMs - (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bq)(dateProfile.slotMinTime); // milliseconds since slotMinTime
        ms = ((ms % 86400000) + 86400000) % 86400000; // make negative values wrap to 24hr clock
        return ms < tDateProfile.timeWindowMs; // before the slotMaxTime?
    }
    return true;
}
function validateLabelAndSlot(tDateProfile, dateProfile, dateEnv) {
    const { currentRange } = dateProfile;
    // make sure labelInterval doesn't exceed the max number of cells
    if (tDateProfile.labelInterval) {
        const labelCnt = dateEnv.countDurationsBetween(currentRange.start, currentRange.end, tDateProfile.labelInterval);
        if (labelCnt > _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG.MAX_TIMELINE_SLOTS) {
            console.warn('slotLabelInterval results in too many cells');
            tDateProfile.labelInterval = null;
        }
    }
    // make sure slotDuration doesn't exceed the maximum number of cells
    if (tDateProfile.slotDuration) {
        const slotCnt = dateEnv.countDurationsBetween(currentRange.start, currentRange.end, tDateProfile.slotDuration);
        if (slotCnt > _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG.MAX_TIMELINE_SLOTS) {
            console.warn('slotDuration results in too many cells');
            tDateProfile.slotDuration = null;
        }
    }
    // make sure labelInterval is a multiple of slotDuration
    if (tDateProfile.labelInterval && tDateProfile.slotDuration) {
        const slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.br)(tDateProfile.labelInterval, tDateProfile.slotDuration);
        if (slotsPerLabel === null || slotsPerLabel < 1) {
            console.warn('slotLabelInterval must be a multiple of slotDuration');
            tDateProfile.slotDuration = null;
        }
    }
}
function ensureLabelInterval(tDateProfile, dateProfile, dateEnv) {
    const { currentRange } = dateProfile;
    let { labelInterval } = tDateProfile;
    if (!labelInterval) {
        // compute based off the slot duration
        // find the largest label interval with an acceptable slots-per-label
        let input;
        if (tDateProfile.slotDuration) {
            for (input of STOCK_SUB_DURATIONS) {
                const tryLabelInterval = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(input);
                const slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.br)(tryLabelInterval, tDateProfile.slotDuration);
                if (slotsPerLabel !== null && slotsPerLabel <= MAX_AUTO_SLOTS_PER_LABEL) {
                    labelInterval = tryLabelInterval;
                    break;
                }
            }
            // use the slot duration as a last resort
            if (!labelInterval) {
                labelInterval = tDateProfile.slotDuration;
            }
            // compute based off the view's duration
            // find the largest label interval that yields the minimum number of labels
        }
        else {
            for (input of STOCK_SUB_DURATIONS) {
                labelInterval = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(input);
                const labelCnt = dateEnv.countDurationsBetween(currentRange.start, currentRange.end, labelInterval);
                if (labelCnt >= MIN_AUTO_LABELS) {
                    break;
                }
            }
        }
        tDateProfile.labelInterval = labelInterval;
    }
    return labelInterval;
}
function ensureSlotDuration(tDateProfile, dateProfile, dateEnv) {
    const { currentRange } = dateProfile;
    let { slotDuration } = tDateProfile;
    if (!slotDuration) {
        const labelInterval = ensureLabelInterval(tDateProfile, dateProfile, dateEnv); // will compute if necessary
        // compute based off the label interval
        // find the largest slot duration that is different from labelInterval, but still acceptable
        for (let input of STOCK_SUB_DURATIONS) {
            const trySlotDuration = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(input);
            const slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.br)(labelInterval, trySlotDuration);
            if (slotsPerLabel !== null && slotsPerLabel > 1 && slotsPerLabel <= MAX_AUTO_SLOTS_PER_LABEL) {
                slotDuration = trySlotDuration;
                break;
            }
        }
        // only allow the value if it won't exceed the view's # of slots limit
        if (slotDuration) {
            const slotCnt = dateEnv.countDurationsBetween(currentRange.start, currentRange.end, slotDuration);
            if (slotCnt > MAX_AUTO_CELLS) {
                slotDuration = null;
            }
        }
        // use the label interval as a last resort
        if (!slotDuration) {
            slotDuration = labelInterval;
        }
        tDateProfile.slotDuration = slotDuration;
    }
    return slotDuration;
}
function computeHeaderFormats(tDateProfile, dateProfile, dateEnv, allOptions) {
    let format1;
    let format2;
    const { labelInterval } = tDateProfile;
    let unit = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c)(labelInterval).unit;
    const weekNumbersVisible = allOptions.weekNumbers;
    let format0 = (format1 = (format2 = null));
    // NOTE: weekNumber computation function wont work
    if ((unit === 'week') && !weekNumbersVisible) {
        unit = 'day';
    }
    switch (unit) {
        case 'year':
            format0 = { year: 'numeric' }; // '2015'
            break;
        case 'month':
            if (currentRangeAs('years', dateProfile, dateEnv) > 1) {
                format0 = { year: 'numeric' }; // '2015'
            }
            format1 = { month: 'short' }; // 'Jan'
            break;
        case 'week':
            if (currentRangeAs('years', dateProfile, dateEnv) > 1) {
                format0 = { year: 'numeric' }; // '2015'
            }
            format1 = { week: 'narrow' }; // 'Wk4'
            break;
        case 'day':
            if (currentRangeAs('years', dateProfile, dateEnv) > 1) {
                format0 = { year: 'numeric', month: 'long' }; // 'January 2014'
            }
            else if (currentRangeAs('months', dateProfile, dateEnv) > 1) {
                format0 = { month: 'long' }; // 'January'
            }
            if (weekNumbersVisible) {
                format1 = { week: 'short' }; // 'Wk 4'
            }
            format2 = { weekday: 'narrow', day: 'numeric' }; // 'Su 9'
            break;
        case 'hour':
            if (weekNumbersVisible) {
                format0 = { week: 'short' }; // 'Wk 4'
            }
            if (currentRangeAs('days', dateProfile, dateEnv) > 1) {
                format1 = { weekday: 'short', day: 'numeric', month: 'numeric', omitCommas: true }; // Sat 4/7
            }
            format2 = {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true,
                meridiem: 'short',
            };
            break;
        case 'minute':
            // sufficiently large number of different minute cells?
            if (((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bo)(labelInterval) / 60) >= MAX_AUTO_SLOTS_PER_LABEL) {
                format0 = {
                    hour: 'numeric',
                    meridiem: 'short',
                };
                format1 = (params) => (':' + (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ak)(params.date.minute, 2) // ':30'
                );
            }
            else {
                format0 = {
                    hour: 'numeric',
                    minute: 'numeric',
                    meridiem: 'short',
                };
            }
            break;
        case 'second':
            // sufficiently large number of different second cells?
            if (((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(labelInterval) / 60) >= MAX_AUTO_SLOTS_PER_LABEL) {
                format0 = { hour: 'numeric', minute: '2-digit', meridiem: 'lowercase' }; // '8:30 PM'
                format1 = (params) => (':' + (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ak)(params.date.second, 2) // ':30'
                );
            }
            else {
                format0 = { hour: 'numeric', minute: '2-digit', second: '2-digit', meridiem: 'lowercase' }; // '8:30:45 PM'
            }
            break;
        case 'millisecond':
            format0 = { hour: 'numeric', minute: '2-digit', second: '2-digit', meridiem: 'lowercase' }; // '8:30:45 PM'
            format1 = (params) => ('.' + (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ak)(params.millisecond, 3));
            break;
    }
    return [].concat(format0 || [], format1 || [], format2 || []);
}
// Compute the number of the give units in the "current" range.
// Won't go more precise than days.
// Will return `0` if there's not a clean whole interval.
function currentRangeAs(unit, dateProfile, dateEnv) {
    let range = dateProfile.currentRange;
    let res = null;
    if (unit === 'years') {
        res = dateEnv.diffWholeYears(range.start, range.end);
    }
    else if (unit === 'months') {
        res = dateEnv.diffWholeMonths(range.start, range.end);
    }
    else if (unit === 'weeks') {
        res = dateEnv.diffWholeMonths(range.start, range.end);
    }
    else if (unit === 'days') {
        res = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.y)(range.start, range.end);
    }
    return res || 0;
}
function buildIsWeekStarts(tDateProfile, dateEnv) {
    let { slotDates, emphasizeWeeks } = tDateProfile;
    let prevWeekNumber = null;
    let isWeekStarts = [];
    for (let slotDate of slotDates) {
        let weekNumber = dateEnv.computeWeekNumber(slotDate);
        let isWeekStart = emphasizeWeeks && (prevWeekNumber !== null) && (prevWeekNumber !== weekNumber);
        prevWeekNumber = weekNumber;
        isWeekStarts.push(isWeekStart);
    }
    return isWeekStarts;
}
function buildCellRows(tDateProfile, dateEnv) {
    let slotDates = tDateProfile.slotDates;
    let formats = tDateProfile.headerFormats;
    let cellRows = formats.map(() => []); // indexed by row,col
    let slotAsDays = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bl)(tDateProfile.slotDuration);
    let guessedSlotUnit = slotAsDays === 7 ? 'week' :
        slotAsDays === 1 ? 'day' :
            null;
    // specifically for navclicks
    let rowUnitsFromFormats = formats.map((format) => (format.getSmallestUnit ? format.getSmallestUnit() : null));
    // builds cellRows and slotCells
    for (let i = 0; i < slotDates.length; i += 1) {
        let date = slotDates[i];
        let isWeekStart = tDateProfile.isWeekStarts[i];
        for (let row = 0; row < formats.length; row += 1) {
            let format = formats[row];
            let rowCells = cellRows[row];
            let leadingCell = rowCells[rowCells.length - 1];
            let isLastRow = row === formats.length - 1;
            let isSuperRow = formats.length > 1 && !isLastRow; // more than one row and not the last
            let newCell = null;
            let rowUnit = rowUnitsFromFormats[row] || (isLastRow ? guessedSlotUnit : null);
            if (isSuperRow) {
                let text = dateEnv.format(date, format);
                if (!leadingCell || (leadingCell.text !== text)) {
                    newCell = buildCellObject(date, text, rowUnit);
                }
                else {
                    leadingCell.colspan += 1;
                }
            }
            else if (!leadingCell ||
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.al)(dateEnv.countDurationsBetween(tDateProfile.normalizedRange.start, date, tDateProfile.labelInterval))) {
                let text = dateEnv.format(date, format);
                newCell = buildCellObject(date, text, rowUnit);
            }
            else {
                leadingCell.colspan += 1;
            }
            if (newCell) {
                newCell.weekStart = isWeekStart;
                rowCells.push(newCell);
            }
        }
    }
    return cellRows;
}
function buildCellObject(date, text, rowUnit) {
    return { date, text, rowUnit, colspan: 1, isWeekStart: false };
}

class TimelineHeaderTh extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.refineRenderProps = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.A)(refineRenderProps);
        this.buildCellNavLinkAttrs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildCellNavLinkAttrs);
    }
    render() {
        let { props, context } = this;
        let { dateEnv, options } = context;
        let { cell, dateProfile, tDateProfile } = props;
        // the cell.rowUnit is f'd
        // giving 'month' for a 3-day view
        // workaround: to infer day, do NOT time
        let dateMeta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aY)(cell.date, props.todayRange, props.nowDate, dateProfile);
        let renderProps = this.refineRenderProps({
            level: props.rowLevel,
            dateMarker: cell.date,
            text: cell.text,
            dateEnv: context.dateEnv,
            viewApi: context.viewApi,
        });
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "th", elClasses: [
                'fc-timeline-slot',
                'fc-timeline-slot-label',
                cell.isWeekStart && 'fc-timeline-slot-em',
                ...( // TODO: so slot classnames for week/month/bigger. see note above about rowUnit
                cell.rowUnit === 'time' ?
                    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aZ)(dateMeta, context.theme) :
                    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aX)(dateMeta, context.theme)),
            ], elAttrs: {
                colSpan: cell.colspan,
                'data-date': dateEnv.formatIso(cell.date, {
                    omitTime: !tDateProfile.isTimeScale,
                    omitTimeZoneOffset: true,
                }),
            }, renderProps: renderProps, generatorName: "slotLabelContent", customGenerator: options.slotLabelContent, defaultGenerator: renderInnerContent, classNameGenerator: options.slotLabelClassNames, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-slot-frame", style: { height: props.rowInnerHeight } },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "a", elClasses: [
                    'fc-timeline-slot-cushion',
                    'fc-scrollgrid-sync-inner',
                    props.isSticky && 'fc-sticky',
                ], elAttrs: this.buildCellNavLinkAttrs(context, cell.date, cell.rowUnit) })))));
    }
}
function buildCellNavLinkAttrs(context, cellDate, rowUnit) {
    return (rowUnit && rowUnit !== 'time')
        ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(context, cellDate, rowUnit)
        : {};
}
function renderInnerContent(renderProps) {
    return renderProps.text;
}
function refineRenderProps(input) {
    return {
        level: input.level,
        date: input.dateEnv.toDate(input.dateMarker),
        view: input.viewApi,
        text: input.text,
    };
}

class TimelineHeaderRows extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { dateProfile, tDateProfile, rowInnerHeights, todayRange, nowDate } = this.props;
        let { cellRows } = tDateProfile;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, cellRows.map((rowCells, rowLevel) => {
            let isLast = rowLevel === cellRows.length - 1;
            let isChrono = tDateProfile.isTimeScale && isLast; // the final row, with times?
            let classNames = [
                'fc-timeline-header-row',
                isChrono ? 'fc-timeline-header-row-chrono' : '',
            ];
            return ( // eslint-disable-next-line react/no-array-index-key
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: rowLevel, className: classNames.join(' ') }, rowCells.map((cell) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineHeaderTh, { key: cell.date.toISOString(), cell: cell, rowLevel: rowLevel, dateProfile: dateProfile, tDateProfile: tDateProfile, todayRange: todayRange, nowDate: nowDate, rowInnerHeight: rowInnerHeights && rowInnerHeights[rowLevel], isSticky: !isLast })))));
        })));
    }
}

class TimelineCoords {
    constructor(slatRootEl, // okay to expose?
    slatEls, dateProfile, tDateProfile, dateEnv, isRtl) {
        this.slatRootEl = slatRootEl;
        this.dateProfile = dateProfile;
        this.tDateProfile = tDateProfile;
        this.dateEnv = dateEnv;
        this.isRtl = isRtl;
        this.outerCoordCache = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(slatRootEl, slatEls, true, // isHorizontal
        false);
        // for the inner divs within the slats
        // used for event rendering and scrollTime, to disregard slat border
        this.innerCoordCache = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b8(slatRootEl, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aL)(slatEls, 'div'), true, // isHorizontal
        false);
    }
    isDateInRange(date) {
        return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.G)(this.dateProfile.currentRange, date);
    }
    // results range from negative width of area to 0
    dateToCoord(date) {
        let { tDateProfile } = this;
        let snapCoverage = this.computeDateSnapCoverage(date);
        let slotCoverage = snapCoverage / tDateProfile.snapsPerSlot;
        let slotIndex = Math.floor(slotCoverage);
        slotIndex = Math.min(slotIndex, tDateProfile.slotCnt - 1);
        let partial = slotCoverage - slotIndex;
        let { innerCoordCache, outerCoordCache } = this;
        if (this.isRtl) {
            return outerCoordCache.originClientRect.width - (outerCoordCache.rights[slotIndex] -
                (innerCoordCache.getWidth(slotIndex) * partial));
        }
        return (outerCoordCache.lefts[slotIndex] +
            (innerCoordCache.getWidth(slotIndex) * partial));
    }
    rangeToCoords(range) {
        return {
            start: this.dateToCoord(range.start),
            end: this.dateToCoord(range.end),
        };
    }
    durationToCoord(duration) {
        let { dateProfile, tDateProfile, dateEnv, isRtl } = this;
        let coord = 0;
        if (dateProfile) {
            let date = dateEnv.add(dateProfile.activeRange.start, duration);
            if (!tDateProfile.isTimeScale) {
                date = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(date);
            }
            coord = this.dateToCoord(date);
            // hack to overcome the left borders of non-first slat
            if (!isRtl && coord) {
                coord += 1;
            }
        }
        return coord;
    }
    coordFromLeft(coord) {
        if (this.isRtl) {
            return this.outerCoordCache.originClientRect.width - coord;
        }
        return coord;
    }
    // returned value is between 0 and the number of snaps
    computeDateSnapCoverage(date) {
        return computeDateSnapCoverage(date, this.tDateProfile, this.dateEnv);
    }
}
// returned value is between 0 and the number of snaps
function computeDateSnapCoverage(date, tDateProfile, dateEnv) {
    let snapDiff = dateEnv.countDurationsBetween(tDateProfile.normalizedRange.start, date, tDateProfile.snapDuration);
    if (snapDiff < 0) {
        return 0;
    }
    if (snapDiff >= tDateProfile.snapDiffToIndex.length) {
        return tDateProfile.snapCnt;
    }
    let snapDiffInt = Math.floor(snapDiff);
    let snapCoverage = tDateProfile.snapDiffToIndex[snapDiffInt];
    if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.al)(snapCoverage)) { // not an in-between value
        snapCoverage += snapDiff - snapDiffInt; // add the remainder
    }
    else {
        // a fractional value, meaning the date is not visible
        // always round up in this case. works for start AND end dates in a range.
        snapCoverage = Math.ceil(snapCoverage);
    }
    return snapCoverage;
}
function coordToCss(hcoord, isRtl) {
    if (hcoord === null) {
        return { left: '', right: '' };
    }
    if (isRtl) {
        return { right: hcoord, left: '' };
    }
    return { left: hcoord, right: '' };
}
function coordsToCss(hcoords, isRtl) {
    if (!hcoords) {
        return { left: '', right: '' };
    }
    if (isRtl) {
        return { right: hcoords.start, left: -hcoords.end };
    }
    return { left: hcoords.start, right: -hcoords.end };
}

class TimelineHeader extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    }
    render() {
        let { props, context } = this;
        // TODO: very repetitive
        // TODO: make part of tDateProfile?
        let { unit: timerUnit, value: timerUnitValue } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c)(props.tDateProfile.slotDuration);
        // WORKAROUND: make ignore slatCoords when out of sync with dateProfile
        let slatCoords = props.slatCoords && props.slatCoords.dateProfile === props.dateProfile ? props.slatCoords : null;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a6, { unit: timerUnit, unitValue: timerUnitValue }, (nowDate, todayRange) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-header", ref: this.rootElRef },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { "aria-hidden": true, className: "fc-scrollgrid-sync-table", style: { minWidth: props.tableMinWidth, width: props.clientWidth } },
                props.tableColGroupNode,
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null,
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineHeaderRows, { dateProfile: props.dateProfile, tDateProfile: props.tDateProfile, nowDate: nowDate, todayRange: todayRange, rowInnerHeights: props.rowInnerHeights }))),
            context.options.nowIndicator && (
            // need to have a container regardless of whether the current view has a visible now indicator
            // because apparently removal of the element resets the scroll for some reasons (issue #5351).
            // this issue doesn't happen for the timeline body however (
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-now-indicator-container" }, (slatCoords && slatCoords.isDateInRange(nowDate)) && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, { elClasses: ['fc-timeline-now-indicator-arrow'], elStyle: coordToCss(slatCoords.dateToCoord(nowDate), context.isRtl), isAxis: true, date: nowDate }))))))));
    }
    componentDidMount() {
        this.updateSize();
    }
    componentDidUpdate() {
        this.updateSize();
    }
    updateSize() {
        if (this.props.onMaxCushionWidth) {
            this.props.onMaxCushionWidth(this.computeMaxCushionWidth());
        }
    }
    computeMaxCushionWidth() {
        return Math.max(...(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aK)(this.rootElRef.current, '.fc-timeline-header-row:last-child .fc-timeline-slot-cushion').map((el) => el.getBoundingClientRect().width));
    }
}

class TimelineSlatCell extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props, context } = this;
        let { dateEnv, options, theme } = context;
        let { date, tDateProfile, isEm } = props;
        let dateMeta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aY)(props.date, props.todayRange, props.nowDate, props.dateProfile);
        let renderProps = Object.assign(Object.assign({ date: dateEnv.toDate(props.date) }, dateMeta), { view: context.viewApi });
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, { elTag: "td", elRef: props.elRef, elClasses: [
                'fc-timeline-slot',
                'fc-timeline-slot-lane',
                isEm && 'fc-timeline-slot-em',
                tDateProfile.isTimeScale ? ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.al)(dateEnv.countDurationsBetween(tDateProfile.normalizedRange.start, props.date, tDateProfile.labelInterval)) ?
                    'fc-timeline-slot-major' :
                    'fc-timeline-slot-minor') : '',
                ...(props.isDay ?
                    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aX)(dateMeta, theme) :
                    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aZ)(dateMeta, theme)),
            ], elAttrs: {
                'data-date': dateEnv.formatIso(date, {
                    omitTimeZoneOffset: true,
                    omitTime: !tDateProfile.isTimeScale,
                }),
            }, renderProps: renderProps, generatorName: "slotLaneContent", customGenerator: options.slotLaneContent, classNameGenerator: options.slotLaneClassNames, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div" }))));
    }
}

class TimelineSlatsBody extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props } = this;
        let { tDateProfile, cellElRefs } = props;
        let { slotDates, isWeekStarts } = tDateProfile;
        let isDay = !tDateProfile.isTimeScale && !tDateProfile.largeUnit;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null,
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null, slotDates.map((slotDate, i) => {
                let key = slotDate.toISOString();
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineSlatCell, { key: key, elRef: cellElRefs.createRef(key), date: slotDate, dateProfile: props.dateProfile, tDateProfile: tDateProfile, nowDate: props.nowDate, todayRange: props.todayRange, isEm: isWeekStarts[i], isDay: isDay }));
            }))));
    }
}

class TimelineSlats extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd();
        this.handleScrollRequest = (request) => {
            let { onScrollLeftRequest } = this.props;
            let { coords } = this;
            if (onScrollLeftRequest && coords) {
                if (request.time) {
                    let scrollLeft = coords.coordFromLeft(coords.durationToCoord(request.time));
                    onScrollLeftRequest(scrollLeft);
                }
                return true;
            }
            return null; // best?
        };
    }
    render() {
        let { props, context } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-slots", ref: this.rootElRef },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { "aria-hidden": true, className: context.theme.getClass('table'), style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                } },
                props.tableColGroupNode,
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineSlatsBody, { cellElRefs: this.cellElRefs, dateProfile: props.dateProfile, tDateProfile: props.tDateProfile, nowDate: props.nowDate, todayRange: props.todayRange }))));
    }
    componentDidMount() {
        this.updateSizing();
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    }
    componentDidUpdate(prevProps) {
        this.updateSizing();
        this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
    }
    componentWillUnmount() {
        this.scrollResponder.detach();
        if (this.props.onCoords) {
            this.props.onCoords(null);
        }
    }
    updateSizing() {
        let { props, context } = this;
        if (props.clientWidth !== null && // is sizing stable?
            this.scrollResponder
        // ^it's possible to have clientWidth immediately after mount (when returning from print view), but w/o scrollResponder
        ) {
            let rootEl = this.rootElRef.current;
            if (rootEl.offsetWidth) { // not hidden by css
                this.coords = new TimelineCoords(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.tDateProfile.slotDates), props.dateProfile, props.tDateProfile, context.dateEnv, context.isRtl);
                if (props.onCoords) {
                    props.onCoords(this.coords);
                }
                this.scrollResponder.update(false); // TODO: wouldn't have to do this if coords were in state
            }
        }
    }
    positionToHit(leftPosition) {
        let { outerCoordCache } = this.coords;
        let { dateEnv, isRtl } = this.context;
        let { tDateProfile } = this.props;
        let slatIndex = outerCoordCache.leftToIndex(leftPosition);
        if (slatIndex != null) {
            // somewhat similar to what TimeGrid does. consolidate?
            let slatWidth = outerCoordCache.getWidth(slatIndex);
            let partial = isRtl ?
                (outerCoordCache.rights[slatIndex] - leftPosition) / slatWidth :
                (leftPosition - outerCoordCache.lefts[slatIndex]) / slatWidth;
            let localSnapIndex = Math.floor(partial * tDateProfile.snapsPerSlot);
            let start = dateEnv.add(tDateProfile.slotDates[slatIndex], (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bm)(tDateProfile.snapDuration, localSnapIndex));
            let end = dateEnv.add(start, tDateProfile.snapDuration);
            return {
                dateSpan: {
                    range: { start, end },
                    allDay: !this.props.tDateProfile.isTimeScale,
                },
                dayEl: this.cellElRefs.currentMap[slatIndex],
                left: outerCoordCache.lefts[slatIndex],
                right: outerCoordCache.rights[slatIndex],
            };
        }
        return null;
    }
}
function collectCellEls(elMap, slotDates) {
    return slotDates.map((slotDate) => {
        let key = slotDate.toISOString();
        return elMap[key];
    });
}

function computeSegHCoords(segs, minWidth, timelineCoords) {
    let hcoords = [];
    if (timelineCoords) {
        for (let seg of segs) {
            let res = timelineCoords.rangeToCoords(seg);
            let start = Math.round(res.start); // for barely-overlapping collisions
            let end = Math.round(res.end); //
            if (end - start < minWidth) {
                end = start + minWidth;
            }
            hcoords.push({ start, end });
        }
    }
    return hcoords;
}
function computeFgSegPlacements(segs, segHCoords, // might not have for every seg
eventInstanceHeights, // might not have for every seg
moreLinkHeights, // might not have for every more-link
strictOrder, maxStackCnt) {
    let segInputs = [];
    let crudePlacements = []; // when we don't know dims
    for (let i = 0; i < segs.length; i += 1) {
        let seg = segs[i];
        let instanceId = seg.eventRange.instance.instanceId;
        let height = eventInstanceHeights[instanceId];
        let hcoords = segHCoords[i];
        if (height && hcoords) {
            segInputs.push({
                index: i,
                span: hcoords,
                thickness: height,
            });
        }
        else {
            crudePlacements.push({
                seg,
                hcoords,
                top: null,
            });
        }
    }
    let hierarchy = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.by();
    if (strictOrder != null) {
        hierarchy.strictOrder = strictOrder;
    }
    if (maxStackCnt != null) {
        hierarchy.maxStackCnt = maxStackCnt;
    }
    let hiddenEntries = hierarchy.addSegs(segInputs);
    let hiddenPlacements = hiddenEntries.map((entry) => ({
        seg: segs[entry.index],
        hcoords: entry.span,
        top: null,
    }));
    let hiddenGroups = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bC)(hiddenEntries);
    let moreLinkInputs = [];
    let moreLinkCrudePlacements = [];
    const extractSeg = (entry) => segs[entry.index];
    for (let i = 0; i < hiddenGroups.length; i += 1) {
        let hiddenGroup = hiddenGroups[i];
        let sortedSegs = hiddenGroup.entries.map(extractSeg);
        let height = moreLinkHeights[(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bu)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cp)(sortedSegs))]; // not optimal :(
        if (height != null) {
            // NOTE: the hiddenGroup's spanStart/spanEnd are already computed by rangeToCoords. computed during input.
            moreLinkInputs.push({
                index: segs.length + i,
                thickness: height,
                span: hiddenGroup.span,
            });
        }
        else {
            moreLinkCrudePlacements.push({
                seg: sortedSegs,
                hcoords: hiddenGroup.span,
                top: null,
            });
        }
    }
    // add more-links into the hierarchy, but don't limit
    hierarchy.maxStackCnt = -1;
    hierarchy.addSegs(moreLinkInputs);
    let visibleRects = hierarchy.toRects();
    let visiblePlacements = [];
    let maxHeight = 0;
    for (let rect of visibleRects) {
        let segIndex = rect.index;
        visiblePlacements.push({
            seg: segIndex < segs.length
                ? segs[segIndex] // a real seg
                : hiddenGroups[segIndex - segs.length].entries.map(extractSeg),
            hcoords: rect.span,
            top: rect.levelCoord,
        });
        maxHeight = Math.max(maxHeight, rect.levelCoord + rect.thickness);
    }
    return [
        visiblePlacements.concat(crudePlacements, hiddenPlacements, moreLinkCrudePlacements),
        maxHeight,
    ];
}

class TimelineLaneBg extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props } = this;
        let highlightSeg = [].concat(props.eventResizeSegs, props.dateSelectionSegs);
        return props.timelineCoords && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-bg" },
            this.renderSegs(props.businessHourSegs || [], props.timelineCoords, 'non-business'),
            this.renderSegs(props.bgEventSegs || [], props.timelineCoords, 'bg-event'),
            this.renderSegs(highlightSeg, props.timelineCoords, 'highlight')));
    }
    renderSegs(segs, timelineCoords, fillType) {
        let { todayRange, nowDate } = this.props;
        let { isRtl } = this.context;
        let segHCoords = computeSegHCoords(segs, 0, timelineCoords);
        let children = segs.map((seg, i) => {
            let hcoords = segHCoords[i];
            let hStyle = coordsToCss(hcoords, isRtl);
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR)(seg.eventRange), className: "fc-timeline-bg-harness", style: hStyle }, fillType === 'bg-event' ?
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cm, Object.assign({ seg: seg }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, todayRange, nowDate))) :
                (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cl)(fillType)));
        });
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
    }
}

class TimelineLaneSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bU {
    sliceRange(origRange, dateProfile, dateProfileGenerator, tDateProfile, dateEnv) {
        let normalRange = normalizeRange(origRange, tDateProfile, dateEnv);
        let segs = [];
        // protect against when the span is entirely in an invalid date region
        if (computeDateSnapCoverage(normalRange.start, tDateProfile, dateEnv)
            < computeDateSnapCoverage(normalRange.end, tDateProfile, dateEnv)) {
            // intersect the footprint's range with the grid's range
            let slicedRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(normalRange, tDateProfile.normalizedRange);
            if (slicedRange) {
                segs.push({
                    start: slicedRange.start,
                    end: slicedRange.end,
                    isStart: slicedRange.start.valueOf() === normalRange.start.valueOf()
                        && isValidDate(slicedRange.start, tDateProfile, dateProfile, dateProfileGenerator),
                    isEnd: slicedRange.end.valueOf() === normalRange.end.valueOf()
                        && isValidDate((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be)(slicedRange.end, -1), tDateProfile, dateProfile, dateProfileGenerator),
                });
            }
        }
        return segs;
    }
}

const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'narrow',
});
class TimelineEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props } = this;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cg, Object.assign({}, props, { elClasses: ['fc-timeline-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TIME_FORMAT, defaultDisplayEventTime: !props.isTimeScale })));
    }
}

class TimelineLaneMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    render() {
        let { props, context } = this;
        let { hiddenSegs, placement, resourceId } = props;
        let { top, hcoords } = placement;
        let isVisible = hcoords && top !== null;
        let hStyle = coordsToCss(hcoords, context.isRtl);
        let extraDateSpan = resourceId ? { resourceId } : {};
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.co, { elRef: props.elRef, elClasses: ['fc-timeline-more-link'], elStyle: Object.assign({ visibility: isVisible ? '' : 'hidden', top: top || 0 }, hStyle), allDayDate: null, moreCnt: hiddenSegs.length, allSegs: hiddenSegs, hiddenSegs: hiddenSegs, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: extraDateSpan, popoverContent: () => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenSegs.map((seg) => {
                let instanceId = seg.eventRange.instance.instanceId;
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: instanceId, style: { visibility: props.isForcedInvisible[instanceId] ? 'hidden' : '' } },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineEvent, Object.assign({ isTimeScale: props.isTimeScale, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, props.todayRange, props.nowDate)))));
            }))) }, (InnerContent) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, { elTag: "div", elClasses: ['fc-timeline-more-link-inner', 'fc-sticky'] }))));
    }
}

class TimelineLane extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super(...arguments);
        this.slicer = new TimelineLaneSlicer();
        this.sortEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bP);
        this.harnessElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd();
        this.moreElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd();
        this.innerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        // TODO: memoize event positioning
        this.state = {
            eventInstanceHeights: {},
            moreLinkHeights: {},
        };
        this.handleResize = (isForced) => {
            if (isForced) {
                this.updateSize();
            }
        };
    }
    render() {
        let { props, state, context } = this;
        let { options } = context;
        let { dateProfile, tDateProfile } = props;
        let slicedProps = this.slicer.sliceProps(props, dateProfile, tDateProfile.isTimeScale ? null : props.nextDayThreshold, context, // wish we didn't have to pass in the rest of the args...
        dateProfile, context.dateProfileGenerator, tDateProfile, context.dateEnv);
        let mirrorSegs = (slicedProps.eventDrag ? slicedProps.eventDrag.segs : null) ||
            (slicedProps.eventResize ? slicedProps.eventResize.segs : null) ||
            [];
        let fgSegs = this.sortEventSegs(slicedProps.fgEventSegs, options.eventOrder);
        let fgSegHCoords = computeSegHCoords(fgSegs, options.eventMinWidth, props.timelineCoords);
        let [fgPlacements, fgHeight] = computeFgSegPlacements(fgSegs, fgSegHCoords, state.eventInstanceHeights, state.moreLinkHeights, options.eventOrderStrict, options.eventMaxStack);
        let isForcedInvisible = // TODO: more convenient
         (slicedProps.eventDrag ? slicedProps.eventDrag.affectedInstances : null) ||
            (slicedProps.eventResize ? slicedProps.eventResize.affectedInstances : null) ||
            {};
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineLaneBg, { businessHourSegs: slicedProps.businessHourSegs, bgEventSegs: slicedProps.bgEventSegs, timelineCoords: props.timelineCoords, eventResizeSegs: slicedProps.eventResize ? slicedProps.eventResize.segs : [] /* bad new empty array? */, dateSelectionSegs: slicedProps.dateSelectionSegs, nowDate: props.nowDate, todayRange: props.todayRange }),
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-events fc-scrollgrid-sync-inner", ref: this.innerElRef, style: { height: fgHeight } },
                this.renderFgSegs(fgPlacements, isForcedInvisible, false, false, false),
                this.renderFgSegs(buildMirrorPlacements(mirrorSegs, props.timelineCoords, fgPlacements), {}, Boolean(slicedProps.eventDrag), Boolean(slicedProps.eventResize), false))));
    }
    componentDidMount() {
        this.updateSize();
        this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.eventStore !== this.props.eventStore || // external thing changed?
            prevProps.timelineCoords !== this.props.timelineCoords || // external thing changed?
            prevState.moreLinkHeights !== this.state.moreLinkHeights // HACK. see addStateEquality
        ) {
            this.updateSize();
        }
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize);
    }
    updateSize() {
        let { props } = this;
        let { timelineCoords } = props;
        const innerEl = this.innerElRef.current;
        if (props.onHeightChange) {
            props.onHeightChange(innerEl, false);
        }
        if (timelineCoords) {
            this.setState({
                eventInstanceHeights: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.harnessElRefs.currentMap, (harnessEl) => (Math.round(harnessEl.getBoundingClientRect().height))),
                moreLinkHeights: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.moreElRefs.currentMap, (moreEl) => (Math.round(moreEl.getBoundingClientRect().height))),
            }, () => {
                if (props.onHeightChange) {
                    props.onHeightChange(innerEl, true);
                }
            });
        }
        // hack
        if (props.syncParentMinHeight) {
            innerEl.parentElement.style.minHeight = innerEl.style.height;
        }
    }
    renderFgSegs(segPlacements, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
        let { harnessElRefs, moreElRefs, props, context } = this;
        let isMirror = isDragging || isResizing || isDateSelecting;
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, segPlacements.map((segPlacement) => {
            let { seg, hcoords, top } = segPlacement;
            if (Array.isArray(seg)) { // a more-link
                let isoStr = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bu)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cp)(seg));
                return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineLaneMoreLink, { key: 'm:' + isoStr /* "m" for "more" */, elRef: moreElRefs.createRef(isoStr), hiddenSegs: seg, placement: segPlacement, dateProfile: props.dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, isTimeScale: props.tDateProfile.isTimeScale, eventSelection: props.eventSelection, resourceId: props.resourceId, isForcedInvisible: isForcedInvisible }));
            }
            let instanceId = seg.eventRange.instance.instanceId;
            let isVisible = isMirror || Boolean(!isForcedInvisible[instanceId] && hcoords && top !== null);
            let hStyle = coordsToCss(hcoords, context.isRtl);
            return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: 'e:' + instanceId /* "e" for "event" */, ref: isMirror ? null : harnessElRefs.createRef(instanceId), className: "fc-timeline-event-harness", style: Object.assign({ visibility: isVisible ? '' : 'hidden', top: top || 0 }, hStyle) },
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineEvent, Object.assign({ isTimeScale: props.tDateProfile.isTimeScale, seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === props.eventSelection /* TODO: bad for mirror? */ }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, props.todayRange, props.nowDate)))));
        })));
    }
}
TimelineLane.addStateEquality({
    eventInstanceHeights: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E,
    moreLinkHeights: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E,
});
function buildMirrorPlacements(mirrorSegs, timelineCoords, fgPlacements) {
    if (!mirrorSegs.length || !timelineCoords) {
        return [];
    }
    let topsByInstanceId = buildAbsoluteTopHash(fgPlacements); // TODO: cache this at first render?
    return mirrorSegs.map((seg) => ({
        seg,
        hcoords: timelineCoords.rangeToCoords(seg),
        top: topsByInstanceId[seg.eventRange.instance.instanceId],
    }));
}
function buildAbsoluteTopHash(placements) {
    let topsByInstanceId = {};
    for (let placement of placements) {
        let { seg } = placement;
        if (!Array.isArray(seg)) { // doesn't represent a more-link
            topsByInstanceId[seg.eventRange.instance.instanceId] = placement.top;
        }
    }
    return topsByInstanceId;
}

class TimelineGrid extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.slatsRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.state = {
            coords: null,
        };
        this.handeEl = (el) => {
            if (el) {
                this.context.registerInteractiveComponent(this, { el });
            }
            else {
                this.context.unregisterInteractiveComponent(this);
            }
        };
        this.handleCoords = (coords) => {
            this.setState({ coords });
            if (this.props.onSlatCoords) {
                this.props.onSlatCoords(coords);
            }
        };
    }
    render() {
        let { props, state, context } = this;
        let { options } = context;
        let { dateProfile, tDateProfile } = props;
        let { unit: timerUnit, value: timerUnitValue } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c)(tDateProfile.slotDuration);
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-body", ref: this.handeEl, style: {
                minWidth: props.tableMinWidth,
                height: props.clientHeight,
                width: props.clientWidth,
            } },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a6, { unit: timerUnit, unitValue: timerUnitValue }, (nowDate, todayRange) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineSlats, { ref: this.slatsRef, dateProfile: dateProfile, tDateProfile: tDateProfile, nowDate: nowDate, todayRange: todayRange, clientWidth: props.clientWidth, tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, onCoords: this.handleCoords, onScrollLeftRequest: props.onScrollLeftRequest }),
                (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineLane, { dateProfile: dateProfile, tDateProfile: props.tDateProfile, nowDate: nowDate, todayRange: todayRange, nextDayThreshold: options.nextDayThreshold, businessHours: props.businessHours, eventStore: props.eventStore, eventUiBases: props.eventUiBases, dateSelection: props.dateSelection, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, timelineCoords: state.coords, syncParentMinHeight: true }),
                (options.nowIndicator && state.coords && state.coords.isDateInRange(nowDate)) && ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timeline-now-indicator-container" },
                    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, { elClasses: ['fc-timeline-now-indicator-line'], elStyle: coordToCss(state.coords.dateToCoord(nowDate), context.isRtl), isAxis: false, date: nowDate }))))))));
    }
    // Hit System
    // ------------------------------------------------------------------------------------------
    queryHit(positionLeft, positionTop, elWidth, elHeight) {
        let slats = this.slatsRef.current;
        let slatHit = slats.positionToHit(positionLeft);
        if (slatHit) {
            return {
                dateProfile: this.props.dateProfile,
                dateSpan: slatHit.dateSpan,
                rect: {
                    left: slatHit.left,
                    right: slatHit.right,
                    top: 0,
                    bottom: elHeight,
                },
                dayEl: slatHit.dayEl,
                layer: 0,
            };
        }
        return null;
    }
}

class TimelineView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc {
    constructor() {
        super(...arguments);
        this.buildTimelineDateProfile = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildTimelineDateProfile);
        this.scrollGridRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.state = {
            slatCoords: null,
            slotCushionMaxWidth: null,
        };
        this.handleSlatCoords = (slatCoords) => {
            this.setState({ slatCoords });
        };
        this.handleScrollLeftRequest = (scrollLeft) => {
            let scrollGrid = this.scrollGridRef.current;
            scrollGrid.forceScrollLeft(0, scrollLeft);
        };
        this.handleMaxCushionWidth = (slotCushionMaxWidth) => {
            this.setState({
                slotCushionMaxWidth: Math.ceil(slotCushionMaxWidth), // for less rerendering TODO: DRY
            });
        };
    }
    render() {
        let { props, state, context } = this;
        let { options } = context;
        let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca)(options);
        let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c9)(options);
        let tDateProfile = this.buildTimelineDateProfile(props.dateProfile, context.dateEnv, options, context.dateProfileGenerator);
        let { slotMinWidth } = options;
        let slatCols = buildSlatCols(tDateProfile, slotMinWidth || this.computeFallbackSlotMinWidth(tDateProfile));
        let sections = [
            {
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunks: [{
                        key: 'timeline',
                        content: (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineHeader, { dateProfile: props.dateProfile, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, tableMinWidth: contentArg.tableMinWidth, tableColGroupNode: contentArg.tableColGroupNode, tDateProfile: tDateProfile, slatCoords: state.slatCoords, onMaxCushionWidth: slotMinWidth ? null : this.handleMaxCushionWidth })),
                    }],
            },
            {
                type: 'body',
                key: 'body',
                liquid: true,
                chunks: [{
                        key: 'timeline',
                        content: (contentArg) => ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimelineGrid, Object.assign({}, props, { clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, tableMinWidth: contentArg.tableMinWidth, tableColGroupNode: contentArg.tableColGroupNode, tDateProfile: tDateProfile, onSlatCoords: this.handleSlatCoords, onScrollLeftRequest: this.handleScrollLeftRequest }))),
                    }],
            },
        ];
        if (stickyFooterScrollbar) {
            sections.push({
                type: 'footer',
                key: 'footer',
                isSticky: true,
                chunks: [{
                        key: 'timeline',
                        content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.c8,
                    }],
            });
        }
        return ((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, { elClasses: [
                'fc-timeline',
                options.eventOverlap === false ?
                    'fc-timeline-overlap-disabled' :
                    '',
            ], viewSpec: context.viewSpec },
            (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_scrollgrid_internal_js__WEBPACK_IMPORTED_MODULE_2__.ScrollGrid, { ref: this.scrollGridRef, liquid: !props.isHeightAuto && !props.forPrint, forPrint: props.forPrint, collapsibleWidth: false, colGroups: [
                    { cols: slatCols },
                ], sections: sections })));
    }
    computeFallbackSlotMinWidth(tDateProfile) {
        return Math.max(30, ((this.state.slotCushionMaxWidth || 0) / tDateProfile.slotsPerLabel));
    }
}
function buildSlatCols(tDateProfile, slotMinWidth) {
    return [{
            span: tDateProfile.slotCnt,
            minWidth: slotMinWidth || 1, // needs to be a non-zero number to trigger horizontal scrollbars!??????
        }];
}

var css_248z = ".fc .fc-timeline-body{min-height:100%;position:relative;z-index:1}.fc .fc-timeline-slots{bottom:0;position:absolute;top:0;z-index:1}.fc .fc-timeline-slots>table{height:100%}.fc .fc-timeline-slot-minor{border-style:dotted}.fc .fc-timeline-slot-frame{align-items:center;display:flex;justify-content:center}.fc .fc-timeline-header-row-chrono .fc-timeline-slot-frame{justify-content:flex-start}.fc .fc-timeline-header-row:last-child .fc-timeline-slot-frame{overflow:hidden}.fc .fc-timeline-slot-cushion{padding:4px 5px;white-space:nowrap}.fc-direction-ltr .fc-timeline-slot{border-right:0!important}.fc-direction-rtl .fc-timeline-slot{border-left:0!important}.fc .fc-timeline-now-indicator-container{bottom:0;left:0;position:absolute;right:0;top:0;width:0;z-index:4}.fc .fc-timeline-now-indicator-arrow,.fc .fc-timeline-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;pointer-events:none;position:absolute;top:0}.fc .fc-timeline-now-indicator-arrow{border-left-color:transparent;border-right-color:transparent;border-width:6px 5px 0;margin:0 -6px}.fc .fc-timeline-now-indicator-line{border-width:0 0 0 1px;bottom:0;margin:0 -1px}.fc .fc-timeline-events{position:relative;width:0;z-index:3}.fc .fc-timeline-event-harness,.fc .fc-timeline-more-link{position:absolute;top:0}.fc-timeline-event{z-index:1}.fc-timeline-event.fc-event-mirror{z-index:2}.fc-timeline-event{align-items:center;border-radius:0;display:flex;font-size:var(--fc-small-font-size);margin-bottom:1px;padding:2px 1px;position:relative}.fc-timeline-event .fc-event-main{flex-grow:1;flex-shrink:1;min-width:0}.fc-timeline-event .fc-event-time{font-weight:700}.fc-timeline-event .fc-event-time,.fc-timeline-event .fc-event-title{padding:0 2px;white-space:nowrap}.fc-direction-ltr .fc-timeline-event.fc-event-end,.fc-direction-ltr .fc-timeline-more-link{margin-right:1px}.fc-direction-rtl .fc-timeline-event.fc-event-end,.fc-direction-rtl .fc-timeline-more-link{margin-left:1px}.fc-timeline-overlap-disabled .fc-timeline-event{margin-bottom:0;padding-bottom:5px;padding-top:5px}.fc-timeline-event:not(.fc-event-end):after,.fc-timeline-event:not(.fc-event-start):before{border-color:transparent #000;border-style:solid;border-width:5px;content:\"\";flex-grow:0;flex-shrink:0;height:0;margin:0 1px;opacity:.5;width:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-start):before,.fc-direction-rtl .fc-timeline-event:not(.fc-event-end):after{border-left:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-end):after,.fc-direction-rtl .fc-timeline-event:not(.fc-event-start):before{border-right:0}.fc-timeline-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;font-size:var(--fc-small-font-size);padding:1px}.fc-timeline-more-link-inner{display:inline-block;left:0;padding:2px;right:0}.fc .fc-timeline-bg{bottom:0;left:0;position:absolute;right:0;top:0;width:0;z-index:2}.fc .fc-timeline-bg .fc-non-business{z-index:1}.fc .fc-timeline-bg .fc-bg-event{z-index:2}.fc .fc-timeline-bg .fc-highlight{z-index:3}.fc .fc-timeline-bg-harness{bottom:0;position:absolute;top:0}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct)(css_248z);




/***/ }

}]);
//# sourceMappingURL=37-0e198bc610a08de54aab.js.map