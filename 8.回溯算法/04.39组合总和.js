var combinationSum = function (candidates, target) {
  let path = [],
    res = []
  candidates.sort()
  backtracking(0, 0)
  return res

  function backtracking(j, sum) {
    if (sum > target) return
    if (sum === target) {
      res.push(Array.from(path))
      return
    }

    for (let i = j; i < candidates.length; i++) {
      const n = candidates[i]
      if (n > target - sum) continue
      path.push(n)
      sum += n
      backtracking(i, sum)
      path.pop()
      sum -= n
    }
  }
}
