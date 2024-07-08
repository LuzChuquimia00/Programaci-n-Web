import { useEffect } from "react";
import { useState } from "react";
export default function GetPosts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <>
      {!data ? (
        <>Loading...</>
      ) : (
        <>
          <div className="grilla">
            {data.map((personaje, i) => (
              <div className="Borde" key={i}>
                <img className="fotoDinamica" src={personaje.image} />
                <h2>
                  Objeto title: {personaje.name}
                  <p>Id: {personaje.id}</p>
                </h2>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
