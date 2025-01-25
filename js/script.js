console.log("¡El archivo JavaScript está cargando correctamente!");

const productos = [
    { nombre: "Adidas Campus Brown", precio: 1300 },
    { nombre: "Adidas Campus Black", precio: 1300 },
    { nombre: "Nike Dunk SB Grey", precio: 1450 },
    { nombre: "Adidas Samba Pink", precio: 1650 },
];

function calcularDescuento(precio, descuento) {
    return precio - (precio * (descuento / 100));
}


// entrada de datos: pedir información al usuario

function obtenerProducto() {
    console.log("Productos disponibles:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    }); // ciclos: vamos a usar un forEach para mostrar la lista de productos disponibles

    let opcion = parseInt(prompt("¿Qué producto quieres comprar? Ingresa el número correspondiente:\n1. Adidas Campus Brown\n2. Adidas Campus Black\n3. Nike Dunk SB Grey\n4. Adidas Samba Pink"));
    if (opcion < 1 || opcion > productos.length || isNaN(opcion)) {
        alert("Opción no válida. Por favor, vuelve a intentarlo.");
        return null; // si la entrada es inválida, devuelve "null"
    } // condicionales: vamos a usar if para validar las opciones y descuentos ingresados por el usuario
    return productos[opcion - 1]; // devuelve el producto seleccionado
}


// procesamiento: calcular el precio con descuento

function calcularDescuentoProducto(producto) {
    let descuento = parseInt(prompt(`¿Qué descuento tienes para ${producto.nombre}? Ingresa un número entre 0 y 100:`));
    if (isNaN(descuento) || descuento < 0 || descuento > 100) {
        alert("Descuento no válido. Por favor, vuelve a intentarlo.");
        return null; // si la entrada es inválida, devuelve "null"
    }
    let precioFinal = calcularDescuento(producto.precio, descuento); // usa la función auxiliar "calcularDescuento"
    return { descuento, precioFinal };
}


// salida: mostrar el resultado al usuario 

function mostrarResultado(producto, descuento, precioFinal) {
    alert(`El precio final de las ${producto.nombre} con un descuento del ${descuento}% es: $${precioFinal}`);
    console.log(`Producto: ${producto.nombre}`);
    console.log(`Precio original: $${producto.precio}`);
    console.log(`Descuento aplicado: ${descuento}%`);
    console.log(`Precio final: $${precioFinal}`);
}


// invocar las funciones

function simuladorPrecios() {
    const productoSeleccionado = obtenerProducto(); // paso 1: entrada de datos
    if (!productoSeleccionado) return; // Si no se selecciona un producto válido, vamos a detener acá.

    const resultado = calcularDescuentoProducto(productoSeleccionado); // paso 2: procesamiento
    if (!resultado) return; // si no se calcula correctamente, vamos a detener acá.

    mostrarResultado(productoSeleccionado, resultado.descuento, resultado.precioFinal); // paso 3: salida
}

// ejecutar el simulador

simuladorPrecios();