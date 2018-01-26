const assert = require("assert");
const graphql = require("graphql").graphql;
const { makeExecutableSchema } = require("graphql-tools");
const { schema, content } = require("../");

assert.equal(
  content.workshops.find(o => o.title === "Styleguide-driven Development")
    .speakers[0].name,
  "Andrey Okonetchnikov"
);

assert.equal(
  content.speakers.find(o => o.name === "Andrey Okonetchnikov").workshops[0]
    .title,
  content.workshops.find(o => o.title === "Styleguide-driven Development").title
);

assert.equal(
  content.speakers.find(o => o.name === "Christian Alfoni").presentations[0]
    .title,
  content.presentations.find(
    o => o.title === "Declarative state and side effects"
  ).title
);

assert.equal(
  content.speakers.find(o => o.name === "Christian Alfoni").presentations[0]
    .title,
  content.talks.find(o => o.title === "Declarative state and side effects")
    .title
);

assert.equal(
  content.speakers.find(o => o.name === "Jani Eväkallio").keynotes[0].title,
  content.keynotes.find(o => o.title === "The New Best Practices").title
);

assert.equal(
  content.speakers.find(o => o.name === "Jani Eväkallio").keynotes[0].title,
  content.talks.find(o => o.title === "The New Best Practices").title
);

assert.equal(
  content.speakers.find(o => o.name === "Varya Stepanova").lightningTalks[0]
    .title,
  content.lightningTalks.find(
    o =>
      o.title ===
      "How to use React, webpack and other buzzwords if there is no need"
  ).title
);

assert.equal(
  content.speakers.find(o => o.name === "Varya Stepanova").lightningTalks[0]
    .title,
  content.talks.find(
    o =>
      o.title ===
      "How to use React, webpack and other buzzwords if there is no need"
  ).title
);

assert(content.partners.find(o => o.name === "Agent Conf"));

assert.equal(
  content.organizers.find(o => o.name === "Toni Ristola").social.twitter,
  "toniristola"
);

assert.equal(
  content.talks.find(
    o =>
      o.title ===
      "How to use React, webpack and other buzzwords if there is no need"
  ).type,
  schema.enums.LIGHTNING_TALK
);

graphql(
  makeExecutableSchema({
    typeDefs: schema.typeDefs,
    resolvers: {
      Query: generateQueries(),
    },
  }),
  "{ speakers { name } }"
)
  .then(({ data }) => {
    assert.deepEqual(
      data.speakers.map(speaker => speaker.name),
      Object.values(content.speakers).map(speaker => speaker.name)
    );
  })
  .catch(e => {
    throw new Error(e);
  });

function generateQueries() {
  const ret = {};

  Object.keys(content).forEach(k => {
    ret[k] = () => Object.values(content[k]);
  });

  return ret;
}
