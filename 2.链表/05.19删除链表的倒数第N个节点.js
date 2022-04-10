function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var removeNth = function (head) {
  let ret = new ListNode(0, head),
    fast = slow = ret
  
  while (n--) fast = fast.next
  
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next

  return ret.next
}