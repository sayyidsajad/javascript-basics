function myFunction(param1, param2, ...restParams) {
  console.log("param1:", param1);
  console.log("param2:", param2);
  console.log("restParams:", restParams);
}

const myArray = [1, 2, 3, 4, 5];
myFunction(...myArray);
