// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const arr1 = ["sachin", "kareena", "meenu", "you all"];
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr1, arr2, typeof (arr1), typeof (arr2));

console.log(arr1[0], arr2[2]);

// -------------------------------------------------------------
const arr3 = [1, 2, 3, 4, 5, 6, 7];
arr3.push(8);
arr3.pop();
arr3.unshift(0);
arr3.shift();
console.log(arr3);


// --------------------------------------------------------------
const arr4 = [10, 20, 30, 40];
const newArr4 = arr4.join(); //returns this new array as string
console.log(arr4);
console.log(typeof (newArr4));

// --------------------------------------------------------------
/* slice vs splice: `splice` modifies array in-place, adding/removing elements. `slice` creates a new array, extracting a portion without modifying original.*/

const arr5 = [8,9,7,6,4,5,3];
console.log("A", arr5);
const newArr5 = arr5.slice(0,4); //sliced array is assigned to newArr5 variable
console.log(newArr5);
console.log("B", arr5 ); //"No change is made to the actual array"


// ----------------------------------------------------------------
const arr6 = [6,4,5,3];
console.log("C", arr6);
const newArr6 = arr6.splice(0,2); //sPliced array is assigned to newArr5 variable
console.log(newArr6);
console.log("D", arr6); //"change is made to the actual array OR MODIFIED"

// ----------------------------------------------------------------