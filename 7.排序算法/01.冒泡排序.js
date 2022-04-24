var bubbleSort = function (arr) {
  let len = arr.length
  // 外层表示比较到最后第几个元素
  for (let j = len - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }
  return arr
}

// const arr = [5, 2, 6, 9, 3, 4, 1]
// console.log(bubbleSort(arr))
