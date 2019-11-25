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
      <div className="products-counter">
        {counter > 0
          ? `Ilość dostępnych produktów: ${counter}`
          : "Brak produktów"}
      </div>
    );
  }
}

ProductsCounter.propTypes = {
  counter: PropTypes.number.isRequired
};

export default ProductsCounter;
