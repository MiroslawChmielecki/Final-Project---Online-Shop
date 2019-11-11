import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => (
  <ul>
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/faq">faq</Link>
    </li>
    <li>
      <Link to="/regulations">regulamin</Link>
    </li>
    <li>
      <Link to="/contact">kontakt</Link>
    </li>
  </ul>
);

export default MainMenu;
