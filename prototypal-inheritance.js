let sajad = {
  walk: () => "hi",
};
let kader = {
  just: "thin",
};

sajad.__proto__ = kader;
console.log(Object.getPrototypeOf(sajad.walk()));
