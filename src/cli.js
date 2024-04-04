import pegarArquivo from "./index.js"; 
import chalk from "chalk";

const caminho = process.argv;

async function processarTexto(caminho) {
    const resultado = await pegarArquivo(caminho[2]);
    console.log(chalk.bgWhite("lista de links"), resultado);
}

processarTexto(caminho);