import React from "react";
import Coffee from "./Coffee";

const CoffeeList = () => {
  return (
    <React.Fragment>
      <Coffee name="Coffee 1" origin="Brazil" price="3" roast="Light" />
      <Coffee name="Coffee 2" origin="Colombia" price="4" roast="Medium" />
    </React.Fragment>
  );
};

export default CoffeeList;
