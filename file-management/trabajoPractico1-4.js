const array = [123, 456, 789, 10]
const separador = ","


const transformarArraysDeNumerosAUnSoloString = (array, charSeque) => {
    return array.reduce((previousValue, currentValue) => previousValue + charSeque + currentValue)
}

console.log(transformarArraysDeNumerosAUnSoloString(array, separador))
//Expected Output: ‘123,456,789,10’