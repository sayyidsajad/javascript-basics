function curry(x) {
  return function (y) {
    return function (z) {
      return function (a) {
        return a + x + y + z;
      };
    };
  };
}
console.log(curry(1)(2)(3)(4));
