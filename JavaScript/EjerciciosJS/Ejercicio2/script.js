let resultado = 0; 
function number1(){
    //Siempre estas funciones deben poseer un valor de retorno

    const number1 = document.getElementById("number1").value;
    return parseInt(number1);
}

function number2(){
    //Siempre estas funciones deben poseer un valor de retorno

    const number2 = document.getElementById("number2").value;
    return parseInt(number2);
}

function calculate(){
    let resultado = number1() + number2(); //Para ejecutar una funcion al final debes de poner los parentesis 
    document.getElementById("resultado").textContent = resultado.toString();
    //console.log(resultado)//para verificar si tienes errores.
}
