const enums = require("../enums");
const keywords = require("../keywords");

// TODO: Update to point to the right speaker
const speaker = require("../speakers/_template");

module.exports = {
  speakers: [speaker],
  title: "", // TODO: Talk title goes here
  description: "", // TODO: Talk description goes here. ES6 template and markdown work
  type: enums.LIGHTNING_TALK, // TODO: Leave out for a normal length talk
  keywords: speaker.keywords,
};
