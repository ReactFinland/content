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
      sessions: [require("../presentations/jani-evakallio")],
    },
    {
      begin: "10:00",
      end: "11:00",
      sessions: [require("../presentations/patrick-stapfer")],
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
      sessions: [require("../presentations/david-khourshid")],
    },
    {
      begin: "14:00",
      end: "15:00",
      sessions: [require("../presentations/gant-laborde")],
    },
    {
      begin: "15:00",
      end: "15:45",
      sessions: [require("../presentations/shay-keinan")],
    },
    {
      begin: "15:45",
      end: "16:30",
      sessions: [require("../presentations/nik-graf")],
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
