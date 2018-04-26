const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../organizers/toni-ristola");

module.exports = {
  speakers: [speaker],
  title: "React Finland App - Lessons learned",
  description: "The first app that we could publish to App Store and play store, and what we learned on the way.",
  type: enums.LIGHTNING_TALK,
  keywords: speaker.keywords,
};
