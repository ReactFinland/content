const { makeExecutableSchema } = require("graphql-tools");
const content2018 = require("./");

const typeDefs = `
  type Query {
    breakfasts: [[Session]],
    coffeeBreaks: [[Session]],
    lunches: [[Session]],
    panels: [[Session]],
    presentations: [Session],
    schedules: [Schedule],
    speakers: [Speaker],
    workshops: [Session]
  }

  type Session {
    title: String,
    description: String,
    speakers: [Speaker]
  }

  type Speaker {
    name: String!,
    about: String!,
    photo: String!,
    homepage: String,
    twitter: String,
    github: String,
    linkedin: String
  }

  type Schedule {
    day: String,
    intervals: [Interval]
  }

  type Interval {
    begin: String,
    end: String,
    sessions: [Session]
  }
`;

function generateQueries() {
  const ret = {};

  Object.keys(content2018).forEach(k => {
    // Skip enums and the schema itself
    if (k === "enums" || k === "schema") {
      return;
    }

    ret[k] = () => Object.values(content2018[k]);
  });

  return ret;
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: generateQueries(),
  },
});
