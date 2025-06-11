/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 41:
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 1073:
/***/ ((module) => {

/*
 * Fuzzy
 * https://github.com/myork/fuzzy
 *
 * Copyright (c) 2012 Matt York
 * Licensed under the MIT license.
 */

(function() {

var root = this;

var fuzzy = {};

// Use in node or in browser
if (true) {
  module.exports = fuzzy;
} else // removed by dead control flow
{}

// Return all elements of `array` that have a fuzzy
// match against `pattern`.
fuzzy.simpleFilter = function(pattern, array) {
  return array.filter(function(str) {
    return fuzzy.test(pattern, str);
  });
};

// Does `pattern` fuzzy match `str`?
fuzzy.test = function(pattern, str) {
  return fuzzy.match(pattern, str) !== null;
};

// If `pattern` matches `str`, wrap each matching character
// in `opts.pre` and `opts.post`. If no match, return null
fuzzy.match = function(pattern, str, opts) {
  opts = opts || {};
  var patternIdx = 0
    , result = []
    , len = str.length
    , totalScore = 0
    , currScore = 0
    // prefix
    , pre = opts.pre || ''
    // suffix
    , post = opts.post || ''
    // String to compare against. This might be a lowercase version of the
    // raw string
    , compareString =  opts.caseSensitive && str || str.toLowerCase()
    , ch;

  pattern = opts.caseSensitive && pattern || pattern.toLowerCase();

  // For each character in the string, either add it to the result
  // or wrap in template if it's the next string in the pattern
  for(var idx = 0; idx < len; idx++) {
    ch = str[idx];
    if(compareString[idx] === pattern[patternIdx]) {
      ch = pre + ch + post;
      patternIdx += 1;

      // consecutive characters should increase the score more than linearly
      currScore += 1 + currScore;
    } else {
      currScore = 0;
    }
    totalScore += currScore;
    result[result.length] = ch;
  }

  // return rendered string if we have a match for every char
  if(patternIdx === pattern.length) {
    // if the string is an exact match with pattern, totalScore should be maxed
    totalScore = (compareString === pattern) ? Infinity : totalScore;
    return {rendered: result.join(''), score: totalScore};
  }

  return null;
};

// The normal entry point. Filters `arr` for matches against `pattern`.
// It returns an array with matching values of the type:
//
//     [{
//         string:   '<b>lah' // The rendered string
//       , index:    2        // The index of the element in `arr`
//       , original: 'blah'   // The original element in `arr`
//     }]
//
// `opts` is an optional argument bag. Details:
//
//    opts = {
//        // string to put before a matching character
//        pre:     '<b>'
//
//        // string to put after matching character
//      , post:    '</b>'
//
//        // Optional function. Input is an entry in the given arr`,
//        // output should be the string to test `pattern` against.
//        // In this example, if `arr = [{crying: 'koala'}]` we would return
//        // 'koala'.
//      , extract: function(arg) { return arg.crying; }
//    }
fuzzy.filter = function(pattern, arr, opts) {
  if(!arr || arr.length === 0) {
    return [];
  }
  if (typeof pattern !== 'string') {
    return arr;
  }
  opts = opts || {};
  return arr
    .reduce(function(prev, element, idx, arr) {
      var str = element;
      if(opts.extract) {
        str = opts.extract(element);
      }
      var rendered = fuzzy.match(pattern, str, opts);
      if(rendered != null) {
        prev[prev.length] = {
            string: rendered.rendered
          , score: rendered.score
          , index: idx
          , original: element
        };
      }
      return prev;
    }, [])

    // Sort by score. Browsers are inconsistent wrt stable/unstable
    // sorting, so force stable by using the index in the case of tie.
    // See http://ofb.net/~sethml/is-sort-stable.html
    .sort(function(a,b) {
      var compare = b.score - a.score;
      if(compare) return compare;
      return a.index - b.index;
    });
};


}());



/***/ }),

/***/ 1074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(41);
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  module.exports = __webpack_require__(1075);
} else {
  // eslint-disable-next-line global-require
  module.exports = __webpack_require__(1076);
}


/***/ }),

