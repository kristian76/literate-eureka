import React from "react";
import { connect } from "react-redux";

import "./helpers";
import { addTask } from "./thunks";

const Header = props => (
  <header className="navbar">
    <section className="navbar-section" />
    <section className="navbar-section">
      <button className="btn btn-success">{"add_resource".t()}</button>
      <button className="btn btn-success" onClick={e => props.addTask()}>
        {"add_task".t()}
      </button>
    </section>
  </header>
);

export default connect(
  null,
  {addTask}
)(Header);
