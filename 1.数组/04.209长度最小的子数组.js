let nums = [2,6,4,5,1,3],target = 9

var minSubArrayLen = function (target, nums) {
  let len = nums.length
  let res = len + 1
  let l = r = sum = 0

  while (r < len) {
    sum += nums[r++]
    while (sum >= target) {
      res = res > r - l ? r - l : res
      sum-=nums[l++]
    }
  }

  return res > len ? 0 : res
}

console.log(minSubArrayLen(target,nums));