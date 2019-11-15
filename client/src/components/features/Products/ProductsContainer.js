import { connect } from "react-redux";
import {
  getRequest,
  loadProductsByPageRequest,
  getPages,
  getPresentPage,
  getProductsSorting
} from "../../../redux/productsRedux";
import Products from "./Products";

const mapStateToProps = state => ({
  products: getProductsSorting(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) =>
    dispatch(loadProductsByPageRequest(page, productsPerPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
