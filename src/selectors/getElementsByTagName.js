import getDocument from '../get/getDocument';

/**
 * Shortcut for `HTMLElement.getElementsByTagName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByTagName`.
 *
 * @param {string} selector the tag name
 * @param {(HTMLElement | Element | Document)=} parent optional Element to look into
 * @return {HTMLCollectionOf<HTMLElement | Element>} the 'HTMLCollection'
 */
export default function getElementsByTagName(selector, parent) {
  const lookUp = typeof parent !== 'object' ? getDocument() : parent;
  return lookUp.getElementsByTagName(selector);
}
