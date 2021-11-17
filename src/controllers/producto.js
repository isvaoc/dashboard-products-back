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