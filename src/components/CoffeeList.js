import React from "react";
import Coffee from "./Coffee";

const mainCoffeeList = [
  {
    name: "Coffee 1",
    origin: "Brazil",
    price: "3",
    roast: "Light",
  },
  {
    name: "Coffee 2",
    origin: "Colombia",
    price: "4",
    roast: "Medium",
  },
  {
    name: "Coffee 3",
    origin: "Mexico",
    price: "5",
    roast: "Dark",
  },
];

const CoffeeList = () => {
  return (
    <React.Fragment>
      <hr />
      {mainCoffeeList.map((coffee, index) => (
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

export default CoffeeList;
