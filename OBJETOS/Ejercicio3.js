//
const objeto = { a: true, b: 42, c: false };

function getBooleanos(objeto) {
  const arr = [];
  for (const propiedades in objeto) {
    if (objeto[propiedades] === true || objeto[propiedades] === false) {
      arr.push(propiedades);
    }
  }

  return arr;
}
console.log(getBooleanos(objeto));
