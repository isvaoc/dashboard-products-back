const productos = require('../db/db') //imitaciondatabase
const Producto = require('../models/Producto')
const yup = require('yup')

const crearProducto = (req, res) => {
  const {marca, producto, precio, existencia, status} = req.body;
  const newProduct = new Producto(marca, producto, precio, existencia, status)
  productos.push(newProduct)
  res.status(201).json({
    data: newProduct,
    message: "Nuevo producto creado",
    statusCode: 201
  })
}

const llamarProductos = (req, res) => {
  res.status(200).json({
    data: productos,
    message: "Productos encontrados",
    statusCode: 200
  })
}

const actualizarProducto = (req, res) => {
  const {marca, producto, precio, existencia, status} = req.body;
  const {id} = req.params;
  productos[id].marca = marca
  productos[id].producto = producto
  productos[id].precio = precio
  productos[id].existencia = existencia
  productos[id].status = status
  const productoActualizado = {marca, producto, precio, existencia, status} 
  res.status(200).json({
    data: productoActualizado,
    message: "Producto actualizado",
    statusCode: 200
  })
}

const borrarProducto = (req, res) => {
  const {id} = req.params;
  productos.splice(id, 1);
  res.status(200).json({
    message: "Producto eliminado",
    statusCode: 200
  })
}

module.exports = {
  crearProducto,
  llamarProductos, 
  actualizarProducto,
  borrarProducto
};

/*const productos = [
  new Producto("Proplan", "Croqueta Adulto", 450, 1, 1),
  new Producto("Proplan", "Croqueta Cachorro", 470, 6, 1),
  new Producto("Dog Chow", "Croqueta Adulto", 350, 8, 1),
  new Producto("Cat Chow", "Croqueta Adulto", 380, 2, 1),
  new Producto("Ganador", "Croqueta Cachorro", 600, 1, 1),
  new Producto("Royal Canin", "Croqueta Puppy", 700, 1, 1)
];

function llamarProductos() {
  return productos;
}

function productoIndice(i) {
  return productos[i];
}

function borrarProducto(i) {
  return productos.splice(i, 1);
}

function actualizarProducto(i, marca, producto, precio, existencia, status) {
  productos[i].marca = marca;
  productos[i].producto = producto;
  productos[i].precio = precio;
  productos[i].existencia = existencia;
  productos[i].status = status;
  console.log(productos)
}

function crearProducto(marca, producto, precio, existencia, status) {
  const nuevoProducto = new Producto(marca, producto, precio, existencia, status);
  productos.push(nuevoProducto);
}*/

