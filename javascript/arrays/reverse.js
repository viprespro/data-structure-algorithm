/**
 *
 * @description 翻转字符串
 * @param {string} s
 * @returns {string}
 */
function reverseArr(s) {
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
  return nums.join('')
}

console.log(reverseArr('abcdef'))

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function reverse(nums) {
  let s = 0
  while (nums) {
    const last = nums % 10
    nums = ~~(nums / 10)
    s = s * 10 + last
  }
  return s
}
