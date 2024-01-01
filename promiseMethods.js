const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 200);
});

const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("two"), 100);
});

const pro3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("rejected"), 300);
});

const pro4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 400);
});

Promise.allSettled([pro1, pro2, pro3, pro4])
  .then((val) => console.log(val))
  .catch((err) => {
    console.log(err);
  });
