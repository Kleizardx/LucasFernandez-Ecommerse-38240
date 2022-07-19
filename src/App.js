import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//i import { Link } from "react-router-dom";

function App() {
  return (
    <>
        <header className="App-header">
          <NavBar />
        </header>
        <ItemListContainer />
        {/* Los Links fueron trasladados a NavBar */}
    </>
  );
}

export default App;
