const assert = require("assert");
const graphql = require("graphql").graphql;
const { makeExecutableSchema } = require("graphql-tools");
const { schema, content } = require("../");

assert.equal(
  content.workshops.andreyAndArtem.speakers[0].name,
  "Andrey Okonetchnikov"
);

assert.equal(content.partners.agentConf.name, "Agent Conf");

assert.equal(content.organizers.toniRistola.social.twitter, "toniristola");

assert.equal(
  content.presentations.varyaStepanova.type,
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
