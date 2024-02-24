/*
Ejercicio 9: Agrupar elementos de un array por una propiedad
• Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
• Agrupa los elementos del array por el valor de la propiedad común
*/

const productos = [
    {color: "rojo", tamaño: "s", tipo: "camisa"},
    {color: "azul", tamaño: "m", tipo: "pantalon"},
    {color: "rojo", tamaño: "l", tipo: "camisa"},
];
const color = productos.filter (producto => producto.color == "rojo")

console.log(color);