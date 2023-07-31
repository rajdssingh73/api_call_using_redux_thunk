// actions.js
import axios from "axios";

export const fetchProductsBegin = () => ({
  type: "FETCH_PRODUCTS_BEGIN"
});

export const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: { products }
});

export const fetchProductsError = (error) => ({
  type: "FETCH_PRODUCTS_ERROR",
  payload: { error }
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    return axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
        return response.data;
      })
      .catch((error) => dispatch(fetchProductsError(error)));
  };
}
