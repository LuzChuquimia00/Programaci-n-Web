import { Estado } from "./components/estado/Estado";
import { Contenido } from "./components/miPrimerComponente/MiPrimerComponente";
import GetPosts from "./components/GetPosts";
import NuevoProyecto from "./components/NuevoProyecto";
import { ConvertidorMonedas } from "./components/convertidor/convertidorPesos";
function App() {
  return (
    <>
      <GetPosts />
    </>
  );
}

export default App;
//lo saque un toque del return ya no me dejaba comentarlos
//<Contenido name={"Gris"} lastName={"Nieve"} />;
//<Estado />
//<GetPosts />
