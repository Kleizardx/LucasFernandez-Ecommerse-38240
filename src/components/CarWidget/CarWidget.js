import { useContext } from "react";
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom";

const CarWidget = () => {

  const { getQuantity } = useContext(CartContext);

  return (
    <div className="CarWidget">
      <Link to="/cart/:cart">
      <img
        src={"../bx-cart.svg"}
        alt="IconStore"
        width="65"
        className="d-inline-flex"
      />
      {getQuantity()}</Link>
    </div>
  );
};

export default CarWidget;