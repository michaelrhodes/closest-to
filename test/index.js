var run = require('tape').test
var closest = require('../')

run('it works', function(test) {
  var numbers = [1204, 12.3, 2, 10, 50, 23, 11, 33, 1e9]
  var winner = closest(40, numbers)
  test.equal(winner, 33)
  test.end()
})

run('it works with negatives and floats', function(test) {
  var winner = closest(-1.25, [2, 0, -1.5, -0.75])
  test.equal(winner, -1.5)
  test.end()
})

run('it returns the first closest number', function(test) {
  var winner = closest(40, [30, 50])
  test.equal(winner, 30)
  test.end()
})

run('it works with multidimensional arrays', function(test) {
  var winner = closest([1, 2], [[3, 4], [1, 1], [2, 3]])
  test.deepEqual(winner, [1, 1])
  test.end()
})

run('it handles arrays with duplicate values', function(test) {
  var winner = closest(9, [0, 1, 4, 7, 7, 7, 10])
  test.equal(winner, 10)
  test.end()
})
