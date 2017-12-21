const enums = require("../enums");
const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/jani-evakallio")],
  title: "",
  description: "",
  type: enums.KEYNOTE,
  keywords: require("../speakers/jani-evakallio").keywords,
};
