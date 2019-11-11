import React from "react";
import PageContainer from "../PageContainer/PageContainer";

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>{children}</PageContainer>
  </div>
);

export default MainLayout;
