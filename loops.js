
// while loops
var myArray = []

var i = 0;
while ( i < 5) {

    myArray.push(i);
    i++;

}

console.log(myArray);

// do while loop

var myDarray = [];
var i = 10;

do {
    myDarray.push(i);
    i++ ;
} while ( i < 5)
    console.log(i, myDarray)


// for loops 


var forArray = []

for( i = 0 ; i <= 5; i ++) {

    forArray.push(i);
}

console.log(forArray);


var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for ( var i = 0; i < myArr.length; i ++ ) {

    total += myArr[i];

}

console.log(total);


// nested forloops for nested arrays 

function multiplyAll(arr){

    var product = 1;

    for (var i =0; i < arr.length; i++ ){
        for ( var j = 0; j < arr[i].length; j++){
        product *= arr[i][j];

        }
    }

    return product
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);