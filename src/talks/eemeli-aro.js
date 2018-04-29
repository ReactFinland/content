const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../people/eemeli-aro");

module.exports = {
  speakers: [speaker],
  title: "There's always a better way to handle localization",
  description:
    "From the very first prototype to a global site with content in multiple languages, the textual content of your app or project will be a series of compromises, some of which you won't even notice making. Localization is a ridiculously difficult problem in the general case, but in the specific you can get away with really simple solutions, especially if you understand the compromises you're making.",
  type: enums.LIGHTNING_TALK,
  keywords: speaker.keywords,
};
