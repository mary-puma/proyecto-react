//librerias
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"

//componentes
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Favoritos from './components/Favoritos';

//estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/footer.css'

function App() {

  const [favorites, setFavorites] = useState([]); //cuando se actualice el estado automaticamente lo va a compartir a favoritos
    useEffect(()=>{
        const favsInLocal = localStorage.getItem('favs');

        if(favsInLocal !== null){
            const favsArray = JSON.parse(favsInLocal);
            console.log(favsArray);
            setFavorites(favsArray);
        }
    },[])


  const addOrRemoveFromFav = e => {

    const favMovies = localStorage.getItem('favs');
    let tempMoviesInFav;

    if (favMovies === null) {
      tempMoviesInFav = [];
    } else {
      tempMoviesInFav = JSON.parse(favMovies);
    }
    console.log(tempMoviesInFav);

    const btn = e.currentTarget;//capturamos el boton
    const parent = btn.parentElement;//capturamos el padre donde esta el boton
    const imgUrl = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgUrl,
      title,
      overview,
      id: btn.dataset.movieId
    }

    let moviesIsInArray = tempMoviesInFav.find(oneMovie => {
      return oneMovie.id === movieData.id // si la pelicula que quiero add a favoritos no esta en la seccion de favoritos(lista del localstorage) devuelve null, y si esta devuelve el objeto
    });

    if (!moviesIsInArray) {
      tempMoviesInFav.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFav));
      setFavorites(tempMoviesInFav);
      console.log('se agrego la pelicula');

    } else {

      let moviesLeft = tempMoviesInFav.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      console.log('se elimino la pelicula');

    }

    //console.log(imgUrl);
    //console.log(btn.dataset);
    //console.log(movieData);

  }
  return (
    <div className='body'>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/listado' element={<Listado addOrRemoveFromFav={addOrRemoveFromFav} />} />
          <Route path='/favoritos' element={<Favoritos favorites={favorites} addOrRemoveFromFav={addOrRemoveFromFav} />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;
