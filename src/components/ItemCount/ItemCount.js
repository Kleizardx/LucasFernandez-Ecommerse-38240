import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({onAdd}) => {
     const [count, setCount] = useState(0);

     const stock = 10

     const resetCounter = () => {
          setCount(0);
     };

     const rest = () => {
          if (count > -0) {
               setCount(count - 1);
          }
     };

     const sum = () => {
          if (count < stock) {
               setCount(count + 1);
          }
     };

     return (
          <div className="ItemCount ButtonContainer py-3">
               <button className="btnRest" onClick={rest}> - </button>
               <p>{count}</p>
               <button className="btnReset" onClick={resetCounter}> Reset </button>
               <button className="btnSum" onClick={sum}> + </button>
               <button className="btnAdd" onClick={() => onAdd(count)}> Add Car </button>
          </div>
     );
};

export default ItemCount