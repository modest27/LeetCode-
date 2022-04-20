function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 递归前序遍历写法
var reverseTree = function (root) {
  function reverse(left, right) {
    let temp = left
    left = right
    right = temp
    root.left = left
    root.right = right
  }

  if (!root) return root
  reverse(root.left, root.right)
  reverseTree(root.left)
  reverseTree(root.right)
  return root
}

// 层序遍历写法
var reverseTree = function (root) {
  function reverse(root, left, right) {
    let temp = left
    left = right
    right = temp
    root.left = left
    root.right = right
  }

  const queue = [root]
  if (!root) return root
  while (queue.length) {
    let len = queue.length
    while (len--) {
      let node = queue.shift()
      reverse(node, node.left, node.right)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
}
