var reverseList = function (head) {}

var reverseList = function (head) {
  let prev = null
  let cur = head
  while(cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head
  } 
  p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}