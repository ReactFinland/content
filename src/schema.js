const { makeExecutableSchema } = require("graphql-tools");
const content = require("./");

const typeDefs = `
  type Query {
    breakfasts: [[Session]],
    coffeeBreaks: [[Session]],
    lunches: [[Session]],
    organizers: [Person],
    panels: [[Session]],
    partners: [Partner],
    presentations: [Session],
    schedules: [Schedule],
    speakers: [Person],
    tickets: [[Ticket]],
    workshops: [Session]
  }

  type Session {
    title: String,
    description: String,
    speakers: [Person],
    tickets: [Ticket],
    keywords: [String]
  }

  type Partner {
    name: String!,
    homepage: String!,
    facebook: String,
    instagram: String,
    twitter: String
  }

  type Person {
    name: String!,
    about: String!,
    photo: String!,
    homepage: String,
    twitter: String,
    github: String,
    linkedin: String,
    keywords: [String]
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

  type Ticket {
    name: String!,
    amount: Int!,
    currency: String!,
    link: String
  }
`;

function generateQueries() {
  const ret = {};

  Object.keys(content).forEach(k => {
    ret[k] = () => Object.values(content[k]);
  });

  return ret;
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: generateQueries(),
  },
});
