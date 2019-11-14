import React from "react";
import { PropTypes } from "prop-types";
import ProductsList from "../ProductsList/ProductsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";

class Products extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products, request } = this.props;
    const { pending, success, error } = request;

    if (pending === false && success === true && products.length > 0)
      return <ProductsList products={products} />;
    else if (pending === true || success === null) return <Spinner />;
    else if (pending === false && error !== null)
      return <Alert variant="error">{error}</Alert>;
    else if (pending === false && success === true && products.length === 0)
      return <Alert variant="info">No products</Alert>;
    else {
      return <Alert variant="info">Something went wrong....</Alert>;
    }
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  loadProducts: PropTypes.func.isRequired
};
export default Products;
