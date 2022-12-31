import { Link} from 'react-router-dom';
function Header() {
    return (
        <header>
        <nav>
            <ul>
                <li>
                    <link to='/'>Home</link>
                </li>
                <li>
                   <link to='/listado'>listado</link> 
                </li>
                <li>
                    <link to='/contacto'>Contacto</link>
                </li>
            </ul>
        </nav>
        </header>
    )

}
export default Header;