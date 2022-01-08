/**
 * Returns an `{x,y}` object with the target
 * `Element` / `Node` scroll position.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {SHORTER.ElementNodes | Window} element target node / element
 * @returns {{x: number, y: number}} the scroll tuple
 */
export default function getNodeScroll(element) {
  const isWin = 'scrollX' in element;
  const x = isWin ? element.scrollX : element.scrollLeft;
  const y = isWin ? element.scrollY : element.scrollTop;

  return { x, y };
}
