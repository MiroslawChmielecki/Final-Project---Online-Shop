import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "./logoMiro.jpg";

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img
        src={LogoImage}
        width="180px"
        className="logoImage"
        alt="logoMiroSport"
      />
    </Link>
  </div>
);

export default Logo;
