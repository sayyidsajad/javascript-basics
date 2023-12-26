let a = {
  firstName: "Sayyid Sajad",
  lastName: "Ottakath",
};
function print(hometown, district) {
  return this.firstName + " " + this.lastName + " " + hometown + " " + district;
}
let b = {
  firstName: "Kader",
  lastName: "Bhai",
};

console.log(anotherFunc());
console.log(print.call(a, "mahesh", "prathikaram"));
console.log(print.apply(b, ["heeloo", "nice"]));
let anotherFunc = print.bind(b, "hi", "hello");
