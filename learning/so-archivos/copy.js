const fs = require("fs");
fs.copyFile("naranja.txt", "limon.txt", (error) => {
  if (error) return console.log(error);

  console.log("COPIADO");
});
