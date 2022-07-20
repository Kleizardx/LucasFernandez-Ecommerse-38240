import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from './components/NavBar/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
     <BrowserRouter>
      <header className="App-header">
          <NavBar />
        </header>
          <Routes>
               <Route path="/" element={<App />} />
               <Route path='/' element={<ItemListContainer />} />
               <Route path='/detail/:productId' element={<ItemDetailContainer />} />
               <Route path='/category/:categoryId' element={<ItemListContainer />} />
               <Route path='*' element={<h1>NOT FOUND 404</h1>} />
          </Routes>
     </BrowserRouter>
);