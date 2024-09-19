import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ isAuthenticated, children }) => {
  // Si el usuario no está autenticado, lo redirigimos a la página de inicio de sesión
  if (!isAuthenticated) {
    return <Navigate to="/acerca" />;
  }

  // Si está autenticado, renderizamos los componentes hijos (es decir, la ruta protegida)
  return children;
};

export default RutaProtegida;
