import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {

     return (
          <>
          <h1>{props.count}</h1>
          <h1>{props.greetings}</h1>
          <ItemCount />
          </>
     )
}

export default ItemListContainer