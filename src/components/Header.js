import React from "react";
import coffeeshop from "./../img/coffeeshop.jpg";

const Header = () => {
  return (
    <header>
      <h1>Inventory Tracker</h1>
      <img src={coffeeshop} alt="coffeeshop" />
    </header>
  );
};

export default Header;
