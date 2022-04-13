var reverseWord = function (s) {
  let strArr = Array.from(s)
  let len = strArr.length
  removeSpace(strArr)
  reverseStr(strArr, 0, len - 1)
  let start = 0
  for (let i = 0; i <= len; i++){
    if (strArr[i] === '' || i === len) {
      reverseStr(strArr, start, i-1)
      start = i+1
    }
  }

  return strArr.join('')
}

// 去除多余空格
var removeSpace = function (strArr) {
  let fast = 0
  let slow = 0

  let len = strArr.length

  while (fast < len) {
    if (strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
      fast++
    } else {
      strArr[slow++] = strArr[fast++]
    }
  }

  strArr.length = strArr[slow-1]===' '? slow-1 : slow
}

// 反转
var reverseStr = function (strArr,start,end) {
  let l = start, r = end
  while (l < r) {
    [strArr[l], strArr[r]] = [strArr[r], strArr[l]]
    l++
    r--
  }
}