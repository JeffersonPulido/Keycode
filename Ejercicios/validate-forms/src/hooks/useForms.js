import { useState } from "react";

export const useForms = (valorDefecto, validaciones) => {
  //Estado para contenido del formulario
  const [form, setForm] = useState(valorDefecto);
  //Estado para almacenar los errores
  const [errores, setErrores] = useState({});
  //Estado para Loader
  const [cargando, setCargando] = useState(false)

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
  const enviarFormulario = (element) => {
    // Prevenir accion del submit (Accion por defecto)
    element.preventDefault();
    //Validacion de errores
    setErrores(validaciones(form))
    //Si no existen errores continua a la API
    if (Object.keys(errores).length === 0) {
      //Esta cargando los datos 'simulado'
      setCargando(true)
      //Intenta hacer el siguiente bloque
      try {
        //Capturo la respuesta de axios y por medio de POST envio a url falsa mi body (Son los datos del form)
        const status = axios.post('/api/falsa/usuario',{
          body: form
        })
        //Valido si la respuesta de axios fue positiva para ejecutar algo
        if(status === 201){
          console.log('Se ha guardado exitosamente')
          setCargando(false)
          //Si la respuesta fue negativa, me salgo del programa
        }else{
          return
        }
        //Si falla hace este bloque
      } catch (error) {
        console.log('Ocurrio un error al guardar')
      }
    } else {
      return;
    }
  }

  return {
    //Devuelvo mis vaiables
    form,
    errores,
    cargando,
    //Devuelvo mis funciones
    manejadorCambios,
    manejadorSalidaInput,
    enviarFormulario
  };
};
