# Projects related to DOM

## Projects Link:
[Click Here to get all the Projects we've made.](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) 

# Solution Code

## Project - 1 (Basic Method)

```javascript
console.log("Hey, there!");
const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

boxes.forEach(function (box) {
    console.log(boxes);
    box.addEventListener('click', function (event) {
        console.log(event);
        // console.log(eventts.target);
        if (event.target.id === "grey") {
            document.body.style.backgroundColor = event.target.id;
        }
        else if (event.target.id === "pink") {
            document.body.style.backgroundColor = event.target.id;
        }
        else if (event.target.id === "blue") {
            document.body.style.backgroundColor = event.target.id;
        }
        else {
            document.body.style.backgroundColor = event.target.id;
        }
    });
});
```

## Project - 1 (Best/Optimized method)

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.body;

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const color = event.target.id;
        body.style.backgroundColor = color;
    });
});
```