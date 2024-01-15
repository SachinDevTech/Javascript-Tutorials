// There are two ways to decalre object:- 1: constructor. 2: Literals 

/* "Singleton object: When object is created by constructor function, if with literals then not singleton object" i.e. Object.create */

//Object Literals

const JS_user = {
    name: "Sachin",
    age: 21,
    college: "NIT Raipur",
    "full name": "Sachin Kumar", //By default all keys are treated as string.
}

console.log(JS_user.name); //Method-1: to access values from objects
console.log(JS_user["full name"]); /* Method-2: to access rubbish variables like "full name", as because there is a space between full and name. Also it is the best method to access the values. */


/* Interviewer may ask questions like this */
const mySymb = Symbol("Key1"); // I wanna add symbols in my object as symbol data type

const New_User = {
    name: "Ashish",
    age: 24,
    /*if you'll declare like this then it's data type is "String" but i want Symbol so i will wrap my key in sqaure brackets "[]" and then can access as Symbol datatype*/
    // mySymb: "I am a Symbol but my datatype is string", 
    // -------------------------------------
    [mySymb]: "I am a truly a Symbol.",
    college: "NIT Raipur",
    "full name": "Ashish K", //By default all keys are treated as string.
}

console.log(New_User[mySymb]);
