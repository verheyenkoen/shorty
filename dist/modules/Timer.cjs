'use strict';

const isMap = require('./isMap.cjs');
const isHTMLElement = require('./isHTMLElement.cjs');
const isNumber = require('./isNumber.cjs');
require('./isObject.cjs');
require('./isNode.cjs');

const TimeCache = /* @__PURE__ */ new Map();
const Timer = {
  set: (element, callback, delay, key) => {
    if (!isHTMLElement(element))
      return;
    if (key && key.length) {
      if (!TimeCache.has(element)) {
        TimeCache.set(element, /* @__PURE__ */ new Map());
      }
      TimeCache.get(element).set(key, setTimeout(callback, delay));
    } else {
      TimeCache.set(element, setTimeout(callback, delay));
    }
  },
  get: (element, key) => {
    if (!isHTMLElement(element))
      return null;
    const keyTimers = TimeCache.get(element);
    if (key && keyTimers && isMap(keyTimers)) {
      return keyTimers.get(key) || null;
    } else if (isNumber(keyTimers)) {
      return keyTimers;
    }
    return null;
  },
  clear: (element, key) => {
    if (!isHTMLElement(element))
      return;
    const keyTimers = TimeCache.get(element);
    if (key && key.length && isMap(keyTimers)) {
      clearTimeout(keyTimers.get(key));
      keyTimers.delete(key);
      if (keyTimers.size === 0) {
        TimeCache.delete(element);
      }
    } else {
      clearTimeout(keyTimers);
      TimeCache.delete(element);
    }
  }
};

module.exports = Timer;
//# sourceMappingURL=Timer.cjs.map
