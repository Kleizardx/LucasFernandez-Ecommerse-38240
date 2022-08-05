import { useContext } from "react";
import "./Cart.css";
import CartContext from "../Context/CartContext";

const Cart = () => {

     const { cart, clearCart, removeItem } = useContext(CartContext);

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
                    <button type="button" className="btn btn-danger" onClick={() => clearCart([])}>Vaciar Carrito</button>
               </div>
          </>
     );
}

export default Cart;