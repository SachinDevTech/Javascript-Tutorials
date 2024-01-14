/* Stack (Primitive Data type) & Heap (Non-Primitive Datatype) */

// Primitive Data Type Analogy
let myYoutubeName = "CodeCurrents";
let anotherChannel = "PCM By Gaurav Bhai";
anotherChannel = "ChaiOrCode";

// Analysing primitive conditions
console.log(myYoutubeName); //actual variable so "CodeCurrents" should be printed because change is made in copy
console.log(anotherChannel); //the reference of myYoutubeName is passed to it as a copy and then again "ChaiOrCode" is written.


// Analyzing non-primitive data type
let userOne = {//this will stored in Heap and changes made into the heap itself so value will change.
    email: "Sachin@gmail.com",
    upi: "amieni212@ybl"
};

let userTwo = userOne;
userTwo.email = "gaurav@gmail.com";

console.log(userOne.email); //same value "gaurav@gmail.com" because both variables are pointing to the same location in the heap.
console.log(userTwo.email); //same value "gaurav@gmail.com" because both variables are pointing to the same location in the heap.