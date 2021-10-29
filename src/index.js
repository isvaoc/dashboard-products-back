const app = require('./app') //jalar el modulo de app.js para obtener el puerto
require('dotenv').config() //recuperar la info del port en env
// PONER EL SERVIDOR A ESCUCHAR
// --> se mandó a index
app.listen(app.get('PORT'), () => {
  console.log(`Servidor escuchando en el puerto ${app.get('PORT')}`)
})

/*const body = document.querySelector("body");
const btnAgregar = document.getElementById("boton-incluir");
const btnActualizar = document.getElementById("boton-actualizar");

body.onload = () => {
  btnAgregar.addEventListener("click", agregarProducto);
  const productos = llamarProductos();
  llenarTabla(productos);
};

function formActualizar(i){
    const product = productoIndice(i)
    document.getElementById("newMarca").value = product.marca;
    document.getElementById("newProducto").value = product.producto;
    document.getElementById("newPrecio").value = product.precio;
    document.getElementById("newExistencia").value = product.existencia;
    document.getElementById("newStatus").value = product.status;
    //btnAgregar.innerText = "Actualizar producto"
    btnActualizar.style.display="inline-block"
    btnAgregar.style.display = "none"
    btnActualizar.addEventListener('click', (e)=>actualizacionProducto(e, i))
}

function llenarTabla(lista) {
  const contenidoTabla = document.getElementById("contenido-tabla");
  lista.forEach((elem, i) => {
    const eliminar = document.createElement("i");
    eliminar.setAttribute("class", "fa fa-remove");
    eliminar.style.color = "rgb(150, 6, 6)";
    const editar = document.createElement("i");
    editar.setAttribute("class", "fa fa-pencil");

    eliminar.addEventListener('click', () => {
      borrarProducto(i);
      limpiarTabla();
      llenarTabla(llamarProductos());
    })

    editar.addEventListener('click',() => {formActualizar(i)})

    const trRenglon = document.createElement("tr");
    const tdMarca = document.createElement("td");
    const tdProducto = document.createElement("td");
    const tdPrecio = document.createElement("td");
    const tdExistencia = document.createElement("td");
    const tdStatus = document.createElement("td");
    const tdEditar = document.createElement("td");
    const tdEliminar = document.createElement("td");

    tdMarca.textContent = elem.marca;
    tdProducto.textContent = elem.producto;
    tdPrecio.textContent = elem.precio;
    tdExistencia.textContent = elem.existencia;
    tdStatus.textContent = elem.status;

    tdEditar.appendChild(editar);
    tdEliminar.appendChild(eliminar);

    trRenglon.appendChild(tdMarca);
    trRenglon.appendChild(tdProducto);
    trRenglon.appendChild(tdPrecio);
    trRenglon.appendChild(tdExistencia);
    trRenglon.appendChild(tdStatus);
    trRenglon.appendChild(tdEditar);
    trRenglon.appendChild(tdEliminar);

    contenidoTabla.appendChild(trRenglon);
  });
  //
}

function limpiarTabla() {
  const contenidoTabla = document.getElementById("contenido-tabla");
  contenidoTabla.innerHTML = "";
}

function agregarProducto(e) {
  const marca = document.getElementById("newMarca").value;
  const producto = document.getElementById("newProducto").value;
  const precio = document.getElementById("newPrecio").value;
  const existencia = document.getElementById("newExistencia").value;
  const status = document.getElementById("newStatus").value;
  crearProducto(marca, producto, precio, existencia, status);
  limpiarTabla();
  llenarTabla(llamarProductos());
  document.getElementById("formu").reset();
  e.preventDefault();
}

function actualizacionProducto(e,i) {
    const marca = document.getElementById("newMarca").value;
    const producto = document.getElementById("newProducto").value;
    const precio = document.getElementById("newPrecio").value;
    const existencia = document.getElementById("newExistencia").value;
    const status = document.getElementById("newStatus").value;
    actualizarProducto(i, marca, producto, precio, existencia, status);
    limpiarTabla();
    llenarTabla(llamarProductos());
    btnActualizar.style.display="none"
    btnAgregar.style.display = "inline-block"
    //btnAgregar.innerText = "Agregar Producto"
    //btnAgregar.addEventListener('click', agregarProducto)
    document.getElementById("formu").reset();
    e.preventDefault();
}*/