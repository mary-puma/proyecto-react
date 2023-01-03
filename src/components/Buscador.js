import sweetalert2 from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function Buscador() {

    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault(); // para que no reenderice la pagina al hacer click en el boton buscar
        const keyword = e.currentTarget.keyword.value.trim(); //capturamos el input de buscador, trim() no contabiliza los espacios iniciales ni finales

        console.log(keyword);
        if (keyword.length === 0) {
            sweetalert2.fire({
                html: '<h3>Tenes que escribir una palabra clave</h3>'
            })
           
        }else if (keyword.length < 4){
            sweetalert2.fire({
                html: '<h3>Escribir más de 3 caracteres</h3>'
            })
        } else {
            navigate(`/listado?title=${keyword}`);//redireccionamos a listado con la palabra clave que colocamos en el buscador
            
        }

    }
    return (

        <form onSubmit={submitHandler}>
            <div className="d-flex justify-content-center" >
                <label className="form-label mb-0 mx-2">
                    <input type="text" classame="form-control" name="keyword" />
                </label>
                <button type="submit" className="btn btn-primary" >Buscar</button>
            </div>

        </form>
    )

}
export default Buscador;