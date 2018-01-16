const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../speakers/patrick-hund");

module.exports = {
  speakers: [speaker],
  title: "Breaking Down Your Web App",
  description: `
Let’s face it – the question is not *if* your codebase will become a horrible, unmaintainable mess, it’s only a question of *when*…

What architecture patterns and strategies are there to break down your web application’s code into cleanly separated components? How can you compose your software of “Lego bricks” that you can simply replace with shiny new ones when they have become rotten?

Patrick will show you how to be proud of writing code that’s easy to throw away instead of being proud of writing code that haunts your colleagues and your future self forever!

He will show some hands-on examples from his current work on the relaunch of eBay’s automotive online community MOTOR-TALK.de. While these are based on JavaScript, React and Redux, the underlying patterns will be useful for users of other languages and frameworks.
  `,
  type: enums.LIGHTNING_TALK,
  keywords: speaker.keywords,
};
