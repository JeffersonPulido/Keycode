import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = "light";

const ThemeProvider = ({ children }) => {
  /** useStates iniciales */
  const [theme, setTheme] = useState(initialTheme);

  /** Funcion manejadora para el tema */
  const handleTheme = (evento) => {
    setTheme(evento.target.value);
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
