const characters = require('./characters.json')

module.exports = {
    list: async () => characters,
    create: async () => {
        throw Error('Fallo al momento de crear un personaje.')
    }
}