// Object is collection of property and methods

let person = {
    firstname: "praveen",               //key : value pair
    lastname: "kumar",
    age: 25,
    fullname: function(){
        return this.firstname + " " + this.lastname;    // this is used to access the current object properties

    }
}


console.log(person.firstname);        // to call an object property we can use dot notation
console.log(person["lastname"]);      // to call an object property we can use bracket notation but need to mention the key in double quotes

// To update the value 
person.firstname = "David";
console.log(person.firstname);

// To add new property to object

person.gender = "male";
console.log(person);

// To delete a property from object
delete person.age;
console.log(person);

//To check a property is present in object or not we can use "in" operator

console.log("gender" in person);  // true
console.log("age" in person);     // false

// To check and print alll values in the object we can use for in loop

for (let key in person) {
 //   console.log(key + ": " + person[key]);  // key is the property name and person[key] is the value of that property   
    console.log(person[key]);  // person[key] is the value of that property


}

// To call the method in the object we can use dot notation need () at the end of method name
console.log(person.fullname());
