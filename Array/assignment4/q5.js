/* 
 You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

Input: n = 5
output = 2
*/
function coins(n) {
    let k = 0;
    let sum = 0;

    while (sum <= n) {
        k++;
        sum += k;

    }
    return k - 1;
}
console.log(coins(5));