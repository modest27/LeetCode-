var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1]    
  }

  let nums1Set = new Set(nums1)
  let resSet = new Set()

  for (let i = nums2.length - 1; i >= 0; i--){
    nums1Set.has(nums2[i]) && resSet.add(nums2[i])
  }

  return Array.from(resSet)
}