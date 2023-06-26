function threeSum(nums, target) {
// write your code here
	nums.sort((a, b) => a - b);

  let closestSum = Infinity;
  let minDiff = Infinity;

  // Iterate through each number as the potential first element
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(sum - target);

      // Check if the current sum is closer to the target than the previous closest sum
      if (diff < minDiff) {
        closestSum = sum;
        minDiff = diff;
      }

      // Adjust the pointers based on the current sum
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // If the sum is equal to the target, return the target sum
        return sum;
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;
