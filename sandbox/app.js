const firstName = 'alboa';
const lastName = 'riva';

let val;

val = lastName + " " +  firstName;

//template strings
const greet = 'Hello, my name is ' + firstName;

//escaping
val = 'That\'s awesome';

val = val.length;

//concat
val = firstName.concat(" ", lastName);
val = firstName.toUpperCase();

val = firstName[1];

//indexOf()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a')

//charAt()
val = firstName.charAt(2); //out: b

//last char
val = firstName.charAt(firstName.length -1);

//substring
val = firstName.substring(0, 4);

//slice (similar to substring)
val = firstName.slice(-2); //start from back

//split("delimiter")
val = greet.split(" ");

//replace
val = greet.replace("Hello", "hi");

//includes -> return boolean

//TEMPLATE LITERALS (TEMPLATE STRING) es6 stuff but compatible

const name = 'john';
const age = 40;
const job = 'web dev';
const city = 'new york'

let html;
//put content in html through js -> need to create http elements
//without template string -> es5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li></ul>'; //code looks messy
//i have to concatenate each line to make it clearer

document.body.innerHTML = html;

//now with template strings/literals es6 -> no need to concatenate, just use of `
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City : ${city}</li>
        <li>${2*2}</li>
        <li>${age > 30 ? 'soppra' : 'sototne'}</li>
    </ul>
`;

document.body.innerHTML = html;


//prints on console
//console.error(lastName);
//console.warn(firstName);
console.log(html);
