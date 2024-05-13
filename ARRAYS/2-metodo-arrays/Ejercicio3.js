//While(mientras)//Eplicacion para hacer bucles
//while (contador < array.length) {
//    console.log(array(contador));
//    contador++;
//  }

//for
//  for (let i = 0; i < array.length; i++) {
//    console.log([i], array[i]);
//  }

// foreach
//  array.forEach((element) => {
//    console.log(element);
//  });

//ACT3
const lista = [1, 2, 4, 5, 5, 6, 6, 7];
let contador = 0;

function sumarPares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      contador += numeros[i];
    }
  }
  return contador;
}

console.log(sumarPares(lista));
