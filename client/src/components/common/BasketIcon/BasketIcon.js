import React from "react";
import { Link } from "react-router-dom";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

import "./BasketIcon.scss";

const BasketIcon = props => (
  <div className="basketQuantity">
    <Link to="/cart">
      <FontAwesomeIcon icon={faShoppingBasket} size="3x" />
      <p className="basketQuantityDisplay">{props.productsInBasket}</p>
    </Link>
  </div>
);

BasketIcon.propTypes = {
  productsInBasket: PropTypes.number.isRequired
};

export default BasketIcon;
