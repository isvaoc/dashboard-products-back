const boom =  require('@hapi/boom')

const validateMiddleware = (schema, validateWith) => {
    return (req, res, next) => {
        try{
            schema.validateSync(req[validateWith])
            next()
        } catch(error){
            next(boom.badRequest(error.message))
        }
    }
}

module.exports = validateMiddleware