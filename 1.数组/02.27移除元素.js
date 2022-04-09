let nums = [1,5,9,7,6,3,12,9,6],val = 9

let removeElement = (nums, val) => {
  let k = 0
  for (let i = 0; i < nums.length; i++){
    if (nums[i] !== val) {
      nums[k++]=nums[i]
    }
  }

  return k
}

console.log(removeElement(nums,val));