// Variables
let comprar;
let total = 0;
const cerrarCarrito = document.querySelector('#cerrarCarrito')
const modalContainer = document.querySelector('#modalCar')
//imagenes
const btnCierra = document.querySelector('#btn-cierra')
const btnAdelanta = document.querySelector('#btn-adelanta')
const btnRetrocede = document.querySelector('btn-retrocede')
//modal
const imagenes = document.querySelectorAll('#galeria img')
const ligbox = document.querySelector('#contenedor-principal')
const imagenActiva = document.querySelector('#img-activa')
let indiceImagen = 0
//
const boton = document.querySelector('#boton')
const resultado = document.querySelector('#cards_general')
// suma productos

//FETCH
let request = "./productos.json"
let productosGenerales;

fetch(request)
    .then(function(resp){
        return resp.json();
        
    })
    .then(function(data){
        productosGenerales = data.slice(0)
        renderProductos(productosGenerales)
    })

// let GeneradorCards = ``;


//funciones
const filtrar = () => {
    
    const formulario = document.querySelector('#formularioBusqueda')
    
    resultado.innerHTML = '';
    console.log(formulario.value)
    const texto = formulario.value.toUpperCase().trim();
    console.log(texto)
    const resultadoMatch = productosGenerales.filter(e => {
        return e.nombre.toUpperCase().match(texto)
    })
    
    console.log(resultadoMatch)

    renderProductos(resultadoMatch)

    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
        producto no encontrado
        `
    }
}

// eventos 

const abreLigbox = (event) => {
    imagenActiva.src = event.target.src;
    ligbox.style.display = 'flex'
    indiceImagen = Array.from(imagenes).indexOf(event.target)
}

const adelantaImagen = () => {
    if (indiceImagen === imagenes.length - 1) {
        indiceImagen = -1
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
}

const retrocedeImagen = () => {
    if (indiceImagen === 0) {
        indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src
    indiceImagen--
}

//Storage

function setStorage(parametro){
    localStorage.setItem("carrito", JSON.stringify(parametro))
}

function getStorage(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
//fin storage

//mostrar
function renderProductos(arrayProductos) {
    
    const cardsContenedora = document.getElementById("cards_general")
    cardsContenedora.innerHTML = ''
    
    arrayProductos.forEach(elementoDelArray => {
        cardsContenedora.innerHTML += ` 
        <div class="cards_general">        
        <div class="card" style="width: 20rem;">
        <img src="${elementoDelArray.img}" class="card-img-top" alt="...">
        <div class="precio_card">
                    <h4> $ ${elementoDelArray.precio}</h4>
                </div>
                <div class="card-body">
                <h5 class="card-title">${elementoDelArray.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <button id="addProduct" onclick="agregarProducto('${elementoDelArray.id}')" class="btn btn-dark"> Añadir al carrito</button>
            </div>
            </div>`;
    });
}

// agregar al carrito

const agregarProducto = (prodId) => {
    const carrito= getStorage();
    const item = productosGenerales.find((prod) => prod.id === prodId)
    carrito.push(item)
    setStorage(carrito)//agregado
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {
    const carrito= getStorage();
    const contenedorCarrito = document.getElementById('contenedorCarrito');
    contenedorCarrito.innerHTML = " ";
    carrito.forEach((prod) => {
        contenedorCarrito.innerHTML += `
                <img src="${prod.img}" alt="">
                <h3>Titulo: ${prod.nombre}</h3>
                <h3>precio: ${prod.precio}</h3>
                <h3>medidas: ${prod.medidas}</h3>
                <button class="btn btn-danger" onclick="remove('${prod.id}')">X</button>
        `
    })
}

function vaciarCarProduct() {
    localStorage.removeItem("carrito");
    swal({
        title: "Se han eliminado los productos de tu carrito",
        icon: "success",
        button: "Cerrar",
    });
    actualizarCarrito();
    
}

function remove(id) {
    let carrito = getStorage()
    let carritoFinal = carrito.filter(e => e.id !== id);
    setStorage(carritoFinal)
    actualizarCarrito()
}

function mostrar() {
    document.getElementById('modalCar').style.display = 'block'
    actualizarCarrito()
}

function ocultar() {
    document.getElementById('modalCar').style.display = 'none'
    actualizarCarrito()
}

function enCarrito() {
    let carrito = getStorage()
    return carrito.some(e => e.id === id);
}

// function carritoAdd(id) {
//     let productoSeleccionado = productosGenerales.find(e => e.id === id)
//     let carrito = getStorage()
//     let indice = carrito.findIndex(e => e.id === id);
//     if (indice !== -1) {
//         carrito[indice].cantidad++
//         setStorage(carrito)
//     } else {
//         carrito.push(productoSeleccionado)
//         setStorage(carrito)
//     }
// }

function sumarUno(id){
    let carrito=getStorage();
    let indice = carrito.findIndex(e => e.id === id);
    carrito[indice].cantidad++
    setStorage(carrito)
    actualizarCarrito()
}


//logica

renderProductos(productosGenerales)

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLigbox)
})
btnCierra.addEventListener('click', () => {
    ligbox.style.display = 'none'
})
