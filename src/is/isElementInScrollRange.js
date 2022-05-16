import getBoundingClientRect from '../get/getBoundingClientRect';
import getDocumentElement from '../get/getDocumentElement';
import isNode from './isNode';

/**
 * Utility to determine if an `HTMLElement`
 * is partially visible in viewport.
 *
 * @param {HTMLElement | Element} element target
 * @return {boolean} the query result
 */
const isElementInScrollRange = (element) => {
  if (!element || !isNode(element)) return false;

  const { top, bottom } = getBoundingClientRect(element);
  const { clientHeight } = getDocumentElement(element);
  return top <= clientHeight && bottom >= 0;
};

export default isElementInScrollRange;
