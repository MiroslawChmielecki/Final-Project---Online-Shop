import React from "react";
import uuid from "uuid";
import { PropTypes } from "prop-types";
import CartProduct from "./CartProduct";
import Alert from "../../common/Alert/Alert";

import "./Cart.scss";

class Cart extends React.Component {
  minusCounter = products => {
    const { minusProducts, calculatePrice } = this.props;
    products.quantity === 1 ? void 0 : minusProducts(products.id);
    calculatePrice();
  };

  plusCounter = id => {
    const { plusProducts, calculatePrice } = this.props;
    plusProducts(id);
    calculatePrice();
  };

  onPageChange = pageNumber => {
    this.setState({ page: pageNumber });
  };

  handleRemoveProduct = id => {
    const { removeFromBasket, calculatePrice } = this.props;
    removeFromBasket(id);
    calculatePrice();
  };

  render() {
    const { cart, price } = this.props;
    const { minusCounter, plusCounter, handleRemoveProduct } = this;

    return (
      <div>
        <p>Shopping Cart</p>

        <div>
          {cart.length !== 0 ? (
            cart.map(el => (
              <CartProduct
                key={uuid()}
                minusProducts={minusCounter}
                plusProducts={plusCounter}
                products={el}
                handleRemoveProduct={handleRemoveProduct}
              />
            ))
          ) : (
            <Alert color="danger">Your basket is empty!</Alert>
          )}
        </div>

        <div>
          <input placeholder="discount code" />
          <p>Total: ${price.toFixed(2)}</p>
          <button>Summary</button>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  minusProducts: PropTypes.func.isRequired,
  plusProducts: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  calculatePrice: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired
};

export default Cart;
