function Buscador() {
    const submitHandler = e =>{
        e.preventDefault(); // para que no reenderice la pagina al hacer click en el boton buscar
        const keyword = e.currentTarget.keyword.value; //capturamos el input de buscador, trim() no contabiliza los espacios iniciales ni finales
       
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