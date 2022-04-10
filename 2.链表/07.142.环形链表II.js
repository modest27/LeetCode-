function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var detectCycle = function (head) {
  if (!head || !head.next) return null
  let fast = head.next.next, slow = head.next

  while (fast && fast.next && fast !== slow) {
    fast = fast.next.next
    slow = slow.next
  }
  if (!fast || !fast.next) return null
  // 相遇了
  slow = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}