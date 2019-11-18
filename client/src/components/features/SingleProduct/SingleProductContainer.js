import { connect } from "react-redux";
import {
  getRequest,
  loadSingleProductRequest,
  getSingleProduct,
  getCart,
  quantityPlus,
  calculatePrice,
  addToCart
} from "../../../redux/productsRedux";
import SingleProduct from "./SingleProduct";

const mapStateToProps = state => ({
  products: getSingleProduct(state),
  request: getRequest(state),
  cart: getCart(state)
});

const mapDispatchToProps = dispatch => ({
  loadProducts: id => dispatch(loadSingleProductRequest(id)),
  addToCart: payload => dispatch(addToCart(payload)),
  quantityPlus: id => dispatch(quantityPlus(id)),
  calculatePrice: () => dispatch(calculatePrice())
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
