import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant = "", children, ...otherProps }) => (
  <button {...otherProps} className={`button button--${variant}`}>
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.string.isRequired
};

export default Button;
