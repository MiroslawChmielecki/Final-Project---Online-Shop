import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="notFoundPage">
    <div className="notFoundPage-content">
      <h1>Ups !! Coś poszło nie tak !!</h1>
      <Link to="/">
        <Button color="secondary">Wracaj na strone sklepu</Button>
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
