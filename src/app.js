// traer el errorMiddleware
const errorMiddleware = require('./middlewares/errorMiddleware')

require('dotenv').config()
//traer puerto de config
const {PORT} = require('./config/config')
// traer rutas
const productsRoutes = require('./routes/products.routes')

// TRAER EXPRESS
const express = require('express')

// INICIAR EXPRESS
const app = express()

// AJUSTES
app.set('PORT', PORT)

// MIDDLEWARE
// para que el servidor acepte cosas de tipo json, tenemos que poner un middleware
app.use(express.json())

// RUTAS
// --> se mandó a products.routes.js el app.get
app.use('/products', productsRoutes)

// ERROR MIDDLEWARE
// debe de ir debajo de todas las rutas
app.use(errorMiddleware)

// PONER EL SERVIDOR A ESCUCHAR
// --> se mandó a index


module.exports = app