    const fs = require("fs")

    let filePath = "./private-data.txt"

    let fileData = fs.readFileSync(filePath, "utf-8")

    console.log(fileData)
