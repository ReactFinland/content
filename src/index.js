const talks = require("./talks");
const sponsors = require("./sponsors");
const workshops = require("./workshops");
const enums = require("./enums");

const lightningTalks = talks.filter(
    ({ type }) => type === enums.LIGHTNING_TALK
);

module.exports = {
    schema: {
        enums: require("./enums"),
        keywords: require("./keywords"),
        typeDefs: require("./type-defs"),
    },
    content: {
        breakfasts: require("./breakfasts"),
        coffeeBreaks: require("./coffee-breaks"),
        keynotes: talks.filter(({ type }) => type === enums.KEYNOTE),
        lightningTalks,
        lunches: require("./lunches"),
        organizers: require("./organizers"),
        panels: require("./panels"),
        sponsors,
        partners: sponsors.filter(({ type }) => type === enums.PARTNER),
        goldSponsors: sponsors.filter(
            ({ type }) => type === enums.GOLD_SPONSOR
        ),
        silverSponsors: sponsors.filter(
            ({ type }) => type === enums.SILVER_SPONSOR
        ),
        bronzeSponsors: sponsors.filter(
            ({ type }) => type === enums.BRONZE_SPONSOR
        ),
        presentations: talks.filter(({ type }) => type === enums.PRESENTATION),
        schedules: require("./schedules"),
        speakers: associate(require("./speakers"), [
            {
                field: "lightningTalks",
                sourceData: lightningTalks,
                condition: ({ source: { speakers }, target: { name } }) =>
                    speakers.map(({ name }) => name).indexOf(name) >= 0,
            },
            {
                field: "workshops",
                sourceData: workshops,
                condition: ({ source: { speakers }, target: { name } }) =>
                    speakers.map(({ name }) => name).indexOf(name) >= 0,
            },
        ]),
        talks,
        tickets: require("./tickets"),
        workshops,
    },
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
