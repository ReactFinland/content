// enums and schema aren't a part of the public api (cyclic dep)
module.exports = {
  breakfasts: require("./breakfasts"),
  coffeeBreaks: require("./coffee-breaks"),
  lunches: require("./lunches"),
  panels: require("./panels"),
  presentations: require("./presentations"),
  schedules: require("./schedules"),
  speakers: require("./speakers"),
  tickets: require("./tickets"),
  workshops: require("./workshops"),
};
