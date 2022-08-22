import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../services/firebase/index";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {

    const collectionRef = categoryId 
    ? query(collection(firestoreDb, 'productos'), where('category', '==', categoryId)) 
    : collection(firestoreDb, 'productos');

    getDocs(collectionRef).then(response => {
      const productos = response.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      })
      setProductos(productos)
    })
  }, [categoryId]);

  if (productos.length === 0) {
    return <div className="">Cargando...</div>
  }

  return (
    <main className="ItemListContainer">
      <ItemList productos={productos} />
    </main>
  );
};

export default ItemListContainer;