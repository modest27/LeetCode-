// 1.确定dp[i]下标值的含义
// 2.确定dp递推公式
// 3.确定dp初始值
// 4.确定递推顺序
// 5.推导递推结果

var fib = function (n) {
  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
