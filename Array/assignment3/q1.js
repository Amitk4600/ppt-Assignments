/* '
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2


*/

function threeSumClosest(nums,target){
    nums.sort((a,b)=>a-b);
    const n = nums.length;
    let closestSum  = Infinity;

    for(let i=0;i<n-2;i++){
        let left = i+1
        let right = n-1

        while(left <right){
            const currentSum = nums[i]+nums[left]+nums[right];

            if(Math.abs(currentSum-target)<Math.abs(closestSum-target)){
                closestSum=currentSum;
            }
            else if(currentSum<target){
                left++;
            }
            else if(currentSum>target) {
right--;
            }
            else{
                return currentSum;
            }
        }
    }
    return closestSum;
}
console.log(threeSumClosest([-1,2,1,-4],1));