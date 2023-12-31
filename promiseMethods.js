const promise1 = Promise.resolve("Hello world");
const promise2 = Promise.reject("Rejecting");
const promises = [promise1, promise2];
Promise.allSettled([promise1, promise2]).then((result) =>
  result.forEach((res) => console.log(res))
);
