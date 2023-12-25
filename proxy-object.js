const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
};
const handler = {
  set(target, property, value) {
    if (property === "age") {
      if (typeof value !== "number") {
        throw new Error("Age must be a number");
      }
      if (value < 18) {
        throw new Error("The user must be 18 or older.");
      }
      target[property] = value;
    }
  },
};
const proxyUser = new Proxy(user, handler);
proxyUser.age = 9;
console.log(proxyUser.firstName);
