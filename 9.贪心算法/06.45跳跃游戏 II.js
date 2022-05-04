var jump = function (nums) {
  let cur = 0
  let next = 0
  let step = 0
  for (let i = 0; i < nums.length - 1; i++) {
    next = Math.max(next, nums[i] + i)
    if (i === cur) {
      cur = next
      step++
    }
  }
  return step
}
