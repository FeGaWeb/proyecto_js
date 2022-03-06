const producto1 = {
    id: "1",
    nombre: "cuadro1",
    precio: 600000
}

const producto2 = {
    id: "2",
    nombre: "cuadro2",
    precio: 600000
}

const producto3 = {
    id: "3",
    nombre: "cuadro3",
    precio: 210000
}

const producto4 = {
    id: "4",
    nombre: "cuadro4",
    precio: 300000
}

const producto5 = {
    id: "5",
    nombre: "cuadro5",
    precio: 600000
}

const producto6 = {
    id: "6",
    nombre: "cuadro6",
    precio: 600000
}

const producto7 = {
    id: "7",
    nombre: "cuadro7",
    precio: 10000
}

const producto8 = {
    id: "8",
    nombre: "cuadro8",
    precio: 300000
}

const producto9 = {
    id: "9",
    nombre: "cuadro9",
    precio: 210000
}

const producto10 = {
    id: "10",
    nombre: "cuadro10",
    precio: 300000
}

let comprar;
let total=0;

function descuentoPrimerCompra(descuento){
    if(descuento>10000){
        descuento = descuento*0.9;
    }

    return descuento;
}

do {
    const productoSeleccionado = prompt(`
    selecciona un cuadro que desees comprar 
    1. ${producto1.nombre} $ ${producto1.precio} 
    2. ${producto2.nombre} $ ${producto2.precio} 
    3. ${producto3.nombre} $ ${producto3.precio} 
    4. ${producto4.nombre} $ ${producto4.precio} 
    5. ${producto5.nombre} $ ${producto5.precio} 
    6. ${producto6.nombre} $ ${producto6.precio} 
    7. ${producto7.nombre} $ ${producto7.precio} 
    8. ${producto8.nombre} $ ${producto8.precio} 
    9. ${producto9.nombre} $ ${producto9.precio} 
    10. ${producto10.nombre} $ ${producto10.precio} 
    `);

    switch (productoSeleccionado) {

        case "1":
            alert(`has seleccionado ${producto1.nombre}, se agregó a tu carrito`)
            total += producto1.precio;
            break;
        case "2":
            alert(`has seleccionado ${producto2.nombre}, se agregó a tu carrito`)
            total += producto2.precio;
            break;
        case "3":
            alert(`has seleccionado ${producto3.nombre}, se agregó a tu carrito`)
            total += producto3.precio;
            break;
        case "4":
            alert(`has seleccionado ${producto4.nombre}, se agregó a tu carrito`)
            total += producto4.precio;
            break;
        case "5":
            alert(`has seleccionado ${producto5.nombre}, se agregó a tu carrito`)
            total += producto5.precio;
            break;
        case "6":
            alert(`has seleccionado ${producto6.nombre}, se agregó a tu carrito`)
            total += producto6.precio;
            break;
        case "7":
            alert(`has seleccionado ${producto7.nombre}, se agregó a tu carrito`)
            total += producto7.precio;
            break;
        case "8":
            alert(`has seleccionado ${producto8.nombre}, se agregó a tu carrito`)
            total += producto8.precio;
            break;
        case "9":
            alert(`has seleccionado ${producto9.nombre}, se agregó a tu carrito`)
            total += producto9.precio;
            break;
        case "10":
            alert(`has seleccionado ${producto10.nombre}, se agregó a tu carrito`)
            total += producto10.precio;
            break;
        default:
            alert("esta no es una opción válida");
            break;
    }

    comprar = prompt("¿deseas seguir con la compra? si/no")

} while(comprar !== "no")
let precioConDescuento = descuentoPrimerCompra(total)
alert("el total de la compra es $" + total +"precio con descuento $" + precioConDescuento)