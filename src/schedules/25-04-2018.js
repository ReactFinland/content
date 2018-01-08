const day = "25-04-2018";

module.exports = {
  day,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [require("../breakfasts")[day][0]],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [require("../presentations/ken-wheeler")],
    },
    {
      begin: "10:00",
      end: "11:00",
      sessions: [require("../presentations/kasia-jastrzebska")],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [
        {
          title: "Lightning talks",
        },
        require("../presentations/michel-weststrate"),
        require("../presentations/varya-stepanova"),
      ],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [require("../lunches")[day][0]],
    },
    {
      begin: "12:30",
      end: "13:00",
      sessions: [require("../panels")[day][0]],
    },
    {
      begin: "13:00",
      end: "14:00",
      sessions: [require("../presentations/christian-alfoni")],
    },
    {
      begin: "14:00",
      end: "15:00",
      sessions: [require("../presentations/sia-karamalegos")],
    },
    {
      begin: "15:00",
      end: "15:45",
      sessions: [require("../presentations/sara-vieira")],
    },
    {
      begin: "15:45",
      end: "16:30",
      sessions: [require("../presentations/rotem-mizrachi-meidan")],
    },
    {
      begin: "16:30",
      end: "17:00",
      sessions: [require("../coffee-breaks")[day][0]],
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
      sessions: [require("../panels")[day][1]],
    },
  ],
};
