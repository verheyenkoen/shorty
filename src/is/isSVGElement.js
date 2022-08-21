/**
 * Check if an element is an `<svg>` or any other SVG element,
 * an equivalent to `SOMETHING instanceof SVGElement`.
 *
 * @param element the target element
 * @returns the query result
 */
const isSVGElement = (element) => (element && element.constructor.name.includes('SVG')) || false;
export default isSVGElement;
//# sourceMappingURL=isSVGElement.js.map