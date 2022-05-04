var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => {
    return Math.abs(b) - Math.abs(a)
  })

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1
      k--
    }
  }

  if (k > 0 && k % 2 === 1) {
    nums[nums.length - 1] *= -1
  }
  k = 0

  return nums.reduce((a, b) => {
    return a + b
  })
}
