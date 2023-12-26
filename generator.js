function* generator(arr) {
  yield (arr + 1);
}
let gen = generator([1, 2, 3, 4, 5]);
console.log([...gen]);
