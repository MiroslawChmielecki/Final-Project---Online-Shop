import React from "react";
import { Animated } from "react-animated-css";

const Spinner = () => (
  <Animated animationIn="fadeIn" animationOut="fadeOut">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Animated>
);

export default Spinner;
