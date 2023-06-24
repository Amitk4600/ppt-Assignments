/* 
<aside>
💡 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

</aside>
*/


function  move(nums){
    let left = 0;
    let right = 0;

    while(right < nums.length){
        if(nums[right] != 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
          } 
        right++;
    }
}
let nums = [0, 1, 0, 3, 12];  

move(nums);

console.log(nums);  

