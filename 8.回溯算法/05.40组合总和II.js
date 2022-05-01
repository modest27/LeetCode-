var combinationSum2 = function (candidates, target) {
  let path = [],
    result = []
  let len = candidates.length
  candidates.sort()
  backtracking(0, 0)
  return result

  function backtracking(sum, i) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      result.push(Array.from(path))
      return
    }
    let f = -1
    for (let j = i; j < len; j++) {
      const n = candidates[j]
      if (n > target - sum || n === f) continue
      path.push(n)
      sum += n
      f = n
      backtracking(sum, j + 1)
      path.pop()
      sum -= n
    }
  }
}
