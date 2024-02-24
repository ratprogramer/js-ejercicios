/*
Ejercicio 11:
Un pequeño negocio necesita un sistema para gestionar su inventario de productos. El sistema debe permitir al usuario:
• Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de
objetos)
• Listar todos los productos: mostrar información completa de cada producto.
• Buscar un producto por nombre: mostrar información del producto si existe.
• Eliminar un producto: eliminar producto del inventario.
• Actualizar la cantidad en stock: modificar la cantidad disponible de un producto.
*/

let inventario = [];
function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let descripcion = prompt("Ingrese la descripción del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad en stock del producto:"));
    let categoria = prompt("Ingrese la categoría del producto:");

    let producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    };

    inventario.push(producto);
    console.log("Producto agregado correctamente.");
}
function listarProductos() {
    console.log("Lista de Productos:");
    inventario.forEach(producto => {
        console.log("Nombre: " + producto.nombre);
        console.log("Descripción: " + producto.descripcion);
        console.log("Precio: " + producto.precio);
        console.log("Cantidad en stock: " + producto.cantidad);
        console.log("Categoría: " + producto.categoria);
        console.log("-------------------------");
    });
}
function buscarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a buscar:");
    let productoEncontrado = inventario.find(producto => producto.nombre === nombre);
    if (productoEncontrado) {
        console.log("Información del producto:");
        console.log("Nombre: " + productoEncontrado.nombre);
        console.log("Descripción: " + productoEncontrado.descripcion);
        console.log("Precio: " + productoEncontrado.precio);
        console.log("Cantidad en stock: " + productoEncontrado.cantidad);
        console.log("Categoría: " + productoEncontrado.categoria);
    } else {
        console.log("Producto no encontrado.");
    }
}
function eliminarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a eliminar:");
    let indice = inventario.findIndex(producto => producto.nombre === nombre);
    if (indice !== -1) {
        inventario.splice(indice, 1);
        console.log("Producto eliminado correctamente.");
    } else {
        console.log("Producto no encontrado.");
    }
}
function actualizarCantidad() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let cantidad = parseInt(prompt("Ingrese la nueva cantidad en stock:"));
    let producto = inventario.find(producto => producto.nombre === nombre);
    if (producto) {
        producto.cantidad = cantidad;
        console.log("Cantidad actualizada correctamente.");
    } else {
        console.log("Producto no encontrado.");
    }
}
function main() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Listar productos\n3. Buscar producto por nombre\n4. Eliminar producto\n5. Actualizar cantidad en stock\n6. Salir");
        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                listarProductos();
                break;
            case "3":
                buscarProducto();
                break;
            case "4":
                eliminarProducto();
                break;
            case "5":
                actualizarCantidad();
                break;
            case "6":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "6");
}
main();
