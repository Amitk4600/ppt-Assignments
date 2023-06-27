/* 

Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Example 1:
Input: candyType = [1,1,2,2,3,3]
Output: 3
*/

function candy(candyType) {
    let n = candyType.length;
    let ans = 0;
    if (n % 2 != 0) {
        return ans;
    }
    const uniqueCandy = new Set(candyType);
    const maxCandy = Math.min(uniqueCandy.size, n / 2);

    return maxCandy;
}
console.log(candy([1, 1, 2, 2, 3, 3]));