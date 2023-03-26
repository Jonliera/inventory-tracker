import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const CoffeeDetail = (props) => {
  const { coffee, onClickingDelete } = props;
  const [quantity, setQuantity] = useState(130);
  let decrementQuantity = () => setQuantity(quantity - 1);
  if (quantity <= 1 || quantity == "Out of Stock") {
    decrementQuantity = () => setQuantity("Out of Stock");
  }

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>{coffee.name}</h3>
      <h3>{coffee.origin}</h3>
      <h3>Price per lb {coffee.price}</h3>
      <h3>{coffee.roast}</h3>
      <h3>Available in lbs :{quantity}</h3>
      <button onClick={decrementQuantity}>Buy Coffee</button>
      <button onClick={props.onClickingEdit}>Update Coffee</button>
      <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button>
      <hr />
    </React.Fragment>
  );
};

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  quantity: PropTypes.number,
  decrementQuantity: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default CoffeeDetail;
