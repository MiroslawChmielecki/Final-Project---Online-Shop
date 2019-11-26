import React from "react";
import { PropTypes } from "prop-types";
import ProductsList from "../ProductsList/ProductsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import Pagination from "../../common/Pagination/Pagination";
import DiscountModal from "../../common/DiscountModal/DiscountModal";

class Products extends React.Component {
  componentDidMount() {
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage || 1, productsPerPage || 6);
  }

  loadProductsPage = page => {
    const { loadProductsByPage, productsPerPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  };

  render() {
    const { products, request, pages, presentPage, pagination } = this.props;
    const { pending, success, error } = request;
    const { loadProductsPage } = this;

    if (
      pending === false &&
      success === true &&
      products.length > 0 &&
      pagination === true
    )
      return (
        <div className="products">
          <div className="products-modal">
            <DiscountModal />
          </div>
          <div className="products-productsList">
            <ProductsList products={products} />
          </div>
          <div className="products-pagination">
            <Pagination
              pages={pages}
              onPageChange={loadProductsPage}
              initialPage={presentPage}
            />
          </div>
        </div>
      );
    else if (
      pending === false &&
      success === true &&
      products.length > 0 &&
      pagination === false
    )
      return (
        <>
          <ProductsList products={Products} />
        </>
      );
    else if (pending === true || success === null) return <Spinner />;
    else if (pending === false && error !== null)
      return <Alert variant="error">{error}</Alert>;
    else if (pending === false && success === true && products.length === 0)
      return <Alert variant="info">Brak produktów</Alert>;
    else {
      return <Alert variant="info">Coś poszło nie tak....</Alert>;
    }
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  loadProductsByPage: PropTypes.func.isRequired
};

Products.defaultProps = {
  initialPage: 1,
  productsPerPage: 6,
  pagination: true
};

export default Products;
