// Object

var ourDog = {
    "name": "camper", 
    "Legs":3, 
    "tails": 2, 
     "friends": [],
    "fav food": "Chicken",
    "fav place" : "home"



}

// access  the values in object

var nameValue = ourDog.name;
var legValue = ourDog.Legs;

//Access property 2
// if we have spaces we using this [] notations 
var favFoodValue = ourDog["fav food"];
var FavPlaceValue = ourDog['fav place'];  


//change values
ourDog.name = "happy Camper";


// add new property

ourDog.bark = "bawBaw";

ourDog['favDrink'] = "water";


//delete property

delete ourDog.Legs;



// Nested objects


 var myPlant = [
    {

        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "Fine",
            "birch"
        ]
    }

 ];

 var secondTree = myPlant[1].list[2];

console.log(secondTree);