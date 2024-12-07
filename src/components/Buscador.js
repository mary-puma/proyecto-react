import sweetalert2 from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Buscador() {
  const navigate = useNavigate(); // Hook para redirigir

  const submitHandler = async (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      sweetalert2.fire({
        html: "<h3>Tenés que escribir una palabra clave</h3>",
      });
    } else if (keyword.length < 4) {
      sweetalert2.fire({
        html: "<h3>Escribe más de 3 caracteres</h3>",
      });
    } else {
      try {
        // Solicitud a la API con Axios
        const response = await axios.get(
          `https://omdbapi.com/?apikey=7a5b7d31&s=${keyword}`
        );

        const movieList = response.data.Search; // Accede al atributo Search donde están las películas

        if (movieList && movieList.length > 0) {
          // Si hay resultados, redirige a la página de listado con el keyword
          navigate(`/listado?keyword=${keyword}`);
        } else {
          // Si no hay resultados
          sweetalert2.fire({
            html: `<h3>No se encontraron películas con el término "${keyword}". Intenta con otra búsqueda.</h3>`,
          });
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Si la API devuelve un 404
          sweetalert2.fire({
            html: `<h3>No se encontró la película. Por favor, intenta con otra búsqueda.</h3>`,
          });
        } else {
          // Otros errores (servidor, red, etc.)
          sweetalert2.fire({
            html: `<h3>Ocurrió un error en el servidor. Intenta más tarde.</h3>`,
          });
        }
        console.error("Error en la solicitud:", error);
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
