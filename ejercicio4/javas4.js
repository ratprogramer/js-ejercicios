/*
Ejercicio 4: Ordenar un array
• Crea un array con números aleatorios.
• Ordena el array de forma ascendente.
• Ordena el array de forma descendente.
• Imprime el array antes y después de ordenarlo.
*/

const array = [1,2,7,8,345,9,454,6,0,23,342];
console.log(array);
array.sort(function(a,b){return a - b});
console.log(array);

array.sort(function(a,b){return b - a});
console.log(array);