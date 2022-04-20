/**
 * * 排序算法-二分查找算法
 *
 * * 条件
 * 1.存储在数组中
 * 2.有序排序
 *
 * ! 实现思想：
 * 搜索过程从中间元素开始，如果某一特定元素大于或者小于中间元素，则更改索引大小区间
 *
 * * 特点
 * 每一次比较都使搜索范围缩小一半
 *
 */

function binarySearch(arr, target) {
  if (arr.length <= 1) return -1

  let leftIndex = 0
  let rightIndex = arr.length - 1
  while (leftIndex <= rightIndex) {
    let midIndex = ~~((leftIndex + rightIndex) / 2)
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1
    } else if (target > arr[midIndex]) {
      leftIndex = midIndex + 1
    } else {
      if (midIndex === 0 || arr[midIndex - 1] < target) {
        return midIndex
      }
      rightIndex = midIndex - 1
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 4, 5, 7, 8, 9], 4))
