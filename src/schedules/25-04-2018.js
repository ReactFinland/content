const day = "25-04-2018";

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
      sessions: [require("../presentations/ken-wheeler")],
    },
    {
      day,
      begin: "10:00",
      end: "11:00",
      sessions: [require("../presentations/kasia-jastrzebska")],
    },
    {
      day,
      begin: "11:00",
      end: "11:30",
      sessions: [require("../lightning-talks")[day][0]],
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
      sessions: [require("../presentations/christian-alfoni")],
    },
    {
      day,
      begin: "14:00",
      end: "15:00",
      sessions: [require("../presentations/sia-karamalegos")],
    },
    {
      day,
      begin: "15:00",
      end: "15:45",
      sessions: [require("../presentations/sara-vieira")],
    },
    {
      day,
      begin: "15:45",
      end: "16:30",
      sessions: [require("../presentations/rotem-mizrachi-meidan")],
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
      sessions: [require("../lightning-talks")[day][1]],
    },
    {
      day,
      begin: "17:30",
      end: "18:00",
      sessions: [require("../panels")[day][1]],
    },
  ],
};
