/**
 * Create app store and apply middleware
 */
import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"

import { tasks, resources } from "./state";

const initialState = {
  tasks,
  resources
};
/**
 * Get reducers
 */
import reducers from "./reducers";
/**
 * Get middleware
 */
import middleware from "./middleware";

const enhancer =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  reducers,
  initialState,
  compose(enhancer(applyMiddleware(middleware, thunkMiddleware)))
);

export default store;
