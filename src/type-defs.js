module.exports = `
  type Query {
    breakfasts: [Session],
    coffeeBreaks: [Session],
    lunches: [Session],
    organizers: [Contact],
    panels: [Session],
    partners: [Contact],
    presentations: [Session],
    schedules: [Schedule],
    speakers: [Contact],
    tickets: [Ticket],
    workshops: [Session]
  }

  type Session {
    date: String,
    title: String,
    description: String,
    speakers: [Contact],
    tickets: [Ticket],
    keywords: [String]
  }

  type Contact {
    name: String!,
    about: String!,
    image: String!,
    social: Social,
    location: Location,
    keywords: [String]
  }

  type Social {
    homepage: String,
    twitter: String,
    github: String,
    facebook: String,
    medium: String,
    instagram: String,
    linkedin: String,
    youtube: String
  }

  type Location {
    country: Country,
    city: String
  }

  type Country {
    name: String,
    code: String
  }

  type Schedule {
    date: String,
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
