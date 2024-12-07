import sweetalert2 from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Buscador() {
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
        // Solicitud a la API con Axios (reemplaza con tu endpoint real)
        const response = await axios.get(
          `https://api.example.com/movies?search=${keyword}`
        );

        // Si hay resultados, muestra el mensaje adecuado
        if (response.data.results.length > 0) {
          sweetalert2.fire({
            html: `<h3>Se encontraron ${response.data.results.length} películas que coinciden con "${keyword}".</h3>`,
          });
        } else {
          // Si no hay resultados en los datos de la API
          sweetalert2.fire({
            html: `<h3>No se encontraron películas. Por favor, intenta con otra búsqueda.</h3>`,
          });
        }
      } catch (error) {
        // Manejo de errores HTTP con Axios
        if (error.response && error.response.status === 404) {
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
