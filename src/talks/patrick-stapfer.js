const enums = require("../enums");
const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/patrick-stapfer")],
  title: "ReasonML",
  description: "",
  type: enums.PRESENTATION,
  keywords: require("../speakers/patrick-stapfer").keywords,
};
