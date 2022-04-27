var fastSortion = function (arr) {
  // 两数交换
  var swap = function (i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  // 选择中间枢纽
  var median = function (left, right) {
    // 取出中间值
    let center = Math.floor((left + right) / 2)
    // 判断大小，并且进行交换
    if (arr[left] > arr[center]) {
      swap(left, center)
    }
    if (arr[center] > arr[right]) {
      swap(center, right)
    }
    if (arr[left] > arr[center]) {
      swap(left, center)
    }
    // 将枢纽放置在最右边的左边一个位置挨着，方便后续交换
    swap(center, right - 1)
    return arr[right - 1]
  }

  //快速排序核心部分
  var quick = function (left, right) {
    // 1.结束条件
    if (left >= right) return
    // 2.获取枢纽
    let pivot = median(left, right)
    // 3.定义变量，记录当前找到的位置
    let i = left
    let j = right - 1
    // 4.开始查找，并交换
    while (i < j) {
      while (arr[++i] < pivot) {}
      while (arr[--j] > pivot) {}
      if (i < j) {
        // 证明还没有结束，并且找到了，两者进行交换
        swap(i, j)
      } else {
        break
      }
    }
    // 5.证明i和j重合了，就结束查找，将枢纽放置正确的位置
    swap(i, right - 1)
    // 6.分而治之思想，分别对左右进行查找排序
    quick(left, i - 1)
    quick(i + 1, right)
  }

  // 调用函数
  quick(0, arr.length - 1)

  return arr
}

// const arr = [5, 2, 6, 9, 3, 4, 1]
// console.log(fastSortion(arr))
