import React from "react";
import PropTypes from "prop-types";

const CoffeeDetail = (props) => {
  const { coffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>{coffee.name}</h3>
      <h3>{coffee.origin}</h3>
      <h3>{coffee.price}</h3>
      <h3>{coffee.roast}</h3>
      <hr />
    </React.Fragment>
  );
};

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeDetail;
