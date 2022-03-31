const carrito = [];
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

function descuentoPrimerCompra(descuento) {
    if (descuento > 10000) {
        descuento = descuento * 0.9;
    }

    return descuento;
}


const agregarCarrito = (producto) => {
    carrito.push(producto)
}

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
              <a href="#" class="btn btn-dark addToCart" onclick="agregarCarrito()"> Añadir al carrito</a>
              </div>
        </div>
      </div>`;
    });

}



/* function botonBuscador () {
    const search = document.getElementById("input-productos").value;
    console.log(search)
}


function buscarProducto(){
    const NombreProductosBuscados = document.getElementById("input-productos").value;
    console.log(NombreProductosBuscados);
} */

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

//btnAdelanta.addEventListener('click', adelantaImagen);


const retrocedeImagen = () => {
    if (indiceImagen === 0) {
        indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src
    indiceImagen--
}

//btnRetrocede.addEventListener('click', retrocedeImagen)

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

/* do {
    const productoSeleccionado = prompt(`
                selecciona un cuadro que desees comprar
                1. $ {
                    producto1.nombre
                }
                $ $ {
                    producto1.precio
                }
                2. $ {
                    producto2.nombre
                }
                $ $ {
                    producto2.precio
                }
                3. $ {
                    producto3.nombre
                }
                $ $ {
                    producto3.precio
                }
                4. $ {
                    producto4.nombre
                }
                $ $ {
                    producto4.precio
                }
                5. $ {
                    producto5.nombre
                }
                $ $ {
                    producto5.precio
                }
                6. $ {
                    producto6.nombre
                }
                $ $ {
                    producto6.precio
                }
                7. $ {
                    producto7.nombre
                }
                $ $ {
                    producto7.precio
                }
                8. $ {
                    producto8.nombre
                }
                $ $ {
                    producto8.precio
                }
                9. $ {
                    producto9.nombre
                }
                $ $ {
                    producto9.precio
                }
                10. $ {
                    producto10.nombre
                }
                $ $ {
                    producto10.precio
                }
                `);

    switch (productoSeleccionado) {

        case "1":
            alert(`
                has seleccionado $ {
                    producto1.nombre
                }, se agregó a tu carrito `)
            total += producto1.precio;
            break;
        case "2":
            alert(`
                has seleccionado $ {
                    producto2.nombre
                }, se agregó a tu carrito `)
            total += producto2.precio;
            break;
        case "3":
            alert(`
                has seleccionado $ {
                    producto3.nombre
                }, se agregó a tu carrito `)
            total += producto3.precio;
            break;
        case "4":
            alert(`
                has seleccionado $ {
                    producto4.nombre
                }, se agregó a tu carrito `)
            total += producto4.precio;
            break;
        case "5":
            alert(`
                has seleccionado $ {
                    producto5.nombre
                }, se agregó a tu carrito `)
            total += producto5.precio;
            break;
        case "6":
            alert(`
                has seleccionado $ {
                    producto6.nombre
                }, se agregó a tu carrito `)
            total += producto6.precio;
            break;
        case "7":
            alert(`
                has seleccionado $ {
                    producto7.nombre
                }, se agregó a tu carrito `)
            total += producto7.precio;
            break;
        case "8":
            alert(`
                has seleccionado $ {
                    producto8.nombre
                }, se agregó a tu carrito `)
            total += producto8.precio;
            break;
        case "9":
            alert(`
                has seleccionado $ {
                    producto9.nombre
                }, se agregó a tu carrito `)
            total += producto9.precio;
            break;
        case "10":
            alert(`
                has seleccionado $ {
                    producto10.nombre
                }, se agregó a tu carrito `)
            total += producto10.precio;
            break;
        default:
            alert("esta no es una opción válida");
            break;
    }

    comprar = prompt("¿deseas seguir con la compra? si/no")

} while(comprar !== "no")
let precioConDescuento = descuentoPrimerCompra(total)
alert("el total de la compra es $" + total +"precio con descuento $" + precioConDescuento) */