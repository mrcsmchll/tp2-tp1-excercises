//TODO: consigna 2
const fs = require("fs");

fs.appendFileSync(filePath, `\nAdded data: ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`)

fileData = fs.readFileSync(filePath, "utf-8")
