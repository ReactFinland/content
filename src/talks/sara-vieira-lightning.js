const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../speakers/sara-vieira");

module.exports = {
  speakers: [speaker],
  title: "Speed dating GraphQL!",
  description: `Ever wanted to create something with GraphQL but you think it's hard and takes too long? In this talk I will create a simple GraphQL service in Graphcool and Apollo for you too see how awesome it is!

Warning : live coding! Fuck ups may happen.`,
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.APOLLO, keywords.GRAPHQL],
};
