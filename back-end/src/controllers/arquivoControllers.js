const fs = require("fs").promises;

async function lerArquivo(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler arquivo:", error);
    throw error;
  }
}

module.exports = lerArquivo;
