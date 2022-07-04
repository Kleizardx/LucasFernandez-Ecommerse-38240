import { useState } from "react";
import "./ItemCount.css"

const ItemCount = () => {
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
               <button className="btn btn-dark" onClick={rest}> - </button>
               <p>{count}</p>
               <button className="btn btn-danger" onClick={resetCounter}> Reset </button>
               <button className="btn btn-dark" onClick={sum}> + </button>
          </div>
     );
};

export default ItemCount