/***/ 1075:
/***/ ((module) => {

/*! hotkeys-js v3.13.10 | MIT © 2025 kenny wong <wowohoo@qq.com> https://jaywcjlove.github.io/hotkeys-js */
let isff="undefined"!=typeof navigator&&0<navigator.userAgent.toLowerCase().indexOf("firefox");function addEvent(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on".concat(t),n)}function removeEvent(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on".concat(t),n)}function getMods(t,e){var n=e.slice(0,e.length-1);for(let e=0;e<n.length;e++)n[e]=t[n[e].toLowerCase()];return n}function getKeys(e){var t=(e=(e="string"!=typeof e?"":e).replace(/\s/g,"")).split(",");let n=t.lastIndexOf("");for(;0<=n;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function compareArray(e,t){var n=e.length<t.length?t:e,o=e.length<t.length?e:t;let r=!0;for(let e=0;e<n.length;e++)~o.indexOf(n[e])||(r=!1);return r}let _keyMap={backspace:8,"\u232b":8,tab:9,clear:12,enter:13,"\u21a9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":isff?173:189,"=":isff?61:187,";":isff?59:186,"'":222,"[":219,"]":221,"\\":220},_modifier={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},modifierMap={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},_mods={16:!1,18:!1,17:!1,91:!1},_handlers={};for(let e=1;e<20;e++)_keyMap["f".concat(e)]=111+e;let _downKeys=[],winListendFocus=null,_scope="all",elementEventMap=new Map,code=e=>_keyMap[e.toLowerCase()]||_modifier[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),getKey=t=>Object.keys(_keyMap).find(e=>_keyMap[e]===t),getModifier=t=>Object.keys(_modifier).find(e=>_modifier[e]===t);function setScope(e){_scope=e||"all"}function getScope(){return _scope||"all"}function getPressedKeyCodes(){return _downKeys.slice(0)}function getPressedKeyString(){return _downKeys.map(e=>getKey(e)||getModifier(e)||String.fromCharCode(e))}function getAllKeyCodes(){let r=[];return Object.keys(_handlers).forEach(e=>{_handlers[e].forEach(e=>{var{key:e,scope:t,mods:n,shortcut:o}=e;r.push({scope:t,shortcut:o,mods:n,keys:e.split("+").map(e=>code(e))})})}),r}function filter(e){var e=e.target||e.srcElement,t=e.tagName;let n=!0;var o="INPUT"===t&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(e.type);return n=!e.isContentEditable&&(!o&&"TEXTAREA"!==t&&"SELECT"!==t||e.readOnly)?n:!1}function isPressed(e){return"string"==typeof e&&(e=code(e)),!!~_downKeys.indexOf(e)}function deleteScope(e,t){var n,o;let r;for(o in e=e||getScope(),_handlers)if(Object.prototype.hasOwnProperty.call(_handlers,o))for(n=_handlers[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1).forEach(e=>{e=e.element;return removeKeyEvent(e)}):r++;getScope()===e&&setScope(t||"all")}function clearModifier(e){let t=e.keyCode||e.which||e.charCode;var n=_downKeys.indexOf(t);if(n<0||_downKeys.splice(n,1),e.key&&"meta"==e.key.toLowerCase()&&_downKeys.splice(0,_downKeys.length),(t=93!==t&&224!==t?t:91)in _mods)for(var o in _mods[t]=!1,_modifier)_modifier[o]===t&&(hotkeys[o]=!1)}function unbind(n){if(void 0===n)Object.keys(_handlers).forEach(e=>{Array.isArray(_handlers[e])&&_handlers[e].forEach(e=>eachUnbind(e)),delete _handlers[e]}),removeKeyEvent(null);else if(Array.isArray(n))n.forEach(e=>{e.key&&eachUnbind(e)});else if("object"==typeof n)n.key&&eachUnbind(n);else if("string"==typeof n){for(var o=arguments.length,r=Array(1<o?o-1:0),s=1;s<o;s++)r[s-1]=arguments[s];let[e,t]=r;"function"==typeof e&&(t=e,e=""),eachUnbind({key:n,scope:e,method:t,splitKey:"+"})}}let eachUnbind=e=>{let{key:t,scope:s,method:i,splitKey:n="+"}=e;getKeys(t).forEach(e=>{var e=e.split(n),t=e.length,r=e[t-1],r="*"===r?"*":code(r);if(_handlers[r]){s=s||getScope();let n=1<t?getMods(_modifier,e):[],o=[];_handlers[r]=_handlers[r].filter(e=>{var t=(!i||e.method===i)&&e.scope===s&&compareArray(e.mods,n);return t&&o.push(e.element),!t}),o.forEach(e=>removeKeyEvent(e))}})};function eventHandler(t,n,o,e){if(n.element===e){let e;if(n.scope===o||"all"===n.scope){for(var r in e=0<n.mods.length,_mods)Object.prototype.hasOwnProperty.call(_mods,r)&&(!_mods[r]&&~n.mods.indexOf(+r)||_mods[r]&&!~n.mods.indexOf(+r))&&(e=!1);(0!==n.mods.length||_mods[16]||_mods[18]||_mods[17]||_mods[91])&&!e&&"*"!==n.shortcut||(n.keys=[],n.keys=n.keys.concat(_downKeys),!1===n.method(t,n)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble)&&(t.cancelBubble=!0))}}}function dispatch(n,t){var e,o=_handlers["*"];let r=n.keyCode||n.which||n.charCode;if(hotkeys.filter.call(this,n)){if(93!==r&&224!==r||(r=91),~_downKeys.indexOf(r)||229===r||_downKeys.push(r),["metaKey","ctrlKey","altKey","shiftKey"].forEach(e=>{var t=modifierMap[e];n[e]&&!~_downKeys.indexOf(t)?_downKeys.push(t):!n[e]&&~_downKeys.indexOf(t)?_downKeys.splice(_downKeys.indexOf(t),1):"metaKey"===e&&n[e]&&(_downKeys=_downKeys.filter(e=>e in modifierMap||e===r))}),r in _mods){for(var s in _mods[r]=!0,_modifier)Object.prototype.hasOwnProperty.call(_modifier,s)&&(e=modifierMap[_modifier[s]],hotkeys[s]=n[e]);if(!o)return}for(var i in _mods)Object.prototype.hasOwnProperty.call(_mods,i)&&(_mods[i]=n[modifierMap[i]]);n.getModifierState&&(!n.altKey||n.ctrlKey)&&n.getModifierState("AltGraph")&&(~_downKeys.indexOf(17)||_downKeys.push(17),~_downKeys.indexOf(18)||_downKeys.push(18),_mods[17]=!0,_mods[18]=!0);var d=getScope();if(o)for(let e=0;e<o.length;e++)o[e].scope===d&&("keydown"===n.type&&o[e].keydown||"keyup"===n.type&&o[e].keyup)&&eventHandler(n,o[e],d,t);if(r in _handlers){var a=_handlers[r],l=a.length;for(let e=0;e<l;e++)if(("keydown"===n.type&&a[e].keydown||"keyup"===n.type&&a[e].keyup)&&a[e].key){var c=a[e],y=c.splitKey,p=c.key.split(y),f=[];for(let e=0;e<p.length;e++)f.push(code(p[e]));f.sort().join("")===_downKeys.sort().join("")&&eventHandler(n,c,d,t)}}}}function hotkeys(e,t,n){_downKeys=[];var o,r=getKeys(e);let s=[],i="all",d=document,a=0,l=!1,c=!0,y="+",p=!1,f=!1;for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(i=t.scope),t.element&&(d=t.element),t.keyup&&(l=t.keyup),void 0!==t.keydown&&(c=t.keydown),void 0!==t.capture&&(p=t.capture),"string"==typeof t.splitKey&&(y=t.splitKey),!0===t.single)&&(f=!0),"string"==typeof t&&(i=t),f&&unbind(e,i);a<r.length;a++)e=r[a].split(y),s=[],1<e.length&&(s=getMods(_modifier,e)),(e="*"===(e=e[e.length-1])?"*":code(e))in _handlers||(_handlers[e]=[]),_handlers[e].push({keyup:l,keydown:c,scope:i,mods:s,shortcut:r[a],method:n,key:r[a],splitKey:y,element:d});void 0!==d&&window&&(elementEventMap.has(d)||(t=function(){return dispatch(0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.event,d)},o=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.event;dispatch(e,d),clearModifier(e)},elementEventMap.set(d,{keydownListener:t,keyupListenr:o,capture:p}),addEvent(d,"keydown",t,p),addEvent(d,"keyup",o,p)),winListendFocus||(t=()=>{_downKeys=[]},winListendFocus={listener:t,capture:p},addEvent(window,"focus",t,p)))}function trigger(t){let n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(_handlers).forEach(e=>{_handlers[e].filter(e=>e.scope===n&&e.shortcut===t).forEach(e=>{e&&e.method&&e.method()})})}function removeKeyEvent(t){var e,n,o,r=Object.values(_handlers).flat();r.findIndex(e=>{e=e.element;return e===t})<0&&({keydownListener:o,keyupListenr:n,capture:e}=elementEventMap.get(t)||{},o)&&n&&(removeEvent(t,"keyup",n,e),removeEvent(t,"keydown",o,e),elementEventMap.delete(t)),0<r.length&&0<elementEventMap.size||(Object.keys(elementEventMap).forEach(e=>{var{keydownListener:t,keyupListenr:n,capture:o}=elementEventMap.get(e)||{};t&&n&&(removeEvent(e,"keyup",n,o),removeEvent(e,"keydown",t,o),elementEventMap.delete(e))}),elementEventMap.clear(),Object.keys(_handlers).forEach(e=>delete _handlers[e]),winListendFocus&&({listener:n,capture:o}=winListendFocus,removeEvent(window,"focus",n,o),winListendFocus=null))}let _api={getPressedKeyString:getPressedKeyString,setScope:setScope,getScope:getScope,deleteScope:deleteScope,getPressedKeyCodes:getPressedKeyCodes,getAllKeyCodes:getAllKeyCodes,isPressed:isPressed,filter:filter,trigger:trigger,unbind:unbind,keyMap:_keyMap,modifier:_modifier,modifierMap:modifierMap};for(let e in _api)Object.prototype.hasOwnProperty.call(_api,e)&&(hotkeys[e]=_api[e]);if("undefined"!=typeof window){let t=window.hotkeys;hotkeys.noConflict=e=>(e&&window.hotkeys===hotkeys&&(window.hotkeys=t),hotkeys),window.hotkeys=hotkeys}module.exports=hotkeys;

