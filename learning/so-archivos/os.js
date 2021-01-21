const os = require("os");

// console.log("CPU infor," + os.cpus());
// console.log(
//   "IP: ",
//   os.networkInterfaces().eth0.map((x) => x.address)
// );
// console.log("Free memory: ", os.freemem());
// console.log("SO Type: ", os.type());
// console.log("SO Version: ", os.release());
console.log("Usr Info: ", os.userInfo());
console.log(os.hostname());
