import pegarArquivo from "./index.js";
import chalk from "chalk";
import fs from "fs";

const caminho = process.argv;

function imprimirLista(resultado, identificador = "") {
  console.log(
    chalk.bgWhite("lista de links"),
    chalk.bgGreen(identificador),
    resultado);
}

async function processarTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3];
  console.log(valida);
  
  try{
      fs.lstatSync(caminho);
    }catch(erro){
        if (erro.code === "ENOENT"){
            console.log(chalk.red(" Arquivo ou diretorio não encontrado."));
            return
        }
    }
    
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegarArquivo(argumentos[2]);
        imprimirLista(resultado);
        
    } else if (fs.lstatSync(caminho).isDirectory(caminho)) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegarArquivo(`${caminho}/${nomeDoArquivo}`);
            imprimirLista(lista, nomeDoArquivo);
        });
    }
    
    
}
processarTexto(caminho);
