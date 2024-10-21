import { useEffect, useState } from "react";

export const useMovies = () => {
  console.log("useMovies");

  const [favorites, setFavorites] = useState([]); //cuando se actualice el estado automaticamente lo va a compartir a favoritos
  /*useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");

    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      console.log(favsArray);
      setFavorites(favsArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favorites)); // Guardar en localStorage cada vez que cambian los favoritos
  }, [favorites]);*/
  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");
    if (favsInLocal !== null) {
      setFavorites(JSON.parse(favsInLocal));
    }
  }, []);

  const addOrRemoveFromFav = (e) => {
    console.log("addOrremove");
    const favMovies = localStorage.getItem("favs");
    let tempMoviesInFav;

    if (favMovies === null) {
      tempMoviesInFav = [];
    } else {
      tempMoviesInFav = JSON.parse(favMovies);
    }
    console.log(tempMoviesInFav);

    const btn = e.currentTarget; //capturamos el boton
    const parent = btn.parentElement; //capturamos el padre donde esta el boton
    const imgUrl = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieData = {
      imgUrl,
      title,
      overview,
      id: btn.dataset.movieId,
    };

    let moviesIsInArray = tempMoviesInFav.find((oneMovie) => {
      return oneMovie.id === movieData.id; // si la pelicula que quiero add a favoritos no esta en la seccion de favoritos(lista del localstorage) devuelve null, y si esta devuelve el objeto
    });

    console.log("mmovieData.id " + movieData.id);
    if (!moviesIsInArray) {
      tempMoviesInFav.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFav));
      setFavorites(tempMoviesInFav);
      console.log("tempMoviesInFav:" + tempMoviesInFav);

      console.log("se agrego la pelicula");
    } else {
      let moviesLeft = tempMoviesInFav.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      console.log("se elimino la pelicula");
    }

    console.log("favorites" + favorites);
    //console.log(imgUrl);
    //console.log(btn.dataset);
    //console.log(movieData);
  };

  return {
    addOrRemoveFromFav,
    favorites,
  };
};
