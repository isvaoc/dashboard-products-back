// traer el constructor de los productos
const Producto = require('../models/Producto')

const productos = [
    new Producto("Proplan", "Croqueta Adulto", 450, 1, 1),
    new Producto("Proplan", "Croqueta Cachorro", 470, 6, 1),
    new Producto("Dog Chow", "Croqueta Adulto", 350, 8, 1),
    new Producto("Cat Chow", "Croqueta Adulto", 380, 2, 1),
    new Producto("Ganador", "Croqueta Cachorro", 600, 1, 1),
    new Producto("Royal Canin", "Croqueta Puppy", 700, 1, 1)
];

module.exports = productos;