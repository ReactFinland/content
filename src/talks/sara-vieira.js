const enums = require("../enums");
const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/sara-vieira")],
  title: "React Testing",
  description: "Build apps is hard, super hard but not testing them makes them even harder as time goes by. Ever changed a component and then broke something on the other side of the app? Testing is important! Let's see how we can achieve inner peace in our apps by testing, we will go over Enzyme, Snapshot testing, UI testing and introduce many ways to make tests easier and more enjoyable.",
  type: enums.PRESENTATION,
  keywords: require("../speakers/sara-vieira").keywords,
};
