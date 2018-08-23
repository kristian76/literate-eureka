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

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(middleware))
);

export default store;
