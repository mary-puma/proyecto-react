function Buscador() {
    return (
        <form>
            <div class="d-flex justify-content-center">
                <label className="form-label mb-0 mx-2">
                <input type="text" className="form-control"  />
                </label>
                <button type="submit" className="btn btn-primary" >Buscar</button>
            </div>
           
        </form>
    )

}
export default Buscador;