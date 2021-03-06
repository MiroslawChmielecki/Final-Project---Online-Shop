import React from "react";
import Logo from "../../common/Logo/Logo";
import MainMenu from "../../layout/MainMenu/MainMenu";
import BasketIcon from "../../common/BasketIcon/BasketIcon";
import { PropTypes } from "prop-types";

class NavBar extends React.Component {
  state = {
    links: [
      { path: "/", title: "Home" },
      { path: "/faq", title: "FAQ" },
      { path: "/regulations", title: "Regulamin" },
      { path: "/contact", title: "Kontakt" }
    ]
  };

  render() {
    const { links } = this.state;
    const { cart } = this.props;

    return (
      <nav className="navbar container-fluid">
        <div className="container-nav-foot navbar-content">
          <Logo />
          <MainMenu links={links} />
          <BasketIcon productsInBasket={cart.length} />
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  cart: PropTypes.array.isRequired
};

export default NavBar;
