import React from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Badge } from "reactstrap";

class SingleProduct extends React.Component {
  componentDidMount() {
    const { loadProducts, match } = this.props;
    loadProducts(match.params.id);
  }

  handleAddToBasket = () => {
    const {
      addToCart,
      products,
      cart,
      quantityPlus,
      calculatePrice
    } = this.props;
    const match = this.props.match.params.id;
    const cartCheck = cart.filter(el => el.id === match);

    cartCheck.length === 0 ? addToCart(products[0]) : quantityPlus(match);
    calculatePrice();
  };

  render() {
    const { products, request } = this.props;
    const { pending, success, error } = request;
    const { handleAddToBasket } = this;

    if (pending === false && success === true && products.length > 0)
      return (
        <div className="singleProduct container">
          <div className="singleProduct-contShop">
            <Link to="/">
              <Button color="secondary">Kontynuuj zakupy</Button>
            </Link>
          </div>
          <div className="singleProduct-cart">
            <div className="singleProduct-foto col-4">
              <img
                className="singleProduct-image"
                src={products[0].img.src}
                alt="item"
              />
            </div>
            <div className="singleProduct-info col-8">
              <Badge color="info" className="singleProduct-tag">
                {products[0].tag}
              </Badge>
              <h2 className="singleProduct-name">{products[0].name}</h2>
              <p className="singleProduct-description">
                {products[0].description}
              </p>
              <p className="singleProduct-price">{products[0].price}€</p>
              <Button onClick={handleAddToBasket} color="success">
                Dodaj do koszyka
              </Button>
            </div>
          </div>
        </div>
      );
    else if (pending === true || success === null) return <Spinner />;
    else if (pending === false && error !== null)
      return <Alert variant="danger">{error}</Alert>;
    else if (pending === false && success === true && products.length === 0)
      return <Alert variant="info">- Brak produktów -</Alert>;
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
  loadProducts: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  quantityPlus: PropTypes.func.isRequired
};

export default withRouter(props => <SingleProduct {...props} />);
