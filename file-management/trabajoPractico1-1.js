const fs = require('fs')
// const prompt = prompt('prompt-sync')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
try {

    let filePath = readline.question('Ingrese ruta de archivo', ruta);
    //throws error -> REVIEW
    readline.close();
    
    let fileData = fs.readFileSync(filePath, "utf-8")

    console.log(`pwnd?: \n${fileData}\n ┴─┴︵╰（‵□′╰）`)
    console.log(`====attempt at adding more data to text====`)

    fs.appendFileSync(filePath,
        `\nAdded data: ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`)

    fileData = fs.readFileSync(filePath, "utf-8")

    console.log(`is this new data?\n${fileData}`)

} catch (error) {
    console.log(`\n======Error while reading/writing:======\n${error.message}\n============`)
}
