import React from "react";
import PropTypes from "prop-types";
import "./Sorting.scss";

const Sorting = ({ sortingOptions }) => {
  const handleOnClick = (key, direction) => {
    sortingOptions({ key, direction });
  };

  return (
    <div>
      <button onClick={() => handleOnClick("name", "asc")}>Nazwa a-z</button>
      <button onClick={() => handleOnClick("name", "desc")}>Nazwa z-a</button>
      <button onClick={() => handleOnClick("price", "asc")}>
        cena rosnąco
      </button>
      <button onClick={() => handleOnClick("price", "desc")}>
        cena malejąco
      </button>
    </div>
  );
};

Sorting.propTypes = {
  sortingOptions: PropTypes.func.isRequired
};
export default Sorting;
