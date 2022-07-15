import "./Item.css"
import ItemCount from "../ItemCount/ItemCount";


const Item = ({ nombre, precio, thumbnailUrl }) => {

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron al carro ${quantity} ${nombre}`);
    alert(`Se agregaron al carro ${quantity} ${nombre}`)
  };

  return (
    <div className="flex-item">
      <h4 className="card-header">{nombre}</h4>
      <h2 className="title-Card">${precio}</h2>
      <img src={thumbnailUrl} alt={nombre} />
      <div>
        <ItemCount onAdd={handleOnAdd} />
      </div>
    </div>
  )
}

export default Item;