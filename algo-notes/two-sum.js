// Leetcode 1. Two Sum
// Hashing

var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}

var twoSumJSON = function (nums, target) {
  let map = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] === undefined) {
      map[nums[i]] = i;
    } else {
      return [map[target - nums[i]], i];
    }
  }

  return [];
}

nums = [2, 7, 11, 15];
let target = twoSumJSON(nums, 9);
console.log("target", target);
