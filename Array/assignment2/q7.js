/* 
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

*/

function isMonotonic(nums){
    const n = nums.length;
    let increase = true;
    let decrease = true;

    for(let i =0 ;i< n; i++){
        if(nums[i]<nums[i-1]){
            increase = false;
        }
        else {
            decrease = false;
        }
    }
    return increase||decrease
}

console.log(isMonotonic([1,2,2,3]));