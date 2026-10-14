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
(self["webpackChunk_glpi_glpi"] = self["webpackChunk_glpi_glpi"] || []).push([[38],{

/***/ 347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cache: () => (/* binding */ Cache)
/* harmony export */ });
/* harmony import */ var _iterresult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(334);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(331);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);



function argsMatch(left, right) {
    if (Array.isArray(left)) {
        if (!Array.isArray(right))
            return false;
        if (left.length !== right.length)
            return false;
        return left.every(function (date, i) { return date.getTime() === right[i].getTime(); });
    }
    if (left instanceof Date) {
        return right instanceof Date && left.getTime() === right.getTime();
    }
    return left === right;
}
var Cache = /** @class */ (function () {
    function Cache() {
        this.all = false;
        this.before = [];
        this.after = [];
        this.between = [];
    }
    /**
     * @param {String} what - all/before/after/between
     * @param {Array,Date} value - an array of dates, one date, or null
     * @param {Object?} args - _iter arguments
     */
    Cache.prototype._cacheAdd = function (what, value, args) {
        if (value) {
            value = value instanceof Date ? (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.clone)(value) : (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.cloneDates)(value);
        }
        if (what === 'all') {
            this.all = value;
        }
        else {
            args._value = value;
            this[what].push(args);
        }
    };
    /**
     * @return false - not in the cache
     * @return null  - cached, but zero occurrences (before/after)
     * @return Date  - cached (before/after)
     * @return []    - cached, but zero occurrences (all/between)
     * @return [Date1, DateN] - cached (all/between)
     */
    Cache.prototype._cacheGet = function (what, args) {
        var cached = false;
        var argsKeys = args ? Object.keys(args) : [];
        var findCacheDiff = function (item) {
            for (var i = 0; i < argsKeys.length; i++) {
                var key = argsKeys[i];
                if (!argsMatch(args[key], item[key])) {
                    return true;
                }
            }
            return false;
        };
        var cachedObject = this[what];
        if (what === 'all') {
            cached = this.all;
        }
        else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(cachedObject)) {
            // Let's see whether we've already called the
            // 'what' method with the same 'args'
            for (var i = 0; i < cachedObject.length; i++) {
                var item = cachedObject[i];
                if (argsKeys.length && findCacheDiff(item))
                    continue;
                cached = item._value;
                break;
            }
        }
        if (!cached && this.all) {
            // Not in the cache, but we already know all the occurrences,
            // so we can find the correct dates from the cached ones.
            var iterResult = new _iterresult__WEBPACK_IMPORTED_MODULE_0__["default"](what, args);
            for (var i = 0; i < this.all.length; i++) {
                if (!iterResult.accept(this.all[i]))
                    break;
            }
            cached = iterResult.getValue();
            this._cacheAdd(what, cached, args);
        }
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(cached)
            ? (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.cloneDates)(cached)
            : cached instanceof Date
                ? (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.clone)(cached)
                : cached;
    };
    return Cache;
}());

//# sourceMappingURL=cache.js.map

/***/ },

/***/ 335
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _iterresult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(334);


/**
 * IterResult subclass that calls a callback function on each add,
 * and stops iterating when the callback returns false.
 */
var CallbackIterResult = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CallbackIterResult, _super);
    function CallbackIterResult(method, args, iterator) {
        var _this = _super.call(this, method, args) || this;
        _this.iterator = iterator;
        return _this;
    }
    CallbackIterResult.prototype.add = function (date) {
        if (this.iterator(date, this._result.length)) {
            this._result.push(date);
            return true;
        }
        return false;
    };
    return CallbackIterResult;
}(_iterresult__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallbackIterResult);
//# sourceMappingURL=callbackiterresult.js.map

/***/ },

/***/ 343
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTime: () => (/* binding */ DateTime),
/* harmony export */   Time: () => (/* binding */ Time)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(341);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);




var Time = /** @class */ (function () {
    function Time(hour, minute, second, millisecond) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond || 0;
    }
    Time.prototype.getHours = function () {
        return this.hour;
    };
    Time.prototype.getMinutes = function () {
        return this.minute;
    };
    Time.prototype.getSeconds = function () {
        return this.second;
    };
    Time.prototype.getMilliseconds = function () {
        return this.millisecond;
    };
    Time.prototype.getTime = function () {
        return ((this.hour * 60 * 60 + this.minute * 60 + this.second) * 1000 +
            this.millisecond);
    };
    return Time;
}());

var DateTime = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(DateTime, _super);
    function DateTime(year, month, day, hour, minute, second, millisecond) {
        var _this = _super.call(this, hour, minute, second, millisecond) || this;
        _this.year = year;
        _this.month = month;
        _this.day = day;
        return _this;
    }
    DateTime.fromDate = function (date) {
        return new this(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.valueOf() % 1000);
    };
    DateTime.prototype.getWeekday = function () {
        return (0,_dateutil__WEBPACK_IMPORTED_MODULE_3__.getWeekday)(new Date(this.getTime()));
    };
    DateTime.prototype.getTime = function () {
        return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
    };
    DateTime.prototype.getDay = function () {
        return this.day;
    };
    DateTime.prototype.getMonth = function () {
        return this.month;
    };
    DateTime.prototype.getYear = function () {
        return this.year;
    };
    DateTime.prototype.addYears = function (years) {
        this.year += years;
    };
    DateTime.prototype.addMonths = function (months) {
        this.month += months;
        if (this.month > 12) {
            var yearDiv = Math.floor(this.month / 12);
            var monthMod = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.pymod)(this.month, 12);
            this.month = monthMod;
            this.year += yearDiv;
            if (this.month === 0) {
                this.month = 12;
                --this.year;
            }
        }
    };
    DateTime.prototype.addWeekly = function (days, wkst) {
        if (wkst > this.getWeekday()) {
            this.day += -(this.getWeekday() + 1 + (6 - wkst)) + days * 7;
        }
        else {
            this.day += -(this.getWeekday() - wkst) + days * 7;
        }
        this.fixDay();
    };
    DateTime.prototype.addDaily = function (days) {
        this.day += days;
        this.fixDay();
    };
    DateTime.prototype.addHours = function (hours, filtered, byhour) {
        if (filtered) {
            // Jump to one iteration before next day
            this.hour += Math.floor((23 - this.hour) / hours) * hours;
        }
        for (;;) {
            this.hour += hours;
            var _a = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.divmod)(this.hour, 24), dayDiv = _a.div, hourMod = _a.mod;
            if (dayDiv) {
                this.hour = hourMod;
                this.addDaily(dayDiv);
            }
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.empty)(byhour) || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(byhour, this.hour))
                break;
        }
    };
    DateTime.prototype.addMinutes = function (minutes, filtered, byhour, byminute) {
        if (filtered) {
            // Jump to one iteration before next day
            this.minute +=
                Math.floor((1439 - (this.hour * 60 + this.minute)) / minutes) * minutes;
        }
        for (;;) {
            this.minute += minutes;
            var _a = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.divmod)(this.minute, 60), hourDiv = _a.div, minuteMod = _a.mod;
            if (hourDiv) {
                this.minute = minuteMod;
                this.addHours(hourDiv, false, byhour);
            }
            if (((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.empty)(byhour) || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(byhour, this.hour)) &&
                ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.empty)(byminute) || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(byminute, this.minute))) {
                break;
            }
        }
    };
    DateTime.prototype.addSeconds = function (seconds, filtered, byhour, byminute, bysecond) {
        if (filtered) {
            // Jump to one iteration before next day
            this.second +=
                Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) /
                    seconds) * seconds;
        }
        for (;;) {
            this.second += seconds;
            var _a = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.divmod)(this.second, 60), minuteDiv = _a.div, secondMod = _a.mod;
            if (minuteDiv) {
                this.second = secondMod;
                this.addMinutes(minuteDiv, false, byhour, byminute);
            }
            if (((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.empty)(byhour) || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(byhour, this.hour)) &&
                ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.empty)(byminute) || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(byminute, this.minute)) &&
                ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.empty)(bysecond) || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(bysecond, this.second))) {
                break;
            }
        }
    };
    DateTime.prototype.fixDay = function () {
        if (this.day <= 28) {
            return;
        }
        var daysinmonth = (0,_dateutil__WEBPACK_IMPORTED_MODULE_3__.monthRange)(this.year, this.month - 1)[1];
        if (this.day <= daysinmonth) {
            return;
        }
        while (this.day > daysinmonth) {
            this.day -= daysinmonth;
            ++this.month;
            if (this.month === 13) {
                this.month = 1;
                ++this.year;
                if (this.year > _dateutil__WEBPACK_IMPORTED_MODULE_3__.MAXYEAR) {
                    return;
                }
            }
            daysinmonth = (0,_dateutil__WEBPACK_IMPORTED_MODULE_3__.monthRange)(this.year, this.month - 1)[1];
        }
    };
    DateTime.prototype.add = function (options, filtered) {
        var freq = options.freq, interval = options.interval, wkst = options.wkst, byhour = options.byhour, byminute = options.byminute, bysecond = options.bysecond;
        switch (freq) {
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.YEARLY:
                return this.addYears(interval);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.MONTHLY:
                return this.addMonths(interval);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.WEEKLY:
                return this.addWeekly(interval, wkst);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.DAILY:
                return this.addDaily(interval);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.HOURLY:
                return this.addHours(interval, filtered, byhour);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.MINUTELY:
                return this.addMinutes(interval, filtered, byhour, byminute);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.SECONDLY:
                return this.addSeconds(interval, filtered, byhour, byminute, bysecond);
        }
    };
    return DateTime;
}(Time));

//# sourceMappingURL=datetime.js.map

/***/ },

/***/ 331
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAXYEAR: () => (/* binding */ MAXYEAR),
/* harmony export */   MONTH_DAYS: () => (/* binding */ MONTH_DAYS),
/* harmony export */   ONE_DAY: () => (/* binding */ ONE_DAY),
/* harmony export */   ORDINAL_BASE: () => (/* binding */ ORDINAL_BASE),
/* harmony export */   PY_WEEKDAYS: () => (/* binding */ PY_WEEKDAYS),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   cloneDates: () => (/* binding */ cloneDates),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   dateInTimeZone: () => (/* binding */ dateInTimeZone),
/* harmony export */   datetime: () => (/* binding */ datetime),
/* harmony export */   daysBetween: () => (/* binding */ daysBetween),
/* harmony export */   fromOrdinal: () => (/* binding */ fromOrdinal),
/* harmony export */   getMonthDays: () => (/* binding */ getMonthDays),
/* harmony export */   getWeekday: () => (/* binding */ getWeekday),
/* harmony export */   getYearDay: () => (/* binding */ getYearDay),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isLeapYear: () => (/* binding */ isLeapYear),
/* harmony export */   isValidDate: () => (/* binding */ isValidDate),
/* harmony export */   monthRange: () => (/* binding */ monthRange),
/* harmony export */   sort: () => (/* binding */ sort),
/* harmony export */   timeToUntilString: () => (/* binding */ timeToUntilString),
/* harmony export */   toOrdinal: () => (/* binding */ toOrdinal),
/* harmony export */   tzOffset: () => (/* binding */ tzOffset),
/* harmony export */   untilStringToDate: () => (/* binding */ untilStringToDate)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(332);

var datetime = function (y, m, d, h, i, s) {
    if (h === void 0) { h = 0; }
    if (i === void 0) { i = 0; }
    if (s === void 0) { s = 0; }
    return new Date(Date.UTC(y, m - 1, d, h, i, s));
};
/**
 * General date-related utilities.
 * Also handles several incompatibilities between JavaScript and Python
 *
 */
var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/**
 * Number of milliseconds of one day
 */
var ONE_DAY = 1000 * 60 * 60 * 24;
/**
 * @see: <http://docs.python.org/library/datetime.html#datetime.MAXYEAR>
 */
var MAXYEAR = 9999;
/**
 * Python uses 1-Jan-1 as the base for calculating ordinals but we don't
 * want to confuse the JS engine with milliseconds > Number.MAX_NUMBER,
 * therefore we use 1-Jan-1970 instead
 */
var ORDINAL_BASE = datetime(1970, 1, 1);
/**
 * Python: MO-SU: 0 - 6
 * JS: SU-SAT 0 - 6
 */
var PY_WEEKDAYS = [6, 0, 1, 2, 3, 4, 5];
/**
 * py_date.timetuple()[7]
 */
var getYearDay = function (date) {
    var dateNoTime = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    return (Math.ceil((dateNoTime.valueOf() - new Date(date.getUTCFullYear(), 0, 1).valueOf()) /
        ONE_DAY) + 1);
};
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
var isDate = function (value) {
    return value instanceof Date;
};
var isValidDate = function (value) {
    return isDate(value) && !isNaN(value.getTime());
};
/**
 * @return {Number} the date's timezone offset in ms
 */
var tzOffset = function (date) {
    return date.getTimezoneOffset() * 60 * 1000;
};
/**
 * @see: <http://www.mcfedries.com/JavaScript/DaysBetween.asp>
 */
var daysBetween = function (date1, date2) {
    // The number of milliseconds in one day
    // Convert both dates to milliseconds
    var date1ms = date1.getTime();
    var date2ms = date2.getTime();
    // Calculate the difference in milliseconds
    var differencems = date1ms - date2ms;
    // Convert back to days and return
    return Math.round(differencems / ONE_DAY);
};
/**
 * @see: <http://docs.python.org/library/datetime.html#datetime.date.toordinal>
 */
var toOrdinal = function (date) {
    return daysBetween(date, ORDINAL_BASE);
};
/**
 * @see - <http://docs.python.org/library/datetime.html#datetime.date.fromordinal>
 */
var fromOrdinal = function (ordinal) {
    return new Date(ORDINAL_BASE.getTime() + ordinal * ONE_DAY);
};
var getMonthDays = function (date) {
    var month = date.getUTCMonth();
    return month === 1 && isLeapYear(date.getUTCFullYear())
        ? 29
        : MONTH_DAYS[month];
};
/**
 * @return {Number} python-like weekday
 */
var getWeekday = function (date) {
    return PY_WEEKDAYS[date.getUTCDay()];
};
/**
 * @see: <http://docs.python.org/library/calendar.html#calendar.monthrange>
 */
var monthRange = function (year, month) {
    var date = datetime(year, month + 1, 1);
    return [getWeekday(date), getMonthDays(date)];
};
/**
 * @see: <http://docs.python.org/library/datetime.html#datetime.datetime.combine>
 */
var combine = function (date, time) {
    time = time || date;
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()));
};
var clone = function (date) {
    var dolly = new Date(date.getTime());
    return dolly;
};
var cloneDates = function (dates) {
    var clones = [];
    for (var i = 0; i < dates.length; i++) {
        clones.push(clone(dates[i]));
    }
    return clones;
};
/**
 * Sorts an array of Date or Time objects
 */
