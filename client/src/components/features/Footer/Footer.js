import React from "react";
import MainMenu from "../../layout/MainMenu/MainMenu";

class Footer extends React.Component {
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

    return (
      <footer className="footer container-fluid">
        <div className="container-nav-foot footer-content">
          <p className="footer-rights">
            Wszystkie prawa zastrzeżone © 2019 Mirosław Chmielecki
          </p>
          <div className="footer-links">
            <MainMenu links={links} />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
