let day = 'Tuesday ';
console.log(day.length);

let subday = day.slice(0,4);
console.log(subday);

console.log(day[1]);

let splitday = day.split("s");  // split is used to split the string into array based on the parameter passed in the split function
console.log(splitday[1].length);
console.log(splitday[1].trim().length); //  trim is used to remove the white spaces from the string

//////////////////////////////////////////////////////////////////////////////////////


let date = '23';
let nextdate = '45';

console.log(date+nextdate); // this will concatenate the two strings

console.log(parseInt(date)+parseInt(nextdate)); // this will convert the strings to numbers and then add them

console.log(Number(date)+Number(nextdate)); // this will also convert the strings to numbers and then add them

let sum = parseInt(date)+parseInt(nextdate);
console.log(sum);

let back = sum.toString(); // this will convert the number back to string
console.log(back);

let newquote = day + "is funday";
console.log(newquote);

let val = newquote.indexOf("day"); // this will return the index of the first occurrence of the substring "day"
console.log(val);

let val2 = newquote.lastIndexOf("day"); // this will return the index of the last occurrence of the substring "day"
console.log(val2);

let val3 = newquote.indexOf("day",5); // this will return the index of day start from 5th index
console.log(val3);


// To get the number of ocurrences of a substring in a string
let count = 0;
let value = newquote.indexOf("day");

while(value != -1){            // this will loop until there are no more occurrences of "day" in the string 

    count++;
    value = newquote.indexOf("day",value+1); // this will return the index of day start from the next index of the previous occurrence
}

console.log(count);