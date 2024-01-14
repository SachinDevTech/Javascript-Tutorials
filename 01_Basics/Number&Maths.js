let marks = 90;
const num1 = new Number(96);
console.log(marks, num1); //Output : 100 [Number: 100]

const balance1 = new Number(127.12);
console.log(balance1.toString(), typeof (balance1));







// Codes by H - Sir during JS Learning

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //en-IN to convert indian currency representation 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
console.log(Math.round(4.6)); //as usually we round off the values
console.log(Math.ceil(4.2)); //choosing top values
console.log(Math.floor(4.9)); //choosing lower value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); //generates value from 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)