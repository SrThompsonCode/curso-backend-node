const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello world");
    } else {
      reject(new Error(" I AM AN ERROR"));
    }
  }, 2000);
});

promise
  .then((msg) => msg.toUpperCase())
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));
