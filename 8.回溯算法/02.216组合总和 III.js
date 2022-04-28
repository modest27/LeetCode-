var combinationSum3 = function (k, n) {
  let path = []
  let result = []
  backtacking(k, n, 1, 0)
  return result

  function backtacking(k, n, startIndex, sum) {
    // 剪枝
    if (sum > n) return
    // 递归结束条件
    if (sum === n && path.length === k) {
      result.push([...path])
      return
    }
    // 单层递归逻辑
    // 9 - (k - path.length) + 1 剪枝，表示至少需要从什么位置开始才可能有满足的结果
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i)
      sum += i
      backtacking(k, n, i + 1, sum)
      // 回溯
      path.pop()
      sum -= i
    }
  }
}
