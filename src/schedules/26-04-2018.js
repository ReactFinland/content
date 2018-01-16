const day = "26-04-2018";

module.exports = {
  day,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [require("../breakfasts").find(o => o.day === day)],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [require("../talks/jani-evakallio")],
    },
    {
      begin: "10:00",
      end: "11:00",
      sessions: [require("../talks/patrick-stapfer")],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [
        {
          title: "Lightning talks",
        },
      ],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [require("../lunches").find(o => o.day === day)],
    },
    {
      begin: "12:30",
      end: "13:00",
      sessions: [require("../panels").filter(o => o.day === day)[0]],
    },
    {
      begin: "13:00",
      end: "14:00",
      sessions: [require("../talks/david-khourshid")],
    },
    {
      begin: "14:00",
      end: "15:00",
      sessions: [require("../talks/gant-laborde")],
    },
    {
      begin: "15:00",
      end: "15:45",
      sessions: [require("../talks/shay-keinan")],
    },
    {
      begin: "15:45",
      end: "16:30",
      sessions: [require("../talks/nik-graf")],
    },
    {
      begin: "16:30",
      end: "17:00",
      sessions: [require("../coffee-breaks").find(o => o.day === day)],
    },
    {
      begin: "17:00",
      end: "17:30",
      sessions: [
        {
          title: "Lightning talks",
        },
      ],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [require("../panels").filter(o => o.day === day)[1]],
    },
  ],
};
