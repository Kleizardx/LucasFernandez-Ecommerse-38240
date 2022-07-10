import Item from "../Item/Item"

const ItemList = ({ productos }) => {
     return (
          <div className="container flexbox-container py-3">
               {productos.map(prod => <Item key={prod.id} {...prod} />)}
          </div>
     )
}

export default ItemList