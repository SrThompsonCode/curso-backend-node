const http = require("http");
const fs = require("fs");
const server = http.createServer();
const port = 3000;

server.on("request", (request, response) => {
  fs.readFile("./big", (error, data) => {
    if (error) console.log(error);
    response.end(data);
  });
});
server.listen(port);
