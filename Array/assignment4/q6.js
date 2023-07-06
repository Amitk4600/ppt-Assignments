/* 
<aside>
💡 Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

</aside>

*/

function squares(nums) {
    const sqArray = nums.map(num => num * num);
    sqArray.sort((a, b) => a - b);
    return sqArray;
}

console.log(squares([-4, -1, 0, 3, 10]));