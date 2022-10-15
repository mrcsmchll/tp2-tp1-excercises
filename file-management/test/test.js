import * as funciones from "../trabajoPractico1.js"

//CONSIGNA 1
const filePathRead = "./private-data.txt"
//CONSIGNA 2
const filePathWrite = "./write-data.txt"
const textToAdd = `\nAdded data: ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`
const flag = false
//CONSIGNA 3
const textoCons3 = "123 | 456 | 789 | 1bc | 10";
const separadorCons3 = " | "
//CONSIGNA 4
const arrayCons4 = [123, 456, 789, 10]
const separadorCons4 = ","
//CONSIGNA 5
const array1Cons5 = [1, 5, 10] 
const array2Cons5 = [2, 3, 8, 11]
//CONSIGNA 6
const arraysCons6 = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]


try {
    console.log("|-----CONSIGNA 1----|")
    console.log(funciones.leerArchivoComoTexto(filePathRead))
    
    console.log("|-----CONSIGNA 2----|")
    console.log(funciones.escribirTextoEnArchivo(filePathWrite,textToAdd,flag))
    //TODO: Why 'undefined'? 
    
    console.log("|-----CONSIGNA 3----|")
    console.log(funciones.transformarStringEnArrayDeNumeros(textoCons3,separadorCons3))
    
    console.log("|-----CONSIGNA 4----|")
    console.log(funciones.transformarArraysDeNumerosAUnSoloString(arrayCons4,separadorCons4))
    
    console.log("|-----CONSIGNA 5----|")
    console.log(funciones.combinarDosArrays(array1Cons5,array2Cons5))

    console.log("|-----CONSIGNA 6----|")
    console.log(funciones.combinarNArrays(arraysCons6))
} catch (err) {
    console.log(`Error de ejecucion en test:\n${err.message}`)
}