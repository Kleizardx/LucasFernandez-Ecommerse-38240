import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailCard = ({ productos }) => {
  return (
    <div className="">
      {productos.map(p => <ItemDetail key={p.id} {...p}/>)}
    </div>
  )
}

export default ItemDetailCard