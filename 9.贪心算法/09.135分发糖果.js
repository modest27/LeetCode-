var candy = function (ratings) {
  let candys = new Array(ratings.length).fill(0)

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candys[i] = Math.max(candy[i], candy[i + 1] + 1)
    }
  }

  let count = candys.reduce((a, b) => a + b)
  return count
}
