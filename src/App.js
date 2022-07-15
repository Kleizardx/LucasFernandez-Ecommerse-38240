import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  // const saludo = "Contador de items"

  return (
    <>
      <header className="App-header">
        <NavBar />
        {/* <ItemListContainer greetings={saludo} /> */}
      </header>
      <ItemDetailContainer />
    </>
  );
}

export default App;
