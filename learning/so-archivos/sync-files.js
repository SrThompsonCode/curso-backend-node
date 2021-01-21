const fs = require("fs");

try {
  //Leo un parametro pasado por terminal
  const file = process.argv[2];
  const content = fs.readFileSync(file).toString();

  const lines = content.split("\n").length;
  console.log(lines);
} catch (error) {
  console.log(error);
}
