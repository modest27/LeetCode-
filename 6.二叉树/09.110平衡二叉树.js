function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var isBanance = root => {
  const getDepth = node => {
    // 终止条件
    if (!node) return 0
    // 单层递归逻辑
    let leftH = getDepth(node.left)
    if (leftH === -1) return 0
    let rightH = getDepth(node.right)
    if (rightH === -1) return 0
    if (Math.abs(leftH - rightH) > 1) {
      return -1
    } else {
      return 1 + Math.max(leftH, rightH)
    }
  }
  return !(getDepth(root) === -1)
}
