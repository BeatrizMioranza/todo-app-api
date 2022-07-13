import express from "express"

const api = express()
const port = 3000

api.get('/tarefa', (req, res) => {
  res.send('Rota atividada com GET e recurso tarefa: valores de tarefa devem ser retornados')
})

api.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
