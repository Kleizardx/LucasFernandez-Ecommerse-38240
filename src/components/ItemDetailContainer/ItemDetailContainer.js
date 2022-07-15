import { useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetailCard from "../ItemDetailCard/ItemDetailCard";

const ItemDetailContainer = () => {
     const [productos, setProductos] = useState([]);
     const [input, setInput] = useState('');


     const handleSearch = () => {

          setTimeout(() => {
               fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
                    .then(response => {
                         return response.json()
                    }).then(res => {
                         setProductos(res.results)
                         console.log(res)
                    })
               alert(`Busqueda realizada luego de 2 segundos ${input}`)
          }, 2000);
     }

     return (
          <main className="ItemDetailContainer">
               <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Ingresa lo que deseas buscar" onChange={(e) => setInput(e.target.value)} />
                    <div className="input-group-append">
                         <button onClick={handleSearch} className="btn btn-outline-secondary" type="button">Buscar</button>
                    </div>
               </div>

               <ItemDetailCard productos={productos} />

          </main>
     );
};







export default ItemDetailContainer;