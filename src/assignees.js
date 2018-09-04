import React from "react";

const Assignees = props => (
  <div className="hide-xs">
    <small>{flattenList(props.data)}</small>
  </div>
);

const flattenList = data =>
  data.map(obj => `${obj.name}: ${obj.allocation}%`).join(", ");

export default Assignees;
