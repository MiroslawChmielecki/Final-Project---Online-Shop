import React from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import Button from "../../common/Button/Button";

class SingleProduct extends React.Component {
  componentDidMount() {
    const { loadProducts, match } = this.props;
    loadProducts(match.params.id);
  }

  render() {
    const { products, request } = this.props;
    const { pending, success, error } = request;

    if (pending === false && success === true && products.length > 0)
      return (
        <div>
          <button>BUTTON BACK</button>
          <h2>{products[0].name}</h2>
          <p>{products[0].tag}</p>
          <p>{products[0].price}$</p>
          <p>{products[0].description}</p>
          <img src={products[0].img.src} alt="item" />
          <Button color="primary">Add to cart</Button>
        </div>
      );
    else if (pending === true || success === null) return <Spinner />;
    else if (pending === false && error !== null)
      return <Alert color="danger">{error}</Alert>;
    else if (pending === false && success === true && products.length === 0)
      return <Alert color="info">- no products -</Alert>;
  }
}

SingleProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  loadProducts: PropTypes.func.isRequired
};

export default withRouter(props => <SingleProduct {...props} />);
