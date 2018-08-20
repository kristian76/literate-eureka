/**
 * Create app store and apply middleware
 */
import { createStore, compose, applyMiddleware } from "redux";

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

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(middleware))
);

export default store;
