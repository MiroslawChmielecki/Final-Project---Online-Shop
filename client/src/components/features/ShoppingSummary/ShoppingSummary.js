import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import uuid from "uuid";

import "./ShoppingSummary.scss";

const ShoppingSummary = props => {
  const { cart, request, price } = props;
  const { pending, success } = request;

  if (pending === false && success === true && cart.length > 0)
    return (
      <div>
        <h1>Order summary</h1>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(el => (
            <tr key={uuid()}>
              <td>{el.name}</td>
              <td>{el.price}$</td>
              <td>{el.quantity}</td>
              <td>{(el.price * el.quantity).toFixed(2)}$</td>
            </tr>
          ))}
        </tbody>

        <div className="summary-footer">
          <p>Final price: {price}$</p>

          <Link to="/">
            <button>Continue shopping</button>
          </Link>
        </div>
      </div>
    );
  else if (pending || success === null || cart.length === 0)
    return <h1>BASKET EMPTY</h1>;
};

ShoppingSummary.propTypes = {
  cart: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  request: PropTypes.object.isRequired
};

export default ShoppingSummary;
