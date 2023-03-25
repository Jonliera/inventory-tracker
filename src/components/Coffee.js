import React from "react";
import PropTyoes from "prop-types";

const Coffee = () => {
  const name = "Coffee Name";
  const origin = "Coffee Origin";
  const price = "Coffee Price";
  const roast = "Coffee Roast";

  return (
    <React.Fragment>
      <h3>{name}</h3>
      <p>{origin}</p>
      <p>{price}</p>
      <p>{roast}</p>
    </React.Fragment>
  );
};

export default Coffee;
