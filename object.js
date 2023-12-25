let user = {
  name: "John",
  age: 30,
};

let clone = structuredClone(user);

console.log((clone.name = "hello")); // John
console.log(user.name);
console.log(clone.age); // 30
