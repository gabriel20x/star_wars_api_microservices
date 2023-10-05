const {ClientError} = require('../utils/errors')

module.exports = (req,res,next) => {
    const {name} = req.body
    if(name) return next()
    throw new ClientError('Falta agregar el nombre del personaje',401)
}