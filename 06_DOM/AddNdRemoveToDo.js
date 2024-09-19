console.log("JS Execution started!");
//function to create the todo
// function addToDo() {
//   let getInpVal = document.querySelector("input");
//   const value = getInpVal.value;
//   console.log(value);
//   const newElement = document.createElement("div");
//   newElement.innerHTML = value;
//   document.querySelector("body").appendChild(newElement);
// }


//function has to remove the todo functionality
function addToDo() {
  let getInpVal = document.querySelector("input");
  const value = getInpVal.value;
  console.log(value);
  const newElement = document.createElement("div");
  newElement.innerHTML = "<div>" + value + "</div><button   onclick='removeToDo(this)'>Remove</button>"
  document.querySelector("body").appendChild(newElement);
}

//function getting the current elem and removing it
function removeToDo(element) {
  element.parentElement.remove();
}