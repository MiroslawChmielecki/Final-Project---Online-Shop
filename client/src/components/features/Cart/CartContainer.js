import { connect } from "react-redux";
import {
  getCart,
  getFullPrice,
  quantityPlus,
  quantityMinus,
  calculatePrice
} from "../../../redux/productsRedux";

import Cart from "./Cart";

const mapStateToProps = state => ({
  cart: getCart(state),
  price: getFullPrice(state)
});

const mapDispatchToProps = dispatch => ({
  plusProducts: id => dispatch(quantityPlus(id)),
  minusProducts: id => dispatch(quantityMinus(id)),
  calculatePrice: () => dispatch(calculatePrice())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);