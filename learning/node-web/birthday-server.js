const http = require("http");
const server = http.createServer();
const moment = require("moment");
const port = 8002;

server.on("request", (request, response) => {
  if (request.method === "POST" && request.url == "/birthday") {
    let body = [];

    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        response.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString();

        let date = moment(body).format("dddd");

        response.end(date);
      });
  } else {
    response.statusCode = 404; //INACCESIBLE
    response.end();
  }
});

server.listen(port);
console.log(`Server running at http://localhost:${port}`);
