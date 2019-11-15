import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  sortingOptions,
  getProductsSorting
} from "../../../redux/productsRedux";
import Sorting from "./Sorting";

const SortingContainer = ({ sortingOptions }) => {
  return <Sorting sortingOptions={sortingOptions} />;
};

SortingContainer.propTypes = {
  sortingOptions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getProductsSorting(state)
});

const mapDispatchToProps = {
  sortingOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingContainer);
