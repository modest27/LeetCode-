let nums = [-1, 0, 3, 5, 9, 12], target = 9

function search(nums, target) {
  let left = 0, right = nums.length - 1
  
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    
    if (target < nums[mid]) {
      right = mid -1
    } else if (target > nums[mid]) {
      left=mid+1
    } else {
      return mid
    }
  }

  return -1
}

let num = search(nums, target)
console.log(num);