//create some arrays
const numbers = [10,30,20,23,4];
const numbers2 = new Array(22,3,4,5,7,4);
const fruitMixedWithNumbers = ['apple','orange','swag', 222];
const mixed = [22, 'ciao', true, {a:1, b:2}, new Date()];

let val;

//length
val = numbers.length;

//check if is array
val = Array.isArray(numbers2);

//single value
val = numbers[2];

//insert
numbers[2] = 100;

//find index of value
val = numbers.indexOf(100);

//MUTATING ARRAY
//add to end
numbers.push(250);
//add to beginning
numbers.unshift(2000);

//take off from end
numbers.pop();
//take off from beginning
numbers.shift();

//splice values
numbers.splice(1,3); //includes the last index

//reverse
numbers.reverse();

//concatenate
val = numbers.concat(numbers2);

//sort
val = fruitMixedWithNumbers.sort(); //it sorts by the 1st number only

//use the "compare" funcition
val = numbers.sort(function(x,y){
    return x - y;
})

//find method
function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(val);
console.log(mixed);