var sort = function (dates) {
    dates.sort(function (a, b) {
        return a.getTime() - b.getTime();
    });
};
var timeToUntilString = function (time, utc) {
    if (utc === void 0) { utc = true; }
    var date = new Date(time);
    return [
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.padStart)(date.getUTCFullYear().toString(), 4, '0'),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.padStart)(date.getUTCMonth() + 1, 2, '0'),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.padStart)(date.getUTCDate(), 2, '0'),
        'T',
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.padStart)(date.getUTCHours(), 2, '0'),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.padStart)(date.getUTCMinutes(), 2, '0'),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.padStart)(date.getUTCSeconds(), 2, '0'),
        utc ? 'Z' : '',
    ].join('');
};
var untilStringToDate = function (until) {
    var re = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
    var bits = re.exec(until);
    if (!bits)
        throw new Error("Invalid UNTIL value: ".concat(until));
    return new Date(Date.UTC(parseInt(bits[1], 10), parseInt(bits[2], 10) - 1, parseInt(bits[3], 10), parseInt(bits[5], 10) || 0, parseInt(bits[6], 10) || 0, parseInt(bits[7], 10) || 0));
};
var dateTZtoISO8601 = function (date, timeZone) {
    // date format for sv-SE is almost ISO8601
    var dateStr = date.toLocaleString('sv-SE', { timeZone: timeZone });
    // '2023-02-07 10:41:36'
    return dateStr.replace(' ', 'T') + 'Z';
};
var dateInTimeZone = function (date, timeZone) {
    var localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Date constructor can only reliably parse dates in ISO8601 format
    var dateInLocalTZ = new Date(dateTZtoISO8601(date, localTimeZone));
    var dateInTargetTZ = new Date(dateTZtoISO8601(date, timeZone !== null && timeZone !== void 0 ? timeZone : 'UTC'));
    var tzOffset = dateInTargetTZ.getTime() - dateInLocalTZ.getTime();
    return new Date(date.getTime() - tzOffset);
};
//# sourceMappingURL=dateutil.js.map

/***/ },

/***/ 346
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateWithZone: () => (/* binding */ DateWithZone)
/* harmony export */ });
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);

var DateWithZone = /** @class */ (function () {
    function DateWithZone(date, tzid) {
        if (isNaN(date.getTime())) {
            throw new RangeError('Invalid date passed to DateWithZone');
        }
        this.date = date;
        this.tzid = tzid;
    }
    Object.defineProperty(DateWithZone.prototype, "isUTC", {
        get: function () {
            return !this.tzid || this.tzid.toUpperCase() === 'UTC';
        },
        enumerable: false,
        configurable: true
    });
    DateWithZone.prototype.toString = function () {
        var datestr = (0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.timeToUntilString)(this.date.getTime(), this.isUTC);
        if (!this.isUTC) {
            return ";TZID=".concat(this.tzid, ":").concat(datestr);
        }
        return ":".concat(datestr);
    };
    DateWithZone.prototype.getTime = function () {
        return this.date.getTime();
    };
    DateWithZone.prototype.rezonedDate = function () {
        if (this.isUTC) {
            return this.date;
        }
        return (0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.dateInTimeZone)(this.date, this.tzid);
    };
    return DateWithZone;
}());

//# sourceMappingURL=datewithzone.js.map

/***/ },

/***/ 332
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   divmod: () => (/* binding */ divmod),
/* harmony export */   empty: () => (/* binding */ empty),
/* harmony export */   includes: () => (/* binding */ includes),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isPresent: () => (/* binding */ isPresent),
/* harmony export */   isWeekdayStr: () => (/* binding */ isWeekdayStr),
/* harmony export */   notEmpty: () => (/* binding */ notEmpty),
/* harmony export */   padStart: () => (/* binding */ padStart),
/* harmony export */   pymod: () => (/* binding */ pymod),
/* harmony export */   range: () => (/* binding */ range),
/* harmony export */   repeat: () => (/* binding */ repeat),
/* harmony export */   split: () => (/* binding */ split),
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
/* harmony import */ var _weekday__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(333);
// =============================================================================
// Helper functions
// =============================================================================

var isPresent = function (value) {
    return value !== null && value !== undefined;
};
var isNumber = function (value) {
    return typeof value === 'number';
};
var isWeekdayStr = function (value) {
    return typeof value === 'string' && _weekday__WEBPACK_IMPORTED_MODULE_0__.ALL_WEEKDAYS.includes(value);
};
var isArray = Array.isArray;
/**
 * Simplified version of python's range()
 */
var range = function (start, end) {
    if (end === void 0) { end = start; }
    if (arguments.length === 1) {
        end = start;
        start = 0;
    }
    var rang = [];
    for (var i = start; i < end; i++)
        rang.push(i);
    return rang;
};
var clone = function (array) {
    return [].concat(array);
};
var repeat = function (value, times) {
    var i = 0;
    var array = [];
    if (isArray(value)) {
        for (; i < times; i++)
            array[i] = [].concat(value);
    }
    else {
        for (; i < times; i++)
            array[i] = value;
    }
    return array;
};
var toArray = function (item) {
    if (isArray(item)) {
        return item;
    }
    return [item];
};
function padStart(item, targetLength, padString) {
    if (padString === void 0) { padString = ' '; }
    var str = String(item);
    targetLength = targetLength >> 0;
    if (str.length > targetLength) {
        return String(str);
    }
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
        padString += repeat(padString, targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(str);
}
/**
 * Python like split
 */
var split = function (str, sep, num) {
    var splits = str.split(sep);
    return num
        ? splits.slice(0, num).concat([splits.slice(num).join(sep)])
        : splits;
};
/**
 * closure/goog/math/math.js:modulo
 * Copyright 2006 The Closure Library Authors.
 * The % operator in JavaScript returns the remainder of a / b, but differs from
 * some other languages in that the result will have the same sign as the
 * dividend. For example, -1 % 8 == -1, whereas in some other languages
 * (such as Python) the result would be 7. This function emulates the more
 * correct modulo behavior, which is useful for certain applications such as
 * calculating an offset index in a circular list.
 *
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
 * or b < x <= 0, depending on the sign of b).
 */
var pymod = function (a, b) {
    var r = a % b;
    // If r and b differ in sign, add b to wrap the result to the correct sign.
    return r * b < 0 ? r + b : r;
};
/**
 * @see: <http://docs.python.org/library/functions.html#divmod>
 */
var divmod = function (a, b) {
    return { div: Math.floor(a / b), mod: pymod(a, b) };
};
var empty = function (obj) {
    return !isPresent(obj) || obj.length === 0;
};
/**
 * Python-like boolean
 *
 * @return {Boolean} value of an object/primitive, taking into account
 * the fact that in Python an empty list's/tuple's
 * boolean value is False, whereas in JS it's true
 */
var notEmpty = function (obj) {
    return !empty(obj);
};
/**
 * Return true if a value is in an array
 */
var includes = function (arr, val) {
    return notEmpty(arr) && arr.indexOf(val) !== -1;
};
//# sourceMappingURL=helpers.js.map

/***/ },

/***/ 329
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_WEEKDAYS: () => (/* reexport safe */ _weekday__WEBPACK_IMPORTED_MODULE_4__.ALL_WEEKDAYS),
/* harmony export */   Frequency: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.Frequency),
/* harmony export */   RRule: () => (/* reexport safe */ _rrule__WEBPACK_IMPORTED_MODULE_0__.RRule),
/* harmony export */   RRuleSet: () => (/* reexport safe */ _rruleset__WEBPACK_IMPORTED_MODULE_1__.RRuleSet),
/* harmony export */   Weekday: () => (/* reexport safe */ _weekday__WEBPACK_IMPORTED_MODULE_4__.Weekday),
/* harmony export */   datetime: () => (/* reexport safe */ _dateutil__WEBPACK_IMPORTED_MODULE_5__.datetime),
/* harmony export */   rrulestr: () => (/* reexport safe */ _rrulestr__WEBPACK_IMPORTED_MODULE_2__.rrulestr)
/* harmony export */ });
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(330);
/* harmony import */ var _rruleset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(355);
/* harmony import */ var _rrulestr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(357);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(341);
/* harmony import */ var _weekday__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(333);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(331);
/* !
 * rrule.js - Library for working with recurrence rules for calendar dates.
 * https://github.com/jakubroztocil/rrule
 *
 * Copyright 2010, Jakub Roztocil and Lars Schoning
 * Licenced under the BSD licence.
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 * Based on:
 * python-dateutil - Extensions to the standard Python datetime module.
 * Copyright (c) 2003-2011 - Gustavo Niemeyer <gustavo@niemeyer.net>
 * Copyright (c) 2012 - Tomi Pieviläinen <tomi.pievilainen@iki.fi>
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 */






//# sourceMappingURL=index.js.map

/***/ },

/***/ 348
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iter: () => (/* binding */ iter)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(341);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(331);
/* harmony import */ var _iterinfo_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(349);
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(330);
/* harmony import */ var _parseoptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(342);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(332);
/* harmony import */ var _datewithzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(346);
/* harmony import */ var _poslist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(354);
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(343);









function iter(iterResult, options) {
    var dtstart = options.dtstart, freq = options.freq, interval = options.interval, until = options.until, bysetpos = options.bysetpos;
    var count = options.count;
    if (count === 0 || interval === 0) {
        return emitResult(iterResult);
    }
    var counterDate = _datetime__WEBPACK_IMPORTED_MODULE_8__.DateTime.fromDate(dtstart);
    var ii = new _iterinfo_index__WEBPACK_IMPORTED_MODULE_2__["default"](options);
    ii.rebuild(counterDate.year, counterDate.month);
    var timeset = makeTimeset(ii, counterDate, options);
    for (;;) {
        var _a = ii.getdayset(freq)(counterDate.year, counterDate.month, counterDate.day), dayset = _a[0], start = _a[1], end = _a[2];
        var filtered = removeFilteredDays(dayset, start, end, ii, options);
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(bysetpos)) {
            var poslist = (0,_poslist__WEBPACK_IMPORTED_MODULE_7__.buildPoslist)(bysetpos, timeset, start, end, ii, dayset);
            for (var j = 0; j < poslist.length; j++) {
                var res = poslist[j];
                if (until && res > until) {
                    return emitResult(iterResult);
                }
                if (res >= dtstart) {
                    var rezonedDate = rezoneIfNeeded(res, options);
                    if (!iterResult.accept(rezonedDate)) {
                        return emitResult(iterResult);
                    }
                    if (count) {
                        --count;
                        if (!count) {
                            return emitResult(iterResult);
                        }
                    }
                }
            }
        }
        else {
            for (var j = start; j < end; j++) {
                var currentDay = dayset[j];
                if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isPresent)(currentDay)) {
                    continue;
                }
                var date = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.fromOrdinal)(ii.yearordinal + currentDay);
                for (var k = 0; k < timeset.length; k++) {
                    var time = timeset[k];
                    var res = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.combine)(date, time);
                    if (until && res > until) {
                        return emitResult(iterResult);
                    }
                    if (res >= dtstart) {
                        var rezonedDate = rezoneIfNeeded(res, options);
                        if (!iterResult.accept(rezonedDate)) {
                            return emitResult(iterResult);
                        }
                        if (count) {
                            --count;
                            if (!count) {
                                return emitResult(iterResult);
                            }
                        }
                    }
                }
            }
        }
        if (options.interval === 0) {
            return emitResult(iterResult);
        }
        // Handle frequency and interval
        counterDate.add(options, filtered);
        if (counterDate.year > _dateutil__WEBPACK_IMPORTED_MODULE_1__.MAXYEAR) {
            return emitResult(iterResult);
        }
        if (!(0,_types__WEBPACK_IMPORTED_MODULE_0__.freqIsDailyOrGreater)(freq)) {
            timeset = ii.gettimeset(freq)(counterDate.hour, counterDate.minute, counterDate.second, 0);
        }
        ii.rebuild(counterDate.year, counterDate.month);
    }
}
function isFiltered(ii, currentDay, options) {
    var bymonth = options.bymonth, byweekno = options.byweekno, byweekday = options.byweekday, byeaster = options.byeaster, bymonthday = options.bymonthday, bynmonthday = options.bynmonthday, byyearday = options.byyearday;
    return (((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(bymonth) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(bymonth, ii.mmask[currentDay])) ||
        ((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(byweekno) && !ii.wnomask[currentDay]) ||
        ((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(byweekday) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(byweekday, ii.wdaymask[currentDay])) ||
        ((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(ii.nwdaymask) && !ii.nwdaymask[currentDay]) ||
        (byeaster !== null && !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(ii.eastermask, currentDay)) ||
        (((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(bymonthday) || (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(bynmonthday)) &&
            !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(bymonthday, ii.mdaymask[currentDay]) &&
            !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(bynmonthday, ii.nmdaymask[currentDay])) ||
        ((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(byyearday) &&
            ((currentDay < ii.yearlen &&
                !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(byyearday, currentDay + 1) &&
                !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(byyearday, -ii.yearlen + currentDay)) ||
                (currentDay >= ii.yearlen &&
                    !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(byyearday, currentDay + 1 - ii.yearlen) &&
                    !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(byyearday, -ii.nextyearlen + currentDay - ii.yearlen)))));
}
function rezoneIfNeeded(date, options) {
    return new _datewithzone__WEBPACK_IMPORTED_MODULE_6__.DateWithZone(date, options.tzid).rezonedDate();
}
function emitResult(iterResult) {
    return iterResult.getValue();
}
function removeFilteredDays(dayset, start, end, ii, options) {
    var filtered = false;
    for (var dayCounter = start; dayCounter < end; dayCounter++) {
        var currentDay = dayset[dayCounter];
        filtered = isFiltered(ii, currentDay, options);
        if (filtered)
            dayset[currentDay] = null;
    }
    return filtered;
}
function makeTimeset(ii, counterDate, options) {
    var freq = options.freq, byhour = options.byhour, byminute = options.byminute, bysecond = options.bysecond;
    if ((0,_types__WEBPACK_IMPORTED_MODULE_0__.freqIsDailyOrGreater)(freq)) {
        return (0,_parseoptions__WEBPACK_IMPORTED_MODULE_4__.buildTimeset)(options);
    }
    if ((freq >= _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.HOURLY &&
        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(byhour) &&
        !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(byhour, counterDate.hour)) ||
        (freq >= _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.MINUTELY &&
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(byminute) &&
            !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(byminute, counterDate.minute)) ||
        (freq >= _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.SECONDLY &&
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.notEmpty)(bysecond) &&
            !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.includes)(bysecond, counterDate.second))) {
        return [];
    }
    return ii.gettimeset(freq)(counterDate.hour, counterDate.minute, counterDate.second, counterDate.millisecond);
}
//# sourceMappingURL=index.js.map

/***/ },

/***/ 354
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPoslist: () => (/* binding */ buildPoslist)
/* harmony export */ });
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);


function buildPoslist(bysetpos, timeset, start, end, ii, dayset) {
    var poslist = [];
    for (var j = 0; j < bysetpos.length; j++) {
        var daypos = void 0;
        var timepos = void 0;
        var pos = bysetpos[j];
        if (pos < 0) {
            daypos = Math.floor(pos / timeset.length);
            timepos = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.pymod)(pos, timeset.length);
        }
        else {
            daypos = Math.floor((pos - 1) / timeset.length);
            timepos = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.pymod)(pos - 1, timeset.length);
        }
        var tmp = [];
        for (var k = start; k < end; k++) {
            var val = dayset[k];
            if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isPresent)(val))
                continue;
            tmp.push(val);
        }
        var i = void 0;
        if (daypos < 0) {
            i = tmp.slice(daypos)[0];
        }
        else {
            i = tmp[daypos];
        }
        var time = timeset[timepos];
        var date = (0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.fromOrdinal)(ii.yearordinal + i);
        var res = (0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.combine)(date, time);
        // XXX: can this ever be in the array?
        // - compare the actual date instead?
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.includes)(poslist, res))
            poslist.push(res);
    }
    ;(0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.sort)(poslist);
    return poslist;
}
//# sourceMappingURL=poslist.js.map

/***/ },

/***/ 353
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easter: () => (/* binding */ easter)
/* harmony export */ });
function easter(y, offset) {
    if (offset === void 0) { offset = 0; }
    var a = y % 19;
    var b = Math.floor(y / 100);
    var c = y % 100;
    var d = Math.floor(b / 4);
    var e = b % 4;
    var f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3);
    var h = Math.floor(19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4);
    var k = c % 4;
    var l = Math.floor(32 + 2 * e + 2 * i - h - k) % 7;
    var m = Math.floor((a + 11 * h + 22 * l) / 451);
    var month = Math.floor((h + l - 7 * m + 114) / 31);
    var day = ((h + l - 7 * m + 114) % 31) + 1;
    var date = Date.UTC(y, month - 1, day + offset);
    var yearStart = Date.UTC(y, 0, 1);
    return [Math.ceil((date - yearStart) / (1000 * 60 * 60 * 24))];
}
//# sourceMappingURL=easter.js.map

