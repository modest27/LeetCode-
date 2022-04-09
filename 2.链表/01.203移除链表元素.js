function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined? null : next)
}

var removeElement = function (head, val) {
  let ret = new ListNode(0, head)
  let cur = ret

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }

  return ret.next
}