/***/ }),

/***/ 1076:
/***/ ((module) => {

"use strict";
/**! 
 * hotkeys-js v3.13.10 
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies. 
 * 
 * Copyright (c) 2025 kenny wong <wowohoo@qq.com> 
 * https://github.com/jaywcjlove/hotkeys-js.git 
 * 
 * @website: https://jaywcjlove.github.io/hotkeys-js
 
 * Licensed under the MIT license 
 */



const isff = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0 : false;

// 绑定事件
function addEvent(object, event, method, useCapture) {
  if (object.addEventListener) {
    object.addEventListener(event, method, useCapture);
  } else if (object.attachEvent) {
    object.attachEvent("on".concat(event), method);
  }
}
function removeEvent(object, event, method, useCapture) {
  if (object.removeEventListener) {
    object.removeEventListener(event, method, useCapture);
  } else if (object.detachEvent) {
    object.detachEvent("on".concat(event), method);
  }
}

// 修饰键转换成对应的键码
function getMods(modifier, key) {
  const mods = key.slice(0, key.length - 1);
  for (let i = 0; i < mods.length; i++) mods[i] = modifier[mods[i].toLowerCase()];
  return mods;
}

// 处理传的key字符串转换成数组
function getKeys(key) {
  if (typeof key !== 'string') key = '';
  key = key.replace(/\s/g, ''); // 匹配任何空白字符,包括空格、制表符、换页符等等
  const keys = key.split(','); // 同时设置多个快捷键，以','分割
  let index = keys.lastIndexOf('');

  // 快捷键可能包含','，需特殊处理
  for (; index >= 0;) {
    keys[index - 1] += ',';
    keys.splice(index, 1);
    index = keys.lastIndexOf('');
  }
  return keys;
}

// 比较修饰键的数组
function compareArray(a1, a2) {
  const arr1 = a1.length >= a2.length ? a1 : a2;
  const arr2 = a1.length >= a2.length ? a2 : a1;
  let isIndex = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) isIndex = false;
  }
  return isIndex;
}