/***/ },

/***/ 349
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(332);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(341);
/* harmony import */ var _yearinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(350);
/* harmony import */ var _monthinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(352);
/* harmony import */ var _easter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(353);
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(343);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(331);







// =============================================================================
// Iterinfo
// =============================================================================
var Iterinfo = /** @class */ (function () {
    // eslint-disable-next-line no-empty-function
    function Iterinfo(options) {
        this.options = options;
    }
    Iterinfo.prototype.rebuild = function (year, month) {
        var options = this.options;
        if (year !== this.lastyear) {
            this.yearinfo = (0,_yearinfo__WEBPACK_IMPORTED_MODULE_2__.rebuildYear)(year, options);
        }
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.notEmpty)(options.bynweekday) &&
            (month !== this.lastmonth || year !== this.lastyear)) {
            var _a = this.yearinfo, yearlen = _a.yearlen, mrange = _a.mrange, wdaymask = _a.wdaymask;
            this.monthinfo = (0,_monthinfo__WEBPACK_IMPORTED_MODULE_3__.rebuildMonth)(year, month, yearlen, mrange, wdaymask, options);
        }
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isPresent)(options.byeaster)) {
            this.eastermask = (0,_easter__WEBPACK_IMPORTED_MODULE_4__.easter)(year, options.byeaster);
        }
    };
    Object.defineProperty(Iterinfo.prototype, "lastyear", {
        get: function () {
            return this.monthinfo ? this.monthinfo.lastyear : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "lastmonth", {
        get: function () {
            return this.monthinfo ? this.monthinfo.lastmonth : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "yearlen", {
        get: function () {
            return this.yearinfo.yearlen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "yearordinal", {
        get: function () {
            return this.yearinfo.yearordinal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "mrange", {
        get: function () {
            return this.yearinfo.mrange;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "wdaymask", {
        get: function () {
            return this.yearinfo.wdaymask;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "mmask", {
        get: function () {
            return this.yearinfo.mmask;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "wnomask", {
        get: function () {
            return this.yearinfo.wnomask;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "nwdaymask", {
        get: function () {
            return this.monthinfo ? this.monthinfo.nwdaymask : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "nextyearlen", {
        get: function () {
            return this.yearinfo.nextyearlen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "mdaymask", {
        get: function () {
            return this.yearinfo.mdaymask;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iterinfo.prototype, "nmdaymask", {
        get: function () {
            return this.yearinfo.nmdaymask;
        },
        enumerable: false,
        configurable: true
    });
    Iterinfo.prototype.ydayset = function () {
        return [(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.range)(this.yearlen), 0, this.yearlen];
    };
    Iterinfo.prototype.mdayset = function (_, month) {
        var start = this.mrange[month - 1];
        var end = this.mrange[month];
        var set = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.repeat)(null, this.yearlen);
        for (var i = start; i < end; i++)
            set[i] = i;
        return [set, start, end];
    };
    Iterinfo.prototype.wdayset = function (year, month, day) {
        // We need to handle cross-year weeks here.
        var set = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.repeat)(null, this.yearlen + 7);
        var i = (0,_dateutil__WEBPACK_IMPORTED_MODULE_6__.toOrdinal)((0,_dateutil__WEBPACK_IMPORTED_MODULE_6__.datetime)(year, month, day)) - this.yearordinal;
        var start = i;
        for (var j = 0; j < 7; j++) {
            set[i] = i;
            ++i;
            if (this.wdaymask[i] === this.options.wkst)
                break;
        }
        return [set, start, i];
    };
    Iterinfo.prototype.ddayset = function (year, month, day) {
        var set = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.repeat)(null, this.yearlen);
        var i = (0,_dateutil__WEBPACK_IMPORTED_MODULE_6__.toOrdinal)((0,_dateutil__WEBPACK_IMPORTED_MODULE_6__.datetime)(year, month, day)) - this.yearordinal;
        set[i] = i;
        return [set, i, i + 1];
    };
    Iterinfo.prototype.htimeset = function (hour, _, second, millisecond) {
        var _this = this;
        var set = [];
        this.options.byminute.forEach(function (minute) {
            set = set.concat(_this.mtimeset(hour, minute, second, millisecond));
        });
        (0,_dateutil__WEBPACK_IMPORTED_MODULE_6__.sort)(set);
        return set;
    };
    Iterinfo.prototype.mtimeset = function (hour, minute, _, millisecond) {
        var set = this.options.bysecond.map(function (second) { return new _datetime__WEBPACK_IMPORTED_MODULE_5__.Time(hour, minute, second, millisecond); });
        (0,_dateutil__WEBPACK_IMPORTED_MODULE_6__.sort)(set);
        return set;
    };
    Iterinfo.prototype.stimeset = function (hour, minute, second, millisecond) {
        return [new _datetime__WEBPACK_IMPORTED_MODULE_5__.Time(hour, minute, second, millisecond)];
    };
    Iterinfo.prototype.getdayset = function (freq) {
        switch (freq) {
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.YEARLY:
                return this.ydayset.bind(this);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.MONTHLY:
                return this.mdayset.bind(this);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.WEEKLY:
                return this.wdayset.bind(this);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.DAILY:
                return this.ddayset.bind(this);
            default:
                return this.ddayset.bind(this);
        }
    };
    Iterinfo.prototype.gettimeset = function (freq) {
        switch (freq) {
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.HOURLY:
                return this.htimeset.bind(this);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.MINUTELY:
                return this.mtimeset.bind(this);
            case _types__WEBPACK_IMPORTED_MODULE_1__.Frequency.SECONDLY:
                return this.stimeset.bind(this);
        }
    };
    return Iterinfo;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Iterinfo);
//# sourceMappingURL=index.js.map

/***/ },

/***/ 352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rebuildMonth: () => (/* binding */ rebuildMonth)
/* harmony export */ });
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(330);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);


function rebuildMonth(year, month, yearlen, mrange, wdaymask, options) {
    var result = {
        lastyear: year,
        lastmonth: month,
        nwdaymask: [],
    };
    var ranges = [];
    if (options.freq === _rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.YEARLY) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.empty)(options.bymonth)) {
            ranges = [[0, yearlen]];
        }
        else {
            for (var j = 0; j < options.bymonth.length; j++) {
                month = options.bymonth[j];
                ranges.push(mrange.slice(month - 1, month + 1));
            }
        }
    }
    else if (options.freq === _rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.MONTHLY) {
        ranges = [mrange.slice(month - 1, month + 1)];
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.empty)(ranges)) {
        return result;
    }
    // Weekly frequency won't get here, so we may not
    // care about cross-year weekly periods.
    result.nwdaymask = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(0, yearlen);
    for (var j = 0; j < ranges.length; j++) {
        var rang = ranges[j];
        var first = rang[0];
        var last = rang[1] - 1;
        for (var k = 0; k < options.bynweekday.length; k++) {
            var i = void 0;
            var _a = options.bynweekday[k], wday = _a[0], n = _a[1];
            if (n < 0) {
                i = last + (n + 1) * 7;
                i -= (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.pymod)(wdaymask[i] - wday, 7);
            }
            else {
                i = first + (n - 1) * 7;
                i += (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.pymod)(7 - wdaymask[i] + wday, 7);
            }
            if (first <= i && i <= last)
                result.nwdaymask[i] = 1;
        }
    }
    return result;
}
//# sourceMappingURL=monthinfo.js.map

/***/ },

/***/ 350
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rebuildYear: () => (/* binding */ rebuildYear)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(331);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);
/* harmony import */ var _masks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(351);




function rebuildYear(year, options) {
    var firstyday = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.datetime)(year, 1, 1);
    var yearlen = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.isLeapYear)(year) ? 366 : 365;
    var nextyearlen = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.isLeapYear)(year + 1) ? 366 : 365;
    var yearordinal = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.toOrdinal)(firstyday);
    var yearweekday = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.getWeekday)(firstyday);
    var result = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ yearlen: yearlen, nextyearlen: nextyearlen, yearordinal: yearordinal, yearweekday: yearweekday }, baseYearMasks(year)), { wnomask: null });
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.empty)(options.byweekno)) {
        return result;
    }
    result.wnomask = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.repeat)(0, yearlen + 7);
    var firstwkst;
    var wyearlen;
    var no1wkst = (firstwkst = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.pymod)(7 - yearweekday + options.wkst, 7));
    if (no1wkst >= 4) {
        no1wkst = 0;
        // Number of days in the year, plus the days we got
        // from last year.
        wyearlen = result.yearlen + (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.pymod)(yearweekday - options.wkst, 7);
    }
    else {
        // Number of days in the year, minus the days we
        // left in last year.
        wyearlen = yearlen - no1wkst;
    }
    var div = Math.floor(wyearlen / 7);
    var mod = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.pymod)(wyearlen, 7);
    var numweeks = Math.floor(div + mod / 4);
    for (var j = 0; j < options.byweekno.length; j++) {
        var n = options.byweekno[j];
        if (n < 0) {
            n += numweeks + 1;
        }
        if (!(n > 0 && n <= numweeks)) {
            continue;
        }
        var i = void 0;
        if (n > 1) {
            i = no1wkst + (n - 1) * 7;
            if (no1wkst !== firstwkst) {
                i -= 7 - firstwkst;
            }
        }
        else {
            i = no1wkst;
        }
        for (var k = 0; k < 7; k++) {
            result.wnomask[i] = 1;
            i++;
            if (result.wdaymask[i] === options.wkst)
                break;
        }
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(options.byweekno, 1)) {
        // Check week number 1 of next year as well
        // orig-TODO : Check -numweeks for next year.
        var i = no1wkst + numweeks * 7;
        if (no1wkst !== firstwkst)
            i -= 7 - firstwkst;
        if (i < yearlen) {
            // If week starts in next year, we
            // don't care about it.
            for (var j = 0; j < 7; j++) {
                result.wnomask[i] = 1;
                i += 1;
                if (result.wdaymask[i] === options.wkst)
                    break;
            }
        }
    }
    if (no1wkst) {
        // Check last week number of last year as
        // well. If no1wkst is 0, either the year
        // started on week start, or week number 1
        // got days from last year, so there are no
        // days from last year's last week number in
        // this year.
        var lnumweeks = void 0;
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(options.byweekno, -1)) {
            var lyearweekday = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.getWeekday)((0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.datetime)(year - 1, 1, 1));
            var lno1wkst = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.pymod)(7 - lyearweekday.valueOf() + options.wkst, 7);
            var lyearlen = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.isLeapYear)(year - 1) ? 366 : 365;
            var weekst = void 0;
            if (lno1wkst >= 4) {
                lno1wkst = 0;
                weekst = lyearlen + (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.pymod)(lyearweekday - options.wkst, 7);
            }
            else {
                weekst = yearlen - no1wkst;
            }
            lnumweeks = Math.floor(52 + (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.pymod)(weekst, 7) / 4);
        }
        else {
            lnumweeks = -1;
        }
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(options.byweekno, lnumweeks)) {
            for (var i = 0; i < no1wkst; i++)
                result.wnomask[i] = 1;
        }
    }
    return result;
}
function baseYearMasks(year) {
    var yearlen = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.isLeapYear)(year) ? 366 : 365;
    var firstyday = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.datetime)(year, 1, 1);
    var wday = (0,_dateutil__WEBPACK_IMPORTED_MODULE_1__.getWeekday)(firstyday);
    if (yearlen === 365) {
        return {
            mmask: _masks__WEBPACK_IMPORTED_MODULE_3__.M365MASK,
            mdaymask: _masks__WEBPACK_IMPORTED_MODULE_3__.MDAY365MASK,
            nmdaymask: _masks__WEBPACK_IMPORTED_MODULE_3__.NMDAY365MASK,
            wdaymask: _masks__WEBPACK_IMPORTED_MODULE_3__.WDAYMASK.slice(wday),
            mrange: _masks__WEBPACK_IMPORTED_MODULE_3__.M365RANGE,
        };
    }
    return {
        mmask: _masks__WEBPACK_IMPORTED_MODULE_3__.M366MASK,
        mdaymask: _masks__WEBPACK_IMPORTED_MODULE_3__.MDAY366MASK,
        nmdaymask: _masks__WEBPACK_IMPORTED_MODULE_3__.NMDAY366MASK,
        wdaymask: _masks__WEBPACK_IMPORTED_MODULE_3__.WDAYMASK.slice(wday),
        mrange: _masks__WEBPACK_IMPORTED_MODULE_3__.M366RANGE,
    };
}
//# sourceMappingURL=yearinfo.js.map

/***/ },

/***/ 334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This class helps us to emulate python's generators, sorta.
 */
var IterResult = /** @class */ (function () {
    function IterResult(method, args) {
        this.minDate = null;
        this.maxDate = null;
        this._result = [];
        this.total = 0;
        this.method = method;
        this.args = args;
        if (method === 'between') {
            this.maxDate = args.inc
                ? args.before
                : new Date(args.before.getTime() - 1);
            this.minDate = args.inc ? args.after : new Date(args.after.getTime() + 1);
        }
        else if (method === 'before') {
            this.maxDate = args.inc ? args.dt : new Date(args.dt.getTime() - 1);
        }
        else if (method === 'after') {
            this.minDate = args.inc ? args.dt : new Date(args.dt.getTime() + 1);
        }
    }
    /**
     * Possibly adds a date into the result.
     *
     * @param {Date} date - the date isn't necessarly added to the result
     * list (if it is too late/too early)
     * @return {Boolean} true if it makes sense to continue the iteration
     * false if we're done.
     */
    IterResult.prototype.accept = function (date) {
        ++this.total;
        var tooEarly = this.minDate && date < this.minDate;
        var tooLate = this.maxDate && date > this.maxDate;
        if (this.method === 'between') {
            if (tooEarly)
                return true;
            if (tooLate)
                return false;
        }
        else if (this.method === 'before') {
            if (tooLate)
                return false;
        }
        else if (this.method === 'after') {
            if (tooEarly)
                return true;
            this.add(date);
            return false;
        }
        return this.add(date);
    };
    /**
     *
     * @param {Date} date that is part of the result.
     * @return {Boolean} whether we are interested in more values.
     */
    IterResult.prototype.add = function (date) {
        this._result.push(date);
        return true;
    };
    /**
     * 'before' and 'after' return only one date, whereas 'all'
     * and 'between' an array.
     *
     * @return {Date,Array?}
     */
    IterResult.prototype.getValue = function () {
        var res = this._result;
        switch (this.method) {
            case 'all':
            case 'between':
                return res;
            case 'before':
            case 'after':
            default:
                return (res.length ? res[res.length - 1] : null);
        }
    };
    IterResult.prototype.clone = function () {
        return new IterResult(this.method, this.args);
    };
    return IterResult;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IterResult);
//# sourceMappingURL=iterresult.js.map

/***/ },

/***/ 356
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iterSet: () => (/* binding */ iterSet)
/* harmony export */ });
/* harmony import */ var _datewithzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);
/* harmony import */ var _iter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(331);



