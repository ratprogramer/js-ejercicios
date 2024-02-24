/*
Ejercicio 8: Encontrar el máximo y el mínimo de un array
• Crea un array con números.
• Encuentra el valor máximo y mínimo del array.
• Imprime el valor máximo y mínimo.
*/

const numeros = [0, 1, 2, 3, 4, 5];
console.log(numeros);
const nmax = Math.max(...numeros);
console.log(`el numero maximo es: ${nmax}`);
const nmin = Math.min(...numeros);
console.log(`el numero minimo es: ${nmin}`);
