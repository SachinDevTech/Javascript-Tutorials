const clock = document.getElementById("clock");

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString(); //O/P: 5:09:04 PM

    //clock.innerHTML = date.toLocaleDateString(); //O/P: 1/19/2024

    //clock.innerHTML = date.toDateString(); //has this kind of o/p: "Fri Jan 19 2024"

    // clock.innerHTML = date.toISOString(); //has this kind of o/p: "2024-01-19T11:36:38.890Z"

    //clock.innerHTML = date.toTimeString(); //"17:06:05 GMT+0530 (India Standard Time)" has this kind of O/P.
}, 1000);