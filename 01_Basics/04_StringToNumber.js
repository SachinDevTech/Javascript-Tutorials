/* ********************** Operations *************************** */

let str1 = "Hey, ";
let str2 = "Sachin Kumar";
console.log(str1 + str2);

/* Important to see on some mathematical and string operations but these are not used in corporate world... */

console.log(1 + 3);
console.log("1" + 3);
console.log(1 + "3");
console.log(1 + 2 + "3"); //in this kinda situation first arithmetic operation is behaving like an expression so O/P: 33
console.log("1" + 2 + 3); // the whole input is treated as a string and concating them O/P: 123

// Some more unusual operations:

console.log(+true); //after type conversion while incrementing boolean value return 1
console.log(+""); //an empty string after incrementing return false => 0
// -----------------------------
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3);


// Post-Increment and Pre-Increment and also for decrement: Look at MDN