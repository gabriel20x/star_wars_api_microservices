const server = require('./src/server')

const PORT = 8002

server.listen(PORT, () => {
    console.log(`El servidor de Films esta escuchando en el puerto: ${PORT}`)
})

