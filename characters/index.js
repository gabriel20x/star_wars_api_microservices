const server = require('./src/server')

const PORT = 8001

server.listen(PORT, () => {
    console.log(`El servidor de Characters esta escuchando en el puerto: ${PORT}`)
})

