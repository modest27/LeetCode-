var selectionSort = function (arr) {
  let len = arr.length
  // 外层从0开始取元素为最小值
  for (let j = 0; j < len - 1; j++) {
    let min = j
    // 内层从j+1个元素开始寻找最小值
    for (let i = min + 1; i < len; i++) {
      if (arr[min] > arr[i]) {
        min = i
      }
    }
    // 找到本次最小值后和开始决定的最小值进行一个交换
    ;[arr[min], arr[j]] = [arr[j], arr[min]]
  }
  return arr
}

// const arr = [5, 2, 6, 9, 3, 4, 1]
// console.log(selectionSort(arr))
