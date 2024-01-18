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
    })
})