// Special Keys
const _keyMap = {
  backspace: 8,
  '⌫': 8,
  tab: 9,
  clear: 12,
  enter: 13,
  '↩': 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  '⇪': 20,
  ',': 188,
  '.': 190,
  '/': 191,
  '`': 192,
  '-': isff ? 173 : 189,
  '=': isff ? 61 : 187,
  ';': isff ? 59 : 186,
  '\'': 222,
  '[': 219,
  ']': 221,
  '\\': 220
};

// Modifier Keys
const _modifier = {
  // shiftKey
  '⇧': 16,
  shift: 16,
  // altKey
  '⌥': 18,
  alt: 18,
  option: 18,
  // ctrlKey
  '⌃': 17,
  ctrl: 17,
  control: 17,
  // metaKey
  '⌘': 91,
  cmd: 91,
  command: 91
};
const modifierMap = {
  16: 'shiftKey',
  18: 'altKey',
  17: 'ctrlKey',
  91: 'metaKey',
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
};
const _mods = {
  16: false,
  18: false,
  17: false,
  91: false
};
const _handlers = {};

// F1~F12 special key
for (let k = 1; k < 20; k++) {
  _keyMap["f".concat(k)] = 111 + k;
}

let _downKeys = []; // 记录摁下的绑定键
let winListendFocus = null; // window是否已经监听了focus事件
let _scope = 'all'; // 默认热键范围
const elementEventMap = new Map(); // 已绑定事件的节点记录

