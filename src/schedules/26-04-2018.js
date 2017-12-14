const day = "26-04-2018";

module.exports = {
  day,
  intervals: [
    {
      day,
      begin: "08:00",
      end: "09:00",
      sessions: [require("../breakfasts")[day]],
    },
    {
      day,
      begin: "09:00",
      end: "10:00",
      sessions: [require("../presentations/jani-evakallio")],
    },
    {
      day,
      begin: "10:00",
      end: "11:00",
      sessions: [require("../presentations/patrick-stapfer")],
    },
    {
      day,
      begin: "11:00",
      end: "11:30",
      sessions: [
        {
          title: "Four lightning talks",
        },
      ],
    },
    {
      day,
      begin: "11:30",
      end: "12:30",
      sessions: [require("../lunches")[day]],
    },
    {
      day,
      begin: "12:30",
      end: "13:00",
      sessions: [require("../panels")[day][0]],
    },
    {
      day,
      begin: "13:00",
      end: "14:00",
      sessions: [require("../presentations/david-khourshid")],
    },
    {
      day,
      begin: "14:00",
      end: "15:00",
      sessions: [require("../presentations/gant-laborde")],
    },
    {
      day,
      begin: "15:00",
      end: "15:45",
      sessions: [require("../presentations/shay-keinan")],
    },
    {
      day,
      begin: "15:45",
      end: "16:30",
      sessions: [require("../presentations/nik-graf")],
    },
    {
      day,
      begin: "16:30",
      end: "17:00",
      sessions: [require("../coffee-breaks")[day][1]],
    },
    {
      day,
      begin: "17:00",
      end: "17:30",
      sessions: [
        {
          title: "Four lightning talks",
        },
      ],
    },
    {
      day,
      begin: "17:30",
      end: "18:00",
      sessions: [require("../panels")[day][1]],
    },
  ],
};
