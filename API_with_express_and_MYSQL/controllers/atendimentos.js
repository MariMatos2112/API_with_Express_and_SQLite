module.exports = app => {
    app.get('/atendimentos', (req, resp) => resp.send('This GET route is working ;)'))

    app.post('/atendimentos', (req, resp) => resp.send('This POST route is working ;)'))
}