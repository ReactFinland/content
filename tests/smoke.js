const assert = require("assert");
const graphql = require("graphql").graphql;

assert.equal(
  require("../").workshops.andreyAndArtem.speakers[0].name,
  "Andrey Okonetchnikov"
);

assert.equal(require("../").partners.agentConf.name, "Agent Conf");

assert.equal(
  require("../").presentations.varyaStepanova.type,
  require("../src/enums").LIGHTNING_TALK
);

graphql(require("../src/schema"), "{ speakers { name } }")
  .then(({ data }) => {
    assert.deepEqual(
      data.speakers.map(speaker => speaker.name),
      Object.values(require("../").speakers).map(speaker => speaker.name)
    );
  })
  .catch(e => {
    throw new Error(e);
  });