// 返回键码
const code = x => _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);
const getKey = x => Object.keys(_keyMap).find(k => _keyMap[k] === x);
const getModifier = x => Object.keys(_modifier).find(k => _modifier[k] === x);

// 设置获取当前范围（默认为'所有'）
function setScope(scope) {
  _scope = scope || 'all';
}
// 获取当前范围
function getScope() {
  return _scope || 'all';
}
// 获取摁下绑定键的键值
function getPressedKeyCodes() {
  return _downKeys.slice(0);
}
function getPressedKeyString() {
  return _downKeys.map(c => getKey(c) || getModifier(c) || String.fromCharCode(c));
}
function getAllKeyCodes() {
  const result = [];
  Object.keys(_handlers).forEach(k => {
    _handlers[k].forEach(_ref => {
      let {
        key,
        scope,
        mods,
        shortcut
      } = _ref;
      result.push({
        scope,
        shortcut,
        mods,
        keys: key.split('+').map(v => code(v))
      });
    });
  });
  return result;
}

// 表单控件控件判断 返回 Boolean
// hotkey is effective only when filter return true
function filter(event) {
  const target = event.target || event.srcElement;
  const {
    tagName
  } = target;
  let flag = true;
  const isInput = tagName === 'INPUT' && !['checkbox', 'radio', 'range', 'button', 'file', 'reset', 'submit', 'color'].includes(target.type);
  // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>
  if (target.isContentEditable || (isInput || tagName === 'TEXTAREA' || tagName === 'SELECT') && !target.readOnly) {
    flag = false;
  }
  return flag;
}

// 判断摁下的键是否为某个键，返回true或者false
function isPressed(keyCode) {
  if (typeof keyCode === 'string') {
    keyCode = code(keyCode); // 转换成键码
  }
  return _downKeys.indexOf(keyCode) !== -1;
}

// 循环删除handlers中的所有 scope(范围)
function deleteScope(scope, newScope) {
  let handlers;
  let i;

  // 没有指定scope，获取scope
  if (!scope) scope = getScope();
  for (const key in _handlers) {
    if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
      handlers = _handlers[key];
      for (i = 0; i < handlers.length;) {
        if (handlers[i].scope === scope) {
          const deleteItems = handlers.splice(i, 1);
          deleteItems.forEach(_ref2 => {
            let {
              element
            } = _ref2;
            return removeKeyEvent(element);
          });
        } else {
          i++;
        }
      }
    }
  }

  // 如果scope被删除，将scope重置为all
  if (getScope() === scope) setScope(newScope || 'all');
}

