/**
 * Create app store and apply middleware
 */
import { createStore, compose, applyMiddleware } from "redux";

import { tasks, resources, ui } from "./state";

const initialState = {
  tasks,
  resources,
  ui
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
  compose(enhancer(applyMiddleware(middleware)))
);

export default store;
