import React from "react";
import uuid from "uuid";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import Discount from "../../common/Discount/Discount";
import Alert from "../../common/Alert/Alert";
import { Button } from "reactstrap";

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

  handleDiscount = () => {
    const { getDiscount, calculatePrice } = this.props;
    getDiscount();
    calculatePrice();
  };

  render() {
    const { cart, price, discountCode, discountStatus } = this.props;
    const { minusCounter, plusCounter, handleRemoveProduct } = this;

    return (
      <div className="cart container">
        <h1 className="cart-header">Shopping basket</h1>

        <div className="cart-cartProduct">
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
            <Alert variant="warning">Your basket is empty!</Alert>
          )}
        </div>
        <div className="cart-discount-summary">
          <div className="cart-discount">
            <Discount
              discountStatus={discountStatus}
              discountCode={discountCode}
              handleDiscountCode={this.handleDiscount}
            />
          </div>
          <div className="cart-totalPrice-buttons">
            <p className="cart-totalPrice">Total: ${price.toFixed(2)}</p>
            {cart.length !== 0 ? (
              <Link to="/shoppingsummary">
                <Button className="cart-summary" color="success">
                  Summary
                </Button>
              </Link>
            ) : (
              <Button className="cart-summary-none" color="success"></Button>
            )}
            <Link to="/">
              <Button className="cart-continueshopping" color="secondary">
                Continue shopping
              </Button>
            </Link>
          </div>
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
  removeFromBasket: PropTypes.func.isRequired,
  discountCode: PropTypes.string.isRequired,
  getDiscount: PropTypes.func.isRequired,
  discountStatus: PropTypes.bool.isRequired
};

export default Cart;
