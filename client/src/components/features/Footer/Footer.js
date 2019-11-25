import React from "react";
import MainMenu from "../../layout/MainMenu/MainMenu";

class Footer extends React.Component {
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
      <footer className="footer container-fluid">
        <div className="container-nav-foot footer-content">
          <p className="footer-rights">
            All rights reserved © 2019 by Mirosław Chmielecki
          </p>
          <MainMenu links={links} />
        </div>
      </footer>
    );
  }
}

export default Footer;
