var evalRPN = function (tokens) {
  const stack = []
  const s = new Map([
    ['+', (a, b) => b * 1 + a * 1],
    ['-', (a, b) => b - a],
    ['*', (a, b) => b * a],
    ['/', (a, b) => (b / a) | 0]
  ])
  for (const i of tokens) {
    if (!s.has(i)) {
      stack.push(i)
      continue
    }
    stack.push(s.get(i)(stack.pop(),stack.pop()))
  }
  return stack.pop()
}