/**
 * 排序算法-冒泡排序
 */

// 解法1
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// 时间复杂度O(n2) 性能不是最有
console.log(bubbleSort([1, 2, 7, 3])) // [1,2,3,7]

// 解法2 开发中...
const bubbleSort2 = (arr) => {}
