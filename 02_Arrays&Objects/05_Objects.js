// const myDetails = new Object(); //singleton object

const instaUser = {}; //non singleton object

instaUser.id = "abcd123";
instaUser.name = "Sachin";
instaUser.isLoggedIn = false;
console.log(instaUser);
console.log(Object.keys(instaUser)); //By using this we extracts keys in an object and the datatype is an array.
console.log(Object.values(instaUser)); //By using this we extracts values in an object and the datatype is an array.  
console.log(Object.entries(instaUser)); //returns an array of different key-value pair array [['id', 'abcd123'],[and so on]]
// -------------------------------------------------------------------------------------------------------------
// Object nesting
const RegularUser = {
    email: "sachin@google.com",
    moreDetails: {
        address: "Raipur",
        name: {
            fName: "Gaurav",
            lName: "Yadav"
        }
    }
}

console.log(RegularUser); //prints whole object
console.log(RegularUser.moreDetails); //Extraction of details using chaining methodology
console.log(RegularUser.moreDetails.name); //more deep extraction
console.log(RegularUser.moreDetails.name.fName); //deepest extraction from the defined object


// --------------------------------------------------------------------------------------
// How to merge objects

const obj1 = { 0: "A", 1: "B" };
const obj2 = { 2: "C", 3: "D" };
//console.log(obj1, obj2); //this method will push obj2 inside obj1 as same problem we have tackled in array

//So, Spread concept is again helping us to merge these objects effectively - Best Method
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // returns key values pairs in a single object


// ----------------------------------------------------------------------------------------------------------

//Value from database come in the form of array of objects

const users = [
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 2,
        email: "g@gmail.com",
    }
]
console.log(users[0].email); //extracts value from first object present in an object - Zero Base Indexing
console.log(users[1].id); //extracts value from second object present in an object

// ----------------------------------------------------------------------------------------------------------
