import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../images/MainLogo.jpg";

const Logo = () => (
  <Link to="/">
    <img src={LogoImage} width="200px" alt="logoMiroSport" />
  </Link>
);

export default Logo;
