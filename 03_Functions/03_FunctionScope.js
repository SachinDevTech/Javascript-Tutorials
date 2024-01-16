if (true) {
    let a = 10;
    const b = 20;
    var c = 40;
}
// console.log(a); //a is not defined because the scope is inside the curly braces.
// console.log(b); //b is not defined because the scope is inside the curly braces.
console.log(c); // In case of c, the variable has global scope so it'll print the value of c = 30

// ------------------------------------Child fxn call by parent------------------------------------
function parent() {
    let value = 30;

    function child() {
        value = 50;
    }

    // Call the child function to modify the value
    child();

    console.log(value); // Now it will print 50
}

// Call the parent function to initiate the process
parent();
