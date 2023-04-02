import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onCoffeeSale } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>This coffee is called : {coffee.name}</h3>
      <h3>This coffe is from : {coffee.origin}</h3>
      <h3>Price per lb in USD : {coffee.price}</h3>
      <h3>Type of Roast : {coffee.roast}</h3>
      <h3>Available in lbs :{coffee.quantity}</h3>
      <button onClick={() => onCoffeeSale(coffee.id)}>Buy Coffee</button>
      <button onClick={props.onClickingEdit}>Update Coffee</button>
      <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button>
      <hr />
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onCoffeeSale: PropTypes.func,
};

export default CoffeeDetail;
