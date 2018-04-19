const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../speakers/sara-vieira");

module.exports = {
  speakers: [speaker],
  title: "GraphQL and Apollo Awesomeness",
  description: "Live coding with GraphQL and Apollo!",
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.APOLLO, keywords.GRAPHQL],
};
