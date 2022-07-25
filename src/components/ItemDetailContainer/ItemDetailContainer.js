import { useState, useEffect } from "react";
import { getProductosById } from "../db/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";


const ItemDetailContainer = (setCart, cart) => {
     const [productos, setProductos] = useState();
     const [loading, setLoading] = useState(true);

     const { productId } = useParams();

     useEffect(() => {
          getProductosById(productId).then(item => {
               setProductos(item)
          }).catch(err => {
               console.log(err)
          }).finally(() => {
               setLoading(false)
          })

          return (() => {
               setProductos()
          })

     }, [productId])

     return (
          <main className="ItemDetailContainer text-center container flexbox-container">
               <div>
                    {
                    loading ?
                    <h1>Cargando...</h1>
                    : productos ?
                    <ItemDetail {...productos} setCart={setCart} cart={cart} />
                    :
                    <h1>El producto no encontrado</h1>
                    }
               </div>
          </main>
     );
};

export default ItemDetailContainer;