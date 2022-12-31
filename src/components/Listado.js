import { useNavigate } from 'react-router-dom';
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
        <h2>soy el componente listado</h2>
    )
}
export default Listado