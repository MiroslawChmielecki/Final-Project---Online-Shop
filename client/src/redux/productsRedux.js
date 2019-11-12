import initialState from "./initialState";

/* SELECTORS */
export const getProducts = ({ products }) => products;

// action name creator
const reducerName = "products";
const createActionName = name => `app/${reducerName}/${name}`;

//ACTIONS
export const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* INITIAL STATE */

//const initialState = [];

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return statePart;
    default:
      return statePart;
  }
}
