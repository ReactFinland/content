module.exports = {
  speakers: [require("../speakers/david-khourshid")],
  title: "Reactive State Machines and Statecharts",
  description: `Managing the many user interface states of an application easily becomes complicated. We'll discover how some historical and important computer science concepts – state machines and statecharts – and a functional + reactive approach can make it much easier to understand, visualize, implement, and automatically create tests for complex user interfaces and flows.`,
  tickets: [
    {
      ...require("../tickets").morningWorkshop[0],
      link: "https://ti.to/react-finland/2018/with/meyhplcurh8",
    },
    {
      ...require("../tickets").morningWorkshop[1],
      link: "https://ti.to/react-finland/2018/with/e5849f-srk8",
    },
    {
      ...require("../tickets").eveningWorkshop[0],
      link: "https://ti.to/react-finland/2018/with/mdzr1bwzkr8",
    },
    {
      ...require("../tickets").eveningWorkshop[1],
      link: "https://ti.to/react-finland/2018/with/duwuhyzgmq8",
    },
  ],
};
