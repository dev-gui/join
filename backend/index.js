const app = require('express')()
const consign = require('consign')

consign({ verbose: false }, { cwd: 'src' })
    .then('./src/config/db.js') //A config do banco de dados
    .then('./src/config/boot.js') // Faz a inicialização do banco e tabelas
    .then("./src/config/middlewares.js") // Inicia o servidor
    .then('./src/repository/') // Inclui os repositorios
    .then('./src/controller/') // Inclui os controller
    .then('./src/routes/') // Cria as rotas
    .into(app) //Insere no escopo global do app

module.exports = app