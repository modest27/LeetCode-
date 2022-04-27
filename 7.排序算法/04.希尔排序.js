var shellSortion = function (arr) {
  let len = arr.length
  // 初始化间隔
  let gap = Math.floor(len / 2)
  // 循环gap不断减小
  while (gap >= 1) {
    // 以gap为间隙，开始分组插入排序
    for (let i = gap; i < len; i++) {
      let temp = arr[i]
      let j = i
      while (arr[j - gap] > temp && j > gap - 1) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      // 将j的位置赋值为temp
      arr[j] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}

// const arr = [5, 2, 6, 9, 3, 4, 1]
// console.log(shellSortion(arr))
