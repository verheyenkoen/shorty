// strings
import ariaChecked from './strings/ariaChecked';
import ariaDescribedBy from './strings/ariaDescribedBy';
import ariaExpanded from './strings/ariaExpanded';
import ariaHidden from './strings/ariaHidden';
import ariaLabel from './strings/ariaLabel';
import ariaLabelledBy from './strings/ariaLabelledBy';
import ariaModal from './strings/ariaModal';
import ariaPressed from './strings/ariaPressed';
import ariaSelected from './strings/ariaSelected';

import nativeEvents from './strings/nativeEvents';
import abortEvent from './strings/abortEvent';
import blurEvent from './strings/blurEvent';
import moveEvent from './strings/moveEvent';
import changeEvent from './strings/changeEvent';
import errorEvent from './strings/errorEvent';
import resetEvent from './strings/resetEvent';
import resizeEvent from './strings/resizeEvent';
import scrollEvent from './strings/scrollEvent';
import submitEvent from './strings/submitEvent';
import loadEvent from './strings/loadEvent';
import unloadEvent from './strings/unloadEvent';
import readystatechangeEvent from './strings/readystatechangeEvent';
import beforeunloadEvent from './strings/beforeunloadEvent';
import orientationchangeEvent from './strings/orientationchangeEvent';
import contextmenuEvent from './strings/contextmenuEvent';
import DOMContentLoadedEvent from './strings/DOMContentLoadedEvent';
import DOMMouseScrollEvent from './strings/DOMMouseScrollEvent';

import selectEvent from './strings/selectEvent';
import selectendEvent from './strings/selectendEvent';
import selectstartEvent from './strings/selectstartEvent';

import mouseSwipeEvents from './strings/mouseSwipeEvents';
import mouseClickEvents from './strings/mouseClickEvents';
import mouseclickEvent from './strings/mouseclickEvent';
import mousedblclickEvent from './strings/mousedblclickEvent';
import mousedownEvent from './strings/mousedownEvent';
import mouseupEvent from './strings/mouseupEvent';
import mousehoverEvent from './strings/mousehoverEvent';
import mouseHoverEvents from './strings/mouseHoverEvents';
import mouseenterEvent from './strings/mouseenterEvent';
import mouseleaveEvent from './strings/mouseleaveEvent';
import mouseinEvent from './strings/mouseinEvent';
import mouseoutEvent from './strings/mouseoutEvent';
import mousemoveEvent from './strings/mousemoveEvent';
import mousewheelEvent from './strings/mousewheelEvent';

import touchEvents from './strings/touchEvents';
import touchstartEvent from './strings/touchstartEvent';
import touchmoveEvent from './strings/touchmoveEvent';
import touchcancelEvent from './strings/touchcancelEvent';
import touchendEvent from './strings/touchendEvent';

import pointercancelEvent from './strings/pointercancelEvent';
import pointerdownEvent from './strings/pointerdownEvent';
import pointerleaveEvent from './strings/pointerleaveEvent';
import pointermoveEvent from './strings/pointermoveEvent';
import pointerupEvent from './strings/pointerupEvent';

import focusEvents from './strings/focusEvents';
import focusEvent from './strings/focusEvent';
import focusinEvent from './strings/focusinEvent';
import focusoutEvent from './strings/focusoutEvent';

import gesturechangeEvent from './strings/gesturechangeEvent';
import gestureendEvent from './strings/gestureendEvent';
import gesturestartEvent from './strings/gesturestartEvent';

