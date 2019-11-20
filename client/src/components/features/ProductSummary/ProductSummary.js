import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./ProductSummary.scss";

export class ProductSummary extends React.Component {
  render() {
    const { id, tag, img, name, price, description } = this.props;

    return (
      <div className="product-summary">
        <Link to={`/product/${id}`}>
          <h3>{name}</h3>
          <p>{tag}</p>
          <p>{price} €</p>
          <img className="foto-product" src={img.src} alt="product-foto" />
          <p>{description}</p>
        </Link>
      </div>
    );
  }
}

ProductSummary.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.string,
  img: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
};

export default ProductSummary;
