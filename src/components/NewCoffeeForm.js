import React from "react";
import PropTypes from "prop-types";

const NewCoffeeForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input type="text" name="name" placeholder="Coffee Name" />
        <input type="text" name="origin" placeholder="Coffee Origin" />
        <input type="text" name="price" placeholder="Coffee Price" />
        <input type="text" name="roast" placeholder="Coffee Roast" />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
};

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};

export default NewCoffeeForm;
