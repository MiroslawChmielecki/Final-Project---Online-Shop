import React from "react";
import Products from "../../features/Products/ProductsContainer";
import Sorting from "../../features/Sorting/SortingContainer";
import ProductsCounter from "../../features/ProductsCounter/ProductsCounterContainer";

const HomePage = () => (
  <div>
    <Sorting />
    <ProductsCounter />
    <Products />
  </div>
);

export default HomePage;
