let obj = { prop: function () { }, name: 'adam' }; 
  

  
// Sealing the object using object.seal() method 
let o = Object.seal(obj); 
  
// Updating the properties of the object  
delete obj.prop; 
  
// Displaying the updated properties of the object  
console.log(obj); 
  
// Updating the properties of the sealed object  
obj.name = 'chris'; 
  
// Displaying the properties of the  frozen object  
console.log(obj);