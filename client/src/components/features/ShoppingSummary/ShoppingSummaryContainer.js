import { connect } from "react-redux";
import {
  getFullPrice,
  getCart,
  getRequest
} from "../../../redux/productsRedux";

import ShoppingSummary from "./ShoppingSummary";

const mapStateToProps = state => ({
  price: getFullPrice(state),
  cart: getCart(state),
  request: getRequest(state)
});

export default connect(mapStateToProps)(ShoppingSummary);
