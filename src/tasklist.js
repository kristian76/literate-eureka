import React from "react";
import { connect } from "react-redux";

import Duration from "./duration";
/**
 * TODO: Tasks to be sorted by resource
 */

const TaskList = props => {
  return Object.keys(props.resources).map((key, i) => (
    <div key={i} className="columns">
      {filterTaskKeys(props.tasks, key).map((task, j) => (
        <div key={j} className="column col-xs-8">
          {props.tasks[task].name}
          <Duration
            dates={props.tasks[task].duration}
            progress={props.tasks[task].progress}
          />
        </div>
      ))}
    </div>
  ));
};

const filterTaskKeys = (data, res) =>
  Object.keys(data).filter(
    key => Object.keys(data[key].resources).includes(res) == true
  );

const mapState = state => ({
  tasks: state.tasks,
  resources: state.resources
});

export default connect(
  mapState,
  null
)(TaskList);
