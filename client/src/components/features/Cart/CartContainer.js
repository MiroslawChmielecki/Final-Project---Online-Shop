import { connect } from "react-redux";
import {
  getCart,
  getFullPrice,
  quantityPlus,
  quantityMinus,
  calculatePrice,
  removeFromBasket,
  getDiscountCode,
  getDiscountStatus,
  getDiscount
} from "../../../redux/productsRedux";

import Cart from "./Cart";

const mapStateToProps = state => ({
  cart: getCart(state),
  price: getFullPrice(state),
  discountCode: getDiscountCode(state),
  discountStatus: getDiscountStatus(state)
});

const mapDispatchToProps = dispatch => ({
  plusProducts: id => dispatch(quantityPlus(id)),
  minusProducts: id => dispatch(quantityMinus(id)),
  calculatePrice: () => dispatch(calculatePrice()),
  removeFromBasket: id => dispatch(removeFromBasket(id)),
  getDiscount: () => dispatch(getDiscount())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
