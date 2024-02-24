const nombres = [];

function ingresar(){
    for (let i = 0; i <3; i++){
        let nombre = prompt("ingrese nombre");
        nombres.push(nombre);
    }
}
ingresar()
nombres.pop();
nombres.splice(1);
console.log(nombres);
