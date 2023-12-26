const animal = {
  sound: "Some sound",
  look:'hi',
  makeSound: function () {
    console.log(this.sound);
  },
};

const cat = Object.create(animal);
cat.sound = "Meow";
cat.makeSound();
