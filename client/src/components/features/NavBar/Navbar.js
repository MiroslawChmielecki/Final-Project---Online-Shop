import React from "react";
import Logo from "../../common/Logo/Logo";
import MainMenu from "../../layout/MainMenu/MainMenu";
import BasketShopping from "../../common/BasketShopping/BasketShopping";

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

    return (
      <nav>
        <Logo />
        <MainMenu links={links} />
        <BasketShopping />
      </nav>
    );
  }
}

export default NavBar;
