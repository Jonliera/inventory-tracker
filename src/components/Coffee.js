import React from "react";
import PropTyoes from "prop-types";

const Coffee = (props) => {
  let quantityWarn = null;
  if (props.quantity <= 1) {
    quantityWarn = <p>Sorry Out of Stock</p>;
  } else if (props.quantity <= 20) {
    quantityWarn = <p>Running Low</p>;
  }

  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>
          <em>{props.origin}</em>
        </p>
        <p>
          <em>{props.price}</em>
        </p>
        <p>
          <em>{props.roast}</em>
        </p>
        <p>
          <em>{props.quantity}</em>
        </p>
        {quantityWarn}
        <hr />
      </div>
    </React.Fragment>
  );
};

Coffee.propTypes = {
  name: PropTyoes.string.isRequired,
  origin: PropTyoes.string.isRequired,
  price: PropTyoes.string.isRequired,
  roast: PropTyoes.string.isRequired,
  quantity: PropTyoes.string.isRequired,
  id: PropTyoes.string,
  whenCoffeeClicked: PropTyoes.func,
};

export default Coffee;
