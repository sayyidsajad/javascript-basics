// const promise = new Promise(function (resolve, reject) {
//   const x = "Geeks";
//   const y = "Geeks";
//   if (x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then(function () {
//     console.log("sucees");
//   })
//   .catch(function () {
//     console.log("False");
//   });


function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]);
  }, 1000);
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser('john', console.log);