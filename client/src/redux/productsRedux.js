import axios from "axios";
import { API_URL } from "../config";

//ACTION NAME CREATOR
const reducerName = "products";
const createActionName = name => `app/${reducerName}/${name}`;

// SELECTORS
export const getProducts = ({ products }) => products;
export const getProductsCounter = ({ products }) => products.length;

//ACTIONS
export const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");

//ACTIONS CREATORS
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }
}

/* THUNKS */

export const loadProductsRequest = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
