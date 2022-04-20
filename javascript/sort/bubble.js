/**
 * * 排序算法-冒泡排序
 *
 * ! 核心思想：
 * 1. 外层控制循环次数
 * 2. 内层控制每个元素比较次数
 *
 */

// 普通
const bubble = function (arr) {
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

console.log(bubble([1, 2, 7, 3])) // [1,2,3,7]

// 优化
// 1. 记录最后一次更改的位置 那么其他就是已经排序好的 不需要再作比较
const bubble2 = (arr) => {
  let i = arr.length - 1
  while (i > 1) {
    let lastChange = 1
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j] + arr[j + 1]
        arr[j + 1] = arr[j] - arr[j + 1]
        arr[j] = arr[j] - arr[j + 1]
        lastChange = j
      }
    }
    i = lastChange
  }
  return arr
}

console.log(bubble2([-1, 2, 6, 4, 5, 3, 7, 8, 11, 14]))
