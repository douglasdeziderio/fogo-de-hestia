import './App.css';
import Topo from './components/Topo';
import Corpo from './components/Corpo';
import Sobre from './components/Sobre';
import Rodape from './components/Rodape';


function App() {
  return (
    <div className="App">
      <Topo/>
      <Corpo/>
      <Sobre/>
      <Rodape/>
    </div>
  );
}

export default App;
