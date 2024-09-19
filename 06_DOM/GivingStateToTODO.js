console.log("JS is working fine!");

let todos = [];

// Function to add a new todo item
function addToDo() {
    const inputValue = document.querySelector("input").value;
    if (inputValue.trim() !== "") {
        todos.push({
            title: inputValue
        });
        document.querySelector("input").value = ""; // Clear input field after adding todo
        render();
    }
}

// Function to remove a todo by index
function removeToDo(index) {
    todos.splice(index, 1); // Remove the todo item from the array by its index
    render(); // Re-render the todo list
}

// Function to render the todo list
function render() {
    document.querySelector("#todos-id").innerHTML = ""; // Clear the existing list
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        let divElem = document.createElement("div");
        let spanElem = document.createElement("span");
        let btnElem = document.createElement("button");

        spanElem.innerHTML = todo.title; // Display the todo title
        btnElem.innerHTML = "Delete"; // Set button text to "Delete"

        // Add an event listener to remove the todo when clicked
        btnElem.onclick = function () {
            removeToDo(i);
        };

        divElem.appendChild(spanElem); // Add the span (todo text) to the div
        divElem.appendChild(btnElem); // Add the delete button to the div

        document.querySelector("#todos-id").appendChild(divElem); // Append the todo item to the container
    }
}