function iterSet(iterResult, _rrule, _exrule, _rdate, _exdate, tzid) {
    var _exdateHash = {};
    var _accept = iterResult.accept;
    function evalExdate(after, before) {
        _exrule.forEach(function (rrule) {
            rrule.between(after, before, true).forEach(function (date) {
                _exdateHash[Number(date)] = true;
            });
        });
    }
    _exdate.forEach(function (date) {
        var zonedDate = new _datewithzone__WEBPACK_IMPORTED_MODULE_0__.DateWithZone(date, tzid).rezonedDate();
        _exdateHash[Number(zonedDate)] = true;
    });
    iterResult.accept = function (date) {
        var dt = Number(date);
        if (isNaN(dt))
            return _accept.call(this, date);
        if (!_exdateHash[dt]) {
            evalExdate(new Date(dt - 1), new Date(dt + 1));
            if (!_exdateHash[dt]) {
                _exdateHash[dt] = true;
                return _accept.call(this, date);
            }
        }
        return true;
    };
    if (iterResult.method === 'between') {
        evalExdate(iterResult.args.after, iterResult.args.before);
        iterResult.accept = function (date) {
            var dt = Number(date);
            if (!_exdateHash[dt]) {
                _exdateHash[dt] = true;
                return _accept.call(this, date);
            }
            return true;
        };
    }
    for (var i = 0; i < _rdate.length; i++) {
        var zonedDate = new _datewithzone__WEBPACK_IMPORTED_MODULE_0__.DateWithZone(_rdate[i], tzid).rezonedDate();
        if (!iterResult.accept(new Date(zonedDate.getTime())))
            break;
    }
    _rrule.forEach(function (rrule) {
        ;(0,_iter__WEBPACK_IMPORTED_MODULE_1__.iter)(iterResult, rrule.options);
    });
    var res = iterResult._result;
    (0,_dateutil__WEBPACK_IMPORTED_MODULE_2__.sort)(res);
    switch (iterResult.method) {
        case 'all':
        case 'between':
            return res;
        case 'before':
            return ((res.length && res[res.length - 1]) || null);
        case 'after':
        default:
            return ((res.length && res[0]) || null);
    }
}
//# sourceMappingURL=iterset.js.map

/***/ },

/***/ 351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M365MASK: () => (/* binding */ M365MASK),
/* harmony export */   M365RANGE: () => (/* binding */ M365RANGE),
/* harmony export */   M366MASK: () => (/* binding */ M366MASK),
/* harmony export */   M366RANGE: () => (/* binding */ M366RANGE),
/* harmony export */   MDAY365MASK: () => (/* binding */ MDAY365MASK),
/* harmony export */   MDAY366MASK: () => (/* binding */ MDAY366MASK),
/* harmony export */   NMDAY365MASK: () => (/* binding */ NMDAY365MASK),
/* harmony export */   NMDAY366MASK: () => (/* binding */ NMDAY366MASK),
/* harmony export */   WDAYMASK: () => (/* binding */ WDAYMASK)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);


// =============================================================================
// Date masks
// =============================================================================
// Every mask is 7 days longer to handle cross-year weekly periods.
var M365MASK = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(1, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(2, 28), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(3, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(4, 30), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(5, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(6, 30), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(7, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(8, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(9, 30), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(10, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(11, 30), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(12, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(1, 7), true);
var M366MASK = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(1, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(2, 29), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(3, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(4, 30), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(5, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(6, 30), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(7, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(8, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(9, 30), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(10, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(11, 30), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(12, 31), true), (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.repeat)(1, 7), true);
var M28 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(1, 29);
var M29 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(1, 30);
var M30 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(1, 31);
var M31 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(1, 32);
var MDAY366MASK = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], M31, true), M29, true), M31, true), M30, true), M31, true), M30, true), M31, true), M31, true), M30, true), M31, true), M30, true), M31, true), M31.slice(0, 7), true);
var MDAY365MASK = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], M31, true), M28, true), M31, true), M30, true), M31, true), M30, true), M31, true), M31, true), M30, true), M31, true), M30, true), M31, true), M31.slice(0, 7), true);
var NM28 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(-28, 0);
var NM29 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(-29, 0);
var NM30 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(-30, 0);
var NM31 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(-31, 0);
var NMDAY366MASK = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], NM31, true), NM29, true), NM31, true), NM30, true), NM31, true), NM30, true), NM31, true), NM31, true), NM30, true), NM31, true), NM30, true), NM31, true), NM31.slice(0, 7), true);
var NMDAY365MASK = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], NM31, true), NM28, true), NM31, true), NM30, true), NM31, true), NM30, true), NM31, true), NM31, true), NM30, true), NM31, true), NM30, true), NM31, true), NM31.slice(0, 7), true);
var M366RANGE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
var M365RANGE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
var WDAYMASK = (function () {
    var wdaymask = [];
    for (var i = 0; i < 55; i++)
        wdaymask = wdaymask.concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.range)(7));
    return wdaymask;
})();

//# sourceMappingURL=masks.js.map

/***/ },

/***/ 339
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// =============================================================================
// i18n
// =============================================================================
var ENGLISH = {
    dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    tokens: {
        SKIP: /^[ \r\n\t]+|^\.$/,
        number: /^[1-9][0-9]*/,
        numberAsText: /^(one|two|three)/i,
        every: /^every/i,
        'day(s)': /^days?/i,
        'weekday(s)': /^weekdays?/i,
        'week(s)': /^weeks?/i,
        'hour(s)': /^hours?/i,
        'minute(s)': /^minutes?/i,
        'month(s)': /^months?/i,
        'year(s)': /^years?/i,
        on: /^(on|in)/i,
        at: /^(at)/i,
        the: /^the/i,
        first: /^first/i,
        second: /^second/i,
        third: /^third/i,
        nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
        last: /^last/i,
        for: /^for/i,
        'time(s)': /^times?/i,
        until: /^(un)?til/i,
        monday: /^mo(n(day)?)?/i,
        tuesday: /^tu(e(s(day)?)?)?/i,
        wednesday: /^we(d(n(esday)?)?)?/i,
        thursday: /^th(u(r(sday)?)?)?/i,
        friday: /^fr(i(day)?)?/i,
        saturday: /^sa(t(urday)?)?/i,
        sunday: /^su(n(day)?)?/i,
        january: /^jan(uary)?/i,
        february: /^feb(ruary)?/i,
        march: /^mar(ch)?/i,
        april: /^apr(il)?/i,
        may: /^may/i,
        june: /^june?/i,
        july: /^july?/i,
        august: /^aug(ust)?/i,
        september: /^sep(t(ember)?)?/i,
        october: /^oct(ober)?/i,
        november: /^nov(ember)?/i,
        december: /^dec(ember)?/i,
        comma: /^(,\s*|(and|or)\s*)+/i,
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ENGLISH);
//# sourceMappingURL=i18n.js.map

/***/ },

/***/ 337
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromText: () => (/* binding */ fromText),
/* harmony export */   isFullyConvertible: () => (/* binding */ isFullyConvertible),
/* harmony export */   parseText: () => (/* reexport safe */ _parsetext__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   toText: () => (/* binding */ toText)
/* harmony export */ });
/* harmony import */ var _totext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(338);
/* harmony import */ var _parsetext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(340);
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(330);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(341);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(339);





/* !
 * rrule.js - Library for working with recurrence rules for calendar dates.
 * https://github.com/jakubroztocil/rrule
 *
 * Copyright 2010, Jakub Roztocil and Lars Schoning
 * Licenced under the BSD licence.
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 */
/**
 *
 * Implementation of RRule.fromText() and RRule::toText().
 *
 *
 * On the client side, this file needs to be included
 * when those functions are used.
 *
 */
// =============================================================================
// fromText
// =============================================================================
/**
 * Will be able to convert some of the below described rules from
 * text format to a rule object.
 *
 *
 * RULES
 *
 * Every ([n])
 * day(s)
 * | [weekday], ..., (and) [weekday]
 * | weekday(s)
 * | week(s)
 * | month(s)
 * | [month], ..., (and) [month]
 * | year(s)
 *
 *
 * Plus 0, 1, or multiple of these:
 *
 * on [weekday], ..., (or) [weekday] the [monthday], [monthday], ... (or) [monthday]
 *
 * on [weekday], ..., (and) [weekday]
 *
 * on the [monthday], [monthday], ... (and) [monthday] (day of the month)
 *
 * on the [nth-weekday], ..., (and) [nth-weekday] (of the month/year)
 *
 *
 * Plus 0 or 1 of these:
 *
 * for [n] time(s)
 *
 * until [date]
 *
 * Plus (.)
 *
 *
 * Definitely no supported for parsing:
 *
 * (for year):
 * in week(s) [n], ..., (and) [n]
 *
 * on the [yearday], ..., (and) [n] day of the year
 * on day [yearday], ..., (and) [n]
 *
 *
 * NON-TERMINALS
 *
 * [n]: 1, 2 ..., one, two, three ..
 * [month]: January, February, March, April, May, ... December
 * [weekday]: Monday, ... Sunday
 * [nth-weekday]: first [weekday], 2nd [weekday], ... last [weekday], ...
 * [monthday]: first, 1., 2., 1st, 2nd, second, ... 31st, last day, 2nd last day, ..
 * [date]:
 * - [month] (0-31(,) ([year])),
 * - (the) 0-31.(1-12.([year])),
 * - (the) 0-31/(1-12/([year])),
 * - [weekday]
 *
 * [year]: 0000, 0001, ... 01, 02, ..
 *
 * Definitely not supported for parsing:
 *
 * [yearday]: first, 1., 2., 1st, 2nd, second, ... 366th, last day, 2nd last day, ..
 *
 * @param {String} text
 * @return {Object, Boolean} the rule, or null.
 */
var fromText = function (text, language) {
    if (language === void 0) { language = _i18n__WEBPACK_IMPORTED_MODULE_4__["default"]; }
    return new _rrule__WEBPACK_IMPORTED_MODULE_2__.RRule((0,_parsetext__WEBPACK_IMPORTED_MODULE_1__["default"])(text, language) || undefined);
};
var common = [
    'count',
    'until',
    'interval',
    'byweekday',
    'bymonthday',
    'bymonth',
];
_totext__WEBPACK_IMPORTED_MODULE_0__["default"].IMPLEMENTED = [];
_totext__WEBPACK_IMPORTED_MODULE_0__["default"].IMPLEMENTED[_types__WEBPACK_IMPORTED_MODULE_3__.Frequency.HOURLY] = common;
_totext__WEBPACK_IMPORTED_MODULE_0__["default"].IMPLEMENTED[_types__WEBPACK_IMPORTED_MODULE_3__.Frequency.MINUTELY] = common;
_totext__WEBPACK_IMPORTED_MODULE_0__["default"].IMPLEMENTED[_types__WEBPACK_IMPORTED_MODULE_3__.Frequency.DAILY] = ['byhour'].concat(common);
_totext__WEBPACK_IMPORTED_MODULE_0__["default"].IMPLEMENTED[_types__WEBPACK_IMPORTED_MODULE_3__.Frequency.WEEKLY] = common;
_totext__WEBPACK_IMPORTED_MODULE_0__["default"].IMPLEMENTED[_types__WEBPACK_IMPORTED_MODULE_3__.Frequency.MONTHLY] = common;
_totext__WEBPACK_IMPORTED_MODULE_0__["default"].IMPLEMENTED[_types__WEBPACK_IMPORTED_MODULE_3__.Frequency.YEARLY] = ['byweekno', 'byyearday'].concat(common);
// =============================================================================
// Export
// =============================================================================
var toText = function (rrule, gettext, language, dateFormatter) {
    return new _totext__WEBPACK_IMPORTED_MODULE_0__["default"](rrule, gettext, language, dateFormatter).toString();
};
var isFullyConvertible = _totext__WEBPACK_IMPORTED_MODULE_0__["default"].isFullyConvertible;

//# sourceMappingURL=index.js.map

/***/ },

/***/ 340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseText)
/* harmony export */ });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(330);


