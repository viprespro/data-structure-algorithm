/**
 * 获取斐波那契数列
 */

function getFibonacci(n) {
  let i = 0
  let fibarr = []
  while (i < n) {
    if (i <= 1) {
      fibarr.push(i)
    } else {
      fibarr.push(fibarr[i - 1] + fibarr[i - 2])
    }
    i++
  }
  return fibarr
}

console.log(getFibonacci(6)) // [ 0, 1, 1, 2, 3, 5 ]
