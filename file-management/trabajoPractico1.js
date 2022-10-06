//TODO: REVISAR
const fs = require('fs')
// const prompt = prompt('prompt-sync')
try {
    
let input = "./private-data.txt"

let datos = fs.readFileSync(input, "utf-8")

console.log(`pwnd: \n${datos}\n ┴─┴︵╰（‵□′╰）`)

fs.writeFileSync(input, new Date().toLocaleDateString())

datos = fs.readFileSync(input, "utf-8")

console.log(datos)
}catch (error) {
    console.log(`======Error while reading/writing:======\n${error.message}\n\t\t============`)
}