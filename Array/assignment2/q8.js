/* 
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0
*/


function smallestRangeI(nums, k) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    if (max - min <= 2 * k) {
        return 0;
    }
    return max - min - 2 * k;
}

console.log(smallestRangeI([1],0));