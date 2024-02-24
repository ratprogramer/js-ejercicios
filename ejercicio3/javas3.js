/*
Ejercicio 3: Buscar un elemento en un array
• Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
• Busca un elemento específico en el array por su valor.
• Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
• Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).
*/
document.write(`["a", "b", "c", "d", 1, 2, 3, 4, true, false,]`)
const listas = ["a", "b", "c", "d", 1, 2, 3, 4, true, false]
var busqueda = prompt("Que valor desea buscar?: ")

console.log(listas.find(listas => listas == busqueda ? busqueda : "no fue encontrado"))

