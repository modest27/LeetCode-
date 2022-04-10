function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

var reverseList = function (head) {
  if (!head || !head.next) return head
  let temp = null, pre = null, cur = head

  while (cur) {
    temp = cur.next
    cur.next = pre // 就这一步是反转链表
    pre = cur
    cur = temp
  }

  return pre
}