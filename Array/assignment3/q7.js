/* 
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

*/

function findMissingRange(nums, lower, upper) {
    const result = [];
    let next = lower;

    for (const num of nums) {

        if (num > next) {

            result.push(getRange(next, num - 1));
            next = num + 1;
        }
        else if (num === next) {
            next++;

        }

    }
    if (next <= upper) {
        result.push(getRange(next, upper));
    }
    return result;

}
function getRange(start,end){
    if(start === end){
        return [start];
    }
    else{
        return [start,end]
    }
}

console.log(findMissingRange([0,1,3,50,75],0,99));