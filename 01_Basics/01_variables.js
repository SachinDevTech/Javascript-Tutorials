const accountID = 54604;
let accountEmail = "sachindevtech@gmail.com";
var name = "Sachin Kumar";
accountCity = "Agra";

//checking assignment of values is possible to const variable in JS
//accountID = 1223; //you'll see assignment to const variable is not possible

//now assigning different values to all other variables

accountEmail = "skdevtech@gmail.com";
name = "Sachin Kumar Yadav";
accountCity = "Patna"

//either console.log them one by one to all or at once using console.table([]) like as:

console.table([name, accountEmail, accountID, accountCity]);


/* ..NOTE..

    Prefer not to use "var" as a variable... Use const and let instead because of issue in block scope and functional scope.

    The choice between `const`, `let`, and `var` depends on the scope and mutability required for the variable. `const` should be used for values that won't change. `let` is suitable for variables that might be reassigned, and `var`, though older, has a wider scope (function-scoped) compared to `let` and can sometimes lead to unexpected behavior, so it's often preferable to use `const` or `let` for better code maintainability and predictability.
*/ 