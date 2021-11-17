const app = require('./app') //jalar el modulo de app.js para obtener el puerto
require('dotenv').config() //recuperar la info del port en env
// PONER EL SERVIDOR A ESCUCHAR
// --> se mandó a index
app.listen(app.get('PORT'), () => {
  console.log(`Servidor escuchando en el puerto ${app.get('PORT')}`)
})