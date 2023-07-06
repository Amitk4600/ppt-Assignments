/* 
**Question 3**
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.


*/

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const transposedMatrix = Array(cols).fill(0).map(() => Array(rows).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }
    return transposedMatrix;
}
console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));