const Character = require('../data')
const {response} = require('../utils')

module.exports = async (req,res) => {
    const newCharacter = await Character.create()
    res.status(201).send(newCharacter)
}