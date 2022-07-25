import { useContext } from "react";
import { CartContext } from "../Context/CartContext"

const CarWidget = () => {

  const { getQuantity } = useContext(CartContext);

  return (
    <div className="CarWidget">
      <img
        src={"../bx-cart.svg"}
        alt="IconStore"
        width="65"
        className="d-inline-flex"
      />
      {getQuantity()}
    </div>
  );
};

export default CarWidget;