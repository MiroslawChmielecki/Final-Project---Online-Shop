import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Footer from "../../features/Footer/Footer";
import Navbar from "../../features/NavBar/NavbarContainer";

export class MainLayout extends React.Component {
  render() {
    return (
      <PageContainer>
        <Navbar />
        {this.props.children}
        <Footer />
      </PageContainer>
    );
  }
}

export default MainLayout;
