const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = { ...originalObject };
console.log(shallowCopy);
shallowCopy.a = 3;
shallowCopy.b.c = 4; // C
console.log(originalObject);
