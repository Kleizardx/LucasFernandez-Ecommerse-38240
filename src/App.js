
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  const saludo = "Contador de items"

  return (
    <>
      <header className="App-header">
        <NavBar />
        <ItemListContainer greetings={saludo}/>
      </header>
    </>
  );
}

export default App;
