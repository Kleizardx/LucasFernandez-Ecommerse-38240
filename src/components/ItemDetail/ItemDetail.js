// import "./Item.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, title, price, thumbnail, category, description}) => {

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron al carro ${quantity} ${title}`);
    alert(`Se agregaron al carro ${quantity} ${title}`)
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
        <ItemCount onAdd={handleOnAdd} />
      </div>
    </div>
    </div>
  )
}

export default ItemDetail;