const fs = require("fs");

//Leo un parametro pasado por terminal
const file = process.argv[2];
if (!file) throw new Error("You must give me a filename");

const content = fs.readFile(file, function (error, content) {
  if (error) return console.log(error);

  const lines = content.toString().split("\n").length;
  console.log(lines);
});
