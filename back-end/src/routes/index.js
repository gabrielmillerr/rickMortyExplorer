const { Router } = require('express');

const personagensRouter = require('./personagens.routes')

const routes = Router()

routes.use("/personagens", personagensRouter)

module.exports = routes