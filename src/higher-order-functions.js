const arr = [1, 2, 3];
arr.map((x) => x ** 2);

setTimeout(() => {
  console.log("heja");
}, 1000);

Promise.resolve(125).then(console.log);
