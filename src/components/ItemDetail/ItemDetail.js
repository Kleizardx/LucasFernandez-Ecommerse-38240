import ItemCount from "../ItemCount/ItemCount";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext"
import "./ItemDetail.css"

const ItemDetail = ({ id, title, price, thumbnail, category, description }) => {
  const { addItem, isInCart } = useContext(CartContext);

  const [cart, setCart] = useState(true)

  useEffect(() => {
    console.log(`Componente montado con Busqueda: ${title}`);
  });

  const handleOnAdd = (count) => {

    if (count === 0) {
      return (
        alert(`No se puede agregar 0 ${title}`)
      )
    }
    alert(`Se agregaron al carro ${count} ${title}`)

    const objProduct = { id, title, price, count, thumbnail };

    setCart(false)

    addItem({ ...objProduct, quantity: count });
    isInCart(count);
  };

  return (
    <div className="card">
      <div className="flex-item">
        <h4 className="card-header">Titulo: {title}</h4>
        <img src={thumbnail} alt={title} />
        <h3 className="">Categoria: {category}</h3>
        <p className="">Descripcion: {description}</p>
        <h3 className="">Precio ${price}</h3>
        <div>
            {cart ? <ItemCount onAdd={handleOnAdd}/> : <Link className="Option2" to="/cart/:cart">Ir al Carrito</Link>}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;