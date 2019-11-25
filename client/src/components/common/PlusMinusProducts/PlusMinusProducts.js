import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "reactstrap";

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
        <div className="plusMinusProducts">
          <button className="plusMinusProducts-minus" onClick={minus}>
            -
          </button>
          <p className="plusMinusProducts-number">{products.quantity}</p>
          <button className="plusMinusProducts-plus" onClick={plus}>
            +
          </button>
        </div>
        <Button
          className="plusMinusProducts-remove"
          outline
          color="warning"
          onClick={removeProduct}
        >
          Remove from basket
        </Button>
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
