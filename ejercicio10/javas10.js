/*
Ejercicio 10: Convertir un array en un objeto
• Crea un array con elementos de diferentes tipos.
• Convierte el array en un objeto, donde cada elemento del array sea una propiedad del objeto.
*/
const array1 =["pedro", 23, true];
const persona = {}
persona ["nombre"] = array1[0]   
persona ["edad"] = array1[1]
persona ["permiso"] = array1[2]    
console.log(persona)

