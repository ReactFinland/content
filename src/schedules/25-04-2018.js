const day = "25-04-2018";

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
      end: "09:45",
      sessions: [require("../talks/ken-wheeler")],
    },
    {
      begin: "10:00",
      end: "10:45",
      sessions: [require("../talks/christian-alfoni")],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [
        {
          title: "Lightning talks",
        },
        require("../talks/michel-weststrate"),
        require("../talks/patrick-hund"),
        require("../talks/varya-stepanova"),
      ],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [require("../lunches").find(o => o.day === day)],
    },
    {
      begin: "12:30",
      end: "13:15",
      sessions: [require("../talks/kasia-jastrzebska")],
    },
    {
      begin: "13:30",
      end: "14:15",
      sessions: [require("../talks/sia-karamalegos")],
    },
    {
      begin: "14:15",
      end: "14:45",
      sessions: [require("../coffee-breaks").find(o => o.day === day)],
    },
    {
      begin: "14:45",
      end: "15:30",
      sessions: [require("../talks/sara-vieira")],
    },
    {
      begin: "15:45",
      end: "16:30",
      sessions: [require("../talks/rotem-mizrachi-meidan")],
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
        require("../talks/sven-sauleau"),
      ],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [require("../panels").filter(o => o.day === day)[0]],
    },
  ],
};
