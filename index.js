var isarray = require('isarray')
var reduce = require('array-reduce')

var total = function(target) {
  if (!isarray(target)) {
    return target
  }
  return reduce(target, function(a, b) {
    return a + b
  })
}

module.exports = function(target, numbers) {
  var closest = Infinity
  var difference = 0
  var winner = null

  numbers.sort(function(a, b) {
    return total(a) - total(b)
  })

  for (var i = 0, l = numbers.length; i < l; i++) {  
    difference = Math.abs(total(target) - total(numbers[i]))
    if (difference >= closest) {
      break
    }
    closest = difference
    winner = numbers[i]
  }

  return winner
}
