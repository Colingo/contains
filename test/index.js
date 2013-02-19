var test = require("tape")
var document = require("global/document")

var contains = require("../index")

test("contains returns boolean", function (assert) {
    var div1 = document.createElement("div")
    var div2 = document.createElement("div")
    var div3 = document.createElement("div")

    div1.appendChild(div2)

    assert.equal(contains(div1, div2), true)
    assert.equal(contains(div1, div3), false)

    assert.end()
})
