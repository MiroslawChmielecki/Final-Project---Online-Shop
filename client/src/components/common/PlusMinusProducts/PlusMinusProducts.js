import React from "react";
import { PropTypes } from "prop-types";

class PlusMinusProducts extends React.Component {
  minus = () => {
    const { products, minusProducts } = this.props;
    minusProducts(products);
  };

  plus = () => {
    const { products, plusProducts } = this.props;
    plusProducts(products.id);
  };

  render() {
    const { products } = this.props;

    return (
      <div>
        <div className="items-qty">
          <button onClick={this.minus}>-</button>
          <p>{products.quantity}</p>
          <button onClick={this.plus}>+</button>
        </div>
      </div>
    );
  }
}

PlusMinusProducts.propTypes = {
  products: PropTypes.object.isRequired,
  plusProducts: PropTypes.func.isRequired,
  minusProducts: PropTypes.func.isRequired
};

export default PlusMinusProducts;
