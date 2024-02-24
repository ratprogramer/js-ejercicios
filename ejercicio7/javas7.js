/*
Ejercicio 7: Eliminar elementos duplicados de un array
• Crea un array con elementos duplicados.
• Elimina los elementos duplicados del array.
*/
const numerosDuplicados = [1,1,2,2,3,3,4,4,5,5];
const numerosNoDuplicados = [...new Set(numerosDuplicados)];

console.log(numerosNoDuplicados);