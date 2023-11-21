const { Router } = require("express");
const path = require("path");

const obterPersonagens = require("../controllers/personagensControllers");

const personagensRoutes = Router();

const filePath = path.join(__dirname, "../characters.json");

// rota OBTER valor
personagensRoutes.get("/", async (req, res) => {
  try {
    const personagens = await obterPersonagens(filePath)
    res.json(personagens)
  } catch (error) {
    console.error("Erro ao enviar personagens JSON:", error);
    res.status(500).send("Erro ao enviar personagens JSON");
  }
 });

module.exports = personagensRoutes;
