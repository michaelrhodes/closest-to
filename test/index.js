var run = require('tape').test
var closest = require('../')

run('it works', function(test) {
  var numbers = [1204, 12.3, 2, 10, 50, 23, 11, 33, 1e9]
  var winner = closest(40, numbers)
  test.equal(winner, 33)
  test.end()
})

run('it returns the first closest number', function(test) {
  var winner = closest(40, [30, 50])
  test.equal(winner, 30)
  test.end()
})
