let path = []
let result = []
var combine = function (n, k) {
  result = []
  combineHelper(n, k, 1)
  return result
}

var combineHelper = function (n, k, startIndex) {
  //  递归结束条件
  if (path.length === k) {
    result.push([...path])
    return
  }
  // 单层递归逻辑
  // n - (k - path.length) + 1 剪枝，表示至少需要从什么位置开始才可能有满足的结果
  for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
    path.push(i)
    combineHelper(n, k, i + 1)
    // 回溯
    path.pop()
  }
}
