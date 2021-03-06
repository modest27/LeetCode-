var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let resSet = new Array(26).fill(0)
  let base = 'a'.charCodeAt()

  for (const i of s) {
    resSet[i.charCodeAt() - base]++
  }

  for (const i of t) {
    if (!resSet[i.charCodeAt() - base]) return false
    resSet[i.charCodeAt() - base]--
  }
  return true
}