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

import ResouceList from "./resourcelist";
import Header from "./header";
import CalendarView from "./calendarview";

const AppShell = props => {
  store.dispatch({ type: "FETCH_TASKS" });
  return [
    <Header key="1" />,
    <div className="container" key="2">
      <div className="columns">
        <div className="column col-4">
          <ResouceList />
        </div>
        <div className="column col-8">
          <CalendarView />
        </div>
      </div>
    </div>
  ];
};

render(
  <Provider store={store}>
    <AppShell />
  </Provider>,
  document.getElementById("root")
);
