import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from './../context/LanguageContext';


export const FooterContext = () => {
  /**Aqui por medio del hook useContext, puedo acceder a la informacion  */
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    /** Cambia nuestro clase de css dependiendo */
    <footer className={theme}>
      {/* Muestro dinamicamente mis textos si estan en ES o EN */}
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};
