//TODO: consigna 2
const fs = require("fs");

const text = `\nAdded data: ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`;
let flag = false;
let ruta = "./write-data.txt"


function escribirTextoEnArchivo() {
  if (flag) {
    fs.writeFileSync(ruta, text)
  } else {
    console.log("el archivo no existe");
  }
};

escribirTextoEnArchivo();



