/*Ejercicio 5: Filtrar elementos de un array
• Crea un array con nombres de personas y sus edades.
• Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
• Imprime los nombres de las personas que cumplen con el criterio.
• Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un
mensaje)*/
const personas = [
    {nombre:"juan",edad:23},
    {nombre:"lorena",edad:2},
    {nombre:"pepe",edad:18},
    {nombre:"maria",edad:13}
];

const mayores = personas.filter (persona => persona.edad >= 18)
console.log("Los mayores de edad son: ")
mayores.forEach(persona => console.log(persona.nombre));

for(let mayor of mayores)
{
    console.log(`felicidades ${mayor.nombre} ya estas viejito`)
}
