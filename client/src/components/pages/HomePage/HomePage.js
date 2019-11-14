import React from "react";
import Pagination from "../../common/Pagination/Pagination";
import Products from "../../features/Products/ProductsContainer";
import Sorting from "../../features/Sorting/Sorting";
import ProductsCounter from "../../features/ProductsCounter/ProductsCounterContainer";

const HomePage = () => (
  <div>
    <Sorting />
    <ProductsCounter />
    <Products />
    <Pagination />
  </div>
);

export default HomePage;
