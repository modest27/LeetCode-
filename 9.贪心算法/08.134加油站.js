var canCompleteCircuit = function (gas, cost) {
  let len = gas.length
  let curSum = 0
  let totalSum = 0
  let start = 0

  for (let i = 0; i < len; i++) {
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    if (curSum < 0) {
      curSum = 0
      start = i + 1
    }
  }

  if (totalSum < 0) return -1
  return start
}
