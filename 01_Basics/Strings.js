let fName = "Sachin";
let lName = "Kumar";
console.log(fName + " " + lName); //this is old and inefficient method for concat
// ------------------------------------------------------------------------------

//Best Method for conacatenation use backticks `` or we called placeholders as well.
console.log(`My first name is ${fName} and the last is ${lName}.`);

//Strings are Primitve data type but if we make it as:

const myName = new String("Sachin Kumar");




// console.log(myName[0]);
// console.log(myName.__proto__);


// console.log(myName.length);
// console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('t'));

const newString = myName.substring(0, 4)
console.log(newString);

const anotherString = myName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(myName.split('-'));