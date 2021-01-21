const fs = require("fs");

fs.mkdir("platzi/escuela-fs/node", { recursive: true }, (error) => {
  if (error) return console.log(error);
});
