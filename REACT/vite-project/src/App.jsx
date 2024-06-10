import { Estado } from "./components/estado/Estado";
import { Contenido } from "./components/miPrimerComponente/MiPrimerComponente";
function App() {
  return (
    <>
      <Contenido name={"Gris"} lastName={"Nieve"} />;
      <Estado />
    </>
  );
}

export default App;
