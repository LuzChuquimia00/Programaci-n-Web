//metodo push
const frutas = ["banana", "frutilla"];
const nuevaFruta = ["pera"];

console.log(frutas);

frutas.push(nuevaFruta);

console.log(frutas);

//Metodo shift
const frutasEliminada = frutas.shift();
console.log(frutaEliminada);

//------Ejercicios-----//
//ACT1//
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers); //Lo que ejecuta es lo siguiente: [10, 2, 30, 4, 5]
