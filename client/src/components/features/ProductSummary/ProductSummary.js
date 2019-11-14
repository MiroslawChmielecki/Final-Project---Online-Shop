import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./ProductSummary.scss";

const ProductSummary = ({ img, name, price, description }) => (
  <div className="product-summary">
    <Link to={"product/"}>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <img src={img} alt="product-foto" />
    </Link>
  </div>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  img: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.string
};

export default ProductSummary;
