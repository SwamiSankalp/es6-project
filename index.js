import { addition, subtraction, multiply, divison } from "./functions.js"

let num1 = 20;
let num2 = 10

addition(num1, num2);
subtraction(num1, num2);
multiply(num1, num2);
divison(num1,num2);

/*
01. REPOSITORY
=>	JAHA PE PROJECT KE SAARE FILES, PACKAGES KO STORE KIYA JAATA HAI.

02. BRANCHES
=>  BRANCHES AKSAR TEAM MEIN KAAM PE AATA HAI. JAHA EK DEVELOPMENT TEAM EK HI REPOSITORY MEIN CHANGES KARTE HAI.

03. TRACKED FILES
=> TRACKED FILES WOH HOTE HAI JO COMMITED HOTE HAI ON REPOSITORY.

04. UNTRACKED FILES
=>  UNTRACKED FILES WOH HAI JO LOCALY STORED HOTE HAI AUR PREVIOUSLY JISE COMMIT NA KIYA HO.

05. STAGED FILES
=>  STAGED FILES WOH HOTE HAI JINHE HUM STAGE KARTE HAI i.e(git add ..) LEKIN ORIGIN PUSH NA KIYA GAYA HO

06. LOCAL REPOSITORY
=>  LOCAL REPOSITORY WOH REPOSITORY HAI JO LOCAL MACHINE PE STORED HOTA HAI.

07. REMOTE REPOSITORY
=>  REMOTE REPOSITORY WOH REPOSITORY HAI JO SERVER PE STORED HOTA HAI.

08. GIT LOG
=>	GIT LOG WOH UTILITY HAI JISSE HUM POORA LOGGING HISTORY REVIEW KR SKTE HAI.

09. GIT CONFIG
=>  GIT HAME LOCAL, GLOBAL AUR SYSTEM PROJECTS PE USERS KE LIYE AVAILABLE BANATA HAI.
	JAISE LOCAL - SIRF CURRENT USER KE LIYE US PARTICULAR REPOSITORY, GLOBAL - SARE REPOSITORIES CURRENT USER KE LIYE
	AUR SYSTEM - EK TEAM MEIN SARE USERS KE LIYE.

10. GIT IGNORE - IS FILE MEIN HUM UN FILES KO ADD KR SKTE HAI JINE HUM REPOSITORY MEIN PUSH NAHI KARNA CHAHTE.
	FOR EX - .env file [confidential data]



2ND LARGEST NUMBER IN AN ARRAY
const array1 = [10,21,12,32,31,23]

function secondLargest(array) {
	let maxNum = Math.max(...array);
	let newArray = array.filter(num => num < maxNum);
	let newLargest = Math.max(...newArray)
	//console.log(newLargest);
}


secondLargest(array1);

// DELETE AN ELEMENT IN AN ARRAY
const array2 = array1.slice(1);
//console.log(array2)

// MAP FUNTION TO DOUBLE THE ELEMENTS
const array3 = array1.map(num => num*2);
//console.log(array3);

// DELETE ELEMENT FROM ORIGINAL ARRAY
array1.shift()
//console.log(array1);


// MAP
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// FILTER
const array1 = [1, 4, 9, 16];

// pass a function to filter
const map1 = array1.filter(x => x < 12);

console.log(map1);


// REDUCE
const array1 = [1,2,3,4,5];

// pass a function to reduce
const reduce1 = array1.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(reduce1);


// KEYS
const obj = {
	a: "string",
	b: 1,
	c: null
}

console.log(Object.keys(obj));


// EVERY
const value = (currentValue) => {
	currentValue > 12
}

const array1 = [1,2,6,19,12,13]

console.log(array1.every(value)); // False


// VALUES
const obj = {
	a: "string",
	b: 1,
	c: null
}

console.log(Object.values(obj));


// FOR EACH
const array1 = [10,20,30,40]

array1.forEach(x => console.log(x/2));


// SLICE

const array1 = [1,2,3,4,5,6]

const array2 = array1.slice(1,5)
console.log(array2);


// SPLICE

const array1 = ["one", "two", "three", "four"]

array1.splice(4, 0, "five")
console.log(array1);

// FIND INDEX

const array1 = [1,2,56,78,44]

console.log(array1.findIndex(element => element > 70));


// FIND INDEX OF

const array1 = ["one", "two", "three", "four", "five"]

console.log(array1.indexOf("four"));

// CONCAT

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = arr1.concat(arr2)
console.log(arr3)


const array1 = [1,32,43,52,55];

const findNumber = array1.find(num => num > 55)

console.log(findNumber);


// POP

const array1 = ["one", "two", "three", "four", "five"]

array1.pop();

console.log(array1);



// PUSH

const array1 = ["one", "two", "three", "four"]

array1.push("five");

console.log(array1);


// FOR IN vs FOR OF

const array1 = [1,2,3];
 

for (let i in array1) {
	console.log(i); // logs keys
}

for (let i of array1) {
	console.log(i) // logs values
}

// CHARAT

const sentence = 'Hello World';
console.log(`${sentence.charAt(2)}`);


// INCLUDES
const array1 = ["one", "two", "three", "four"]

console.log(array1.includes("two")); // True


// LAST INDEX OF

const sentence = 'Hello, John Doe, how are you ?';
console.log(`${sentence.lastIndexOf("Doe")}`);


// PADEND
const str = "Hey";
console.log(str.padEnd(7, "Hi"));


// PADSTART

const number = "5"

console.log(number.padStart(2, "0"))


// REPLACE

const str = "Apple";

console.log(str.replace("Apple", "Mango"));

// SPLIT

const str = "Hello World";

console.log(str.split(' '));


// SUBSTRING

const str = "Hey Man"

console.log(str.substring(0,3))

// TRIM

const str = " Hey Man "

console.log(str.trim());


// TOLOWERCASE

const str = "SANKALP";

console.log(str.toLowerCase());

// TOUPPERCASE

const str = "sankalp";

console.log(str.toUpperCase());



// PACKAGE.JSON

DEPENDENCIES AND SCRIPTS REQUIRED FOR THE PROJECT

// COMPONENTS

ALL THE COMPONENTS MAKE UP TO BUILD AN COMPLETE APPLICATION
1. STATELESS FUNCTION COMPONENT
2. STATEFUL CLASS COMPONENT

// FUNCTIONAL COMPONENTS

JAVASCRIPT COMPONENTS WHICH TAKES INPUT OF PROPERTIES AND RETURNS THE HTML THAT DESCRIBES THE UI.

// CLASS COMPONENTS

OPTIONALLY TAKES PROPERTIES AS INPUT AND RETURNS THE HTML. IT MAINTAINS AN PRIVATE INTERNAL STATE.

// ADVANTAGE ONE OVER THE OTHER
USE FUNTIONAL COMPONENTS

// BIND 
1. BINDING IN RENDER METHOD
2. BINDING IN ARROW FUNCTION
3. BINDING IN THE CONSTRUCTOR
4. CLASS PROPERTY AS ARROW FUNC


// REACT LIFE CYCLE METHODS

1. MOUNTING
	- Constructor() 
	- getDerivedStateFromProps()
	- render()
	- componentDidMount()

2. UPDATING
	- getDerivedStateFromProps()
	- shouldComponentUpdate()
	- render()
	- getSnapshotBeforeUpdate()
	- componentDidUpdate()

3. UNMOUNTING
	- componentWillUnmount()

// FRAGMENT

Faster than the div tag when we use <React.Fragment></React.Fragment>

// MEMO 

Performance boosting when renders same result with same given PROPERTIES

// REFS 

Helps in accessing DOM



// NODE PROJECT SETUP WITH ES6 & BABEL
https://github.com/SwamiSankalp/node-express-es6


*/