function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var maxDepth = root => {
  var getMax = node => {
    // 终止条件
    if (node === null) return 0
    // 单层遍历逻辑
    let leftCount = getMax(node.left)
    let rightCount = getMax(node.right)
    let depth = 1 + Math.max(leftCount, rightCount)
    return depth
  }
  return getMax(root)
}
