function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var mindepth = root => {
  if (!root) return 0
  const queue = [root]
  let dep = 0
  while (queue.length) {
    let len = queue.length
    dep++
    while (len--) {
      const node = queue.shift()
      if (!node.left && !node.right) return dep
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return dep
}
