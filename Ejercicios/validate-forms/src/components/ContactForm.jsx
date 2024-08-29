import React from "react";
import { useForms } from "../hooks/useForms";

//Valores por defecto para el formulario
const valorDefecto = {
  nombre: "",
  email: "",
  asunto: "",
  observaciones: "",
};

//Validaciones para verificar el contenido y que tengan el formato correcto
const validaciones = (form) => {
  //Puede tener cualquier caracter alfanumerico + @ + cualquier letra + . + cualquier caracter minimo 2 maximo 6
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
  //Puede tener minimo 1 y maximo 255 caracteres
  let regexComments = /^.{1,255}$/;

  let errorsFormulario = {};

  //Validaciones de inputs vacios y sin el patron especificado
  if (!form.nombre.trim()) {
    errorsFormulario.nombre = "El campo es obligatorio";
  }
  if (!form.email.trim()) {
    errorsFormulario.email = "El campo es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errorsFormulario.email =
      "El campo no tiene el formato de un correo electronico";
  }
  if (!form.asunto.trim()) {
    errorsFormulario.asunto = "El campo es obligatorio";
  }
  if (!form.observaciones.trim()) {
    errorsFormulario.observaciones = "El campo es obligatorio";
  } else if (!regexComments.test(form.observaciones.trim())) {
    errorsFormulario.observaciones =
      "El campo debe tener minimo 1 caracter y maximo 255 caracteres";
  }

  return errorsFormulario;
};

const ContactForm = () => {
  //Llamado a nuestro custom hook
  const { form, errores, manejadorCambios, manejadorSalidaInput } = useForms(
    valorDefecto,
    validaciones
  );

  //Funcion de envio (submit) del formulario
  const enviarFormulario = () => {
    console.log("Enviando form...");
  };

  return (
    <>
      <h1>Formulario de contacto</h1>
      {/* con el evento onSubmit ejecutamos una funcion cuando se envia el formulario */}
      <form onSubmit={enviarFormulario}>
        {/* Nombre */}
        <p>Nombre</p>
        <input
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre..."
          required
          value={form.nombre}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {/* Muestra la etiqueta p con el error solo si tiene un error en nombre */}
        {errores.nombre && <p className="p-error">{errores.nombre}</p>}
        {/* Email */}
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="Escribe tu correo electronico..."
          required
          value={form.email}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {/* Muestra la etiqueta p con el error solo si tiene un error en email */}
        {errores.email && <p className="p-error">{errores.email}</p>}
        {/* Asunto */}
        <p>Asunto</p>
        <input
          type="text"
          name="asunto"
          placeholder="Asunto..."
          required
          value={form.asunto}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {/* Muestra la etiqueta p con el error solo si tiene un error en asunto */}
        {errores.asunto && <p className="p-error">{errores.asunto}</p>}
        {/* Observaciones */}
        <p>Observaciones</p>
        <textarea
          name="observaciones"
          placeholder="Escribe tus observaciones..."
          required
          cols={50}
          rows={5}
          value={form.observaciones}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {/* Muestra la etiqueta p con el error solo si tiene un error en observaciones */}
        {errores.observaciones && (
          <p className="p-error">{errores.observaciones}</p>
        )}
        {/* Button que envia el formulario */}
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default ContactForm;
