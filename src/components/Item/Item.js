import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({ id, title, price, thumbnail }) => {


  return (
    <div className="flex-item">
      <h4 className="card-header">{title}</h4>
      <img src={thumbnail} alt={title} />
      <h3 className="card-text">${price}</h3>
      <div>
        <h4 className="card-header">
        <Link to={`/detail/${id}`} className="Option"> Ver mas </Link>
      </h4>
      </div>
    </div>
  )
}

export default Item;