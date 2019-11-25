import React from "react";
import { Link } from "react-router-dom";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const BasketIcon = props => {
  const { productsInBasket } = props;

  return (
    <div className="basketQuantity">
      <Link to="/cart">
        <FontAwesomeIcon
          className="basket-icon"
          icon={faShoppingBasket}
          size="3x"
        />
        <span className="basket-circle-icon">{productsInBasket}</span>
      </Link>
    </div>
  );
};

BasketIcon.propTypes = {
  productsInBasket: PropTypes.number.isRequired
};

export default BasketIcon;
