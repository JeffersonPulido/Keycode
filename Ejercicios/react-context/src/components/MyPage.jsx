import React, { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

/** VALORES INICIALES DE LOS USESTATE */
const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;
/** JSON CON TEXTOS EN DOS IDIOMAS */
const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

export const MyPage = () => {
  /** useStates iniciales */
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  /** Funcion manejadora para el tema */
  const handleTheme = (evento) => {
    setTheme(evento.target.value);
  };
  /** Funcion manejadora para el lenguaje */
  const handleLanguage = (evento) => {
    if (evento.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };
  /** Funcion manejadora para simular la autenticacion */
  const handleAuth = () => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        auth={auth}
        texts={texts}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        handleAuth={handleAuth}
      />
      <Main theme={theme} auth={auth} texts={texts} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};
