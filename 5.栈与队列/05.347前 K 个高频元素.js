var topKFrequent = (nums, k) => {
  let s = new Map()
  nums.forEach(n => {
    s.set(n, (s.get(n) || 0) + 1)
  })
  let res = Array.from(s).sort((a, b) => b[1] - a[1])
  return res.slice(0,k).map(n=>n[0])
}