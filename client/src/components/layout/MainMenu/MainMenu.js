import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const MainMenu = ({ links }) => (
  <ul>
    {links.map((link, index) => (
      <li key={index}>
        <Link to={link.path}>{link.title}></Link>
      </li>
    ))}
  </ul>
);

MainMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default withRouter(props => <MainMenu {...props} />);