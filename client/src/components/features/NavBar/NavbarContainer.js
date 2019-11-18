import { connect } from "react-redux";
import { getBasket } from "../../../redux/productsRedux";
import NavBar from "./Navbar";

const mapStateToProps = state => ({
  basket: getBasket(state)
});

const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
