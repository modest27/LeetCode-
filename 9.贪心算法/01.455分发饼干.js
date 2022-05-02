var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let res = 0
  let index = s.length - 1
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index >= g[i]]) {
      res++
      index--
    }
  }
  return
}
