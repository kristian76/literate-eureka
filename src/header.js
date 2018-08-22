import React from "react";
import { connect } from "react-redux";

const Header = props => {
  return (
    <header className="navbar">
      <section className="navbar-section" />
      <section className="navbar-section">
        <button className="btn btn-success">Add Resource</button>
        <button className="btn btn-success">Add Task</button>
      </section>
    </header>
  );
};

const mapDispatch = dispatch => ({
  addTask: () =>
    dispatch({
      type: "ADD_TASK"
    })
});

export default connect(
  null,
  mapDispatch
)(Header);
