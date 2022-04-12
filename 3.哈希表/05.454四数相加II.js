var fourCountSum = function (nums1, nums2, nums3, nums4) {
  let m = new Map()
  let count = 0

  for (const n1 of nums1) {
    for (const n2 of nums2) {
      let sum = n1 + n2
      m.set((m.get(sum) || 0) + 1)
    }
  }

  for (const n3 of nums3) {
    for (const n4 of nums4) {
      let sum = n3 + n4
      count += (m.get(0 - sum) || 0)
    }
  }

  return count
}