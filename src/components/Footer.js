import { Link } from "react-router-dom";
import "../css/footer.css";
function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3 mx-5">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/listado" className="nav-link px-2 text-white">
            Listado
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/favoritos" className="nav-link px-2 text-white">
            Favoritos
          </Link>
        </li>
      </ul>
      <p className="mb-0">&copy; 2024 Mary Puma</p>
    </footer>
  );
}
export default Footer;
