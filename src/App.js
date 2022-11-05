import logo from './logo.svg';
import './App.css';
import Tabuada from './tabuada';
import Titulo2 from './titulo2';
import Titulo from './titulo';
let n = prompt("Digite um número que você deseja ver a tabuada");
function App() {
  
  return (<div>
    <Titulo titulo='FATEC' texto="Faculdade de tecnologia de Preseidente Prudente" link='https://www.fatecpp.edu.br/'/>
     <Titulo2 titulo='TABUADA'/>
     <Tabuada n ={n}></Tabuada>
  </div>
 )
  
}

export default App;
