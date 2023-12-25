const promise = new Promise(function (resolve, reject) {
  const x = "Geeks";
  const y = "Geeks";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("sucees");
  })
  .catch(function () {
    console.log("False");
  });
