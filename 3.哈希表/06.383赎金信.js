var canConstruct = function (ransomNote, magazine) {
  let strArr = new Array(26).fill(0)
  let base = 'a'.charCodeAt()

  for (const s of magazine) {
    strArr[s.charCodeAt() - base]++    
  }

  for (const i of ransomNote) {
    if (strArr[i.charCodeAt() - base]) return false
    strArr[i.charCodeAt() - base]--
  }

  return true
}