import React from "react";
import { connect } from "react-redux";

import TaskList from "./tasklist";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// TODO: Add color to weekends
const CalendarView = props => {
  let dates = findStartAndEndDates(props.tasks),
    days = dateRange(dates[0], dates[dates.length - 1]),
    range = days.map((date, i) => (
      <div key={i} className="column col-2">
        {weekDays[days[i].getDay()]}
        <br />
        {`${days[i].getDate()}/${days[i].getMonth()}`}
      </div>
    ));

  return (
    <div className="columns col-gapless">
      <div className="column col-12">
        <div className="columns col-gapless">{range}</div>
      </div>
      <div className="column col-12">
        <TaskList startDate={dates[0]} />
      </div>
    </div>
  );
};

Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const dateRange = (startDate, endDate) => {
  let dates = [];
  /** FIXME: This should be delt with by React lifecycle, checking for undefined
   * is a no no
   */
  if (typeof startDate !== "undefined") {
    let currentDate = startDate;
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate = currentDate.addDays(1);
    }
  }

  return dates;
};

const isWeekend = date => [0, 6].includes(date.getDay());

const findStartAndEndDates = tasks => {
  let dates = [];

  Object.keys(tasks).forEach(key => {
    dates.push(new Date(Date.parse(tasks[key].duration.from)));
    dates.push(new Date(Date.parse(tasks[key].duration.to)));
  });
  return dates.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
};

const mapState = state => ({
  tasks: state.tasks
});

export default connect(
  mapState,
  null
)(CalendarView);
