import { useFetch } from "../hooks/useFetch";

//Por medio de las props le pasamos al componente la info necesaria para funcionar
export const SelectList = ({ manejadorCambio, title, url }) => {
  //Creamos un titulo con mayusculas y una key personalizada para nuestro selector
  const key = `select-${title}`;
  const label = title.toUpperCase();

  //Consumimos la api url que le pasamos como prop y obtenemos la data resultante
  const { data, error, loading } = useFetch(url);

  //Validamos que no haya ocurrido un error
  if (!data) {
    return null
  }
  
  //Si hay un error, frenamos todo y retornamos un solo mensaje
  if (error) {
    return (<p>Ha ocurrido un error: {error}</p>)
  }

  // guardamos la data en la variable options
  let options = data

  return (
    <div className="container-select">
      <label className="label-select" htmlFor={key}>
        {label}
      </label>
      <select name={key} id={key} onChange={manejadorCambio}>
        <option value="">Seleccione un {title}</option>

        {/* Validamos que data exista, si es asi, recorremos con el .map cada una de las opciones y vamos pintando nuestras opciones al select de html */}
        {data && options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
