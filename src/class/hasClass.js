/**
 * Check class in `HTMLElement.classList`.
 *
 * @param {HTMLElement | Element} element target
 * @param {string} classNAME to check
 * @returns {boolean}
 */
export default function hasClass(element, classNAME) {
  return element.classList.contains(classNAME);
}
