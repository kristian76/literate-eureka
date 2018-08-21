import React from "react";
import { connect } from "react-redux";

import AvatarTile from "./avatartile";

const ResouceList = props => {
  return (
    <div className="columns">
      <div className="column col-12">res</div>
      <div className="column col-12">
        {Object.keys(props.resources).map((key, index) => (
          <div
            key={index}
            style={{ height: countTasks(props.tasks, key).length * 64 }}
          >
            <AvatarTile
              data={props.resources[key]}
              taskKeys={countTasks(props.tasks, key)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const countTasks = (tasks, res) =>
  Object.keys(tasks).filter(
    key => Object.keys(tasks[key].resources).includes(res) == true
  );

const mapState = state => ({
  resources: state.resources,
  tasks: state.tasks
});

export default connect(
  mapState,
  null
)(ResouceList);
