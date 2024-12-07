import sweetalert2 from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Buscador({ peliculas }) {
  const navigate = useNavigate();
  const [mensajeError, setMensajeError] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      sweetalert2.fire({
        html: "<h3>Tenes que escribir una palabra clave</h3>",
      });
    } else if (keyword.length < 4) {
      sweetalert2.fire({
        html: "<h3>Escribir más de 3 caracteres</h3>",
      });
    } else {
      //e.currentTarget.keyword.value = '';
      // Aquí se simula la búsqueda en el listado de películas.
      const resultado = peliculas.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(keyword.toLowerCase())
      );

      if (resultado.length === 0) {
        // Muestra un mensaje si no se encuentra la película
        setMensajeError("No se encontraron resultados para la búsqueda.");
      } else {
        // Limpia el mensaje de error y navega al listado
        setMensajeError("");
        navigate(`/listado?keyword=${keyword}`);
      }
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="d-flex justify-content-center">
        <label className="mb-0 mx-2 col-sm-4 col-form-label">
          <input
            type="text"
            className="form-control"
            name="keyword"
            placeholder="Escribir una palabra clave"
          />
        </label>
        <button type="submit" className="btn btn-primary mb-1 mt-1">
          Buscar
        </button>
      </div>
    </form>
  );
}
export default Buscador;
