/*Repeating code is discouraged due to redundancy and readability issues. Functions offer a concise and modular solution, enhancing code organization, reusability, and ease of maintenance in programming.*/
// console.log("Hi, I am Sachin.");
// console.log("Hi, I am Sachin.");
// console.log("Hi, I am Sachin.");
// console.log("Hi, I am Sachin.");
// console.log("Hi, I am Sachin.");


//So, the best way is to create function instead of doing the above thing

function printMessage() {
    console.log("Hi, I am Sachin.");
}

// Call the function multiple times
// printMessage();
// printMessage();
// printMessage();
// printMessage();
// printMessage();


// --------------------------------------------------------------------------
// Adding two numbers

// function addTwoNums(num1, num2) { //formal Parameters / Parameters
//     console.log(num1 + num2);
// }
// addTwoNums(3,2); //actual parameter/ Arguments

// function addTwoNums(num1, num2) { //formal Parameters / Parameters
//     // console.log(num1 + num2);
//     let result = num1 + num2;
//     return result;
// }
// console.log(addTwoNums(10,10));


function addTwoNums(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNums(10, 10));
