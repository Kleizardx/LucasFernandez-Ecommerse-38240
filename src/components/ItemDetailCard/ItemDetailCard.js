import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailCard = ({ productos }) => {
  return (
    <div className="container flexbox-container py-3">
      {productos.map(p => <ItemDetail key={p.id} {...p}/>)}
    </div>
  )
}

export default ItemDetailCard