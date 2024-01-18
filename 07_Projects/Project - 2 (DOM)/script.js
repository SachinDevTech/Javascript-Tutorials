const form = document.querySelector('form');
const resetButton = document.querySelector('#resetButton');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please Enter a valid height!";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please Enter a valid weight!";
    } else{
       const bmi =  (weight / ((height * height)/10000) ).toFixed(2);
       //lets make a result
       results.innerHTML = `Your BMI is: <span> ${bmi} </span>`;
    }


})
resetButton.addEventListener('click', function () {
    form.reset();
    results.innerHTML = '';
});