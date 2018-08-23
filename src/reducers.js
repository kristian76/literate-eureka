import { combineReducers } from "redux";

import tasks from "./tasks";
import resources from "./resources";
import ui from "./ui";

const appReducers = combineReducers({
  tasks,
  resources,
  ui
});

export default appReducers;
