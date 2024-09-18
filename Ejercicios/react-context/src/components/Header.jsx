import React from "react";

export const Header = ({
  theme,
  auth,
  texts,
  handleTheme,
  handleLanguage,
  handleAuth,
}) => {
  return (
    <>
    {/* Tema para estilos */}
        <header className={theme}>
            {/* Titulo y subtitulo */}
            <h2>{texts.headerTitle}</h2>
            <h3>{texts.headerSubtitle}</h3>
            {/* Cambiar idioma */}
            <select name="language" onChange={handleLanguage}>
                <option value="es">ESPAÑOL</option>
                <option value="en">INGLES</option>
            </select>
            {/* Modo dia y modo noche */}
            <input type="radio" name='theme' id="light" value='light' onChange={handleTheme}/>
            <label htmlFor="light">{texts.headerLight}</label>
            <input type="radio" name='theme' id="dark" value='dark' onChange={handleTheme}/>
            <label htmlFor="dark">{texts.headerDark}</label>
            {/* Autenticarnos / Iniciar Sesion */}
            <button onClick={handleAuth}>
                {
                    auth ? texts.buttonLogout : texts.buttonLogin
                }
            </button>
        </header>
    </>
  );
};
