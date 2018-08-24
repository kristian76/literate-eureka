import { combineReducers } from "redux";

import tasks from "./reducers/tasks";
import resources from "./reducers/resources";
import modal from "./reducers/modal";

const appReducers = combineReducers({
  tasks,
  resources,
  modal
});

export default appReducers;
