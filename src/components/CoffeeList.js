import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

const CoffeeList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee, index) => (
        <Coffee
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          key={index}
        />
      ))}
    </React.Fragment>
  );
};

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
};

export default CoffeeList;
