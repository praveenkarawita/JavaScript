let marks = Array(6)

let marks2 = new Array(12,43,45,38,39,33)

let marks3 = [90,98,34,56,89,45]
console.log(marks3);

console.log(marks3[0]); //take an item 

marks3[1] = 55;   //change value

console.log(marks3.length);

marks3.push(88) // push new value 

marks3.pop() //Remove the last value

marks3.unshift(88)  // add in the start 

console.log(marks3);


console.log(marks3.indexOf(88)) //to get the index of given value 


console.log(marks3.includes(100));


SubArray = marks3.slice(3,5)     //indexes given to slice the array

console.log(SubArray);

console.log(marks3);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")

var sum = 0;
for(i=0;i<marks3.length;i++){

    //console.log([i]);
 sum = sum + marks3[i]
}
console.log(sum);



//reduce filter map

let total = marks3.reduce((sum,mark)=>{ sum+mark},0);

console.log(total);

//""""""""""""""""""""""""""""""""""""""""""""""""""
// Create new array and send even numbers from the below array
 let scores = [12,13,14,15,16]

let evenscores = []
for(i = 0; 1< scores.length; i++){

    if(scores[i]%2 == 0){
        evenscores.push(scores[i])
    }

}
console.log(evenscores);



let newFilterEvensScores = scores.filter(score=>score%2 == 0)
console.log(newFilterEvensScores);