// =============================================================================
// Parser
// =============================================================================
var Parser = /** @class */ (function () {
    function Parser(rules) {
        this.done = true;
        this.rules = rules;
    }
    Parser.prototype.start = function (text) {
        this.text = text;
        this.done = false;
        return this.nextSymbol();
    };
    Parser.prototype.isDone = function () {
        return this.done && this.symbol === null;
    };
    Parser.prototype.nextSymbol = function () {
        var best;
        var bestSymbol;
        this.symbol = null;
        this.value = null;
        do {
            if (this.done)
                return false;
            var rule = void 0;
            best = null;
            for (var name_1 in this.rules) {
                rule = this.rules[name_1];
                var match = rule.exec(this.text);
                if (match) {
                    if (best === null || match[0].length > best[0].length) {
                        best = match;
                        bestSymbol = name_1;
                    }
                }
            }
            if (best != null) {
                this.text = this.text.substr(best[0].length);
                if (this.text === '')
                    this.done = true;
            }
            if (best == null) {
                this.done = true;
                this.symbol = null;
                this.value = null;
                return;
            }
        } while (bestSymbol === 'SKIP');
        this.symbol = bestSymbol;
        this.value = best;
        return true;
    };
    Parser.prototype.accept = function (name) {
        if (this.symbol === name) {
            if (this.value) {
                var v = this.value;
                this.nextSymbol();
                return v;
            }
            this.nextSymbol();
            return true;
        }
        return false;
    };
    Parser.prototype.acceptNumber = function () {
        return this.accept('number');
    };
    Parser.prototype.expect = function (name) {
        if (this.accept(name))
            return true;
        throw new Error('expected ' + name + ' but found ' + this.symbol);
    };
    return Parser;
}());
function parseText(text, language) {
    if (language === void 0) { language = _i18n__WEBPACK_IMPORTED_MODULE_0__["default"]; }
    var options = {};
    var ttr = new Parser(language.tokens);
    if (!ttr.start(text))
        return null;
    S();
    return options;
    function S() {
        // every [n]
        ttr.expect('every');
        var n = ttr.acceptNumber();
        if (n)
            options.interval = parseInt(n[0], 10);
        if (ttr.isDone())
            throw new Error('Unexpected end');
        switch (ttr.symbol) {
            case 'day(s)':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.DAILY;
                if (ttr.nextSymbol()) {
                    AT();
                    F();
                }
                break;
            // FIXME Note: every 2 weekdays != every two weeks on weekdays.
            // DAILY on weekdays is not a valid rule
            case 'weekday(s)':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.WEEKLY;
                options.byweekday = [_rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.MO, _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.TU, _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.WE, _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.TH, _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.FR];
                ttr.nextSymbol();
                AT();
                F();
                break;
            case 'week(s)':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.WEEKLY;
                if (ttr.nextSymbol()) {
                    ON();
                    AT();
                    F();
                }
                break;
            case 'hour(s)':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.HOURLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'minute(s)':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.MINUTELY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'month(s)':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.MONTHLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'year(s)':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.YEARLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.WEEKLY;
                var key = ttr.symbol
                    .substr(0, 2)
                    .toUpperCase();
                options.byweekday = [_rrule__WEBPACK_IMPORTED_MODULE_1__.RRule[key]];
                if (!ttr.nextSymbol())
                    return;
                // TODO check for duplicates
                while (ttr.accept('comma')) {
                    if (ttr.isDone())
                        throw new Error('Unexpected end');
                    var wkd = decodeWKD();
                    if (!wkd) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + ', expected weekday');
                    }
                    options.byweekday.push(_rrule__WEBPACK_IMPORTED_MODULE_1__.RRule[wkd]);
                    ttr.nextSymbol();
                }
                AT();
                MDAYs();
                F();
                break;
            case 'january':
            case 'february':
            case 'march':
            case 'april':
            case 'may':
            case 'june':
            case 'july':
            case 'august':
            case 'september':
            case 'october':
            case 'november':
            case 'december':
                options.freq = _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.YEARLY;
                options.bymonth = [decodeM()];
                if (!ttr.nextSymbol())
                    return;
                // TODO check for duplicates
                while (ttr.accept('comma')) {
                    if (ttr.isDone())
                        throw new Error('Unexpected end');
                    var m = decodeM();
                    if (!m) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + ', expected month');
                    }
                    options.bymonth.push(m);
                    ttr.nextSymbol();
                }
                ON();
                F();
                break;
            default:
                throw new Error('Unknown symbol');
        }
    }
    function ON() {
        var on = ttr.accept('on');
        var the = ttr.accept('the');
        if (!(on || the))
            return;
        do {
            var nth = decodeNTH();
            var wkd = decodeWKD();
            var m = decodeM();
            // nth <weekday> | <weekday>
            if (nth) {
                // ttr.nextSymbol()
                if (wkd) {
                    ttr.nextSymbol();
                    if (!options.byweekday)
                        options.byweekday = [];
                    options.byweekday.push(_rrule__WEBPACK_IMPORTED_MODULE_1__.RRule[wkd].nth(nth));
                }
                else {
                    if (!options.bymonthday)
                        options.bymonthday = [];
                    options.bymonthday.push(nth);
                    ttr.accept('day(s)');
                }
                // <weekday>
            }
            else if (wkd) {
                ttr.nextSymbol();
                if (!options.byweekday)
                    options.byweekday = [];
                options.byweekday.push(_rrule__WEBPACK_IMPORTED_MODULE_1__.RRule[wkd]);
            }
            else if (ttr.symbol === 'weekday(s)') {
                ttr.nextSymbol();
                if (!options.byweekday) {
                    options.byweekday = [_rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.MO, _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.TU, _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.WE, _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.TH, _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.FR];
                }
            }
            else if (ttr.symbol === 'week(s)') {
                ttr.nextSymbol();
                var n = ttr.acceptNumber();
                if (!n) {
                    throw new Error('Unexpected symbol ' + ttr.symbol + ', expected week number');
                }
                options.byweekno = [parseInt(n[0], 10)];
                while (ttr.accept('comma')) {
                    n = ttr.acceptNumber();
                    if (!n) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + '; expected monthday');
                    }
                    options.byweekno.push(parseInt(n[0], 10));
                }
            }
            else if (m) {
                ttr.nextSymbol();
                if (!options.bymonth)
                    options.bymonth = [];
                options.bymonth.push(m);
            }
            else {
                return;
            }
        } while (ttr.accept('comma') || ttr.accept('the') || ttr.accept('on'));
    }
    function AT() {
        var at = ttr.accept('at');
        if (!at)
            return;
        do {
            var n = ttr.acceptNumber();
            if (!n) {
                throw new Error('Unexpected symbol ' + ttr.symbol + ', expected hour');
            }
            options.byhour = [parseInt(n[0], 10)];
            while (ttr.accept('comma')) {
                n = ttr.acceptNumber();
                if (!n) {
                    throw new Error('Unexpected symbol ' + ttr.symbol + '; expected hour');
                }
                options.byhour.push(parseInt(n[0], 10));
            }
        } while (ttr.accept('comma') || ttr.accept('at'));
    }
    function decodeM() {
        switch (ttr.symbol) {
            case 'january':
                return 1;
            case 'february':
                return 2;
            case 'march':
                return 3;
            case 'april':
                return 4;
            case 'may':
                return 5;
            case 'june':
                return 6;
            case 'july':
                return 7;
            case 'august':
                return 8;
            case 'september':
                return 9;
            case 'october':
                return 10;
            case 'november':
                return 11;
            case 'december':
                return 12;
            default:
                return false;
        }
    }
    function decodeWKD() {
        switch (ttr.symbol) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                return ttr.symbol.substr(0, 2).toUpperCase();
            default:
                return false;
        }
    }
    function decodeNTH() {
        switch (ttr.symbol) {
            case 'last':
                ttr.nextSymbol();
                return -1;
            case 'first':
                ttr.nextSymbol();
                return 1;
            case 'second':
                ttr.nextSymbol();
                return ttr.accept('last') ? -2 : 2;
            case 'third':
                ttr.nextSymbol();
                return ttr.accept('last') ? -3 : 3;
            case 'nth':
                var v = parseInt(ttr.value[1], 10);
                if (v < -366 || v > 366)
                    throw new Error('Nth out of range: ' + v);
                ttr.nextSymbol();
                return ttr.accept('last') ? -v : v;
            default:
                return false;
        }
    }
    function MDAYs() {
        ttr.accept('on');
        ttr.accept('the');
        var nth = decodeNTH();
        if (!nth)
            return;
        options.bymonthday = [nth];
        ttr.nextSymbol();
        while (ttr.accept('comma')) {
            nth = decodeNTH();
            if (!nth) {
                throw new Error('Unexpected symbol ' + ttr.symbol + '; expected monthday');
            }
            options.bymonthday.push(nth);
            ttr.nextSymbol();
        }
    }
    function F() {
        if (ttr.symbol === 'until') {
            var date = Date.parse(ttr.text);
            if (!date)
                throw new Error('Cannot parse until date:' + ttr.text);
            options.until = new Date(date);
        }
        else if (ttr.accept('for')) {
            options.count = parseInt(ttr.value[0], 10);
            ttr.expect('number');
            // ttr.expect('times')
        }
    }
}
//# sourceMappingURL=parsetext.js.map

/***/ },

/***/ 338
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(330);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);



// =============================================================================
// Helper functions
// =============================================================================
/**
 * Return true if a value is in an array
 */
var contains = function (arr, val) {
    return arr.indexOf(val) !== -1;
};
var defaultGetText = function (id) { return id.toString(); };
var defaultDateFormatter = function (year, month, day) { return "".concat(month, " ").concat(day, ", ").concat(year); };
/**
 *
 * @param {RRule} rrule
 * Optional:
 * @param {Function} gettext function
 * @param {Object} language definition
 * @constructor
 */
var ToText = /** @class */ (function () {
    function ToText(rrule, gettext, language, dateFormatter) {
        if (gettext === void 0) { gettext = defaultGetText; }
        if (language === void 0) { language = _i18n__WEBPACK_IMPORTED_MODULE_0__["default"]; }
        if (dateFormatter === void 0) { dateFormatter = defaultDateFormatter; }
        this.text = [];
        this.language = language || _i18n__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.gettext = gettext;
        this.dateFormatter = dateFormatter;
        this.rrule = rrule;
        this.options = rrule.options;
        this.origOptions = rrule.origOptions;
        if (this.origOptions.bymonthday) {
            var bymonthday = [].concat(this.options.bymonthday);
            var bynmonthday = [].concat(this.options.bynmonthday);
            bymonthday.sort(function (a, b) { return a - b; });
            bynmonthday.sort(function (a, b) { return b - a; });
            // 1, 2, 3, .., -5, -4, -3, ..
            this.bymonthday = bymonthday.concat(bynmonthday);
            if (!this.bymonthday.length)
                this.bymonthday = null;
        }
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(this.origOptions.byweekday)) {
            var byweekday = !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(this.origOptions.byweekday)
                ? [this.origOptions.byweekday]
                : this.origOptions.byweekday;
            var days = String(byweekday);
            this.byweekday = {
                allWeeks: byweekday.filter(function (weekday) {
                    return !weekday.n;
                }),
                someWeeks: byweekday.filter(function (weekday) {
                    return Boolean(weekday.n);
                }),
                isWeekdays: days.indexOf('MO') !== -1 &&
                    days.indexOf('TU') !== -1 &&
                    days.indexOf('WE') !== -1 &&
                    days.indexOf('TH') !== -1 &&
                    days.indexOf('FR') !== -1 &&
                    days.indexOf('SA') === -1 &&
                    days.indexOf('SU') === -1,
                isEveryDay: days.indexOf('MO') !== -1 &&
                    days.indexOf('TU') !== -1 &&
                    days.indexOf('WE') !== -1 &&
                    days.indexOf('TH') !== -1 &&
                    days.indexOf('FR') !== -1 &&
                    days.indexOf('SA') !== -1 &&
                    days.indexOf('SU') !== -1,
            };
            var sortWeekDays = function (a, b) {
                return a.weekday - b.weekday;
            };
            this.byweekday.allWeeks.sort(sortWeekDays);
            this.byweekday.someWeeks.sort(sortWeekDays);
            if (!this.byweekday.allWeeks.length)
                this.byweekday.allWeeks = null;
            if (!this.byweekday.someWeeks.length)
                this.byweekday.someWeeks = null;
        }
        else {
            this.byweekday = null;
        }
    }
    /**
     * Test whether the rrule can be fully converted to text.
     *
     * @param {RRule} rrule
     * @return {Boolean}
     */
    ToText.isFullyConvertible = function (rrule) {
        var canConvert = true;
        if (!(rrule.options.freq in ToText.IMPLEMENTED))
            return false;
        if (rrule.origOptions.until && rrule.origOptions.count)
            return false;
        for (var key in rrule.origOptions) {
            if (contains(['dtstart', 'tzid', 'wkst', 'freq'], key))
                return true;
            if (!contains(ToText.IMPLEMENTED[rrule.options.freq], key))
                return false;
        }
        return canConvert;
    };
    ToText.prototype.isFullyConvertible = function () {
        return ToText.isFullyConvertible(this.rrule);
    };
    /**
     * Perform the conversion. Only some of the frequencies are supported.
     * If some of the rrule's options aren't supported, they'll
     * be omitted from the output an "(~ approximate)" will be appended.
     *
     * @return {*}
     */
    ToText.prototype.toString = function () {
        var gettext = this.gettext;
        if (!(this.options.freq in ToText.IMPLEMENTED)) {
            return gettext('RRule error: Unable to fully convert this rrule to text');
        }
        this.text = [gettext('every')];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this[_rrule__WEBPACK_IMPORTED_MODULE_1__.RRule.FREQUENCIES[this.options.freq]]();
        if (this.options.until) {
            this.add(gettext('until'));
            var until = this.options.until;
            this.add(this.dateFormatter(until.getUTCFullYear(), this.language.monthNames[until.getUTCMonth()], until.getUTCDate()));
        }
        else if (this.options.count) {
            this.add(gettext('for'))
                .add(this.options.count.toString())
                .add(this.plural(this.options.count) ? gettext('times') : gettext('time'));
        }
        if (!this.isFullyConvertible())
            this.add(gettext('(~ approximate)'));
        return this.text.join('');
    };
    ToText.prototype.HOURLY = function () {
        var gettext = this.gettext;
        if (this.options.interval !== 1)
            this.add(this.options.interval.toString());
        this.add(this.plural(this.options.interval) ? gettext('hours') : gettext('hour'));
    };
    ToText.prototype.MINUTELY = function () {
        var gettext = this.gettext;
        if (this.options.interval !== 1)
            this.add(this.options.interval.toString());
        this.add(this.plural(this.options.interval)
            ? gettext('minutes')
            : gettext('minute'));
    };
    ToText.prototype.DAILY = function () {
        var gettext = this.gettext;
        if (this.options.interval !== 1)
            this.add(this.options.interval.toString());
        if (this.byweekday && this.byweekday.isWeekdays) {
            this.add(this.plural(this.options.interval)
                ? gettext('weekdays')
                : gettext('weekday'));
        }
        else {
            this.add(this.plural(this.options.interval) ? gettext('days') : gettext('day'));
        }
        if (this.origOptions.bymonth) {
            this.add(gettext('in'));
            this._bymonth();
        }
        if (this.bymonthday) {
            this._bymonthday();
        }
        else if (this.byweekday) {
            this._byweekday();
        }
        else if (this.origOptions.byhour) {
            this._byhour();
        }
    };
    ToText.prototype.WEEKLY = function () {
        var gettext = this.gettext;
        if (this.options.interval !== 1) {
            this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? gettext('weeks') : gettext('week'));
        }
        if (this.byweekday && this.byweekday.isWeekdays) {
            if (this.options.interval === 1) {
                this.add(this.plural(this.options.interval)
                    ? gettext('weekdays')
                    : gettext('weekday'));
            }
            else {
                this.add(gettext('on')).add(gettext('weekdays'));
            }
        }
        else if (this.byweekday && this.byweekday.isEveryDay) {
            this.add(this.plural(this.options.interval) ? gettext('days') : gettext('day'));
        }
        else {
            if (this.options.interval === 1)
                this.add(gettext('week'));
            if (this.origOptions.bymonth) {
                this.add(gettext('in'));
                this._bymonth();
            }
            if (this.bymonthday) {
                this._bymonthday();
            }
            else if (this.byweekday) {
                this._byweekday();
            }
            if (this.origOptions.byhour) {
                this._byhour();
            }
        }
    };
    ToText.prototype.MONTHLY = function () {
        var gettext = this.gettext;
        if (this.origOptions.bymonth) {
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString()).add(gettext('months'));
                if (this.plural(this.options.interval))
                    this.add(gettext('in'));
            }
            else {
                // this.add(gettext('MONTH'))
            }
            this._bymonth();
        }
        else {
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString());
            }
            this.add(this.plural(this.options.interval)
                ? gettext('months')
                : gettext('month'));
        }
        if (this.bymonthday) {
            this._bymonthday();
        }
        else if (this.byweekday && this.byweekday.isWeekdays) {
            this.add(gettext('on')).add(gettext('weekdays'));
        }
        else if (this.byweekday) {
            this._byweekday();
        }
    };
    ToText.prototype.YEARLY = function () {
        var gettext = this.gettext;
        if (this.origOptions.bymonth) {
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString());
                this.add(gettext('years'));
            }
            else {
                // this.add(gettext('YEAR'))
            }
            this._bymonth();
        }
        else {
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString());
            }
            this.add(this.plural(this.options.interval) ? gettext('years') : gettext('year'));
        }
        if (this.bymonthday) {
            this._bymonthday();
        }
        else if (this.byweekday) {
            this._byweekday();
        }
        if (this.options.byyearday) {
            this.add(gettext('on the'))
                .add(this.list(this.options.byyearday, this.nth, gettext('and')))
                .add(gettext('day'));
        }
        if (this.options.byweekno) {
            this.add(gettext('in'))
                .add(this.plural(this.options.byweekno.length)
                ? gettext('weeks')
                : gettext('week'))
                .add(this.list(this.options.byweekno, undefined, gettext('and')));
        }
    };
    ToText.prototype._bymonthday = function () {
        var gettext = this.gettext;
        if (this.byweekday && this.byweekday.allWeeks) {
            this.add(gettext('on'))
                .add(this.list(this.byweekday.allWeeks, this.weekdaytext, gettext('or')))
                .add(gettext('the'))
                .add(this.list(this.bymonthday, this.nth, gettext('or')));
        }
        else {
            this.add(gettext('on the')).add(this.list(this.bymonthday, this.nth, gettext('and')));
        }
        // this.add(gettext('DAY'))
    };
    ToText.prototype._byweekday = function () {
        var gettext = this.gettext;
        if (this.byweekday.allWeeks && !this.byweekday.isWeekdays) {
            this.add(gettext('on')).add(this.list(this.byweekday.allWeeks, this.weekdaytext));
        }
        if (this.byweekday.someWeeks) {
            if (this.byweekday.allWeeks)
                this.add(gettext('and'));
            this.add(gettext('on the')).add(this.list(this.byweekday.someWeeks, this.weekdaytext, gettext('and')));
        }
    };
    ToText.prototype._byhour = function () {
        var gettext = this.gettext;
        this.add(gettext('at')).add(this.list(this.origOptions.byhour, undefined, gettext('and')));
    };
    ToText.prototype._bymonth = function () {
        this.add(this.list(this.options.bymonth, this.monthtext, this.gettext('and')));
    };
    ToText.prototype.nth = function (n) {
        n = parseInt(n.toString(), 10);
        var nth;
        var gettext = this.gettext;
        if (n === -1)
            return gettext('last');
        var npos = Math.abs(n);
        switch (npos) {
            case 1:
            case 21:
            case 31:
                nth = npos + gettext('st');
                break;
            case 2:
            case 22:
                nth = npos + gettext('nd');
                break;
            case 3:
            case 23:
                nth = npos + gettext('rd');
                break;
            default:
                nth = npos + gettext('th');
        }
        return n < 0 ? nth + ' ' + gettext('last') : nth;
    };
    ToText.prototype.monthtext = function (m) {
        return this.language.monthNames[m - 1];
    };
    ToText.prototype.weekdaytext = function (wday) {
        var weekday = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(wday) ? (wday + 1) % 7 : wday.getJsWeekday();
        return ((wday.n ? this.nth(wday.n) + ' ' : '') +
            this.language.dayNames[weekday]);
    };
    ToText.prototype.plural = function (n) {
        return n % 100 !== 1;
    };
    ToText.prototype.add = function (s) {
        this.text.push(' ');
        this.text.push(s);
        return this;
    };
    ToText.prototype.list = function (arr, callback, finalDelim, delim) {
        var _this = this;
        if (delim === void 0) { delim = ','; }
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(arr)) {
            arr = [arr];
        }
        var delimJoin = function (array, delimiter, finalDelimiter) {
            var list = '';
            for (var i = 0; i < array.length; i++) {
                if (i !== 0) {
                    if (i === array.length - 1) {
                        list += ' ' + finalDelimiter + ' ';
                    }
                    else {
                        list += delimiter + ' ';
                    }
                }
                list += array[i];
            }
            return list;
        };
        callback =
            callback ||
                function (o) {
                    return o.toString();
                };
        var realCallback = function (arg) {
            return callback && callback.call(_this, arg);
        };
        if (finalDelim) {
            return delimJoin(arr.map(realCallback), delim, finalDelim);
        }
        else {
            return arr.map(realCallback).join(delim + ' ');
        }
    };
    return ToText;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToText);
