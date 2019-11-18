import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import PlusMinusProducts from "../../common/PlusMinusProducts/PlusMinusProducts";

const CartProduct = props => {
  const { products, plusProducts, minusProducts } = props;

  return (
    <div>
      <Link to={"product/" + products.id}>
        <img alt="item" src={products.img.src} />
      </Link>
      <h4>{products.name}</h4>
      <p>{products.description}</p>
      <p md={2}>${products.price}</p>
      <p>
        <PlusMinusProducts
          products={products}
          minusProducts={minusProducts}
          plusProducts={plusProducts}
        />
        <button>usuń z koszyka</button>
      </p>
    </div>
  );
};

CartProduct.propTypes = {
  products: PropTypes.object.isRequired,
  minusProducts: PropTypes.func.isRequired,
  plusProducts: PropTypes.func.isRequired
};

export default CartProduct;
