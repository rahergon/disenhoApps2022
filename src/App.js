import './App.css';
import Cartas from './components/Cartas';
import Contador from './components/Contador';
import Navegacion from './components/Navegacion';
import PiePagina from './components/PiePagina';

function App() {
  
    return(
      <div className='App'>
        <Navegacion />
        <Cartas />
        <Contador />
        <PiePagina />
      </div>
    )
  
  
}

export default App;