// 清除修饰键
function clearModifier(event) {
  let key = event.keyCode || event.which || event.charCode;
  const i = _downKeys.indexOf(key);

  // 从列表中清除按压过的键
  if (i >= 0) {
    _downKeys.splice(i, 1);
  }
  // 特殊处理 cmmand 键，在 cmmand 组合快捷键 keyup 只执行一次的问题
  if (event.key && event.key.toLowerCase() === 'meta') {
    _downKeys.splice(0, _downKeys.length);
  }

  // 修饰键 shiftKey altKey ctrlKey (command||metaKey) 清除
  if (key === 93 || key === 224) key = 91;
  if (key in _mods) {
    _mods[key] = false;

    // 将修饰键重置为false
    for (const k in _modifier) if (_modifier[k] === key) hotkeys[k] = false;
  }
}
function unbind(keysInfo) {
  // unbind(), unbind all keys
  if (typeof keysInfo === 'undefined') {
    Object.keys(_handlers).forEach(key => {
      Array.isArray(_handlers[key]) && _handlers[key].forEach(info => eachUnbind(info));
      delete _handlers[key];
    });
    removeKeyEvent(null);
  } else if (Array.isArray(keysInfo)) {
    // support like : unbind([{key: 'ctrl+a', scope: 's1'}, {key: 'ctrl-a', scope: 's2', splitKey: '-'}])
    keysInfo.forEach(info => {
      if (info.key) eachUnbind(info);
    });
  } else if (typeof keysInfo === 'object') {
    // support like unbind({key: 'ctrl+a, ctrl+b', scope:'abc'})
    if (keysInfo.key) eachUnbind(keysInfo);
  } else if (typeof keysInfo === 'string') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    // support old method
    // eslint-disable-line
    let [scope, method] = args;
    if (typeof scope === 'function') {
      method = scope;
      scope = '';
    }
    eachUnbind({
      key: keysInfo,
      scope,
      method,
      splitKey: '+'
    });
  }
}

// 解除绑定某个范围的快捷键
const eachUnbind = _ref3 => {
  let {
    key,
    scope,
    method,
    splitKey = '+'
  } = _ref3;
  const multipleKeys = getKeys(key);
  multipleKeys.forEach(originKey => {
    const unbindKeys = originKey.split(splitKey);
    const len = unbindKeys.length;
    const lastKey = unbindKeys[len - 1];
    const keyCode = lastKey === '*' ? '*' : code(lastKey);
    if (!_handlers[keyCode]) return;
    // 判断是否传入范围，没有就获取范围
    if (!scope) scope = getScope();
    const mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
    const unbindElements = [];
    _handlers[keyCode] = _handlers[keyCode].filter(record => {
      // 通过函数判断，是否解除绑定，函数相等直接返回
      const isMatchingMethod = method ? record.method === method : true;
      const isUnbind = isMatchingMethod && record.scope === scope && compareArray(record.mods, mods);
      if (isUnbind) unbindElements.push(record.element);
      return !isUnbind;
    });
    unbindElements.forEach(element => removeKeyEvent(element));
  });
};

// 对监听对应快捷键的回调函数进行处理
function eventHandler(event, handler, scope, element) {
  if (handler.element !== element) {
    return;
  }
  let modifiersMatch;

  // 看它是否在当前范围
  if (handler.scope === scope || handler.scope === 'all') {
    // 检查是否匹配修饰符（如果有返回true）
    modifiersMatch = handler.mods.length > 0;
    for (const y in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, y)) {
        if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) {
          modifiersMatch = false;
        }
      }
    }

    // 调用处理程序，如果是修饰键不做处理
    if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === '*') {
      handler.keys = [];
      handler.keys = handler.keys.concat(_downKeys);
      if (handler.method(event, handler) === false) {
        if (event.preventDefault) event.preventDefault();else event.returnValue = false;
        if (event.stopPropagation) event.stopPropagation();
        if (event.cancelBubble) event.cancelBubble = true;
      }
    }
  }
}

