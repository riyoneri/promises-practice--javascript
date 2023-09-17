const prom1 = Promise.resolve("Yess");
const prom2 = Promise.reject("Noo");
const prom3 = new Promise((res, rej) => res("Lion"));

Promise.myAll = function (arr) {
  console.log(arr);
  return;
};

Promise.myAll(["lion"]);
