/* 
<aside>
💡 **.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Input: digits = [1,2,3]
Output: [1,2,4]

</aside>
*/

function plusOne(digit){
    let n = digit.length;
    let take = 1;
    for(let i = n -1; i >= 0;i--){
        const sum = digit[i] + take;

        if(sum < 10){
            digit[i] = sum;
            take = 0;
        }
        else{
            digit[i] = sum % 10;
            take = 1;
        }
    }
    if(take === 1){
        digit.unshift(1);
    }
    return digit
}

console.log(plusOne([1,2,3]));