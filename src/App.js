import './App.css';
import NavBar from './components/NavBar/NavBar'
import Saludo from './Components/ItemListContainer/Greeting.jsx'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Saludo greeting={'Bienvenidos'} />
    </div>
  );
}

export default App;