// 处理keydown事件
function dispatch(event, element) {
  const asterisk = _handlers['*'];
  let key = event.keyCode || event.which || event.charCode;

  // 表单控件过滤 默认表单控件不触发快捷键
  if (!hotkeys.filter.call(this, event)) return;

  // Gecko(Firefox)的command键值224，在Webkit(Chrome)中保持一致
  // Webkit左右 command 键值不一样
  if (key === 93 || key === 224) key = 91;

  /**
   * Collect bound keys
   * If an Input Method Editor is processing key input and the event is keydown, return 229.
   * https://stackoverflow.com/questions/25043934/is-it-ok-to-ignore-keydown-events-with-keycode-229
   * http://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
   */
  if (_downKeys.indexOf(key) === -1 && key !== 229) _downKeys.push(key);
  /**
   * Jest test cases are required.
   * ===============================
   */
  ['metaKey', 'ctrlKey', 'altKey', 'shiftKey'].forEach(keyName => {
    const keyNum = modifierMap[keyName];
    if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
      _downKeys.push(keyNum);
    } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
      _downKeys.splice(_downKeys.indexOf(keyNum), 1);
    } else if (keyName === 'metaKey' && event[keyName]) {
      // 如果command被按下，那就清空所有除event按键外的非装饰键。
      // 因为command被按下的情况下非装饰键的keyup永远都不会触发。这是已知的浏览器限制。
      // If command key is pressed, clear all non-decorating keys except for key in event.
      // This is because keyup for a non-decorating key will NEVER be triggered when command is pressed.
      // This is a known browser limitation.
      _downKeys = _downKeys.filter(k => k in modifierMap || k === key);
    }
  });
  /**
   * -------------------------------
   */
  if (key in _mods) {
    _mods[key] = true;
    // 将特殊字符的key注册到 hotkeys 上
    for (const k in _modifier) {
      if (Object.prototype.hasOwnProperty.call(_modifier, k)) {
        const eventKey = modifierMap[_modifier[k]];
        hotkeys[k] = event[eventKey];
      }
    }
    if (!asterisk) return;
  }

  // 将 modifierMap 里面的修饰键绑定到 event 中
  for (const e in _mods) {
    if (Object.prototype.hasOwnProperty.call(_mods, e)) {
      _mods[e] = event[modifierMap[e]];
    }
  }
  /**
   * https://github.com/jaywcjlove/hotkeys/pull/129
   * This solves the issue in Firefox on Windows where hotkeys corresponding to special characters would not trigger.
   * An example of this is ctrl+alt+m on a Swedish keyboard which is used to type μ.
   * Browser support: https://caniuse.com/#feat=keyboardevent-getmodifierstate
   */
  if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState('AltGraph')) {
    if (_downKeys.indexOf(17) === -1) {
      _downKeys.push(17);
    }
    if (_downKeys.indexOf(18) === -1) {
      _downKeys.push(18);
    }
    _mods[17] = true;
    _mods[18] = true;
  }

  // 获取范围 默认为 `all`
  const scope = getScope();
  // 对任何快捷键都需要做的处理
  if (asterisk) {
    for (let i = 0; i < asterisk.length; i++) {
      if (asterisk[i].scope === scope && (event.type === 'keydown' && asterisk[i].keydown || event.type === 'keyup' && asterisk[i].keyup)) {
        eventHandler(event, asterisk[i], scope, element);
      }
    }
  }
  // key 不在 _handlers 中返回
  if (!(key in _handlers)) return;
  const handlerKey = _handlers[key];
  const keyLen = handlerKey.length;
  for (let i = 0; i < keyLen; i++) {
    if (event.type === 'keydown' && handlerKey[i].keydown || event.type === 'keyup' && handlerKey[i].keyup) {
      if (handlerKey[i].key) {
        const record = handlerKey[i];
        const {
          splitKey
        } = record;
        const keyShortcut = record.key.split(splitKey);
        const _downKeysCurrent = []; // 记录当前按键键值
        for (let a = 0; a < keyShortcut.length; a++) {
          _downKeysCurrent.push(code(keyShortcut[a]));
        }
        if (_downKeysCurrent.sort().join('') === _downKeys.sort().join('')) {
          // 找到处理内容
          eventHandler(event, record, scope, element);
        }
      }
    }
  }
}
function hotkeys(key, option, method) {
  _downKeys = [];
  const keys = getKeys(key); // 需要处理的快捷键列表
  let mods = [];
  let scope = 'all'; // scope默认为all，所有范围都有效
  let element = document; // 快捷键事件绑定节点
  let i = 0;
  let keyup = false;
  let keydown = true;
  let splitKey = '+';
  let capture = false;
  let single = false; // 单个callback

  // 对为设定范围的判断
  if (method === undefined && typeof option === 'function') {
    method = option;
  }
  if (Object.prototype.toString.call(option) === '[object Object]') {
    if (option.scope) scope = option.scope; // eslint-disable-line
    if (option.element) element = option.element; // eslint-disable-line
    if (option.keyup) keyup = option.keyup; // eslint-disable-line
    if (option.keydown !== undefined) keydown = option.keydown; // eslint-disable-line
    if (option.capture !== undefined) capture = option.capture; // eslint-disable-line
    if (typeof option.splitKey === 'string') splitKey = option.splitKey; // eslint-disable-line
    if (option.single === true) single = true; // eslint-disable-line
  }
  if (typeof option === 'string') scope = option;

  // 如果只允许单个callback，先unbind
  if (single) unbind(key, scope);

  // 对于每个快捷键进行处理
  for (; i < keys.length; i++) {
    key = keys[i].split(splitKey); // 按键列表
    mods = [];

    // 如果是组合快捷键取得组合快捷键
    if (key.length > 1) mods = getMods(_modifier, key);

    // 将非修饰键转化为键码
    key = key[key.length - 1];
    key = key === '*' ? '*' : code(key); // *表示匹配所有快捷键

    // 判断key是否在_handlers中，不在就赋一个空数组
    if (!(key in _handlers)) _handlers[key] = [];
    _handlers[key].push({
      keyup,
      keydown,
      scope,
      mods,
      shortcut: keys[i],
      method,
      key: keys[i],
      splitKey,
      element
    });
  }
  // 在全局document上设置快捷键
  if (typeof element !== 'undefined' && window) {
    if (!elementEventMap.has(element)) {
      const keydownListener = function () {
        let event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
        return dispatch(event, element);
      };
      const keyupListenr = function () {
        let event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
        dispatch(event, element);
        clearModifier(event);
      };
      elementEventMap.set(element, {
        keydownListener,
        keyupListenr,
        capture
      });
      addEvent(element, 'keydown', keydownListener, capture);
      addEvent(element, 'keyup', keyupListenr, capture);
    }
    if (!winListendFocus) {
      const listener = () => {
        _downKeys = [];
      };
      winListendFocus = {
        listener,
        capture
      };
      addEvent(window, 'focus', listener, capture);
    }
  }
}
function trigger(shortcut) {
  let scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  Object.keys(_handlers).forEach(key => {
    const dataList = _handlers[key].filter(item => item.scope === scope && item.shortcut === shortcut);
    dataList.forEach(data => {
      if (data && data.method) {
        data.method();
      }
    });
  });
}

