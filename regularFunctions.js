function greet() {
    return () => {
      console.log(this); // 'this' is inherited from the surrounding function (lexical scope)
    };
  }
  
  const obj = {
    sayHello: greet()
  };
  
  obj.sayHello(); // 'this' inside the arrow function is obj
  