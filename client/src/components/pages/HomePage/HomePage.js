import React from "react";
import Products from "../../features/Products/ProductsContainer";
import Sorting from "../../features/Sorting/SortingContainer";
import ProductsCounter from "../../features/ProductsCounter/ProductsCounterContainer";

const HomePage = () => (
  <div className="home-page container-fluid">
    <div className="container home-page-content">
      <div className="home-page-sorting-products">
        <Sorting />
        <ProductsCounter />
      </div>
      <Products />
    </div>
  </div>
);

export default HomePage;
