const fs = require("fs");

const files = fs.readdir(__dirname, function (error, files) {
  if (error) console.log(error);

  console.log(files);
});
