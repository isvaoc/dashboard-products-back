// TRAER RUTAS
const {Router} = require('express')
const { crearProducto, llamarProductos, actualizarProducto, borrarProducto } = require('../controllers/producto')
const validateMiddleware = require('../middlewares/validateMiddleware')
const { crearProductoEsquema, actualizarProductoEsquema } = require('../utils/schema/producto')



// INICIALIZAR RUTAS
const router = Router()

router.post('/', validateMiddleware(crearProductoEsquema, 'body') , crearProducto)
router.patch('/:id', validateMiddleware(actualizarProductoEsquema, 'body'), actualizarProducto)
router.get('/', llamarProductos)
router.delete('/:id', borrarProducto)

module.exports = router