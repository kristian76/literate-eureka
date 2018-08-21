import React from "react";
import { connect } from "react-redux";

import Duration from "./duration";
/**
 * TODO: Tasks to be sorted by resource
 */

const TaskList = props => {
  let tasks = sortTasks(props.tasks);

  return (
    <div className="columns">
      <div className="column col-12">
        {Object.keys(props.resources).map((key, i) => (
          <div key={i} className="columns">
            {filterTaskKeys(tasks, key).map((task, j) => (
              <div key={j} className="column col-12">
                {props.tasks[task].name}
                <Duration
                  dates={props.tasks[task].duration}
                  progress={props.tasks[task].progress}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
/**
 * TODO: Implement sorting based on duration
 */
const sortTasks = tasks => {
  let taskList = [];

  Object.keys(tasks).forEach(key => {
    taskList.push(tasks[key]);
  });

  taskList.sort((a, b) => {
    let aD = new Date(Date.parse(a.duration.from)).getTime(),
      bD = new Date(Date.parse(b.duration.from)).getTime();
    if (aD < bD) {
      return -1;
    }
    if (aD > bD) {
      return 1;
    }
    return 0;
  });

  return taskList;
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
