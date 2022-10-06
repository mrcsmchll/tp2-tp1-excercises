//TODO: REVISAR
const fs = require('fs')
// const prompt = prompt('prompt-sync')

let input = "./private-data.txt"

let datos = fs.readFileSync(input, "utf-8")

console.log(`pwnd: \n${datos}\n ┴─┴︵╰（‵□′╰）`)


