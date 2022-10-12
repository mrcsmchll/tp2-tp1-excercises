
const fs = require("fs")

const leerArchivoComoTexto = () => {
    let filePath = "./private-data.txt"

    let fileData = fs.readFileSync(filePath, "utf-8")

    console.log(fileData)
}

leerArchivoComoTexto();




