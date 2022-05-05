var lemonadeChange = function (bills) {
  let fiveCount = 0
  let tenCOunt = 0

  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i]

    if (bill === 5) {
      fiveCount++
    } else if (bill === 10) {
      if (fiveCount > 0) {
        fiveCount--
        tenCOunt++
      } else {
        return false
      }
    } else {
      if (fiveCount > 0 && tenCOunt > 0) {
        fiveCount--
        tenCOunt--
      } else {
        if (fiveCount >= 3) {
          fiveCount -= 3
        } else {
          return false
        }
      }
    }
  }

  return true
}
