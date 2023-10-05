const { Schema } = require('mongoose')

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{type:String,ref:"Character"}],
    films: [{type:String,ref:"Film"}]
})


planetSchema.statics.list = async function () {
    return await this.find()
        .populate("residents",["_id","name"])
        .populate("films",["_id","title"])
}

planetSchema.statics.get = async function ({_id}) {
    return await this.findOne({_id})
        .populate("residents",["_id","name"])
        .populate("films",["_id","title"])
}

planetSchema.statics.insert = async function (character) {
    return this.create(character);
}


module.exports = planetSchema