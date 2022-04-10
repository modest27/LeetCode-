var generateMatrix = function (n) {
  let startX = startY = 0
  let loop = Math.floor(n / 2)
  let mid = Math.floor(n / 2)
  let offset = 1
  let count = 1
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  
  while (loop--) {
    let row = startX, col = startY

    for (; col < startY + n - offset; col++){
      res[row][col] = count++
    }

    for (; row < startX + n - offset; row++){
      res[row][col] = count++
    }

    for (; col > startY; col--){
      res[row][col] = count++
    }

    for (;row > startX; row--){
      res[row][col] = count++
    }

    startX++
    startY++

    offset += 2

  }

  if (n % 2 === 1) {
    res[mid][mid] = count
  }

  return res
}

console.log(generateMatrix(3));