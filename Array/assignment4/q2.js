/* 
Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

*/

function findDistinctElement(nums1, nums2) {
    let distinctNum1 = [];
    let distinctNum2 = [];

    for (let num of nums1) {
        if (!nums2.includes(num) && !distinctNum1.includes(num)) {
            distinctNum1.push(num);
        }
    }
    for (let num of nums2) {
        if (!nums1.includes(num) && !distinctNum2.includes(num)) {
            distinctNum2.push(num);
        }
    }
    return [distinctNum1,distinctNum2]
}

console.log(findDistinctElement([1,2,3],[2,4,6]));