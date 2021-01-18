const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error(" I AM AN ERROR"));
      }
    }, 500);
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}

asyncAwait();
