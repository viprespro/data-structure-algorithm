/**
 * * 排序算法-归并算法
 *
 * ! 实现思想：分-合
 * * 分：数组分为2半，再递归子数组进行分操作，直到拆分为一个个单的数字
 * * 合：把2个数合并为有序数组，再对有序数组进行合并操作，直到全部子数组合成一个完整的数组。
 */
function mergeSort(arr) {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  let middle = len >> 1,
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  // 1 2 3 步骤主要是对2个数组元素进行合并操作 并且有序
  // 1
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  // 2
  while (left.length) result.push(left.shift())

  // 3
  while (right.length) result.push(right.shift())

  return result
}

console.log(mergeSort([6, 1, 5, 10, 2, 8, 9, 4])) // [1, 2, 4,  5, 6, 8, 9, 10]
