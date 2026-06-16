// Inheritance 

//Inheritance is the main pillar of Object oriented programming. It is the mechanism of creating new class from existing class. The new class is called child class or subclass
//One class can Inherits/acquire the potperties, methods of another class 
//The class which inherits the properties and methods is called child class or subclass
//The class which is inherited is called parent class or superclass
// Inheritance is used to achieve code reusability and to achieve method overriding

const Person = require("./Basics7.js");  // to import the class from Basics6.js file

class Student extends Person {   // to create a child class we need to use extends keyword and the name of the parent class


    constructor(firstName, lastName) {  // to create a constructor in child class we need to use constructor keyword and it is used to initialize the properties of the child class


        //Call parent class constructor to initialize the properties of parent class in child class
        super(firstName, lastName);  // to call the constructor of the parent class we need to use super keyword and () is used to call the constructor of the parent class and we need to pass the parameters of the parent class constructor in the super() because it is used to initialize the properties of the parent class

}


}

let Student1 = new Student("Dana", "White");  // to create an object of the child class we need to use new keyword and () is used to call the constructor of the child class

// This data will send to the parent class constructor to initialize the properties of the parent class in child class

Student1.fullName();  // to call the method of parent class in child class we can use dot notation need () at the end of method name because it is a function

console.log(Student1.fullName());   // to call the method of parent class in child class we can use dot notation need () at the end
//  of method name because it is a function  

console.log(Student1.location);  // to access the property of parent class in child class we can use dot notation