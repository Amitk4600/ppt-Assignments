/*  
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1
*/

function singleNum(nums){
    let n = nums.length;
    let c = 0;

    for(let i=0;i<n;i++){
        c = c^nums[i];

    }
    return c
}
console.log(singleNum([2,2,1]));