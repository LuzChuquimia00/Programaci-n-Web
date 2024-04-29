//Declarar funciones

//funcion tradicional 
/*
function myFunction(){
    return
}
*/

//funcion flecha o arrow function
/*
const myFunction = () => {

}
*/

let contador = 0
//dato importante -> Siempre los nombres de las funciones siguen la nomenclatura camelCase.
function AumentaNumero(){
    //let number = document.getElementById("number").textContent = contador; 
    contador = contador + 1 
    document.getElementById("number").textContent = contador;
    //console.log(counter) 
}

function DisminuyeNumero(){
    //let number = document.getElementById("number").textContent = contador; 
    contador = contador - 1 
    document.getElementById("number").textContent = contador;
    //console.log(counter) 
}