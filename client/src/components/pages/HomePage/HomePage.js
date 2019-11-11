import React from "react";
import Pagination from "../../common/Pagination/Pagination";
import ProductsList from "../../features/ProductsList/ProductsList";
import Sorting from "../../features/Sorting/Sorting";

const HomePage = () => (
  <div>
    <Sorting />
    <ProductsList />
    <Pagination />
  </div>
);

export default HomePage;
