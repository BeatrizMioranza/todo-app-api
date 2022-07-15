const tarefaController = (api) =>
   api.get('/tarefa', (req, res) => {
  res.send('Rota GET para tarefa')
})

export default tarefaController