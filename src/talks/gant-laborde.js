const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../people/gant-laborde");

module.exports = {
  speakers: [speaker],
  title: "React Native Ignite",
  description:
    "Life can be simple again. Haven’t we built the same house, or given the same haircut over and over? 80% of mobile app development is the same old song. So why is mobile so difficult/expensive? It’s not with React Native.\n\nLet's look at how simple it is to get started in React Native using Ignite CLI. Using Ignite, you can jump in with a popular combination of technologies, OR brew your own. Ignite is the freedom to learn and automate your mobile app.",
  type: enums.PRESENTATION,
  keywords: speaker.keywords,
  urls: {
    web: "https://slides.com/gantlaborde/bowser",
  },
};
