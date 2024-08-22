import { useState } from "react";
import { Selects } from "./components/Selects";

const App = () => {
  return (
    <div className="container-app">
      <h1>Aprendizaje React</h1>
      <p>Selects Anidados</p>
      <hr />
      <Selects />
    </div>
  );
};

export default App;
