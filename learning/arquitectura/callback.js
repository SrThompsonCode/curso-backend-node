const asyncCallback = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "hello world");
    } else {
      cb(new Error(" error"));
    }
  }, 2000);
};

asyncCallback((error, msg) => {
  if (error) {
    console.log("error:", error);
  } else {
    console.log("message", msg);
  }
});
