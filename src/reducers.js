import { combineReducers } from "redux";

import tasks from "./tasks";
import resources from "./resources";

const appReducers = combineReducers({
  tasks,
  resources
});

export default appReducers;
