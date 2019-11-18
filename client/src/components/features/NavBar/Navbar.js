import React from "react";
import Logo from "../../common/Logo/Logo";
import MainMenu from "../../layout/MainMenu/MainMenu";
import BasketIcon from "../../common/BasketIcon/BasketIcon";
import { PropTypes } from "prop-types";
import "./Navbar.scss";

class NavBar extends React.Component {
  state = {
    links: [
      { path: "/", title: "Home" },
      { path: "/faq", title: "FAQ" },
      { path: "/regulations", title: "Regulations" },
      { path: "/contact", title: "Contact" }
    ]
  };

  render() {
    const { links } = this.state;
    const { cart } = this.props;

    return (
      <nav className="navbar">
        <Logo />
        <MainMenu links={links} />
        <BasketIcon productsInBasket={cart.length} />
      </nav>
    );
  }
}

NavBar.propTypes = {
  cart: PropTypes.array.isRequired
};

export default NavBar;
