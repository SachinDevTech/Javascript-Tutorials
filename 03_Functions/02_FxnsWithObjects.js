function calculateCardPrice0(num1) {/*this function can't take values more than one as it is explicitely told*/
    return num1; // will only return one and first value from an argument passed
}
// console.log(calculateCardPrice(2)); 
console.log(calculateCardPrice0(10, 30));


// ----------------SPREAD ON OBJECTS------------------------
function calculateCardPrice(...num) {
    return num; // will return whole arguments passed durung function call 
}
console.log(calculateCardPrice(2, 1, 4, 3, 5)); //you may give arguments as much as possible

//-----------------------Interview QnA-----------------------------------
function takeArgs(val1, val2, ...values) {
    return values;
}
console.log(takeArgs(1, 2, 3, 4, 5)); //1,2 is assigned to val1 and val2 and rest are returned in array due to spread


// ----------------------------Object is passed as an argument------------------------------------------

const user = {
    username: "Hrishabh Yadav",
    isLoyal: true
}
function handleObject(Object_is_Passed) {
    return `Hey, user ${Object_is_Passed.username} is my ${Object_is_Passed.isLoyal} friend.`
}
console.log(handleObject(user));

// Also can be passed like this:
// console.log(handleObject(
//     {
//         username: "Hrishabh Yadav",
//         isLoyal: true
//     }))