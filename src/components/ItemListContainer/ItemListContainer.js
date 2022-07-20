import { useState, useEffect } from "react";
import { getProductos } from "../db/data";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    getProductos(categoryId).then(prods => {
        setProductos(prods)
      }).catch(error => {
        console.log(error)
      })
  }, [categoryId]);

  return (
    <main className="ItemListContainer">
      <ItemList productos={productos} />
    </main>
  );
};

export default ItemListContainer;