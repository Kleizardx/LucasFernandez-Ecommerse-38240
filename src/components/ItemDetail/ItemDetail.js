import ItemCount from "../ItemCount/ItemCount";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext"

const ItemDetail = ({ id, title, price, thumbnail, category, description }) => {
  const { addItem, isInCart } = useContext(CartContext);

  useEffect(() => {
    console.log(`Componente montado con Busqueda: ${title}`);
  });

const handleOnAdd = (count) => {
  console.log(`Se agregaron al carro ${count} ${title}`);
  alert(`Se agregaron al carro ${count} ${title}`)

  const objProduct = { id, title, price, count };

  addItem({...objProduct, quantity: count});
    isInCart(count);
  };

return (
  <div className="card">
    <div className="flex-item">
      <h4 className="card-header">Titulo: {title}</h4>
      <img src={thumbnail} alt={title} />
      <h2 className="price-Card">Precio ${price}</h2>
      <h2 className="categoria-Card">Categoria: {category}</h2>
      <h2 className="descripcion-Card">Descripcion: {description}</h2>
      <div>
        {isInCart(id) > 0 ? <Link className="Option" to='/cart'> Ir al Carrito</Link> : <ItemCount onAdd={handleOnAdd} />}
      </div>
    </div>
  </div>
)
}

export default ItemDetail;