import ItemListContainer from "../../ItemListContainer/ItemListContainer";

const CarWidget = () => {

  return (
    <div className="CarWidget">
      <img
        src={"../bx-cart.svg"}
        alt="IconStore"
        width="65"
        className="d-inline-flex"
      />
      <ItemListContainer />
    </div>
  );
};

export default CarWidget;