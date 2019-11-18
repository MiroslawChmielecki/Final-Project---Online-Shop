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

  removeProduct = () => {
    const { removeProduct, products } = this.props;
    removeProduct(products.id);
  };

  render() {
    const { products } = this.props;
    const { minus, plus, removeProduct } = this;
    return (
      <div>
        <div className="items-qty">
          <button onClick={minus}>-</button>
          <p>{products.quantity}</p>
          <button onClick={plus}>+</button>
        </div>
        <button onClick={removeProduct}>Remove product from basket</button>
      </div>
    );
  }
}

PlusMinusProducts.propTypes = {
  products: PropTypes.object.isRequired,
  plusProducts: PropTypes.func.isRequired,
  minusProducts: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
};

export default PlusMinusProducts;
