const yup = require('yup')

const marcaProductoEsquema = yup.string().min(3)
const productoProductoEsquema = yup.string().min(3)
const precioProductoEsquema = yup.number().min(0)
const existenciaProductoEsquema = yup.number().min(0)
const statusProductoEsquema = yup.number().min(-1).max(1)

const crearProductoEsquema = yup.object().shape({
    marca: marcaProductoEsquema.required(),
    producto: productoProductoEsquema.required(),
    precio: precioProductoEsquema.required(),
    existencia: existenciaProductoEsquema.required(),
    status: statusProductoEsquema.required()
})

const actualizarProductoEsquema = yup.object().shape({
    marca: marcaProductoEsquema,
    producto: productoProductoEsquema,
    precio: precioProductoEsquema,
    existencia: existenciaProductoEsquema,
    status: statusProductoEsquema
})


module.exports = {
    crearProductoEsquema,
    actualizarProductoEsquema
}