/* 
 Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

**Example 1:**

Input: nums = [1,4,3,2]

Output: 4



*/

function pairsSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];

    }
    return sum;
}
console.log(pairsSum([1, 4, 3, 2]));