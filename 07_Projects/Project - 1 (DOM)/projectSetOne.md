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
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./styles.css" />
    <style>
      body {
        transition: background-color 0.5s ease-in-out;
      }
      .canvas {
        text-align: center;
        padding: 20px;
        font-family: 'Arial', sans-serif;
      }
      h1 {
        margin-bottom: 20px;
      }
      .box {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 5px;
        cursor: pointer;
      }
      #grey { background-color: #808080; }
      #pink { background-color: #ffc0cb; }
      #blue { background-color: #87ceeb; }
      #yellow { background-color: #ffff00; }
    </style>
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="box" id="grey"></span>
      <span class="box" id="pink"></span>
      <span class="box" id="blue"></span>
      <span class="box" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script>
      const boxes = document.querySelectorAll(".box");
      const body = document.querySelector("body");

      boxes.forEach(function (box) {
        box.addEventListener('click', function (event) {
          const color = event.target.id;
          body.style.backgroundColor = color;
        });
      });
    </script>
  </body>
</html>

```