const talks = require("./talks");
const enums = require("./enums");

module.exports = {
  schema: {
    enums: require("./enums"),
    keywords: require("./keywords"),
    typeDefs: require("./type-defs"),
  },
  content: {
    breakfasts: require("./breakfasts"),
    coffeeBreaks: require("./coffee-breaks"),
    keynotes: talks.filter(({ type }) => type === enums.KEYNOTE),
    lightningTalks: talks.filter(({ type }) => type === enums.LIGHTNING_TALK),
    lunches: require("./lunches"),
    organizers: require("./organizers"),
    panels: require("./panels"),
    partners: require("./partners"),
    presentations: talks.filter(({ type }) => type === enums.PRESENTATION),
    schedules: require("./schedules"),
    speakers: require("./speakers"),
    talks,
    tickets: require("./tickets"),
    workshops: require("./workshops"),
  },
};
