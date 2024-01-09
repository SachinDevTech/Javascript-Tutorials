/*
In JavaScript, there are several data types used to represent different kinds of values. These data types can be categorized into two main groups: primitive types and non-primitive types.

### Primitive Data Types:
1. **Number: Represents numeric data types, including integers and floating-point numbers.
2. **String:** Represents sequences of characters, enclosed within single (' ') or double (" ") quotes.
3. **Boolean:** Represents a logical entity and can have two values: `true` or `false`.
4. **Null:** Represents an intentional absence of any object value.
5. **Undefined:** Represents a variable that has been declared but hasn't been assigned a value.
6. **Symbol (added in ES6):** Represents a unique and immutable value, often used as object property keys.




### Non-Primitive Data Type:
1. **Object:** 
Represents a collection of key-value pairs and is used to store various data and more complex entities. Objects can be created with curly braces `{}` or via constructors like `new Object()`.

JavaScript is a dynamically typed language, which means variables can hold values of any data type without specifying the type explicitly. Additionally, JavaScript has methods and operators to manipulate these data types dynamically during runtime. */








//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
