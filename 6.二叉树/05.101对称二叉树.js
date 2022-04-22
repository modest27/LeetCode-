function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var isSymmetric = function (root) {
  var compareNode = (left, right) => {
    if ((left === null && right !== null) || (left !== null && right === null)) {
      return false
    } else if (left === null && right === null) {
      return true
    } else if (left.val !== right.val) {
      return false
    }
    let outside = compareNode(left.left, right.right)
    let inside = compareNode(left.right, right.left)
    return outside && inside
  }
  if (!root) return true
  return compareNode(root.left, root.right)
}
