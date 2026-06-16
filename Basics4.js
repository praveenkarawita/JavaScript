// Create new array and send even numbers from the below array and multiply by 3
 let scores = [12,13,14,15,16]

let evenscores = []
let multipliedValue3 = []
let sum = 0;
for(i = 0; i< scores.length; i++){

    if(scores[i]%2 == 0){

      //  evenscores.push(scores[i]*3)
        evenscores.push(scores[i])
        
       
    }
}

for(x = 0; x < evenscores.length; x++){

     multipliedValue3.push(evenscores[x]*3)
}
    for(j = 0; j < multipliedValue3.length; j++){

    sum = sum+multipliedValue3[j];
    }
// //my edit 
//  sum = sum + multipliedValue3[j];


console.log(evenscores);
 console.log(multipliedValue3);
console.log(sum);



let newFilterEvensScores = scores.filter(score=>score%2 == 0)
console.log(newFilterEvensScores);
//MAP

let mappedArray = newFilterEvensScores.map(score=>score*3)
console.log(mappedArray);

let totalVal = mappedArray.reduce((sum,val)=> sum+val,0)

console.log(totalVal)


let totalVal2 = scores.filter(scores => scores%2 == 0).map(score => score*3).reduce((sum,val) => sum+val,0)

console.log(totalVal2);


let fruits = ["apple","banana","grapes","orange"]

//fruits.sort()
console.log(fruits.sort());

console.log(fruits.reverse());

// To sort numbers in ascending order
let numbers = [12,34,56,78,90,1,2,3,4]

// The Old Way
numbers.sort(function(a,b){return a-b})
console.log(numbers);

// The New Way
numbers.sort((a,b) => a-b)
console.log(numbers);