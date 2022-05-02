var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length
  let res = 1,
    cur = 0,
    pre = 0
  for (let i = 0; i < nums.length - 1; i++) {
    cur = nums[i + 1] - nums[i]
    if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
      res++
      pre = cur
    }
  }
  return res
}
