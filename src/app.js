import express from "express"
import tarefaController from "./controller/tarefacontroller.js"
import usuarioController from "./controller/usuariocontroller.js"
const api = express()
const port = 3000

tarefaController(api)
usuarioController(api)

api.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
