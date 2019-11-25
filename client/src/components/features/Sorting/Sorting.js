import React from "react";
import PropTypes from "prop-types";

const Sorting = ({ sortingOptions }) => {
  const handleOnClick = (key, direction) => {
    sortingOptions({ key, direction });
  };

  return (
    <div className="sorting">
      <h3 className="sorting-header">Sortuj:</h3>
      <div className="sorting-options">
        <p
          className="sorting-option"
          onClick={() => handleOnClick("name", "asc")}
        >
          Nazwa A-Z
        </p>
        <p
          className="sorting-option"
          onClick={() => handleOnClick("name", "desc")}
        >
          Nazwa Z-A
        </p>
        <p
          className="sorting-option"
          onClick={() => handleOnClick("price", "asc")}
        >
          Cena rosnąco
        </p>
        <p
          className="sorting-option"
          onClick={() => handleOnClick("price", "desc")}
        >
          Cena malejąco
        </p>
      </div>
    </div>
  );
};

Sorting.propTypes = {
  sortingOptions: PropTypes.func.isRequired
};
export default Sorting;
