function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var leveOrder = function (root) {
  const queue = [root]
  const res = []
  if (!root) return res

  while (queue.length !== 0) {
    let len = queue.length
    const curLevel = []
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(curLevel)
  }
  return res
}
