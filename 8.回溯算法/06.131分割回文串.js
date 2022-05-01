const isback = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }
  return true
}

var partition = function (s) {
  let path = [],
    res = []
  let len = s.length
  backtracking(0)
  return res

  function backtracking(i) {
    if (i >= len) {
      res.push(Array.from(path))
      return
    }
    for (let j = i; j < len; j++) {
      if (!isback(s, i, j)) continue
      path.push(s.substr(i, j - i + 1))
      backtracking(j + 1)
      path.pop()
    }
  }
}
