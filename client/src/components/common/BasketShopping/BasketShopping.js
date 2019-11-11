import React from "react";
import { Link } from "react-router-dom";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BasketShopping = () => (
  <Link to="/cart">
    <FontAwesomeIcon icon={faShoppingBasket} size="3x" />
  </Link>
);

export default BasketShopping;
