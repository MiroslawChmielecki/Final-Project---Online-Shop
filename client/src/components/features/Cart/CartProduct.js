import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import PlusMinusProducts from "../../common/PlusMinusProducts/PlusMinusProducts";

const CartProduct = props => {
  const { products, plusProducts, minusProducts, handleRemoveProduct } = props;
  const { name, description, price } = props.products;

  return (
    <div>
      <Link to={"product/" + products.id}>
        <img alt="item" src={products.img.src} />
      </Link>
      <h4>{name}</h4>
      <p>{description}</p>
      <p md={2}>${price}</p>
      <p>
        <PlusMinusProducts
          products={products}
          minusProducts={minusProducts}
          plusProducts={plusProducts}
          removeProduct={handleRemoveProduct}
        />
      </p>
    </div>
  );
};

CartProduct.propTypes = {
  products: PropTypes.object.isRequired,
  minusProducts: PropTypes.func.isRequired,
  plusProducts: PropTypes.func.isRequired,
  handleRemoveProduct: PropTypes.func.isRequired
};

export default CartProduct;
