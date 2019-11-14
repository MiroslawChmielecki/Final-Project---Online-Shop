import React from "react";
import Pagination from "../../common/Pagination/Pagination";
import Products from "../../features/Products/ProductsContainer";
import Sorting from "../../features/Sorting/Sorting";

const HomePage = () => (
  <div>
    <Sorting />
    <Products />
    <Pagination />
  </div>
);

export default HomePage;
