const util = require("util");

const helloPluto = util.deprecate(() => {
  console.log("hello pluto");
}, "pluto is deprecated.");

helloPluto();
