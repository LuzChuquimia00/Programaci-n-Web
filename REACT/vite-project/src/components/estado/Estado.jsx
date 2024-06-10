//Hooks-Ganchos -> useState
import { useEffect, useState } from "react";
//camelcase es la misma de manera de escribir en la cual cada palabra nueva arranca con Mayuscula.
//

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };
  const handleClickn = () => {
    setContador(contador - 1);
  };
  //codigo
  //  userEffect(() => {}, []);
  //ejemplo del codigo
  //El userEffect se va a ejecutar la cantidad de veces que las dependencias se actualize
  useEffect(() => {
    console.log("El contador se ha actualizado");
  }, [contador]);
  //  //Si no le pasan dependencias se ejecutara solo al principio de la app
  //  //en el primer render.
  //  userEffect(() => {
  //    console.log("El contador se ha actualizado");
  //  }, []);
  //  //sino se le pasa el array de dependencias siempre se va a ejecutar.
  //  //userEffect(() => {
  //    console.log("El contador se ha actualizado");
  //  });
  const arrayPersonajes = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  return (
    <>
      <div>
        {
          //cuando despues de la funcion flecha hay parentesis significa que el return es implicito osea retorna lo que este en los parentesis
          //return implicito
          arrayPersonajes.map((personaje, i) => (
            <div key={i}>
              <h2>
                {personaje.name}
                {personaje.lastName}
              </h2>
              <p>Planet: {personaje.planet}</p>
              <img src={personaje.image} alt="descripcion"></img>
            </div>
          ))
        }
      </div>
      <button onClick={handleClick}>Aumentar </button>
      <button onClick={handleClickn}>Disminuir </button>
      <p>{contador}</p>
    </>
  );
};
