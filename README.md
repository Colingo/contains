# contains

<!-- [![build status][1]][2]  -->
[![dependency status][3]][4]

[![browser support][5]][6]

Check whether a DOM element is contained by another one

## Example

```js
var contains = require("contains")

var container = document.getElementById("container")
var someElem = document.getElementById("someElem")

// does container contain someElem as a child?
var contained = contains(container, someElem)
```

## Installation

`npm install contains`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Colingo/contains.png
  [2]: http://travis-ci.org/Colingo/contains
  [3]: http://david-dm.org/Colingo/contains/status.png
  [4]: http://david-dm.org/Colingo/contains
  [5]: http://ci.testling.com/Colingo/contains.png
  [6]: http://ci.testling.com/Colingo/contains
