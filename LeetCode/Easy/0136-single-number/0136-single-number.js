/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, count] of map) {
    if (count === 1) return num;
  }
};