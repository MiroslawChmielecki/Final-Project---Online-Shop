import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";

export class ProductSummary extends React.Component {
  render() {
    const { id, tag, img, name, price } = this.props;

    return (
      <div className="product-summary">
        <Link to={`/products/${id}`}>
          <Badge color="info" className="product-summary-tag">
            {tag}
          </Badge>
          <div className="product-summary-foto">
            <img
              className="product-summary-img"
              src={img.src}
              alt="product-foto"
            />
          </div>
          <h3 className="product-summary-name">{name}</h3>
          <p className="product-summary-price">{price}€</p>
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
  price: PropTypes.number
};

export default ProductSummary;
