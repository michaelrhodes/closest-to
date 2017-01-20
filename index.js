var abs = Math.abs

function closest (target, numbers) {
  var closest = Infinity
  var difference = 0
  var winner = null

  numbers = unique(numbers.sort(function (a, b) {
    return total(a) - total(b)
  }))

  for (var i = 0, l = numbers.length; i < l; i++) {  
    difference = abs(total(target) - total(numbers[i]))
    if (difference >= closest) break
    closest = difference
    winner = numbers[i]
  }

  return winner
}

function unique (target) {
  return target.filter(function (v, i, arr) {
    return arr.lastIndexOf(v) === i
  })
}

function total (target) {
  if (!Array.isArray(target)) {
    return target
  }
  return target.reduce(function(a, b) {
    return a + b
  }, 0)
}

module.exports = closest
