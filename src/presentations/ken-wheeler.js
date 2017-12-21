const enums = require("../enums");
const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/ken-wheeler")],
  title: "",
  description: "",
  type: enums.KEYNOTE,
  keywords: require("../speakers/ken-wheeler").keywords,
};
