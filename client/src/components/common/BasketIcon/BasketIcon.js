import React from "react";
import { Link } from "react-router-dom";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BasketIcon = () => (
  <Link to="/cart">
    <FontAwesomeIcon icon={faShoppingBasket} size="3x" />
  </Link>
);
export default BasketIcon;