//# sourceMappingURL=totext.js.map

/***/ },

/***/ 345
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionsToString: () => (/* binding */ optionsToString)
/* harmony export */ });
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(330);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);
/* harmony import */ var _weekday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _datewithzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(346);





function optionsToString(options) {
    var rrule = [];
    var dtstart = '';
    var keys = Object.keys(options);
    var defaultKeys = Object.keys(_rrule__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_OPTIONS);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] === 'tzid')
            continue;
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.includes)(defaultKeys, keys[i]))
            continue;
        var key = keys[i].toUpperCase();
        var value = options[keys[i]];
        var outValue = '';
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isPresent)(value) || ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !value.length))
            continue;
        switch (key) {
            case 'FREQ':
                outValue = _rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.FREQUENCIES[options.freq];
                break;
            case 'WKST':
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value)) {
                    outValue = new _weekday__WEBPACK_IMPORTED_MODULE_2__.Weekday(value).toString();
                }
                else {
                    outValue = value.toString();
                }
                break;
            case 'BYWEEKDAY':
                /*
                  NOTE: BYWEEKDAY is a special case.
                  RRule() deconstructs the rule.options.byweekday array
                  into an array of Weekday arguments.
                  On the other hand, rule.origOptions is an array of Weekdays.
                  We need to handle both cases here.
                  It might be worth change RRule to keep the Weekdays.
        
                  Also, BYWEEKDAY (used by RRule) vs. BYDAY (RFC)
        
                  */
                key = 'BYDAY';
                outValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toArray)(value)
                    .map(function (wday) {
                    if (wday instanceof _weekday__WEBPACK_IMPORTED_MODULE_2__.Weekday) {
                        return wday;
                    }
                    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(wday)) {
                        return new _weekday__WEBPACK_IMPORTED_MODULE_2__.Weekday(wday[0], wday[1]);
                    }
                    return new _weekday__WEBPACK_IMPORTED_MODULE_2__.Weekday(wday);
                })
                    .toString();
                break;
            case 'DTSTART':
                dtstart = buildDtstart(value, options.tzid);
                break;
            case 'UNTIL':
                outValue = (0,_dateutil__WEBPACK_IMPORTED_MODULE_3__.timeToUntilString)(value, !options.tzid);
                break;
            default:
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
                    var strValues = [];
                    for (var j = 0; j < value.length; j++) {
                        strValues[j] = String(value[j]);
                    }
                    outValue = strValues.toString();
                }
                else {
                    outValue = String(value);
                }
        }
        if (outValue) {
            rrule.push([key, outValue]);
        }
    }
    var rules = rrule
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, "=").concat(value.toString());
    })
        .join(';');
    var ruleString = '';
    if (rules !== '') {
        ruleString = "RRULE:".concat(rules);
    }
    return [dtstart, ruleString].filter(function (x) { return !!x; }).join('\n');
}
function buildDtstart(dtstart, tzid) {
    if (!dtstart) {
        return '';
    }
    return 'DTSTART' + new _datewithzone__WEBPACK_IMPORTED_MODULE_4__.DateWithZone(new Date(dtstart), tzid).toString();
}
//# sourceMappingURL=optionstostring.js.map

/***/ },

/***/ 342
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTimeset: () => (/* binding */ buildTimeset),
/* harmony export */   initializeOptions: () => (/* binding */ initializeOptions),
/* harmony export */   parseOptions: () => (/* binding */ parseOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(341);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(330);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(331);
/* harmony import */ var _weekday__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(333);
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(343);







function initializeOptions(options) {
    var invalid = [];
    var keys = Object.keys(options);
    // Shallow copy for options and origOptions and check for invalid
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.includes)(_rrule__WEBPACK_IMPORTED_MODULE_3__.defaultKeys, key))
            invalid.push(key);
        if ((0,_dateutil__WEBPACK_IMPORTED_MODULE_4__.isDate)(options[key]) && !(0,_dateutil__WEBPACK_IMPORTED_MODULE_4__.isValidDate)(options[key])) {
            invalid.push(key);
        }
    }
    if (invalid.length) {
        throw new Error('Invalid options: ' + invalid.join(', '));
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options);
}
function parseOptions(options) {
    var opts = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _rrule__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_OPTIONS), initializeOptions(options));
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.byeaster))
        opts.freq = _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.YEARLY;
    if (!((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.freq) && _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.FREQUENCIES[opts.freq])) {
        throw new Error("Invalid frequency: ".concat(opts.freq, " ").concat(options.freq));
    }
    if (!opts.dtstart)
        opts.dtstart = new Date(new Date().setMilliseconds(0));
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.wkst)) {
        opts.wkst = _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.MO.weekday;
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(opts.wkst)) {
        // cool, just keep it like that
    }
    else {
        opts.wkst = opts.wkst.weekday;
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.bysetpos)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(opts.bysetpos))
            opts.bysetpos = [opts.bysetpos];
        for (var i = 0; i < opts.bysetpos.length; i++) {
            var v = opts.bysetpos[i];
            if (v === 0 || !(v >= -366 && v <= 366)) {
                throw new Error('bysetpos must be between 1 and 366,' + ' or between -366 and -1');
            }
        }
    }
    if (!(Boolean(opts.byweekno) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.notEmpty)(opts.byweekno) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.notEmpty)(opts.byyearday) ||
        Boolean(opts.bymonthday) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.notEmpty)(opts.bymonthday) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.byweekday) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.byeaster))) {
        switch (opts.freq) {
            case _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.YEARLY:
                if (!opts.bymonth)
                    opts.bymonth = opts.dtstart.getUTCMonth() + 1;
                opts.bymonthday = opts.dtstart.getUTCDate();
                break;
            case _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.MONTHLY:
                opts.bymonthday = opts.dtstart.getUTCDate();
                break;
            case _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.WEEKLY:
                opts.byweekday = [(0,_dateutil__WEBPACK_IMPORTED_MODULE_4__.getWeekday)(opts.dtstart)];
                break;
        }
    }
    // bymonth
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.bymonth) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(opts.bymonth)) {
        opts.bymonth = [opts.bymonth];
    }
    // byyearday
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.byyearday) &&
        !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(opts.byyearday) &&
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(opts.byyearday)) {
        opts.byyearday = [opts.byyearday];
    }
    // bymonthday
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.bymonthday)) {
        opts.bymonthday = [];
        opts.bynmonthday = [];
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(opts.bymonthday)) {
        var bymonthday = [];
        var bynmonthday = [];
        for (var i = 0; i < opts.bymonthday.length; i++) {
            var v = opts.bymonthday[i];
            if (v > 0) {
                bymonthday.push(v);
            }
            else if (v < 0) {
                bynmonthday.push(v);
            }
        }
        opts.bymonthday = bymonthday;
        opts.bynmonthday = bynmonthday;
    }
    else if (opts.bymonthday < 0) {
        opts.bynmonthday = [opts.bymonthday];
        opts.bymonthday = [];
    }
    else {
        opts.bynmonthday = [];
        opts.bymonthday = [opts.bymonthday];
    }
    // byweekno
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.byweekno) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(opts.byweekno)) {
        opts.byweekno = [opts.byweekno];
    }
    // byweekday / bynweekday
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.byweekday)) {
        opts.bynweekday = null;
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(opts.byweekday)) {
        opts.byweekday = [opts.byweekday];
        opts.bynweekday = null;
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isWeekdayStr)(opts.byweekday)) {
        opts.byweekday = [_weekday__WEBPACK_IMPORTED_MODULE_5__.Weekday.fromStr(opts.byweekday).weekday];
        opts.bynweekday = null;
    }
    else if (opts.byweekday instanceof _weekday__WEBPACK_IMPORTED_MODULE_5__.Weekday) {
        if (!opts.byweekday.n || opts.freq > _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.MONTHLY) {
            opts.byweekday = [opts.byweekday.weekday];
            opts.bynweekday = null;
        }
        else {
            opts.bynweekday = [[opts.byweekday.weekday, opts.byweekday.n]];
            opts.byweekday = null;
        }
    }
    else {
        var byweekday = [];
        var bynweekday = [];
        for (var i = 0; i < opts.byweekday.length; i++) {
            var wday = opts.byweekday[i];
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(wday)) {
                byweekday.push(wday);
                continue;
            }
            else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isWeekdayStr)(wday)) {
                byweekday.push(_weekday__WEBPACK_IMPORTED_MODULE_5__.Weekday.fromStr(wday).weekday);
                continue;
            }
            if (!wday.n || opts.freq > _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.MONTHLY) {
                byweekday.push(wday.weekday);
            }
            else {
                bynweekday.push([wday.weekday, wday.n]);
            }
        }
        opts.byweekday = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.notEmpty)(byweekday) ? byweekday : null;
        opts.bynweekday = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.notEmpty)(bynweekday) ? bynweekday : null;
    }
    // byhour
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.byhour)) {
        opts.byhour = opts.freq < _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.HOURLY ? [opts.dtstart.getUTCHours()] : null;
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(opts.byhour)) {
        opts.byhour = [opts.byhour];
    }
    // byminute
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.byminute)) {
        opts.byminute =
            opts.freq < _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.MINUTELY ? [opts.dtstart.getUTCMinutes()] : null;
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(opts.byminute)) {
        opts.byminute = [opts.byminute];
    }
    // bysecond
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isPresent)(opts.bysecond)) {
        opts.bysecond =
            opts.freq < _rrule__WEBPACK_IMPORTED_MODULE_3__.RRule.SECONDLY ? [opts.dtstart.getUTCSeconds()] : null;
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isNumber)(opts.bysecond)) {
        opts.bysecond = [opts.bysecond];
    }
    return { parsedOptions: opts };
}
function buildTimeset(opts) {
    var millisecondModulo = opts.dtstart.getTime() % 1000;
    if (!(0,_types__WEBPACK_IMPORTED_MODULE_1__.freqIsDailyOrGreater)(opts.freq)) {
        return [];
    }
    var timeset = [];
    opts.byhour.forEach(function (hour) {
        opts.byminute.forEach(function (minute) {
            opts.bysecond.forEach(function (second) {
                timeset.push(new _datetime__WEBPACK_IMPORTED_MODULE_6__.Time(hour, minute, second, millisecondModulo));
            });
        });
    });
    return timeset;
}
//# sourceMappingURL=parseoptions.js.map

/***/ },

/***/ 344
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseDtstart: () => (/* binding */ parseDtstart),
/* harmony export */   parseString: () => (/* binding */ parseString)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(341);
/* harmony import */ var _weekday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(330);





function parseString(rfcString) {
    var options = rfcString
        .split('\n')
        .map(parseLine)
        .filter(function (x) { return x !== null; });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options[0]), options[1]);
}
function parseDtstart(line) {
    var options = {};
    var dtstartWithZone = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(line);
    if (!dtstartWithZone) {
        return options;
    }
    var tzid = dtstartWithZone[1], dtstart = dtstartWithZone[2];
    if (tzid) {
        options.tzid = tzid;
    }
    options.dtstart = (0,_dateutil__WEBPACK_IMPORTED_MODULE_3__.untilStringToDate)(dtstart);
    return options;
}
function parseLine(rfcString) {
    rfcString = rfcString.replace(/^\s+|\s+$/, '');
    if (!rfcString.length)
        return null;
    var header = /^([A-Z]+?)[:;]/.exec(rfcString.toUpperCase());
    if (!header) {
        return parseRrule(rfcString);
    }
    var key = header[1];
    switch (key.toUpperCase()) {
        case 'RRULE':
        case 'EXRULE':
            return parseRrule(rfcString);
        case 'DTSTART':
            return parseDtstart(rfcString);
        default:
            throw new Error("Unsupported RFC prop ".concat(key, " in ").concat(rfcString));
    }
}
function parseRrule(line) {
    var strippedLine = line.replace(/^RRULE:/i, '');
    var options = parseDtstart(strippedLine);
    var attrs = line.replace(/^(?:RRULE|EXRULE):/i, '').split(';');
    attrs.forEach(function (attr) {
        var _a = attr.split('='), key = _a[0], value = _a[1];
        switch (key.toUpperCase()) {
            case 'FREQ':
                options.freq = _types__WEBPACK_IMPORTED_MODULE_1__.Frequency[value.toUpperCase()];
                break;
            case 'WKST':
                options.wkst = _rrule__WEBPACK_IMPORTED_MODULE_4__.Days[value.toUpperCase()];
                break;
            case 'COUNT':
            case 'INTERVAL':
            case 'BYSETPOS':
            case 'BYMONTH':
            case 'BYMONTHDAY':
            case 'BYYEARDAY':
            case 'BYWEEKNO':
            case 'BYHOUR':
            case 'BYMINUTE':
            case 'BYSECOND':
                var num = parseNumber(value);
                var optionKey = key.toLowerCase();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                options[optionKey] = num;
                break;
            case 'BYWEEKDAY':
            case 'BYDAY':
                options.byweekday = parseWeekday(value);
                break;
            case 'DTSTART':
            case 'TZID':
                // for backwards compatibility
                var dtstart = parseDtstart(line);
                options.tzid = dtstart.tzid;
                options.dtstart = dtstart.dtstart;
                break;
            case 'UNTIL':
                options.until = (0,_dateutil__WEBPACK_IMPORTED_MODULE_3__.untilStringToDate)(value);
                break;
            case 'BYEASTER':
                options.byeaster = Number(value);
                break;
            default:
                throw new Error("Unknown RRULE property '" + key + "'");
        }
    });
    return options;
}
function parseNumber(value) {
    if (value.indexOf(',') !== -1) {
        var values = value.split(',');
        return values.map(parseIndividualNumber);
    }
    return parseIndividualNumber(value);
}
function parseIndividualNumber(value) {
    if (/^[+-]?\d+$/.test(value)) {
        return Number(value);
    }
    return value;
}
function parseWeekday(value) {
    var days = value.split(',');
    return days.map(function (day) {
        if (day.length === 2) {
            // MO, TU, ...
            return _rrule__WEBPACK_IMPORTED_MODULE_4__.Days[day]; // wday instanceof Weekday
        }
        // -1MO, +3FR, 1SO, 13TU ...
        var parts = day.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
        if (!parts || parts.length < 3) {
            throw new SyntaxError("Invalid weekday string: ".concat(day));
        }
        var n = Number(parts[1]);
        var wdaypart = parts[2];
        var wday = _rrule__WEBPACK_IMPORTED_MODULE_4__.Days[wdaypart].weekday;
        return new _weekday__WEBPACK_IMPORTED_MODULE_2__.Weekday(wday, n);
    });
}
//# sourceMappingURL=parsestring.js.map

