/**
 * * 排序算法-插入排序
 *
 * ! 实现思想：将数据按照一定的顺序一个一个的插入到有序的表中，最终得到序列就是已经排好的数据。
 */

function insertionSort(arr) {
  const l = arr.length
  let preIndex, current
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

console.log(insertionSort([3, 1, 2, 5, 6, 9, 4, 10])) // [ 1, 2, 3, 4, 5, 6, 9, 10]
