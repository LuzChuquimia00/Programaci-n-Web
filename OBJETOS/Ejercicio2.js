////1- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que?
//const person = {
//  name: "John",
//  age: 30,
//  hobbies: ["reading", "music", "sports"],
//};
//
//const { weight = 70, height = 180 } = person;
//console.log(weight, height); //EJECUTA
////RTA: SE IMPRIMIRIA <CONST> PORQUE ESTAN LAS VARIABLES QUE EJECUTARON
//
//2- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?

const person1 = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { age: personAge } = person1;
console.log(age);

//RTA: Al ejecutarlo da error, porque la variable no esta definida osea no tiene un valor x la cual se ejecute

//3- ¿Cómo se llama el atajo que nos permite recuperar el valor de una propiedad de un objeto?
const{name,age} = persona2;
console.log{age};
//RTA:
