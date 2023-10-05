const { mongoose } = require('mongoose')
const { MONGO_URI } = require('../config/env')
const CharacterSchema = require('./schemas/characterSchema')
const FilmSchema = require('./schemas/filmSchema')
const PlanetSchema = require('./schemas/planetSchema')

const conn = mongoose.createConnection(MONGO_URI);


module.exports = {
    Character : conn.model("Character", CharacterSchema),
    Film : conn.model("Film", FilmSchema),
    Planet : conn.model("Planet", PlanetSchema)
}