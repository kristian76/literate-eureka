/**
 * Renders a list of tasks
 */
import React from "react";
import { connect } from "react-redux";

import Duration from "./duration";
import Assignees from "./assignees";
import Progress from "./progress";

import { editTask } from "./thunks";

const TaskList = props => {
  let tasks = sortTasks(props.tasks);

  return Object.keys(props.resources).map((key, i) => (
    <div className="columns col-gapless" key={i}>
      {filterTaskKeys(tasks, key).map(j => (
        <div
          key={j}
          className={`column col-${duration(
            tasks[j].duration.from,
            tasks[j].duration.to
          ) * 2}`}
          style={{
            backgroundColor: tasks[j].color,
            marginLeft: `calc(16.66666667% * ${duration(
              props.startDate,
              tasks[j].duration.from
            )})`,
            height: "120px",
            overflow: "hidden"
          }}
        >
          <button
            className="btn btn-link"
            onClick={e => props.editTask(tasks[j].key)}
          >
            {tasks[j].name}
          </button>
          <Duration dates={tasks[j].duration} />
          <Progress data={tasks[j].progress} />
          <Assignees data={listAssignees(tasks[j], props.resources)} />
        </div>
      ))}
    </div>
  ));
};
/**
 * Tasks are sorted by start date
 */
const sortTasks = tasks => {
  let taskList = [];
  // Normalize the structure for sorting
  Object.keys(tasks).forEach(key => {
    taskList.push(Object.assign({ key: key }, tasks[key]));
  });
  // Sort tasks based on duration from
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

const duration = (fd, ed) => {
  let oneDay = 1000 * 60 * 60 * 24;
  let t1 = new Date(Date.parse(fd)).getTime(),
    t2 = new Date(Date.parse(ed)).getTime();

  let mSecDiff = Math.abs(t1 - t2);
  return Math.round(mSecDiff / oneDay);
};

const filterTaskKeys = (data, res) =>
  Object.keys(data).filter(
    key => Object.keys(data[key].resources).includes(res) == true
  );

const listAssignees = (task, resources) => {
  return Object.keys(task.resources).map(key => {
    return {
      name: resources[key].name,
      role: task.resources[key].role
    };
  });
};

const mapState = state => ({
  tasks: state.tasks,
  resources: state.resources
});

export default connect(
  mapState,
  { editTask: key => editTask(key) }
)(TaskList);
