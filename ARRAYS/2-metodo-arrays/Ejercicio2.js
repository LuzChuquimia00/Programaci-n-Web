//ACT2//
const array = ["Luz", "Volley", "Manzana Verde"];

function procesarPedido(pedidos) {
  //codigo
  const nombreDelCLiente = pedidos.shift();
  const fruto = "Papaya";
  pedidos.unshift(fruto);
  pedidos.push(nombreDelCLiente);
  return pedidos;
}
console.log(procesarPedido(array));
