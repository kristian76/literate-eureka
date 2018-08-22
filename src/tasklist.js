import React from "react";
import { connect } from "react-redux";
/**
 * TODO: Tasks to be sorted by resource
 */
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
            )})`
          }}
        >
          {tasks[j].name} duration{" "}
          {duration(tasks[j].duration.from, tasks[j].duration.to)} from{" "}
          {tasks[j].duration.from} to {tasks[j].duration.to}
        </div>
      ))}
    </div>
  ));
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

const duration = (fd, ed) => {
  let oneDay = 1000 * 60 * 60 * 24;
  let t1 = new Date(Date.parse(fd)).getTime(),
    t2 = new Date(Date.parse(ed)).getTime();

  console.log(fd, ed);
  let mSecDiff = Math.abs(t1 - t2);
  return Math.round(mSecDiff / oneDay);
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
