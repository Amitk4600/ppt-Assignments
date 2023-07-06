/* 
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].
*/

function shuffleArray(nums,n){
    const result = [];
    for(let i =0;i<n;i++){
        result.push(nums[i],nums[n+i]);
    }
   return result;

}
console.log(shuffleArray([2,5,1,3,4,7],3));
