import React from "react";

const Assignees = props => (
  <div>
    <small>{flattenList(props.data)}</small>
  </div>
);

const flattenList = data =>
  data.map(obj => `${obj.role}: ${obj.name}`).join(", ");

export default Assignees;
