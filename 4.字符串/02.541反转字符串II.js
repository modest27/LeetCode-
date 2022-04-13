var reserveStr = function (s, k) {
  let resStr = s.split('')
  let len = s.length

  for (let i = 0; i < len; i += 2 * k){
    let l = i - 1, r = i + k > len ? len : i + k
    while (++l < --r) {
      [resStr[l],resStr[r]] = [resStr[r],resStr[l]]
    }
  }
  
  return resStr.join('')
}