import React from "react";
import Products from "../../features/Products/ProductsContainer";
import Sorting from "../../features/Sorting/Sorting";
import ProductsCounter from "../../features/ProductsCounter/ProductsCounterContainer";

const HomePage = () => (
  <div>
    <Sorting />
    <ProductsCounter />
    <Products />
  </div>
);

export default HomePage;
