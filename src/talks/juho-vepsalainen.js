const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../speakers/juho-vepsalainen");

module.exports = {
  speakers: [speaker],
  title: "Static Websites - The Final Frontier",
  description: "What was it like to build sites in the 90s? What did we learn? And how to do it now?",
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.REACT, keywords.STATIC_SITE_GENERATATION, keywords.WEBPACK],
};
