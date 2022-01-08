import getDocument from './getDocument';
/**
 * Returns the `document.head` or the `<head>` element.
 *
 * @param {(Node | SHORTER.ElementNodes)=} node
 * @returns {HTMLElement | HTMLHeadElement}
 */
export default function getDocumentHead(node) {
  return getDocument(node).head;
}
