import { useState } from "react";

export const useForms = (valorDefecto, validaciones) => {
  //Estado para contenido del formulario
  const [form, setForm] = useState(valorDefecto);
  //Estado para almacenar los errores
  const [errores, setErrores] = useState({});

  //Funcion que captura los cambios del input que la ejecuta
  const manejadorCambios = (element) => {
    const { name, value } = element.target;
    //Haciendo copia del valor original de form y adicionando el valor del input ejecutado
    setForm({
      ...form,
      [name]: value,
    });
  };

  //Funcion para validar los datos previos al envio cuando me salgo del input o doy clic afuera
  const manejadorSalidaInput = (element) => {
    manejadorCambios(element)
    //Valido el contenido de mi form, y si hay un error, lo guardo en el estado errors
    setErrores(validaciones(form))
  }

  //Funcion que envia la data(form) del formulario


  return {
    form,
    errores,
    manejadorCambios,
    manejadorSalidaInput
  };
};
