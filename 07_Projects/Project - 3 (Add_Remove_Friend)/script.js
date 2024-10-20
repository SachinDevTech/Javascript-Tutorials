// Method - 1: Using flag method
// let headingThree = document.querySelector("h3");
// let mainBtn = document.querySelector("#main-btn");
// let flag = 0;

// document.addEventListener("click", () => {
//     if (flag === 0) {
//         headingThree.innerHTML = "Friend";
//         headingThree.style.color = "green";
//         mainBtn.innerHTML = "Remove Friend";
//         flag = 1;
//     } else {
//         headingThree.innerHTML = "Stranger";
//         headingThree.style.color = "red";
//         mainBtn.innerHTML = "Add Friend";
//         flag = 0;
//     }
// });

// // Method - 2: Using condtitional methods
const statusText = document.querySelector(".status");
const mainBtn = document.querySelector(".main-btn");

mainBtn.addEventListener("click", () => {
    const isFriend = statusText.innerHTML === "Friend";

    statusText.innerHTML = isFriend ? "Stranger" : "Friend";
    statusText.style.color = isFriend ? "red" : "green";
    mainBtn.innerHTML = isFriend ? "Add Friend" : "Remove Friend";
});
