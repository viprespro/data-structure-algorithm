const twoSum = function (nums, target) {
  // Method 1 暴力求解
  // 时间复杂度o(n2)
  // for (let i =0; i <nums.length; i++) {
  //     for(let j =0; j <nums.length; j++) {
  //         if (i !== j && nums[i] + nums[j] === target) return [i, j]
  //     }
  // }

  // Method 2 hash
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
  return [0]
}
