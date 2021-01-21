// %s STRING
// %d
// %j json
// console.log("Un %s y un %s", "perrito", "gatito");
// console.warn("error");

// console.assert(42 == "42");
// //Para hacer pruebas y verificaciones
// console.assert(42 === "42");

//Nos indica donde esta ocurriendo el evento
// console.trace("hello");

const util = require("util");
const debugLog = util.debuglog("foo");

debugLog("FOOOO");
