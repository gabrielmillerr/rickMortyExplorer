const lerArquivo = require("./arquivoControllers");

function filtrarPersonagemVivos(personagens) {
  return personagens.filter((personagem) => {
    return personagem.status === "Alive";
  });
}

function adicionarAparecimentos(personagens) {
  return personagens.map((personagem) => {
    const aparicoesDoPersonagem = {
      primeiraTemporada: personagem.episode.filter((ep) => {
        const matchResult = ep.match(/\/(\d+)$/);
        return matchResult && Number(matchResult[1]) <= 11;
      }).length,
      segundaTemporada: personagem.episode.filter((ep) => {
        const matchResult = ep.match(/\/(\d+)$/);
        return (
          matchResult &&
          Number(matchResult[1]) > 11 &&
          Number(matchResult[1]) <= 21
        );
      }).length,
      terceiraTemporada: personagem.episode.filter((ep) => {
        const matchResult = ep.match(/\/(\d+)$/);
        return matchResult && Number(matchResult[1]) > 21;
      }).length,
      totalAparicoes: personagem.episode.length,
    };

    personagem.aparicoesPorTemporada = { ...aparicoesDoPersonagem };
    return personagem;
  });
}

function ordenarPorAparicoes(personagens) {
  return personagens.sort((a, b) => b.episode.length - a.episode.length);
}

async function obterPersonagens(filePath) {
  try {
    const personagens = await lerArquivo(filePath);

    const personagensVivos = filtrarPersonagemVivos(personagens);
    const personagensComAparecimentosAdicionados = adicionarAparecimentos(personagensVivos)
    const personagensOrdenados = ordenarPorAparicoes(personagensComAparecimentosAdicionados)

    return personagensOrdenados
  } catch(error) {
    console.error("Erro ao enviar personagens JSON:", error);
  }
}

module.exports = obterPersonagens ;
