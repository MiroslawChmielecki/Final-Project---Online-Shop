import axios from "axios";
import { API_URL } from "../config";

//ACTION NAME CREATOR
const reducerName = "products";
const createActionName = name => `app/${reducerName}/${name}`;

// SELECTORS
export const getProducts = ({ products }) => products.data;
export const getProductsCounter = ({ products }) => products.amount;
export const getRequest = ({ products }) => products.request;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getPages = ({ products }) =>
  Math.ceil(products.amount / products.productsPerPage);
export const getPresentPage = ({ products }) => products.presentPage;
export const getProductsSorting = ({ products }) => {
  const sortingProducts = [...products.data].sort((a, b) => {
    if (a[products.key] > b[products.key])
      return products.direction === "asc" ? 1 : -1;
    if (a[products.key] < b[products.key])
      return products.direction === "asc" ? -1 : 1;
    return 0;
  });
  return sortingProducts;
};
export const getCart = ({ products }) => products.cart;
export const getFullPrice = ({ products }) => products.fullPrice;
export const getDiscountCode = ({ products }) => products.discountCode;
export const getDiscountStatus = ({ products }) => products.discountCorrect;

//ACTIONS
export const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
export const START_REQUEST = createActionName("START_REQUEST");
export const END_REQUEST = createActionName("END_REQUEST");
export const ERROR_REQUEST = createActionName("ERROR_REQUEST");
export const LOAD_SINGLE_PRODUCT = createActionName("LOAD_SINGLE_PRODUCT");
export const RESET_REQUEST = createActionName("RESET_REQUEST");
export const LOAD_PRODUCTS_PAGE = createActionName("LOAD_PRODUCTS_PAGE");
export const SORTING_OPTIONS = createActionName("SORTING_OPTIONS");
export const ADD_TO_CART = createActionName("ADD_TO_CART");
export const QUANTITY_PLUS = createActionName("QUANTITY_PLUS");
export const QUANTITY_MINUS = createActionName("QUANTITY_MINUS");
export const CALCULATE_PRICE = createActionName("CALCULATE_PRICE");
export const REMOVE_FROM_BASKET = createActionName("REMOVE_FROM_BASKET");
export const GET_DISCOUNT = createActionName("GET_DISCOUNT");

//ACTIONS CREATORS
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const loadSingleProduct = payload => ({
  payload,
  type: LOAD_SINGLE_PRODUCT
});
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadProductsByPage = payload => ({
  payload,
  type: LOAD_PRODUCTS_PAGE
});
export const sortingOptions = payload => ({ payload, type: SORTING_OPTIONS });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const quantityPlus = id => ({ id, type: QUANTITY_PLUS });
export const quantityMinus = id => ({ id, type: QUANTITY_MINUS });
export const calculatePrice = () => ({ type: CALCULATE_PRICE });
export const removeFromBasket = payload => ({
  payload,
  type: REMOVE_FROM_BASKET
});
export const getDiscount = () => ({ type: GET_DISCOUNT });

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null
  },
  singleProduct: [],
  key: "",
  direction: "",
  amount: 0,
  productsPerPage: 6,
  presentPage: 1,
  cart: [],
  fullPrice: 0,
  discountCode: "PayLessMiroYEE",
  discountCorrect: false
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null }
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true }
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false }
      };
    case LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null }
      };
    case LOAD_PRODUCTS_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.products]
      };
    case SORTING_OPTIONS:
      return {
        ...statePart,
        key: action.payload.key,
        direction: action.payload.direction
      };

    case ADD_TO_CART:
      const addedProduct = action.payload;
      addedProduct.quantity += 1;
      return {
        ...statePart,
        cart: statePart.cart.concat(addedProduct)
      };

    case QUANTITY_PLUS:
      const productPlus = statePart.cart.find(el => el.id === action.id);
      productPlus.quantity += 1;
      const plusCartUpdate = statePart.cart.map(el =>
        el.id === action.id ? productPlus : el
      );
      return { ...statePart, cart: plusCartUpdate };
    case QUANTITY_MINUS:
      const productMinus = statePart.cart.find(el => el.id === action.id);
      productMinus.quantity -= 1;
      const minusCartUpdate = statePart.cart.map(el =>
        el.id === action.id ? productMinus : el
      );
      return {
        ...statePart,
        cart: minusCartUpdate
      };

    case CALCULATE_PRICE:
      let summaryPrices;
      if (statePart.cart.length !== 0) {
        const Prices = statePart.cart.map(elem =>
          elem.product
            ? elem.price * elem.quantity * 1.15
            : elem.price * elem.quantity
        );
        const PricesReduce = Prices.reduce((x, y) => x + y);
        summaryPrices = parseFloat(
          (statePart.discountCorrect
            ? PricesReduce * statePart.discount
            : PricesReduce
          ).toFixed(2)
        );
      } else {
        summaryPrices = 0;
      }
      return {
        ...statePart,
        fullPrice: summaryPrices
      };
    case REMOVE_FROM_BASKET:
      const updateBasket = statePart.cart.filter(
        elem => elem.id !== action.payload
      );
      return {
        ...statePart,
        cart: updateBasket
      };
    case GET_DISCOUNT:
      return {
        ...statePart,
        discount: 0.85,
        discountCorrect: true
      };

    default:
      return statePart;
  }
}

/* THUNKS */

export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest());
    }
  };
};

export const loadSingleProductRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/product/${id}`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSingleProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadProductsByPageRequest = (page, productsPerPage) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      let res = await axios.get(
        `${API_URL}/products/range/${startAt}/${limit}`
      );

      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page
      };

      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
