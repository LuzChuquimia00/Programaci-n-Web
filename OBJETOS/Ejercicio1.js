////arrays
//
//const ejemploArray = [1, 2, 3];
//console.log(ejemploArray[1]);
//
////objetos
//const persona = {
//  //clave: valor
//  name: "Luz",
//  age: 17,
//  isWorking: true,
//  cats: ["negro", "noche", "pinguino"],
//  walk: function () {
//    //si la funcion retorna void es que no devuelve nada, sino,aclara el tipo de dato
//    //return "toy cansado jefe";
//    console.log("toy cansado jefe");
//    //si la funcion no devuelve ningun valor, va a devolver un undefined por default
//  },
//};
////dos formas de pedir el nombre
//console.log(persona.name);
//console.log(persona["name"]);
//console.log(persona.cats[1]);
////si cuando estan mostrando/ejecutando una funcion no le ponen el parentesis esta no funcionara
//console.log(persona.walk());
//
////resignamos el valor de la propiedad age
//persona.age = 17;
//
//console.log(persona.age);
////delete borra las propiedades seleccionadas del objeto
//delete persona.age;
("|--------------ACTIVIDADES--------------|");
//actividad
function createObject(name, subs) {
  const user = {
    name: name,
    subscribes: subs,
    hash: name * subs,
    getStatus: `El canal de ${name} tiene ${subs} subcriptores`,
  };

  return user;
}
console.log(createObject("BlackNasa", "100"));
