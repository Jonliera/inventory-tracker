import React from "react";
import PropTyoes from "prop-types";

const Coffee = (props) => {
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
  id: PropTyoes.string,
  whenCoffeeClicked: PropTyoes.func,
};

export default Coffee;
