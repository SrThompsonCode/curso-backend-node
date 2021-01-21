const fs = require("fs");

const out = fs.createWriteStream("./out.log");
const error = fs.createWriteStream("./error.log");

//Creamos una consola personalizada
const consoleFile = new console.Console(out, error);

setInterval(() => {
  consoleFile.log(new Date());
  consoleFile.error(new Error("opps!"));
}, 2000);
