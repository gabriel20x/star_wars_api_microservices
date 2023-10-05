module.exports = (fn) => {
    return async (req,res,next) => {
        fn(req,res).catch( (err) => {
            next(err)
        } )
    }
}