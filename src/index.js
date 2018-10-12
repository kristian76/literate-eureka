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
import { Provider, connect } from "react-redux";

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
import Modal from "./modal";

import { fetchData } from "./thunks";

const AppShell = props => {
  props.fetchData(props.source);

  let css = {
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap"
  };
  return [
    <Header key="1" />,
    <main className="container" key="2">
      <div className="columns">
        <div className="column col-2">
          <ResouceList />
        </div>
        <div className="column col-10" style={css}>
          <CalendarView />
        </div>
      </div>
    </main>,
    <footer key="3" />,
    <Modal key="4" />
  ];
};

const App = connect(
  null,
  { fetchData }
)(AppShell);

const ROOT = document.getElementById("root");

render(
  <Provider store={store}>
    <App source={ROOT.getAttribute('data-source')} />
  </Provider>,
  ROOT
);