/***/ },

/***/ 330
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_OPTIONS: () => (/* binding */ DEFAULT_OPTIONS),
/* harmony export */   Days: () => (/* binding */ Days),
/* harmony export */   RRule: () => (/* binding */ RRule),
/* harmony export */   defaultKeys: () => (/* binding */ defaultKeys)
/* harmony export */ });
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
/* harmony import */ var _iterresult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(334);
/* harmony import */ var _callbackiterresult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(335);
/* harmony import */ var _nlp_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(337);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(341);
/* harmony import */ var _parseoptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(342);
/* harmony import */ var _parsestring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(344);
/* harmony import */ var _optionstostring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(345);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(347);
/* harmony import */ var _weekday__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(333);
/* harmony import */ var _iter_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(348);











// =============================================================================
// RRule
// =============================================================================
var Days = {
    MO: new _weekday__WEBPACK_IMPORTED_MODULE_9__.Weekday(0),
    TU: new _weekday__WEBPACK_IMPORTED_MODULE_9__.Weekday(1),
    WE: new _weekday__WEBPACK_IMPORTED_MODULE_9__.Weekday(2),
    TH: new _weekday__WEBPACK_IMPORTED_MODULE_9__.Weekday(3),
    FR: new _weekday__WEBPACK_IMPORTED_MODULE_9__.Weekday(4),
    SA: new _weekday__WEBPACK_IMPORTED_MODULE_9__.Weekday(5),
    SU: new _weekday__WEBPACK_IMPORTED_MODULE_9__.Weekday(6),
};
var DEFAULT_OPTIONS = {
    freq: _types__WEBPACK_IMPORTED_MODULE_4__.Frequency.YEARLY,
    dtstart: null,
    interval: 1,
    wkst: Days.MO,
    count: null,
    until: null,
    tzid: null,
    bysetpos: null,
    bymonth: null,
    bymonthday: null,
    bynmonthday: null,
    byyearday: null,
    byweekno: null,
    byweekday: null,
    bynweekday: null,
    byhour: null,
    byminute: null,
    bysecond: null,
    byeaster: null,
};
var defaultKeys = Object.keys(DEFAULT_OPTIONS);
/**
 *
 * @param {Options?} options - see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
 * - The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
 * @constructor
 */
var RRule = /** @class */ (function () {
    function RRule(options, noCache) {
        if (options === void 0) { options = {}; }
        if (noCache === void 0) { noCache = false; }
        // RFC string
        this._cache = noCache ? null : new _cache__WEBPACK_IMPORTED_MODULE_8__.Cache();
        // used by toString()
        this.origOptions = (0,_parseoptions__WEBPACK_IMPORTED_MODULE_5__.initializeOptions)(options);
        var parsedOptions = (0,_parseoptions__WEBPACK_IMPORTED_MODULE_5__.parseOptions)(options).parsedOptions;
        this.options = parsedOptions;
    }
    RRule.parseText = function (text, language) {
        return (0,_nlp_index__WEBPACK_IMPORTED_MODULE_3__.parseText)(text, language);
    };
    RRule.fromText = function (text, language) {
        return (0,_nlp_index__WEBPACK_IMPORTED_MODULE_3__.fromText)(text, language);
    };
    RRule.fromString = function (str) {
        return new RRule(RRule.parseString(str) || undefined);
    };
    RRule.prototype._iter = function (iterResult) {
        return (0,_iter_index__WEBPACK_IMPORTED_MODULE_10__.iter)(iterResult, this.options);
    };
    RRule.prototype._cacheGet = function (what, args) {
        if (!this._cache)
            return false;
        return this._cache._cacheGet(what, args);
    };
    RRule.prototype._cacheAdd = function (what, value, args) {
        if (!this._cache)
            return;
        return this._cache._cacheAdd(what, value, args);
    };
    /**
     * @param {Function} iterator - optional function that will be called
     * on each date that is added. It can return false
     * to stop the iteration.
     * @return Array containing all recurrences.
     */
    RRule.prototype.all = function (iterator) {
        if (iterator) {
            return this._iter(new _callbackiterresult__WEBPACK_IMPORTED_MODULE_2__["default"]('all', {}, iterator));
        }
        var result = this._cacheGet('all');
        if (result === false) {
            result = this._iter(new _iterresult__WEBPACK_IMPORTED_MODULE_1__["default"]('all', {}));
            this._cacheAdd('all', result);
        }
        return result;
    };
    /**
     * Returns all the occurrences of the rrule between after and before.
     * The inc keyword defines what happens if after and/or before are
     * themselves occurrences. With inc == True, they will be included in the
     * list, if they are found in the recurrence set.
     *
     * @return Array
     */
    RRule.prototype.between = function (after, before, inc, iterator) {
        if (inc === void 0) { inc = false; }
        if (!(0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.isValidDate)(after) || !(0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.isValidDate)(before)) {
            throw new Error('Invalid date passed in to RRule.between');
        }
        var args = {
            before: before,
            after: after,
            inc: inc,
        };
        if (iterator) {
            return this._iter(new _callbackiterresult__WEBPACK_IMPORTED_MODULE_2__["default"]('between', args, iterator));
        }
        var result = this._cacheGet('between', args);
        if (result === false) {
            result = this._iter(new _iterresult__WEBPACK_IMPORTED_MODULE_1__["default"]('between', args));
            this._cacheAdd('between', result, args);
        }
        return result;
    };
    /**
     * Returns the last recurrence before the given datetime instance.
     * The inc keyword defines what happens if dt is an occurrence.
     * With inc == True, if dt itself is an occurrence, it will be returned.
     *
     * @return Date or null
     */
    RRule.prototype.before = function (dt, inc) {
        if (inc === void 0) { inc = false; }
        if (!(0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.isValidDate)(dt)) {
            throw new Error('Invalid date passed in to RRule.before');
        }
        var args = { dt: dt, inc: inc };
        var result = this._cacheGet('before', args);
        if (result === false) {
            result = this._iter(new _iterresult__WEBPACK_IMPORTED_MODULE_1__["default"]('before', args));
            this._cacheAdd('before', result, args);
        }
        return result;
    };
    /**
     * Returns the first recurrence after the given datetime instance.
     * The inc keyword defines what happens if dt is an occurrence.
     * With inc == True, if dt itself is an occurrence, it will be returned.
     *
     * @return Date or null
     */
    RRule.prototype.after = function (dt, inc) {
        if (inc === void 0) { inc = false; }
        if (!(0,_dateutil__WEBPACK_IMPORTED_MODULE_0__.isValidDate)(dt)) {
            throw new Error('Invalid date passed in to RRule.after');
        }
        var args = { dt: dt, inc: inc };
        var result = this._cacheGet('after', args);
        if (result === false) {
            result = this._iter(new _iterresult__WEBPACK_IMPORTED_MODULE_1__["default"]('after', args));
            this._cacheAdd('after', result, args);
        }
        return result;
    };
    /**
     * Returns the number of recurrences in this set. It will have go trough
     * the whole recurrence, if this hasn't been done before.
     */
    RRule.prototype.count = function () {
        return this.all().length;
    };
    /**
     * Converts the rrule into its string representation
     *
     * @see <http://www.ietf.org/rfc/rfc2445.txt>
     * @return String
     */
    RRule.prototype.toString = function () {
        return (0,_optionstostring__WEBPACK_IMPORTED_MODULE_7__.optionsToString)(this.origOptions);
    };
    /**
     * Will convert all rules described in nlp:ToText
     * to text.
     */
    RRule.prototype.toText = function (gettext, language, dateFormatter) {
        return (0,_nlp_index__WEBPACK_IMPORTED_MODULE_3__.toText)(this, gettext, language, dateFormatter);
    };
    RRule.prototype.isFullyConvertibleToText = function () {
        return (0,_nlp_index__WEBPACK_IMPORTED_MODULE_3__.isFullyConvertible)(this);
    };
    /**
     * @return a RRule instance with the same freq and options
     * as this one (cache is not cloned)
     */
    RRule.prototype.clone = function () {
        return new RRule(this.origOptions);
    };
    // RRule class 'constants'
    RRule.FREQUENCIES = [
        'YEARLY',
        'MONTHLY',
        'WEEKLY',
        'DAILY',
        'HOURLY',
        'MINUTELY',
        'SECONDLY',
    ];
    RRule.YEARLY = _types__WEBPACK_IMPORTED_MODULE_4__.Frequency.YEARLY;
    RRule.MONTHLY = _types__WEBPACK_IMPORTED_MODULE_4__.Frequency.MONTHLY;
    RRule.WEEKLY = _types__WEBPACK_IMPORTED_MODULE_4__.Frequency.WEEKLY;
    RRule.DAILY = _types__WEBPACK_IMPORTED_MODULE_4__.Frequency.DAILY;
    RRule.HOURLY = _types__WEBPACK_IMPORTED_MODULE_4__.Frequency.HOURLY;
    RRule.MINUTELY = _types__WEBPACK_IMPORTED_MODULE_4__.Frequency.MINUTELY;
    RRule.SECONDLY = _types__WEBPACK_IMPORTED_MODULE_4__.Frequency.SECONDLY;
    RRule.MO = Days.MO;
    RRule.TU = Days.TU;
    RRule.WE = Days.WE;
    RRule.TH = Days.TH;
    RRule.FR = Days.FR;
    RRule.SA = Days.SA;
    RRule.SU = Days.SU;
    RRule.parseString = _parsestring__WEBPACK_IMPORTED_MODULE_6__.parseString;
    RRule.optionsToString = _optionstostring__WEBPACK_IMPORTED_MODULE_7__.optionsToString;
    return RRule;
}());

//# sourceMappingURL=rrule.js.map

/***/ },

/***/ 355
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RRuleSet: () => (/* binding */ RRuleSet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(330);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(331);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(332);
/* harmony import */ var _iterset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(356);
/* harmony import */ var _rrulestr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(357);
/* harmony import */ var _optionstostring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(345);







function createGetterSetter(fieldName) {
    var _this = this;
    return function (field) {
        if (field !== undefined) {
            _this["_".concat(fieldName)] = field;
        }
        if (_this["_".concat(fieldName)] !== undefined) {
            return _this["_".concat(fieldName)];
        }
        for (var i = 0; i < _this._rrule.length; i++) {
            var field_1 = _this._rrule[i].origOptions[fieldName];
            if (field_1) {
                return field_1;
            }
        }
    };
}
var RRuleSet = /** @class */ (function (_super) {
    ;(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(RRuleSet, _super);
    /**
     *
     * @param {Boolean?} noCache
     * The same stratagy as RRule on cache, default to false
     * @constructor
     */
    function RRuleSet(noCache) {
        if (noCache === void 0) { noCache = false; }
        var _this = _super.call(this, {}, noCache) || this;
        _this.dtstart = createGetterSetter.apply(_this, ['dtstart']);
        _this.tzid = createGetterSetter.apply(_this, ['tzid']);
        _this._rrule = [];
        _this._rdate = [];
        _this._exrule = [];
        _this._exdate = [];
        return _this;
    }
    RRuleSet.prototype._iter = function (iterResult) {
        return (0,_iterset__WEBPACK_IMPORTED_MODULE_4__.iterSet)(iterResult, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
    };
    /**
     * Adds an RRule to the set
     *
     * @param {RRule}
     */
    RRuleSet.prototype.rrule = function (rrule) {
        _addRule(rrule, this._rrule);
    };
    /**
     * Adds an EXRULE to the set
     *
     * @param {RRule}
     */
    RRuleSet.prototype.exrule = function (rrule) {
        _addRule(rrule, this._exrule);
    };
    /**
     * Adds an RDate to the set
     *
     * @param {Date}
     */
    RRuleSet.prototype.rdate = function (date) {
        _addDate(date, this._rdate);
    };
    /**
     * Adds an EXDATE to the set
     *
     * @param {Date}
     */
    RRuleSet.prototype.exdate = function (date) {
        _addDate(date, this._exdate);
    };
    /**
     * Get list of included rrules in this recurrence set.
     *
     * @return List of rrules
     */
    RRuleSet.prototype.rrules = function () {
        return this._rrule.map(function (e) { return (0,_rrulestr__WEBPACK_IMPORTED_MODULE_5__.rrulestr)(e.toString()); });
    };
    /**
     * Get list of excluded rrules in this recurrence set.
     *
     * @return List of exrules
     */
    RRuleSet.prototype.exrules = function () {
        return this._exrule.map(function (e) { return (0,_rrulestr__WEBPACK_IMPORTED_MODULE_5__.rrulestr)(e.toString()); });
    };
    /**
     * Get list of included datetimes in this recurrence set.
     *
     * @return List of rdates
     */
    RRuleSet.prototype.rdates = function () {
        return this._rdate.map(function (e) { return new Date(e.getTime()); });
    };
    /**
     * Get list of included datetimes in this recurrence set.
     *
     * @return List of exdates
     */
    RRuleSet.prototype.exdates = function () {
        return this._exdate.map(function (e) { return new Date(e.getTime()); });
    };
    RRuleSet.prototype.valueOf = function () {
        var result = [];
        if (!this._rrule.length && this._dtstart) {
            result = result.concat((0,_optionstostring__WEBPACK_IMPORTED_MODULE_6__.optionsToString)({ dtstart: this._dtstart }));
        }
        this._rrule.forEach(function (rrule) {
            result = result.concat(rrule.toString().split('\n'));
        });
        this._exrule.forEach(function (exrule) {
            result = result.concat(exrule
                .toString()
                .split('\n')
                .map(function (line) { return line.replace(/^RRULE:/, 'EXRULE:'); })
                .filter(function (line) { return !/^DTSTART/.test(line); }));
        });
        if (this._rdate.length) {
            result.push(rdatesToString('RDATE', this._rdate, this.tzid()));
        }
        if (this._exdate.length) {
            result.push(rdatesToString('EXDATE', this._exdate, this.tzid()));
        }
        return result;
    };
    /**
     * to generate recurrence field such as:
     * DTSTART:19970902T010000Z
     * RRULE:FREQ=YEARLY;COUNT=2;BYDAY=TU
     * RRULE:FREQ=YEARLY;COUNT=1;BYDAY=TH
     */
    RRuleSet.prototype.toString = function () {
        return this.valueOf().join('\n');
    };
    /**
     * Create a new RRuleSet Object completely base on current instance
     */
    RRuleSet.prototype.clone = function () {
        var rrs = new RRuleSet(!!this._cache);
        this._rrule.forEach(function (rule) { return rrs.rrule(rule.clone()); });
        this._exrule.forEach(function (rule) { return rrs.exrule(rule.clone()); });
        this._rdate.forEach(function (date) { return rrs.rdate(new Date(date.getTime())); });
        this._exdate.forEach(function (date) { return rrs.exdate(new Date(date.getTime())); });
        return rrs;
    };
    return RRuleSet;
}(_rrule__WEBPACK_IMPORTED_MODULE_1__.RRule));

function _addRule(rrule, collection) {
    if (!(rrule instanceof _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule)) {
        throw new TypeError(String(rrule) + ' is not RRule instance');
    }
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.includes)(collection.map(String), String(rrule))) {
        collection.push(rrule);
    }
}
function _addDate(date, collection) {
    if (!(date instanceof Date)) {
        throw new TypeError(String(date) + ' is not Date instance');
    }
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.includes)(collection.map(Number), Number(date))) {
        collection.push(date);
        (0,_dateutil__WEBPACK_IMPORTED_MODULE_2__.sort)(collection);
    }
}
function rdatesToString(param, rdates, tzid) {
    var isUTC = !tzid || tzid.toUpperCase() === 'UTC';
    var header = isUTC ? "".concat(param, ":") : "".concat(param, ";TZID=").concat(tzid, ":");
    var dateString = rdates
        .map(function (rdate) { return (0,_dateutil__WEBPACK_IMPORTED_MODULE_2__.timeToUntilString)(rdate.valueOf(), isUTC); })
        .join(',');
    return "".concat(header).concat(dateString);
}
//# sourceMappingURL=rruleset.js.map

