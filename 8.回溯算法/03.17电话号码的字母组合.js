var letterCombinations = function (digits) {
  let k = digits.length
  let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  if (!k) return []
  if (k === 1) return map[digits].split('')

  let path = [],
    result = []
  backtracking(digits, k, 0)
  return result

  function backtracking(digits, k, a) {
    if (path.length === k) {
      result.push(path.join(''))
      return
    }

    for (const v of map[digits[a]]) {
      path.push(v)
      backtracking(digits, k, a + 1)
      path.pop()
    }
  }
}
