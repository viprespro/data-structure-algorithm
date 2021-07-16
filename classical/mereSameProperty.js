/**
 * 将以下同id的数据 处理返回他们的cout之和
 * 期望数据：[ { id: 1, count: 5 }, { id: 2, count: 9 }, { id: 3, count: 13 } ]
 */
let arr = [
  { id: 1, count: 2 },
  { id: 1, count: 3 },
  { id: 2, count: 4 },
  { id: 2, count: 5 },
  { id: 3, count: 6 },
  { id: 3, count: 7 },
]

function mergeSame(arr) {
  const objMap = {}
  const ret = []
  for (let i = 0; i < arr.length; i++) {
    const { id } = arr[i]
    if (!objMap[id]) {
      objMap[id] = arr[i]
      continue
    }
    objMap[id].count += arr[i].count
    ret.push(objMap[id])
  }
  return ret
}

console.log(mergeSame(arr))
