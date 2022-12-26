import {Switch, Route} from 'react-router-dom';
import Login from './components/login';
function App() {
  return (
    <>
    <switch>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/listado' component={Listado}></Route>
    </switch>
    </>
  );
}

export default App;
