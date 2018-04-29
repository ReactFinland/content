const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../people/eemeli-aro");

module.exports = {
  speakers: [speaker],
  title: "Why I YAML",
  description:
    'I\'m writing my own YAML library, because none of the existing ones allowed me to manage comments within YAML files. Apparently this is not a thing one should do, as "The YAML spec is larger than the XML and XML Namespaces specs combined" and "No one in their right mind would want to write a parser for it."\n\nBut, well, here we are. Let me explain where "here" is, the route I took, and why any of this matters.',
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.TOOLING],
};
