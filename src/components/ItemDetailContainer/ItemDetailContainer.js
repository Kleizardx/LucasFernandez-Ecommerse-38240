import { useState, useEffect } from "react";
import { firestoreDb } from "../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = (setCart, cart) => {
     const [productos, setProductos] = useState();
     const [loading, setLoading ] = useState(true);

     const { productId } = useParams();

     useEffect(() => {
          getDoc(doc(firestoreDb, 'productos', productId)).then(response => {
               const productos = { id: response.id, ...response.data() }
               setProductos(productos)
               setLoading(false)
          })
     }, [productId])

     return (
          <main className="ItemDetailContainer text-center container flexbox-container">
               <div>
                    { loading ? <h1>Cargando...</h1> : productos ? <ItemDetail {...productos} setCart={setCart} cart={cart} /> : <h1>El producto no encontrado</h1> }
               </div>
          </main>
     );
};

export default ItemDetailContainer;