const array1 = [1, 5, 10] 
const array2 = [2, 3, 8, 11]

const combinarDosArrays = (array1, array2) => {
    let newArray = array1.concat(array2)
    return newArray.sort((a,b) => a-b)
}

console.log(combinarDosArrays(array1,array2))



// Expected output: [1, 2, 3, 5, 8, 10, 11]