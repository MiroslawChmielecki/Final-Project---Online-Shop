import React from "react";
import { PropTypes } from "prop-types";

class ProductsCounter extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }
  render() {
    const { counter } = this.props;

    return (
      <div>{counter > 0 ? `Products amount: ${counter}` : "No posts"}</div>
    );
  }
}

ProductsCounter.propTypes = {
  counter: PropTypes.number.isRequired
};

export default ProductsCounter;
