//TODO: REVISAR
const fs = require('fs')
// const prompt = prompt('prompt-sync')

try {

    let filePath = "./private-data.txt"

    let datos = fs.readFileSync(filePath, "utf-8")

    console.log(`pwnd?: \n${datos}\n ┴─┴︵╰（‵□′╰）`)
    console.log(`====attempt at adding more data to text====`)

    fs.appendFileSync(filePath,
        `\nAdded data: ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`)

    datos = fs.readFileSync(filePath, "utf-8")

    console.log(`is this new data?\n${datos}`)

} catch (error) {
    console.log(`======Error while reading/writing:======\n${error.message}\n\t\t============`)
}
