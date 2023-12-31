function Person(name,age) {
  this.name, this.age;

  this.greet = function () {
    console.log("hello");
  };
}

// create objects
const person1 = new Person('hi','sajad');
const person2 = new Person();

console.log(person1.name);
person2.greet();
