import { useEffect } from "react";
import { useState } from "react";

export default function NuevoProyecto() {
  const [personajes, setData] = useState({});
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((personajes) => setData(personajes.results));
  }, []);

  return (
    <>
      {!personajes ? (
        <>Loading...</>
      ) : (
        <>
          {personajes.map((personaje) => (
            <div>
              <h2>
                objeto title: {personaje.name}
                id:{personaje.id}
              </h2>
              <p>body: {personaje.location.name}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
}

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
