/* 
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/

function fourSet(nums, target) {
    const result = [];
    let n = nums.length;


    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // skipped 1st number
        }
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;// skipped 2nd number
            }

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;

                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }

                }
                else if (sum < target) {

                    left++
                }
                else {
                    right--

                }
            }
        }
    }
    return result;
}
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

const result = fourSet(nums, target);
console.log(result);