// 销毁事件,unbind之后判断element上是否还有键盘快捷键，如果没有移除监听
function removeKeyEvent(element) {
  const values = Object.values(_handlers).flat();
  const findindex = values.findIndex(_ref4 => {
    let {
      element: el
    } = _ref4;
    return el === element;
  });
  if (findindex < 0) {
    const {
      keydownListener,
      keyupListenr,
      capture
    } = elementEventMap.get(element) || {};
    if (keydownListener && keyupListenr) {
      removeEvent(element, 'keyup', keyupListenr, capture);
      removeEvent(element, 'keydown', keydownListener, capture);
      elementEventMap.delete(element);
    }
  }
  if (values.length <= 0 || elementEventMap.size <= 0) {
    // 移除所有的元素上的监听
    const eventKeys = Object.keys(elementEventMap);
    eventKeys.forEach(el => {
      const {
        keydownListener,
        keyupListenr,
        capture
      } = elementEventMap.get(el) || {};
      if (keydownListener && keyupListenr) {
        removeEvent(el, 'keyup', keyupListenr, capture);
        removeEvent(el, 'keydown', keydownListener, capture);
        elementEventMap.delete(el);
      }
    });
    // 清空 elementEventMap
    elementEventMap.clear();
    // 清空 _handlers
    Object.keys(_handlers).forEach(key => delete _handlers[key]);
    // 移除window上的focus监听
    if (winListendFocus) {
      const {
        listener,
        capture
      } = winListendFocus;
      removeEvent(window, 'focus', listener, capture);
      winListendFocus = null;
    }
  }
}
const _api = {
  getPressedKeyString,
  setScope,
  getScope,
  deleteScope,
  getPressedKeyCodes,
  getAllKeyCodes,
  isPressed,
  filter,
  trigger,
  unbind,
  keyMap: _keyMap,
  modifier: _modifier,
  modifierMap
};
for (const a in _api) {
  if (Object.prototype.hasOwnProperty.call(_api, a)) {
    hotkeys[a] = _api[a];
  }
}
if (typeof window !== 'undefined') {
  const _hotkeys = window.hotkeys;
  hotkeys.noConflict = deep => {
    if (deep && window.hotkeys === hotkeys) {
      window.hotkeys = _hotkeys;
    }
    return hotkeys;
  };
  window.hotkeys = hotkeys;
}

module.exports = hotkeys;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1074);
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hotkeys_js__WEBPACK_IMPORTED_MODULE_0__);
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

// Fuzzy base lib
// 'fuzzy' object has to be declared in global scope
window.fuzzy = __webpack_require__(1073);

// Required to open search menu with "CTRL+ALT+G"


})();

/******/ })()
;
//# sourceMappingURL=fuzzy.js.map