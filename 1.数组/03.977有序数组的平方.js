let nums = [-4,-1,0,3,10]

let sortSquares = (nums) => {
  let n = nums.length
  let res = new Array(n).fill(0)
  let i = 0, j = n - 1, k = n - 1
  
  while (i <= j) {
    let left = nums[i] ** 2
    let right = nums[j] ** 2
    if (left < right) {
      res[k--] = right
      j--
    } else {
      res[k--] = left
      i++
    }
  }

  return res
}

console.log(sortSquares(nums));