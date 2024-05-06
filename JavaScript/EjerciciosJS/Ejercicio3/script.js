function agregarElemento() {
  let lista = document.getElementById("lista");
  let input = document.getElementById("textarea").value;
  const elementoLista = document.createElement("li");
  const button = document.createElement("button");

  elementoLista.textContent = input;
  button.textContent = "delete";

  elementoLista.append(button);
  lista.append(elementoLista);

  button.onclick = function () {
    elementoLista.remove();
  };
}
