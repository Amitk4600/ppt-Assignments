/* 
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
 */

function product(nums) {
    nums.sort((a, b) => b - a);

    let n = nums.length;

    const p1 = nums[0] * nums[1] * nums[2]
    const p2 = nums[0] * nums[n - 1] * nums[n - 2]

    return Math.max(p1,p2)
}

console.log(product([1,2,3]));