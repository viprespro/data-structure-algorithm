/**
 *
 * @param {number[]} arr
 * @param {number} val
 * @returns {number[]}
 *
 */
const removeTarget = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums
}

console.log(removeTarget([1, 2, 3, 5, 5, 6], 5))
