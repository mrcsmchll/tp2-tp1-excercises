import fs from 'fs'


function readFileAsString( ) {
    const input = () => {
        '"' + prompt("Ingrese ruta del archivo:") + '"';
    }
    return fs.readFileSync(input, "utf-8");
}
