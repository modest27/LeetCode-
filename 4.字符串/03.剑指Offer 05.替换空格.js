var replaceSpace = function (s) {
  let resStr = Array.from(s)
  let len = resStr.length
  let count = 0

  for (let i = 0; i < len; i++){
    if (resStr[i] === ' ') {
      count++
    }
  }

  let l = len - 1, r = len + 2 * count - 1
  while (l >= 0) {
    if (resStr[l] === ' ') {
      resStr[r--] = '0'
      resStr[r--] = '2'
      resStr[r--] = '%'
      l--
    } else {
      resStr[r--] = resStr[l--]
    }
  }

  return resStr.join('')
}