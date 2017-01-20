# closest-to
closest-to finds the closest value to a given target in a sorted array of numbers

[![Build status](https://travis-ci.org/michaelrhodes/closest-to.svg?branch=master)](https://travis-ci.org/michaelrhodes/closest-to)

[![Browser support](https://ci.testling.com/michaelrhodes/closest-to.png)](https://ci.testling.com/michaelrhodes/closest-to)

## Install
```sh
npm install closest-to
```

### Usage
```js
require('closest-to')(needle, haystack, [returnIndex])
require('closest-to/nd')(needle, haystack, [returnIndex])
```
```js
closest(10, [1, 3, 5, 7, 9])
> 9
closest(10, [1, 3, 5, 7, 9], true)
> 4
```
```js
ndclosest([1, 2], [[1, 1], [2, 3], [3, 4]])
> [1, 1]

ndclosest([1, 2], [[1, 1], [2, 3], [3, 4]], true)
> 0
```

### License
[MIT](http://opensource.org/licenses/MIT)
