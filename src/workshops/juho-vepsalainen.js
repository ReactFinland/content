module.exports = {
  speakers: [require("../speakers/juho-vepsalainen")],
  title: "Webpack - The Good Parts",
  description: `In this high-level overview you'll learn how to configure Webpack. Even if you know it already, there might be some surprises in store as you gain insight to the tool you otherwise might miss.

The topics covered include:

* Fundamental ideas of webpack
* Development techniques
* Build techniques
* Asset management
* Bundle/code splitting
* Build analysis
* Optimizing the build`,
  tickets: [
    {
      ...require("../tickets").morningWorkshop[0],
      link: "https://ti.to/react-finland/2018/with/ed-qbtu5iyy",
    },
    {
      ...require("../tickets").morningWorkshop[1],
      link: "https://ti.to/react-finland/2018/with/vwtcvheo28e",
    },
    {
      ...require("../tickets").eveningWorkshop[0],
      link: "https://ti.to/react-finland/2018/with/hfbos2nheb0",
    },
    {
      ...require("../tickets").eveningWorkshop[1],
      link: "https://ti.to/react-finland/2018/with/xaizfkm1nbe",
    },
  ],
};
