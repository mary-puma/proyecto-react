import { Link } from 'react-router-dom';
import '../css/footer.css'
function Footer() {

    return (
        /*<footer>
            <nav>
                <ul className='container'>
                    <li className='item'> <a href="http://intagram.com" >IG</a></li>
                    <li  className='item'> Copyright Alkemy challenge </li>
                </ul>
            </nav>
         
        </footer>*/
        <div className="container-footer">
            <footer className="position-relative start-0 bottom-0 end-0">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 mx-5">
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-white">Home</Link></li>
                    <li className="nav-item"><Link to={'/listado'} className="nav-link px-2 text-white">Listado</Link></li>
                    <li className="nav-item"><Link to={'/favoritos'} className="nav-link px-2 text-white">Favoritos</Link></li>

                </ul>
                <p className="text-center text-white">&copy; 2023 Mary Puma</p>
            </footer>
        </div>
    )
}
export default Footer;