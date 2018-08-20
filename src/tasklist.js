import React from "react";
import { connect } from "react-redux";

import Duration from "./duration";
/**
 * TODO: Tasks to be sorted by resource
 */
const TaskList = props =>
  Object.keys(props.tasks).map((key, index) => (
    <div key={index}>
      {props.tasks[key].name}
      <Duration
        dates={props.tasks[key].duration}
        progress={props.tasks[key].progress}
      />
    </div>
  ));

const mapState = state => ({
  tasks: state.tasks,
  resources: state.resources
});

export default connect(
  mapState,
  null
)(TaskList);
