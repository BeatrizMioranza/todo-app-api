const usuarioController = (api) =>
    api.get('/usuario', (req, res) => {
    res.send('Rota GET para usuario')
  })

  export default usuarioController