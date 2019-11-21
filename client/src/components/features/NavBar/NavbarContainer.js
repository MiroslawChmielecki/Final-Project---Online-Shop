import { connect } from "react-redux";
import { getCart } from "../../../redux/productsRedux";
import NavBar from "./Navbar";

const mapStateToProps = state => ({
  cart: getCart(state)
});

export default connect(mapStateToProps)(NavBar);
