import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {

  const saludo = "Hola, buenas tardes"
  const count = "0"

  console.log(saludo) //Prueba

  return (
    <>
      <header className="App-header">
        <NavBar />
        <ItemListContainer greetings={saludo} count={count}/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </>
  );
}

export default App;
