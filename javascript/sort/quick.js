/**
 * * 排序算法-快速排序
 *
 * ! 核心思想：
 * * 分区
 * * 递归
 * 快速排序（Quick Sort）算法是在冒泡排序的基础上进行改进的一种算法，
 * 从名字上看就知道该排序算法的特点是快、效率高，是处理大数据最快的排序算法之一
 * 实现的基本思想是：通过一次排序将整个无序表分成相互独立的两部分，其中一部分中的数据都比另一部分中包含的数据的值小
 *
 * * 总结:
 * 这种情况时间复杂度就是冒泡排序的时间复杂度：T[n] = n * (n-1) = n^2 + n，也就是O(n^2)
 * 最好情况下是O(nlogn)，其中递归算法的时间复杂度公式：T[n] = aT[n/b] + f(n)，推导如下所示：
 */

const quick = function (arr) {
  const len = arr.length
  if (len <= 1) return arr

  const left = [],
    right = [],
    mid = arr[0]
  for (let i = 1; i < len; i++) {
    const item = arr[i]
    item < mid ? left.push(item) : right.push(item)
  }
  return [...quick(left), mid, ...quick(right)]
}

console.log(quick([2, 1, 3, 6, 8]))
