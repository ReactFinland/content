const enums = require("../enums");
const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/nik-graf")],
  title: "Get started with Reason",
  description: "We will kick off with the basics and then quickly go into how to leverage features like variant types and pattern matching to make impossible states impossible. After you gained some knowledge about the basics the course will dig even further into ReasonReact.",
  type: enums.PRESENTATION,
  keywords: [keywords.REASON, keywords.REACT],
};
