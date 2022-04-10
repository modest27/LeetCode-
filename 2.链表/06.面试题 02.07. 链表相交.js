function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var getLen = function (head) {
  let len = 0, cur = head
  while (cur) {
    len++
    cur = cur.next
  }
  return len
}

var getSameNode = function (headA, headB) {
  let curA = headA, curB = headB
  let lenA = getLen(headA), lenB = getLen(headB)

  if (lenA < lenB) {
    [curA, curB] = [curB, curA]
    [lenA, lenB] = [lenB, lenA]
  }

  let i = lenA - lenB
  while (i--) {
    curA = curA.next
  } 

  while (curA && curA !== curB) {
    curA = curA.next
    curB = curB.next
  }

  return curA
}