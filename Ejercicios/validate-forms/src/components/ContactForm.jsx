import React from "react";
import { useForms } from "../hooks/useForms";

const valorDefecto = {
    nombre: "",
    email: "",
    asunto: "",
    observaciones: ""
}

const ContactForm = () => {
  const { form, manejadorCambios } = useForms(valorDefecto);

  const enviarFormulario = () => {
    console.log("Enviando form...");
  };

  return (
    <>
      <h1>Formulario de contacto</h1>
      <form onSubmit={enviarFormulario}>
        {/* Nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre..."
          required
          value={form.nombre}
          onChange={manejadorCambios}
        />
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu correo electronico..."
          required
          value={form.email}
          onChange={manejadorCambios}
        />
        {/* Asunto */}
        <input
          type="text"
          name="asunto"
          placeholder="Asunto..."
          required
          value={form.asunto}
          onChange={manejadorCambios}
        />
        {/* Observaciones */}
        <textarea
          name="observaciones"
          placeholder="Escribe tus observaciones..."
          required
          cols={50}
          rows={5}
          value={form.observaciones}
          onChange={manejadorCambios}
        />
        {/* Button */}
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default ContactForm;
