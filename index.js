import chalk from "chalk";
import fs from "fs";

function tratarErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, "Não é um arquivo."));
}

function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    const texto = fs.promises.readFile(caminhoDoArquivo,
        encoding);
        console.log(chalk.redBright(texto));
}

pegarArquivo("./arquivos/texto.md");