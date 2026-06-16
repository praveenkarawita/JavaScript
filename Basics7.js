// Classes ( we can use objects to create multiple objects with same properties and methods but with different values but it is not a good way to create multiple objects with same properties and methods because it will take more memory and time to create multiple objects with same properties and methods so we can use classes to create multiple objects with same properties and methods but with different values)

module.exports =class Person   // Module.export is used to make this class available to other files to import and use it

{
    age = 25;   // property

    get location(){       // getter method to get the value of location property not actual property but we can use it like a property


        return "India";
        // Same like location = "India"; but we can use this to return dynamic value based on some condition

    }

// Constructor is a method which executes by default when you create the object of the class and it is used to initialize the properties of the class

constructor(firstName, lastName) {  //able to create 1 constructor in a class and it is used to initialize the properties of the class
    this.firstName = firstName;   // this is used to access the current class properties (instane variable)
    this.lastName = lastName;     // this is used to access the current class properties    (instane variable)

}

// Method is a function which is defined inside the class and it is used to perform some action

fullName() {

    return this.firstName + " " + this.lastName;    // this is used to access the current class properties

}

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// We need to remove these codes if we are going to create object in another file because we can create object of class in another file and we can use it in that file but if we create object of class in the same
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//To Access the property of class we need to create an object of that class

// let person = new Person("John", "Doe");  // object creation () is used to call the constructor of the class

// console.log(person.age);  // to access the property of class we can use dot notation

// console.log(person.location);  // to access the getter method we can use dot notation but need to mention the name of the getter method without () because it is not a function it is a property    

// console.log(person.fullName());  // to access the method of class we can use dot notation need () at the end of method name

// //