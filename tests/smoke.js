const assert = require("assert");
const graphql = require("graphql").graphql;

assert(
  require("../").workshops.andreyAndArtem.speakers[0].name,
  "Andrey Okonetchnikov"
);

assert(
  require("../").presentations.varyaStepanova.type,
  require("../src/enums").LIGHTNING_TALK
);

graphql(require("../src/schema"), "{ speakers { name } }")
  .then(({ data }) => {
    assert(
      data.speakers,
      Object.values(require("../").speakers).map(speaker => speaker.name)
    );
  })
  .catch(e => {
    throw new Error(e);
  });
