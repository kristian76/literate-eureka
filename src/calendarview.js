import React from "react";
import { connect } from "react-redux";

import TaskList from "./tasklist"

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarView = props => {
  let dates = findStartAndEndDates(props.tasks),
    days = dateRange(dates[0], dates[dates.length - 1]),
    range = days.map(
      (date, i) =>
        isWeekend(date) ? (
          ""
        ) : (
          <div key={i} className="column col-1">
            {weekDays[days[i].getDay()]}
          </div>
        )
    );

  return (
    <div className="columns">
      <div className="column col-12">
        <div className="columns">{range}</div>
      </div>
      <div className="column col-12">
        <TaskList />
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

const sortedTasks = tasks => {
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
