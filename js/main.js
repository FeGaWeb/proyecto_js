
const productosGenerales = [

    {
        id: "Producto1",
        nombre: "cuadro1",
        precio: 600000,
        img: '../img/img_cards/card_1.jpg',
        cantidad: 3,
    },

    {
        id: "Producto2",
        nombre: "cuadro2",
        precio: 600000,
        img: '../img/img_cards/card_2.jpg',
        cantidad: 3,
    },

    {
        id: "Producto3",
        nombre: "cuadro3",
        precio: 210000,
        img: '../img/img_cards/card_3.jpg',
        cantidad: 3,
    },

    {
        id: "Producto4",
        nombre: "cuadro4",
        precio: 300000,
        img: '../img/img_cards/card_4.jpg',
        cantidad: 3,
    },

    {
        id: "Producto5",
        nombre: "cuadro5",
        precio: 600000,
        img: '../img/img_cards/card_5.jpg',
        cantidad: 3,
    },

    {
        id: "Producto6",
        nombre: "cuadro6",
        precio: 600000,
        img: '../img/img_cards/card_6.jpg',
        cantidad: 3,
    },

    {
        id: "Producto7",
        nombre: "cuadro7",
        precio: 10000,
        img: '../img/img_cards/card_7.jpg',
        cantidad: 3,
    },

    {
        id: "Producto8",
        nombre: "cuadro8",
        precio: 300000,
        img: '../img/img_cards/card_8.jpg',
        cantidad: 3,
    },

    {
        id: "Producto9",
        nombre: "cuadro9",
        precio: 210000,
        img: '../img/img_cards/card_9.jpg',
        cantidad: 3,
    },

    {
        id: "Producto10",
        nombre: "cuadro10",
        precio: 300000,
        img: '../img/img_cards/card_10.jpg',
        cantidad: 3,
    },

    {
        id: "Producto11",
        nombre: "cuadro11",
        precio: 300000,
        img: '../img/img_cards/card_10.jpg',
        cantidad: 3,
    },

    {
        id: "Producto12",
        nombre: "cuadro12",
        precio: 300000,
        img: '../img/img_cards/card_10.jpg',
        cantidad: 3,
    },

]

let comprar;
let total = 0;

let GeneradorCards = ``;

function renderProductos (arrayProductos){
    
    const cardsContenedora = document.getElementById("cards_general")
    cardsContenedora.innerHTML = ''

    arrayProductos.forEach(elementoDelArray => {
        cardsContenedora.innerHTML += ` <div class="cards_general">
        
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
        </div>
      </div>`;

    });

}

// container carrito

const cerrarCarrito = document.querySelector('#cerrarCarrito')
const modalContainer = document.querySelector('#modalCar')

function mostrar(){
    document.getElementById('modalCar').style.display = 'block'
    actualizarCarrito()
}

function ocultar(){
    document.getElementById('modalCar').style.display = 'none'
    actualizarCarrito()
}

// eventos 

const btnCierra = document.querySelector('#btn-cierra')
const btnAdelanta = document.querySelector('#btn-adelanta')
const btnRetrocede = document.querySelector('btn-retrocede')

const imagenes = document.querySelectorAll('#galeria img')
const ligbox = document.querySelector('#contenedor-principal')
const imagenActiva = document.querySelector('#img-activa')
let indiceImagen = 0

const abreLigbox = (event) => {
    imagenActiva.src = event.target.src;
    ligbox.style.display = 'flex'
    indiceImagen = Array.from(imagenes).indexOf(event.target)
}

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLigbox)
})

btnCierra.addEventListener('click', () => {
    ligbox.style.display = 'none'
})

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

// buscador

const boton = document.querySelector('#boton')
const resultado = document.querySelector('#cards_general')

const filtrar = () => {
    
    const formulario = document.querySelector('#formularioBusqueda')

    resultado.innerHTML = '';
    console.log(formulario.value)
    const texto = formulario.value.toUpperCase().trim();
    console.log(texto)
    const resultadoMatch = productosGenerales.filter(e =>{
        return e.nombre.toUpperCase().match(texto)
    })

    console.log(resultadoMatch)
    
    renderProductos(resultadoMatch)

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
        producto no encontrado
        `
    }
}

boton.addEventListener('click', (e) =>{

    e.preventDefault()
    filtrar()
})

renderProductos(productosGenerales)

// agregar al carrito

let carrito = []

const agregarProducto = (prodId) =>{
    const item = productosGenerales.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () =>{

    const contenedorCarrito = document.getElementById('modalCar')
    console.log(contenedorCarrito)
    console.log(carrito)

    carrito.forEach((prod) =>{
        contenedorCarrito.innerHTML += `
        <img src="${prod.img}" alt="">
        <h3>Titulo: ${prod.nombre}</h3>
        <h3>precio: ${prod.precio}</h3>
        <h3>cantidad: ${prod.cantidad}</h3>
        `
    })
}


// librerías

function alertCarProduct(){
     
    swal({
        title: "Se han eliminado los productos de tu carrito",
        icon: "success",
        button: "Cerrar",
      });

}

//storage y json

function remove(id){
    let car=JSON.parse(localStorage.getItem("carrito"));
    let carritoFinal = car.filter(e=>e.id!==id);
    localStorage.setItem("carrito", JSON.stringify(carritoFinal))
}

function getStorage(){
    let storage = JSON.parse(localStorage.getItem("carrito")) || [];
    return storage;
}

function setStorage(array){
    localStorage.setItem("carrito", JSON.stringify(array));
}

function enCarrito(){
    let carrito = getStorage()
    return carrito.some(e=>e.id===id);
}

function carritoAdd(id){
    let productoSeleccionado = productosGenerales.find(e=>e.id===id)
    let carrito= getStorage()
    let indice = carrito.findIndex(e=>e.id===id);
    if(indice!==-1){
        carrito[indice].cantidad++
        setStorage(carrito)
    }else{
        carrito.push({id:productoSeleccionado.id, pedidos:1})
        setStorage(carrito)
    }
}





























