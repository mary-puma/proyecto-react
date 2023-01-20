import sweetalert2 from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function Buscador() {

    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault(); 
        const keyword = e.currentTarget.keyword.value.trim();

        if (keyword.length === 0) {
            sweetalert2.fire({
                html: '<h3>Tenes que escribir una palabra clave</h3>'
            })

        } else if (keyword.length < 4) {
            sweetalert2.fire({
                html: '<h3>Escribir más de 3 caracteres</h3>'
            })
        } else {
            //e.currentTarget.keyword.value = '';
            navigate(`/listado?keyword=${keyword}`);


        }

    }
    return (

        <form onSubmit={submitHandler}>
            <div className="d-flex justify-content-center" >
                <label className="mb-0 mx-2 col-sm-4 col-form-label">
                    <input type="text" className="form-control" name="keyword" placeholder="Escribir una palabra clave" />
                </label>
                <button type="submit" className="btn btn-primary mb-1 mt-1" >Buscar</button>
            </div>

        </form>
    )

}
export default Buscador;