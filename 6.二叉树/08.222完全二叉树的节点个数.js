function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 递归法
var countNode = function (root) {
  const getCount = function (node) {
    if (node === null) return 0
    let leftCount = getCount(node.left)
    let rightCount = getCount(node.right)
    let count = 1 + leftCount + rightCount
    return count
  }
  return getCount(root)
}

// 层序遍历法
var countNode1 = function (root) {
  if (!root) return 0
  const queue = [root]
  let count = 0
  while (queue.length) {
    let len = queue.length
    while (len--) {
      const node = queue.shift()
      count++
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return count
}
