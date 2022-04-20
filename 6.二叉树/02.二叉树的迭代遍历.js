function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 力扣144.二叉树的前序遍历
var preorderTraversal = function (root, res = []) {
  if (!root) return res
  const stack = [root]
  let cur = null
  while (stack.length) {
    cur = stack.pop()
    res.push(cur.val)
    cur.right && res.push(cur.right)
    cur.left && res.push(cur.left)
  }
  return res
}

// 力扣94.二叉树的中序遍历
var inorderTraversal = function (root, res = []) {
  const stack = []
  let cur = root
  while (stack.length || cur) {
    if (cur) {
      // 压左
      stack.push(cur)
      cur = cur.left
    } else {
      // 出中
      cur = stack.pop()
      res.push(cur.val)
      // 右
      cur = cur.right
    }
  }
  return res
}

// 力扣145.二叉树的后序遍历
var postorderTraversal = function (root, res = []) {
  if (!root) return res
  const stack = [root]
  let cur = null
  while (stack.length) {
    cur = stack.pop()
    res.push(cur.val)
    cur.left && stack.push(cur.left)
    cur.right && stack.push(cur.right)
  }
  return res.reverse()
}
