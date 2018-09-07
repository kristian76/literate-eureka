import React from "react";
import { connect } from "react-redux";

import AvatarTile from "./avatartile";

const ResouceList = props => {
  return (
    <div className="columns">
      <div className="column col-12" style={{ height: 45 }} />
      <div className="column col-12">
        {Object.keys(props.resources).map((key, index) => (
          <div
            key={index}
            style={{ height: `calc(120px * ${countTasks(props.tasks, key)}` }}
          >
            <AvatarTile
              name={props.resources[key].name}
              id={key}
              taskCount={countTasks(props.tasks, key)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
// Not in use
const calculateAllocationPercentage = (tasks, res) => {
  let aP = 0;
  for (let key in tasks) {
    if (Object.keys(tasks[key].resources).includes(res)) {
      aP = aP + tasks[key].resources[res].allocation;
    }
  }
  return aP;
};

const countTasks = (tasks, res) =>
  Object.keys(tasks).filter(
    key => Object.keys(tasks[key].resources).includes(res) == true
  ).length;

const mapState = state => ({
  resources: state.resources,
  tasks: state.tasks
});

export default connect(
  mapState,
  null
)(ResouceList);
