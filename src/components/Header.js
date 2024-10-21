import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
function Header() {

    const {handlerLogout,login} = useContext(AuthContext);
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
                    <li className="nav-item">
                        <button 
                        onClick={handlerLogout}
                        className='btn btn-outline-success'>
                        Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
export default Header;