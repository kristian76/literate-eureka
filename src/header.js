import React from "react";
import { connect } from "react-redux";

import "./helpers"

const Header = props => (
  <header className="navbar">
    <section className="navbar-section" />
    <section className="navbar-section">
      <button className="btn btn-success" onClick={e => props.addResource()}>
        {"add_resource".t("en-US")}
      </button>
      <button className="btn btn-success" onClick={e => props.addTask()}>
        {"add_task".t()}
      </button>
    </section>
  </header>
);

const mapDispatch = dispatch => ({
  addTask: () =>
    dispatch({
      type: "OPEN_MODAL"
    }),
  addResource: () =>
    dispatch({
      type: "OPEN_MODAL"
    })
});

export default connect(
  null,
  mapDispatch
)(Header);
