import React from "react";
import { connect } from "react-redux";

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

String.prototype.t = function(locale = "en-US") {
  let str = this.valueOf(),
    trans = {
      "en-US": {
        add_resource: "Add Button",
        add_task: "Add Task"
      }
    };
  return trans[locale][str] || str;
};

const mapDispatch = dispatch => ({
  addTask: () =>
    dispatch({
      type: "ADD_TASK"
    }),
  addResource: () =>
    dispatch({
      type: "ADD_RESOURCE"
    })
});

export default connect(
  null,
  mapDispatch
)(Header);