/***/ },

/***/ 357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseInput: () => (/* binding */ parseInput),
/* harmony export */   rrulestr: () => (/* binding */ rrulestr)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _rrule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(330);
/* harmony import */ var _rruleset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(355);
/* harmony import */ var _dateutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(332);
/* harmony import */ var _parsestring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(344);






/**
 * RRuleStr
 * To parse a set of rrule strings
 */
var DEFAULT_OPTIONS = {
    dtstart: null,
    cache: false,
    unfold: false,
    forceset: false,
    compatible: false,
    tzid: null,
};
function parseInput(s, options) {
    var rrulevals = [];
    var rdatevals = [];
    var exrulevals = [];
    var exdatevals = [];
    var parsedDtstart = (0,_parsestring__WEBPACK_IMPORTED_MODULE_5__.parseDtstart)(s);
    var dtstart = parsedDtstart.dtstart;
    var tzid = parsedDtstart.tzid;
    var lines = splitIntoLines(s, options.unfold);
    lines.forEach(function (line) {
        var _a;
        if (!line)
            return;
        var _b = breakDownLine(line), name = _b.name, parms = _b.parms, value = _b.value;
        switch (name.toUpperCase()) {
            case 'RRULE':
                if (parms.length) {
                    throw new Error("unsupported RRULE parm: ".concat(parms.join(',')));
                }
                rrulevals.push((0,_parsestring__WEBPACK_IMPORTED_MODULE_5__.parseString)(line));
                break;
            case 'RDATE':
                var _c = (_a = /RDATE(?:;TZID=([^:=]+))?/i.exec(line)) !== null && _a !== void 0 ? _a : [], rdateTzid = _c[1];
                if (rdateTzid && !tzid) {
                    tzid = rdateTzid;
                }
                rdatevals = rdatevals.concat(parseRDate(value, parms));
                break;
            case 'EXRULE':
                if (parms.length) {
                    throw new Error("unsupported EXRULE parm: ".concat(parms.join(',')));
                }
                exrulevals.push((0,_parsestring__WEBPACK_IMPORTED_MODULE_5__.parseString)(value));
                break;
            case 'EXDATE':
                exdatevals = exdatevals.concat(parseRDate(value, parms));
                break;
            case 'DTSTART':
                break;
            default:
                throw new Error('unsupported property: ' + name);
        }
    });
    return {
        dtstart: dtstart,
        tzid: tzid,
        rrulevals: rrulevals,
        rdatevals: rdatevals,
        exrulevals: exrulevals,
        exdatevals: exdatevals,
    };
}
function buildRule(s, options) {
    var _a = parseInput(s, options), rrulevals = _a.rrulevals, rdatevals = _a.rdatevals, exrulevals = _a.exrulevals, exdatevals = _a.exdatevals, dtstart = _a.dtstart, tzid = _a.tzid;
    var noCache = options.cache === false;
    if (options.compatible) {
        options.forceset = true;
        options.unfold = true;
    }
    if (options.forceset ||
        rrulevals.length > 1 ||
        rdatevals.length ||
        exrulevals.length ||
        exdatevals.length) {
        var rset_1 = new _rruleset__WEBPACK_IMPORTED_MODULE_2__.RRuleSet(noCache);
        rset_1.dtstart(dtstart);
        rset_1.tzid(tzid || undefined);
        rrulevals.forEach(function (val) {
            rset_1.rrule(new _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule(groomRruleOptions(val, dtstart, tzid), noCache));
        });
        rdatevals.forEach(function (date) {
            rset_1.rdate(date);
        });
        exrulevals.forEach(function (val) {
            rset_1.exrule(new _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule(groomRruleOptions(val, dtstart, tzid), noCache));
        });
        exdatevals.forEach(function (date) {
            rset_1.exdate(date);
        });
        if (options.compatible && options.dtstart)
            rset_1.rdate(dtstart);
        return rset_1;
    }
    var val = rrulevals[0] || {};
    return new _rrule__WEBPACK_IMPORTED_MODULE_1__.RRule(groomRruleOptions(val, val.dtstart || options.dtstart || dtstart, val.tzid || options.tzid || tzid), noCache);
}
function rrulestr(s, options) {
    if (options === void 0) { options = {}; }
    return buildRule(s, initializeOptions(options));
}
function groomRruleOptions(val, dtstart, tzid) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, val), { dtstart: dtstart, tzid: tzid });
}
function initializeOptions(options) {
    var invalid = [];
    var keys = Object.keys(options);
    var defaultKeys = Object.keys(DEFAULT_OPTIONS);
    keys.forEach(function (key) {
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.includes)(defaultKeys, key))
            invalid.push(key);
    });
    if (invalid.length) {
        throw new Error('Invalid options: ' + invalid.join(', '));
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, DEFAULT_OPTIONS), options);
}
function extractName(line) {
    if (line.indexOf(':') === -1) {
        return {
            name: 'RRULE',
            value: line,
        };
    }
    var _a = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.split)(line, ':', 1), name = _a[0], value = _a[1];
    return {
        name: name,
        value: value,
    };
}
function breakDownLine(line) {
    var _a = extractName(line), name = _a.name, value = _a.value;
    var parms = name.split(';');
    if (!parms)
        throw new Error('empty property name');
    return {
        name: parms[0].toUpperCase(),
        parms: parms.slice(1),
        value: value,
    };
}
function splitIntoLines(s, unfold) {
    if (unfold === void 0) { unfold = false; }
    s = s && s.trim();
    if (!s)
        throw new Error('Invalid empty string');
    // More info about 'unfold' option
    // Go head to http://www.ietf.org/rfc/rfc2445.txt
    if (!unfold) {
        return s.split(/\s/);
    }
    var lines = s.split('\n');
    var i = 0;
    while (i < lines.length) {
        // TODO
        var line = (lines[i] = lines[i].replace(/\s+$/g, ''));
        if (!line) {
            lines.splice(i, 1);
        }
        else if (i > 0 && line[0] === ' ') {
            lines[i - 1] += line.slice(1);
            lines.splice(i, 1);
        }
        else {
            i += 1;
        }
    }
    return lines;
}
function validateDateParm(parms) {
    parms.forEach(function (parm) {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(parm)) {
            throw new Error('unsupported RDATE/EXDATE parm: ' + parm);
        }
    });
}
function parseRDate(rdateval, parms) {
    validateDateParm(parms);
    return rdateval.split(',').map(function (datestr) { return (0,_dateutil__WEBPACK_IMPORTED_MODULE_3__.untilStringToDate)(datestr); });
}
//# sourceMappingURL=rrulestr.js.map

/***/ },

/***/ 341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Frequency: () => (/* binding */ Frequency),
/* harmony export */   freqIsDailyOrGreater: () => (/* binding */ freqIsDailyOrGreater)
/* harmony export */ });
var Frequency;
(function (Frequency) {
    Frequency[Frequency["YEARLY"] = 0] = "YEARLY";
    Frequency[Frequency["MONTHLY"] = 1] = "MONTHLY";
    Frequency[Frequency["WEEKLY"] = 2] = "WEEKLY";
    Frequency[Frequency["DAILY"] = 3] = "DAILY";
    Frequency[Frequency["HOURLY"] = 4] = "HOURLY";
    Frequency[Frequency["MINUTELY"] = 5] = "MINUTELY";
    Frequency[Frequency["SECONDLY"] = 6] = "SECONDLY";
})(Frequency || (Frequency = {}));
function freqIsDailyOrGreater(freq) {
    return freq < Frequency.HOURLY;
}
//# sourceMappingURL=types.js.map

/***/ },

/***/ 333
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_WEEKDAYS: () => (/* binding */ ALL_WEEKDAYS),
/* harmony export */   Weekday: () => (/* binding */ Weekday)
/* harmony export */ });
// =============================================================================
// Weekday
// =============================================================================
var ALL_WEEKDAYS = [
    'MO',
    'TU',
    'WE',
    'TH',
    'FR',
    'SA',
    'SU',
];
var Weekday = /** @class */ (function () {
    function Weekday(weekday, n) {
        if (n === 0)
            throw new Error("Can't create weekday with n == 0");
        this.weekday = weekday;
        this.n = n;
    }
    Weekday.fromStr = function (str) {
        return new Weekday(ALL_WEEKDAYS.indexOf(str));
    };
    // __call__ - Cannot call the object directly, do it through
    // e.g. RRule.TH.nth(-1) instead,
    Weekday.prototype.nth = function (n) {
        return this.n === n ? this : new Weekday(this.weekday, n);
    };
    // __eq__
    Weekday.prototype.equals = function (other) {
        return this.weekday === other.weekday && this.n === other.n;
    };
    // __repr__
    Weekday.prototype.toString = function () {
        var s = ALL_WEEKDAYS[this.weekday];
        if (this.n)
            s = (this.n > 0 ? '+' : '') + String(this.n) + s;
        return s;
    };
    Weekday.prototype.getJsWeekday = function () {
        return this.weekday === 6 ? 0 : this.weekday + 1;
    };
    return Weekday;
}());

//# sourceMappingURL=weekday.js.map

/***/ },

/***/ 328
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var rrule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(329);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);




const recurringType = {
    parse(eventProps, dateEnv) {
        if (eventProps.rrule != null) {
            let eventRRuleData = parseEventRRule(eventProps, dateEnv);
            if (eventRRuleData) {
                return {
                    typeData: {
                        rruleSet: eventRRuleData.rruleSet,
                        dateEnv: eventRRuleData.isTimeZoneSpecified ? undefined : dateEnv,
                    },
                    allDayGuess: !eventRRuleData.isTimeSpecified,
                    duration: eventProps.duration,
                };
            }
        }
        return null;
    },
    expand(eventRRuleData, framingRange, calendarDateEnv) {
        return eventRRuleData.rruleSet.between(
        // Add one-day leeway since rrule lib only operates in UTC,
        // but the zoned variant of framingRange is not.
        // Also overcomes this rrule bug:
        // https://github.com/jakubroztocil/rrule/issues/84)
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.t)(framingRange.start, -1), (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.t)(framingRange.end, 1)).map((date) => {
            // convert to plain-datetime
            return calendarDateEnv.createMarker(
            // convert to epoch-milliseconds in original timezone
            eventRRuleData.dateEnv
                ? eventRRuleData.dateEnv.toDate(date)
                : date);
        });
    },
};
function parseEventRRule(eventProps, dateEnv) {
    let rruleSet;
    let isTimeSpecified = false;
    let isTimeZoneSpecified = false;
    if (typeof eventProps.rrule === 'string') {
        let res = parseRRuleString(eventProps.rrule);
        rruleSet = res.rruleSet;
        isTimeSpecified = res.isTimeSpecified;
        isTimeZoneSpecified = res.isTimeZoneSpecified;
    }
    if (typeof eventProps.rrule === 'object' && eventProps.rrule) { // non-null object
        let res = parseRRuleObject(eventProps.rrule, dateEnv);
        rruleSet = new rrule__WEBPACK_IMPORTED_MODULE_1__.RRuleSet();
        rruleSet.rrule(res.rrule);
        isTimeSpecified = res.isTimeSpecified;
        isTimeZoneSpecified = res.isTimeZoneSpecified;
    }
    // convery to arrays. TODO: general util?
    let exdateInputs = [].concat(eventProps.exdate || []);
    let exruleInputs = [].concat(eventProps.exrule || []);
    for (let exdateInput of exdateInputs) {
        let res = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.bx)(exdateInput);
        isTimeSpecified = isTimeSpecified || !res.isTimeUnspecified;
        isTimeZoneSpecified = isTimeZoneSpecified || res.timeZoneOffset !== null;
        rruleSet.exdate(new Date(res.marker.valueOf() - (res.timeZoneOffset || 0) * 60 * 1000));
    }
    // TODO: exrule is deprecated. what to do? (https://icalendar.org/iCalendar-RFC-5545/a-3-deprecated-features.html)
    for (let exruleInput of exruleInputs) {
        let res = parseRRuleObject(exruleInput, dateEnv);
        isTimeSpecified = isTimeSpecified || res.isTimeSpecified;
        isTimeZoneSpecified = isTimeZoneSpecified || res.isTimeZoneSpecified;
        rruleSet.exrule(res.rrule);
    }
    return { rruleSet, isTimeSpecified, isTimeZoneSpecified };
}
function parseRRuleObject(rruleInput, dateEnv) {
    let isTimeSpecified = false;
    let isTimeZoneSpecified = false;
    function processDateInput(dateInput) {
        if (typeof dateInput === 'string') {
            let markerData = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.bx)(dateInput);
            if (markerData) {
                isTimeSpecified = isTimeSpecified || !markerData.isTimeUnspecified;
                isTimeZoneSpecified = isTimeZoneSpecified || markerData.timeZoneOffset !== null;
                return new Date(markerData.marker.valueOf() - (markerData.timeZoneOffset || 0) * 60 * 1000); // NOT DRY
            }
            return null;
        }
        return dateInput; // TODO: what about number timestamps?
    }
    let rruleOptions = Object.assign(Object.assign({}, rruleInput), { dtstart: processDateInput(rruleInput.dtstart), until: processDateInput(rruleInput.until), freq: convertConstant(rruleInput.freq), wkst: rruleInput.wkst == null
            ? (dateEnv.weekDow - 1 + 7) % 7 // convert Sunday-first to Monday-first
            : convertConstant(rruleInput.wkst), byweekday: convertConstants(rruleInput.byweekday) });
    return { rrule: new rrule__WEBPACK_IMPORTED_MODULE_1__.RRule(rruleOptions), isTimeSpecified, isTimeZoneSpecified };
}
function parseRRuleString(str) {
    let rruleSet = rrule__WEBPACK_IMPORTED_MODULE_1__.rrulestr(str, { forceset: true });
    let analysis = analyzeRRuleString(str);
    return Object.assign({ rruleSet }, analysis);
}
function analyzeRRuleString(str) {
    let isTimeSpecified = false;
    let isTimeZoneSpecified = false;
    function processMatch(whole, introPart, datePart) {
        let result = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.bx)(datePart);
        isTimeSpecified = isTimeSpecified || !result.isTimeUnspecified;
        isTimeZoneSpecified = isTimeZoneSpecified || result.timeZoneOffset !== null;
    }
    str.replace(/\b(DTSTART:)([^\n]*)/, processMatch);
    str.replace(/\b(EXDATE:)([^\n]*)/, processMatch);
    str.replace(/\b(UNTIL=)([^;\n]*)/, processMatch);
    return { isTimeSpecified, isTimeZoneSpecified };
}
function convertConstants(input) {
    if (Array.isArray(input)) {
        return input.map(convertConstant);
    }
    return convertConstant(input);
}
function convertConstant(input) {
    if (typeof input === 'string') {
        return rrule__WEBPACK_IMPORTED_MODULE_1__.RRule[input.toUpperCase()];
    }
    return input;
}

const RRULE_EVENT_REFINERS = {
    rrule: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    exrule: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    exdate: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.n,
    duration: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.d,
};

var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    name: '@fullcalendar/rrule',
    recurringTypes: [recurringType],
    eventRefiners: RRULE_EVENT_REFINERS,
});




/***/ },

/***/ 336
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }

}]);
//# sourceMappingURL=38-396a343142a301d4504e.js.map