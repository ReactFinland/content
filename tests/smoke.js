const assert = require("assert");

assert(
  require("../").workshops.andreyAndArtem.speakers[0].name,
  "Andrey Okonetchnikov"
);

assert(
  require("../").presentations.varyaStepanova.type,
  require("../").enums.LIGHTNING_TALK
);
