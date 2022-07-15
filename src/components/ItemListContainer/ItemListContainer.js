// Para no perderse, ya que me estoy haciendo un lio con los nombres.
// ItemListContainer - resuelve la promesa de nuestra DB y se la pasa por props a ItemList
// ItemList toma las props y las mapea a Item

// ItemListContainer -> ItemList -> Item

import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProductos } from "../db/data";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((prods) => {
        setProductos(prods);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="ItemListContainer">
      <ItemList productos={productos} />
    </main>
  );
};

export default ItemListContainer;