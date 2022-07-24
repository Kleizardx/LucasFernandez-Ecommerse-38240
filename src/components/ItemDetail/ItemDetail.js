import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ title, price, thumbnail, category, description}) => {

  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron al carro ${quantity} ${title}`);
    alert(`Se agregaron al carro ${quantity} ${title}`)
    setQuantity(quantity)
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
        {quantity > 0 ? <Link className="Option" to='/cart'> Ir al Carrito</Link> : <ItemCount onAdd={handleOnAdd} /> }
      </div>
    </div>
    </div>
  )
}

export default ItemDetail;