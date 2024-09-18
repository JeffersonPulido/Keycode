import React from "react";

export const Main = ({ theme, auth, texts }) => {
  return (
    /** Cambia nuestro clase de css dependiendo */
    <main className={theme}>
      {/* Muestro dinamicamente mis textos si estan en ES o EN */}
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};
