//librerias
import { Routes, Route } from 'react-router-dom';

//componentes
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';

//estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/footer.css'

function App() {

  const addOrRemoveFromFav = e => {

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

    //console.log(imgUrl);
    console.log(btn.dataset);
    console.log(movieData);

  }
  return (
    <div className='body'>
      <Header />
      <div className='container mt-3'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/listado' element={<Listado addOrRemoveFromFav={addOrRemoveFromFav} />}  />
      </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;
