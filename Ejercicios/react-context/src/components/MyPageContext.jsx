import React from "react";
import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";
import { FooterContext } from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

export const MyPageContext = () => {
  return (
    <div className="my-page">
      {/* Estos los proveedores de informacion */}
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            {/* Estas son mis componentes */}
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
