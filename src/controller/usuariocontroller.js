const usuarioController = (api) =>{
    api.get('/usuario', (req, res) => {
    res.send('Rota GET para usuario')
  })
  api.post('/usuario', (req, res) => {
    res.send('Rota post para usuario')
  })
}
  export default usuarioController