function function01(){
}
function01();


function function02(a,b){

    return a+b;

//console.log(a+b);

}

let result01 = function02(10,20);
console.log(result01);


//Anonymous Functions 

let sum = function(a,b){
    return a+b;
}

// using fat pipe function

let sum2 = (a,b) => a+b;   // function name is assigned to varibale and we can call the function using variable name

console.log(sum2(10,20));










console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

function minusseven(num){

    return num - 7;
}

var b = minusseven(12);
console.log(b);


console.log(minusseven(10));




///////////////////////////////////////////////////////////////////////////////////////////////


function trueOrFalse(wasthattrue){

    if(wasthattrue){
        return "Yes it is True";

    }

    return "No it is not true";

}



console.log(trueOrFalse(false));


///////////////////////////////////////////////////////

function testEqual(val) {

    if (val == 12) {

        return "Equal";
    }
    return "Not Equal ";

}


function testElseIf(val2){

if(val2 > 10 && val2 < 20){

    return "Greater than 10 and less than 20 ";
}
else if(val2 < 10 && val2 > 5){

    return "Less than 10 and greater than 5";

}
else{
    return "Can't find"
}

}

console.log(testEqual(20));
//console.log(testElseIf(5));

testElseIf(5);


function caseInSwitch(val){

    var answer = "";

    switch(val){
        case 1:
        answer = "alpha";
        break;

        case 2:
        answer = "beta";
        break;

        case 3:
        answer = "gamma";
        break

        case 4:
        answer = "delta";
        break;

        default:
        answer = "not found";
        break;

    }

     

    return answer;



}

console.log(caseInSwitch(10));






  



 


 



