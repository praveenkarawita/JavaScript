// This file is to call the class created in Basics7.js file and to understand how to create class and how to use it in other file

const Person = require("./Basics7.js");  // to import the class from Basics6.js file

let person1 = new Person("David", "Smith");  // to create an object of the class we need to use new keyword and () is used to call the constructor of the class

console.log(person1);