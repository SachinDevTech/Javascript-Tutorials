const YTcourse = {
    Skill: "Web Development",
    Instructor: "Hitesh Sir",
    price: 999
};
// console.log(YTcourse.Instructor);

// Now you can de structure your object
const { price } = YTcourse;
console.log(price); //Will print price present in object

// You also can change the key name

const { Instructor: Teacher } = YTcourse; //Key name is changed
console.log(Teacher); //Hitesh Sir will be print

// ----------------------------------------------------------------------

/* JSON: Stands for JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is a text format that is language-independent, but it is widely used with JavaScript. JSON represents data as key-value pairs, where each key is a string and each value can be a string, number, boolean, array, or another JSON object. */


//JSON Representation:
{//JSON
    // Skill: "Web Development",
    // Instructor: "Hitesh Sir",
    // price: 999,
    // isThisJSON : true
}

[//Also JSON
    {},
    {},
    {}
]