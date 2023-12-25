const m = new WeakMap();

obj1 = { name: "sajad" };
m.set(obj1, "Object 1");
m.set(obj1, "Object 3");
obj2 = {};
m.set(obj2, "Object 2");
console.log(m);
console.log(m.get(obj1));
console.log(m.has(obj2));