import keyboardEventKeys from './strings/keyboardEventKeys';
import keydownEvent from './strings/keydownEvent';
import keyupEvent from './strings/keyupEvent';
import keypressEvent from './strings/keypressEvent';
import keyAlt from './strings/keyAlt';
import keyArrowDown from './strings/keyArrowDown';
import keyArrowUp from './strings/keyArrowUp';
import keyArrowLeft from './strings/keyArrowLeft';
import keyArrowRight from './strings/keyArrowRight';
import keyBackspace from './strings/keyBackspace';
import keyCapsLock from './strings/keyCapsLock';
import keyControl from './strings/keyControl';
import keyDelete from './strings/keyDelete';
import keyEnter from './strings/keyEnter';
import keyEscape from './strings/keyEscape';
import keyInsert from './strings/keyInsert';
import keyMeta from './strings/keyMeta';
import keyPause from './strings/keyPause';
import keyScrollLock from './strings/keyScrollLock';
import keyShift from './strings/keyShift';
import keySpace from './strings/keySpace';
import keyTab from './strings/keyTab';

import animationDuration from './strings/animationDuration';
import animationDurationLegacy from './strings/animationDurationLegacy';
import animationDelay from './strings/animationDelay';
import animationDelayLegacy from './strings/animationDelayLegacy';
import animationName from './strings/animationName';
import animationNameLegacy from './strings/animationNameLegacy';
import animationEndEvent from './strings/animationEndEvent';
import animationEndEventLegacy from './strings/animationEndEventLegacy';
import transitionDuration from './strings/transitionDuration';
import transitionDurationLegacy from './strings/transitionDurationLegacy';
import transitionDelay from './strings/transitionDelay';
import transitionDelayLegacy from './strings/transitionDelayLegacy';
import transitionEndEvent from './strings/transitionEndEvent';
import transitionEndEventLegacy from './strings/transitionEndEventLegacy';
import transitionProperty from './strings/transitionProperty';
import transitionPropertyLegacy from './strings/transitionPropertyLegacy';

import addEventListener from './strings/addEventListener';
import removeEventListener from './strings/removeEventListener';

import bezierEasings from './strings/bezierEasings';

import offsetHeight from './strings/offsetHeight';
import offsetWidth from './strings/offsetWidth';
import scrollHeight from './strings/scrollHeight';
import scrollWidth from './strings/scrollWidth';

import userAgentData from './strings/userAgentData';
import userAgent from './strings/userAgent';

// boolean
import isMobile from './boolean/isMobile';
import isApple from './boolean/isApple';
import isFirefox from './boolean/isFirefox';
import support3DTransform from './boolean/support3DTransform';
import supportPassive from './boolean/supportPassive';
import supportTransform from './boolean/supportTransform';
import supportTouch from './boolean/supportTouch';
import supportAnimation from './boolean/supportAnimation';
import supportTransition from './boolean/supportTransition';

// attributes
import getAttribute from './attr/getAttribute';
import getAttributeNS from './attr/getAttributeNS';
import hasAttribute from './attr/hasAttribute';
import hasAttributeNS from './attr/hasAttributeNS';
import setAttribute from './attr/setAttribute';
import setAttributeNS from './attr/setAttributeNS';
import removeAttribute from './attr/removeAttribute';
import removeAttributeNS from './attr/removeAttributeNS';

// class
import addClass from './class/addClass';
import removeClass from './class/removeClass';
import hasClass from './class/hasClass';

// event
import on from './event/on';
import off from './event/off';
import one from './event/one';

// misc
import ArrayFrom from './misc/ArrayFrom';
import Data, { getInstance } from './misc/data';
import distinct from './misc/distinct';
import emulateAnimationEnd from './misc/emulateAnimationEnd';
import emulateAnimationEndLegacy from './misc/emulateAnimationEndLegacy';
import emulateTransitionEnd from './misc/emulateTransitionEnd';
import emulateTransitionEndLegacy from './misc/emulateTransitionEndLegacy';
import Float32ArrayFrom from './misc/Float32ArrayFrom';
import Float64ArrayFrom from './misc/Float64ArrayFrom';
import focus from './misc/focus';
import normalizeOptions from './misc/normalizeOptions';
import normalizeValue from './misc/normalizeValue';
import ObjectAssign from './misc/ObjectAssign';
import ObjectKeys from './misc/ObjectKeys';
import ObjectValues from './misc/ObjectValues';
import passiveHandler from './misc/passiveHandler';
import passiveHandlerLegacy from './misc/passiveHandlerLegacy';
import reflow from './misc/reflow';
import setElementStyle from './misc/setElementStyle';
import Timer from './misc/timer';
import tryWrapper from './misc/tryWrapper';

