import React from 'react'

export const Footer = ({ theme, texts }) => {
  return (
    /** Cambia nuestro clase de css dependiendo */
    <footer className={theme}>
        {/* Muestro dinamicamente mis textos si estan en ES o EN */}
        <h4>{texts.footerTitle}</h4>
    </footer>
  )
}