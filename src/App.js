import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </>
  );
}

export default App;
