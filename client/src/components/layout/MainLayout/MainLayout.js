import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Footer from "../../features/Footer/Footer";
import Navbar from "../../features/NavBar/Navbar";

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <Navbar />
      {children}
      <Footer />
    </PageContainer>
  </div>
);

export default MainLayout;
