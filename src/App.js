//librerias
import { Routes, Route } from 'react-router-dom';

//componentes
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';

//estilos
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      

      <div className='container mt-3'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/listado' element={<Listado />} />
        </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;
