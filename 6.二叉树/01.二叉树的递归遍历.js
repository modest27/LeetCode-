function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 力扣144.二叉树的前序遍历
var preorderTraversal = function (root, res = []) {
  if (!root) return res
  res.push(root.val)
  preorderTraversal(root.left, res)
  preorderTraversal(root.right, res)
  return res
}

// 力扣94.二叉树的中序遍历
var inorderTraversal = function (root, res = []) {
  if (!root) return res
  inorderTraversal(root.left, res)
  res.push(root.val)
  inorderTraversal(root.right, res)
  return res
}

// 力扣145.二叉树的后序遍历
var postorderTraversal = function (root, res = []) {
  if (!root) return res
  postorderTraversal(root.left, res)
  postorderTraversal(root.right, res)
  res.push(root.val)
  return res
}
