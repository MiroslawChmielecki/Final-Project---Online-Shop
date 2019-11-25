import React from "react";
import { PropTypes } from "prop-types";

import PlusMinusProducts from "../../common/PlusMinusProducts/PlusMinusProducts";

const CartProduct = props => {
  const { products, plusProducts, minusProducts, handleRemoveProduct } = props;
  const { name, price } = props.products;

  const thatarray = products.description.split("");
  const lastIndex = thatarray.lastIndexOf(" ", 90);
  const newShortContent = products.description.substr(0, lastIndex) + "...";

  return (
    <div className="cartProduct">
      <div className="cartProduct-foto col-4">
        <img className="cartProduct-img" alt="item" src={products.img.src} />
      </div>

      <div className="cartProduct-info col-4">
        <h4 className="cartProduct-name">{name}</h4>
        <p className="cartProduct-description">{newShortContent}</p>
      </div>

      <p className="cartProduct-price col-1">${price}</p>
      <div className="cartProduct-plusMinus col-3">
        <PlusMinusProducts
          products={products}
          minusProducts={minusProducts}
          plusProducts={plusProducts}
          removeProduct={handleRemoveProduct}
        />
      </div>
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
