import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Footer from "../../features/Footer/Footer";
import Navbar from "../../features/NavBar/NavbarContainer";

export class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <PageContainer>
        <Navbar />
        <div className="children-style">{children}</div>
        <Footer />
      </PageContainer>
    );
  }
}

export default MainLayout;
