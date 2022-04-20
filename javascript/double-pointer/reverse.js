/**
 *
 * @description 翻转字符串
 * @param {string} s
 * @returns {string}
 */
function reverse(s) {
  s = s.split('')
  let left = 0
  let rigth = s.length - 1
  while (left < rigth) {
    const temp = s[left]
    s[left] = s[rigth]
    s[rigth] = temp
    left++
    rigth--
  }
  return s.join('')
}

console.log(reverse('abcdef'))
