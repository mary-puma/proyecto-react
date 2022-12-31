import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

function Listado() {

    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem('token');
        console.log(token);
        if (token === null) {
            navigate('/');
        }

    }, [navigate]);

    return (
        <div className='row'>
            <div className="col-3">
                <div className='card'>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/" className="btn btn-primary">Go somewhere</Link>

                    </div>
                </div>
            </div>

            
        </div>
    )
}
export default Listado;