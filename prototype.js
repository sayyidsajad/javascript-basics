const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name"));
console.log(Object.hasOwn(irma, "greet"));