// get
import getBoundingClientRect from './get/getBoundingClientRect';
import getDocument from './get/getDocument';
import getDocumentBody from './get/getDocumentBody';
import getDocumentElement from './get/getDocumentElement';
import getDocumentHead from './get/getDocumentHead';
import getElementAnimationDuration from './get/getElementAnimationDuration';
import getElementAnimationDurationLegacy from './get/getElementAnimationDurationLegacy';
import getElementAnimationDelayLegacy from './get/getElementAnimationDelayLegacy';
import getElementAnimationDelay from './get/getElementAnimationDelay';
import getElementStyle from './get/getElementStyle';
import getElementTransitionDuration from './get/getElementTransitionDuration';
import getElementTransitionDurationLegacy from './get/getElementTransitionDurationLegacy';
import getElementTransitionDelay from './get/getElementTransitionDelay';
import getElementTransitionDelayLegacy from './get/getElementTransitionDelayLegacy';
import getNodeScroll from './get/getNodeScroll';
import getParentNode from './get/getParentNode';
import getRectRelativeToOffsetParent from './get/getRectRelativeToOffsetParent';
import getWindow from './get/getWindow';

// is
import isArray from './is/isArray';
import isDocument from './is/isDocument';
import isCustomElement from './is/isCustomElement';
import isElement from './is/isElement';
import isElementInScrollRange from './is/isElementInScrollRange';
import isElementInViewport from './is/isElementInViewport';
import isElementsArray from './is/isElementsArray';
import isHTMLCollection from './is/isHTMLCollection';
import isHTMLElement from './is/isHTMLElement';
import isHTMLImageElement from './is/isHTMLImageElement';
import isMedia from './is/isMedia';
import isNode from './is/isNode';
import isNodeList from './is/isNodeList';
import isRTL from './is/isRTL';
import isScaledElement from './is/isScaledElement';
import isShadowRoot from './is/isShadowRoot';
import isString from './is/isString';
import isSVGElement from './is/isSVGElement';
import isTableElement from './is/isTableElement';
import isWindow from './is/isWindow';

// selectors
import elementNodes from './selectors/elementNodes';
import parentNodes from './selectors/parentNodes';
import closest from './selectors/closest';
import querySelector from './selectors/querySelector';
import getCustomElements from './selectors/getCustomElements';
import querySelectorAll from './selectors/querySelectorAll';
import getElementsByTagName from './selectors/getElementsByTagName';
import getElementsByClassName from './selectors/getElementsByClassName';

import Version from './misc/version';

