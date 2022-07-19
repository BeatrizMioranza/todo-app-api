const tarefaController = (api) => {
  api.get('/tarefa', (req, res) => {
    res.send('Rota GET para tarefa')
  })
  api.post('/tarefa', (req, res) => {
    res.send('Rota post para tarefa')
  })
}
export default tarefaController