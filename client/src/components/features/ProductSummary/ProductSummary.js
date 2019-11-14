import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ProductSummary = ({ id, title, content }) => (
  <div>
    <Link to={"product/" + id}>
      <h1>{title}</h1>
      <p>{content}</p>
    </Link>
  </div>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};

export default ProductSummary;