const SHORTER = {
  ariaChecked,
  ariaDescribedBy,
  ariaExpanded,
  ariaHidden,
  ariaLabel,
  ariaLabelledBy,
  ariaModal,
  ariaPressed,
  ariaSelected,
  nativeEvents,
  abortEvent,
  blurEvent,
  moveEvent,
  changeEvent,
  errorEvent,
  resetEvent,
  resizeEvent,
  scrollEvent,
  submitEvent,
  loadEvent,
  unloadEvent,
  readystatechangeEvent,
  beforeunloadEvent,
  orientationchangeEvent,
  contextmenuEvent,
  DOMContentLoadedEvent,
  DOMMouseScrollEvent,
  selectEvent,
  selectendEvent,
  selectstartEvent,
  mouseClickEvents,
  mouseclickEvent,
  mousedblclickEvent,
  mousedownEvent,
  mouseupEvent,
  mousehoverEvent,
  mouseHoverEvents,
  mouseenterEvent,
  mouseleaveEvent,
  mouseinEvent,
  mouseoutEvent,
  mousemoveEvent,
  mousewheelEvent,
  mouseSwipeEvents,
  touchEvents,
  touchstartEvent,
  touchmoveEvent,
  touchcancelEvent,
  touchendEvent,
  pointercancelEvent,
  pointerdownEvent,
  pointerleaveEvent,
  pointermoveEvent,
  pointerupEvent,
  focusEvents,
  focusEvent,
  focusinEvent,
  focusoutEvent,
  gesturechangeEvent,
  gestureendEvent,
  gesturestartEvent,
  bezierEasings,
  animationDuration,
  animationDurationLegacy,
  animationDelay,
  animationDelayLegacy,
  animationName,
  animationNameLegacy,
  animationEndEvent,
  animationEndEventLegacy,
  transitionDuration,
  transitionDurationLegacy,
  transitionDelay,
  transitionDelayLegacy,
  transitionEndEvent,
  transitionEndEventLegacy,
  transitionProperty,
  transitionPropertyLegacy,
  isMobile,
  isApple,
  isFirefox,
  support3DTransform,
  supportPassive,
  supportTransform,
  supportTouch,
  supportAnimation,
  supportTransition,
  addEventListener,
  removeEventListener,
  keyboardEventKeys,
  keydownEvent,
  keypressEvent,
  keyupEvent,
  keyAlt,
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyBackspace,
  keyCapsLock,
  keyControl,
  keyDelete,
  keyEnter,
  keyEscape,
  keyInsert,
  keyMeta,
  keyPause,
  keyScrollLock,
  keyShift,
  keySpace,
  keyTab,
  offsetHeight,
  offsetWidth,
  scrollHeight,
  scrollWidth,
  userAgentData,
  userAgent,
  addClass,
  removeClass,
  hasClass,
  on,
  off,
  one,
  distinct,
  Data,
  Timer,
  getInstance,
  emulateAnimationEnd,
  emulateAnimationEndLegacy,
  emulateTransitionEnd,
  emulateTransitionEndLegacy,
  isElementInScrollRange,
  isElementInViewport,
  passiveHandler,
  passiveHandlerLegacy,
  getElementAnimationDuration,
  getElementAnimationDurationLegacy,
  getElementAnimationDelay,
  getElementAnimationDelayLegacy,
  getElementTransitionDuration,
  getElementTransitionDurationLegacy,
  getElementTransitionDelay,
  getElementTransitionDelayLegacy,
  getNodeScroll,
  getParentNode,
  getRectRelativeToOffsetParent,
  getWindow,
  isArray,
  isString,
  isCustomElement,
  isElement,
  isNode,
  isHTMLElement,
  isHTMLImageElement,
  isSVGElement,
  isNodeList,
  isHTMLCollection,
  isScaledElement,
  isTableElement,
  isShadowRoot,
  isDocument,
  isElementsArray,
  isWindow,
  isMedia,
  isRTL,
  elementNodes,
  parentNodes,
  closest,
  querySelector,
  getCustomElements,
  querySelectorAll,
  getElementsByClassName,
  getElementsByTagName,
  normalizeValue,
  normalizeOptions,
  tryWrapper,
  reflow,
  focus,
  ArrayFrom,
  Float32ArrayFrom,
  Float64ArrayFrom,
  ObjectAssign,
  ObjectKeys,
  ObjectValues,
  getBoundingClientRect,
  getDocument,
  getDocumentBody,
  getDocumentElement,
  getDocumentHead,
  getElementStyle,
  setElementStyle,
  hasAttribute,
  hasAttributeNS,
  getAttribute,
  getAttributeNS,
  setAttribute,
  setAttributeNS,
  removeAttribute,
  removeAttributeNS,
  Version,
};

export default SHORTER;
