import React from "react";

const Progress = props => (
  <meter class="meter" value={props.data} max="100" low="0" />
);

export default Progress;
