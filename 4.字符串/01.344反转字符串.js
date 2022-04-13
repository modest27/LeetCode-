var reserveString = function (s) {
  // 方法一
  // return s.reserve()

  // 方法二: 双指针法
  let l = -1, r = s.length
  while (++l < --r) {
    [s[l],s[r]] = [s[r],s[l]]
  }
  return s
}