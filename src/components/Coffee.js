import React from "react";
import PropTyoes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.origin}</p>
      <p>{props.price}</p>
      <p>{props.roast}</p>
      <hr />
    </React.Fragment>
  );
};

Coffee.propTypes = {
  name: PropTyoes.string,
  origin: PropTyoes.string,
  price: PropTyoes.string,
  roast: PropTyoes.string,
};

export default Coffee;
