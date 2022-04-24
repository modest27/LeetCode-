var insertionSort = function (arr) {
  let len = arr.length
  // 最外层，从第2个元素开始，逐步向前局部有序的元素进行插入
  for (let i = 1; i < len; i++) {
    let temp = arr[i]
    let j = i
    // 内层循环，逐个比较，进行位移
    while (arr[j - 1] > temp && j > 0) {
      arr[j] = arr[j - 1]
      j--
    }
    // 内层停止比较后，就进行插入
    arr[j] = temp
  }
  return arr
}

// const arr = [5, 2, 6, 9, 3, 4, 1]
// console.log(insertionSort(arr))
