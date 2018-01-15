const keywords = require("../keywords");

module.exports = {
  name: "Patrick Hund",
  about:
    "Patrick helps React and Node.js conquer the tech stack at eBay in Berlin. He has been a professional software developer since 2000 and joined eBay in 2010. Notable projects are the relaunch of the homepage of eBay's car trading platform mobile.de in 2015 and the rewrite of eBay’s automotive online community MOTOR-TALK.de (ongoing, since 2017).",
  image: "patrick-hund.jpg", // TODO: Place image at root images/ and update name
  social: {
    homepage: "",
    twitter: "wiekatz",
    github: "pahund",
    facebook: "",
    medium: "@wiekatz",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [keywords.LEGACY, keywords.REACT, keywords.REDUX],
};
