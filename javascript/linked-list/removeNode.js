const removeNode = function (head, n) {
  if (head === null) {
    return null
  }

  let current = head
  if (n === 0) {
    return head.next
  }

  for (let i = 0; i < n - 1; i++) {
    current = current.next
  }

  current.next = current.next.next
  return head
}
