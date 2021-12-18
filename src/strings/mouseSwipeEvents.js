/**
 * A global namespace for mouse events equivalent to touch events.
 * @type {Record<string, string>}
 */
const mouseSwipeEvents = {
  start: 'mousedown', end: 'mouseup', move: 'mousemove', cancel: 'mouseleave',
};
export default mouseSwipeEvents;
