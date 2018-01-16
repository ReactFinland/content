const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../speakers/sven-sauleau");

module.exports = {
  speakers: [speaker],
  title: "To be announced",
  description: "To be announced",
  type: enums.LIGHTNING_TALK,
  keywords: speaker.keywords,
};
