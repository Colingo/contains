var DOCUMENT_POSITION_CONTAINED_BY = 16

module.exports = contains

function contains(container, elem) {
    if (container.contains) {
        return container.contains(elem)
    }

    var comparison = container.compareDocumentPosition(elem)

    return comparison === 0 || comparison & DOCUMENT_POSITION_CONTAINED_BY
}
