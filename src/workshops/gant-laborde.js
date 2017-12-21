const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/gant-laborde")],
  title: "React Native",
  description: `In this beginner workshop you will learn what React Native (RN) consists of, how to write basic applications, how to use Storybook with RN, how to test RN, and finally how to kickstart your own project.`,
  tickets: [
    {
      ...require("../tickets").morningWorkshop[0],
      link: "https://ti.to/react-finland/2018/with/mgxvr-pqelw",
    },
    {
      ...require("../tickets").morningWorkshop[1],
      link: "https://ti.to/react-finland/2018/with/mkvpkhbfxfo",
    },
    {
      ...require("../tickets").eveningWorkshop[0],
      link: "https://ti.to/react-finland/2018/with/i0jwfrjd6so",
    },
    {
      ...require("../tickets").eveningWorkshop[1],
      link: "https://ti.to/react-finland/2018/with/w-nkcuf9k-a",
    },
  ],
  keywords: require("../speakers/gant-laborde").keywords,
};
