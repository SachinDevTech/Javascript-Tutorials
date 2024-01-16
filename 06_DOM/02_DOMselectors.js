/*In web development, the Document Object Model (DOM) is a programming interface that represents the structure of a document as a tree of objects. DOM selectors are methods to access and manipulate elements within this tree. NodeList and HTMLCollection are both collections of nodes, representing a list of elements. Here's an explanation and some code examples using JavaScript: */

//DOM Selectors:

/*
getElementById:

Returns a reference to the element with the specified ID.
//Example: Get element with ID 'myElement' */
const elementById = document.getElementById('myElement');

// --------------------------------------------

/*
getElementsByClassName:

Returns a collection of elements with the specified class name.
//Example: Get elements with class 'myClass' */
const elementsByClass = document.getElementsByClassName('myClass');

// ---------------------------------------------

/*
getElementsByTagName:

Returns a collection of elements with the specified tag name.
//Example: Get all 'p' elements
 */
const pElements = document.getElementsByTagName('p');

// --------------------------------------------
/*
getElementsByName:

Returns a collection of elements with the specified name attribute.
// Example: Get elements with name 'username' */
const usernameElements = document.getElementsByName('username');
// ---------------------------------------------

/*
querySelector:

/*Returns the first element that matches a specified CSS selector.
//Example: Get the first element with class 'myClass'*/
const firstElement = document.querySelector('.myClass');

// ---------------------------------------------
/*
querySelectorAll:

Returns a static NodeList containing all elements that match a specified CSS selector.
// Example: Get all elements with class 'myClass'*/
const allElements = document.querySelectorAll('.myClass');


// NodeList and HTML Collection
/* Both NodeList and HTMLCollection are collections of nodes or elements, but there are some differences. NodeList is generally the result of querySelectorAll, and HTMLCollection is usually the result of methods like getElementsByClassName or getElementsByTagName. */



//NodeList:

/* A collection of nodes (elements) returned by various DOM methods.
// Example: Get all 'p' elements and iterate over them */
const nodeList = document.querySelectorAll('p');
nodeList.forEach((element) => {
    // Do something with each 'p' element
});



//HTMLCollection:

/* A live collection of elements with a particular name, tag name, or class.
// Example: Get elements with class 'myClass' and iterate over them */
const htmlCollection = document.getElementsByClassName('myClass');
for (let i = 0; i < htmlCollection.length; i++) {
    // Do something with each element having the class 'myClass'
}