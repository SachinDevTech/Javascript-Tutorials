const arr = [1,2,3,4,[5,6,7,[8,9,10,[11,12,13,[14,15]]]]];
console.log(arr);

const flattened_arr = arr.flat(6);
console.log(flattened_arr);


// -------------------------------------------------------
console.log(Array.isArray("Sachin Kumar.")); //false because string input.
console.log(Array.from("Gaurav Yadav.")); //will create and return an array of chars
console.log(Array.from({name: "Gulshan Yadav."})); //Interesting because returns empty array.


// -------------------------Creating an array from variables data-----------------------------
let marks1 = 99;
let marks2 = 95;
let marks3 = 91;

console.log(typeof Array.of(marks1, marks2, marks3));