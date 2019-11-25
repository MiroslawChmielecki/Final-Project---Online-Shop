import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "./logoMiro.jpg";

const Logo = () => (
  <Link to="/">
    <img src={LogoImage} width="180px" alt="logoMiroSport" />
  </Link>
);

export default Logo;
