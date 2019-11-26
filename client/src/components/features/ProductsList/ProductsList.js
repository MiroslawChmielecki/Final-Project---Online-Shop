import React from "react";
import { PropTypes } from "prop-types";

import ProductSummary from "../ProductSummary/ProductSummary";

const ProductsList = ({ products }) => (
  <div className="products-list">
    {products.map(product => (
      <ProductSummary key={product.id} {...product} />
    ))}
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default ProductsList;
