const talks = require("./talks");
const people = resolveSocialLinks(require("./people"));
const enums = require("./enums");

const speakers = people.filter(({ type }) => type.some(equals(enums.SPEAKER)));
const organizers = people.filter(({ type }) =>
  type.some(equals(enums.ORGANIZER))
);

const sponsors = resolveSocialLinks(require("./sponsors"));
const workshops = require("./workshops");

const keynotes = talks.filter(({ type }) => type === enums.KEYNOTE);
const lightningTalks = talks.filter(
  ({ type }) => type === enums.LIGHTNING_TALK
);
const presentations = talks.filter(({ type }) => type === enums.PRESENTATION);
const partners = sponsors.filter(({ type }) =>
  type.some(equals(enums.PARTNER))
);
const goldSponsors = sponsors.filter(({ type }) =>
  type.some(equals(enums.GOLD_SPONSOR))
);
const silverSponsors = sponsors.filter(({ type }) =>
  type.some(equals(enums.SILVER_SPONSOR))
);
const bronzeSponsors = sponsors.filter(({ type }) =>
  type.some(equals(enums.BRONZE_SPONSOR))
);

module.exports = {
  breakfasts: require("./breakfasts"),
  coffeeBreaks: require("./coffee-breaks"),
  locations: resolveSocialLinks(require("./locations")),
  keynotes,
  lightningTalks,
  lunches: require("./lunches"),
  organizers,
  panels: require("./panels"),
  pages: require("./pages"),
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  presentations,
  schedules: require("./schedules"),
  speakers: associate(speakers, [
    {
      field: "keynotes",
      sourceData: keynotes,
      condition: speakersContainSpeakerByName,
    },
    {
      field: "lightningTalks",
      sourceData: lightningTalks,
      condition: speakersContainSpeakerByName,
    },
    {
      field: "presentations",
      sourceData: presentations,
      condition: speakersContainSpeakerByName,
    },
    {
      field: "talks",
      sourceData: talks,
      condition: speakersContainSpeakerByName,
    },
    {
      field: "workshops",
      sourceData: workshops,
      condition: speakersContainSpeakerByName,
    },
  ]),
  talks,
  tickets: require("./tickets"),
  workshops,
};

function associate(data, rules) {
  return data.map(target => {
    const associations = {};

    rules.forEach(({ field, sourceData, condition }) => {
      sourceData.forEach(source => {
        if (condition({ source, target })) {
          if (!associations[field]) {
            associations[field] = [];
          }

          associations[field].push(source);
        }
      });
    });

    return Object.assign({}, target, associations);
  });
}

function equals(expected) {
  return value => value === expected;
}

function speakersContainSpeakerByName({
  source: { speakers },
  target: { name },
}) {
  return speakers.map(({ name }) => name).indexOf(name) >= 0;
}

function resolveSocialLinks(data) {
  function resolve(social, o) {
    const rules = {
      homepage: social.homepage,
      facebook: `https://facebook.com/${social.facebook}`,
      github: `https://github.com/${social.github}`,
      linkedin: `https://linkedin.com/${social.linkedin}`,
      medium: `https://medium.com/${social.medium}`,
      instagram: `https://instagram.com/${social.instagram}`,
      twitter: `https://twitter.com/${social.twitter}`,
      youtube: `https://www.youtube.com/${social.youtube}`,
      vk: `https://vk.com/${social.vk}`,
    };
    const ret = {};

    Object.keys(social).forEach(media => {
      ret[media] = rules[media];
    });

    return ret;
  }

  return data.map(o => ({
    ...o,
    social: resolve(o.social, o),
  }));
}
