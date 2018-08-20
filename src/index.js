/** PWA stuff
 * Resources https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
 **/
if ("serviceWorker" in navigator) {
  // Register serviceWorker
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(function() {
      console.log("service worker registered");
    })
    .catch(function(e) {
      console.log(e);
    });
}

import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

/**
 * Import appstore
 */
import store from "./store";
/**
 * Import child components
 */
import TaskList from "./tasklist";
import ResouceList from "./resourcelist";

const AppShell = props => {
  store.dispatch({ type: "FETCH_TASKS" });
  return (
    <div>
      <ResouceList />
      <TaskList />
    </div>
  );
};

render(
  <Provider store={store}>
    <AppShell />
  </Provider>,
  document.getElementById("root")
);
