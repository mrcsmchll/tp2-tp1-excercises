//Input:
const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]

const combinarNArrays = (arrays) => (arrays.flat().sort((a,b) => a-b))

console.log(combinarNArrays(arrays))

//Expected Output: [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]