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
/**
 * TODO: The translated text should not be a private variable
 * inside the function. The method should be in a global module.
 * The string reference could be referring to keys like "something.somewhere"
 * splitting the string by . and using those as keys
 */
String.prototype.t = function(locale = "en-US") {
  let str = this.valueOf(),
    trans = {
      "en-US": {
        add_resource: "Add Resouce",
        add_task: "Add Task"
      }
    };
  return trans[locale][str] || str;
};

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
