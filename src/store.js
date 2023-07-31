// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers";

export default createStore(productsReducer, applyMiddleware(thunk));
