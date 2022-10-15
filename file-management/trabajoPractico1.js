import  fs from "fs"


const leerArchivoComoTexto = (filePath) => (fs.readFileSync(filePath, "utf-8"))

const escribirTextoEnArchivo = (filePath, text, flag) => ( flag ? fs.writeFileSync(filePath,text) : console.log("el archivo no existe"))
    //{ 
    // if (flag) {
    //   fs.writeFileSync(filePath, text)
    // } else {
    //   console.log("el archivo no existe");
    // }
    // }

const transformarStringEnArrayDeNumeros = (text, charSep) => {
    let resultado = []
    let separatedText = text.split(charSep)
    return resultado = separatedText.filter(element => Number(element))
    // Expected Output: [123, 456, 789, 10]
}

const transformarArraysDeNumerosAUnSoloString = (array, charSeque) => (
    array.reduce((previousValue, currentValue) => previousValue + charSeque + currentValue)
    //Expected Output: ‘123,456,789,10’
)

const combinarDosArrays = (array1, array2) => {
    let newArray = array1.concat(array2)
    return newArray.sort((a,b) => a-b)
    // Expected output: [1, 2, 3, 5, 8, 10, 11]
}


const combinarNArrays = (arrays) => (arrays.flat().sort((a,b) => a-b)
//Expected Output: [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]
)


export {
    leerArchivoComoTexto,
    escribirTextoEnArchivo,
    transformarStringEnArrayDeNumeros,
    transformarArraysDeNumerosAUnSoloString,
    combinarDosArrays,
    combinarNArrays
}



