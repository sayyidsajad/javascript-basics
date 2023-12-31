function getThis() {
  return this.getThis;
}
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
obj1.getThis = getThis
obj2.getThis = getThis
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(global.getThis); 
