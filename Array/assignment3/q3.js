/* 

A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

Input: nums = [1,2,3]
Output: [1,3,2]
*/

function nextPermutation(nums) {
    let swap = (lt, rt) => {
        [nums[lt], nums[rt]] = [nums[rt], nums[lt]];
    }
    let reverse = (left) => {
        let right = nums.length - 1;
        while (left < right) {
            swap(left, right);
            left++;
            right--;
        }
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[j] > nums[i]) {
                swap(i, j);
                reverse(i + 1);
                return;
            }
        }
    }
    reverse(0);
}

console.log(nextPermutation([1,2,3]));