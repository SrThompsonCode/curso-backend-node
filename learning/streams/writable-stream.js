const { Writable } = require("stream");

const writableStream = new Writable({
  write(chunk, encodign, callback) {
    console.log(chunk.toString());
    callback();
  },
});

process.stdin.pipe(writableStream);
