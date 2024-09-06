import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      {/* Seccion Bienvenida component */}
      <Welcome />
      {/* Services component */}
      <Services/>
    </>
  );
}

export default App;
