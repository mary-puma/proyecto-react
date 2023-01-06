import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <nav>
                <ul className="nav justify-content-end p-3 mb-2 bg-primary ">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={'/listado'}>Listado</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white " to={'/favoritos'}>Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
export default Header;