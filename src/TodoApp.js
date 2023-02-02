import express from 'express'

const app = express()

app.use(express.json())

import usuarioController from './Controllers/usuario-controller.js'
import tarefaController from './Controllers/tarefa-controller.js'

usuarioController.rotas(app)
tarefaController.listar(app)
tarefaController.inserir(app)


export default {inferno:app}