import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";
import { useEffect, useState } from "react";
function Favoritos() {
  const { favorites, addOrRemoveFromFav } = useContext(MoviesContext);
  console.log("favoritos");

  let token = localStorage.getItem("token");
  useEffect(() => {
    console.log("Token en favoritos:", sessionStorage.getItem("token"));
  }, []);

  console.log("token" + token);
  if (token === null) return <Navigate to="/" />;
  return (
    <>
      <h5>Sección de Favoritos</h5>
      <div className="row">
        {favorites.map((oneMovie, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card my-4">
                <img src={oneMovie.imgUrl} className="card-img-top" alt="..." />
                <button
                  className="favourite-btn"
                  onClick={addOrRemoveFromFav}
                  data-movie-id={oneMovie.id}
                >
                  ❤️
                </button>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">{oneMovie.overview}</p>

                  <Link href="/" className="btn btn-primary">
                    Detalle
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Favoritos;
