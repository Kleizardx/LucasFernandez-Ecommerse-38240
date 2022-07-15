// import "./Item.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({title, price, thumbnail}) => {

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron al carro ${quantity} ${title}`);
    alert(`Se agregaron al carro ${quantity} ${title}`)
  };

  return (
    <div className="flex-item">
      <h4 className="card-header">{title}</h4>
      <h2 className="price-Card">${price}</h2>
      <img src={thumbnail} alt={title} />
      <div>
        <ItemCount onAdd={handleOnAdd} />
      </div>
    </div>
  )
}

export default ItemDetail;