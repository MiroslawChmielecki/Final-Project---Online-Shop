import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import uuid from "uuid";
import { Table } from "reactstrap";
import Alert from "../../common/Alert/Alert";
import { Button } from "reactstrap";

const ShoppingSummary = props => {
  const { cart, request, price } = props;
  const { pending, success } = request;

  if (pending === false && success === true && cart.length > 0)
    return (
      <div className="shopping-summary">
        <h1>Twoje zamówienie</h1>
        <div className="shopping-summary-table">
          <Table bordered dark responsive>
            <thead>
              <tr>
                <th scope="row">Nazwa</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Suma</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(el => (
                <tr key={uuid()}>
                  <td className="nameInTable">{el.name}</td>
                  <td>{el.price}€</td>
                  <td>{el.quantity}</td>
                  <td>{(el.price * el.quantity).toFixed(2)}€</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="shoppingSummary-underTable">
          <p className="shoppingSummary-underTable-desc">
            <span>Cena końcowa</span>
            <span className="shoppingSummary-underTable-price">{price}$</span>
          </p>

          <Link to="/">
            <Button color="secondary">Kontynuuj zakupy</Button>
          </Link>
          <Button className="shoppingSummary-buttonBuy" color="success">
            Kup teraz
          </Button>
        </div>
      </div>
    );
  else if (pending || success === null || cart.length === 0)
    return <Alert variant="error">Koszyk jest pusty</Alert>;
};

ShoppingSummary.propTypes = {
  cart: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  request: PropTypes.object.isRequired
};

export default ShoppingSummary;
