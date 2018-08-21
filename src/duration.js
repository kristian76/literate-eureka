import React from "react";

const Duration = props => (
  <div>
    <div>
      <span>
        Duration: {daysBetween(props.dates.from, props.dates.to)} days
      </span>
    </div>
    <meter className="meter" value={props.progress} min="0" max="100" />
  </div>
);

const daysBetween = (fd, ed) => {
  let oneDay = 1000 * 60 * 60 * 24;
  let t1 = new Date(Date.parse(fd)).getTime(),
    t2 = new Date(Date.parse(ed)).getTime();

  let mSecDiff = Math.abs(t1 - t2);
  return Math.round(mSecDiff / oneDay);
};

export default Duration;
