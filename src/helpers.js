String.prototype.t = function(locale = "en-US") {
  let str = this.valueOf(),
    trans = {
      "en-US": {
        add_resource: "Add Resouce",
        add_task: "Add Task",
        duration: "Duration",
        tasks: "tasks"
      }
    };
  return trans[locale][str] || str;
};

module.export = String;
