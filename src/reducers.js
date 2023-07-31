// reducers.js
const initialState = {
  products: [],
  loading: false,
  error: null
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.products
      };

    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        products: []
      };

    default:
      return state;
  }
}
