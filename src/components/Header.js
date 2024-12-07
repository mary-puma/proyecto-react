import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
function Header() {
  const { handlerLogout, login } = useContext(AuthContext);
  const location = useLocation();

  // Definir título dinámico según la ruta
  let pageTitle = "";
  switch (location.pathname) {
    case "/listado":
      pageTitle = "Listado de Películas";
      break;
    case "/favoritos":
      pageTitle = "Sección de Favoritos";
      break;
    default:
      pageTitle = "Mi Aplicación de Películas";
  }
  return (
    <header>
      <h1 className="h4 text-white">{pageTitle}</h1>
      <nav>
        <ul className="nav justify-content-end p-3 mb-2 bg-primary ">
          <li className="nav-item">
            <Link className="nav-link text-white" to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to={"/listado"}>
              Listado
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white " to={"/favoritos"}>
              Favoritos
            </Link>
          </li>
          <li className="nav-item">
            <button
              onClick={handlerLogout}
              className='btn btn-outline-success text-white green-light-btn"'
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
