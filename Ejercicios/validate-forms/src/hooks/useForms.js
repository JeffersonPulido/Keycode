import { useState } from "react";

export const useForms = (valorDefecto) => {
  const [form, setForm] = useState(valorDefecto);

  const manejadorCambios = (element) => {
    const { name, value } = element.target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  return {
    form,
    manejadorCambios,
  };
};
