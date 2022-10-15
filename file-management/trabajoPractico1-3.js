//TODO: consigna 3 ver clase3 o 4 PNT2 

const transformarStringEnArrayDeNumeros = (text, charSep) => {

    let resultado = []
    let separatedText = text.split(charSep)
    return resultado = separatedText.filter(element => Number(element))

}


let texto = "123 | 456 | 789 | 1bc | 10";
let separador = " | "

console.log(transformarStringEnArrayDeNumeros(texto, separador))
// expected Output: [123, 456, 789, 10]
