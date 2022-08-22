import { useContext, useEffect } from "react";
import "./Cart.css";
import CartContext from "../Context/CartContext";
import { addDoc, collection, Timestamp, updateDoc, doc, getDocs, query, where } from "firebase/firestore";
import { firestoreDb } from "../services/firebase/index";
import { useParams } from "react-router-dom";


const Cart = () => {

     const { cart, clearCart, removeItem, getTotal } = useContext(CartContext);

     const addDocToCollection = () => {
          const collectionRef = collection(firestoreDb, 'user')

          const obUser = {
               items: cart,
               name: "Lucas",
               lastname: "Fernandez",
               phone: '1138053409',
               email: "lucas.fernandez32zs@gmail.com",
               total: getTotal(),
               date: Timestamp.fromDate(new Date()),
          }

          addDoc(collectionRef, obUser).then(response => {
               console.log(response.id)
               alert("Compra realizada con exito ID: " + response.id)
          })

          const getUserId = () => {
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
               }, [userId]);
     }

     const updateOrder = () => {
          const orderDoc = doc(firestoreDb, 'user', '1');

          updateDoc(orderDoc, { total: getTotal() }).then(response => {
               console.log(response)
          })
     }


     if (cart.length === 0) {
          return (
               <div className="Cart">
                    <h2>No hay productos en el Carrito</h2>
               </div>
          )
     }

     return (
          <>
               <p className="titleCar">Carrito de Compras</p>
               <div className="container container_Card">
                    {cart.map(prod => <div className="d-flex justify-content-between col-3 card my-2" key={prod.id} {...prod}>
                         <img src={prod.thumbnail} className="card-img-top" alt={prod.title} />
                         <div className="card-body">
                              <h5 className="card-title">Titulo: {prod.title}</h5>
                         </div>
                         <ul className="list-group list-group-flush">
                              <li className="list-group-item">Cantidad: {prod.quantity}</li>
                              <li className="list-group-item">Subtotal: ${prod.quantity * prod.price}</li>
                         </ul>
                         <button type="button" className="btn_Container" onClick={() => removeItem(prod.id)}>Eliminar</button>
                    </div>)}
               </div>
               <div className="d-flexs py-3 container text-center">
                    <div className="card my-2 fs-3">
                         Costo total de compra: {cart.reduce((totalCar, curr) => totalCar + curr.quantity * curr.price, 0)}
                    </div>
                    <div className="py-3">
                         <button type="button" className="btn btn-primary" onClick={() => addDocToCollection([])}>Generar Orden</button>
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => clearCart()}>Vaciar Carrito</button>
                    <button type="button" className="btn btn-danger" onClick={() => updateOrder()}>Actualizar Documento</button>
               </div>
               <div>
                    {cart.map(user => <div className="d-flex justify-content-between col-3 card my-2" key={user.id} {...user}>
                         <div className="card-body">
                              <h5 className="card-title">Pedido ID: {user.id}</h5>
                         </div>
                         <ul className="list-group list-group-flush">
                              <li className="list-group-item">Cantidad: {user.quantity} </li>
                              <li className="list-group-item">Costo total de compra: {cart.reduce((totalCar, curr) => totalCar + curr.quantity * curr.price, 0)}</li>
                         </ul>
                    </div>)}
               </div>
          </>
     );
}

export default Cart;